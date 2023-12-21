import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => (theme ? 'green' : 'red')};
`;

export const Box = styled.div`
  background-color: #fff;
  width: 30%;
  height: 30%;
  padding: 1%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2% 0;
  box-shadow: 1px 1px 5px #ccc;
`;
export const Title = styled.h1`
  color: #333;
  margin: 2% 0;
  user-select: none;
  justify-self: start;
`;
