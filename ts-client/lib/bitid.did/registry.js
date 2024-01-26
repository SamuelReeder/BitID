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
const msgTypes = [
    ["/bitid.did.DIDDocument", DIDDocument],
    ["/bitid.did.VerificationMethod", VerificationMethod],
    ["/bitid.did.MsgDefineDIDDocument", MsgDefineDIDDocument],
    ["/bitid.did.QueryGetDIDRequest", QueryGetDIDRequest],
    ["/bitid.did.QueryParamsResponse", QueryParamsResponse],
    ["/bitid.did.Service", Service],
    ["/bitid.did.MsgDefineDIDDocumentResponse", MsgDefineDIDDocumentResponse],
    ["/bitid.did.Params", Params],
    ["/bitid.did.QueryParamsRequest", QueryParamsRequest],
    ["/bitid.did.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/bitid.did.IndexedStoredDID", IndexedStoredDID],
    ["/bitid.did.QueryGetDIDResponse", QueryGetDIDResponse],
    ["/bitid.did.GenesisState", GenesisState],
    ["/bitid.did.MsgUpdateParams", MsgUpdateParams],
];
export { msgTypes };
