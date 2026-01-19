import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/headers'
import Stripe from 'stripe'
import { stripe } from '@/lib/stripe'
import { createClient } from '@/lib/supabase'

export async function POST(req: NextRequest) {
    const body = await req.text()
    const headersList = await headers()
    const signature = headersList.get('stripe-signature')

    if (!signature) {
        return NextResponse.json(
            { error: 'No signature' },
            { status: 400 }
        )
    }

    let event: Stripe.Event

    try {
        // Verify webhook signature
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (err: any) {
        console.error('Webhook signature verification failed:', err.message)
        return NextResponse.json(
            { error: `Webhook Error: ${err.message}` },
            { status: 400 }
        )
    }

    // Handle the event
    try {
        switch (event.type) {
            case 'checkout.session.completed': {
                const session = event.data.object as Stripe.Checkout.Session

                // Get user_id and membership_id from metadata
                const userId = session.metadata?.user_id
                const membershipId = session.metadata?.membership_id

                if (!userId || !membershipId) {
                    console.error('Missing metadata in checkout session')
                    break
                }

                // Update membership in database
                const supabase = await createClient()

                const startDate = new Date()
                const endDate = new Date()
                endDate.setFullYear(endDate.getFullYear() + 1) // +1 year

                const { error } = await supabase
                    .from('memberships')
                    .update({
                        status: 'active',
                        start_date: startDate.toISOString(),
                        end_date: endDate.toISOString(),
                        helloasso_payment_id: session.payment_intent as string,
                        helloasso_order_id: session.id,
                    })
                    .eq('id', membershipId)

                if (error) {
                    console.error('Error updating membership:', error)
                } else {
                    console.log(`Membership ${membershipId} activated for user ${userId}`)
                }

                break
            }

            case 'customer.subscription.deleted': {
                // Handle subscription cancellation if needed
                console.log('Subscription deleted:', event.data.object.id)
                break
            }

            default:
                console.log(`Unhandled event type: ${event.type}`)
        }

        return NextResponse.json({ received: true })
    } catch (error: any) {
        console.error('Error processing webhook:', error)
        return NextResponse.json(
            { error: 'Webhook processing failed' },
            { status: 500 }
        )
    }
}
