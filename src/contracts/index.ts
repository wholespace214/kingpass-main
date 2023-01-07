/* eslint-disable no-console */
import { ethers } from 'ethers';
import contracts from './contracts.json';

let provider: any = null;

let kingPass: any = null;

export const initializeWeb3 = async (provider_: any) => {
  provider = provider_;

  try {
    kingPass = new ethers.Contract(contracts.KINGpass_abi.address, contracts.KINGpass_abi.abi, provider);
  } catch (e) {
    console.log('Error getting contract');
  }
};

export const getKingpadStatus = async (address: string | undefined) => {
  const status = await kingPass.checkIfPassActive(address);
  console.log('status', status);
  return status;
};

export { provider, kingPass };
