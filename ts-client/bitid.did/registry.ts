import { GeneratedType } from "@cosmjs/proto-signing";
import { Service } from "./types/bitid/did/did_document";
import { GenesisState } from "./types/bitid/did/genesis";
import { MsgDefineDIDDocumentResponse } from "./types/bitid/did/tx";
import { QueryGetDIDResponse } from "./types/bitid/did/query";
import { QueryParamsRequest } from "./types/bitid/did/query";
import { QueryParamsResponse } from "./types/bitid/did/query";
import { MsgUpdateParams } from "./types/bitid/did/tx";
import { MsgUpdateParamsResponse } from "./types/bitid/did/tx";
import { IndexedStoredDID } from "./types/bitid/did/did_document";
import { QueryGetDIDRequest } from "./types/bitid/did/query";
import { MsgDefineDIDDocument } from "./types/bitid/did/tx";
import { DIDDocument } from "./types/bitid/did/did_document";
import { VerificationMethod } from "./types/bitid/did/did_document";
import { Params } from "./types/bitid/did/params";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/bitid.did.Service", Service],
    ["/bitid.did.GenesisState", GenesisState],
    ["/bitid.did.MsgDefineDIDDocumentResponse", MsgDefineDIDDocumentResponse],
    ["/bitid.did.QueryGetDIDResponse", QueryGetDIDResponse],
    ["/bitid.did.QueryParamsRequest", QueryParamsRequest],
    ["/bitid.did.QueryParamsResponse", QueryParamsResponse],
    ["/bitid.did.MsgUpdateParams", MsgUpdateParams],
    ["/bitid.did.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/bitid.did.IndexedStoredDID", IndexedStoredDID],
    ["/bitid.did.QueryGetDIDRequest", QueryGetDIDRequest],
    ["/bitid.did.MsgDefineDIDDocument", MsgDefineDIDDocument],
    ["/bitid.did.DIDDocument", DIDDocument],
    ["/bitid.did.VerificationMethod", VerificationMethod],
    ["/bitid.did.Params", Params],
    
];

export { msgTypes }