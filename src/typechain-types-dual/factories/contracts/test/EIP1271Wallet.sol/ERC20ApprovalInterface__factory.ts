/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ERC20ApprovalInterface,
  ERC20ApprovalInterfaceInterface,
} from "../../../../contracts/test/EIP1271Wallet.sol/ERC20ApprovalInterface";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ERC20ApprovalInterface__factory {
  static readonly abi = _abi;
  static createInterface(): ERC20ApprovalInterfaceInterface {
    return new utils.Interface(_abi) as ERC20ApprovalInterfaceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20ApprovalInterface {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC20ApprovalInterface;
  }
}
