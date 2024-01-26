import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgUpdateParams } from "./types/bitid/bitid/tx";
import { GenesisState } from "./types/bitid/bitid/genesis";
import { Params } from "./types/bitid/bitid/params";
import { MsgUpdateParamsResponse } from "./types/bitid/bitid/tx";
import { QueryParamsRequest } from "./types/bitid/bitid/query";
import { QueryParamsResponse } from "./types/bitid/bitid/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/bitid.bitid.MsgUpdateParams", MsgUpdateParams],
    ["/bitid.bitid.GenesisState", GenesisState],
    ["/bitid.bitid.Params", Params],
    ["/bitid.bitid.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/bitid.bitid.QueryParamsRequest", QueryParamsRequest],
    ["/bitid.bitid.QueryParamsResponse", QueryParamsResponse],
    
];

export { msgTypes }