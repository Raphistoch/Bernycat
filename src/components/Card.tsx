import { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
    hover?: boolean
}

export default function Card({ children, className = '', hover = true }: CardProps) {
    return (
        <div
            className={`glass-card rounded-xl p-6 ${hover ? 'hover-lift' : ''
                } ${className}`}
        >
            {children}
        </div>
    )
}
