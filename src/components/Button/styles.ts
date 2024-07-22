import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Plus, PencilSimpleLine, Trash } from 'phosphor-react-native'

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
  type: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  min-height: 50px;
  max-height: 50px;

  background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GRAY_200 : theme.COLORS.GRAY_700};

  border: ${({ theme, type }) => type === 'SECONDARY' ? `1px solid ${theme.COLORS.GRAY_200}` : 'none'};

  border-radius: 6px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 10px 0;
  gap: 8px;
`

export const Title = styled.Text <Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${ type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}  
`;

export const PencilSimpleLineIcon = styled(PencilSimpleLine).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
}))``

export const TrashIcon = styled(Trash).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
}))``

export const PlusIcon = styled(Plus).attrs<Props>(({ theme, type }) => ({
  size: 18,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
}))``