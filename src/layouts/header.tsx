import { GlobalContainer } from 'src/components/container';
import { HeaderLogo } from 'src/components/HeaderLogo';
import styled from 'styled-components';

export const Header = () => {
  return (
    <GlobalContainer>
      <HeaderContainer>
        <HeaderLogo />
        <HeaderAction>
          <HeaderNav>
            <NavItem>Competition</NavItem>
            <NavItem>News</NavItem>
            <NavItem>King</NavItem>
            <NavItem>Docs</NavItem>
          </HeaderNav>
        </HeaderAction>
      </HeaderContainer>
    </GlobalContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  gap: 35px;
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

const NavItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
`;
