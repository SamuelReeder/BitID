import { GeneratedType } from "@cosmjs/proto-signing";
import { GenesisState } from "./types/bitid/bitid/genesis";
import { MsgUpdateParams } from "./types/bitid/bitid/tx";
import { QueryParamsResponse } from "./types/bitid/bitid/query";
import { Params } from "./types/bitid/bitid/params";
import { QueryParamsRequest } from "./types/bitid/bitid/query";
import { MsgUpdateParamsResponse } from "./types/bitid/bitid/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/bitid.bitid.GenesisState", GenesisState],
    ["/bitid.bitid.MsgUpdateParams", MsgUpdateParams],
    ["/bitid.bitid.QueryParamsResponse", QueryParamsResponse],
    ["/bitid.bitid.Params", Params],
    ["/bitid.bitid.QueryParamsRequest", QueryParamsRequest],
    ["/bitid.bitid.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    
];

export { msgTypes }