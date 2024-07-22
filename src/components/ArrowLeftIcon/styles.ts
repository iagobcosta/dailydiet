import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { ArrowLeft } from 'phosphor-react-native';

export const Container = styled(TouchableOpacity)`
  flex: 0.5;
`;

export const ArrowLeftCustom = styled(ArrowLeft).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GRAY_200,
  weight: 'regular'
}))`
`;