import { NextRequest, NextResponse } from 'next/server'
import { stripe, STRIPE_CONFIG } from '@/lib/stripe'
import { createClient } from '@/lib/supabase'
import { createPendingMembership } from '@/lib/membership'

export async function POST(req: NextRequest) {
    try {
        // Get authenticated user
        const supabase = await createClient()
        const { data: { user }, error: authError } = await supabase.auth.getUser()

        if (authError || !user) {
            return NextResponse.json(
                { error: 'Non authentifié' },
                { status: 401 }
            )
        }

        // Create pending membership in database
        const membership = await createPendingMembership(
            user.id,
            STRIPE_CONFIG.membershipPrice / 100 // Convert cents to euros
        )

        if (!membership) {
            return NextResponse.json(
                { error: 'Erreur lors de la création de l\'adhésion' },
                { status: 500 }
            )
        }

        // Get app URL from environment
        const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: STRIPE_CONFIG.currency,
                        product_data: {
                            name: STRIPE_CONFIG.membershipName,
                            description: STRIPE_CONFIG.membershipDescription,
                        },
                        unit_amount: STRIPE_CONFIG.membershipPrice,
                    },
                    quantity: 1,
                },
            ],
            customer_email: user.email,
            client_reference_id: user.id,
            metadata: {
                user_id: user.id,
                membership_id: membership.id,
            },
            success_url: `${appUrl}/membre?success=true`,
            cancel_url: `${appUrl}/membre?canceled=true`,
        })

        return NextResponse.json({ url: session.url })
    } catch (error: any) {
        console.error('Stripe checkout error:', error)
        return NextResponse.json(
            { error: error.message || 'Erreur lors de la création de la session de paiement' },
            { status: 500 }
        )
    }
}
