import Image from 'next/image'
import Link from 'next/link'
import { Ruler, Weight, Wind, Users, Waves, Award } from 'lucide-react'
import Card from '@/components/Card'
import Button from '@/components/Button'

const technicalSpecs = [
    {
        icon: Ruler,
        label: 'Longueur',
        value: '4.20 m',
        description: 'Longueur hors-tout',
    },
    {
        icon: Ruler,
        label: 'Largeur',
        value: '1.65 m',
        description: 'Largeur maximale',
    },
    {
        icon: Weight,
        label: 'Poids',
        value: '95 kg',
        description: 'Poids à vide',
    },
    {
        icon: Wind,
        label: 'Voilure',
        value: '10.5 m²',
        description: 'Surface de voile',
    },
    {
        icon: Users,
        label: 'Équipage',
        value: '2-3 pers.',
        description: 'Capacité recommandée',
    },
    {
        icon: Waves,
        label: 'Tirant d\'eau',
        value: '0.85 m',
        description: 'Avec dérive',
    },
]

const features = [
    {
        icon: Award,
        title: 'Tradition & Performance',
        description: 'Un dériveur qui allie l\'héritage maritime à la performance moderne',
    },
    {
        icon: Users,
        title: 'Convivial',
        description: 'Parfait pour la famille et l\'apprentissage de la voile',
    },
    {
        icon: Wind,
        title: 'Polyvalent',
        description: 'Idéal pour la balade comme pour la régate',
    },
]

export default function HomePage() {
    return (
        <div>
            {/* Hero Section */}
            <section className="relative h-[600px] md:h-[700px] overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/hero.jpg"
                        alt="Dériveur Berny sur l'eau"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
                </div>

                <div className="relative h-full flex items-center justify-center text-center px-4">
                    <div className="max-w-4xl animate-fade-in">
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
                            Découvrez le Berny
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-lg">
                            Le dériveur qui allie tradition, élégance et performance
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/acheter">
                                <Button variant="primary" className="w-full sm:w-auto">
                                    Acheter un Berny
                                </Button>
                            </Link>
                            <Link href="/adhesion">
                                <Button variant="secondary" className="w-full sm:w-auto">
                                    Rejoindre la communauté
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {features.map((feature, index) => (
                            <Card key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-berny-navy/10 rounded-full mb-4">
                                    <feature.icon className="w-8 h-8 text-berny-navy" />
                                </div>
                                <h3 className="text-xl font-bold text-berny-navy mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600">
                                    {feature.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                            Caractéristiques Techniques
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Un dériveur conçu pour offrir le meilleur équilibre entre maniabilité et stabilité
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technicalSpecs.map((spec, index) => (
                            <Card key={index} className="group">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-berny-blue/10 rounded-lg flex items-center justify-center group-hover:bg-berny-blue/20 transition-colors">
                                        <spec.icon className="w-6 h-6 text-berny-blue" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">{spec.label}</p>
                                        <p className="text-2xl font-bold text-berny-navy mb-1">
                                            {spec.value}
                                        </p>
                                        <p className="text-sm text-gray-600">{spec.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="section-padding gradient-bg">
                <div className="container-custom text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Prêt à naviguer ?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                        Rejoignez la communauté Berny et découvrez le plaisir de la navigation
                    </p>
                    <Link href="/communaute">
                        <Button variant="secondary" className="bg-white text-berny-navy hover:bg-gray-100">
                            Découvrir la communauté
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    )
}
