import _m0 from "protobufjs/minimal";
import { DIDDocument } from "./did_document";
import { Params } from "./params";
export declare const protobufPackage = "bitid.did";
export interface QueryGetDIDRequest {
    index: string;
}
export interface QueryGetDIDResponse {
    DID: DIDDocument | undefined;
}
/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}
/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
    /** params holds all the parameters of this module. */
    params: Params | undefined;
}
export declare const QueryGetDIDRequest: {
    encode(message: QueryGetDIDRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDIDRequest;
    fromJSON(object: any): QueryGetDIDRequest;
    toJSON(message: QueryGetDIDRequest): unknown;
    create<I extends {
        index?: string;
    } & {
        index?: string;
    } & { [K in Exclude<keyof I, "index">]: never; }>(base?: I): QueryGetDIDRequest;
    fromPartial<I_1 extends {
        index?: string;
    } & {
        index?: string;
    } & { [K_1 in Exclude<keyof I_1, "index">]: never; }>(object: I_1): QueryGetDIDRequest;
};
export declare const QueryGetDIDResponse: {
    encode(message: QueryGetDIDResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryGetDIDResponse;
    fromJSON(object: any): QueryGetDIDResponse;
    toJSON(message: QueryGetDIDResponse): unknown;
    create<I extends {
        DID?: {
            context?: string;
            id?: string;
            authentication?: {
                id?: string;
                type?: string;
                controller?: string;
                publicKeyPem?: string;
            }[];
            service?: {
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            }[];
            created?: string;
            updated?: string;
        };
    } & {
        DID?: {
            context?: string;
            id?: string;
            authentication?: {
                id?: string;
                type?: string;
                controller?: string;
                publicKeyPem?: string;
            }[];
            service?: {
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            }[];
            created?: string;
            updated?: string;
        } & {
            context?: string;
            id?: string;
            authentication?: {
                id?: string;
                type?: string;
                controller?: string;
                publicKeyPem?: string;
            }[] & ({
                id?: string;
                type?: string;
                controller?: string;
                publicKeyPem?: string;
            } & {
                id?: string;
                type?: string;
                controller?: string;
                publicKeyPem?: string;
            } & { [K in Exclude<keyof I["DID"]["authentication"][number], keyof import("./did_document").VerificationMethod>]: never; })[] & { [K_1 in Exclude<keyof I["DID"]["authentication"], keyof {
                id?: string;
                type?: string;
                controller?: string;
                publicKeyPem?: string;
            }[]>]: never; };
            service?: {
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            }[] & ({
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            } & {
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            } & { [K_2 in Exclude<keyof I["DID"]["service"][number], keyof import("./did_document").Service>]: never; })[] & { [K_3 in Exclude<keyof I["DID"]["service"], keyof {
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            }[]>]: never; };
            created?: string;
            updated?: string;
        } & { [K_4 in Exclude<keyof I["DID"], keyof DIDDocument>]: never; };
    } & { [K_5 in Exclude<keyof I, "DID">]: never; }>(base?: I): QueryGetDIDResponse;
    fromPartial<I_1 extends {
        DID?: {
            context?: string;
            id?: string;
            authentication?: {
                id?: string;
                type?: string;
                controller?: string;
                publicKeyPem?: string;
            }[];
            service?: {
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            }[];
            created?: string;
            updated?: string;
        };
    } & {
        DID?: {
            context?: string;
            id?: string;
            authentication?: {
                id?: string;
                type?: string;
                controller?: string;
                publicKeyPem?: string;
            }[];
            service?: {
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            }[];
            created?: string;
            updated?: string;
        } & {
            context?: string;
            id?: string;
            authentication?: {
                id?: string;
                type?: string;
                controller?: string;
                publicKeyPem?: string;
            }[] & ({
                id?: string;
                type?: string;
                controller?: string;
                publicKeyPem?: string;
            } & {
                id?: string;
                type?: string;
                controller?: string;
                publicKeyPem?: string;
            } & { [K_6 in Exclude<keyof I_1["DID"]["authentication"][number], keyof import("./did_document").VerificationMethod>]: never; })[] & { [K_7 in Exclude<keyof I_1["DID"]["authentication"], keyof {
                id?: string;
                type?: string;
                controller?: string;
                publicKeyPem?: string;
            }[]>]: never; };
            service?: {
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            }[] & ({
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            } & {
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            } & { [K_8 in Exclude<keyof I_1["DID"]["service"][number], keyof import("./did_document").Service>]: never; })[] & { [K_9 in Exclude<keyof I_1["DID"]["service"], keyof {
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            }[]>]: never; };
            created?: string;
            updated?: string;
        } & { [K_10 in Exclude<keyof I_1["DID"], keyof DIDDocument>]: never; };
    } & { [K_11 in Exclude<keyof I_1, "DID">]: never; }>(object: I_1): QueryGetDIDResponse;
};
export declare const QueryParamsRequest: {
    encode(_: QueryParamsRequest, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest;
    fromJSON(_: any): QueryParamsRequest;
    toJSON(_: QueryParamsRequest): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): QueryParamsRequest;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): QueryParamsRequest;
};
export declare const QueryParamsResponse: {
    encode(message: QueryParamsResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse;
    fromJSON(object: any): QueryParamsResponse;
    toJSON(message: QueryParamsResponse): unknown;
    create<I extends {
        params?: {};
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
    } & { [K_1 in Exclude<keyof I, "params">]: never; }>(base?: I): QueryParamsResponse;
    fromPartial<I_1 extends {
        params?: {};
    } & {
        params?: {} & {} & { [K_2 in Exclude<keyof I_1["params"], never>]: never; };
    } & { [K_3 in Exclude<keyof I_1, "params">]: never; }>(object: I_1): QueryParamsResponse;
};
/** Query defines the gRPC querier service. */
export interface Query {
    /** Parameters queries the parameters of the module. */
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    /**
     * option (cosmos.query.v1.module_query_safe) = true;
     * option (google.api.http).get =
     *   "/SamuelReeder/bitid/did/{index}";
     */
    GetDID(request: QueryGetDIDRequest): Promise<QueryGetDIDResponse>;
}
export declare const QueryServiceName = "bitid.did.Query";
export declare class QueryClientImpl implements Query {
    private readonly rpc;
    private readonly service;
    constructor(rpc: Rpc, opts?: {
        service?: string;
    });
    Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
    GetDID(request: QueryGetDIDRequest): Promise<QueryGetDIDResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P : P & {
    [K in keyof P]: Exact<P[K], I[K]>;
} & {
    [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
};
export {};
