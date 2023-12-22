import styled from 'styled-components';

export const Container = styled.div`
  background-color: transparent;
  color: ${({ theme }) => (theme === true ? '#ddd' : '#2a2a2a')};
  width: 100%;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: end;
  svg {
    cursor: pointer;
  }
`;
