import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { GeneralStatistics } from '../screens/GeneralStatistics'
import { NewMeal } from '../screens/NewMeal'
import { MealDetails } from '../screens/MealDetails'

const { Navigator, Screen } = createNativeStackNavigator()

export type AppStackParamList = {
  Home: undefined;
  GeneralStatistics: undefined;
  NewMeal: { id?: string };
  MealDetails: { id: string };
};

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="Home"
        component={Home}
      />
      <Screen
        name="GeneralStatistics"
        component={GeneralStatistics}
      />
      <Screen
        name="NewMeal"
        component={NewMeal}
      />
      <Screen
        name="MealDetails"
        component={MealDetails}
      />
    </Navigator>
  )
}