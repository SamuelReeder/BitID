import _m0 from "protobufjs/minimal";
export declare const protobufPackage = "bitid.did";
/** MsgDefineDIDDocument represents a request to create/update a DID document. */
export interface MsgDefineDIDDocument {
    creator: string;
    id: string;
    /** The DID document content */
    document: string;
}
/** Define any fields you want to include in the response */
export interface MsgDefineDIDDocumentResponse {
}
/** MsgRemoveDIDDocument represents a request to remove a DID document. */
export interface MsgRemoveDIDDocument {
    creator: string;
    id: string;
}
export interface MsgRemoveDIDDocumentResponse {
    /** Define any fields you want to include in the response */
    remover: string;
}
export declare const MsgDefineDIDDocument: {
    encode(message: MsgDefineDIDDocument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefineDIDDocument;
    fromJSON(object: any): MsgDefineDIDDocument;
    toJSON(message: MsgDefineDIDDocument): unknown;
    create<I extends {
        creator?: string;
        id?: string;
        document?: string;
    } & {
        creator?: string;
        id?: string;
        document?: string;
    } & { [K in Exclude<keyof I, keyof MsgDefineDIDDocument>]: never; }>(base?: I): MsgDefineDIDDocument;
    fromPartial<I_1 extends {
        creator?: string;
        id?: string;
        document?: string;
    } & {
        creator?: string;
        id?: string;
        document?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgDefineDIDDocument>]: never; }>(object: I_1): MsgDefineDIDDocument;
};
export declare const MsgDefineDIDDocumentResponse: {
    encode(_: MsgDefineDIDDocumentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgDefineDIDDocumentResponse;
    fromJSON(_: any): MsgDefineDIDDocumentResponse;
    toJSON(_: MsgDefineDIDDocumentResponse): unknown;
    create<I extends {} & {} & { [K in Exclude<keyof I, never>]: never; }>(base?: I): MsgDefineDIDDocumentResponse;
    fromPartial<I_1 extends {} & {} & { [K_1 in Exclude<keyof I_1, never>]: never; }>(_: I_1): MsgDefineDIDDocumentResponse;
};
export declare const MsgRemoveDIDDocument: {
    encode(message: MsgRemoveDIDDocument, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveDIDDocument;
    fromJSON(object: any): MsgRemoveDIDDocument;
    toJSON(message: MsgRemoveDIDDocument): unknown;
    create<I extends {
        creator?: string;
        id?: string;
    } & {
        creator?: string;
        id?: string;
    } & { [K in Exclude<keyof I, keyof MsgRemoveDIDDocument>]: never; }>(base?: I): MsgRemoveDIDDocument;
    fromPartial<I_1 extends {
        creator?: string;
        id?: string;
    } & {
        creator?: string;
        id?: string;
    } & { [K_1 in Exclude<keyof I_1, keyof MsgRemoveDIDDocument>]: never; }>(object: I_1): MsgRemoveDIDDocument;
};
export declare const MsgRemoveDIDDocumentResponse: {
    encode(message: MsgRemoveDIDDocumentResponse, writer?: _m0.Writer): _m0.Writer;
    decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveDIDDocumentResponse;
    fromJSON(object: any): MsgRemoveDIDDocumentResponse;
    toJSON(message: MsgRemoveDIDDocumentResponse): unknown;
    create<I extends {
        remover?: string;
    } & {
        remover?: string;
    } & { [K in Exclude<keyof I, "remover">]: never; }>(base?: I): MsgRemoveDIDDocumentResponse;
    fromPartial<I_1 extends {
        remover?: string;
    } & {
        remover?: string;
    } & { [K_1 in Exclude<keyof I_1, "remover">]: never; }>(object: I_1): MsgRemoveDIDDocumentResponse;
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
