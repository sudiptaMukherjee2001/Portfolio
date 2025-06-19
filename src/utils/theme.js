
const theme = {
  colors: {
    background: {
      main: '#0a0a0f',
      //   main: 'pink',
      glass: '#1a1a2e',
      border: {
        base: '#4a4a8a',
        opacity30: 'rgba(74, 74, 138, 0.3)',
        opacity20: 'rgba(74, 74, 138, 0.2)',
      },
    },
    text: {
      primary: '#ffffff',
      blue: {
        100: '#a3bffa',
        10080: 'rgba(163, 191, 250, 0.8)',
        200: '#7f9cf5',
        300: '#667eea',
        400: '#5a67d8',
        500: '#60a5fa',
      },
      purple: {
        300: '#b794f4',
      },
      gray: {
        300: '#e2e8f0',
        400: '#cbd5e0',
      },
    },
    accent: {
      blue: {
        500: '#4299e1',
        600: '#3182ce',
        700: '#2b6cb0',
      },
      purple: {
        500: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        500_50: 'rgba(159, 122, 234, 0.5)',
      },
    },
    glow: {
      subtle: 'rgba(78, 78, 255, 0.15)',
      medium: 'rgba(78, 78, 255, 0.3)',
      strong: 'rgba(78, 78, 255, 0.5)',
      hoverLight: 'rgba(78, 78, 255, 0.2)',
    },
    orbs: {
      blue500_10: 'rgba(66, 153, 225, 0.1)',
      purple500_10: 'rgba(159, 122, 234, 0.1)',
      blue400_15: 'rgba(90, 103, 216, 0.15)',
    },
  },
  fonts: {
    family: 'Inter, system-ui, sans-serif',
    sizes: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '4xl': '36px',
      '5xl': '48px',
      '6xl': '60px',
      '7xl': '72px',
      '8xl': '80px',
    },
    weights: {
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  gradients: {
    text: {
      heading: 'linear-gradient(to right, #93c5fd, #bfdbfe, #d8b4fe)',
      avatarFallback: 'linear-gradient(to bottom right, #4299e1, #805ad5)',
      avatarOverlay: 'linear-gradient(to top, rgba(159, 122, 234, 0.2), transparent)',
    },
    button: {
      primary: 'linear-gradient(to right, #3182ce, #805ad5)',
      primaryHover: 'linear-gradient(to right, #2b6cb0, #6b46c1)',
      secondary: 'linear-gradient(to right, #4299e1, #805ad5)',
      secondaryHover: 'linear-gradient(to right, #3182ce, #6b46c1)',
    },
    decorative: {
      line: 'linear-gradient(to right, #4299e1, #9f7aea)',
    },
  },
  shadows: {
    subtle: '0 0 15px rgba(78, 78, 255, 0.15)',
    medium: '0 0 20px rgba(78, 78, 255, 0.3)',
    strongHover: '0 0 30px rgba(78, 78, 255, 0.5)',
    standard: '0 0 10px rgba(78, 78, 255, 0.3)',
    lightHover: '0 0 10px rgba(78, 78, 255, 0.2)',
  },
};

export default theme;
