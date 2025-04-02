const { createThemes } = require('tw-colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'navmi-dark': 'rgba(239, 242, 244, 0.02)',
        // 'navmi-dark': '#1a1d27',
        // 'navmi-panel': 'rgba(239, 242, 244, 0.04)',
        'navmi-panel': '#1E2530',
        'navmi-card': '#2a2e39',
        'navmi-blue': '#3b82f6',
        'navmi-green': '#4ade80',
        'navmi-red': '#ef4444',
        'navmi-text': '#ffffff',
        'navmi-text-secondary': '#9ca3af',
      }
    },
  },
  plugins: [
    createThemes({
      light: {
        'white': '#FFFFFF',
        'black': '#F3F3F3',
        'red': '#ef4444',
        'green': '#4ade80',
        'blue': '#3b82f6',
        'hover':'#1565C0',
        'light-background': '#EEEEEE',
        'dark-background': '#f5f5f5',
        'text': '#000000'
      },
      dark: {
        'white': '#FFFFFF',
        'black': '#F3F3F3',
        'red': '#ef4444',
        'green': '#4ade80',
        'blue': '#3b82f6',
        'hover':'#1565C0',
        'light-background': '#1e2230',
        'dark-background': '#1a1d27',
        'text': '#FFFFFF'
      }
    })
  ],
  important: true,
}
