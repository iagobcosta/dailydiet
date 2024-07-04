import styled from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native'

export type PercentTypeStyleProps = 'up' | 'down';

type Props = {
  type: PercentTypeStyleProps
}

export const Container = styled.View <Props>`
  flex: 1;

  min-height: 102px;
  max-height: 102px;

  background-color: ${({ theme, type }) => type === 'up' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  border-radius: 8px;
  flex-direction: row;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;

export const Percent = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXXL}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`

export const ContainerIcon = styled.View`
  padding: 8px;
`;


export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'up' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``