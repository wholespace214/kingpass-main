/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { CustomConnectButton } from 'src/components/Button';
import { AwesomeDropDown } from 'src/components/Dropdown';
import { HeaderLogo } from 'src/components/HeaderLogo';
import { FiMenu } from 'react-icons/fi';
import styled from 'styled-components';
import { Modal } from 'src/components/Modal';
import { useAccount } from 'wagmi';
import { useWeb3Store } from 'src/context/web3context';
import { useNavigate } from 'react-router-dom';
import { FaDiscord } from 'react-icons/fa';

interface statusArrProps {
  color: string;
  content: string;
  opacity: number;
}

const statusArr: statusArrProps[] = [
  {
    color: '#4B4B4B',
    content: 'No Kingpass',
    opacity: 1
  },
  {
    color: '#F46F6F',
    content: 'Inactive kingpass',
    opacity: 1
  },
  {
    color: '#51FFBC',
    content: 'Active kingpass',
    opacity: 1
  }
];

const initialState = {
  isSideOpen: false,
  status: {
    color: '#4B4B4B',
    content: 'Kingpass status',
    opacity: 0.5
  }
};

export const Header = () => {
  const [state, setState] = useState(initialState);
  const handleStateChanged = (prop: string, value: string | number | boolean | statusArrProps) => {
    setState({ ...state, [prop]: value });
  };

  const { isInitialized, kingStatus } = useWeb3Store();
  const { address } = useAccount();
  useEffect(() => {
    if (isInitialized) {
      (async () => {
        if (address !== undefined) {
          handleStateChanged('status', statusArr[kingStatus]);
        } else {
          handleStateChanged('status', initialState.status);
        }
      })();
    }
  }, [isInitialized, address, kingStatus]);

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
  const navigate = useNavigate();
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
          <NavItem onClick={() => navigate('/mint')}>Mint</NavItem>
          <a href={'https://kingworld.finance'} rel="noopener noreferrer" target={'_blank'}>
            <NavItem>King</NavItem>
          </a>
          <a
            href={'https://king-finance.gitbook.io/king-whitepaper/king-pass/king-pass'}
            rel="noopener noreferrer"
            target={'_blank'}
          >
            <NavItem>Docs</NavItem>
          </a>
          <a href={' http://t.me/kingannouncements'} rel="noopener noreferrer" target={'_blank'}>
            <NavItem>News</NavItem>
          </a>
        </HeaderNav>
        <HeaderButtons>
          <DiscordLink href="https://discord.gg/kingfinance" rel="noopenner noreferrer" target={'_blank'}>
            <VIPJoinButton />
          </DiscordLink>
          <AwesomeDropDown state={state.status} />
          <CustomConnectButton />
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
  gap: 38px;
  @media screen and (max-width: 1100px) {
    gap: 25px;
  }
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
  gap: 15px;
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

export const VIPJoinButton = () => {
  return (
    <VIPJoinButtonContainer>
      <FaDiscord style={{ width: '24px', height: '24px' }} />
      Join Vip
    </VIPJoinButtonContainer>
  );
};

const VIPJoinButtonContainer = styled.div`
  background: none;
  border-radius: 37px;
  border: 2px solid #ffffff;
  width: 105px;
  padding: 0 10px;
  height: 41px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  gap: 8px;
  font-size: 15px;
`;

const DiscordLink = styled.a`
  outline: none;
  @media screen and (max-width: 1072px) {
    display: none;
  }
`;
