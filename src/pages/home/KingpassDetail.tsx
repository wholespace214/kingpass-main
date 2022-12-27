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
          KingPass allows you to be and feel unique within KING’s ecosystem and the crypto space. If you are the type to
          enjoy priorities, exclusive information, decision-making, discounts and recognition, this is your place, this
          is your card.
        </p>
        <p>
          The KINGPASS comes in the form of an NFT within your wallet. Through coding, KING is able to recognise whether
          your subscription is active or not, allowing you to access or not to your VIP experience. King Pass is a
          limited non tradable asset with a supply of 1000 pieces, will you be able to get your hands in one?
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  line-height: 30px;
  @media screen and (max-width: 450px) {
    font-size: 12px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
