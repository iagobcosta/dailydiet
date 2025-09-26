import { View, TouchableOpacity } from 'react-native';
import styled, { useTheme } from 'styled-components/native';
import { Box } from '../Box';
import { Text } from '../Text';
import { Input } from '../Input';

const DietOption = styled(TouchableOpacity)<{ selected: boolean; color: string }>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  background-color: ${({ selected, theme }) => selected ? theme.colors.gray[200] : theme.colors.gray[100]};
  border-radius: 8px;
  border-width: ${({ selected, color }) => selected ? '2px' : '0px'};
  border-color: ${({ color }) => color};
`;

const DietCircle = styled.View<{ color: string }>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ color }) => color};
  margin-right: 8px;
`;

type MealFormProps = {
  name: string;
  setName: (value: string) => void;
  description: string;
  setDescription: (value: string) => void;
  date: string;
  setDate: (value: string) => void;
  time: string;
  setTime: (value: string) => void;
  isOnDiet: boolean;
  setIsOnDiet: (value: boolean) => void;
};

export function MealForm({
  name,
  setName,
  description,
  setDescription,
  date,
  setDate,
  time,
  setTime,
  isOnDiet,
  setIsOnDiet,
}: MealFormProps) {
  const { colors } = useTheme();

  return (
    <View>
      <Box gap="8px" marginBottom="16px">
        <Text fontSize="md" color={colors.gray[100]}>Nome</Text>
        <Input
          value={name}
          onChangeText={setName}
          placeholder=""
        />
      </Box>
      <Box gap="8px" marginBottom="16px">
        <Text fontSize="md" color={colors.gray[100]}>Descrição</Text>
        <Input
          value={description}
          onChangeText={setDescription}
          placeholder=""
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
      </Box>
      <Box flexDirection="row" gap="12px" marginBottom="16px">
        <Box flex={1} gap="8px">
          <Text fontSize="md" color={colors.gray[100]}>Data</Text>
          <Input
            value={date}
            onChangeText={setDate}
            placeholder="DD/MM/AAAA"
            keyboardType="numeric"
            maxLength={10}
          />
        </Box>
        <Box flex={1} gap="8px">
          <Text fontSize="md" color={colors.gray[100]}>Hora</Text>
          <Input
            value={time}
            onChangeText={setTime}
            placeholder="HH:MM"
            keyboardType="numeric"
            maxLength={5}
          />
        </Box>
      </Box>
      <Box gap="8px" marginBottom="0">
        <Text fontSize="md" color={colors.gray[100]}>Está dentro da dieta?</Text>
        <Box flexDirection="row" gap="8px">
          <DietOption
            selected={isOnDiet}
            color={colors.green[500]}
            onPress={() => setIsOnDiet(true)}
            activeOpacity={0.8}
          >
            <DietCircle color={colors.green[500]} />
            <Text fontSize="md" color={colors.gray[700]}>Sim</Text>
          </DietOption>
          <DietOption
            selected={!isOnDiet}
            color={colors.red[500]}
            onPress={() => setIsOnDiet(false)}
            activeOpacity={0.8}
          >
            <DietCircle color={colors.red[500]} />
            <Text fontSize="md" color={colors.gray[700]}>Não</Text>
          </DietOption>
        </Box>
      </Box>
    </View>
  );
} 