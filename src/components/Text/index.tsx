import { Text as RNText, TextProps as RNTextProps } from 'react-native';
import { theme } from '../../theme';

type TextProps = RNTextProps & {
  fontSize?: keyof typeof theme.fontSizes;
  fontWeight?: keyof typeof theme.fontWeights;
  color?: string;
};

export function Text({ fontSize = 'md', fontWeight = 'regular', color = theme.colors.gray[100], ...props }: TextProps) {
  return (
    <RNText
      style={{
        fontSize: theme.fontSizes[fontSize],
        fontWeight: theme.fontWeights[fontWeight],
        color,
      }}
      {...props}
    />
  );
} 