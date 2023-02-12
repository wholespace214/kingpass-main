/* eslint-disable no-console */
import { useState } from 'react';
import styled, { css } from 'styled-components';
import { EthereumSvg, KingPassLogo, KingPassNFTImg } from 'src/config/images';

export const MintPage = () => {
  const [quantity, setQuantity] = useState(1);
  const handleChange = (val: string) => {
    const _val = parseInt(val);
    setQuantity(_val);
  };

  const handleClick = (sign: string) => {
    let val = quantity;
    if (sign === 'minus') {
      if (val > 1) {
        val--;
      }
    } else {
      val++;
    }
    setQuantity(val);
  };

  return (
    <MintPageContainer>
      <KingPassMintLogo>
        <KingPassLogoImg src={KingPassLogo} alt="kingpass-logo" />
        <KingPassLogoLabel>KINGPASS RESERVED NFT DROP</KingPassLogoLabel>
      </KingPassMintLogo>
      <KingPassMintContainer>
        <KingPassMintWrapper>
          <KingPassMintLabel>King Floki “Kingpass only” wearables</KingPassMintLabel>
          <KingPassNFTCounter>
            <KingPassNFTNumber>12/120</KingPassNFTNumber>
            <KingPassNFTStatus>MINTED</KingPassNFTStatus>
          </KingPassNFTCounter>
          <KingPassNFTMintWrapper>
            <KingPassNFTCard src={KingPassNFTImg} alt="kingpass-nft" />
            <KingPassNFTMint>
              <Img src={KingPassLogo} alt="kingpass-logo" />
              <KingPassNFTMintLabel>Mint your exclusive nft</KingPassNFTMintLabel>
              <KingPassNFTMintActionContainer>
                <KingPassNFTInputContainer>
                  <KingPassNFTMinusButton onClick={() => handleClick('minus')}>-</KingPassNFTMinusButton>
                  <KingPassNFTInput
                    type="number"
                    value={quantity.toString()}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                  <KingPassNFTPlusButton onClick={() => handleClick('plus')}>+</KingPassNFTPlusButton>
                </KingPassNFTInputContainer>
                <KingPassNFTMintButton>Mint Now</KingPassNFTMintButton>
              </KingPassNFTMintActionContainer>
              <EtherPrice>
                <EtherLogo src={EthereumSvg} alt="ethereum-svg" />
                <EtherValue>0.03 ETH</EtherValue>
              </EtherPrice>
            </KingPassNFTMint>
          </KingPassNFTMintWrapper>
        </KingPassMintWrapper>
      </KingPassMintContainer>
    </MintPageContainer>
  );
};

const MintPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem 0;
  @media screen and (max-width: 960px) {
    padding: 7rem 0 0 0;
  }
`;

const KingPassMintLogo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 21px;
  @media screen and (max-width: 960px) {
    gap: 10px;
  }
`;

const KingPassLogoLabel = styled.div`
  font-family: 'gotham-bold';
  font-size: 28px;
  color: #fff3fd;
  @media screen and (max-width: 960px) {
    font-size: 18px;
  }

  @media screen and (max-width: 640px) {
    font-size: 13px;
  }
`;

const KingPassLogoImg = styled.img`
  width: 370px;
  height: auto;
  @media screen and (max-width: 960px) {
    width: 240px;
  }
  @media screen and (max-width: 640px) {
    width: 180px;
  }
`;

const KingPassMintContainer = styled.div`
  width: 1100px;
  height: 768px;
  background: rgba(2, 2, 2, 0.3);

  border-radius: 24px;
  margin-top: 67px;
  @media screen and (max-width: 1200px) {
    background: none;
    margin-top: 0px;
  }
  @media screen and (max-width: 960px) {
    height: 100%;
  }
`;

const KingPassMintWrapper = styled.div`
  padding: 74px 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 38px;
  @media screen and (max-width: 640px) {
    gap: 20px;
  }
`;

const KingPassMintLabel = styled.div`
  font-size: 23px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 640px) {
    font-size: 18px;
  }

  @media screen and (max-width: 450px) {
    font-size: 16px;
  }
`;

const KingPassNFTCounter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

const KingPassNFTNumber = styled.div`
  font-size: 28px;
  color: #fff3fd;
  font-family: 'gotham-bold';
`;

const KingPassNFTStatus = styled.div`
  font-size: 13px;
`;

const KingPassNFTMintWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 460px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    height: auto;
  }
`;

const KingPassNFTCard = styled.img`
  width: 392px;
  height: 100%;
  @media screen and (max-width: 640px) {
    width: 320px;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
  }
`;

const KingPassNFTMint = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(2, 2, 2, 0.45);
  border-radius: 0px 24px 24px 0px;
  @media screen and (max-width: 960px) {
    width: 392px;
    height: 450px;
    border-radius: 0px;
  }

  @media screen and (max-width: 640px) {
    width: 320px;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
    height: 360px;
  }
`;

const Img = styled.img`
  width: 75px;
  height: auto;
`;

const KingPassNFTMintLabel = styled.div`
  width: 256px;
  text-align: center;
  font-size: 26px;
  text-transform: uppercase;
  font-family: 'gotham-bold';
  padding-top: 23px;
  @media screen and (max-width: 450px) {
    font-size: 18px;
    width: 180px;
  }
`;

const KingPassNFTMintActionContainer = styled.div`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  width: 235px;
  gap: 10px;
  @media screen and (max-width: 450px) {
    width: 180px;
  }
`;

const KingPassNFTInputContainer = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 450px) {
    height: 45px;
  }
`;

const KingPassNFTButton = css`
  cursor: pointer;
  font-size: 20px;
  font-family: 'gotham-bold';
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2b0707;
  height: 100%;
`;

const KingPassNFTMinusButton = styled.div`
  ${KingPassNFTButton}
  border-radius: 37px 0 0 37px;
  background-color: #bbffff;
`;

const KingPassNFTPlusButton = styled.div`
  ${KingPassNFTButton}
  border-radius: 0 37px 37px 0;
  background-color: #fcb0fe;
`;

const KingPassNFTInput = styled.input`
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  color: #2b0707;
  text-align: center;
  font-size: 20px;
  font-family: 'gotham-bold';
`;

const KingPassNFTMintButton = styled.div`
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  color: #010101;
  font-size: 19px;
  font-family: 'gotham-bold';
  background: transparent linear-gradient(232deg, #fcb0fe 0%, #bbffff 100%) 0% 0% no-repeat padding-box;
  border-radius: 37px;
  @media screen and (max-width: 450px) {
    height: 45px;
    font-size: 15px;
  }
`;

const EtherPrice = styled.div`
  padding-top: 32px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const EtherLogo = styled.img`
  width: 25px;
  height: auto;
`;

const EtherValue = styled.div`
  font-size: 15px;
  color: #f2f5f4;
`;
