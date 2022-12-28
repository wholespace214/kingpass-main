import { BenefitsCard } from 'src/components/Card/BenefitsCard';
import styled from 'styled-components';

const cardArr = [
  {
    id: 1,
    title: 'Dedicated promos and services',
    content: 'Be the first and only one to access exclusive products and services at KING'
  },
  {
    id: 2,
    title: 'Reserved NFT drops',
    content: 'Own unique wearables and land plots in the form of NFTs, only made for KingPass members'
  },
  {
    id: 3,
    title: 'Whitelist on king Pad',
    content: 'Always have your automatic whitelist spot on KingPad pre-sales'
  },
  {
    id: 4,
    title: '-60% taxes on $KING token',
    content: 'Trade $KING with 60% less taxes when you buy and sell'
  },
  {
    id: 5,
    title: 'Private chairman Reunions',
    content: 'Join the chairmen reunions, be amongst the first to know what’s happening within KING'
  },
  {
    id: 6,
    title: 'King Land’s exclusivity',
    content: 'Access to properties and higher portions of the fractionalisation of KingLand’s real estate'
  }
];

export const BenefitsEra = () => {
  return (
    <BenefitsEraContainer>
      <BenefitsTitle>
        New <span style={{ fontFamily: 'gotham-bold' }}>benefits</span> era
      </BenefitsTitle>
      <BenefitsCards>
        {cardArr.map((card) => (
          <BenefitsCard title={card.title} content={card.content} idx={card.id} key={card.id} />
        ))}
      </BenefitsCards>
    </BenefitsEraContainer>
  );
};

const BenefitsEraContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 53px;
  padding-top: 4rem;
`;

const BenefitsTitle = styled.div`
  font-size: 28px;
  @media screen and (max-width: 450px) {
    font-size: 17px;
  }
`;

const BenefitsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 27px;
  width: 100%;
  justify-items: center;
  @media screen and (max-width: 1272px) {
    grid-template-columns: repeat(2, 2fr);
    max-width: 608px;
  }
  @media screen and (max-width: 768px) {
    max-width: 530px;
    gap: 14px;
  }
  @media screen and (max-width: 390px) {
    grid-template-columns: repeat(1, 4fr);
    gap: 14px;
  }
`;
