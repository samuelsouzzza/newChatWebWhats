import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 35px;
  border: 1px solid ${({ theme }) => (theme === true ? '#005d4b' : '#25d366')};
  background-color: ${({ theme }) => (theme === true ? '#005d4b' : '#25d366')};
  color: #fff;
  border-radius: 5px;
  font-size: 1.15rem;
  cursor: pointer;
  &:hover {
    border: 1px solid ${({ theme }) => (theme === true ? '#25d366' : '#005d4b')};
  }
  &:disabled {
    border: 1px solid ${({ theme }) => (theme === true ? '#005d4b' : '#25d366')};
    filter: grayscale(1);
    cursor: not-allowed;
  }
`;
