import { TouchableOpacityProps } from 'react-native';
import { 
  Container,
  Title,
  ButtonTypeStyleProps,
  PlusIcon,
  PencilSimpleLineIcon,
  TrashIcon
} from './styles';

export type ButtonIconProps = 'PlusIcon' | 'PencilSimpleLineIcon' | 'TrashIcon';

type Props = TouchableOpacityProps & {
  icon?: ButtonIconProps;
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ icon, title, type = 'PRIMARY', ...rest }: Props) {

  function renderIcon() {
    switch (icon) {
      case 'PlusIcon':
        return <PlusIcon type={type} />
      case 'PencilSimpleLineIcon':
        return <PencilSimpleLineIcon type={type} />
      case 'TrashIcon':
        return <TrashIcon type={type} />
    }
  }

  return (
    <Container activeOpacity={0.7} type={type} {...rest}>
      {renderIcon()}
      <Title type={type}>{title}</Title>
    </Container>
  );
}