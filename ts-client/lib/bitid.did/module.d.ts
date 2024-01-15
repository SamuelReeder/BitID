import { DeliverTxResponse, StdFee } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { IgniteClient } from "../client";
import { Api } from "./rest";
import { Params } from "./types/bitid/did/params";
import { DIDDocument } from "./types/bitid/did/did_document";
import { QueryParamsRequest } from "./types/bitid/did/query";
import { MsgUpdateParamsResponse } from "./types/bitid/did/tx";
import { QueryParamsResponse } from "./types/bitid/did/query";
import { VerificationMethod } from "./types/bitid/did/did_document";
import { Service } from "./types/bitid/did/did_document";
import { MsgUpdateParams } from "./types/bitid/did/tx";
import { GenesisState } from "./types/bitid/did/genesis";
export { Params, DIDDocument, QueryParamsRequest, MsgUpdateParamsResponse, QueryParamsResponse, VerificationMethod, Service, MsgUpdateParams, GenesisState };
type sendParamsParams = {
    value: Params;
    fee?: StdFee;
    memo?: string;
};
type sendDIDDocumentParams = {
    value: DIDDocument;
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
type sendQueryParamsResponseParams = {
    value: QueryParamsResponse;
    fee?: StdFee;
    memo?: string;
};
type sendVerificationMethodParams = {
    value: VerificationMethod;
    fee?: StdFee;
    memo?: string;
};
type sendServiceParams = {
    value: Service;
    fee?: StdFee;
    memo?: string;
};
type sendMsgUpdateParamsParams = {
    value: MsgUpdateParams;
    fee?: StdFee;
    memo?: string;
};
type sendGenesisStateParams = {
    value: GenesisState;
    fee?: StdFee;
    memo?: string;
};
type paramsParams = {
    value: Params;
};
type diddocumentParams = {
    value: DIDDocument;
};
type queryParamsRequestParams = {
    value: QueryParamsRequest;
};
type msgUpdateParamsResponseParams = {
    value: MsgUpdateParamsResponse;
};
type queryParamsResponseParams = {
    value: QueryParamsResponse;
};
type verificationMethodParams = {
    value: VerificationMethod;
};
type serviceParams = {
    value: Service;
};
type msgUpdateParamsParams = {
    value: MsgUpdateParams;
};
type genesisStateParams = {
    value: GenesisState;
};
export declare const registry: Registry;
interface TxClientOptions {
    addr: string;
    prefix: string;
    signer?: OfflineSigner;
}
export declare const txClient: ({ signer, prefix, addr }?: TxClientOptions) => {
    sendParams({ value, fee, memo }: sendParamsParams): Promise<DeliverTxResponse>;
    sendDIDDocument({ value, fee, memo }: sendDIDDocumentParams): Promise<DeliverTxResponse>;
    sendQueryParamsRequest({ value, fee, memo }: sendQueryParamsRequestParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParamsResponse({ value, fee, memo }: sendMsgUpdateParamsResponseParams): Promise<DeliverTxResponse>;
    sendQueryParamsResponse({ value, fee, memo }: sendQueryParamsResponseParams): Promise<DeliverTxResponse>;
    sendVerificationMethod({ value, fee, memo }: sendVerificationMethodParams): Promise<DeliverTxResponse>;
    sendService({ value, fee, memo }: sendServiceParams): Promise<DeliverTxResponse>;
    sendMsgUpdateParams({ value, fee, memo }: sendMsgUpdateParamsParams): Promise<DeliverTxResponse>;
    sendGenesisState({ value, fee, memo }: sendGenesisStateParams): Promise<DeliverTxResponse>;
    params({ value }: paramsParams): EncodeObject;
    diddocument({ value }: diddocumentParams): EncodeObject;
    queryParamsRequest({ value }: queryParamsRequestParams): EncodeObject;
    msgUpdateParamsResponse({ value }: msgUpdateParamsResponseParams): EncodeObject;
    queryParamsResponse({ value }: queryParamsResponseParams): EncodeObject;
    verificationMethod({ value }: verificationMethodParams): EncodeObject;
    service({ value }: serviceParams): EncodeObject;
    msgUpdateParams({ value }: msgUpdateParamsParams): EncodeObject;
    genesisState({ value }: genesisStateParams): EncodeObject;
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
