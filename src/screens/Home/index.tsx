import { FlatList } from 'react-native';
import { Container, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

import { HeaderHome } from '@components/HeaderHome';
import { BoxPercent } from '@components/Box/Percent';
import { Button } from '@components/Button';
import { SnackList } from '@components/SnackList';

export function Home() {

  const navigation = useNavigation();

  const data = [
    {
      id: 1,
      date: new Date(),
      snack: [
        { id: 1, hour: '09:00', name: 'X-tudo', description: 'Arroz, feijão, batata', withinDiet: false },
        { id: 2, hour: '12:00', name: 'Sanduíche', description: 'Feijão, arroz, batata', withinDiet: true },
        { id: 3, hour: '18:00', name: 'Lasanha de frango com queijo', description: 'Batata, arroz, feijão', withinDiet: false },
        { id: 4, hour: '21:00', name: 'Torta de chocolate', description: 'Feijão, arroz, batata', withinDiet: false },
      ]
    },
    {
      id: 2,
      date: new Date(),
      snack: [
        { id: 1, hour: '09:00', name: 'X-tudo', description: 'Arroz, feijão, batata', withinDiet: false },
        { id: 2, hour: '12:00', name: 'Sanduíche', description: 'Feijão, arroz, batata', withinDiet: true },
        { id: 3, hour: '18:00', name: 'Lasanha de frango com queijo', description: 'Batata, arroz, feijão', withinDiet: false },
        { id: 4, hour: '21:00', name: 'Torta de chocolate', description: 'Feijão, arroz, batata', withinDiet: false },
      ]
    },
    {
      id: 3,
      date: new Date(),
      snack: [
        { id: 1, hour: '09:00', name: 'X-tudo', description: 'Arroz, feijão, batata', withinDiet: false },
        { id: 2, hour: '12:00', name: 'Sanduíche', description: 'Feijão, arroz, batata', withinDiet: true },
        { id: 3, hour: '18:00', name: 'Lasanha de frango com queijo', description: 'Batata, arroz, feijão', withinDiet: false },
        { id: 4, hour: '21:00', name: 'Torta de chocolate', description: 'Feijão, arroz, batata', withinDiet: false },
      ]
    }
  ]

  return (
    <Container>
      <HeaderHome />
      <BoxPercent
        percent="75,32"
        description="das refeições dentro da dieta"
        onPress={() => navigation.navigate('GeneralStatistics')}
      />
      <Title>Refeições</Title>
      <Button icon='PlusIcon' title="Nova refeição" onPress={() => navigation.navigate('NewMeal')} />

      <FlatList
        data={data}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <SnackList item={item} />
        )}
        showsVerticalScrollIndicator={false}
      />

      
    </Container>
  );
}
