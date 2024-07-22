import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export type InputStyleProps = {
  type?: 'Default' | 'Active';
  multiline?: boolean;
}

export const Container = styled.View`
  margin: 20px 0;
`;

export const InputStyle = styled(TextInput)<InputStyleProps>`
  flex: 1;
  
  min-height: ${({ multiline }) => multiline ? 120 : 56}px;

  ${({ theme, type }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    border: 1px solid ${type === 'Active' ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_500};
  `}

  border-radius: 6px;
  padding: 16px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  padding-bottom: 4px;
`;