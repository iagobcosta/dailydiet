import { TouchableOpacityProps } from 'react-native';
import { 
  Container, 
  Content, 
  Percent, 
  Description, 
  PercentTypeStyleProps,
  ContainerIcon,
  Icon
} from './styles';

type Props = TouchableOpacityProps & {
  type?: PercentTypeStyleProps;
  percent: string;
  description: string;
}

export const BoxPercent = ({ type = 'up', percent, description, ...rest }: Props) => {
  return (
    <>
      <Container activeOpacity={0.7} {...rest} type={type}>
        <Content>
          <Percent>{percent}%</Percent>
          <Description>{description}</Description>
        </Content>
        <ContainerIcon>
          <Icon type={type} />
        </ContainerIcon>
      </Container>
    </>
  );
}