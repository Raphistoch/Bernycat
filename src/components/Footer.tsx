import Link from 'next/link'
import { Anchor, Mail, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-berny-navy text-white mt-auto">
            <div className="container-custom py-12 px-4 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-white p-2 rounded-lg">
                                <Anchor className="w-6 h-6 text-berny-navy" />
                            </div>
                            <span className="text-2xl font-bold">Berny</span>
                        </div>
                        <p className="text-gray-300 max-w-md">
                            Le dériveur Berny - Tradition et performance depuis des générations.
                            Rejoignez notre communauté de passionnés de voile.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/communaute" className="text-gray-300 hover:text-white transition-colors">
                                    Communauté
                                </Link>
                            </li>
                            <li>
                                <Link href="/acheter" className="text-gray-300 hover:text-white transition-colors">
                                    Acheter
                                </Link>
                            </li>
                            <li>
                                <Link href="/adhesion" className="text-gray-300 hover:text-white transition-colors">
                                    Adhésion
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-gray-300">
                                <Mail className="w-4 h-4" />
                                <a href="mailto:contact@berny.fr" className="hover:text-white transition-colors">
                                    contact@berny.fr
                                </a>
                            </li>
                            <li className="flex items-center gap-4 mt-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-berny-blue transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-berny-blue transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Berny. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    )
}
