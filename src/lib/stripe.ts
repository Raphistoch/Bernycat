import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY is not defined in environment variables')
}

// Initialize Stripe with secret key
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2025-12-15.clover',
    typescript: true,
})

// Stripe configuration
export const STRIPE_CONFIG = {
    currency: 'eur',
    membershipPrice: 2000, // 20.00 EUR in cents (à ajuster selon vos besoins)
    membershipName: 'Adhésion Annuelle Berny Cat',
    membershipDescription: 'Accès complet à l\'espace membre pour 1 an',
}
