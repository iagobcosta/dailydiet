import { TouchableOpacityProps } from 'react-native';
import { IconProps } from 'phosphor-react-native';
import { 
  Container,
  Title,
  ButtonTypeStyleProps,
} from './styles';

type Props = TouchableOpacityProps & {
  icon?: React.ComponentType<IconProps>;
  title: string;
  type?: ButtonTypeStyleProps;
  variant?: 'primary' | 'outline';
}

export function Button({ icon: Icon, title, type = 'PRIMARY', variant = 'primary', ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} type={type} variant={variant} {...rest}>
      {Icon && <Icon size={20} color={variant === 'primary' ? '#FFFFFF' : '#1B1D1E'} />}
      <Title type={type} variant={variant}>{title}</Title>
    </Container>
  );
}