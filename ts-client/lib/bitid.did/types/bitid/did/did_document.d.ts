import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "bitid.did";
export interface DIDDocument {
    context: string;
    id: string;
    authentication: VerificationMethod[];
    service: Service[];
    created: string;
    updated: string;
}
export interface VerificationMethod {
    id: string;
    type: string;
    controller: string;
    /** Public key in PEM format */
    publicKeyPem: string;
}
export interface Service {
    id: string;
    type: string;
    serviceEndpoint: string;
}
export interface IndexedStoredDID {
    index: string;
    storedDID: DIDDocument | undefined;
}
export declare const DIDDocument: {
    encode(message: DIDDocument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): DIDDocument;
    fromJSON(object: any): DIDDocument;
    toJSON(message: DIDDocument): unknown;
    create<I extends {
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
        } & { [K in Exclude<keyof I["authentication"][number], keyof VerificationMethod>]: never; })[] & { [K_1 in Exclude<keyof I["authentication"], keyof {
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
        } & { [K_2 in Exclude<keyof I["service"][number], keyof Service>]: never; })[] & { [K_3 in Exclude<keyof I["service"], keyof {
            id?: string;
            type?: string;
            serviceEndpoint?: string;
        }[]>]: never; };
        created?: string;
        updated?: string;
    } & { [K_4 in Exclude<keyof I, keyof DIDDocument>]: never; }>(base?: I): DIDDocument;
    fromPartial<I_1 extends {
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
        } & { [K_5 in Exclude<keyof I_1["authentication"][number], keyof VerificationMethod>]: never; })[] & { [K_6 in Exclude<keyof I_1["authentication"], keyof {
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
        } & { [K_7 in Exclude<keyof I_1["service"][number], keyof Service>]: never; })[] & { [K_8 in Exclude<keyof I_1["service"], keyof {
            id?: string;
            type?: string;
            serviceEndpoint?: string;
        }[]>]: never; };
        created?: string;
        updated?: string;
    } & { [K_9 in Exclude<keyof I_1, keyof DIDDocument>]: never; }>(object: I_1): DIDDocument;
};
export declare const VerificationMethod: {
    encode(message: VerificationMethod, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): VerificationMethod;
    fromJSON(object: any): VerificationMethod;
    toJSON(message: VerificationMethod): unknown;
    create<I extends {
        id?: string;
        type?: string;
        controller?: string;
        publicKeyPem?: string;
    } & {
        id?: string;
        type?: string;
        controller?: string;
        publicKeyPem?: string;
    } & { [K in Exclude<keyof I, keyof VerificationMethod>]: never; }>(base?: I): VerificationMethod;
    fromPartial<I_1 extends {
        id?: string;
        type?: string;
        controller?: string;
        publicKeyPem?: string;
    } & {
        id?: string;
        type?: string;
        controller?: string;
        publicKeyPem?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof VerificationMethod>]: never; }>(object: I_1): VerificationMethod;
};
export declare const Service: {
    encode(message: Service, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): Service;
    fromJSON(object: any): Service;
    toJSON(message: Service): unknown;
    create<I extends {
        id?: string;
        type?: string;
        serviceEndpoint?: string;
    } & {
        id?: string;
        type?: string;
        serviceEndpoint?: string;
    } & { [K in Exclude<keyof I, keyof Service>]: never; }>(base?: I): Service;
    fromPartial<I_1 extends {
        id?: string;
        type?: string;
        serviceEndpoint?: string;
    } & {
        id?: string;
        type?: string;
        serviceEndpoint?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof Service>]: never; }>(object: I_1): Service;
};
export declare const IndexedStoredDID: {
    encode(message: IndexedStoredDID, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): IndexedStoredDID;
    fromJSON(object: any): IndexedStoredDID;
    toJSON(message: IndexedStoredDID): unknown;
    create<I extends {
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
            } & { [K in Exclude<keyof I["storedDID"]["authentication"][number], keyof VerificationMethod>]: never; })[] & { [K_1 in Exclude<keyof I["storedDID"]["authentication"], keyof {
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
            } & { [K_2 in Exclude<keyof I["storedDID"]["service"][number], keyof Service>]: never; })[] & { [K_3 in Exclude<keyof I["storedDID"]["service"], keyof {
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            }[]>]: never; };
            created?: string;
            updated?: string;
        } & { [K_4 in Exclude<keyof I["storedDID"], keyof DIDDocument>]: never; };
    } & { [K_5 in Exclude<keyof I, keyof IndexedStoredDID>]: never; }>(base?: I): IndexedStoredDID;
    fromPartial<I_1 extends {
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
            } & { [K_6 in Exclude<keyof I_1["storedDID"]["authentication"][number], keyof VerificationMethod>]: never; })[] & { [K_7 in Exclude<keyof I_1["storedDID"]["authentication"], keyof {
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
            } & { [K_8 in Exclude<keyof I_1["storedDID"]["service"][number], keyof Service>]: never; })[] & { [K_9 in Exclude<keyof I_1["storedDID"]["service"], keyof {
                id?: string;
                type?: string;
                serviceEndpoint?: string;
            }[]>]: never; };
            created?: string;
            updated?: string;
        } & { [K_10 in Exclude<keyof I_1["storedDID"], keyof DIDDocument>]: never; };
    } & { [K_11 in Exclude<keyof I_1, keyof IndexedStoredDID>]: never; }>(object: I_1): IndexedStoredDID;
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
