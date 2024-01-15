import { Params } from "./types/bitid/did/params";
import { DIDDocument } from "./types/bitid/did/did_document";
import { QueryParamsRequest } from "./types/bitid/did/query";
import { MsgUpdateParamsResponse } from "./types/bitid/did/tx";
import { QueryParamsResponse } from "./types/bitid/did/query";
import { VerificationMethod } from "./types/bitid/did/did_document";
import { Service } from "./types/bitid/did/did_document";
import { MsgUpdateParams } from "./types/bitid/did/tx";
import { GenesisState } from "./types/bitid/did/genesis";
const msgTypes = [
    ["/bitid.did.Params", Params],
    ["/bitid.did.DIDDocument", DIDDocument],
    ["/bitid.did.QueryParamsRequest", QueryParamsRequest],
    ["/bitid.did.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/bitid.did.QueryParamsResponse", QueryParamsResponse],
    ["/bitid.did.VerificationMethod", VerificationMethod],
    ["/bitid.did.Service", Service],
    ["/bitid.did.MsgUpdateParams", MsgUpdateParams],
    ["/bitid.did.GenesisState", GenesisState],
];
export { msgTypes };
