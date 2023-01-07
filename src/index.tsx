import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';
import { metaMaskWallet, trustWallet } from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { bscTestnet } from 'wagmi/chains';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import './index.css';

import 'react-toastify/dist/ReactToastify.min.css';

// eslint-disable-next-line @typescript-eslint/no-var-requires
window.Buffer = require('buffer').Buffer;

const { chains, provider } = configureChains(
  [bscTestnet],
  [alchemyProvider({ apiKey: '6mDnh0_FqrDQzdcOCI_O5NkDs70x4VYp' }), publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Select your wallet',
    wallets: [
      metaMaskWallet({ chains }),
      trustWallet({ chains })
      // walletConnectWallet({ chains }),
      // ledgerWallet({ chains }),
      // braveWallet({ chains }),
      // argentWallet({ chains }),
      // imTokenWallet({ chains }),
      // omniWallet({ chains }),
      // rainbowWallet({ chains })
    ]
  }
]);

const wagmiClient = createClient({
  connectors,
  autoConnect: true,
  provider
});

// const KingpassTheme: Theme = {
//   blurs: {
//     modalOverlay: 'none'
//   },
//   colors: {
//     accentColor: '#17191D',
//     accentColorForeground: '#FFFFFF',
//     actionButtonBorder: '#363A44',
//     actionButtonBorderMobile: '#000000',
//     actionButtonSecondaryBackground: '#000000',
//     closeButton: '#FFFFFF',
//     closeButtonBackground: '#23262F',
//     connectButtonBackground: '#17191D',
//     connectButtonBackgroundError: '#17191D',
//     connectButtonInnerBackground: '#17191D',
//     connectButtonText: '#FFFFFF',
//     connectButtonTextError: '#FFFFFF',
//     connectionIndicator: 'green',
//     downloadBottomCardBackground: '#FFFFFF',
//     downloadTopCardBackground: '#FFFFFF',
//     error: '#FFFFFF',
//     generalBorder: '#363A44',
//     generalBorderDim: '#363A44',
//     menuItemBackground: '#363A44',
//     modalBackdrop: 'rgba(0,0,0,0.5)',
//     modalBackground: 'transparent linear-gradient(230deg, #fcb0fe 0%, #bbffff 100%) 0% 0% no-repeat padding-box',
//     modalBorder: '#363A44',
//     modalText: '#FFFFFF',
//     modalTextDim: '#FFFFFF',
//     modalTextSecondary: '#FFFFFF',
//     profileAction: '#23262F',
//     profileActionHover: '#363A44',
//     profileForeground: '#17191D',
//     selectedOptionBorder: '#363A44',
//     standby: '#000000'
//   },
//   fonts: {
//     body: '...'
//   },
//   radii: {
//     actionButton: '...',
//     connectButton: '...',
//     menuButton: '...',
//     modal: '...',
//     modalMobile: '...'
//   },
//   shadows: {
//     connectButton: '...',
//     dialog: '...',
//     profileDetailsAction: '...',
//     selectedOption: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
//     selectedWallet: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
//     walletLogo: '...'
//   }
// };

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider
      chains={chains}
      // theme={KingpassTheme}
      modalSize="compact"
      appInfo={{
        appName: 'King Pass'
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RainbowKitProvider>
  </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
