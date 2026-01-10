import { Check, CreditCard, Users, Calendar, FileText, Award, Mail } from 'lucide-react'
import Link from 'next/link'
import Card from '@/components/Card'
import Button from '@/components/Button'

const benefits = [
    {
        icon: Calendar,
        title: 'Accès aux événements',
        description: 'Participez à toutes les régates et rassemblements organisés par l\'association',
    },
    {
        icon: Users,
        title: 'Réseau de passionnés',
        description: 'Rejoignez une communauté active et partagez votre passion de la voile',
    },
    {
        icon: FileText,
        title: 'Documentation exclusive',
        description: 'Accédez à tous les documents techniques, plans et guides d\'entretien',
    },
    {
        icon: Award,
        title: 'Tarifs préférentiels',
        description: 'Bénéficiez de réductions chez nos partenaires et sur les événements',
    },
    {
        icon: Mail,
        title: 'Newsletter mensuelle',
        description: 'Restez informé des actualités, conseils et bons plans',
    },
    {
        icon: CreditCard,
        title: 'Assurance groupe',
        description: 'Profitez de tarifs avantageux sur l\'assurance de votre Berny',
    },
]

export default function AdhesionPage() {
    return (
        <div>
            {/* Header */}
            <section className="gradient-bg section-padding text-white text-center">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Adhésion
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                        Rejoignez l'Association des Propriétaires de Berny
                    </p>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <Card className="text-center p-8 md:p-12 border-4 border-berny-blue">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-berny-blue/10 rounded-full mb-6">
                                <Users className="w-10 h-10 text-berny-blue" />
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-berny-navy mb-4">
                                Adhésion Annuelle
                            </h2>

                            <div className="mb-8">
                                <div className="flex items-baseline justify-center gap-2">
                                    <span className="text-6xl md:text-7xl font-bold text-berny-navy">20</span>
                                    <span className="text-3xl text-gray-600">€</span>
                                </div>
                                <p className="text-gray-600 mt-2">par an</p>
                            </div>

                            <div className="bg-berny-navy/5 rounded-lg p-6 mb-8">
                                <p className="text-gray-700 text-lg">
                                    <Check className="w-5 h-5 inline text-berny-blue mr-2" />
                                    Valable du 1er janvier au 31 décembre
                                </p>
                            </div>

                            <Button variant="primary" className="text-lg px-12 py-4">
                                <CreditCard className="w-5 h-5 inline mr-2" />
                                Adhérer maintenant
                            </Button>

                            <p className="text-sm text-gray-500 mt-4">
                                Paiement sécurisé par carte bancaire ou virement
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
                            Les Avantages Membre
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Profitez de nombreux avantages en rejoignant notre communauté
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit, index) => (
                            <Card key={index} className="text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-berny-blue/10 rounded-full mb-4">
                                    <benefit.icon className="w-8 h-8 text-berny-blue" />
                                </div>
                                <h3 className="text-xl font-bold text-berny-navy mb-3">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600">
                                    {benefit.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section-padding">
                <div className="container-custom">
                    <Card className="bg-berny-navy text-white text-center p-8 md:p-12" hover={false}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Déjà membre ?
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                            Connectez-vous à votre espace membre pour accéder à tous vos avantages
                        </p>
                        <Link href="/membre">
                            <Button variant="secondary" className="bg-white text-berny-navy hover:bg-gray-100">
                                Accéder à mon espace
                            </Button>
                        </Link>
                    </Card>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom max-w-3xl">
                    <h2 className="text-4xl font-bold text-berny-navy mb-8 text-center">
                        Questions Fréquentes
                    </h2>

                    <div className="space-y-4">
                        <Card>
                            <h3 className="font-bold text-lg text-berny-navy mb-2">
                                Comment adhérer à l'association ?
                            </h3>
                            <p className="text-gray-600">
                                Cliquez sur le bouton "Adhérer maintenant" ci-dessus et suivez les étapes de paiement sécurisé. Vous recevrez votre confirmation par email.
                            </p>
                        </Card>

                        <Card>
                            <h3 className="font-bold text-lg text-berny-navy mb-2">
                                L'adhésion est-elle obligatoire pour naviguer sur un Berny ?
                            </h3>
                            <p className="text-gray-600">
                                Non, l'adhésion n'est pas obligatoire mais elle vous permet de profiter de nombreux avantages et de rejoindre notre communauté.
                            </p>
                        </Card>

                        <Card>
                            <h3 className="font-bold text-lg text-berny-navy mb-2">
                                Puis-je résilier mon adhésion ?
                            </h3>
                            <p className="text-gray-600">
                                L'adhésion est valable pour l'année civile en cours. Elle n'est pas renouvelée automatiquement.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
