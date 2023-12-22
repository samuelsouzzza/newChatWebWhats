import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 35px;
  border: 0;
  background-color: ${({ theme }) => (theme === true ? '#005d4b' : '#25d366')};
  color: #fff;
  border-radius: 5px;
  font-size: 1.15rem;
  font-weight: bold;
  cursor: pointer;
`;
