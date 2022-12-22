import { KingLogo } from 'src/config/images';
import styled from 'styled-components';

export const KingpassClaim = () => {
  return (
    <KingpassClaimContainer>
      <ClaimContentContainer>
        <ClaimTitle>
          Claim your <span style={{ fontFamily: 'gotham-bold' }}>Kingpass</span>
        </ClaimTitle>
        <ClaimContent>
          <p>
            orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        </ClaimContent>
      </ClaimContentContainer>
      <ClaimCardContainer>
        <ClaimCard>
          <CardTitle>Lock your $KING to claim the KINGPASS</CardTitle>
          <CardAction>
            <CardButton1>
              <CardButtonValue>200.000 KING</CardButtonValue>
              <CardButtonIcon src={KingLogo} alt="card-button-icon" />
            </CardButton1>
            <CardButton2>Claim</CardButton2>
          </CardAction>
        </ClaimCard>
        <ClaimCard>
          <CardTitle>Start your monthly subscription now</CardTitle>
          <CardAction>
            <CardButton1>
              <CardButtonValue>$ 99,99/mo</CardButtonValue>
            </CardButton1>
            <CardButton2>Start</CardButton2>
          </CardAction>
        </ClaimCard>
      </ClaimCardContainer>
    </KingpassClaimContainer>
  );
};

const KingpassClaimContainer = styled.div`
  padding-top: 11rem;
  display: flex;
  gap: 55px;
  @media screen and (max-width: 1356px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
    padding-top: 61px;
  }
`;

const ClaimContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
  @media screen and (max-width: 768px) {
    gap: 0;
  }
`;

const ClaimTitle = styled.div`
  font-size: 45px;
  line-height: 60px;
  max-width: 250px;
  @media screen and (max-width: 1356px) {
    width: 100%;
    font-size: 25px;
    text-align: center;
    max-width: none;
  }
`;

const ClaimContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 455px;
  font-size: 17px;
  line-height: 30px;
  @media screen and (max-width: 1356px) {
    width: 100%;
    line-height: 40px;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;

const ClaimCardContainer = styled.div`
  padding: 47px 56px;
  display: flex;
  gap: 23px;
  border-radius: 23px;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  @media screen and (max-width: 1356px) {
    padding: 0;
    background: none;
  }
  @media screen and (max-width: 690px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ClaimCard = styled.div`
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.45);
  padding: 72px 45px;
  min-width: 210px;
  max-width: 270px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
  @media screen and (max-width: 640px) {
    padding: 72px 45px;
  }
`;

const CardTitle = styled.div`
  font-size: 20px;
  font-family: 'gotham-bold';
  color: #ffe3fd;
  text-align: center;
`;

const CardButtonValue = styled.div`
  font-size: 17px;
`;

const CardButtonIcon = styled.img`
  width: 30px;
  height: auto;
`;

const CardAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const CardButton1 = styled.div`
  border: 2px solid #94eafe;
  border-radius: 37px;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const CardButton2 = styled.button`
  border-radius: 37px;
  width: calc(100% + 4px);
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  color: #010101;
  font-family: 'gotham-bold';
  border: none;
  background: transparent linear-gradient(232deg, #fcb0fe 0%, #bbffff 100%) 0% 0% no-repeat padding-box;
  text-transform: uppercase;
`;