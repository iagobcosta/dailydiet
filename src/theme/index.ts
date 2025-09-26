export const theme = {
  colors: {
    gray: {
      100: '#1B1D1E',
      200: '#333638',
      300: '#5C6265',
      400: '#B9BBBC',
      500: '#DDDEDF',
      600: '#EFF0F0',
      700: '#FAFAFA',
    },
    white: '#FFFFFF',
    red: {
      500: '#BF3B44',
      400: '#F3BABD',
      300: '#F4E6E7',
    },
    green: {
      500: '#639339',
      400: '#CBE4B4',
      300: '#E5F0DB',
    },
  },
  fontFamily: {
    regular: 'NunitoSans_400Regular',
    bold: 'NunitoSans_700Bold',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 24,
    '2xl': 32,
  },
  fontWeights: {
    regular: '400',
    bold: '700',
  },
} as const;