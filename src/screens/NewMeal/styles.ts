import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export type HeaderStyledProps = 'up' | 'down' | 'default';

type Props = {
  type: HeaderStyledProps
}

export const Container = styled(SafeAreaView)<Props>`
  background-color: ${({ theme, type }) => type === 'up' ? theme.colors.green[500] : type === 'down' ? theme.colors.red[500] : theme.colors.gray[500]};
`;

export const ContentHeader = styled.View`
  justify-content: space-around;
  align-items: center;
`;

export const Header = styled.View`
  padding: 20px;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`;

export const Content = styled.View`
  height: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.colors.gray[700]};
  padding: 20px;
`;