import { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ArrowLeft } from 'phosphor-react-native';
import styled, { useTheme } from 'styled-components/native';

import { Box } from '@components/Box';
import { Text } from '@components/Text';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { api } from '../../services/api';
import { AppStackParamList } from '../../routes/app.routes';
import { MealForm } from '@components/MealForm';

type NewMealScreenNavigationProp = NativeStackNavigationProp<AppStackParamList, 'NewMeal'>;

type RouteParams = {
  id?: string;
};

const SafeArea = styled.SafeAreaView`
  flex: 1;
  background-color: #FAFAFA;
`;

const Card = styled.View`
  background-color: #FFF;
  border-radius: 20px;
  padding: 24px;
  margin: 32px 24px 0 24px;
  box-shadow: 0px 2px 8px rgba(0,0,0,0.04);
  elevation: 2;
`;

const Footer = styled.View`
  padding: 24px;
  background-color: #FAFAFA;
`;

export function NewMeal() {
  const navigation = useNavigation<NewMealScreenNavigationProp>();
  const route = useRoute();
  const params = route.params as RouteParams | undefined;
  const id = params?.id;
  const { colors } = useTheme();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isOnDiet, setIsOnDiet] = useState<boolean>(true);

  useEffect(() => {
    async function fetchMeal() {
      if (!id) return;

      try {
        const response = await api.get(`/meals/${id}`);
        const meal = response.data;
        setName(meal.name);
        setDescription(meal.description);
        setDate(meal.date);
        setTime(meal.time);
        setIsOnDiet(!!meal.isInDiet);
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível carregar os dados da refeição.');
        navigation.goBack();
      }
    }

    fetchMeal();
  }, [id, navigation]);

  async function handleSaveMeal() {
    try {
      if (!name || !description || !date || !time) {
        return Alert.alert('Erro', 'Preencha todos os campos');
      }

      const mealData = {
        name,
        description,
        date,
        time,
        isInDiet: isOnDiet
      };

      if (id) {
        await api.put(`/meals/${id}`, mealData);
      } else {
        await api.post('/meals', mealData);
      }

      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar a refeição.');
    }
  }

  return (
    <SafeArea>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={80}
      >
        <Box flexDirection="row" alignItems="center" justifyContent="center" padding="32px 0 0 0">
          <Button
            variant="outline"
            icon={ArrowLeft}
            title="Voltar"
            onPress={() => navigation.goBack()}
            style={{ position: 'absolute', left: 24 }}
          />
          <Text fontSize="xl" fontWeight="bold" color="#333">
            Nova refeição
          </Text>
        </Box>
        <Card>
          <MealForm
            name={name}
            setName={setName}
            description={description}
            setDescription={setDescription}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            isOnDiet={isOnDiet}
            setIsOnDiet={setIsOnDiet}
          />
        </Card>
        <Footer>
          <Button
            title="Cadastrar refeição"
            onPress={handleSaveMeal}
          />
        </Footer>
      </KeyboardAvoidingView>
    </SafeArea>
  );
}