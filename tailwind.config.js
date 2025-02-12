/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "white-F1": "#F1F1F1",
        "white-FB3": "#FFFFFFB3",
        black: "#0f0f0f",
        "gray-A": "#AAAAAA",
        "red-CC": "#CC0000",
        "red-FF": "#FF0000",
        "gray-71": "#717171",
        "blue-3E": "#3EA6FF",
        "black-0.1": "rgba(255,255,255,0.1)",
        "black-0.2": "rgba(255,255,255,0.2)",
      },
      backgroundColor: {
        "hover-black": "rgba(255,255,255,0.1)",
      },
      screens: {
        xsm: "426px",
        "2xsm": "576px",
        "1-5sm": "700px",
        "2md": "938px",
        "2lg": "1168px",
        1336: "1336px",
        "1-5xl": "1436px",
        "3xl": "1760px",
        "3-5xl": "1976px",
        "4xl": "2086px",
        "5xl": "2256px",
        "6xl": "2386px",
      },
      spacing: {
        "full-minus-16": "calc(100% - 16px)",
        "full-minus-24": "calc(100% - 24px)",
        "full-minus-32": "calc(100% - 32px)",
        "full-minus-56": "calc(100% - 56px)",
        "full-minus-16": "calc(100% - 16px)",
        "full-minus-120": "calc(100% - 120px)",
        "screen-h-minus-11": "calc(100vh - 11px)",
        "screen-h-minus-128": "calc(100vh - 128px)",
        "screen-h-minus-72": "calc(100vh - 72px)",
        "screen-w-minus-240": "calc(100vw - 240px)",
        "screen-w-minus-74": "calc(100vw - 74px)",
        "screen-w-16-9": "calc((100vh - 56px - 0px - 136px )*( 16 / 9 ))",
      },
    },
  },
  plugins: [],
};
