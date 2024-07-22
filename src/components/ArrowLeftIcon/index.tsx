import { TouchableOpacityProps } from 'react-native';
import {
  Container,
  ArrowLeftCustom
} from './styles';

export function ArrowLeftIcon({ ...rest }: TouchableOpacityProps) {
  return (
    <Container {...rest}>
      <ArrowLeftCustom />
    </Container>
  );
}