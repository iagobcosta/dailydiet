import { ArrowLeftIcon } from '@components/ArrowLeftIcon';
import {
  Container,
  Title,
  Header,
  ContentHeader,
  HeaderStyledProps,
  Content
} from './styles';
import { Input } from '@components/Input';

type NewMealProps = {
  type?: HeaderStyledProps
}

export function NewMeal({ type = 'default' }: NewMealProps) {
  return (
    <Container type={type}>
      <Header>
        <ArrowLeftIcon />
        <ContentHeader>
          <Title>Nova refeição</Title>
        </ContentHeader>
      </Header>
      <Content>
        <Input title='Nome' />
        <Input
          title='Descrição'
          multiline={true}
        />
      </Content>
    </Container>
  );
}