/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mulish: ['Mulish', 'sans-serif'],
                playfair: ['Playfair Display', 'sans-serif'],
  
            },
            colors: {
                'royal-blue' : '#56739B',
                'royal-babyblue' : '#a9c0e4',
                'royal-pink' : '#d64767',
                'royal-midnight' : '#242a38',
                'royal-hazelnut' : '#eadfd4',
                'royal-pearl' : '#f9f9f7',
                'royal-graph' : '#656a76',
                'royal-pollito' : '#ffdea4',
                'royal-salmon' : '#fabcab'
            },
            transitionProperty: {
                'height': 'height',
                'backgroundImage':'backgroundImage'
            },  
            fontSize: {
                sm: ['12px', '20px'],
                base: ['14px', '24px'],
                lg: ['18px', '28px'],
                xl: ['22px', '32px'],
              }
        },
    },
    plugins: [],
}
