import { Playfair_Display, Mulish } from 'next/font/google'

export const mulish = Mulish({
    display: 'swap',
    weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--font-mulish',
})

export const playfair = Playfair_Display({
    display: 'swap',
    weight: ['400'],
    subsets: ['latin'],
    variable: '--font-playfair',
})

