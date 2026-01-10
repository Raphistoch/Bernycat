import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
    title: 'Berny - Dériveur de Tradition',
    description: 'Découvrez le dériveur Berny, tradition et performance depuis des générations. Rejoignez notre communauté de passionnés de voile.',
    keywords: 'berny, dériveur, voile, bateau, régate, navigation',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr">
            <body className="flex flex-col min-h-screen">
                <Navigation />
                <main className="flex-grow pt-16 md:pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
