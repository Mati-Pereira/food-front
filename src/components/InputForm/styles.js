import styled from 'styled-components';

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.normal};
  > label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${({ theme }) => theme.colors.label};
    font-size: 1rem;
    input {
      border: 1px solid ${({ theme }) => theme.colors.white};
      border-radius: 8px;
      padding: 16px 14px;
      background: transparent;
      color: ${({ theme }) => theme.colors.placeholder};
      font-size: 1rem;
      &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
        font-size: 1rem;
      }
    }
  }
`;
