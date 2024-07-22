import { TouchableOpacityProps, FlatList } from 'react-native'
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

type SnackProps = {
  id: number
  hour: string
  name: string
  description: string
  withinDiet: boolean
}

type SnackListProps = {
  id: number
  date: Date
  snack: SnackProps[]
}

type Props = TouchableOpacityProps & {
  item: SnackListProps
}

export function SnackList({ item, ...rest }: Props) {
  return (
    <Container>
      <Title>{item.date.toLocaleDateString('pt-BR',{year:"2-digit",month:"2-digit", day:"2-digit"}).replaceAll('/', '.')}</Title>
      {
        item.snack.map((snack) => (
          <Card activeOpacity={0.7} {...rest} key={snack.id} >
            <Hour>{snack.hour}</Hour>
            <Divider>|</Divider>
            <Text>{snack.name}</Text>
            <Circle type={snack.withinDiet ? 'up' : 'down'} />
          </Card>
        ))
      }
    </Container>    
  )
}