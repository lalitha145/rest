/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'selector',
  theme: {
    screens:{
      sm:"480px",
      md:"768px",
      lg:"1024px",
      xl:"1280px",
      "2xl":"1536px"
    },
    extend: {
      backgroundImage: {
        "arrow": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAMAAACtdX32AAAAdVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhMdQaAAAAJ3RSTlMAAAECAwQGBwsOFBwkJTg5RUZ4eYCHkJefpaytrsXGy8zW3+Do8vNn0bsyAAAAYElEQVR42tXROwJDQAAA0Ymw1p9kiT+L5P5HVEi3qJn2lcPjtIuzUIJ/rhIGy762N3XaThqMN1ZPALsZPEzG1x8LrFL77DHBnEMxBewz0fJ6LyFHTPL7xhwzWYrJ9z22AqmQBV757MHfAAAAAElFTkSuQmCC)"
      },
      fontFamily: {
        "nunito-sans": ['Nunito Sans', 'sans-serif']
      },
      backgroundColor: {
        "dark-blue-elements": "hsl(209, 23%, 22%)",
        "dark-blue": "hsl(207, 26%, 17%)",
        "light-mode": "hsl(0, 0%, 95%)",
        "light-mode-elements": "hsl(0, 0%, 100%)"
      },
      textColor: {
        "light-mode": "hsl(200, 15%, 8%)",
        "dark-mode": "hsl(0, 0%, 100%)"
      }
    },
  },
  plugins: [],
}