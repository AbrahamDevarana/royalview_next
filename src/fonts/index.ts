import { Roboto, Playfair_Display } from 'next/font/google'

export const roboto = Roboto({
    display: 'swap',
    weight: ['100', '300', '400', '500', '700', '900'],
    subsets: ['latin'],
})

export const playfair = Playfair_Display({
    display: 'swap',
    weight: ['400'],
    subsets: ['latin'],
})