import styled, { css } from 'styled-components';
import { BsPlayFill } from 'react-icons/bs';

// export const AwesomeButton = () => {
//   return <AwesomeButtonContainer>Connect</AwesomeButtonContainer>;
// };

import { ConnectButton } from '@rainbow-me/rainbowkit';

export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const isReady = mounted && authenticationStatus !== 'loading';
        const hasConnected =
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          isReady &&
          account != null &&
          chain != null &&
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!isReady && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              }
            })}
          >
            {(() => {
              if (!hasConnected) {
                return (
                  <AwesomeButtonContainer onClick={openConnectModal} type="button">
                    Connect
                  </AwesomeButtonContainer>
                );
              }
              if (chain.unsupported ?? false) {
                return (
                  <AwesomeButtonContainer onClick={openChainModal} type="button">
                    Wrong network
                  </AwesomeButtonContainer>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  {/* <AwesomeButtonContainer
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4
                        }}
                      >
                        {chain.iconUrl != null && (
                          <img alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} style={{ width: 12, height: 12 }} />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </AwesomeButtonContainer> */}
                  <AwesomeButtonContainer onClick={openAccountModal} type="button">
                    {account.displayName}
                    {/* {account.displayBalance != null ? ` (${account.displayBalance})` : ''} */}
                  </AwesomeButtonContainer>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

const AwesomeButtonCss = css`
  border-radius: 37px;
  background: transparent linear-gradient(230deg, #fcb0fe 0%, #bbffff 100%) 0% 0% no-repeat padding-box;
  text-transform: uppercase;
  color: #000000;
  border: none;
  cursor: pointer;
  font-family: 'gotham-bold';
`;

const AwesomeButtonContainer = styled.button`
  ${AwesomeButtonCss}
  width: 154px;
  height: 45px;

  @media screen and (max-width: 768px) {
    width: 120px;
    height: 40px;
    font-size: 11px;
  }

  @media screen and (max-width: 450px) {
    width: 80px;
    height: 30px;
    font-size: 9px;
  }
`;

interface playProps {
  onClick: () => void;
}

export const PlayButton = (props: playProps) => {
  const { onClick } = props;
  return (
    <ButtonContainer onClick={onClick}>
      <Button>
        <PlayIcon>
          <BsPlayFill />
        </PlayIcon>
      </Button>
      <Title>Play Video</Title>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

const Button = styled.div`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent linear-gradient(200deg, #fcb0fe 0%, #bbffff 100%) 0% 0% no-repeat padding-box;
  @media screen and (max-width: 1072px) {
    width: 30px;
    height: 30px;
  }
`;

const Title = styled.div`
  font-family: 'gotham-bold';
  font-size: 20px;
  @media screen and (max-width: 1072px) {
    font-size: 15px;
  }
`;

const PlayIcon = styled.div`
  width: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1072px) {
    width: 20px;
  }
`;
