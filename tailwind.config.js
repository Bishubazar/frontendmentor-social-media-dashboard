/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/flowbite/**/*.js",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                toggle: {
                    light: "hsl(230, 22%, 74%)",
                    dark: {
                        green: "hsl(var(--dark-green) / <alpha-value>)",
                        blue: "hsl(var(--dark-blue) / <alpha-value>)",
                    },
                },
                "lime-green": "hsl(163, 72%, 41%)",
                "bright-red": "hsl(356, 69%, 56%)",
                facebook: "hsl(208, 92%, 53%)",
                twitter: "hsl(203, 89%, 53%)",
                instagram: {
                    yellow: "hsl(var(--instagram-yellow) / <alpha-value>)",
                    pink: "hsl(var(--instagram-pink) / <alpha-value>)",
                },
                youtube: "hsl(348, 97%, 39%)",
                bkg: "hsl(var(--color-bkg) / <alpha-value>)",
                pattern: "hsl(var(--color-pattern) / <alpha-value>)",
                card: "hsl(var(--color-card))",
                content: "hsl(var(--color-content) / <alpha-value>)",
                "d-content": "hsl(var(--color-d-content) / <alpha-value>)",
                primary: {
                    red: "hsl(var(--primary-red) / <alpha-value>)",
                },
            },
        },
    },

    plugins: [require("flowbite/plugin")],
};
