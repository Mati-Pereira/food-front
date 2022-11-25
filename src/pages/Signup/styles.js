import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  gap: 20rem;
`;

export const Content = styled.div`
  border-radius: 8px;
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
  > a {
    text-decoration: none;
    font-family: ${({ theme }) => theme.fonts.title};
    color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    text-align: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
