import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type ContainerProps = {
  type: ButtonTypeStyleProps;
  variant: 'primary' | 'outline';
}

type TitleProps = {
  type: ButtonTypeStyleProps;
  variant: 'primary' | 'outline';
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;
  background-color: ${({ theme, variant }) => 
    variant === 'primary' ? theme.colors.gray[200] : 'transparent'};
  border: ${({ theme, variant }) => 
    variant === 'outline' ? `1px solid ${theme.colors.gray[200]}` : 'none'};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 10px 0;
  gap: 8px;
`;

export const Title = styled.Text<TitleProps>`
  ${({ theme, variant }) => css`
    font-size: ${theme.fontSizes.md}px;
    color: ${variant === 'primary' ? theme.colors.white : theme.colors.gray[100]};
    font-family: ${theme.fontFamily.bold};
  `}
`;

export const PencilSimpleLineIcon = styled(PencilSimpleLine).attrs<ContainerProps>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.colors.white : theme.colors.gray[100]
}))``

export const TrashIcon = styled(Trash).attrs<ContainerProps>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.colors.white : theme.colors.gray[100]
}))``

export const PlusIcon = styled(Plus).attrs<ContainerProps>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.colors.white : theme.colors.gray[100]
}))``