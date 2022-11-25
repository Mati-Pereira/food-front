import styled from 'styled-components';

export const Container = styled.button`
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
  width: 100%;
  cursor: pointer;
  > span {
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: 14px;
    padding: 12px 0;
  }
`;
