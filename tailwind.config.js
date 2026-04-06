/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#FF0055',   // Electric Neon Pink
          secondary: '#00F0FF', // Cyan / Electric Blue
          accent: '#7000FF',    // Electric Purple
        },
        bg: {
          base: '#05040A',      // Extremely deep space navy
          surface: '#0D0B1A',   // Deep purple-toned surface
          'surface-alt': '#141126',
          'surface-raised': '#1B1733',
          'surface-hover': '#231E40',
        },
        text: {
          primary: '#ffffff',
          secondary: 'rgba(255,255,255,0.72)',
          muted: 'rgba(255,255,255,0.44)',
        },
        border: {
          DEFAULT: 'rgba(255,255,255,0.08)',
          hover: 'rgba(255,255,255,0.14)',
          active: 'rgba(255,255,255,0.20)',
        },
      },
      fontFamily: {
        headline: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
      },
      keyframes: {
        neonPulse: {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px #FF0055) drop-shadow(0 0 20px #FF0055)' },
          '50%': { filter: 'drop-shadow(0 0 15px #FF0055) drop-shadow(0 0 30px #FF0055)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}