'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Anchor } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/communaute', label: 'Communauté' },
    { href: '/acheter', label: 'Acheter' },
    { href: '/adhesion', label: 'Adhésion' },
    { href: '/documents', label: 'Documents' },
    { href: '/membre', label: 'Espace Membre' },
]

export default function Navigation() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-berny-navy p-2 rounded-lg group-hover:bg-berny-blue transition-colors duration-300">
                            <Anchor className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-gradient">Berny</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${pathname === link.href
                                        ? 'bg-berny-navy text-white'
                                        : 'text-gray-700 hover:bg-berny-blue/10 hover:text-berny-navy'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <X className="w-6 h-6 text-berny-navy" />
                        ) : (
                            <Menu className="w-6 h-6 text-berny-navy" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200/50 animate-fade-in">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${pathname === link.href
                                        ? 'bg-berny-navy text-white'
                                        : 'text-gray-700 hover:bg-berny-blue/10 hover:text-berny-navy'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    )
}
