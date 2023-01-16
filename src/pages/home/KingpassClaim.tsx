/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { KingLogo, KingPassLogo, CalendarIcon, StarIcon, BusdIcon } from 'src/config/images';
import { useWeb3Store } from 'src/context/web3context';
import { getTypeofUser, handleClaim, handleStartSubScription, handleKingpassWithdraw, handleSubscriptionCancel, hasUserKing } from 'src/contracts';
import styled from 'styled-components';
import contracts from 'src/contracts/contracts.json'
import { useAccount, useBalance } from 'wagmi';
import { CurrencyDropDown } from 'src/components/Dropdown/Currency';
import { Spinner } from 'src/components/Spinner';
import { toast } from 'react-toastify';

export const KingpassClaim = () => {
  const initialState: CurrencyArrProps = {
    icon: BusdIcon,
    name: "BUSD",
    address: contracts.KINGpass_abi.busdAddress
  }

  interface CurrencyArrProps {
    icon: string ;
    name: string;
    address: string;
}
  const { address } = useAccount();
  const { isInitialized } = useWeb3Store();
  const [isLoad, setLoad] = useState(false);
  const { data, isError, isLoading } = useBalance({
    address: address
  });
  if (isLoading) console.log("Fetching balance...")
  if(isError) console.log("Error fetching balance")
  const [state, setState] = useState({
    typeOfUser: 0,
    subIdx: "0",
    activeMonth: 1,
    currency: initialState,
    bonusMonth: 6,
    bonusValue: "$ 499,95"
  })

  const handleStateChanged = (prop: string, value: string | number | boolean | CurrencyArrProps) => {
    setState({ ...state, [prop]: value });
  };

  useEffect(() => {
    if (isInitialized) {
      (async () => {
        const _typeOfUser = await getTypeofUser(address);
        handleStateChanged("typeOfUser", Number(_typeOfUser.toString()));
      })();
    }
  }, [isInitialized]);

  const handleSetActiveMonth = (status: string) => {
    if(status === '--') {
      if(state.activeMonth > 1) {
        handleStateChanged('activeMonth', state.activeMonth - 1);
      }
    } else if (status === '++') {
      handleStateChanged('activeMonth', state.activeMonth + 1)
    }
  }

  const handlePromiseFunc = (func:() => Promise<void>) => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises, no-async-promise-executor
    const promise = new Promise(async function(resolve, reject) {
      try {
        setLoad(true);
        await func();
        resolve("");
      } catch (err) {
        reject(err)
      }
    });
    promise.then(
      (result) => {
        console.log({ result })
        toast.success("Congratulations, you have claimed your Kingpass");
        setLoad(false);
      }
    ).catch(
      (err) => {
        console.log({ err });
        toast.error(`you need to wait at least 24 hours to withdraw your $KING`, err); 
        setLoad(false);
      }
    )
  }

  const handleClickCliam = async () => {
    const amount = data?.formatted;
    const hasKing = await hasUserKing(amount);
    if(hasKing) {
      handlePromiseFunc(handleClaim)
    } else {
      toast.error('Sorry, you don’t have enough $KING');
    }
  }

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
      {
        state.typeOfUser === 0 && state.subIdx === "0" && (
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
                  disabled={isLoad}
                  onClick={() => {handleClickCliam()}}
                >
                  {isLoad ? <Spinner /> : "Claim"}
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
                <CardButton2 onClick={() => handleStateChanged("subIdx", "1")}>Start</CardButton2>
              </CardAction>
            </ClaimCard>
          </ClaimCardContainer>
        )
      }
      {state.typeOfUser === 0 && state.subIdx === "1" && (
        <ClaimPlanCardContainer>
             <ClaimPlanCard>
                <BackButton onClick={() => handleStateChanged("subIdx", "0")}>Back</BackButton>
                <PlanCardLabel>Choose your plan</PlanCardLabel>
                <PlanCardAction>
                  <PlanSubBox onClick={() => handleStateChanged("subIdx", "1-1")}>
                      <SubBoxLabel>
                          Monthly Subscription
                      </SubBoxLabel>
                      <SubBoxIcon>
                        <img src={CalendarIcon} alt="calendar-icon" style={{ width: '100%', height: '100%' }} />
                      </SubBoxIcon>
                  </PlanSubBox>
                  <PlanSubBox onClick={() => handleStateChanged("subIdx", "1-2")}>
                      <SubBoxLabel>
                          Bonus Subscription
                      </SubBoxLabel>
                      <SubBoxIcon>
                        <img src={StarIcon} alt='star-icon' style={{ width: '100%', height: '100%' }} />
                      </SubBoxIcon>
                  </PlanSubBox>
                </PlanCardAction>
             </ClaimPlanCard>
        </ClaimPlanCardContainer>
      )}

      {state.typeOfUser === 0 && state.subIdx === "1-1" && (
        <ClaimPlanCardContainer>
             <ClaimPlanCard>
                <BackButton onClick={() => handleStateChanged("subIdx", "1")}>Back</BackButton>
                <PlanCardLabel>Activate your monthly subscription</PlanCardLabel>
                <ActivateAction>
                  <ActivateElemGroup>
                    <ActivateElemContainer>
                      <ActivateLabel>
                          Months
                      </ActivateLabel>
                      <ActivateElem>
                          <ElemContainer>
                            <ElemButton onClick={() => handleSetActiveMonth('--')}>-</ElemButton>
                            <ShowLabel style={{ width: '17px', textAlign: 'center' }}>{state.activeMonth}</ShowLabel>
                            <ElemButton onClick={() => handleSetActiveMonth('++')}>+</ElemButton>
                          </ElemContainer>
                      </ActivateElem>
                    </ActivateElemContainer>
                    <ActivateElemContainer>
                      <ActivateLabel>
                          Price
                      </ActivateLabel>
                      <ActivateElem>
                      <ShowLabel>$ 99,99/mo</ShowLabel>
                      </ActivateElem>
                    </ActivateElemContainer>
                    <ActivateElemContainer>
                      <ActivateLabel>
                          Currency
                      </ActivateLabel>
                      <CurrencyDropDown state={state.currency} setState={handleStateChanged}/>
                    </ActivateElemContainer>
                  </ActivateElemGroup>
                <ActivateButton disabled={isLoad} style={{ marginBottom: "46px" }} onClick={() => handlePromiseFunc(async () => await handleStartSubScription(state.activeMonth, state.currency.address, true))}>
                  {isLoad ? <Spinner /> : "Activate"}
                </ActivateButton>
                </ActivateAction>
             </ClaimPlanCard>
        </ClaimPlanCardContainer>
      )}

