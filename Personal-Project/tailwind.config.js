/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
    theme: {
      screens: {
        sm: "480x",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      extend: {
        colors: {
          brightRed: "hsl(12, 88%, 59%)",
          brightRedLight: "hsl(12, 80%, 69%)",
          brightRedSupLight: "hsl(12, 88%, 95%)",
          darkBlue: "hsl(228, 39%, 23%)",
          darkGrayishBlue: "hsl(227, 12%, 61%)",
          veryDarkBlue: "hsl(233, 12%, 13%)",
          veryPaleRed: "hsl(13, 100%, 96%)",
          veryLightGray: "hsl(0, 0%, 98%)",
        },
      },
    },
    plugins: [],
};
