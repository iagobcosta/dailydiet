import styled from 'styled-components/native';
import { ArrowUpRight } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native';

export type PercentTypeStyleProps = 'up' | 'down';

type Props = {
  type: PercentTypeStyleProps
}

export const Container = styled(TouchableOpacity) <Props>`
  flex: 1;

  min-height: 102px;
  max-height: 102px;

  background-color: ${({ theme, type }) => type === 'up' ? theme.colors.green[500] : theme.colors.red[500]};
  border-radius: 8px;
  flex-direction: row;
  margin-top: 25px;
  margin-bottom: 35px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;

export const Percent = styled.Text`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSizes['2xl']}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
`

export const ContainerIcon = styled.View`
  padding: 8px;
`;


export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'up' ? theme.colors.green[500] : theme.colors.red[500]
}))``