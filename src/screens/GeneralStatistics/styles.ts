import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

export type HeaderStyledProps = 'up' | 'down';

type Props = {
  type: HeaderStyledProps
}

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const ContentHeader = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
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
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'up' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))`
  margin: 20px 20px;
`;

export const ButtonIcon = styled(TouchableOpacity)``;

export const Content = styled.View`
  height: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};

  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  margin-bottom: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 12px;
`;