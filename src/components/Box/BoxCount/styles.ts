import styled from 'styled-components/native';

export type BoxCountTypeStyleProps = 'up' | 'down' | 'total';

type Props = {
  type: BoxCountTypeStyleProps
  width: number | string | undefined
};

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) => type === 'up' ? theme.COLORS.GREEN_LIGHT : type === 'down' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_600};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  padding: 16px;
  width: ${({ width }) => typeof width === 'string' ? width : `${width}px`};
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
`;