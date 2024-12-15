const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const hideScrollBar = require("tailwind-scrollbar");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontSize: {
        base: ["16px", "1.5"],
        lg: ["18px", "1.6"],
        xl: ["20px", "1.7"],
        "2xl": ["24px", "1.8"],
        "3xl": ["30px", "1.9"],
      },
      // scrollbar: {
      //   hide: {
      //     "&::-webkit-scrollbar": {
      //       display: "none",
      //     },
      //     "-ms-overflow-style": "none", // For IE and Edge
      //     "scrollbar-width": "none", // For Firefox
      //   },
      // },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        "meteor-effect": "meteor 5s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [
    hideScrollBar,
    addVariablesForColors,
    require("@tailwindcss/typography"),
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: any;
  theme: any;
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
