import styled from 'styled-components';

export const Container = styled.input`
  background-color: transparent;
  color: ${({ theme }) => (theme === true ? '#ece5dd' : '#4a4a4a')};
  width: 100%;
  height: 35px;
  font-size: 1.15rem;
  padding: 0 1%;
  outline: none;
  border-radius: 5px;
  transition: 0.3s;
  border: 1px solid ${({ theme }) => (theme === true ? '#333' : '#ccc')};
  text-align: center;
  &::placeholder {
    color: ${({ theme }) => (theme === true ? '#555' : '#bbb')};
  }
  &:focus {
    border: 1px solid ${({ theme }) => (theme === true ? '#005d4b' : '#25d366')};
  }
  &::-webkit-inner-spin-button {
    display: none;
  }
`;
