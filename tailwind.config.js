module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind scans JSX files for class names
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4C51BF", 
        secondary: "#2D3748", 
        accent: "#F7FAFC",    
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // using Google Font (Roboto)
      },
      screens: {
        'sm': '640px', 
        'md': '768px', // Medium breakpoint for tablets
        'lg': '1024px', 
        'xl': '1280px', 
        'dl': '1506px'
      },
      boxShadow: {
        'lg-primary': '0 4px 12px rgba(76, 81, 191, 0.3)',  // Custom shadow for buttons and cards
      },
    },
  },
  plugins: [],
};
