import styled from 'styled-components/native';

export type BoxCountTypeStyleProps = 'up' | 'down' | 'total';

type Props = {
  type: BoxCountTypeStyleProps
  width: number | string | undefined
};

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) => type === 'up' ? theme.colors.green[500] : type === 'down' ? theme.colors.red[500] : theme.colors.gray[600]};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: ${({ width }) => typeof width === 'string' ? width : `${width}px`};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSizes['2xl']}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  text-align: center;
`;