import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { Header } from './header';
import { Footer } from './footer';
import { GlobalContainer } from 'src/components/container';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      <GlobalContainer>
        <Header />
        {children}
      </GlobalContainer>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        theme="light"
      />
      <Footer />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0;
`;
