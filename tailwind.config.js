module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./src/**/*.html"],
  darkMode: "media",
  theme: {
    extend: {
      scale: {
        100: "1",
        101: "1.01",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    darkTheme: "dark",
  },
};
