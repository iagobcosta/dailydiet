import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';

export type InputStyleProps = {
  type?: 'Default' | 'Active';
  multiline?: boolean;
};

export const Container = styled.View`
  margin: 20px 0;
`;

export const InputStyle = styled(TextInput)<InputStyleProps>`
  flex: 1;
  min-height: ${({ multiline }) => multiline ? 120 : 56}px;

  ${({ theme, type }) => css`
    color: ${theme.colors.gray[100]};
    font-family: ${theme.fontFamily.regular};
    font-size: ${theme.fontSizes.md}px;
    border: 1px solid ${type === 'Active' ? theme.colors.gray[300] : theme.colors.gray[500]};
  `}

  border-radius: 6px;
  padding: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray[200]};
    font-family: ${theme.fontFamily.bold};
    font-size: ${theme.fontSizes.md}px;
  `}
  padding-bottom: 4px;
`;