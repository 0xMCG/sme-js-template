/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestERC20NotOk,
  TestERC20NotOkInterface,
} from "../../../contracts/test/TestERC20NotOk";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
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
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "notOk",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
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
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e0604081815234620004295762000017826200042e565b600b825260206a5465737432304e6f744f6b60a81b818401528151926200003e846200042e565b600784526654535432304e4f60c81b8285015280516001600160401b0393908481116200041357600090806200007583546200044a565b94601f95868111620003c2575b5086908683116001146200035a5784926200034e575b50508160011b916000199060031b1c19161781555b85518581116200033a57600190620000c682546200044a565b858111620002f2575b50858582116001146200028d578394959697988293949262000281575b5050600019600383901b1c191690821b1781555b60126080524660a05282519382908354926200011c846200044a565b90818852888801948982821691826000146200026457505060011462000228575b505085601f1992030116840193808510878611176200021457848452519020938301937f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8552828401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608401524660808401523060a084015260a0835260c08301948386109086111762000200575083905251902060c052610def908162000488823960805181610885015260a05181610c0a015260c05181610c310152f35b634e487b7160e01b81526041600452602490fd5b634e487b7160e01b83526041600452602483fd5b90889293508580528286209186925b8284106200024e575050508601019038806200013d565b80548a85018601528a9490930192810162000237565b92509394505060ff19168452151560051b8601019038806200013d565b015190503880620000ec565b82845286842090601f198316855b818110620002dc5750998385969798999a9b10620002c2575b505050811b01815562000100565b015160001960f88460031b161c19169055388080620002b4565b8b8301518455928501929189019189016200029b565b8284528684208680840160051c82019289851062000330575b0160051c019083905b82811062000324575050620000cf565b85815501839062000314565b925081926200030b565b634e487b7160e01b82526041600452602482fd5b01519050388062000098565b8480528785209250601f198416855b89828210620003ab57505090846001959493921062000391575b505050811b018155620000ad565b015160001960f88460031b161c1916905538808062000383565b600185968293968601518155019501930162000369565b9091508380528684208680850160051c82019289861062000409575b9085949392910160051c01905b818110620003fa575062000082565b858155849350600101620003eb565b92508192620003de565b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b038211176200041357604052565b90600182811c921680156200047c575b60208310146200046657565b634e487b7160e01b600052602260045260246000fd5b91607f16916200045a56fe6080604081815260048036101561001557600080fd5b600092833560e01c90816306fdde03146109cd57508063095ea7b31461093357806318160ddd146108f657806323b872dd146108a9578063313ce5671461084d5780633644e5151461080b57806340c10f191461073657806370a08231146106d45780637ecebe001461067257806395d89b4114610557578063a9059cbb14610475578063af9b0d1d14610433578063d505accf146101335763dd62ed3e146100bd57600080fd5b3461012f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012f5760209282916100f8610bba565b610100610be2565b9173ffffffffffffffffffffffffffffffffffffffff8092168452865283832091168252845220549051908152f35b8280fd5b5091903461042f5760e07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261042f5761016d610bba565b90610176610be2565b91604435606435926084359260ff841680940361042b574285106103ce5761019c610c05565b9573ffffffffffffffffffffffffffffffffffffffff8092169586895260209560058752848a209889549960018b01905585519285898501957f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c987528b89870152169a8b606086015288608086015260a085015260c084015260c0835260e0830167ffffffffffffffff94848210868311176103a157818852845190206101008501927f19010000000000000000000000000000000000000000000000000000000000008452610102860152610122850152604281526101608401948186109086111761037557848752519020835261018082015260a4356101a082015260c4356101c0909101528780528490889060809060015afa1561036b578651169687151580610362575b156103075786977f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259596975283528087208688528352818188205551908152a380f35b8360649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152600e60248201527f494e56414c49445f5349474e45520000000000000000000000000000000000006044820152fd5b508488146102c4565b81513d88823e3d90fd5b60248c60418f7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b5060248c60418f7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b60648860208451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152fd5b8680fd5b5080fd5b50503461042f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261042f5760209060ff6006541690519015158152f35b50913461055457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610554576104ad610bba565b60243590338352600360205283832080549083820391821161052857602096509173ffffffffffffffffffffffffffffffffffffffff918693551692838152600386522081815401905582519081527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef843392a35160018152f35b6024856011897f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b80fd5b50503461042f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261042f5780519082600180549161059983610a91565b8086529282811690811561062c57506001146105d0575b5050506105c2826105cc940383610ae4565b5191829182610b54565b0390f35b94508085527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b828610610614575050506105c28260206105cc95820101946105b0565b805460208787018101919091529095019481016105f7565b6105cc9750869350602092506105c29491507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001682840152151560051b820101946105b0565b50503461042f5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261042f578060209273ffffffffffffffffffffffffffffffffffffffff6106c4610bba565b1681526005845220549051908152f35b50503461042f5760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261042f578060209273ffffffffffffffffffffffffffffffffffffffff610726610bba565b1681526003845220549051908152f35b50913461055457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126105545761076e610bba565b90602435916002548381018091116107df576020955073ffffffffffffffffffffffffffffffffffffffff7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9287926002551693848452600382528584208181540190558551908152a35160018152f35b6024836011887f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b50503461042f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261042f57602090610846610c05565b9051908152f35b50503461042f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261042f576020905160ff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50503461042f5760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261042f57906020916108e6610bba565b506108ef610be2565b5051908152f35b50503461042f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261042f576020906002549051908152f35b503461012f57817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012f5760209261096d610bba565b9183602435928392338252875273ffffffffffffffffffffffffffffffffffffffff8282209516948582528752205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b8490843461012f57827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012f57828054610a0a81610a91565b8085529160019180831690811561062c5750600114610a35575050506105c2826105cc940383610ae4565b80809650527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b828610610a79575050506105c28260206105cc95820101946105b0565b80546020878701810191909152909501948101610a5c565b90600182811c92168015610ada575b6020831014610aab57565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691610aa0565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610b2557604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60208082528251818301819052939260005b858110610ba6575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b818101830151848201604001528201610b66565b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610bdd57565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff82168203610bdd57565b6000467f000000000000000000000000000000000000000000000000000000000000000003610c5357507f000000000000000000000000000000000000000000000000000000000000000090565b60405181548291610c6382610a91565b8082528160209485820194600190878282169182600014610da6575050600114610d4d575b50610c9592500382610ae4565b51902091604051918201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f845260408301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608301524660808301523060a083015260a0825260c082019082821067ffffffffffffffff831117610d20575060405251902090565b807f4e487b7100000000000000000000000000000000000000000000000000000000602492526041600452fd5b87805286915087907f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b858310610d8e575050610c95935082010138610c88565b80548388018501528694508893909201918101610d77565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168852610c9595151560051b8501019250389150610c88905056fea164736f6c6343000811000a";

type TestERC20NotOkConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20NotOkConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20NotOk__factory extends ContractFactory {
  constructor(...args: TestERC20NotOkConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC20NotOk> {
    return super.deploy(overrides || {}) as Promise<TestERC20NotOk>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestERC20NotOk {
    return super.attach(address) as TestERC20NotOk;
  }
  override connect(signer: Signer): TestERC20NotOk__factory {
    return super.connect(signer) as TestERC20NotOk__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20NotOkInterface {
    return new utils.Interface(_abi) as TestERC20NotOkInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20NotOk {
    return new Contract(address, _abi, signerOrProvider) as TestERC20NotOk;
  }
}
