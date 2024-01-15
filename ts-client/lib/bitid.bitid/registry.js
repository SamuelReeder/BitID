import { MsgUpdateParams } from "./types/bitid/bitid/tx";
import { MsgUpdateParamsResponse } from "./types/bitid/bitid/tx";
import { Params } from "./types/bitid/bitid/params";
import { GenesisState } from "./types/bitid/bitid/genesis";
import { QueryParamsRequest } from "./types/bitid/bitid/query";
import { QueryParamsResponse } from "./types/bitid/bitid/query";
const msgTypes = [
    ["/bitid.bitid.MsgUpdateParams", MsgUpdateParams],
    ["/bitid.bitid.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/bitid.bitid.Params", Params],
    ["/bitid.bitid.GenesisState", GenesisState],
    ["/bitid.bitid.QueryParamsRequest", QueryParamsRequest],
    ["/bitid.bitid.QueryParamsResponse", QueryParamsResponse],
];
export { msgTypes };
