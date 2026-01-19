import { createClient } from '@/lib/supabase-client'

export interface Membership {
    id: string
    user_id: string
    status: 'pending' | 'active' | 'expired' | 'cancelled'
    start_date: string | null
    end_date: string | null
    helloasso_payment_id: string | null
    helloasso_order_id: string | null
    amount: number | null
    created_at: string
    updated_at: string
}

export interface Profile {
    id: string
    email: string | null
    full_name: string | null
    boat_number: string | null
    boat_year: number | null
    home_port: string | null
    created_at: string
    updated_at: string
}

/**
 * Récupère l'adhésion active d'un utilisateur
 */
export async function getActiveMembership(userId: string): Promise<Membership | null> {
    const supabase = createClient()

    const { data, error } = await supabase
        .from('memberships')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'active')
        .gt('end_date', new Date().toISOString())
        .maybeSingle()

    if (error) {
        console.error('Error fetching membership:', error)
        return null
    }

    return data
}


/**
 * Vérifie si un utilisateur a une adhésion active
 */
export async function hasActiveMembership(userId: string): Promise<boolean> {
    const membership = await getActiveMembership(userId)
    return membership !== null
}

/**
 * Récupère le profil d'un utilisateur
 */
export async function getUserProfile(userId: string): Promise<Profile | null> {
    const supabase = createClient()

    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .maybeSingle()

    if (error) {
        console.error('Error fetching profile:', error)
        return null
    }

    return data
}


/**
 * Met à jour le profil d'un utilisateur
 */
export async function updateUserProfile(
    userId: string,
    updates: Partial<Omit<Profile, 'id' | 'created_at' | 'updated_at'>>
): Promise<Profile | null> {
    const supabase = createClient()

    const { data, error } = await supabase
        .from('profiles')
        .update(updates)
        .eq('id', userId)
        .select()
        .single()

    if (error) {
        console.error('Error updating profile:', error)
        return null
    }

    return data
}

/**
 * Crée une nouvelle adhésion (status: pending)
 */
export async function createPendingMembership(
    userId: string,
    amount: number
): Promise<Membership | null> {
    const supabase = createClient()

    const { data, error } = await supabase
        .from('memberships')
        .insert({
            user_id: userId,
            status: 'pending',
            amount: amount,
        })
        .select()
        .single()

    if (error) {
        console.error('Error creating membership:', error)
        return null
    }

    return data
}

/**
 * Active une adhésion après paiement
 */
export async function activateMembership(
    membershipId: string,
    stripePaymentId: string,
    stripeOrderId: string
): Promise<Membership | null> {
    const supabase = createClient()

    const startDate = new Date()
    const endDate = new Date()
    endDate.setFullYear(endDate.getFullYear() + 1) // +1 an

    const { data, error } = await supabase
        .from('memberships')
        .update({
            status: 'active',
            start_date: startDate.toISOString(),
            end_date: endDate.toISOString(),
            helloasso_payment_id: stripePaymentId,
            helloasso_order_id: stripeOrderId,
        })
        .eq('id', membershipId)
        .select()
        .single()

    if (error) {
        console.error('Error activating membership:', error)
        return null
    }

    return data
}

/**
 * Récupère toutes les adhésions d'un utilisateur
 */
export async function getUserMemberships(userId: string): Promise<Membership[]> {
    const supabase = createClient()

    const { data, error } = await supabase
        .from('memberships')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })

    if (error) {
        console.error('Error fetching memberships:', error)
        return []
    }

    return data || []
}

/**
 * Formate une date d'adhésion pour l'affichage
 */
export function formatMembershipDate(date: string | null): string {
    if (!date) return 'N/A'

    return new Date(date).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

/**
 * Calcule le nombre de jours restants avant expiration
 */
export function getDaysUntilExpiration(endDate: string | null): number {
    if (!endDate) return 0

    const now = new Date()
    const end = new Date(endDate)
    const diff = end.getTime() - now.getTime()

    return Math.ceil(diff / (1000 * 60 * 60 * 24))
}
