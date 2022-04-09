module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      animation: {
        progress: "progress 1.5s ease-out forwards",
      },
      keyframes: {
        progress: {
          "0%": {
            strokeDasharray: "0 100",
          },
        },
      },
    },
  },
  plugins: [],
};
