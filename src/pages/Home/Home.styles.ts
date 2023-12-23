import styled from 'styled-components';

export const Container = styled.section`
  background-image: url(${({ theme }) => theme === true ? '/bg-dark.svg' : '/bg-light.svg'});
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => (theme === true ? '#4a4a4a' : '#ece5dd')};
`;

export const Box = styled.div`
  background-color: ${({ theme }) =>
    theme === true ? '#3a3a3aaa' : '#ffffffaa'};
  backdrop-filter: blur(5px);
  width: 30%;
  /* height: minmax(300px, auto); */
  padding: 1%;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 5% 0;
  box-shadow: 1px 1px 5px
    ${({ theme }) => (theme === true ? '#2a2a2a' : '#ddd')};
  p {
    font-size: 1rem;
    color: ${({ theme }) => (theme === true ? '#ddd' : '#2a2a2a')};
    margin: 3% 0;
  }
  @media (max-width: 400px) {
    width: 90%;
  }
`;
export const Title = styled.h1`
  color: ${({ theme }) => (theme === true ? '#ddd' : '#2a2a2a')};
  margin: 2% 0;
  user-select: none;
  justify-self: start;
`;
