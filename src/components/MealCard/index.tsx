import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ArrowRight } from 'phosphor-react-native';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Box } from '../Box';
import { Text } from '../Text';
import { theme } from '../../theme';

type MealCardProps = {
  id: string;
  name: string;
  date: string;
  isOnDiet: boolean;
};

export function MealCard({ id, name, date, isOnDiet }: MealCardProps) {
  const navigation = useNavigation();

  const formattedDate = format(new Date(date), "dd'/'MM'/'yy 'às' HH:mm", {
    locale: ptBR,
  });

  function handlePress() {
    navigation.navigate('mealDetails', { id });
  }

  return (
    <TouchableOpacity onPress={handlePress}>
      <Box
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        padding="12px"
        borderWidth={1}
        borderColor={theme.colors.gray[500]}
        borderRadius="6px"
        marginBottom="8px"
      >
        <Box flexDirection="row" alignItems="center" gap="12px">
          <Box
            width="14px"
            height="14px"
            borderRadius="7px"
            backgroundColor={isOnDiet ? theme.colors.green[500] : theme.colors.red[500]}
          />
          <Box>
            <Text fontSize="16px" fontWeight="bold" color={theme.colors.gray[200]}>
              {formattedDate}
            </Text>
            <Text fontSize="16px" color={theme.colors.gray[200]}>
              {name}
            </Text>
          </Box>
        </Box>
        <ArrowRight size={20} color={theme.colors.gray[400]} />
      </Box>
    </TouchableOpacity>
  );
} 