package types

import (
	"github.com/cosmos/cosmos-sdk/codec"
	cdctypes "github.com/cosmos/cosmos-sdk/codec/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/msgservice"
	// this line is used by starport scaffolding # 1
)

func RegisterCodec(cdc *codec.LegacyAmino) {
	cdc.RegisterConcrete(&MsgSetDIDDocument{}, "checkers/CreateGame", nil)
	// this line is used by starport scaffolding # 2
}

func RegisterInterfaces(registry cdctypes.InterfaceRegistry) {
	// this line is used by starport scaffolding # 3

	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgUpdateParams{},
	)

	// registry.RegisterImplementations((*sdk.Msg)(nil),
	// 	&MsgSetDIDDocument{},
	// )

	registry.RegisterImplementations((*sdk.Msg)(nil),
		&MsgDefineDIDDocument{},
	)
	msgservice.RegisterMsgServiceDesc(registry, &_Msg_serviceDesc)

}
