import { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';
import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Box } from '@components/Box';
import { Text } from '@components/Text';
import { Button } from '@components/Button';
import { api } from '../../services/api';
import { AppStackParamList } from '../../routes/app.routes';

type MealDetailsScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'MealDetails'>;

type RouteParams = {
  id: string;
};

type Meal = {
  id: string;
  name: string;
  description: string;
  date: string;
  time: string;
  isInDiet: boolean;
};

export function MealDetails() {
  const navigation = useNavigation<MealDetailsScreenNavigationProp>();
  const route = useRoute();
  const { id } = route.params as RouteParams;

  const [meal, setMeal] = useState<Meal | null>(null);

  useEffect(() => {
    async function fetchMeal() {
      try {
        const response = await api.get(`/meals/${id}`);
        const mealData = response.data.meal;
        
        console.log('Dados da refeição:', mealData);

        // Garantir que todos os campos necessários existam
        if (!mealData) {
          throw new Error('Dados da refeição não encontrados');
        }

        // Extrair data e hora do campo date
        const dateTime = parseISO(mealData.date);
        const date = format(dateTime, 'yyyy-MM-dd');
        const time = format(dateTime, 'HH:mm');

        // Transformar os dados para o formato esperado
        const formattedMeal = {
          id: mealData.id,
          name: mealData.name,
          description: mealData.description || '',
          date,
          time,
          isInDiet: mealData.is_on_diet
        };

        setMeal(formattedMeal);
      } catch (error) {
        console.error('Erro ao buscar refeição:', error);
        Alert.alert('Erro', 'Não foi possível carregar os detalhes da refeição.');
        navigation.goBack();
      }
    }

    fetchMeal();
  }, [id, navigation]);

  async function handleDeleteMeal() {
    try {
      await api.delete(`/meals/${id}`);
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao deletar refeição:', error);
      Alert.alert('Erro', 'Não foi possível excluir a refeição.');
    }
  }

  function handleEditMeal() {
    navigation.navigate('NewMeal', { id });
  }

  if (!meal) {
    return null;
  }

  // Garantir que a data e hora existam antes de tentar formatar
  const formattedDate = meal.date && meal.time 
    ? format(parseISO(`${meal.date}T${meal.time}`), "dd/MM/yyyy 'às' HH:mm", {
        locale: ptBR,
      })
    : 'Data não disponível';

  return (
    <Box flex={1} backgroundColor="gray.700">
      <Box
        padding="24px"
        backgroundColor="gray.600"
        borderRadius="20px"
        marginBottom="20px"
      >
        <Text fontSize="xl" fontWeight="bold" color="gray.100">
          Refeição
        </Text>
      </Box>

      <Box padding="24px" flex={1}>
        <Box gap="8px" marginBottom="24px">
          <Text fontSize="lg" fontWeight="bold" color="gray.100">
            {meal.name}
          </Text>
          <Text fontSize="md" color="gray.200">
            {meal.description}
          </Text>
        </Box>

        <Box gap="8px" marginBottom="24px">
          <Text fontSize="lg" fontWeight="bold" color="gray.100">
            Data e hora
          </Text>
          <Text fontSize="md" color="gray.200">
            {formattedDate}
          </Text>
        </Box>

        <Box
          flexDirection="row"
          alignItems="center"
          gap="8px"
          padding="16px"
          backgroundColor={meal.isInDiet ? 'green.300' : 'red.300'}
          borderRadius="6px"
          marginBottom="24px"
        >
          <Box
            width="8px"
            height="8px"
            borderRadius="4px"
            backgroundColor={meal.isInDiet ? 'green.500' : 'red.500'}
          />
          <Text fontSize="md" color="gray.100">
            {meal.isInDiet ? 'dentro da dieta' : 'fora da dieta'}
          </Text>
        </Box>

        <Box flex={1} justifyContent="flex-end" gap="8px">
          <Button
            title="Editar refeição"
            icon={PencilSimpleLine}
            onPress={handleEditMeal}
          />
          <Button
            title="Excluir refeição"
            variant="outline"
            icon={Trash}
            onPress={handleDeleteMeal}
          />
        </Box>
      </Box>
    </Box>
  );
} 