import { KingPassLogo } from 'src/config/images';
import styled from 'styled-components';

export const HeaderLogo = () => {
  return (
    <HeaderLogoContainer>
      <Img src={KingPassLogo} alt="kingpass-logo" />
      KING PASS
    </HeaderLogoContainer>
  );
};

const HeaderLogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
  font-family: 'gotham-bold';
  font-size: 19px;
`;
const Img = styled.img`
  width: 50px;
  height: auto;
`;
