/* eslint-disable no-console */

import { ethers } from 'ethers';
import contracts from './contracts.json';

let signer: any = null;
let provider: any = null;

let kingPass: any = null;

export const initializeWeb3 = async (provider_: any, signer_: any) => {
  kingPass = new ethers.Contract(contracts.KINGpass_abi.address, contracts.KINGpass_abi.abi, provider_);

  provider = provider_;
  signer = await signer_;
  console.log({ kingPass, signer });
};

export const getKingpadStatus = async (address: string | undefined) => {
  const activeStatus = await kingPass.checkIfPassActive(address);
  const hasKingpass = await kingPass.firstNft(address);
  if (!hasKingpass) {
    return 0;
  } else if (hasKingpass && !activeStatus) {
    return 1;
  } else if (activeStatus) {
    return 2;
  }
};

export const getTypeofUser = async (address: string | undefined) => {
  const typeOfUser = await kingPass.typeOfUser(address);
  return typeOfUser;
};

export const handleClaim = async () => {
  const kingPassWithSigner = new ethers.Contract(contracts.KINGpass_abi.address, contracts.KINGpass_abi.abi, signer);
  console.log({ kingPassWithSigner, kingPass });
  // const gasLimit = await kingPassWithSigner.estimateGas.activateKingPass();
  // const gasPrice = await provider.getGasPrice();
  // console.log({ gasLimit, gasPrice });

  const tx2 = await kingPassWithSigner.activateKingPass();
  await tx2.wait();
};

export { kingPass };
