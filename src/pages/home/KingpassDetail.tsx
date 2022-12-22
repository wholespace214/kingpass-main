import { PlayButton } from 'src/components/Button';
import { KingpassCard } from 'src/config/images';
import styled from 'styled-components';

export const KingpassDetail = () => {
  return (
    <KingpassDetailContainer>
      <KingpassAction>
        <Img src={KingpassCard} alt="kingpass-card" />
        <ContentDetails>
          <p>
            <span>Immerse yourself into the newest </span>
            <span style={{ fontFamily: 'gotham-bold' }}>digital VIP experience</span>
          </p>
          <PlayButton />
        </ContentDetails>
      </KingpassAction>
      <KingpassContent>
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </KingpassContent>
    </KingpassDetailContainer>
  );
};

const KingpassDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KingpassAction = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
  gap: 30px;
  @media screen and (max-width: 1072px) {
    flex-direction: column;
    gap: 0;
  }
`;

const Img = styled.img`
  width: 400px;
  height: auto;
  @media screen and (max-width: 1072px) {
    width: 300px;
  }
  @media screen and (max-width: 450px) {
    width: 200px;
  }
`;

const ContentDetails = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  font-size: 45px;
  line-height: 60px;
  @media screen and (max-width: 1072px) {
    flex-direction: column-reverse;
    align-items: center;
    font-size: 25px;
    max-width: 330px;
    text-align: center;
    line-height: 35px;
  }
`;

const KingpassContent = styled.div`
  max-width: 1070px;
  font-size: 17px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 30px;
  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;
