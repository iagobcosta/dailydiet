import 'styled-components/native';
import { theme } from '../theme';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    colors: typeof theme.colors;
    fontFamily: typeof theme.fontFamily;
    fontSizes: typeof theme.fontSizes;
    fontWeights: typeof theme.fontWeights;
  }
}