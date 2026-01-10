import { Calendar, Newspaper, UserPlus, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'
import Card from '@/components/Card'
import Button from '@/components/Button'

const news = [
    {
        date: '15 Janvier 2026',
        title: 'Nouvelle saison de régates',
        excerpt: 'Le calendrier 2026 des régates Berny est disponible. Inscrivez-vous dès maintenant !',
    },
    {
        date: '8 Janvier 2026',
        title: 'Assemblée générale',
        excerpt: 'Retour sur l\'AG 2025 et présentation des projets pour la nouvelle année.',
    },
    {
        date: '20 Décembre 2025',
        title: 'Championnat d\'hiver',
        excerpt: 'Félicitations aux participants du championnat d\'hiver ! Résultats complets disponibles.',
    },
]

const events = [
    {
        date: '15 Février 2026',
        title: 'Régate de Printemps',
        location: 'Lac d\'Annecy',
        time: '9h00 - 17h00',
    },
    {
        date: '22 Mars 2026',
        title: 'Stage de perfectionnement',
        location: 'Port de La Rochelle',
        time: '10h00 - 16h00',
    },
    {
        date: '10 Avril 2026',
        title: 'Rassemblement national Berny',
        location: 'Golfe du Morbihan',
        time: 'Week-end complet',
    },
]

export default function CommunautePage() {
    return (
        <div>
            {/* Header */}
            <section className="gradient-bg section-padding text-white text-center">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Communauté Berny
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                        Rejoignez une communauté passionnée de navigateurs et participez à nos événements
                    </p>
                </div>
            </section>

            {/* Actualités */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="flex items-center gap-3 mb-8">
                        <Newspaper className="w-8 h-8 text-berny-navy" />
                        <h2 className="text-4xl font-bold text-berny-navy">Actualités</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {news.map((item, index) => (
                            <Card key={index}>
                                <p className="text-sm text-berny-blue font-semibold mb-2">
                                    {item.date}
                                </p>
                                <h3 className="text-xl font-bold text-berny-navy mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {item.excerpt}
                                </p>
                                <button className="text-berny-blue font-semibold hover:text-berny-blue-dark transition-colors">
                                    Lire la suite →
                                </button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Événements */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="flex items-center gap-3 mb-8">
                        <Calendar className="w-8 h-8 text-berny-navy" />
                        <h2 className="text-4xl font-bold text-berny-navy">Événements à venir</h2>
                    </div>

                    <div className="space-y-4">
                        {events.map((event, index) => (
                            <Card key={index} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 mb-2">
                                        <Calendar className="w-4 h-4 text-berny-blue" />
                                        <p className="text-sm font-semibold text-berny-blue">
                                            {event.date}
                                        </p>
                                    </div>
                                    <h3 className="text-2xl font-bold text-berny-navy mb-2">
                                        {event.title}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row gap-3 text-gray-600">
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4" />
                                            <span>{event.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="w-4 h-4" />
                                            <span>{event.time}</span>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="outline" className="md:flex-shrink-0">
                                    S'inscrire
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Adhésion CTA */}
            <section className="section-padding bg-berny-navy text-white">
                <div className="container-custom">
                    <Card className="bg-white/10 backdrop-blur-lg border-white/20 text-center" hover={false}>
                        <UserPlus className="w-16 h-16 mx-auto mb-6 text-white" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Devenez membre de l'association
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Accédez à tous les événements, bénéficiez de tarifs préférentiels et rejoignez une communauté passionnée
                        </p>
                        <Link href="/adhesion">
                            <Button variant="secondary" className="bg-white text-berny-navy hover:bg-gray-100">
                                Découvrir les avantages
                            </Button>
                        </Link>
                    </Card>
                </div>
            </section>
        </div>
    )
}
