import {
  Container,
  Title,
  Description,
  BoxCountTypeStyleProps
} from './styles';

type Props = {
  type?: BoxCountTypeStyleProps;
  title: number;
  description: string;
  width?: number | string;
}

export function BoxCount({ type = 'total', title, description, width }: Props) {
  return (
    <>
      <Container type={type} width={width}>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Container>
    </>
  );
}