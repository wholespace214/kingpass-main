import { HeaderContent } from 'src/layouts/header';
import styled from 'styled-components';
import { GlobalContainer } from '../container';
import { MdClose } from 'react-icons/md';
import { KingPassLogo } from 'src/config/images';

interface ModalProps {
  name: string;
  isState: boolean;
  state: any;
  handleState: any;
}

interface SidebarProps {
  name: string;
  setState: any;
}

interface ModalContainerProps {
  isShow: boolean;
  children: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { name, isState, state, handleState } = props;
  return (
    <ModalContainer isShow={isState}>
      <GlobalContainer>
        <HeaderContent state={state} handleState={handleState} />
        <SideBar name={name} setState={handleState} />
      </GlobalContainer>
    </ModalContainer>
  );
};

const ModalStyle = styled.div`
  z-index: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 1);
  transition: all linear 0.6s;
`;

const ModalContainer = ({ isShow, children }: ModalContainerProps) => {
  return (
    <ModalStyle style={{ visibility: isShow ? 'visible' : 'hidden', opacity: isShow ? 1 : 0 }}>{children}</ModalStyle>
  );
};

const SideBar = ({ name, setState }: SidebarProps) => {
  return (
    <SideBarContainer>
      <SideBarAction>
        <CloseButton name={name} setState={setState} />
      </SideBarAction>
      <SideBarContent>
        <a href={'https://kingworld.finance'} target="_blank" rel="noopener noreferrer">
          <SidebarItem>King</SidebarItem>
        </a>
        <a
          href={'https://king-finance.gitbook.io/king-whitepaper/king-pass/king-pass'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SidebarItem>Docs</SidebarItem>
        </a>
        <a href={'http://t.me/kingannouncements'} target="_blank" rel="noopener noreferrer">
          <SidebarItem>News</SidebarItem>
        </a>
        <Img src={KingPassLogo} alt="kingpass-logo" />
      </SideBarContent>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 45px;
`;
const SideBarAction = styled.div`
  display: flex;
  width: 100%;
  justify-content: end;
`;
const CloseButton = ({ name, setState }: SidebarProps) => {
  return (
    <CloseButtonContainer onClick={() => setState(name, false)}>
      <MdClose style={{ width: '24px', height: '24px' }} />
      Close
    </CloseButtonContainer>
  );
};

const CloseButtonContainer = styled.div`
  cursor: pointer;
  width: 27px;
  height: 27px;
  font-family: 'gotham-bold';
  font-size: 8px;
  color: #94eafe;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SideBarContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 50px;
  font-family: 'gotham-bold';
`;

const SidebarItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
`;

const Img = styled.img`
  width: 75px;
  height: auto;
  padding-top: 50px;
`;
