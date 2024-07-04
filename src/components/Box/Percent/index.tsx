
import { 
  Container, 
  Content, 
  Percent, 
  Description, 
  PercentTypeStyleProps,
  ContainerIcon,
  Icon
} from './styles';

type Props = {
  type?: PercentTypeStyleProps;
  percent: string;
  description: string;
}

export const BoxPercent = ({ type = 'up', percent, description }: Props) => {
  return (
    <>
      <Container type={type}>
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