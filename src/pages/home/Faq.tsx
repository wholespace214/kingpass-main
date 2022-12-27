import { Accordion } from 'src/components/Accordion';
import { KingFloki, KingLand, KingPad } from 'src/config/images';
import styled from 'styled-components';

const AccordArr = [
  {
    title: 'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur qui dolorem eum fugiat?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur qui dolorem eum fugiat?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur qui dolorem eum fugiat?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  },
  {
    title: 'vel illum qui dolorem eum fugiat quo voluptas nulla pariatur qui dolorem eum fugiat?',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  }
];

export const FaqSection = () => {
  return (
    <FaqSectionContainer>
      <KingWorldTitle>
        Where to use the <span style={{ fontFamily: 'gotham-bold' }}>Kingpass</span>
      </KingWorldTitle>
      <KingWorldLinks>
        <a href={'https://kingflokiworld.com/'} rel="noopener noreferrer">
          <KingWorld src={KingFloki} alt="king-floki" />
        </a>
        <a href={'https://kingpad.finance/'} rel="noopener noreferrer">
          <KingWorld src={KingPad} alt="king-pad" />
        </a>
        <a href={'https://kingland.finance/'} rel="noopener noreferrer">
          <KingWorld src={KingLand} alt="king-land" />
        </a>
      </KingWorldLinks>
      <FaqLetter>FAQ’s</FaqLetter>
      <AccordionContainer>
        {AccordArr.map((item, index) => (
          <Accordion title={item.title} content={item.content} key={index} />
        ))}
      </AccordionContainer>
    </FaqSectionContainer>
  );
};

const FaqSectionContainer = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 540px) {
    padding-top: 6rem;
  }
`;

const KingWorldTitle = styled.div`
  font-size: 28px;
  letter-spacing: 0.0375rem;
  @media screen and (max-width: 840px) {
    font-size: 17px;
  }
  @media screen and (max-width: 450px) {
    font-size: 14px;
  }
`;

const KingWorldLinks = styled.div`
  display: flex;
  gap: 8.5rem;
  padding-top: 50px;
  @media screen and (max-width: 840px) {
    gap: 4rem;
  }
  @media screen and (max-width: 450px) {
    padding-top: 30px;
    gap: 2rem;
  }
`;
const KingWorld = styled.img`
  width: 90px;
  height: auto;
  cursor: pointer;
  @media screen and (max-width: 840px) {
    width: 80px;
  }
  @media screen and (max-width: 450px) {
    width: 60px;
  }
`;

const FaqLetter = styled.div`
  font-size: 28px;
  font-family: 'gotham-bold';
  padding-top: 8rem;
  @media screen and (max-width: 540px) {
    font-size: 17px;
    padding-top: 6rem;
  }
`;

const AccordionContainer = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  transition: all linear 0.2s;
  @media screen and (max-width: 540px) {
    padding-top: 30px;
  }
`;
