import { useEffect, useState } from 'react';
import { KingLogo, KingPassLogo } from 'src/config/images';
import { useWeb3Store } from 'src/context/web3context';
import { getTypeofUser, handleClaim, handleStartSubScription, handleKingpassWithdraw, handleSubscriptionCancel } from 'src/contracts';
import styled from 'styled-components';
import { useAccount } from 'wagmi';

export const KingpassClaim = () => {
  const { address } = useAccount();
  const { isInitialized } = useWeb3Store();
  const [typeOfUser, setTypeOfUser] = useState(0);

  useEffect(() => {
    if (isInitialized) {
      (async () => {
        const _typeOfUser = await getTypeofUser(address);
        setTypeOfUser(Number(_typeOfUser.toString()));
      })();
    }
  }, [isInitialized]);
  return (
    <KingpassClaimContainer>
      <ClaimContentContainer>
        <ClaimTitle>
          Claim your <span style={{ fontFamily: 'gotham-bold' }}>Kingpass</span>
        </ClaimTitle>
        <ClaimContent>
          <p>
            You have never been closer to the ultimate experience. Claiming your KingPass is bringing you to new
            heights, finally allowing you to enjoy all the perks of being a VIP KING.
          </p>
          <p>
            You always have two choices with us. In order to claim your pass you can either lock your $KING tokens or
            join our monthly subscription program (both of the previously mentioned can be cancelled after 30 days
            without any penalisation).
          </p>
        </ClaimContent>
      </ClaimContentContainer>
      {typeOfUser === 0 && (
        <ClaimCardContainer>
          <ClaimCard>
            <CardTitle>
              <p>Lock your $KING to </p>
              <p>claim the KINGPASS</p>
            </CardTitle>
            <CardAction>
              <CardButton1>
                <CardButtonValue>200.000 KING</CardButtonValue>
                <CardButtonIcon src={KingLogo} alt="card-button-icon" />
              </CardButton1>
              <CardButton2
                onClick={() => {
                  handleClaim();
                }}
              >
                Claim
              </CardButton2>
            </CardAction>
          </ClaimCard>
          <ClaimCard>
            <CardTitle>
              <p>Start your monthly</p> <p>subscription now</p>
            </CardTitle>
            <CardAction>
              <CardButton1>
                <CardButtonValue>$ 99,99/mo</CardButtonValue>
              </CardButton1>
              <CardButton2 onClick={() => {
                handleStartSubScription();
              }}>Start</CardButton2>
            </CardAction>
          </ClaimCard>
        </ClaimCardContainer>
      )}

      {typeOfUser === 1 && (
        <ClaimCardContainer>
          <ClaimCard>
            <CardTitle>
              <p>Congratulations</p>
              <p>You are a</p>
              <p>Kingpass holder</p>
            </CardTitle>
            <CardImg>
              <Img src={KingPassLogo} alt="kingpass-logo" />
            </CardImg>
          </ClaimCard>
          <ClaimCard>
            <CardTitle>
              <p>Withdraw your $KING</p>
              <p>to unclaim the Kingpass</p>
            </CardTitle>
            <CardAction>
              <CardButton1>
                <CardButtonValue>200.000 KING</CardButtonValue>
                <CardButtonIcon src={KingLogo} alt="card-button-icon" />
              </CardButton1>
              <CardButton2 onClick={() => {handleKingpassWithdraw();}}>Withdraw</CardButton2>
            </CardAction>
          </ClaimCard>
        </ClaimCardContainer>
      )}

      {typeOfUser === 2 && (
        <ClaimCardContainer>
          <ClaimCard>
            <CardTitle>
              <p>Congratulations</p>
              <p>You are a</p>
              <p>Kingpass holder</p>
            </CardTitle>
            <CardImg>
              <Img src={KingPassLogo} alt="kingpass-logo" />
            </CardImg>
          </ClaimCard>
          <ClaimCard>
            <CardTitle>
              <p>Cancel yours</p>
              <p>Subscription</p>
            </CardTitle>
            <CardAction>
              <CardButton2 onClick={() => {handleSubscriptionCancel();}}>Cancel</CardButton2>
            </CardAction>
          </ClaimCard>
        </ClaimCardContainer>
      )}
    </KingpassClaimContainer>
  );
};

const KingpassClaimContainer = styled.div`
  padding-top: 8rem;
  display: flex;
  gap: 30px;
  @media screen and (max-width: 1356px) {
    flex-direction: column;
    padding-top: 7rem;
  }
  @media screen and (max-width: 768px) {
    padding-top: 61px;
  }
`;

const ClaimContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
`;

const ClaimTitle = styled.div`
  font-size: 28px;
  text-align: left;
  line-height: 40px;
  @media screen and (max-width: 1356px) {
    width: 100%;
    text-align: center;
  }
  @media screen and (max-width: 450px) {
    line-height: 35px;
    font-size: 17px;
  }
`;

const ClaimContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 17px;
  line-height: 30px;
  padding-top: 15px;
  @media screen and (max-width: 450px) {
    font-size: 12px;
    padding-top: 0;
  }
`;

const ClaimCardContainer = styled.div`
  padding: 70px 30px;
  display: flex;
  gap: 23px;
  border-radius: 23px;
  background-color: rgba(0, 0, 0, 0.3);
  justify-content: center;
  @media screen and (max-width: 1356px) {
    padding: 0;
    background: none;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ClaimCard = styled.div`
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.45);
  padding: 72px 30px;
  width: 238px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 35px;
  @media screen and (max-width: 640px) {
    padding: 72px 20px;
  }
  @media screen and (max-width: 500px) {
    padding: 42px 45px;
  }

  @media screen and (max-width: 390px) {
    padding: 42px 45px;
    margin: 0 20px;
    width: fit-content;
  }
`;

const CardTitle = styled.div`
  font-size: 20px;
  font-family: 'gotham-bold';
  color: #ffe3fd;
  text-align: center;
  white-space: nowrap;
  p {
    line-height: 10px;
  }
  @media screen and (max-width: 640px) {
    font-size: 16px;
  }
`;

const CardButtonValue = styled.div`
  font-size: 17px;
  @media screen and (max-width: 640px) {
    font-size: 13px;
  }
`;

const CardButtonIcon = styled.img`
  width: 30px;
  height: auto;
  @media screen and (max-width: 640px) {
    width: 20px;
  }
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
  cursor: pointer;
  @media screen and (max-width: 640px) {
    height: 45px;
    gap: 10px;
  }
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
  cursor: pointer;
  background: transparent linear-gradient(232deg, #fcb0fe 0%, #bbffff 100%) 0% 0% no-repeat padding-box;
  text-transform: uppercase;
  @media screen and (max-width: 640px) {
    height: 45px;
    font-size: 13px;
  }
`;

const CardImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 150px;
  height: auto;
`;
