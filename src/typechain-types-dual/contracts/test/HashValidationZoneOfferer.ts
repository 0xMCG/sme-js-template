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
  PromiseOrValue,
} from "../../common";

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

export type SchemaStruct = {
  id: PromiseOrValue<BigNumberish>;
  metadata: PromiseOrValue<BytesLike>;
};

export type SchemaStructOutput = [BigNumber, string] & {
  id: BigNumber;
  metadata: string;
};

export type ZoneParametersStruct = {
  orderHash: PromiseOrValue<BytesLike>;
  fulfiller: PromiseOrValue<string>;
  offerer: PromiseOrValue<string>;
  offer: SpentItemStruct[];
  consideration: ReceivedItemStruct[];
  extraData: PromiseOrValue<BytesLike>;
  orderHashes: PromiseOrValue<BytesLike>[];
  startTime: PromiseOrValue<BigNumberish>;
  endTime: PromiseOrValue<BigNumberish>;
  zoneHash: PromiseOrValue<BytesLike>;
};

export type ZoneParametersStructOutput = [
  string,
  string,
  string,
  SpentItemStructOutput[],
  ReceivedItemStructOutput[],
  string,
  string[],
  BigNumber,
  BigNumber,
  string
] & {
  orderHash: string;
  fulfiller: string;
  offerer: string;
  offer: SpentItemStructOutput[];
  consideration: ReceivedItemStructOutput[];
  extraData: string;
  orderHashes: string[];
  startTime: BigNumber;
  endTime: BigNumber;
  zoneHash: string;
};

