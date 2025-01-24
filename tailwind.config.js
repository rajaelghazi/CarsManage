import primeUi from "tailwindcss-primeui"
import colors from "tailwindcss/colors"

export default {
    darkMode: 'class',

    content: [
        "./modules/**/*.vue",
        "./modules/**/*.js",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./resources/**/*.blade.php",
    ],

    safelist: [
        'text-gray-600', 'bg-gray-100', 'bg-gray-200',
        'text-green-600', 'bg-green-100',
        'text-yellow-600', 'bg-yellow-100',
        'text-amber-600', 'bg-amber-100',
        'text-blue-600', 'bg-blue-100',
        'text-red-600', 'bg-red-100',
    ],

    theme: {
        extend: {
            borderRadius: {
                lg: "0.2rem",
            },

            fontFamily: {
                body: ["Inter", "Sans serif"],
            },

            fontSize: {
                "2xs": "0.6rem",
            },

            colors: {
                primary: "#E69F32",
                secondary: "#88A02E",
                muted: "#F9F9F9",
                surface: colors.zinc,
            },

            maxWidth: {
                "8xl": "88rem",
                "9xl": "100rem",
            },
        },
    },

    plugins: [primeUi],
}
