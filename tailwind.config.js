/** @type {import('tailwindcss').Config} */

import {nextui} from "@nextui-org/react";

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'white': '#FFFFFF',
                'background-blue': '#EEF5F9',
                'main-blue': '#35A1F4',
                'background-light-blue': '#EEF5F9',
                'text-gray': '#B6C1CE',
                'text-black': '#181818',
                'shadow-black': 'rgba(24,24,24,0.05)',
                "info-red" : "#FF406E",
                'info-green' : "#1DB259",
                'main-purple': '#654DF6',
                'message-wrong': '#FF406E'
            },
            fontFamily: {
                sans: ['Gilroy', 'sans-serif']
            }
        },
    },
    darkMode: "class",
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        nextui()
    ]
}

