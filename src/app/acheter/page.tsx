import { ShoppingBag, Ship, Euro, Calendar, Mail } from 'lucide-react'
import Link from 'next/link'
import Card from '@/components/Card'
import Button from '@/components/Button'

const usedBoats = [
    {
        year: '2020',
        condition: 'Excellent état',
        price: '8 500 €',
        location: 'La Rochelle',
        description: 'Berny en excellent état, peu navigué, avec remorque incluse.',
    },
    {
        year: '2018',
        condition: 'Très bon état',
        price: '7 200 €',
        location: 'Lorient',
        description: 'Voiles récentes, coque en parfait état, entretien régulier.',
    },
    {
        year: '2015',
        condition: 'Bon état',
        price: '5 800 €',
        location: 'Marseille',
        description: 'Idéal pour débuter, quelques marques d\'usage normales.',
    },
]

export default function AcheterPage() {
    return (
        <div>
            {/* Header */}
            <section className="gradient-bg section-padding text-white text-center">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Acheter un Berny
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                        Trouvez votre dériveur Berny, neuf ou d'occasion
                    </p>
                </div>
            </section>

            {/* Split Section - Neuf / Occasion */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Acheter Neuf */}
                        <Card className="text-center p-8 md:p-12">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-berny-navy/10 rounded-full mb-6">
                                <Ship className="w-10 h-10 text-berny-navy" />
                            </div>
                            <h2 className="text-3xl font-bold text-berny-navy mb-4">
                                Acheter Neuf
                            </h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                Commandez votre Berny neuf directement auprès de nos constructeurs agréés
                            </p>
                            <div className="bg-berny-blue/10 rounded-lg p-6 mb-6">
                                <p className="text-sm text-gray-600 mb-2">À partir de</p>
                                <p className="text-4xl font-bold text-berny-navy mb-2">19 000 € (TBD)</p>
                            </div>
                            <ul className="text-left space-y-3 mb-8">
                                <li className="flex items-start gap-2">
                                    <span className="text-berny-blue mt-1">✓</span>
                                    <span className="text-gray-700">Garantie constructeur 2 ans</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-berny-blue mt-1">✓</span>
                                    <span className="text-gray-700">Fabrication française</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-berny-blue mt-1">✓</span>
                                    <span className="text-gray-700">Personnalisation des couleurs</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-berny-blue mt-1">✓</span>
                                    <span className="text-gray-700">Options et accessoires au choix</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-berny-blue mt-1">✓</span>
                                    <span className="text-gray-700">Offre de maintenance et hivernage</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-berny-blue mt-1">✓</span>
                                    <span className="text-gray-700">Possibilité d'essai</span>
                                </li>
                            </ul>
                            <a href="mailto:vente@berny.fr">
                                <Button variant="primary" className="w-full">
                                    <Mail className="w-5 h-5 inline mr-2" />
                                    Demander un devis
                                </Button>
                            </a>
                        </Card>

                        {/* Acheter d'Occasion */}
                        <Card className="text-center p-8 md:p-12">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-berny-blue/10 rounded-full mb-6">
                                <ShoppingBag className="w-10 h-10 text-berny-blue" />
                            </div>
                            <h2 className="text-3xl font-bold text-berny-navy mb-4">
                                Acheter d'Occasion
                            </h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                Découvrez notre sélection de Berny d'occasion vérifiés par nos experts
                            </p>
                            <div className="bg-berny-navy/10 rounded-lg p-6 mb-6">
                                <p className="text-sm text-gray-600 mb-2">Prix moyen</p>
                                <p className="text-4xl font-bold text-berny-navy mb-2">6 500 €</p>
                                <p className="text-sm text-gray-600">Disponibilité immédiate</p>
                            </div>
                            <ul className="text-left space-y-3 mb-8">
                                <li className="flex items-start gap-2">
                                    <span className="text-berny-blue mt-1">✓</span>
                                    <span className="text-gray-700">Bateaux vérifiés et certifiés</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-berny-blue mt-1">✓</span>
                                    <span className="text-gray-700">Historique d'entretien disponible</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-berny-blue mt-1">✓</span>
                                    <span className="text-gray-700">Assistance à l'achat</span>
                                </li>
                            </ul>
                            <a href="#occasions">
                                <Button variant="secondary" className="w-full">
                                    Voir les annonces
                                </Button>
                            </a>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Liste des Occasions */}
            <section id="occasions" className="section-padding bg-gray-50">
                <div className="container-custom">
                    <h2 className="text-4xl font-bold text-berny-navy mb-8 text-center">
                        Berny d'Occasion Disponibles
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {usedBoats.map((boat, index) => (
                            <Card key={index}>
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-berny-blue/10 text-berny-blue px-3 py-1 rounded-full text-sm font-semibold">
                                        {boat.year}
                                    </span>
                                    <span className="text-2xl font-bold text-berny-navy">
                                        {boat.price}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-berny-navy mb-2">
                                    Berny {boat.year}
                                </h3>

                                <div className="space-y-2 mb-4">
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-sm">{boat.condition}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Ship className="w-4 h-4" />
                                        <span className="text-sm">{boat.location}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4 text-sm">
                                    {boat.description}
                                </p>

                                <Button variant="outline" className="w-full">
                                    Contacter le vendeur
                                </Button>
                            </Card>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-4">
                            Vous souhaitez vendre votre Berny ?
                        </p>
                        <a href="mailto:occasion@berny.fr">
                            <Button variant="outline">
                                Déposer une annonce
                            </Button>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
