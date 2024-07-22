import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export type HeaderStyledProps = 'up' | 'down' | 'default';

type Props = {
  type: HeaderStyledProps
}

export const Container = styled(SafeAreaView)<Props>`
  background-color: ${({ theme, type }) => type === 'up' ? theme.COLORS.GREEN_LIGHT : type === 'down' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_500};
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
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const Content = styled.View`
  height: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 20px;
`;