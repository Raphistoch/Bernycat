import { FileText, Download, BookOpen, Wrench, Scale, Ship } from 'lucide-react'
import Card from '@/components/Card'
import Button from '@/components/Button'

const documents = [
    {
        icon: BookOpen,
        title: 'Manuel Technique',
        description: 'Guide complet d\'utilisation et de navigation du Berny',
        size: '2.4 MB',
        format: 'PDF',
    },
    {
        icon: Ship,
        title: 'Plans de Construction',
        description: 'Plans détaillés et spécifications techniques complètes',
        size: '5.8 MB',
        format: 'PDF',
    },
    {
        icon: Scale,
        title: 'Règlement de Classe',
        description: 'Règlement officiel de la classe Berny pour les régates',
        size: '1.2 MB',
        format: 'PDF',
    },
    {
        icon: Wrench,
        title: 'Guide d\'Entretien',
        description: 'Conseils et procédures pour l\'entretien de votre Berny',
        size: '3.1 MB',
        format: 'PDF',
    },
]

export default function DocumentsPage() {
    return (
        <div>
            {/* Header */}
            <section className="gradient-bg section-padding text-white text-center">
                <div className="container-custom">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Documents
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                        Téléchargez tous les documents techniques et réglementaires
                    </p>
                </div>
            </section>

            {/* Documents Grid */}
            <section className="section-padding">
                <div className="container-custom">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {documents.map((doc, index) => (
                            <Card key={index} className="group">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-16 h-16 bg-berny-blue/10 rounded-lg flex items-center justify-center group-hover:bg-berny-blue/20 transition-colors">
                                        <doc.icon className="w-8 h-8 text-berny-blue" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-xl font-bold text-berny-navy mb-2">
                                            {doc.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-3">
                                            {doc.description}
                                        </p>
                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                            <span className="bg-gray-100 px-2 py-1 rounded">
                                                {doc.format}
                                            </span>
                                            <span>{doc.size}</span>
                                        </div>
                                    </div>
                                </div>
                                <Button variant="outline" className="w-full">
                                    <Download className="w-4 h-4 inline mr-2" />
                                    Télécharger
                                </Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-custom max-w-4xl">
                    <Card className="text-center p-8">
                        <FileText className="w-16 h-16 mx-auto mb-6 text-berny-navy" />
                        <h2 className="text-2xl md:text-3xl font-bold text-berny-navy mb-4">
                            Accès aux Documents
                        </h2>
                        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                            Certains documents sont réservés aux membres de l'association.
                            Adhérez dès maintenant pour accéder à l'intégralité de notre documentation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button variant="primary">
                                Devenir membre
                            </Button>
                            <Button variant="outline">
                                Se connecter
                            </Button>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Additional Resources */}
            <section className="section-padding">
                <div className="container-custom max-w-4xl">
                    <h2 className="text-3xl font-bold text-berny-navy mb-8 text-center">
                        Ressources Complémentaires
                    </h2>

                    <div className="space-y-4">
                        <Card className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-lg text-berny-navy mb-1">
                                    Vidéos Tutoriels
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Apprenez à gréer et naviguer votre Berny en vidéo
                                </p>
                            </div>
                            <Button variant="outline">
                                Voir
                            </Button>
                        </Card>

                        <Card className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-lg text-berny-navy mb-1">
                                    Forum Technique
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Posez vos questions à la communauté
                                </p>
                            </div>
                            <Button variant="outline">
                                Accéder
                            </Button>
                        </Card>

                        <Card className="flex items-center justify-between">
                            <div>
                                <h3 className="font-bold text-lg text-berny-navy mb-1">
                                    Galerie Photos
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Découvrez les Berny de notre communauté
                                </p>
                            </div>
                            <Button variant="outline">
                                Explorer
                            </Button>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
