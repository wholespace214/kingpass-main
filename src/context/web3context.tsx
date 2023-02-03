import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAccount, useProvider, useSigner } from 'wagmi';
import { getKingpassStatus, initializeWeb3 } from 'src/contracts';

interface Web3ContextProps {
  isConnected: boolean;
  isInitialized: boolean;
  kingStatus: number;
  setKingStatus: (value: number) => void;
}

interface propsType {
  children: React.ReactNode;
}

const Web3Context = createContext<Web3ContextProps | null>(null);

export const Web3Provider = (props: propsType) => {
  const { isConnected, address } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const [isInitialized, setInitialized] = useState(false);
  const [kingStatus, setKingStatus] = useState(0);
  useEffect(() => {
    if (isConnected) {
      (async () => {
        await initializeWeb3(provider, signer);
        setInitialized(true);
        const kingpadStatus = await getKingpassStatus(address);
        setKingStatus(kingpadStatus ?? 0);
      })();
    }
  }, [isConnected, signer]);

  return (
    <Web3Context.Provider value={{ isConnected, isInitialized, kingStatus, setKingStatus }}>
      {props.children}
    </Web3Context.Provider>
  );
};

export const useWeb3Store = () => {
  const context = useContext(Web3Context);
  if (context === null) {
    throw new Error("can't find context");
  }
  return context;
};
