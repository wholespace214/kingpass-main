import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAccount, useProvider } from 'wagmi';
import { initializeWeb3 } from 'src/contracts';

interface Web3ContextProps {
  provider: any;
  isConnected: boolean;
  isInitialized: boolean;
}

interface propsType {
  children: React.ReactNode;
}

const Web3Context = createContext<Web3ContextProps | null>(null);

export const Web3Provider = (props: propsType) => {
  const { isConnected } = useAccount();
  const provider = useProvider();
  const [isInitialized, setInitialized] = useState(false);

  useEffect(() => {
    if (isConnected) {
      (async () => {
        await initializeWeb3(provider);
        setInitialized(true);
      })();
    }
  }, [isConnected, provider]);

  return <Web3Context.Provider value={{ isConnected, provider, isInitialized }}>{props.children}</Web3Context.Provider>;
};

export const useWeb3Store = () => {
  const context = useContext(Web3Context);
  if (context === null) {
    throw new Error("can't find context");
  }
  return context;
};
