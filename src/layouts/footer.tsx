import { FooterLogo } from 'src/config/images';
import styled from 'styled-components';
import { FaTelegramPlane, FaTwitter, FaYoutube, FaDiscord } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';
import { SiGitbook } from 'react-icons/si';

export const Footer = () => {
  return (
    <FooterContainer>
      <a href={'https://kingworld.finance/'} rel="noopener noreferrer" target={'_blank'}>
        <Img src={FooterLogo} alt="footer-logo" />
      </a>
      <FooterLinks>
        <FooterLink>Privacy police</FooterLink> |<FooterLink>Terms of use</FooterLink>
      </FooterLinks>
      <ExternalLinks>
        <a href={'https://t.me/KlNGfinance'} rel="noopener noreferrer" target="_blank">
          <Icon>
            <FaTelegramPlane style={{ width: '100%', height: 'auto' }} />
          </Icon>
        </a>
        <a href={'https://twitter.com/kingfinance'} rel="noopener noreferrer" target="_blank">
          <Icon>
            <FaTwitter style={{ width: '100%', height: 'auto' }} />
          </Icon>
        </a>
        <a href={'https://www.youtube.com/@kingfinanceco'} rel="noopener noreferrer" target="_blank">
          <Icon>
            <FaYoutube style={{ width: '100%', height: 'auto' }} />
          </Icon>
        </a>
        <a href={'https://king-finance.gitbook.io/king-whitepaper'} rel="noopener noreferrer" target="_blank">
          <Icon>
            <SiGitbook style={{ width: '100%', height: 'auto' }} />
          </Icon>
        </a>
        <a href={'https://discord.gg/kingfinance'} rel="noopener noreferrer" target="_blank">
          <Icon>
            <FaDiscord style={{ width: '100%', height: 'auto' }} />
          </Icon>
        </a>
      </ExternalLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  height: 250px;
  padding-top: 50px;
  display: flex;
  font-size: 16px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  gap: 44px;
  @media screen and (max-width: 540px) {
    height: 180px;
    gap: 28px;
  }
`;

const Img = styled.img`
  width: 80px;
  height: auto;
  @media screen and (max-width: 540px) {
    width: 60px;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 15px;
  @media screen and (max-width: 540px) {
    font-size: 13px;
    gap: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;
const FooterLink = styled.div``;

const ExternalLinks = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  @media screen and (max-width: 540px) {
    gap: 40px;
  }
`;

const Icon = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  @media screen and (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;
