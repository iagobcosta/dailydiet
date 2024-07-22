import { TextInputProps } from 'react-native';
import {
  Container,
  InputStyle,
  Title
} from './styles';
import { useTheme } from 'styled-components/native';
import { useState } from 'react';

type Props = TextInputProps & {
  title: string
  multiline?: boolean
}

export function Input({ title, multiline = false, ...rest }: Props) {

  const { COLORS } = useTheme();

  const [isFocus, setIsFocus] = useState(false);

  return (
    <Container>
      <Title>{title}</Title>
      <InputStyle
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        type={isFocus ? 'Active' : 'Default'}
        cursorColor={COLORS.GRAY_100}
        multiline={multiline}
        {...rest}
      />
    </Container>
  );
}