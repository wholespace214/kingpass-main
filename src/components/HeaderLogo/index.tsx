import { useNavigate } from 'react-router-dom';
import { KingPassLogo } from 'src/config/images';
import styled from 'styled-components';

export const HeaderLogo = () => {
  const navigate = useNavigate();
  return (
    <HeaderLogoContainer onClick={() => navigate('/')}>
      <Img src={KingPassLogo} alt="kingpass-logo" />
      <Typography>KING PASS</Typography>
    </HeaderLogoContainer>
  );
};

const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  font-family: 'gotham-bold';
  font-size: 19px;
  cursor: pointer;
  @media screen and (max-width: 1072px) {
    gap: 15px;
  }
`;
const Img = styled.img`
  width: 50px;
  height: auto;
  @media screen and (max-width: 450px) {
    width: 40px;
  }
  @media screen and (max-width: 390px) {
    width: 35px;
  }
`;

const Typography = styled.div`
  @media screen and (max-width: 640px) {
    display: none;
  }
`;
