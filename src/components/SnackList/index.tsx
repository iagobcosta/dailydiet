import { TouchableOpacityProps } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AppStackParamList } from '../../routes/app.routes'
import {
  Container,
  Title,
  Card,
  Divider,
  Hour,
  Text,
  Circle,
  CircleTypeStyleProps
} from './styles'

type MealProps = {
  id: string
  hour: string
  name: string
  description: string
  withinDiet: boolean
}

type Props = {
  date: Date
  meals: MealProps[]
}

type NavigationProps = NativeStackNavigationProp<AppStackParamList>

export function SnackList({ date, meals }: Props) {
  const navigation = useNavigation<NavigationProps>();

  function handleMealPress(mealId: string) {
    navigation.navigate('MealDetails', { id: mealId });
  }

  return (
    <Container>
      <Title>{date.toLocaleDateString('pt-BR',{year:"2-digit",month:"2-digit", day:"2-digit"}).replaceAll('/', '.')}</Title>
      {
        meals.map((meal) => (
          <Card 
            key={meal.id}
            activeOpacity={0.7}
            onPress={() => handleMealPress(meal.id)}
          >
            <Hour>{meal.hour}</Hour>
            <Divider>|</Divider>
            <Text>{meal.name}</Text>
            <Circle type={meal.withinDiet ? 'up' : 'down'} />
          </Card>
        ))
      }
    </Container>    
  )
}