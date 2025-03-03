/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./views/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // ...defaultTheme,
      fontFamily: {
        Poppins: ['Poppins', 'sans-serif'],
        Raleway: ['Raleway', 'sans-serif'],
      },
      colors: {
        primary: '#FD7861',
        secondary: '#EF3340',
        tertiary: '#ffffff',
        dark: '#192234'
      },
      backgroundImage: {
        orange: 'linear-gradient(106deg, #fc6076 -71%, #fe8952 100%)'
      },
      screens: {
        '2xl': {
          min: '1536px'
        },
        xl: {
          min: '1280px'
        },
        lg: {
          min: '1024px'
        },
        md: {
          min: '768px'
        },
        sm: {
          min: '600px'
        },
        xs: {
          max: '599px'
        },
        xss: {
          max: '479px'
        }
      }
    }
  },
  plugins: []
};
