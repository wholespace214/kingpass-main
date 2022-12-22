import { FooterLogo } from 'src/config/images';
import styled from 'styled-components';
import { FaTelegramPlane, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';
import { BsMedium } from 'react-icons/bs';

export const Footer = () => {
  return (
    <FooterContainer>
      <Img src={FooterLogo} alt="footer-logo" />
      <FooterLinks>
        <FooterLink>Cookie preferences</FooterLink> | <FooterLink>Privacy police</FooterLink> |
        <FooterLink>Terms of use</FooterLink>
      </FooterLinks>
      <ExternalLinks>
        <a href={'https://t.me/KlNGfinance'} rel="noopener noreferrer">
          <Icon>
            <FaTelegramPlane style={{ width: '100%', height: 'auto' }} />
          </Icon>
        </a>
        <a href={'https://twitter.com/kingfinance'} rel="noopener noreferrer">
          <Icon>
            <FaTwitter style={{ width: '100%', height: 'auto' }} />
          </Icon>
        </a>
        <a href={'https://www.youtube.com/@kingfinanceco'} rel="noopener noreferrer">
          <Icon>
            <FaYoutube style={{ width: '100%', height: 'auto' }} />
          </Icon>
        </a>
        <a rel="noopener noreferrer">
          <Icon>
            <FaGithub style={{ width: '100%', height: 'auto' }} />
          </Icon>
        </a>
        <a href={'https://medium.com/@kingfinance'} rel="noopener noreferrer">
          <Icon>
            <BsMedium style={{ width: '100%', height: 'auto' }} />
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
  font-size: 16px;
  @media screen and (max-width: 540px) {
    font-size: 10px;
    gap: 10px;
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
  width: 30px;
  height: 30px;
  @media screen and (max-width: 540px) {
    width: 20px;
    height: 20px;
  }
`;
