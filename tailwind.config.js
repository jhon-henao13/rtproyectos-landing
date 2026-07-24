/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#1D4ED8",   /* Azul vibrante principal */
          navy: "#0F172A",      /* Azul marino oscuro para los títulos */
          accent: "#1E40AF",    /* Variación para efectos hover (más oscuro) */
          softBg: "#b4b4b4",    /* Fondo gris ultra-claro premium */
          whatsapp: "#25D366"   /* Verde oficial de WhatsApp */
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pingCustom: {
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        'ping-slow': 'pingCustom 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
}