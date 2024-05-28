/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html}",
        "./src/**/*.{html,js}"
    ],
    theme: {
        extend: {
            colors: {
                'regal-blue': '#243c5a',
            },
        },
        skew: {
            '17': '17deg',
        },
        keyframes: {
            wiggle: {
                '0%, 100%': { transform: 'rotate(-3deg)' },
                '50%': { transform: 'rotate(3deg)' },
            }
        },
        borderRadius: {
            'none': '0',
            'sm': '0.125rem',
            DEFAULT: '0.25rem',
            DEFAULT: '4px',
            'md': '0.375rem',
            'lg': '0.5rem',
            'full': '9999px',
            'large': '12px',
        },
        screens: {
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }

            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }

            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
        },
        lineClamp: {
            7: '7',
        },
    },
    plugins: [],
}