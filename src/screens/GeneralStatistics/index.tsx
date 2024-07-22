import { TouchableOpacityProps, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ContentHeader,
  Icon,
  Percent,
  Description,
  Content,
  ButtonIcon,
  Title,
  Row
} from './styles';
import { BoxCount } from '@components/Box/BoxCount';

export function GeneralStatistics() {

  const navigation = useNavigation();

  return (
    <Container>
      <ButtonIcon onPress={() => navigation.navigate('Home')}>
        <Icon type="up" />
      </ButtonIcon>
        <ContentHeader>
          <Percent>10%</Percent>
          <Description>das refeições dentro da dieta</Description>
        </ContentHeader>
      <Content>
        <Title>Estatísticas gerais</Title>
        <View style={{ gap: 12}}>
          <BoxCount
            title={22}
            description='melhor sequência de pratos dentro da dieta'
          />
          <BoxCount
            title={109}
            description='refeições registradas'
          />
          <Row>
            <BoxCount
              type='up'
              title={99}
              description='refeições dentro da dieta'
              width={'48%'}
            />
            <BoxCount
              type='down'
              title={10}
              description='refeições fora da dieta'
              width={'48%'}
            />
          </Row>
        </View>
      </Content>
    </Container>
  );
}
