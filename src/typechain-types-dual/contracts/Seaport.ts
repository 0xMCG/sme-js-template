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
} from "../common";

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

export type OfferItemStruct = {
  itemType: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
  identifierOrCriteria: PromiseOrValue<BigNumberish>;
  startAmount: PromiseOrValue<BigNumberish>;
  endAmount: PromiseOrValue<BigNumberish>;
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
  itemType: PromiseOrValue<BigNumberish>;
  token: PromiseOrValue<string>;
  identifierOrCriteria: PromiseOrValue<BigNumberish>;
  startAmount: PromiseOrValue<BigNumberish>;
  endAmount: PromiseOrValue<BigNumberish>;
  recipient: PromiseOrValue<string>;
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
  offerer: PromiseOrValue<string>;
  zone: PromiseOrValue<string>;
  offer: OfferItemStruct[];
  consideration: ConsiderationItemStruct[];
  orderType: PromiseOrValue<BigNumberish>;
  startTime: PromiseOrValue<BigNumberish>;
  endTime: PromiseOrValue<BigNumberish>;
  zoneHash: PromiseOrValue<BytesLike>;
  salt: PromiseOrValue<BigNumberish>;
  conduitKey: PromiseOrValue<BytesLike>;
  totalOriginalConsiderationItems: PromiseOrValue<BigNumberish>;
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

export type OrderComponentsStruct = {
  offerer: PromiseOrValue<string>;
  zone: PromiseOrValue<string>;
  offer: OfferItemStruct[];
  consideration: ConsiderationItemStruct[];
  orderType: PromiseOrValue<BigNumberish>;
  startTime: PromiseOrValue<BigNumberish>;
  endTime: PromiseOrValue<BigNumberish>;
  zoneHash: PromiseOrValue<BytesLike>;
  salt: PromiseOrValue<BigNumberish>;
  conduitKey: PromiseOrValue<BytesLike>;
  counter: PromiseOrValue<BigNumberish>;
};

export type OrderComponentsStructOutput = [
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
  counter: BigNumber;
};

export type OrderStruct = {
  parameters: OrderParametersStruct;
  signature: PromiseOrValue<BytesLike>;
};

export type OrderStructOutput = [OrderParametersStructOutput, string] & {
  parameters: OrderParametersStructOutput;
  signature: string;
};

export type FulfillmentComponentStruct = {
  orderIndex: PromiseOrValue<BigNumberish>;
  itemIndex: PromiseOrValue<BigNumberish>;
};

export type FulfillmentComponentStructOutput = [BigNumber, BigNumber] & {
  orderIndex: number;
  itemIndex: number;
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

export type OrderProbilityStruct = {
  orderHash: PromiseOrValue<BytesLike>;
  numerator: PromiseOrValue<BigNumberish>;
  denominator: PromiseOrValue<BigNumberish>;
};

export type OrderProbilityStructOutput = [string, BigNumber, BigNumber] & {
  orderHash: string;
  numerator: BigNumber;
  denominator: BigNumber;
};

export type ExecutionStruct = {
  item: ReceivedItemStruct;
  offerer: PromiseOrValue<string>;
  conduitKey: PromiseOrValue<BytesLike>;
};

export type ExecutionStructOutput = [
  ReceivedItemStructOutput,
  string,
  string
] & { item: ReceivedItemStructOutput; offerer: string; conduitKey: string };

export interface SeaportInterface extends utils.Interface {
  functions: {
    "cancel((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256)[])": FunctionFragment;
    "getContractOffererNonce(address)": FunctionFragment;
    "getCounter(address)": FunctionFragment;
    "getOrderHash((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256))": FunctionFragment;
    "getOrderStatus(bytes32)": FunctionFragment;
    "incrementCounter()": FunctionFragment;
    "information()": FunctionFragment;
    "matchOrdersWithRandom(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[],((uint256,uint256)[],(uint256,uint256)[])[],uint256,(bytes32,uint256,uint256)[])": FunctionFragment;
    "name()": FunctionFragment;
    "owner()": FunctionFragment;
    "prepare(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[],uint256[],address[],uint32)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateVRFAddress(address)": FunctionFragment;
    "validate(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[])": FunctionFragment;
    "vrfOwner()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancel"
      | "getContractOffererNonce"
      | "getCounter"
      | "getOrderHash"
      | "getOrderStatus"
      | "incrementCounter"
      | "information"
      | "matchOrdersWithRandom"
      | "name"
      | "owner"
      | "prepare"
      | "renounceOwnership"
      | "transferOwnership"
      | "updateVRFAddress"
      | "validate"
      | "vrfOwner"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "cancel",
    values: [OrderComponentsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getContractOffererNonce",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getCounter",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderHash",
    values: [OrderComponentsStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderStatus",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "incrementCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "information",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "matchOrdersWithRandom",
    values: [
      OrderStruct[],
      FulfillmentStruct[],
      PromiseOrValue<BigNumberish>,
      OrderProbilityStruct[]
    ]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "prepare",
    values: [
      OrderStruct[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateVRFAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validate",
    values: [OrderStruct[]]
  ): string;
  encodeFunctionData(functionFragment: "vrfOwner", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContractOffererNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCounter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOrderHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderStatus",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incrementCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "information",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "matchOrdersWithRandom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "prepare", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateVRFAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vrfOwner", data: BytesLike): Result;

  events: {
    "CounterIncremented(uint256,address)": EventFragment;
    "OrderCancelled(bytes32,address,address)": EventFragment;
    "OrderFulfilled(bytes32,address,address,address,tuple[],tuple[])": EventFragment;
    "OrderValidated(bytes32,tuple)": EventFragment;
    "OrdersMatched(bytes32[])": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CounterIncremented"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderFulfilled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrderValidated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OrdersMatched"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface CounterIncrementedEventObject {
  newCounter: BigNumber;
  offerer: string;
}
export type CounterIncrementedEvent = TypedEvent<
  [BigNumber, string],
  CounterIncrementedEventObject
>;

export type CounterIncrementedEventFilter =
  TypedEventFilter<CounterIncrementedEvent>;

export interface OrderCancelledEventObject {
  orderHash: string;
  offerer: string;
  zone: string;
}
export type OrderCancelledEvent = TypedEvent<
  [string, string, string],
  OrderCancelledEventObject
>;

export type OrderCancelledEventFilter = TypedEventFilter<OrderCancelledEvent>;

export interface OrderFulfilledEventObject {
  orderHash: string;
  offerer: string;
  zone: string;
  recipient: string;
  offer: SpentItemStructOutput[];
  consideration: ReceivedItemStructOutput[];
}
export type OrderFulfilledEvent = TypedEvent<
  [
    string,
    string,
    string,
    string,
    SpentItemStructOutput[],
    ReceivedItemStructOutput[]
  ],
  OrderFulfilledEventObject
>;

export type OrderFulfilledEventFilter = TypedEventFilter<OrderFulfilledEvent>;

export interface OrderValidatedEventObject {
  orderHash: string;
  orderParameters: OrderParametersStructOutput;
}
export type OrderValidatedEvent = TypedEvent<
  [string, OrderParametersStructOutput],
  OrderValidatedEventObject
>;

export type OrderValidatedEventFilter = TypedEventFilter<OrderValidatedEvent>;

export interface OrdersMatchedEventObject {
  orderHashes: string[];
}
export type OrdersMatchedEvent = TypedEvent<
  [string[]],
  OrdersMatchedEventObject
>;

export type OrdersMatchedEventFilter = TypedEventFilter<OrdersMatchedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Seaport extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SeaportInterface;

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
    cancel(
      orders: OrderComponentsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getContractOffererNonce(
      contractOfferer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { nonce: BigNumber }>;

    getCounter(
      offerer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { counter: BigNumber }>;

    getOrderHash(
      arg0: OrderComponentsStruct,
      overrides?: CallOverrides
    ): Promise<[string] & { orderHash: string }>;

    getOrderStatus(
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [boolean, boolean, BigNumber, BigNumber] & {
        isValidated: boolean;
        isCancelled: boolean;
        totalFilled: BigNumber;
        totalSize: BigNumber;
      }
    >;

    incrementCounter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    information(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        version: string;
        domainSeparator: string;
        conduitController: string;
      }
    >;

    matchOrdersWithRandom(
      arg0: OrderStruct[],
      arg1: FulfillmentStruct[],
      requestId: PromiseOrValue<BigNumberish>,
      orderProbility: OrderProbilityStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    prepare(
      orders: OrderStruct[],
      premiumOrdersIndex: PromiseOrValue<BigNumberish>[],
      recipients: PromiseOrValue<string>[],
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateVRFAddress(
      vrfController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validate(
      arg0: OrderStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vrfOwner(overrides?: CallOverrides): Promise<[string]>;
  };

  cancel(
    orders: OrderComponentsStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getContractOffererNonce(
    contractOfferer: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getCounter(
    offerer: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOrderHash(
    arg0: OrderComponentsStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  getOrderStatus(
    orderHash: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [boolean, boolean, BigNumber, BigNumber] & {
      isValidated: boolean;
      isCancelled: boolean;
      totalFilled: BigNumber;
      totalSize: BigNumber;
    }
  >;

  incrementCounter(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  information(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string] & {
      version: string;
      domainSeparator: string;
      conduitController: string;
    }
  >;

  matchOrdersWithRandom(
    arg0: OrderStruct[],
    arg1: FulfillmentStruct[],
    requestId: PromiseOrValue<BigNumberish>,
    orderProbility: OrderProbilityStruct[],
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  prepare(
    orders: OrderStruct[],
    premiumOrdersIndex: PromiseOrValue<BigNumberish>[],
    recipients: PromiseOrValue<string>[],
    numWords: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateVRFAddress(
    vrfController: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validate(
    arg0: OrderStruct[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vrfOwner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    cancel(
      orders: OrderComponentsStruct[],
      overrides?: CallOverrides
    ): Promise<boolean>;

    getContractOffererNonce(
      contractOfferer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCounter(
      offerer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderHash(
      arg0: OrderComponentsStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    getOrderStatus(
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [boolean, boolean, BigNumber, BigNumber] & {
        isValidated: boolean;
        isCancelled: boolean;
        totalFilled: BigNumber;
        totalSize: BigNumber;
      }
    >;

    incrementCounter(overrides?: CallOverrides): Promise<BigNumber>;

    information(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string] & {
        version: string;
        domainSeparator: string;
        conduitController: string;
      }
    >;

    matchOrdersWithRandom(
      arg0: OrderStruct[],
      arg1: FulfillmentStruct[],
      requestId: PromiseOrValue<BigNumberish>,
      orderProbility: OrderProbilityStruct[],
      overrides?: CallOverrides
    ): Promise<ExecutionStructOutput[]>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    prepare(
      orders: OrderStruct[],
      premiumOrdersIndex: PromiseOrValue<BigNumberish>[],
      recipients: PromiseOrValue<string>[],
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string[]>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateVRFAddress(
      vrfController: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    validate(arg0: OrderStruct[], overrides?: CallOverrides): Promise<boolean>;

    vrfOwner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "CounterIncremented(uint256,address)"(
      newCounter?: null,
      offerer?: PromiseOrValue<string> | null
    ): CounterIncrementedEventFilter;
    CounterIncremented(
      newCounter?: null,
      offerer?: PromiseOrValue<string> | null
    ): CounterIncrementedEventFilter;

    "OrderCancelled(bytes32,address,address)"(
      orderHash?: null,
      offerer?: PromiseOrValue<string> | null,
      zone?: PromiseOrValue<string> | null
    ): OrderCancelledEventFilter;
    OrderCancelled(
      orderHash?: null,
      offerer?: PromiseOrValue<string> | null,
      zone?: PromiseOrValue<string> | null
    ): OrderCancelledEventFilter;

    "OrderFulfilled(bytes32,address,address,address,tuple[],tuple[])"(
      orderHash?: null,
      offerer?: PromiseOrValue<string> | null,
      zone?: PromiseOrValue<string> | null,
      recipient?: null,
      offer?: null,
      consideration?: null
    ): OrderFulfilledEventFilter;
    OrderFulfilled(
      orderHash?: null,
      offerer?: PromiseOrValue<string> | null,
      zone?: PromiseOrValue<string> | null,
      recipient?: null,
      offer?: null,
      consideration?: null
    ): OrderFulfilledEventFilter;

    "OrderValidated(bytes32,tuple)"(
      orderHash?: null,
      orderParameters?: null
    ): OrderValidatedEventFilter;
    OrderValidated(
      orderHash?: null,
      orderParameters?: null
    ): OrderValidatedEventFilter;

    "OrdersMatched(bytes32[])"(orderHashes?: null): OrdersMatchedEventFilter;
    OrdersMatched(orderHashes?: null): OrdersMatchedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    cancel(
      orders: OrderComponentsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getContractOffererNonce(
      contractOfferer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getCounter(
      offerer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderHash(
      arg0: OrderComponentsStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderStatus(
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    incrementCounter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    information(overrides?: CallOverrides): Promise<BigNumber>;

    matchOrdersWithRandom(
      arg0: OrderStruct[],
      arg1: FulfillmentStruct[],
      requestId: PromiseOrValue<BigNumberish>,
      orderProbility: OrderProbilityStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    prepare(
      orders: OrderStruct[],
      premiumOrdersIndex: PromiseOrValue<BigNumberish>[],
      recipients: PromiseOrValue<string>[],
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateVRFAddress(
      vrfController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validate(
      arg0: OrderStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vrfOwner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    cancel(
      orders: OrderComponentsStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getContractOffererNonce(
      contractOfferer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCounter(
      offerer: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderHash(
      arg0: OrderComponentsStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderStatus(
      orderHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    incrementCounter(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    information(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    matchOrdersWithRandom(
      arg0: OrderStruct[],
      arg1: FulfillmentStruct[],
      requestId: PromiseOrValue<BigNumberish>,
      orderProbility: OrderProbilityStruct[],
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    prepare(
      orders: OrderStruct[],
      premiumOrdersIndex: PromiseOrValue<BigNumberish>[],
      recipients: PromiseOrValue<string>[],
      numWords: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateVRFAddress(
      vrfController: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validate(
      arg0: OrderStruct[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vrfOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
