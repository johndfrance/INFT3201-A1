/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{njk,md}", "./src/**/*.svg",],
  theme: {
    extend: {
      colors: {
        primary: '#f5f5f5',    // Light gray
        secondary: '#333333',  // Dark gray
        highlight: '#d32f2f',  // Deep red
        accent: '#eae0d5',     // Light tan
        neutral: '#888888',    // Medium gray
        backgroundAccent: '#fbe3e4' // Red-tinted beige
      }
    }
  }
}
