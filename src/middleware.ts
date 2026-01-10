import { NextResponse, type NextRequest } from 'next/server'
import { createClient } from '@/lib/supabase'

export async function middleware(request: NextRequest) {
    // This middleware can be used to protect routes
    // For now, it's a placeholder for future Supabase auth integration

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()

    // If accessing protected routes and not authenticated, redirect to login
    if (request.nextUrl.pathname.startsWith('/membre/dashboard') && !user) {
        return NextResponse.redirect(new URL('/membre', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/membre/:path*'],
}
