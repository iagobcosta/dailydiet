import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { GeneralStatistics } from '../screens/GeneralStatistics'
import { NewMeal } from '../screens/NewMeal'

const { Navigator, Screen } = createNativeStackNavigator()

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
    </Navigator>
  )
}