import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.colors.green[500]
}))``;