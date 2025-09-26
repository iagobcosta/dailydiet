import { useEffect, useState, useCallback } from 'react';
import { Alert, View } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {
  Container,
  ContentHeader,
  Icon,
  Percent,
  Description,
  Content,
  ButtonIcon,
  Title,
  Row
} from './styles';
import { BoxCount } from '@components/Box/BoxCount';
import { api, MetricsResponse } from '../../services/api';

export function GeneralStatistics() {
  const navigation = useNavigation();
  const [metrics, setMetrics] = useState<MetricsResponse | null>(null);

  const fetchMetrics = useCallback(async () => {
    try {
      const response = await api.get<MetricsResponse>('/meals/metrics');
      setMetrics(response.data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar as estatísticas.');
      navigation.goBack();
    }
  }, [navigation]);

  useFocusEffect(
    useCallback(() => {
      fetchMetrics();
    }, [fetchMetrics])
  );

  if (!metrics) {
    return null;
  }

  const inDietPercentage = metrics.total > 0 
    ? (metrics.totalOnDiet / metrics.total) * 100 
    : 0;

  return (
    <Container>
      <ButtonIcon onPress={() => navigation.navigate('Home')}>
        <Icon type={inDietPercentage >= 50 ? 'up' : 'down'} />
      </ButtonIcon>
      <ContentHeader>
        <Percent>{inDietPercentage.toFixed(2)}%</Percent>
        <Description>das refeições dentro da dieta</Description>
      </ContentHeader>
      <Content>
        <Title>Estatísticas gerais</Title>
        <View style={{ gap: 12}}>
          <BoxCount
            title={metrics.bestOnDietSequence}
            description='melhor sequência de pratos dentro da dieta'
          />
          <BoxCount
            title={metrics.total}
            description='refeições registradas'
          />
          <Row>
            <BoxCount
              type='up'
              title={metrics.totalOnDiet}
              description='refeições dentro da dieta'
              width={'48%'}
            />
            <BoxCount
              type='down'
              title={metrics.totalOffDiet}
              description='refeições fora da dieta'
              width={'48%'}
            />
          </Row>
        </View>
      </Content>
    </Container>
  );
}
