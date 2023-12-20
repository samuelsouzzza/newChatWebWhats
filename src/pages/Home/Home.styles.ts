import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: red; */
`;

export const Box = styled.div`
  /* background-color: red; */
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
