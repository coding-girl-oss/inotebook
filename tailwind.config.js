module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      fontFamily: {
        creepster: ['Creepster', 'system-ui'], // Add your custom font here
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'], 
  },
};

