/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ZoneInteractionErrors,
  ZoneInteractionErrorsInterface,
} from "../../../contracts/interfaces/ZoneInteractionErrors";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "InvalidContractOrder",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "orderHash",
        type: "bytes32",
      },
    ],
    name: "InvalidRestrictedOrder",
    type: "error",
  },
] as const;

export class ZoneInteractionErrors__factory {
  static readonly abi = _abi;
  static createInterface(): ZoneInteractionErrorsInterface {
    return new utils.Interface(_abi) as ZoneInteractionErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ZoneInteractionErrors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ZoneInteractionErrors;
  }
}
