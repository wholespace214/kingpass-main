import React, { useState } from 'react';
import { AwesomeButton } from 'src/components/Button';
import { AwesomeDropDown } from 'src/components/Dropdown';
import { HeaderLogo } from 'src/components/HeaderLogo';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';
import { Modal } from 'src/components/Modal';

const statusArr = [
  {
    color: '#51FFBC',
    content: 'Active kingpass'
  },
  {
    color: '#F46F6F',
    content: 'Inactive kingpass'
  }
];

const initialState = {
  isSideOpen: false,
  status: {
    color: '#4B4B4B',
    content: 'Kingpass status'
  }
};

export const Header = () => {
  const [state, setState] = useState(initialState);
  const handleStateChanged = (prop: string, value: string | number | boolean) => {
    setState({ ...state, [prop]: value });
  };

  return (
    <>
      <HeaderContent state={state} handleState={handleStateChanged} />
      <Modal name="isSideOpen" isState={state.isSideOpen} state={state} handleState={handleStateChanged} />
    </>
  );
};

interface HeaderProps {
  state: any;
  handleState: any;
}

export const HeaderContent = (props: HeaderProps) => {
  const { state, handleState } = props;

  return (
    <HeaderContainer>
      <HeaderBar>
        <SidebarMenuButton onClick={() => handleState('isSideOpen', !state.isSideOpen)}>
          <FiMenu style={{ width: '100%', height: '100%' }} />
        </SidebarMenuButton>
        <HeaderLogo />
      </HeaderBar>
      <HeaderAction>
        <HeaderNav>
          <NavItem>Competition</NavItem>
          <NavItem>News</NavItem>
          <a href={'https://kingworld.finance'} rel="noopener noreferrer">
            <NavItem>King</NavItem>
          </a>
          <NavItem>Docs</NavItem>
        </HeaderNav>
        <HeaderButtons>
          <AwesomeDropDown arrData={statusArr} name="status" state={state.status} setState={handleState} />
          <AwesomeButton />
        </HeaderButtons>
      </HeaderAction>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const HeaderBar = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media screen and (max-width: 390px) {
    gap: 15px;
  }
  @media screen and (max-width: 350px) {
    gap: 12px;
  }
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
  @media screen and (max-width: 1072px) {
    display: none;
  }
`;

const NavItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
`;

const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
  @media screen and (max-width: 540px) {
    gap: 10px;
  }
  @media screen and (max-width: 390px) {
    gap: 5px;
  }
`;

const SidebarMenuButton = styled.div`
  width: 30px;
  height: 30px;
  display: none;
  cursor: pointer;
  @media screen and (max-width: 1072px) {
    display: block;
  }
  @media screen and (max-width: 390px) {
    width: 25px;
    height: 25px;
  }
`;
