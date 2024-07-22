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
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  margin: 20px 0 10px;
`;

export const Card = styled(TouchableOpacity)`

  flex-direction: row;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};  
  border-radius: 6px;

  padding: 14px 16px 14px 12px;
  align-items: center;

  margin-bottom: 8px;
`;

export const Hour = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`;

export const Divider = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  margin: 0 8px;
`;

export const Text = styled.Text.attrs(({ theme }) => ({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
}))`
  flex: 1;
  padding-right: 20px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;

export const Circle = styled.View <Props>`
  width: 14px;
  height: 14px;

  border-radius: 7px;
  background-color: ${({ theme, type }) => type === 'up' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;