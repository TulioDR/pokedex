/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/containers/**/*.{js,ts,jsx,tsx}",
   ],
   theme: {
      extend: {
         colors: {
            primary: "var(--color-primary)",
            primaryDark: "var(--color-primaryDark)",
            secondary: "var(--color-secondary)",
            tertiary: "var(--color-tertiary)",
         },
      },
   },
   plugins: [],
};
