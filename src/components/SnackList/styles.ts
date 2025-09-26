import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export type CircleTypeStyleProps = 'up' | 'down';

type Props = {
  type: CircleTypeStyleProps
}

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl}px;
  margin: 20px 0 10px;
`;

export const Card = styled(TouchableOpacity)`

  flex-direction: row;

  border: 1px solid ${({ theme }) => theme.colors.gray[500]};  
  border-radius: 6px;

  padding: 14px 16px 14px 12px;
  align-items: center;

  margin-bottom: 8px;
`;

export const Hour = styled.Text`
  color: ${({ theme }) => theme.colors.gray[100]};
  font-family: ${({ theme }) => theme.fontFamily.bold};
  font-size: ${({ theme }) => theme.fontSizes.sm}px;
`;

export const Divider = styled.Text`
  color: ${({ theme }) => theme.colors.gray[400]};
  margin: 0 8px;
`;

export const Text = styled.Text.attrs(({ theme }) => ({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
}))`
  flex: 1;
  padding-right: 20px;
  color: ${({ theme }) => theme.colors.gray[200]};
  font-family: ${({ theme }) => theme.fontFamily.regular};
  font-size: ${({ theme }) => theme.fontSizes.lg}px;
`;

export const Circle = styled.View <Props>`
  width: 14px;
  height: 14px;

  border-radius: 7px;
  background-color: ${({ theme, type }) => type === 'up' ? theme.colors.green[500] : theme.colors.red[500]};
`;