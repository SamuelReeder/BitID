import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { DIDDocument } from "./types/bitid/did/did_document";
import { VerificationMethod } from "./types/bitid/did/did_document";
import { MsgDefineDIDDocument } from "./types/bitid/did/tx";
import { QueryGetDIDRequest } from "./types/bitid/did/query";
import { QueryParamsResponse } from "./types/bitid/did/query";
import { Service } from "./types/bitid/did/did_document";
import { MsgDefineDIDDocumentResponse } from "./types/bitid/did/tx";
import { Params } from "./types/bitid/did/params";
import { QueryParamsRequest } from "./types/bitid/did/query";
import { MsgUpdateParamsResponse } from "./types/bitid/did/tx";
import { IndexedStoredDID } from "./types/bitid/did/did_document";
import { QueryGetDIDResponse } from "./types/bitid/did/query";
import { GenesisState } from "./types/bitid/did/genesis";
import { MsgUpdateParams } from "./types/bitid/did/tx";
export { DIDDocument, VerificationMethod, MsgDefineDIDDocument, QueryGetDIDRequest, QueryParamsResponse, Service, MsgDefineDIDDocumentResponse, Params, QueryParamsRequest, MsgUpdateParamsResponse, IndexedStoredDID, QueryGetDIDResponse, GenesisState, MsgUpdateParams };
type sendDIDDocumentParams = {
    value: DIDDocument;
    fee?: StdFee;
    memo?: string;
};
type sendVerificationMethodParams = {
    value: VerificationMethod;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDefineDIDDocumentParams = {
    value: MsgDefineDIDDocument;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetDIDRequestParams = {
    value: QueryGetDIDRequest;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendServiceParams = {
    value: Service;
    fee?: StdFee;
    memo?: string;
};
type sendMsgDefineDIDDocumentResponseParams = {
    value: MsgDefineDIDDocumentResponse;
    fee?: StdFee;
    memo?: string;
};
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendQueryParamsRequestParams = {
    value: QueryParamsRequest;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendIndexedStoredDIDParams = {
    value: IndexedStoredDID;
    fee?: StdFee;
    memo?: string;
};
type sendQueryGetDIDResponseParams = {
    value: QueryGetDIDResponse;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type diddocumentParams = {
    value: DIDDocument;
};
type verificationMethodParams = {
    value: VerificationMethod;
};
type msgDefineDiddocumentParams = {
    value: MsgDefineDIDDocument;
};
type queryGetDidrequestParams = {
    value: QueryGetDIDRequest;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type serviceParams = {
    value: Service;
};
type msgDefineDiddocumentResponseParams = {
    value: MsgDefineDIDDocumentResponse;
};
type paramsParams = {
    value: Params;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type indexedStoredDidParams = {
    value: IndexedStoredDID;
};
type queryGetDidresponseParams = {
    value: QueryGetDIDResponse;
};
type genesisStateParams = {
    value: GenesisState;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendDIDDocument({ value, fee, memo }: sendDIDDocumentParams): Promise<DeliverTxResponse>;
    sendVerificationMethod({ value, fee, memo }: sendVerificationMethodParams): Promise<DeliverTxResponse>;
    sendMsgDefineDIDDocument({ value, fee, memo }: sendMsgDefineDIDDocumentParams): Promise<DeliverTxResponse>;
    sendQueryGetDIDRequest({ value, fee, memo }: sendQueryGetDIDRequestParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendService({ value, fee, memo }: sendServiceParams): Promise<DeliverTxResponse>;
    sendMsgDefineDIDDocumentResponse({ value, fee, memo }: sendMsgDefineDIDDocumentResponseParams): Promise<DeliverTxResponse>;
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendIndexedStoredDID({ value, fee, memo }: sendIndexedStoredDIDParams): Promise<DeliverTxResponse>;
    sendQueryGetDIDResponse({ value, fee, memo }: sendQueryGetDIDResponseParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    diddocument({ value }: diddocumentParams): EncodeObject;
    verificationMethod({ value }: verificationMethodParams): EncodeObject;
    msgDefineDiddocument({ value }: msgDefineDiddocumentParams): EncodeObject;
    queryGetDidrequest({ value }: queryGetDidrequestParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    service({ value }: serviceParams): EncodeObject;
    msgDefineDiddocumentResponse({ value }: msgDefineDiddocumentResponseParams): EncodeObject;
    params({ value }: paramsParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    indexedStoredDid({ value }: indexedStoredDidParams): EncodeObject;
    queryGetDidresponse({ value }: queryGetDidresponseParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
};
interface QueryClientOptions {
    addr: string;
}
export declare const queryClient: ({ addr: addr }?: QueryClientOptions) => Api<unknown>;
declare class SDKModule {
    query: ReturnType<typeof queryClient>;
    tx: ReturnType<typeof txClient>;
    structure: Record<string, unknown>;
    registry: Array<[string, GeneratedType]>;
    constructor(client: IgniteClient);
    updateTX(client: IgniteClient): void;
}
declare const IgntModule: (test: IgniteClient) => {
    module: {
        BitidDid: SDKModule;
    };
    registry: [string, GeneratedType][];
};
export default IgntModule;
