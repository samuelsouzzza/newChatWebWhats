import styled from 'styled-components';

export const Container = styled.input`
  width: 100%;
  height: 35px;
  font-size: 1.15rem;
  padding: 0 1%;
  border-radius: 5px;
  border: 1px solid #ccc;
  text-align: center;
  &::placeholder {
    color: #ccc;
  }
  &::-webkit-inner-spin-button {
    display: none;
  }
`;
