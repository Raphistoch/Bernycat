'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase-client'
import { User, Lock, Mail, LogOut, FileText, Calendar, Settings } from 'lucide-react'
import Card from '@/components/Card'
import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

export default function MembrePage() {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [user, setUser] = useState<any>(null)
    const router = useRouter()
    const supabase = createClient()

    // Check if user is already logged in
    useEffect(() => {
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user)
        })
    }, [])

    const handleAuth = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            if (isLogin) {
                const { data, error } = await supabase.auth.signInWithPassword({
                    email,
                    password,
                })
                if (error) throw error
                setUser(data.user)
                router.refresh()
            } else {
                const { data, error } = await supabase.auth.signUp({
                    email,
                    password,
                })
                if (error) throw error
                setError('Vérifiez votre email pour confirmer votre inscription !')
            }
        } catch (err: any) {
            setError(err.message || 'Une erreur est survenue')
        } finally {
            setLoading(false)
        }
    }

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        setUser(null)
        router.refresh()
    }

    if (user) {
        return (
            <div>
                {/* Header */}
                <section className="gradient-bg section-padding text-white text-center">
                    <div className="container-custom">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                            Espace Membre
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                            Bienvenue {user.email}
                        </p>
                    </div>
                </section>

                {/* Dashboard */}
                <section className="section-padding">
                    <div className="container-custom max-w-6xl">
                        {/* Quick Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            <Card className="text-center">
                                <User className="w-12 h-12 mx-auto mb-4 text-berny-blue" />
                                <h3 className="text-3xl font-bold text-berny-navy mb-2">Mon Berny</h3>
                                <p className="text-gray-600">Gérez votre bateau</p>
                            </Card>
                            <Card className="text-center">
                                <Calendar className="w-12 h-12 mx-auto mb-4 text-berny-blue" />
                                <h3 className="text-3xl font-bold text-berny-navy mb-2">3</h3>
                                <p className="text-gray-600">Événements à venir</p>
                            </Card>
                            <Card className="text-center">
                                <FileText className="w-12 h-12 mx-auto mb-4 text-berny-blue" />
                                <h3 className="text-3xl font-bold text-berny-navy mb-2">12</h3>
                                <p className="text-gray-600">Documents disponibles</p>
                            </Card>
                        </div>

                        {/* Main Content */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* My Berny */}
                            <Card>
                                <h2 className="text-2xl font-bold text-berny-navy mb-4 flex items-center gap-2">
                                    <User className="w-6 h-6" />
                                    Mon Berny
                                </h2>
                                <div className="space-y-3">
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-600">Numéro de voile</span>
                                        <span className="font-semibold">FRA 123</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b">
                                        <span className="text-gray-600">Année</span>
                                        <span className="font-semibold">2023</span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="text-gray-600">Port d'attache</span>
                                        <span className="font-semibold">La Forêt-Fouesnant</span>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full mt-4">
                                    Modifier les informations
                                </Button>
                            </Card>

                            {/* Upcoming Events */}
                            <Card>
                                <h2 className="text-2xl font-bold text-berny-navy mb-4 flex items-center gap-2">
                                    <Calendar className="w-6 h-6" />
                                    Événements à venir
                                </h2>
                                <div className="space-y-3">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <h3 className="font-semibold text-berny-navy">Régate de printemps</h3>
                                        <p className="text-sm text-gray-600">15 Mars 2026 - Bénodet</p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <h3 className="font-semibold text-berny-navy">Stage perfectionnement</h3>
                                        <p className="text-sm text-gray-600">22 Mars 2026 - Concarneau</p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <h3 className="font-semibold text-berny-navy">Assemblée générale</h3>
                                        <p className="text-sm text-gray-600">5 Avril 2026 - En ligne</p>
                                    </div>
                                </div>
                            </Card>

                            {/* Documents */}
                            <Card>
                                <h2 className="text-2xl font-bold text-berny-navy mb-4 flex items-center gap-2">
                                    <FileText className="w-6 h-6" />
                                    Documents
                                </h2>
                                <div className="space-y-2">
                                    <a href="/documents" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <h3 className="font-semibold text-berny-navy">Manuel du propriétaire</h3>
                                        <p className="text-sm text-gray-600">PDF - 285 KB</p>
                                    </a>
                                    <a href="/documents" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <h3 className="font-semibold text-berny-navy">Règles de classe</h3>
                                        <p className="text-sm text-gray-600">DOCX - 4.9 MB</p>
                                    </a>
                                    <a href="/documents" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                                        <h3 className="font-semibold text-berny-navy">Tous les documents</h3>
                                        <p className="text-sm text-gray-600">Accéder à la bibliothèque</p>
                                    </a>
                                </div>
                            </Card>

                            {/* Settings */}
                            <Card>
                                <h2 className="text-2xl font-bold text-berny-navy mb-4 flex items-center gap-2">
                                    <Settings className="w-6 h-6" />
                                    Paramètres
                                </h2>
                                <div className="space-y-3">
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <h3 className="font-semibold text-berny-navy">Email</h3>
                                        <p className="text-sm text-gray-600">{user.email}</p>
                                    </div>
                                    <div className="p-3 bg-gray-50 rounded-lg">
                                        <h3 className="font-semibold text-berny-navy">Adhésion</h3>
                                        <p className="text-sm text-gray-600">Valide jusqu'au 31/12/2026</p>
                                    </div>
                                    <Button variant="outline" className="w-full" onClick={handleSignOut}>
                                        <LogOut className="w-4 h-4 inline mr-2" />
                                        Se déconnecter
                                    </Button>
                                </div>
                            </Card>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    return (
        <div>
            {/* Header */}
            <section className="gradient-bg section-padding text-white text-center">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Espace Membre
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                        Connectez-vous pour accéder à votre espace personnel
                    </p>
                </div>
            </section>

            {/* Login/Signup Form */}
            <section className="section-padding">
                <div className="container-custom max-w-md mx-auto">
                    <Card className="p-8">
                        <div className="flex justify-center mb-6">
                            <div className="bg-berny-navy p-4 rounded-full">
                                <Lock className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        <div className="flex gap-2 mb-6">
                            <button
                                onClick={() => setIsLogin(true)}
                                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${isLogin
                                    ? 'bg-berny-navy text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                Connexion
                            </button>
                            <button
                                onClick={() => setIsLogin(false)}
                                className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${!isLogin
                                    ? 'bg-berny-navy text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                Inscription
                            </button>
                        </div>

                        <form onSubmit={handleAuth} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berny-blue focus:border-transparent"
                                        placeholder="votre@email.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Mot de passe
                                </label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berny-blue focus:border-transparent"
                                        placeholder="••••••••"
                                        required
                                        minLength={6}
                                    />
                                </div>
                            </div>

                            {error && (
                                <div className={`p-3 rounded-lg ${error.includes('Vérifiez') ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                                    <p className="text-sm">{error}</p>
                                </div>
                            )}

                            <Button
                                variant="primary"
                                className="w-full"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Chargement...' : isLogin ? 'Se connecter' : 'S\'inscrire'}
                            </Button>
                        </form>

                        {isLogin && (
                            <p className="text-center text-sm text-gray-600 mt-4">
                                <a href="#" className="text-berny-blue hover:underline">
                                    Mot de passe oublié ?
                                </a>
                            </p>
                        )}
                    </Card>
                </div>
            </section>
        </div>
    )
}