{state.typeOfUser === 0 && state.subIdx === "1-2" && (
<ClaimCardContainer>
  <ClaimPlanCard>
    <BackButton onClick={() => handleStateChanged("subIdx", "1")}>Back</BackButton>
    <PlanCardLabel>Activate your bonus subscription</PlanCardLabel>
    <ActivateAction>
      <SubScriptionGroup>
        <SubscriptionCardContainer>
        <SubscriptionCard>
          <MonthValue>6</MonthValue>
          <ActivateLabel>Months Subscription</ActivateLabel>
          <DeletedText>
          <ShowLabel style={{ marginTop: '8px' }}>$ 599,94</ShowLabel>
          <Line />
          </DeletedText>
          <ShowLabel>$ 499,95</ShowLabel>
        </SubscriptionCard>
        <ActivateButton onClick={
          () => {
            setState({...state, subIdx: '1-2-1', bonusMonth: 6, bonusValue: '$ 499,95'});
          }}>Activate</ActivateButton>
        <ActivateLabel>Save 1 month</ActivateLabel>
        </SubscriptionCardContainer>
        <SubscriptionCardContainer>
        <SubscriptionCard>
        <MonthValue>12</MonthValue>
          <ActivateLabel>Months Subscription</ActivateLabel>
          <DeletedText>
          <ShowLabel style={{ marginTop: '8px' }}>$ 1199,88</ShowLabel>
          <Line />
          </DeletedText>
          <ShowLabel>$ 999,90</ShowLabel>
        </SubscriptionCard>
        <ActivateButton onClick={
            () => { 
              setState({...state, subIdx: '1-2-1', bonusMonth: 12, bonusValue: '$ 999,90'});
            }}>Activate</ActivateButton>
        <ActivateLabel>Save 2 months</ActivateLabel>
        </SubscriptionCardContainer>
      </SubScriptionGroup>
    </ActivateAction>
  </ClaimPlanCard>
</ClaimCardContainer>
)}

