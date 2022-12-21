import styled from 'styled-components';

export const Home = () => {
  return <HomeContainer></HomeContainer>;
};

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;

  gap: 50px;
`;
