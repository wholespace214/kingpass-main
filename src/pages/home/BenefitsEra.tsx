import { BenefitsCard } from 'src/components/Card/BenefitsCard';
import styled from 'styled-components';

const cardArr = [
  {
    id: 1,
    title: 'Focus 1',
    content: 'Immerse yourself into the newest digital VIP experience'
  },
  {
    id: 2,
    title: 'Focus 2',
    content: 'Immerse yourself into the newest digital VIP experience'
  },
  {
    id: 3,
    title: 'Focus 3',
    content: 'Immerse yourself into the newest digital VIP experience'
  },
  {
    id: 4,
    title: 'Focus 4',
    content: 'Immerse yourself into the newest digital VIP experience'
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
  gap: 25px;
  padding-top: 7rem;
`;

const BenefitsTitle = styled.div`
  font-size: 28px;
  @media screen and (max-width: 450px) {
    font-size: 17px;
  }
`;

const BenefitsCards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 28px;
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