{state.typeOfUser === 0 && state.subIdx === "1-2-1" && (
  <ClaimCardContainer>
  <ClaimPlanCard>
  <BackButton onClick={() => handleStateChanged("subIdx", "1-2")}>Back</BackButton>
    <PlanCardLabel>Select your preferred currency</PlanCardLabel>
    <ActivateLabel style={{ width: '100%', textAlign: 'center', paddingTop: '33px' }}>You are about to activate a {state.bonusMonth} month subscription for {state.bonusValue}</ActivateLabel>
      <SubScriptionGroup style={{ paddingTop: "78px" }}>
        <CurrencyDropDown state={state.currency} setState={handleStateChanged}/>
        <ActivateButton style={{ width: "169px", marginBottom: '170px' }} disabled={isLoad} onClick={() => handlePromiseFunc(async () => await handleStartSubScription(state.bonusMonth, state.currency.address, false))}>{isLoad ? <Spinner /> : "Activate"}</ActivateButton>
      </SubScriptionGroup>
  </ClaimPlanCard>
  </ClaimCardContainer>
)
}

      {state.typeOfUser === 1 && (
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
              <CardButton2 disabled={isLoad} onClick={() => handlePromiseFunc(handleKingpassWithdraw)}>{isLoad ? <Spinner /> : "Withdraw"}</CardButton2>
            </CardAction>
          </ClaimCard>
        </ClaimCardContainer>
      )}

      {state.typeOfUser === 2 && (
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
  width: 100%;
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

const ClaimPlanCardContainer = styled.div`
  padding: 70px 30px;
  border-radius: 23px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1356px) {
    padding: 0;
    background: none;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
  /* @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  } */
`

const ClaimPlanCard = styled.div`
  border-radius: 24px;
  background-color: rgba(0, 0, 0, 0.45);
  padding: 21px 34.5px;
  /* width: 100%; */
  width: 550px;
  height: 357px;
  @media screen and (max-width: 680px) {
    height: auto;
  }
  @media screen and (max-width: 500px) {
    width: 264px;
  }

  @media screen and (max-width: 390px) {
    width: fit-content;
    margin: 0 20px;
  }
`

const BackButton = styled.div`
  font-size: 13px;
  width: 100%;
  text-align: right;
  cursor: pointer;
`
const PlanCardLabel = styled.div`
  font-size: 21px;
  color: #FFE3FD;
  font-family: 'gotham-bold';
  width: 100%;
  text-align: center;
  margin-top: 20px;
  @media screen and (max-width: 680px) {
    font-size: 16px;
  }
`

const PlanCardAction = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  justify-content: center;
  margin-top: 35px;
  @media screen and (max-width: 500px) {
    flex-direction : column;
    align-items: center;
  }
`

const PlanSubBox = styled.div`
  padding: 50px 39px;
  border: 2px solid #94EAFE;
  border-radius: 37px;
  /* width: 140px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  cursor: pointer;
`

const SubBoxLabel = styled.div`
  font-size: 15px;
  text-align: center;
`

const SubBoxIcon = styled.div`
  width: 50px;
  height: 50px;
`

const ActivateAction = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`

const ActivateElemGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-bottom: 50px;
  @media screen and (max-width: 680px) {
    flex-direction: column;
    gap: 30px;
  }
`

const ActivateElemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
`

const ActivateLabel = styled.div`
  font-size: 13px;
`

const ActivateElem = styled.div`
  display: flex;
  border: 2px solid #94EAFE;
  border-radius: 37px;
  /* justify-content: space-between; */
  padding: 20px;
  width: 125px;

`

const ElemContainer = styled.div`
  gap: 28px;
  display: flex;
  width: 100%;
  justify-content: center;
`

const ElemButton = styled.div`
  font-size: 20px;
  color: #ffe3fd;
  cursor: pointer;
`

const ShowLabel = styled.div`
  font-size: 20px;
  color: #FFFFFF;
`

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

const ActivateButton = styled.button`
  background: transparent linear-gradient(225deg, #FCB0FE 0%, #BBFFFF 100%) 0% 0% no-repeat padding-box;
  border-radius: 37px;
  color: #010101;
  text-transform: uppercase;
  font-size: 19px;
  font-family: 'gotham-bold';
  width: 187px;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    font-size: 11px;
    height: 49px;
  }
`

const SubScriptionGroup = styled.div`
  display: flex;
  width: 100%;
  gap: 26px;
  justify-content: center;
  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: center;
  }
`

const SubscriptionCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;

`

const SubscriptionCard = styled.div`
  width: 219px;
  height: 156px;
  border: 2px solid #94EAFE;
  border-radius: 37px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  @media screen and (max-width: 390px) {
    width: 170px;
  }
`

const MonthValue = styled.div`
  font-size: 34px;
  font-family: 'gotham-bold';
  padding-top: 10px;
`

const DeletedText = styled.div`
  position: relative;
`

const Line = styled.div`
  position: absolute;
  width: 120px;
  height: 1px;
  left: -20px;
  top: 18px;
  background-color: #FFFFFF;
  transform: rotate(-5deg);
`