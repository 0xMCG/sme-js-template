/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  TestERC20Panic,
  TestERC20PanicInterface,
} from "../../../contracts/test/TestERC20Panic";

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
  "0x60e0604090808252346200042c57620000188162000431565b60098152602090685465737450616e696360b81b828201528251926200003e8462000431565b60058085526450414e494360d81b8486015282516001600160401b03959091908683116200041657600092806200007685546200044d565b96601f97888111620003c7575b5088908883116001146200035f57869262000353575b50508160011b916000199060031b1c19161783555b80518781116200033f5780600192620000c884546200044d565b888111620002ee575b5088908883116001146200028a5786926200027e575b5050600019600383901b1c191690821b1781555b60126080524660a052835194839184549062000117826200044d565b9182895289808a01968383169283600014620002605750505060011462000224575b505085601f1992030116840193808510878611176200021057848452519020938301937f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8552828401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608401524660808401523060a084015260a0835260c083019483861090861117620001fc575083905251902060c052610dc490816200048b823960805181610838015260a05181610bdf015260c05181610c060152f35b634e487b7160e01b81526041600452602490fd5b634e487b7160e01b83526041600452602483fd5b90889293508580528286209186925b8284106200024a5750505086010190388062000139565b80548a85018601528a9490930192810162000233565b925093925093945060ff191685521515901b86010190388062000139565b015190503880620000e7565b8487528987208594509190601f198416885b8c828210620002d75750508411620002bd575b505050811b018155620000fb565b015160001960f88460031b161c19169055388080620002af565b83850151865588979095019493840193016200029c565b90915083865288862088808501871c8201928b861062000335575b9186918695949301881c01915b82811062000326575050620000d1565b88815585945086910162000316565b9250819262000309565b634e487b7160e01b84526041600452602484fd5b01519050388062000099565b8680528987209250601f198416875b8b828210620003b057505090846001959493921062000396575b505050811b018355620000ae565b015160001960f88460031b161c1916905538808062000388565b60018596829396860151815501950193016200036e565b90915085805288862088808501871c8201928b86106200040c575b90859493929101871c01905b818110620003fd575062000083565b878155849350600101620003ee565b92508192620003e2565b634e487b7160e01b600052604160045260246000fd5b600080fd5b604081019081106001600160401b038211176200041657604052565b90600182811c921680156200047f575b60208310146200046957565b634e487b7160e01b600052602260045260246000fd5b91607f16916200045d56fe6080604081815260048036101561001557600080fd5b600092833560e01c90816306fdde03146109a257508063095ea7b31461090857806318160ddd146108cb57806323b872dd1461085c578063313ce567146108005780633644e515146107be57806340c10f19146106e957806370a08231146106875780637ecebe001461062557806395d89b411461050a578063a9059cbb14610428578063d505accf146101285763dd62ed3e146100b257600080fd5b3461012457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101245760209282916100ed610b8f565b6100f5610bb7565b9173ffffffffffffffffffffffffffffffffffffffff8092168452865283832091168252845220549051908152f35b8280fd5b509190346104245760e07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261042457610162610b8f565b9061016b610bb7565b91604435606435926084359260ff8416809403610420574285106103c357610191610bda565b9573ffffffffffffffffffffffffffffffffffffffff8092169586895260209560058752848a209889549960018b01905585519285898501957f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c987528b89870152169a8b606086015288608086015260a085015260c084015260c0835260e0830167ffffffffffffffff948482108683111761039657818852845190206101008501927f19010000000000000000000000000000000000000000000000000000000000008452610102860152610122850152604281526101608401948186109086111761036a57848752519020835261018082015260a4356101a082015260c4356101c0909101528780528490889060809060015afa15610360578651169687151580610357575b156102fc5786977f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259596975283528087208688528352818188205551908152a380f35b8360649251917f08c379a0000000000000000000000000000000000000000000000000000000008352820152600e60248201527f494e56414c49445f5349474e45520000000000000000000000000000000000006044820152fd5b508488146102b9565b81513d88823e3d90fd5b60248c60418f7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b5060248c60418f7f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b60648860208451917f08c379a0000000000000000000000000000000000000000000000000000000008352820152601760248201527f5045524d49545f444541444c494e455f455850495245440000000000000000006044820152fd5b8680fd5b5080fd5b50913461050757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261050757610460610b8f565b6024359033835260036020528383208054908382039182116104db57602096509173ffffffffffffffffffffffffffffffffffffffff918693551692838152600386522081815401905582519081527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef843392a35160018152f35b6024856011897f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b80fd5b50503461042457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104245780519082600180549161054c83610a66565b808652928281169081156105df5750600114610583575b5050506105758261057f940383610ab9565b5191829182610b29565b0390f35b94508085527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b8286106105c75750505061057582602061057f9582010194610563565b805460208787018101919091529095019481016105aa565b61057f9750869350602092506105759491507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001682840152151560051b82010194610563565b5050346104245760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610424578060209273ffffffffffffffffffffffffffffffffffffffff610677610b8f565b1681526005845220549051908152f35b5050346104245760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610424578060209273ffffffffffffffffffffffffffffffffffffffff6106d9610b8f565b1681526003845220549051908152f35b50913461050757817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261050757610721610b8f565b9060243591600254838101809111610792576020955073ffffffffffffffffffffffffffffffffffffffff7fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9287926002551693848452600382528584208181540190558551908152a35160018152f35b6024836011887f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b50503461042457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610424576020906107f9610bda565b9051908152f35b50503461042457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610424576020905160ff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b8382346104245760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126104245790601260249261089b610b8f565b506108a4610bb7565b507f4e487b7100000000000000000000000000000000000000000000000000000000835252fd5b50503461042457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610424576020906002549051908152f35b503461012457817ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc36011261012457602092610942610b8f565b9183602435928392338252875273ffffffffffffffffffffffffffffffffffffffff8282209516948582528752205582519081527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925843392a35160018152f35b8490843461012457827ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610124578280546109df81610a66565b808552916001918083169081156105df5750600114610a0a575050506105758261057f940383610ab9565b80809650527f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b828610610a4e5750505061057582602061057f9582010194610563565b80546020878701810191909152909501948101610a31565b90600182811c92168015610aaf575b6020831014610a8057565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691610a75565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff821117610afa57604052565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b60208082528251818301819052939260005b858110610b7b575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b818101830151848201604001528201610b3b565b6004359073ffffffffffffffffffffffffffffffffffffffff82168203610bb257565b600080fd5b6024359073ffffffffffffffffffffffffffffffffffffffff82168203610bb257565b6000467f000000000000000000000000000000000000000000000000000000000000000003610c2857507f000000000000000000000000000000000000000000000000000000000000000090565b60405181548291610c3882610a66565b8082528160209485820194600190878282169182600014610d7b575050600114610d22575b50610c6a92500382610ab9565b51902091604051918201927f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f845260408301527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608301524660808301523060a083015260a0825260c082019082821067ffffffffffffffff831117610cf5575060405251902090565b807f4e487b7100000000000000000000000000000000000000000000000000000000602492526041600452fd5b87805286915087907f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e5635b858310610d63575050610c6a935082010138610c5d565b80548388018501528694508893909201918101610d4c565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00168852610c6a95151560051b8501019250389150610c5d905056fea164736f6c6343000811000a";

type TestERC20PanicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestERC20PanicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestERC20Panic__factory extends ContractFactory {
  constructor(...args: TestERC20PanicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TestERC20Panic> {
    return super.deploy(overrides || {}) as Promise<TestERC20Panic>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TestERC20Panic {
    return super.attach(address) as TestERC20Panic;
  }
  override connect(signer: Signer): TestERC20Panic__factory {
    return super.connect(signer) as TestERC20Panic__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestERC20PanicInterface {
    return new utils.Interface(_abi) as TestERC20PanicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20Panic {
    return new Contract(address, _abi, signerOrProvider) as TestERC20Panic;
  }
}
