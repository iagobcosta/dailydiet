import LogoImg from '@assets/Logo.png';

import { Container, Logo, Avatar } from './styles';

export function HeaderHome() {
  return (
    <Container>
      <Logo source={LogoImg} />
      <Avatar />
    </Container>
  );
}