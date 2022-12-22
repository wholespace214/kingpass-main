import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import { Header } from './header';
import { Footer } from './footer';
import VideoA from '../assets/videos/VideoA.mp4';
import VideoB from '../assets/videos/VideoB.mp4';
import { GlobalContainer } from 'src/components/container';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <MainContainer>
      <VideoBackgroundA autoPlay loop playsInline muted id="video-background">
        <source src={VideoA} type="video/mp4" id="background-video" />
        Your browser does not support the video tag
      </VideoBackgroundA>
      {/* <VideoBackgroundB autoPlay loop playsInline muted id="video-background">
        <source src={VideoB} type="video/mp4" id="background-video" />
        Your browser does not support the video tag
      </VideoBackgroundB> */}
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

  margin: 0;
`;

const VideoBackgroundA = styled.video`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`;

// const VideoBackgroundB = styled.video`
//   object-fit: cover;
//   width: 100vw;
//   height: 100vh;
//   position: absolute;
//   top: 100vh;
//   left: 0;
//   z-index: -1;
// `;
