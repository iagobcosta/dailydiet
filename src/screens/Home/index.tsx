import { useEffect, useState, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';
import { Container, Title } from './styles';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { Plus } from 'phosphor-react-native';

import { HeaderHome } from '@components/HeaderHome';
import { BoxPercent } from '@components/Box/Percent';
import { Button } from '@components/Button';
import { SnackList } from '@components/SnackList';
import { api, Meal, MealsResponse } from '../../services/api';

type MealGroup = {
  id: string;
  date: Date;
  meals: Meal[];
};

export function Home() {
  const navigation = useNavigation();
  const [meals, setMeals] = useState<MealGroup[]>([]);
  const [statistics, setStatistics] = useState({
    inDietPercentage: 0,
  });

  const fetchMeals = useCallback(async () => {
    try {
      const response = await api.get<MealsResponse>('/meals');
      const mealsData = response.data.meals;

      // Agrupa as refeições por data
      const groupedMeals = mealsData.reduce((groups: MealGroup[], meal) => {
        const date = new Date(meal.date);
        const dateKey = date.toISOString().split('T')[0];

        const existingGroup = groups.find(group => 
          group.date.toISOString().split('T')[0] === dateKey
        );

        if (existingGroup) {
          existingGroup.meals.push(meal);
        } else {
          groups.push({
            id: dateKey,
            date,
            meals: [meal],
          });
        }

        return groups;
      }, []);

      // Ordena os grupos por data (mais recente primeiro)
      groupedMeals.sort((a, b) => b.date.getTime() - a.date.getTime());

      // Ordena as refeições dentro de cada grupo por hora
      groupedMeals.forEach(group => {
        group.meals.sort((a, b) => {
          const timeA = new Date(a.date).getTime();
          const timeB = new Date(b.date).getTime();
          return timeA - timeB;
        });
      });

      setMeals(groupedMeals);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as refeições.');
    }
  }, []);

  const fetchStatistics = useCallback(async () => {
    try {
      const response = await api.get('/statistics');
      setStatistics(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as estatísticas.');
    }
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
      fetchStatistics();
    }, [fetchMeals, fetchStatistics])
  );

  return (
    <Container>
      <HeaderHome />
      <BoxPercent
        percent={statistics.inDietPercentage.toFixed(2)}
        description="das refeições dentro da dieta"
        onPress={() => navigation.navigate('GeneralStatistics')}
      />
      <Title>Refeições</Title>
      <Button 
        title="Nova refeição"
        icon={Plus}
        onPress={() => navigation.navigate('NewMeal')}
      />

      <FlatList
        data={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SnackList
            date={item.date}
            meals={item.meals.map(meal => ({
              id: meal.id,
              hour: new Date(meal.date).toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit',
              }),
              name: meal.name,
              description: meal.description,
              withinDiet: meal.is_on_diet,
            }))}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}
