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
} from "./common";

export type OfferItemStruct = {
  itemType: BigNumberish;
  token: string;
  identifierOrCriteria: BigNumberish;
  startAmount: BigNumberish;
  endAmount: BigNumberish;
};

export type OfferItemStructOutput = [
  number,
  string,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  itemType: number;
  token: string;
  identifierOrCriteria: BigNumber;
  startAmount: BigNumber;
  endAmount: BigNumber;
};

export type ConsiderationItemStruct = {
  itemType: BigNumberish;
  token: string;
  identifierOrCriteria: BigNumberish;
  startAmount: BigNumberish;
  endAmount: BigNumberish;
  recipient: string;
};

export type ConsiderationItemStructOutput = [
  number,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  string
] & {
  itemType: number;
  token: string;
  identifierOrCriteria: BigNumber;
  startAmount: BigNumber;
  endAmount: BigNumber;
  recipient: string;
};

export type OrderParametersStruct = {
  offerer: string;
  zone: string;
  offer: OfferItemStruct[];
  consideration: ConsiderationItemStruct[];
  orderType: BigNumberish;
  startTime: BigNumberish;
  endTime: BigNumberish;
  zoneHash: BytesLike;
  salt: BigNumberish;
  conduitKey: BytesLike;
  totalOriginalConsiderationItems: BigNumberish;
};

export type OrderParametersStructOutput = [
  string,
  string,
  OfferItemStructOutput[],
  ConsiderationItemStructOutput[],
  number,
  BigNumber,
  BigNumber,
  string,
  BigNumber,
  string,
  BigNumber
] & {
  offerer: string;
  zone: string;
  offer: OfferItemStructOutput[];
  consideration: ConsiderationItemStructOutput[];
  orderType: number;
  startTime: BigNumber;
  endTime: BigNumber;
  zoneHash: string;
  salt: BigNumber;
  conduitKey: string;
  totalOriginalConsiderationItems: BigNumber;
};

export type OrderStruct = {
  parameters: OrderParametersStruct;
  signature: BytesLike;
};

export type OrderStructOutput = [OrderParametersStructOutput, string] & {
  parameters: OrderParametersStructOutput;
  signature: string;
};

export type FulfillmentComponentStruct = {
  orderIndex: BigNumberish;
  itemIndex: BigNumberish;
};

export type FulfillmentComponentStructOutput = [BigNumber, BigNumber] & {
  orderIndex: BigNumber;
  itemIndex: BigNumber;
};

export type FulfillmentStruct = {
  offerComponents: FulfillmentComponentStruct[];
  considerationComponents: FulfillmentComponentStruct[];
};

export type FulfillmentStructOutput = [
  FulfillmentComponentStructOutput[],
  FulfillmentComponentStructOutput[]
] & {
  offerComponents: FulfillmentComponentStructOutput[];
  considerationComponents: FulfillmentComponentStructOutput[];
};

export interface VRFConsumerV2Interface extends utils.Interface {
  functions: {
    "numerators(uint256)": FunctionFragment;
    "rawFulfillRandomWords(uint256,uint256[])": FunctionFragment;
    "requestRandomWords(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[],((uint256,uint256)[],(uint256,uint256)[])[])": FunctionFragment;
    "s_numWords()": FunctionFragment;
    "s_randomWords(uint256)": FunctionFragment;
    "s_requestId()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "numerators"
      | "rawFulfillRandomWords"
      | "requestRandomWords"
      | "s_numWords"
      | "s_randomWords"
      | "s_requestId"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "numerators",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rawFulfillRandomWords",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "requestRandomWords",
    values: [OrderStruct[], FulfillmentStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "s_numWords",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "s_randomWords",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "s_requestId",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "numerators", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "rawFulfillRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestRandomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "s_numWords", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "s_randomWords",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "s_requestId",
    data: BytesLike
  ): Result;

  events: {
    "ReturnedRandomness(uint256[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ReturnedRandomness"): EventFragment;
}

export interface ReturnedRandomnessEventObject {
  randomWords: BigNumber[];
}
export type ReturnedRandomnessEvent = TypedEvent<
  [BigNumber[]],
  ReturnedRandomnessEventObject
>;

export type ReturnedRandomnessEventFilter =
  TypedEventFilter<ReturnedRandomnessEvent>;

export interface VRFConsumerV2 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VRFConsumerV2Interface;

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
    numerators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    requestRandomWords(
      orders: OrderStruct[],
      fulfillments: FulfillmentStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    s_numWords(overrides?: CallOverrides): Promise<[number]>;

    s_randomWords(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    s_requestId(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  numerators(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  rawFulfillRandomWords(
    requestId: BigNumberish,
    randomWords: BigNumberish[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  requestRandomWords(
    orders: OrderStruct[],
    fulfillments: FulfillmentStruct[],
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  s_numWords(overrides?: CallOverrides): Promise<number>;

  s_randomWords(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  s_requestId(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    numerators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    requestRandomWords(
      orders: OrderStruct[],
      fulfillments: FulfillmentStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    s_numWords(overrides?: CallOverrides): Promise<number>;

    s_randomWords(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    s_requestId(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ReturnedRandomness(uint256[])"(
      randomWords?: null
    ): ReturnedRandomnessEventFilter;
    ReturnedRandomness(randomWords?: null): ReturnedRandomnessEventFilter;
  };

  estimateGas: {
    numerators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    requestRandomWords(
      orders: OrderStruct[],
      fulfillments: FulfillmentStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    s_numWords(overrides?: CallOverrides): Promise<BigNumber>;

    s_randomWords(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    s_requestId(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    numerators(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rawFulfillRandomWords(
      requestId: BigNumberish,
      randomWords: BigNumberish[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    requestRandomWords(
      orders: OrderStruct[],
      fulfillments: FulfillmentStruct[],
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    s_numWords(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    s_randomWords(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    s_requestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}