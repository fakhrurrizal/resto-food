import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff8700",
        black : "#1f1e1e",
        white : "#ffffff"

      },
      fontFamily: {
        fatheya: ['FatheyaFood'],
        quesha : ['quesha'],
        poppins : ['poppins'],
        avocado : ['avocado'],
        poppinsBlack : ['poppinsBlack'],
        lettering : ['lettering']
      },
    },
  },
  plugins: [],
};
export default config;
