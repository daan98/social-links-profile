/**  @type {import('tailwindcss').Config} */
module.export = {
  content: ["./*.html", "./**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        "inter-semi-bold": ["InterSemiBold", "sans-serif"],
        "inter-bold": ["InterBold", "sans-serif"],
        "inter-regular": ["InterRegular", "sans-serif"],
      },
    },
  },
};
