/* eslint-disable no-console */

import { ethers } from 'ethers';
import contracts from './contracts.json';
import { erc20ABI } from 'wagmi'

let signer: any = null;
let provider: any = null;

let kingPass: any = null;

let kingPassWithSigner:any = null;
let currencyContract: any = null

export const initializeWeb3 = async (provider_: any, signer_: any) => {
  currencyContract = new ethers.Contract(contracts.KINGpass_abi.address, erc20ABI, signer_);
  kingPassWithSigner = new ethers.Contract(contracts.KINGpass_abi.address, contracts.KINGpass_abi.abi, signer_);
  kingPass = new ethers.Contract(contracts.KINGpass_abi.address, contracts.KINGpass_abi.abi, provider_);

  provider = provider_;
  signer = await signer_;
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
  const tx = await kingPassWithSigner.activateKingPass();
  await tx.wait();
};

export const handleStartSubScription = async (months: number, usdtAddy: string, status: boolean) => {
  console.log({ months, usdtAddy, status })
  const tx = await currencyContract.approve(contracts.KINGpass_abi.address, await kingPass.pricePass() * months);
  await tx.wait();
  await kingPass.buyPass(1, usdtAddy, status);
}

export const handleKingpassWithdraw = async () => {
  const tx = await kingPassWithSigner.deactivateKingPass();
  await tx.wait();
}

export const handleSubscriptionCancel = async () => {
  const tx = await kingPassWithSigner.deactivateSubscription();
  await tx.wait();
}

// export const handleApprove = async() => {
//   const tx = await currencyContract.approve()
// }

