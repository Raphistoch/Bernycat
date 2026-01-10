'use client'

import { useState } from 'react'
import { LogIn, User, FileText, Calendar, Settings, LogOut, Ship } from 'lucide-react'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function MembrePage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Implement Supabase authentication
        // For now, just simulate login
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
        setEmail('')
        setPassword('')
    }

    if (!isLoggedIn) {
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

                {/* Login Form */}
                <section className="section-padding">
                    <div className="container-custom max-w-md mx-auto">
                        <Card className="p-8">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-berny-navy/10 rounded-full mb-4">
                                    <User className="w-8 h-8 text-berny-navy" />
                                </div>
                                <h2 className="text-2xl font-bold text-berny-navy">
                                    Connexion
                                </h2>
                            </div>

                            <form onSubmit={handleLogin} className="space-y-4">
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berny-blue focus:border-transparent outline-none transition-all"
                                        placeholder="votre@email.fr"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                        Mot de passe
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-berny-blue focus:border-transparent outline-none transition-all"
                                        placeholder="••••••••"
                                        required
                                    />
                                </div>

                                <div className="flex items-center justify-between text-sm">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="rounded" />
                                        <span className="text-gray-600">Se souvenir de moi</span>
                                    </label>
                                    <a href="#" className="text-berny-blue hover:text-berny-blue-dark">
                                        Mot de passe oublié ?
                                    </a>
                                </div>

                                <Button type="submit" variant="primary" className="w-full">
                                    <LogIn className="w-5 h-5 inline mr-2" />
                                    Se connecter
                                </Button>
                            </form>

                            <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                                <p className="text-gray-600 mb-4">
                                    Pas encore membre ?
                                </p>
                                <a href="/adhesion">
                                    <Button variant="outline" className="w-full">
                                        Devenir membre
                                    </Button>
                                </a>
                            </div>
                        </Card>
                    </div>
                </section>
            </div>
        )
    }

    // Dashboard for logged-in users
    return (
        <div>
            {/* Header */}
            <section className="gradient-bg section-padding text-white">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">
                                Bienvenue, {email.split('@')[0]} !
                            </h1>
                            <p className="text-xl text-white/90">
                                Membre actif depuis 2026
                            </p>
                        </div>
                        <Button
                            variant="secondary"
                            className="bg-white/20 hover:bg-white/30 border border-white/30"
                            onClick={handleLogout}
                        >
                            <LogOut className="w-5 h-5 inline mr-2" />
                            Déconnexion
                        </Button>
                    </div>
                </div>
            </section>

            {/* Dashboard */}
            <section className="section-padding">
                <div className="container-custom">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        <Card className="text-center">
                            <Ship className="w-12 h-12 mx-auto mb-4 text-berny-blue" />
                            <p className="text-3xl font-bold text-berny-navy mb-2">1</p>
                            <p className="text-gray-600">Berny enregistré</p>
                        </Card>

                        <Card className="text-center">
                            <Calendar className="w-12 h-12 mx-auto mb-4 text-berny-blue" />
                            <p className="text-3xl font-bold text-berny-navy mb-2">3</p>
                            <p className="text-gray-600">Événements à venir</p>
                        </Card>

                        <Card className="text-center">
                            <FileText className="w-12 h-12 mx-auto mb-4 text-berny-blue" />
                            <p className="text-3xl font-bold text-berny-navy mb-2">12</p>
                            <p className="text-gray-600">Documents disponibles</p>
                        </Card>
                    </div>

                    {/* Main Dashboard Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* My Berny */}
                        <Card>
                            <div className="flex items-center gap-3 mb-6">
                                <Ship className="w-6 h-6 text-berny-navy" />
                                <h2 className="text-2xl font-bold text-berny-navy">Mon Berny</h2>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Numéro de voile</span>
                                    <span className="font-semibold">FRA 1234</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Année</span>
                                    <span className="font-semibold">2020</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Port d'attache</span>
                                    <span className="font-semibold">La Rochelle</span>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full mt-6">
                                Modifier les informations
                            </Button>
                        </Card>

                        {/* Upcoming Events */}
                        <Card>
                            <div className="flex items-center gap-3 mb-6">
                                <Calendar className="w-6 h-6 text-berny-navy" />
                                <h2 className="text-2xl font-bold text-berny-navy">Mes Événements</h2>
                            </div>
                            <div className="space-y-4">
                                <div className="pb-4 border-b border-gray-200">
                                    <p className="text-sm text-berny-blue font-semibold mb-1">15 Février 2026</p>
                                    <p className="font-semibold text-berny-navy">Régate de Printemps</p>
                                    <p className="text-sm text-gray-600">Lac d'Annecy</p>
                                </div>
                                <div className="pb-4 border-b border-gray-200">
                                    <p className="text-sm text-berny-blue font-semibold mb-1">22 Mars 2026</p>
                                    <p className="font-semibold text-berny-navy">Stage de perfectionnement</p>
                                    <p className="text-sm text-gray-600">Port de La Rochelle</p>
                                </div>
                            </div>
                            <Button variant="outline" className="w-full mt-6">
                                Voir tous les événements
                            </Button>
                        </Card>

                        {/* Documents */}
                        <Card>
                            <div className="flex items-center gap-3 mb-6">
                                <FileText className="w-6 h-6 text-berny-navy" />
                                <h2 className="text-2xl font-bold text-berny-navy">Documents</h2>
                            </div>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span className="text-gray-700">Manuel Technique</span>
                                    <span className="text-berny-blue">→</span>
                                </a>
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span className="text-gray-700">Plans de Construction</span>
                                    <span className="text-berny-blue">→</span>
                                </a>
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span className="text-gray-700">Guide d'Entretien</span>
                                    <span className="text-berny-blue">→</span>
                                </a>
                            </div>
                            <Button variant="outline" className="w-full mt-6">
                                Tous les documents
                            </Button>
                        </Card>

                        {/* Settings */}
                        <Card>
                            <div className="flex items-center gap-3 mb-6">
                                <Settings className="w-6 h-6 text-berny-navy" />
                                <h2 className="text-2xl font-bold text-berny-navy">Paramètres</h2>
                            </div>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span className="text-gray-700">Informations personnelles</span>
                                    <span className="text-berny-blue">→</span>
                                </a>
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span className="text-gray-700">Modifier le mot de passe</span>
                                    <span className="text-berny-blue">→</span>
                                </a>
                                <a href="#" className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors">
                                    <span className="text-gray-700">Préférences de notification</span>
                                    <span className="text-berny-blue">→</span>
                                </a>
                            </div>
                            <Button variant="outline" className="w-full mt-6">
                                Gérer mon compte
                            </Button>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