export interface HashValidationZoneOffererInterface extends utils.Interface {
  functions: {
    "addDropItemMutation(uint8,uint256)": FunctionFragment;
    "addExtraItemMutation(uint8,(uint8,address,uint256,uint256,address))": FunctionFragment;
    "addItemAmountMutation(uint8,uint256,uint256)": FunctionFragment;
    "callCount()": FunctionFragment;
    "called()": FunctionFragment;
    "dropItemMutations(uint256)": FunctionFragment;
    "extraItemMutations(uint256)": FunctionFragment;
    "failureReasons(bytes32)": FunctionFragment;
    "generateOrder(address,(uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256)[],bytes)": FunctionFragment;
    "getSeaportMetadata()": FunctionFragment;
    "itemAmountMutations(uint256)": FunctionFragment;
    "orderHashToValidateOrderDataHash(bytes32)": FunctionFragment;
    "previewOrder(address,address,(uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256)[],bytes)": FunctionFragment;
    "ratifyOrder((uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256,address)[],bytes,bytes32[],uint256)": FunctionFragment;
    "setExpectedOfferRecipient(address)": FunctionFragment;
    "setFailureReason(bytes32,uint8)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "validateOrder((bytes32,address,address,(uint8,address,uint256,uint256)[],(uint8,address,uint256,uint256,address)[],bytes,bytes32[],uint256,uint256,bytes32))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addDropItemMutation"
      | "addExtraItemMutation"
      | "addItemAmountMutation"
      | "callCount"
      | "called"
      | "dropItemMutations"
      | "extraItemMutations"
      | "failureReasons"
      | "generateOrder"
      | "getSeaportMetadata"
      | "itemAmountMutations"
      | "orderHashToValidateOrderDataHash"
      | "previewOrder"
      | "ratifyOrder"
      | "setExpectedOfferRecipient"
      | "setFailureReason"
      | "supportsInterface"
      | "validateOrder"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addDropItemMutation",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "addExtraItemMutation",
    values: [PromiseOrValue<BigNumberish>, ReceivedItemStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "addItemAmountMutation",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "callCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "called", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "dropItemMutations",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "extraItemMutations",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "failureReasons",
    values: [PromiseOrValue<BytesLike>]
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
    functionFragment: "itemAmountMutations",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "orderHashToValidateOrderDataHash",
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
    functionFragment: "setFailureReason",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateOrder",
    values: [ZoneParametersStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "addDropItemMutation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addExtraItemMutation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addItemAmountMutation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "callCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "called", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "dropItemMutations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "extraItemMutations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "failureReasons",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "generateOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSeaportMetadata",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "itemAmountMutations",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "orderHashToValidateOrderDataHash",
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
    functionFragment: "setFailureReason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "validateOrder",
    data: BytesLike
  ): Result;

  events: {
    "ValidateOrderDataHash(bytes32)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ValidateOrderDataHash"): EventFragment;
}

export interface ValidateOrderDataHashEventObject {
  dataHash: string;
}
export type ValidateOrderDataHashEvent = TypedEvent<
  [string],
  ValidateOrderDataHashEventObject
>;

export type ValidateOrderDataHashEventFilter =
  TypedEventFilter<ValidateOrderDataHashEvent>;

export interface HashValidationZoneOfferer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: HashValidationZoneOffererInterface;

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
    addDropItemMutation(
      side: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addExtraItemMutation(
      side: PromiseOrValue<BigNumberish>,
      item: ReceivedItemStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addItemAmountMutation(
      side: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      newAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    callCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    called(overrides?: CallOverrides): Promise<[boolean]>;

    dropItemMutations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { side: number; index: BigNumber }>;

    extraItemMutations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, ReceivedItemStructOutput] & {
        side: number;
        item: ReceivedItemStructOutput;
      }
    >;

    failureReasons(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number]>;

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

    itemAmountMutations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber] & {
        side: number;
        index: BigNumber;
        newAmount: BigNumber;
      }
    >;

    orderHashToValidateOrderDataHash(
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

    setFailureReason(
      orderHash: PromiseOrValue<BytesLike>,
      newFailureReason: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    validateOrder(
      zoneParameters: ZoneParametersStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  addDropItemMutation(
    side: PromiseOrValue<BigNumberish>,
    index: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addExtraItemMutation(
    side: PromiseOrValue<BigNumberish>,
    item: ReceivedItemStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addItemAmountMutation(
    side: PromiseOrValue<BigNumberish>,
    index: PromiseOrValue<BigNumberish>,
    newAmount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callCount(overrides?: CallOverrides): Promise<BigNumber>;

  called(overrides?: CallOverrides): Promise<boolean>;

  dropItemMutations(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<[number, BigNumber] & { side: number; index: BigNumber }>;

  extraItemMutations(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, ReceivedItemStructOutput] & {
      side: number;
      item: ReceivedItemStructOutput;
    }
  >;

  failureReasons(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

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

  itemAmountMutations(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, BigNumber] & {
      side: number;
      index: BigNumber;
      newAmount: BigNumber;
    }
  >;

  orderHashToValidateOrderDataHash(
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

  setFailureReason(
    orderHash: PromiseOrValue<BytesLike>,
    newFailureReason: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  validateOrder(
    zoneParameters: ZoneParametersStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addDropItemMutation(
      side: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addExtraItemMutation(
      side: PromiseOrValue<BigNumberish>,
      item: ReceivedItemStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    addItemAmountMutation(
      side: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      newAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    callCount(overrides?: CallOverrides): Promise<BigNumber>;

    called(overrides?: CallOverrides): Promise<boolean>;

    dropItemMutations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[number, BigNumber] & { side: number; index: BigNumber }>;

    extraItemMutations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, ReceivedItemStructOutput] & {
        side: number;
        item: ReceivedItemStructOutput;
      }
    >;

    failureReasons(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

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

    itemAmountMutations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, BigNumber] & {
        side: number;
        index: BigNumber;
        newAmount: BigNumber;
      }
    >;

    orderHashToValidateOrderDataHash(
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

    setFailureReason(
      orderHash: PromiseOrValue<BytesLike>,
      newFailureReason: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    validateOrder(
      zoneParameters: ZoneParametersStruct,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "ValidateOrderDataHash(bytes32)"(
      dataHash?: null
    ): ValidateOrderDataHashEventFilter;
    ValidateOrderDataHash(dataHash?: null): ValidateOrderDataHashEventFilter;
  };

  estimateGas: {
    addDropItemMutation(
      side: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addExtraItemMutation(
      side: PromiseOrValue<BigNumberish>,
      item: ReceivedItemStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addItemAmountMutation(
      side: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      newAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    callCount(overrides?: CallOverrides): Promise<BigNumber>;

    called(overrides?: CallOverrides): Promise<BigNumber>;

    dropItemMutations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    extraItemMutations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    failureReasons(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    generateOrder(
      arg0: PromiseOrValue<string>,
      a: SpentItemStruct[],
      b: SpentItemStruct[],
      c: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getSeaportMetadata(overrides?: CallOverrides): Promise<BigNumber>;

    itemAmountMutations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    orderHashToValidateOrderDataHash(
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

    setFailureReason(
      orderHash: PromiseOrValue<BytesLike>,
      newFailureReason: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validateOrder(
      zoneParameters: ZoneParametersStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addDropItemMutation(
      side: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addExtraItemMutation(
      side: PromiseOrValue<BigNumberish>,
      item: ReceivedItemStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addItemAmountMutation(
      side: PromiseOrValue<BigNumberish>,
      index: PromiseOrValue<BigNumberish>,
      newAmount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    callCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    called(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dropItemMutations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    extraItemMutations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    failureReasons(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
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

    itemAmountMutations(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    orderHashToValidateOrderDataHash(
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

    setFailureReason(
      orderHash: PromiseOrValue<BytesLike>,
      newFailureReason: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateOrder(
      zoneParameters: ZoneParametersStruct,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}