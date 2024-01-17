package did

import (
	autocliv1 "cosmossdk.io/api/cosmos/autocli/v1"

	modulev1 "github.com/SamuelReeder/BitID/api/bitid/did"
)

// AutoCLIOptions implements the autocli.HasAutoCLIConfig interface.
func (am AppModule) AutoCLIOptions() *autocliv1.ModuleOptions {
	return &autocliv1.ModuleOptions{
		Query: &autocliv1.ServiceCommandDescriptor{
			Service: modulev1.Query_ServiceDesc.ServiceName,
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "Params",
					Use:       "params",
					Short:     "Shows the parameters of the module",
				},
				{
					RpcMethod: "GetDID",
					Use:       "get-did index",
					Short:     "Get the value of the DID at index",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{
						{ProtoField: "index"},
					},
				},

				// this line is used by ignite scaffolding # autocli/query
			},
		},
		Tx: &autocliv1.ServiceCommandDescriptor{
			Service:              modulev1.Msg_ServiceDesc.ServiceName,
			EnhanceCustomCommand: true, // only required if you want to use the custom command
			RpcCommandOptions: []*autocliv1.RpcCommandOptions{
				{
					RpcMethod: "UpdateParams",
					Skip:      true, // skipped because authority gated
				},
				{
					RpcMethod: "DefineDIDDocument",
					Use:       "create creator index id",
					Short:     "Creates a new DID with creator",
					PositionalArgs: []*autocliv1.PositionalArgDescriptor{
						{ProtoField: "creator"},
						{ProtoField: "index"},
						{ProtoField: "id"},
					},
				},
				// this line is used by ignite scaffolding # autocli/tx
			},
		},
	}
}
