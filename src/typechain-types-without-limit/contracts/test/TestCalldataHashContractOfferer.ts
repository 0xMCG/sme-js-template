/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export type SpentItemStruct = {
  itemType: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
  identifier: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
};

export type SpentItemStructOutput = [number, string, BigNumber, BigNumber] & {
  itemType: number;
  token: string;
  identifier: BigNumber;
  amount: BigNumber;
};

export type ReceivedItemStruct = {
  itemType: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
  identifier: PromiseOrValue<BigNumberish>;
  amount: PromiseOrValue<BigNumberish>;
  recipient: PromiseOrValue<string>;
};

export type ReceivedItemStructOutput = [
  number,
  string,
  BigNumber,
  BigNumber,
  string
] & {
  itemType: number;
  token: string;
  identifier: BigNumber;
  amount: BigNumber;
  recipient: string;
};

export type SchemaStruct = {
  id: PromiseOrValue<BigNumberish>;
  metadata: PromiseOrValue<BytesLike>;
};

export type SchemaStructOutput = [BigNumber, string] & {
  id: BigNumber;
  metadata: string;
};

export interface TestCalldataHashContractOffererInterface
  extends utils.Interface {
  functions: {
    "activate(address,(uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256)[],bytes)": FunctionFragment;
    "generateOrder(address,(uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256)[],bytes)": FunctionFragment;
    "getSeaportMetadata()": FunctionFragment;
    "orderHashToGenerateOrderDataHash(bytes32)": FunctionFragment;
    "orderHashToRatifyOrderDataHash(bytes32)": FunctionFragment;
    "previewOrder(address,address,(uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256)[],bytes)": FunctionFragment;
    "ratifyOrder((uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256,address)[],bytes,bytes32[],uint256)": FunctionFragment;
    "setExpectedOfferRecipient(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "activate"
      | "generateOrder"
      | "getSeaportMetadata"
      | "orderHashToGenerateOrderDataHash"
      | "orderHashToRatifyOrderDataHash"
      | "previewOrder"
      | "ratifyOrder"
      | "setExpectedOfferRecipient"
      | "supportsInterface"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "activate",
    values: [
      PromiseOrValue<string>,
      SpentItemStruct[],
      SpentItemStruct[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "generateOrder",
    values: [
      PromiseOrValue<string>,
      SpentItemStruct[],
      SpentItemStruct[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getSeaportMetadata",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "orderHashToGenerateOrderDataHash",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "orderHashToRatifyOrderDataHash",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "previewOrder",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      SpentItemStruct[],
      SpentItemStruct[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "ratifyOrder",
    values: [
      SpentItemStruct[],
      ReceivedItemStruct[],
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setExpectedOfferRecipient",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "activate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "generateOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSeaportMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "orderHashToGenerateOrderDataHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "orderHashToRatifyOrderDataHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "previewOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ratifyOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExpectedOfferRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;

  events: {
    "GenerateOrderDataHash(bytes32,bytes32)": EventFragment;
    "RatifyOrderDataHash(bytes32,bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "GenerateOrderDataHash"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RatifyOrderDataHash"): EventFragment;
}

export interface GenerateOrderDataHashEventObject {
  orderHash: string;
  dataHash: string;
}
export type GenerateOrderDataHashEvent = TypedEvent<
  [string, string],
  GenerateOrderDataHashEventObject
>;

export type GenerateOrderDataHashEventFilter =
  TypedEventFilter<GenerateOrderDataHashEvent>;

export interface RatifyOrderDataHashEventObject {
  orderHash: string;
  dataHash: string;
}
export type RatifyOrderDataHashEvent = TypedEvent<
  [string, string],
  RatifyOrderDataHashEventObject
>;

export type RatifyOrderDataHashEventFilter =
  TypedEventFilter<RatifyOrderDataHashEvent>;

export interface TestCalldataHashContractOfferer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestCalldataHashContractOffererInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    activate(
      arg0: PromiseOrValue<string>,
      minimumReceived: SpentItemStruct[],
      arg2: SpentItemStruct[],
      arg3: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    generateOrder(
      arg0: PromiseOrValue<string>,
      a: SpentItemStruct[],
      b: SpentItemStruct[],
      c: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getSeaportMetadata(
      overrides?: CallOverrides
    ): Promise<
      [string, SchemaStructOutput[]] & {
        name: string;
        schemas: SchemaStructOutput[];
      }
    >;

    orderHashToGenerateOrderDataHash(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    orderHashToRatifyOrderDataHash(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    previewOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      a: SpentItemStruct[],
      b: SpentItemStruct[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [SpentItemStructOutput[], ReceivedItemStructOutput[]] & {
        offer: SpentItemStructOutput[];
        consideration: ReceivedItemStructOutput[];
      }
    >;

    ratifyOrder(
      minimumReceived: SpentItemStruct[],
      maximumSpent: ReceivedItemStruct[],
      context: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>[],
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExpectedOfferRecipient(
      expectedOfferRecipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  activate(
    arg0: PromiseOrValue<string>,
    minimumReceived: SpentItemStruct[],
    arg2: SpentItemStruct[],
    arg3: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  generateOrder(
    arg0: PromiseOrValue<string>,
    a: SpentItemStruct[],
    b: SpentItemStruct[],
    c: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getSeaportMetadata(
    overrides?: CallOverrides
  ): Promise<
    [string, SchemaStructOutput[]] & {
      name: string;
      schemas: SchemaStructOutput[];
    }
  >;

  orderHashToGenerateOrderDataHash(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  orderHashToRatifyOrderDataHash(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  previewOrder(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    a: SpentItemStruct[],
    b: SpentItemStruct[],
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [SpentItemStructOutput[], ReceivedItemStructOutput[]] & {
      offer: SpentItemStructOutput[];
      consideration: ReceivedItemStructOutput[];
    }
  >;

  ratifyOrder(
    minimumReceived: SpentItemStruct[],
    maximumSpent: ReceivedItemStruct[],
    context: PromiseOrValue<BytesLike>,
    arg3: PromiseOrValue<BytesLike>[],
    arg4: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExpectedOfferRecipient(
    expectedOfferRecipient: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    activate(
      arg0: PromiseOrValue<string>,
      minimumReceived: SpentItemStruct[],
      arg2: SpentItemStruct[],
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    generateOrder(
      arg0: PromiseOrValue<string>,
      a: SpentItemStruct[],
      b: SpentItemStruct[],
      c: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [SpentItemStructOutput[], ReceivedItemStructOutput[]] & {
        offer: SpentItemStructOutput[];
        consideration: ReceivedItemStructOutput[];
      }
    >;

    getSeaportMetadata(
      overrides?: CallOverrides
    ): Promise<
      [string, SchemaStructOutput[]] & {
        name: string;
        schemas: SchemaStructOutput[];
      }
    >;

    orderHashToGenerateOrderDataHash(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    orderHashToRatifyOrderDataHash(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    previewOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      a: SpentItemStruct[],
      b: SpentItemStruct[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [SpentItemStructOutput[], ReceivedItemStructOutput[]] & {
        offer: SpentItemStructOutput[];
        consideration: ReceivedItemStructOutput[];
      }
    >;

    ratifyOrder(
      minimumReceived: SpentItemStruct[],
      maximumSpent: ReceivedItemStruct[],
      context: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>[],
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    setExpectedOfferRecipient(
      expectedOfferRecipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "GenerateOrderDataHash(bytes32,bytes32)"(
      orderHash?: null,
      dataHash?: null
    ): GenerateOrderDataHashEventFilter;
    GenerateOrderDataHash(
      orderHash?: null,
      dataHash?: null
    ): GenerateOrderDataHashEventFilter;

    "RatifyOrderDataHash(bytes32,bytes32)"(
      orderHash?: null,
      dataHash?: null
    ): RatifyOrderDataHashEventFilter;
    RatifyOrderDataHash(
      orderHash?: null,
      dataHash?: null
    ): RatifyOrderDataHashEventFilter;
  };

  estimateGas: {
    activate(
      arg0: PromiseOrValue<string>,
      minimumReceived: SpentItemStruct[],
      arg2: SpentItemStruct[],
      arg3: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    generateOrder(
      arg0: PromiseOrValue<string>,
      a: SpentItemStruct[],
      b: SpentItemStruct[],
      c: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getSeaportMetadata(overrides?: CallOverrides): Promise<BigNumber>;

    orderHashToGenerateOrderDataHash(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orderHashToRatifyOrderDataHash(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    previewOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      a: SpentItemStruct[],
      b: SpentItemStruct[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ratifyOrder(
      minimumReceived: SpentItemStruct[],
      maximumSpent: ReceivedItemStruct[],
      context: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>[],
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExpectedOfferRecipient(
      expectedOfferRecipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    activate(
      arg0: PromiseOrValue<string>,
      minimumReceived: SpentItemStruct[],
      arg2: SpentItemStruct[],
      arg3: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    generateOrder(
      arg0: PromiseOrValue<string>,
      a: SpentItemStruct[],
      b: SpentItemStruct[],
      c: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getSeaportMetadata(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orderHashToGenerateOrderDataHash(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orderHashToRatifyOrderDataHash(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    previewOrder(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      a: SpentItemStruct[],
      b: SpentItemStruct[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ratifyOrder(
      minimumReceived: SpentItemStruct[],
      maximumSpent: ReceivedItemStruct[],
      context: PromiseOrValue<BytesLike>,
      arg3: PromiseOrValue<BytesLike>[],
      arg4: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExpectedOfferRecipient(
      expectedOfferRecipient: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}