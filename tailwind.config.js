const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: { content: ["./frontend/**/*.{vue,html}"] },
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        mint: "#B4F8C8",
        tbrown: "#785B44",
        bcorn: "#96824D",
        hmetal: "#353931",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
