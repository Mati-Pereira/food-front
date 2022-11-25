import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.backgroundForm};
  min-width: 300px;

  > h1 {
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
`;

export const Form = styled.form``;
