import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

export type HeaderStyledProps = 'up' | 'down';

type Props = {
  type: HeaderStyledProps
}

export const Container = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.colors.green[500]};
`;

export const ContentHeader = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
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
`;

export const Icon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
  size: 24,
  color: type === 'up' ? theme.colors.green[500] : theme.colors.red[500]
}))`
  margin: 20px 20px;
`;

export const ButtonIcon = styled(TouchableOpacity)``;

export const Content = styled.View`
  height: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  background-color: ${({ theme }) => theme.colors.gray[700]};

  align-items: center;
  padding: 20px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray[200]};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSizes.md}px;
  margin-bottom: 20px;
`;

export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 12px;
`;