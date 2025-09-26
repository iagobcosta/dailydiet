import { View, ViewProps } from 'react-native';
import styled from 'styled-components/native';

type BoxProps = ViewProps & {
  flex?: number;
  flexDirection?: 'row' | 'column';
  alignItems?: 'flex-start' | 'center' | 'flex-end';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  gap?: string;
  padding?: string;
  margin?: string;
  marginBottom?: string;
  backgroundColor?: string;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
};

export const Box = styled(View)<BoxProps>`
  ${({ flex }) => flex && `flex: ${flex};`}
  ${({ flexDirection }) => flexDirection && `flex-direction: ${flexDirection};`}
  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`}
  ${({ justifyContent }) => justifyContent && `justify-content: ${justifyContent};`}
  ${({ gap }) => gap && `gap: ${gap};`}
  ${({ padding }) => padding && `padding: ${padding};`}
  ${({ margin }) => margin && `margin: ${margin};`}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({ backgroundColor }) => backgroundColor && `background-color: ${backgroundColor};`}
  ${({ borderWidth }) => borderWidth && `border-width: ${borderWidth};`}
  ${({ borderColor }) => borderColor && `border-color: ${borderColor};`}
  ${({ borderRadius }) => borderRadius && `border-radius: ${borderRadius};`}
  ${({ width }) => width && `width: ${width};`}
  ${({ height }) => height && `height: ${height};`}
`; 