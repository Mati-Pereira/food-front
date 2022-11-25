import styled from 'styled-components';

export const Container = styled.div`
  font-family: ${({ theme }) => theme.fonts.normal};
  > label {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.label};
    input {
      border: 1px solid ${({ theme }) => theme.colors.white};
      border-radius: 8px;
      padding: 16px 14px;
      background: transparent;
      font-size: 1rem;
      &::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
        font-size: 1rem;
      }
    }
  }
`;
