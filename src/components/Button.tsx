import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline'
    children: ReactNode
}

export default function Button({
    variant = 'primary',
    children,
    className = '',
    ...props
}: ButtonProps) {
    const baseStyles = 'font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0'

    const variants = {
        primary: 'bg-berny-navy hover:bg-berny-navy-light text-white',
        secondary: 'bg-berny-blue hover:bg-berny-blue-dark text-white',
        outline: 'border-2 border-berny-navy text-berny-navy hover:bg-berny-navy hover:text-white',
    }

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    )
}
