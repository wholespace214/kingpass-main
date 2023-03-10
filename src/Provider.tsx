import { ThemeProvider } from 'styled-components';
import { Web3Provider } from 'src/context/web3context';
import { COLORS, TEXT_SIZE } from './config/config';

interface ProviderProps {
  children: React.ReactNode;
}

const theme = {
  ...COLORS,
  ...TEXT_SIZE
};

export const Provider = ({ children }: ProviderProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Web3Provider>{children}</Web3Provider>
    </ThemeProvider>
  );
};
