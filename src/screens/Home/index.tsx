import { Container, Title } from './styles';

import { HeaderHome } from '@components/HeaderHome';
import { BoxPercent } from '@components/Box/Percent';
import { Button } from '@components/Button';

export function Home() {
  return (
    <Container>
      <HeaderHome />
      <BoxPercent percent="75,32" description="das refeições dentro da dieta" />
      <Title>Refeições</Title>
      <Button icon='PlusIcon' title="Nova refeição" />
    </Container>
  );
}
