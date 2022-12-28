import styled from 'styled-components';

interface BenefitsCardProps {
  idx: number;
  title: string;
  content: string;
}

export const BenefitsCard = (props: BenefitsCardProps) => {
  const { idx, title, content } = props;
  // eslint-disable-next-line no-console
  console.log('idx: ', idx);
  return (
    <CardContainer>
      <CardNumber>{idx}</CardNumber>
      <CardTitle>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  background: rgba(0, 0, 0, 0.5);
  border-radius: 24px;

  display: flex;
  padding: 30px 50px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 25px;
  /* max-width: 210px; */
  @media screen and (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CardNumber = styled.div`
  font-size: 47px;
  @media screen and (max-width: 498px) {
    font-size: 35px;
  }
`;

const CardTitle = styled.div`
  font-size: 22px;
  text-align: center;
  max-width: 205px;
  color: #ffe3fd;
  @media screen and (max-width: 498px) {
    font-size: 15px;
  }
`;
const CardContent = styled.div`
  font-size: 16px;
  text-align: center;
  line-height: 25px;
  @media screen and (max-width: 498px) {
    font-size: 12px;
  }
`;
