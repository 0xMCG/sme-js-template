import type { BaseContract, BigNumber, BigNumberish, BytesLike, CallOverrides, ContractTransaction, Overrides, PayableOverrides, PopulatedTransaction, Signer, utils } from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from "../common";
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
export type AdvancedOrderStruct = {
    parameters: OrderParametersStruct;
    numerator: PromiseOrValue<BigNumberish>;
    denominator: PromiseOrValue<BigNumberish>;
    signature: PromiseOrValue<BytesLike>;
    extraData: PromiseOrValue<BytesLike>;
};
export type AdvancedOrderStructOutput = [
    OrderParametersStructOutput,
    BigNumber,
    BigNumber,
    string,
    string
] & {
    parameters: OrderParametersStructOutput;
    numerator: BigNumber;
    denominator: BigNumber;
    signature: string;
    extraData: string;
};
export type CriteriaResolverStruct = {
    orderIndex: PromiseOrValue<BigNumberish>;
    side: PromiseOrValue<BigNumberish>;
    index: PromiseOrValue<BigNumberish>;
    identifier: PromiseOrValue<BigNumberish>;
    criteriaProof: PromiseOrValue<BytesLike>[];
};
export type CriteriaResolverStructOutput = [
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    string[]
] & {
    orderIndex: BigNumber;
    side: number;
    index: BigNumber;
    identifier: BigNumber;
    criteriaProof: string[];
};
export type AdditionalRecipientStruct = {
    amount: PromiseOrValue<BigNumberish>;
    recipient: PromiseOrValue<string>;
};
export type AdditionalRecipientStructOutput = [BigNumber, string] & {
    amount: BigNumber;
    recipient: string;
};
export type BasicOrderParametersStruct = {
    considerationToken: PromiseOrValue<string>;
    considerationIdentifier: PromiseOrValue<BigNumberish>;
    considerationAmount: PromiseOrValue<BigNumberish>;
    offerer: PromiseOrValue<string>;
    zone: PromiseOrValue<string>;
    offerToken: PromiseOrValue<string>;
    offerIdentifier: PromiseOrValue<BigNumberish>;
    offerAmount: PromiseOrValue<BigNumberish>;
    basicOrderType: PromiseOrValue<BigNumberish>;
    startTime: PromiseOrValue<BigNumberish>;
    endTime: PromiseOrValue<BigNumberish>;
    zoneHash: PromiseOrValue<BytesLike>;
    salt: PromiseOrValue<BigNumberish>;
    offererConduitKey: PromiseOrValue<BytesLike>;
    fulfillerConduitKey: PromiseOrValue<BytesLike>;
    totalOriginalAdditionalRecipients: PromiseOrValue<BigNumberish>;
    additionalRecipients: AdditionalRecipientStruct[];
    signature: PromiseOrValue<BytesLike>;
};
export type BasicOrderParametersStructOutput = [
    string,
    BigNumber,
    BigNumber,
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    BigNumber,
    AdditionalRecipientStructOutput[],
    string
] & {
    considerationToken: string;
    considerationIdentifier: BigNumber;
    considerationAmount: BigNumber;
    offerer: string;
    zone: string;
    offerToken: string;
    offerIdentifier: BigNumber;
    offerAmount: BigNumber;
    basicOrderType: number;
    startTime: BigNumber;
    endTime: BigNumber;
    zoneHash: string;
    salt: BigNumber;
    offererConduitKey: string;
    fulfillerConduitKey: string;
    totalOriginalAdditionalRecipients: BigNumber;
    additionalRecipients: AdditionalRecipientStructOutput[];
    signature: string;
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
    orderIndex: number;
    itemIndex: number;
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
export type ExecutionStruct = {
    item: ReceivedItemStruct;
    offerer: PromiseOrValue<string>;
    conduitKey: PromiseOrValue<BytesLike>;
};
export type ExecutionStructOutput = [
    ReceivedItemStructOutput,
    string,
    string
] & {
    item: ReceivedItemStructOutput;
    offerer: string;
    conduitKey: string;
};
export interface SeaportInterface extends utils.Interface {
    functions: {
        "cancel((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256)[])": FunctionFragment;
        "fulfillAdvancedOrder(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),uint120,uint120,bytes,bytes),(uint256,uint8,uint256,uint256,bytes32[])[],bytes32,address)": FunctionFragment;
        "fulfillBasicOrder((address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes))": FunctionFragment;
        "fulfillBasicOrder_efficient_6GL6yc((address,uint256,uint256,address,address,address,uint256,uint256,uint8,uint256,uint256,bytes32,uint256,bytes32,bytes32,uint256,(uint256,address)[],bytes))": FunctionFragment;
        "fulfillOrder(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes),bytes32)": FunctionFragment;
        "getContractOffererNonce(address)": FunctionFragment;
        "getCounter(address)": FunctionFragment;
        "getOrderHash((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256))": FunctionFragment;
        "getOrderStatus(bytes32)": FunctionFragment;
        "incrementCounter()": FunctionFragment;
        "information()": FunctionFragment;
        "matchOrders(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[],((uint256,uint256)[],(uint256,uint256)[])[])": FunctionFragment;
        "matchOrdersWithLucky(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[],((uint256,uint256)[],(uint256,uint256)[])[],uint256,uint256)": FunctionFragment;
        "name()": FunctionFragment;
        "validate(((address,address,(uint8,address,uint256,uint256,uint256)[],(uint8,address,uint256,uint256,uint256,address)[],uint8,uint256,uint256,bytes32,uint256,bytes32,uint256),bytes)[])": FunctionFragment;
    };
    getFunction(nameOrSignatureOrTopic: "cancel" | "fulfillAdvancedOrder" | "fulfillBasicOrder" | "fulfillBasicOrder_efficient_6GL6yc" | "fulfillOrder" | "getContractOffererNonce" | "getCounter" | "getOrderHash" | "getOrderStatus" | "incrementCounter" | "information" | "matchOrders" | "matchOrdersWithLucky" | "name" | "validate"): FunctionFragment;
    encodeFunctionData(functionFragment: "cancel", values: [OrderComponentsStruct[]]): string;
    encodeFunctionData(functionFragment: "fulfillAdvancedOrder", values: [
        AdvancedOrderStruct,
        CriteriaResolverStruct[],
        PromiseOrValue<BytesLike>,
        PromiseOrValue<string>
    ]): string;
    encodeFunctionData(functionFragment: "fulfillBasicOrder", values: [BasicOrderParametersStruct]): string;
    encodeFunctionData(functionFragment: "fulfillBasicOrder_efficient_6GL6yc", values: [BasicOrderParametersStruct]): string;
    encodeFunctionData(functionFragment: "fulfillOrder", values: [OrderStruct, PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "getContractOffererNonce", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getCounter", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "getOrderHash", values: [OrderComponentsStruct]): string;
    encodeFunctionData(functionFragment: "getOrderStatus", values: [PromiseOrValue<BytesLike>]): string;
    encodeFunctionData(functionFragment: "incrementCounter", values?: undefined): string;
    encodeFunctionData(functionFragment: "information", values?: undefined): string;
    encodeFunctionData(functionFragment: "matchOrders", values: [OrderStruct[], FulfillmentStruct[]]): string;
    encodeFunctionData(functionFragment: "matchOrdersWithLucky", values: [
        OrderStruct[],
        FulfillmentStruct[],
        PromiseOrValue<BigNumberish>,
        PromiseOrValue<BigNumberish>
    ]): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "validate", values: [OrderStruct[]]): string;
    decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fulfillAdvancedOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fulfillBasicOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fulfillBasicOrder_efficient_6GL6yc", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "fulfillOrder", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getContractOffererNonce", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getCounter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOrderHash", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "getOrderStatus", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "incrementCounter", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "information", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "matchOrders", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "matchOrdersWithLucky", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "validate", data: BytesLike): Result;
    events: {
        "CounterIncremented(uint256,address)": EventFragment;
        "OrderCancelled(bytes32,address,address)": EventFragment;
        "OrderFulfilled(bytes32,address,address,address,tuple[],tuple[])": EventFragment;
        "OrderValidated(bytes32,tuple)": EventFragment;
        "OrdersMatched(bytes32[])": EventFragment;
    };
    getEvent(nameOrSignatureOrTopic: "CounterIncremented"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderCancelled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderFulfilled"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrderValidated"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OrdersMatched"): EventFragment;
}
export interface CounterIncrementedEventObject {
    newCounter: BigNumber;
    offerer: string;
}
export type CounterIncrementedEvent = TypedEvent<[
    BigNumber,
    string
], CounterIncrementedEventObject>;
export type CounterIncrementedEventFilter = TypedEventFilter<CounterIncrementedEvent>;
export interface OrderCancelledEventObject {
    orderHash: string;
    offerer: string;
    zone: string;
}
export type OrderCancelledEvent = TypedEvent<[
    string,
    string,
    string
], OrderCancelledEventObject>;
export type OrderCancelledEventFilter = TypedEventFilter<OrderCancelledEvent>;
export interface OrderFulfilledEventObject {
    orderHash: string;
    offerer: string;
    zone: string;
    recipient: string;
    offer: SpentItemStructOutput[];
    consideration: ReceivedItemStructOutput[];
}
export type OrderFulfilledEvent = TypedEvent<[
    string,
    string,
    string,
    string,
    SpentItemStructOutput[],
    ReceivedItemStructOutput[]
], OrderFulfilledEventObject>;
export type OrderFulfilledEventFilter = TypedEventFilter<OrderFulfilledEvent>;
export interface OrderValidatedEventObject {
    orderHash: string;
    orderParameters: OrderParametersStructOutput;
}
export type OrderValidatedEvent = TypedEvent<[
    string,
    OrderParametersStructOutput
], OrderValidatedEventObject>;
export type OrderValidatedEventFilter = TypedEventFilter<OrderValidatedEvent>;
export interface OrdersMatchedEventObject {
    orderHashes: string[];
}
export type OrdersMatchedEvent = TypedEvent<[
    string[]
], OrdersMatchedEventObject>;
export type OrdersMatchedEventFilter = TypedEventFilter<OrdersMatchedEvent>;
export interface Seaport extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;
    interface: SeaportInterface;
    queryFilter<TEvent extends TypedEvent>(event: TypedEventFilter<TEvent>, fromBlockOrBlockhash?: string | number | undefined, toBlock?: string | number | undefined): Promise<Array<TEvent>>;
    listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;
    functions: {
        cancel(orders: OrderComponentsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fulfillAdvancedOrder(arg0: AdvancedOrderStruct, arg1: CriteriaResolverStruct[], fulfillerConduitKey: PromiseOrValue<BytesLike>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fulfillBasicOrder(parameters: BasicOrderParametersStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fulfillBasicOrder_efficient_6GL6yc(parameters: BasicOrderParametersStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        fulfillOrder(arg0: OrderStruct, fulfillerConduitKey: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        getContractOffererNonce(contractOfferer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            nonce: BigNumber;
        }>;
        getCounter(offerer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber] & {
            counter: BigNumber;
        }>;
        getOrderHash(arg0: OrderComponentsStruct, overrides?: CallOverrides): Promise<[string] & {
            orderHash: string;
        }>;
        getOrderStatus(orderHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            isValidated: boolean;
            isCancelled: boolean;
            totalFilled: BigNumber;
            totalSize: BigNumber;
        }>;
        incrementCounter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        information(overrides?: CallOverrides): Promise<[
            string,
            string,
            string
        ] & {
            version: string;
            domainSeparator: string;
            conduitController: string;
        }>;
        matchOrders(arg0: OrderStruct[], arg1: FulfillmentStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        matchOrdersWithLucky(arg0: OrderStruct[], arg1: FulfillmentStruct[], numerator: PromiseOrValue<BigNumberish>, denominator: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
        name(overrides?: CallOverrides): Promise<[string]>;
        validate(arg0: OrderStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<ContractTransaction>;
    };
    cancel(orders: OrderComponentsStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fulfillAdvancedOrder(arg0: AdvancedOrderStruct, arg1: CriteriaResolverStruct[], fulfillerConduitKey: PromiseOrValue<BytesLike>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fulfillBasicOrder(parameters: BasicOrderParametersStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fulfillBasicOrder_efficient_6GL6yc(parameters: BasicOrderParametersStruct, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    fulfillOrder(arg0: OrderStruct, fulfillerConduitKey: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    getContractOffererNonce(contractOfferer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getCounter(offerer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    getOrderHash(arg0: OrderComponentsStruct, overrides?: CallOverrides): Promise<string>;
    getOrderStatus(orderHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
        boolean,
        boolean,
        BigNumber,
        BigNumber
    ] & {
        isValidated: boolean;
        isCancelled: boolean;
        totalFilled: BigNumber;
        totalSize: BigNumber;
    }>;
    incrementCounter(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    information(overrides?: CallOverrides): Promise<[
        string,
        string,
        string
    ] & {
        version: string;
        domainSeparator: string;
        conduitController: string;
    }>;
    matchOrders(arg0: OrderStruct[], arg1: FulfillmentStruct[], overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    matchOrdersWithLucky(arg0: OrderStruct[], arg1: FulfillmentStruct[], numerator: PromiseOrValue<BigNumberish>, denominator: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    name(overrides?: CallOverrides): Promise<string>;
    validate(arg0: OrderStruct[], overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<ContractTransaction>;
    callStatic: {
        cancel(orders: OrderComponentsStruct[], overrides?: CallOverrides): Promise<boolean>;
        fulfillAdvancedOrder(arg0: AdvancedOrderStruct, arg1: CriteriaResolverStruct[], fulfillerConduitKey: PromiseOrValue<BytesLike>, recipient: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
        fulfillBasicOrder(parameters: BasicOrderParametersStruct, overrides?: CallOverrides): Promise<boolean>;
        fulfillBasicOrder_efficient_6GL6yc(parameters: BasicOrderParametersStruct, overrides?: CallOverrides): Promise<boolean>;
        fulfillOrder(arg0: OrderStruct, fulfillerConduitKey: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<boolean>;
        getContractOffererNonce(contractOfferer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getCounter(offerer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getOrderHash(arg0: OrderComponentsStruct, overrides?: CallOverrides): Promise<string>;
        getOrderStatus(orderHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<[
            boolean,
            boolean,
            BigNumber,
            BigNumber
        ] & {
            isValidated: boolean;
            isCancelled: boolean;
            totalFilled: BigNumber;
            totalSize: BigNumber;
        }>;
        incrementCounter(overrides?: CallOverrides): Promise<BigNumber>;
        information(overrides?: CallOverrides): Promise<[
            string,
            string,
            string
        ] & {
            version: string;
            domainSeparator: string;
            conduitController: string;
        }>;
        matchOrders(arg0: OrderStruct[], arg1: FulfillmentStruct[], overrides?: CallOverrides): Promise<ExecutionStructOutput[]>;
        matchOrdersWithLucky(arg0: OrderStruct[], arg1: FulfillmentStruct[], numerator: PromiseOrValue<BigNumberish>, denominator: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<ExecutionStructOutput[]>;
        name(overrides?: CallOverrides): Promise<string>;
        validate(arg0: OrderStruct[], overrides?: CallOverrides): Promise<boolean>;
    };
    filters: {
        "CounterIncremented(uint256,address)"(newCounter?: null, offerer?: PromiseOrValue<string> | null): CounterIncrementedEventFilter;
        CounterIncremented(newCounter?: null, offerer?: PromiseOrValue<string> | null): CounterIncrementedEventFilter;
        "OrderCancelled(bytes32,address,address)"(orderHash?: null, offerer?: PromiseOrValue<string> | null, zone?: PromiseOrValue<string> | null): OrderCancelledEventFilter;
        OrderCancelled(orderHash?: null, offerer?: PromiseOrValue<string> | null, zone?: PromiseOrValue<string> | null): OrderCancelledEventFilter;
        "OrderFulfilled(bytes32,address,address,address,tuple[],tuple[])"(orderHash?: null, offerer?: PromiseOrValue<string> | null, zone?: PromiseOrValue<string> | null, recipient?: null, offer?: null, consideration?: null): OrderFulfilledEventFilter;
        OrderFulfilled(orderHash?: null, offerer?: PromiseOrValue<string> | null, zone?: PromiseOrValue<string> | null, recipient?: null, offer?: null, consideration?: null): OrderFulfilledEventFilter;
        "OrderValidated(bytes32,tuple)"(orderHash?: null, orderParameters?: null): OrderValidatedEventFilter;
        OrderValidated(orderHash?: null, orderParameters?: null): OrderValidatedEventFilter;
        "OrdersMatched(bytes32[])"(orderHashes?: null): OrdersMatchedEventFilter;
        OrdersMatched(orderHashes?: null): OrdersMatchedEventFilter;
    };
    estimateGas: {
        cancel(orders: OrderComponentsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fulfillAdvancedOrder(arg0: AdvancedOrderStruct, arg1: CriteriaResolverStruct[], fulfillerConduitKey: PromiseOrValue<BytesLike>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fulfillBasicOrder(parameters: BasicOrderParametersStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fulfillBasicOrder_efficient_6GL6yc(parameters: BasicOrderParametersStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        fulfillOrder(arg0: OrderStruct, fulfillerConduitKey: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        getContractOffererNonce(contractOfferer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getCounter(offerer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
        getOrderHash(arg0: OrderComponentsStruct, overrides?: CallOverrides): Promise<BigNumber>;
        getOrderStatus(orderHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<BigNumber>;
        incrementCounter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        information(overrides?: CallOverrides): Promise<BigNumber>;
        matchOrders(arg0: OrderStruct[], arg1: FulfillmentStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        matchOrdersWithLucky(arg0: OrderStruct[], arg1: FulfillmentStruct[], numerator: PromiseOrValue<BigNumberish>, denominator: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
        name(overrides?: CallOverrides): Promise<BigNumber>;
        validate(arg0: OrderStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<BigNumber>;
    };
    populateTransaction: {
        cancel(orders: OrderComponentsStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fulfillAdvancedOrder(arg0: AdvancedOrderStruct, arg1: CriteriaResolverStruct[], fulfillerConduitKey: PromiseOrValue<BytesLike>, recipient: PromiseOrValue<string>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fulfillBasicOrder(parameters: BasicOrderParametersStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fulfillBasicOrder_efficient_6GL6yc(parameters: BasicOrderParametersStruct, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        fulfillOrder(arg0: OrderStruct, fulfillerConduitKey: PromiseOrValue<BytesLike>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        getContractOffererNonce(contractOfferer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getCounter(offerer: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOrderHash(arg0: OrderComponentsStruct, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        getOrderStatus(orderHash: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<PopulatedTransaction>;
        incrementCounter(overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        information(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        matchOrders(arg0: OrderStruct[], arg1: FulfillmentStruct[], overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        matchOrdersWithLucky(arg0: OrderStruct[], arg1: FulfillmentStruct[], numerator: PromiseOrValue<BigNumberish>, denominator: PromiseOrValue<BigNumberish>, overrides?: PayableOverrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
        validate(arg0: OrderStruct[], overrides?: Overrides & {
            from?: PromiseOrValue<string>;
        }): Promise<PopulatedTransaction>;
    };
}
