const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: {
    mode: "layers",
    layers: ["base", "components", "utilities"],
    content: [
      "./resources/views/**/*.blade.php",
      "./storage/framework/views/*.php",
      "./resources/js/**/*.vue"
    ],
    options: {
      defaultExtractor: content => content.match(/[\w-/:.]+(?<!:)/g) || []
    }
  },

  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        indigo: {
          900: "#191e38",
          800: "#2f365f",
          600: "#5661b3",
          500: "#6574cd",
          400: "#7886d7",
          300: "#b2b7ff",
          100: "#e6e8ff"
        }
      }
    }
  },

  variants: {
    extend: {
      opacity: ["disabled"],
      gradientColorStops: ["group-hover"]
    }
  },
  plugins: [require("@tailwindcss/forms")]
};
