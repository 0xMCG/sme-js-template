/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ConduitMockRevertNoReason,
  ConduitMockRevertNoReasonInterface,
} from "../../../contracts/test/ConduitMockRevertNoReason";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
    ],
    name: "ChannelClosed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    name: "ChannelStatusAlreadySet",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidController",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidItemType",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "open",
        type: "bool",
      },
    ],
    name: "ChannelUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ConduitItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ConduitTransfer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "execute",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ConduitBatch1155Transfer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "executeBatch1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "enum ConduitItemType",
            name: "itemType",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "identifier",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct ConduitTransfer[]",
        name: "",
        type: "tuple[]",
      },
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "ids",
            type: "uint256[]",
          },
          {
            internalType: "uint256[]",
            name: "amounts",
            type: "uint256[]",
          },
        ],
        internalType: "struct ConduitBatch1155Transfer[]",
        name: "",
        type: "tuple[]",
      },
    ],
    name: "executeWithBatch1155",
    outputs: [
      {
        internalType: "bytes4",
        name: "magicValue",
        type: "bytes4",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "channel",
        type: "address",
      },
      {
        internalType: "bool",
        name: "isOpen",
        type: "bool",
      },
    ],
    name: "updateChannel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080806040523461001657610251908161001c8239f35b600080fdfe60808060405260048036101561001457600080fd5b600091823560e01c9081634ce34aa214610189578163899e104c1461010e575080638df25d92146100af5763c4e8fcb51461004e57600080fd5b346100ab5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ab573573ffffffffffffffffffffffffffffffffffffffff8116036100a857602435801515036100a85780f35b80fd5b5080fd5b50346100ab5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ab57803567ffffffffffffffff811161010a576020929161010091369101610213565b5050604051908152f35b8280fd5b9190503461010a5760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261010a5767ffffffffffffffff81358181116101855761015f90369084016101dd565b5050602435908111610181576020939161017b91369101610213565b50508152f35b8380fd5b8480fd5b5050346100ab5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126100ab5780359067ffffffffffffffff821161010a576101d8913691016101dd565b505080fd5b9181601f8401121561020e5782359167ffffffffffffffff831161020e5760208085019460c0850201011161020e57565b600080fd5b9181601f8401121561020e5782359167ffffffffffffffff831161020e576020808501948460051b01011161020e5756fea164736f6c6343000811000a";

type ConduitMockRevertNoReasonConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ConduitMockRevertNoReasonConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ConduitMockRevertNoReason__factory extends ContractFactory {
  constructor(...args: ConduitMockRevertNoReasonConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ConduitMockRevertNoReason> {
    return super.deploy(overrides || {}) as Promise<ConduitMockRevertNoReason>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ConduitMockRevertNoReason {
    return super.attach(address) as ConduitMockRevertNoReason;
  }
  override connect(signer: Signer): ConduitMockRevertNoReason__factory {
    return super.connect(signer) as ConduitMockRevertNoReason__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ConduitMockRevertNoReasonInterface {
    return new utils.Interface(_abi) as ConduitMockRevertNoReasonInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ConduitMockRevertNoReason {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ConduitMockRevertNoReason;
  }
}
