import _m0 from "protobufjs/minimal";
import { IndexedStoredDID } from "./did_document";
import { Params } from "./params";
export declare const protobufPackage = "bitid.did";
/** GenesisState defines the did module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params: Params | undefined;
    indexedStoredDID: IndexedStoredDID[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState;
    fromJSON(object: any): GenesisState;
    toJSON(message: GenesisState): unknown;
    create<I extends {
        params?: {};
        indexedStoredDID?: {
            index?: string;
            storedDID?: {
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
        }[];
    } & {
        params?: {} & {} & { [K in Exclude<keyof I["params"], never>]: never; };
        indexedStoredDID?: {
            index?: string;
            storedDID?: {
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
        }[] & ({
            index?: string;
            storedDID?: {
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
            index?: string;
            storedDID?: {
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
                } & { [K_1 in Exclude<keyof I["indexedStoredDID"][number]["storedDID"]["authentication"][number], keyof import("./did_document").VerificationMethod>]: never; })[] & { [K_2 in Exclude<keyof I["indexedStoredDID"][number]["storedDID"]["authentication"], keyof {
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
                } & { [K_3 in Exclude<keyof I["indexedStoredDID"][number]["storedDID"]["service"][number], keyof import("./did_document").Service>]: never; })[] & { [K_4 in Exclude<keyof I["indexedStoredDID"][number]["storedDID"]["service"], keyof {
                    id?: string;
                    type?: string;
                    serviceEndpoint?: string;
                }[]>]: never; };
                created?: string;
                updated?: string;
            } & { [K_5 in Exclude<keyof I["indexedStoredDID"][number]["storedDID"], keyof import("./did_document").DIDDocument>]: never; };
        } & { [K_6 in Exclude<keyof I["indexedStoredDID"][number], keyof IndexedStoredDID>]: never; })[] & { [K_7 in Exclude<keyof I["indexedStoredDID"], keyof {
            index?: string;
            storedDID?: {
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
        }[]>]: never; };
    } & { [K_8 in Exclude<keyof I, keyof GenesisState>]: never; }>(base?: I): GenesisState;
    fromPartial<I_1 extends {
        params?: {};
        indexedStoredDID?: {
            index?: string;
            storedDID?: {
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
        }[];
    } & {
        params?: {} & {} & { [K_9 in Exclude<keyof I_1["params"], never>]: never; };
        indexedStoredDID?: {
            index?: string;
            storedDID?: {
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
        }[] & ({
            index?: string;
            storedDID?: {
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
            index?: string;
            storedDID?: {
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
                } & { [K_10 in Exclude<keyof I_1["indexedStoredDID"][number]["storedDID"]["authentication"][number], keyof import("./did_document").VerificationMethod>]: never; })[] & { [K_11 in Exclude<keyof I_1["indexedStoredDID"][number]["storedDID"]["authentication"], keyof {
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
                } & { [K_12 in Exclude<keyof I_1["indexedStoredDID"][number]["storedDID"]["service"][number], keyof import("./did_document").Service>]: never; })[] & { [K_13 in Exclude<keyof I_1["indexedStoredDID"][number]["storedDID"]["service"], keyof {
                    id?: string;
                    type?: string;
                    serviceEndpoint?: string;
                }[]>]: never; };
                created?: string;
                updated?: string;
            } & { [K_14 in Exclude<keyof I_1["indexedStoredDID"][number]["storedDID"], keyof import("./did_document").DIDDocument>]: never; };
        } & { [K_15 in Exclude<keyof I_1["indexedStoredDID"][number], keyof IndexedStoredDID>]: never; })[] & { [K_16 in Exclude<keyof I_1["indexedStoredDID"], keyof {
            index?: string;
            storedDID?: {
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
        }[]>]: never; };
    } & { [K_17 in Exclude<keyof I_1, keyof GenesisState>]: never; }>(object: I_1): GenesisState;
};
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
