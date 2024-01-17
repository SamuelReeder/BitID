package types

import (
	fmt "fmt"

	"github.com/cosmos/cosmos-sdk/types"
)

// REDACTED FOR NOW

// MsgSetDIDDocument defines a message for setting a DID document.
type MsgSetDIDDocument struct {
	Creator  string
	ID       string
	Document DIDDocument // Assuming the document is passed as a string, adjust as needed
}

// ProtoMessage implements proto.Message.
func (MsgSetDIDDocument) ProtoMessage() {
	panic("unimplemented")
}

// Reset implements proto.Message.
func (MsgSetDIDDocument) Reset() {
	panic("unimplemented")
}

// String implements proto.Message.
func (MsgSetDIDDocument) String() string {
	panic("unimplemented")
}

// NewMsgSetDIDDocument creates a new MsgSetDIDDocument instance.
func NewMsgSetDIDDocument(creator, id string, document DIDDocument) *MsgSetDIDDocument {
	return &MsgSetDIDDocument{
		Creator:  creator,
		ID:       id,
		Document: document,
	}
}

type MsgGetDIDDocument struct {
	Retriever string
	ID        string
}

func NewMsgGetDIDDocument(retriever, id string) *MsgGetDIDDocument {
	return &MsgGetDIDDocument{Retriever: retriever, ID: id}
}

// Route implements the sdk.Msg interface.
func (msg MsgSetDIDDocument) Route() string {
	return msg.Route()
}

// Type implements the sdk.Msg interface.
func (msg MsgSetDIDDocument) Type() string {
	return "SetDIDDocument"
}

// GetSigners implements the sdk.Msg interface.
func (msg MsgSetDIDDocument) GetSigners() []types.AccAddress {
	creator, err := types.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []types.AccAddress{creator}
}

// // GetSignBytes implements the sdk.Msg interface.
// func (msg MsgSetDIDDocument) GetSignBytes() []byte {
// 	b, err := types.cdc.MarshalJSON(&msg)
// 	if err != nil {
// 		panic(err)
// 	}
// 	return b
// }

// ValidateBasic implements the sdk.Msg interface.
func (msg MsgSetDIDDocument) ValidateBasic() error {
	_, err := types.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return fmt.Errorf("invalid creator address (%s): %v", msg.Creator, err)
	}
	return nil
}

// Route implements the sdk.Msg interface.
func (msg MsgGetDIDDocument) Route() string {
	return msg.Route()
}

// Type implements the sdk.Msg interface.
func (msg MsgGetDIDDocument) Type() string {
	return "GetDIDDocument"
}

// GetSigners implements the sdk.Msg interface.
func (msg MsgGetDIDDocument) GetSigners() []types.AccAddress {
	retriever, err := types.AccAddressFromBech32(msg.Retriever)
	if err != nil {
		panic(err)
	}
	return []types.AccAddress{retriever}
}

// // GetSignBytes implements the sdk.Msg interface.
// func (msg MsgSetDIDDocument) GetSignBytes() []byte {
// 	b, err := types.cdc.MarshalJSON(&msg)
// 	if err != nil {
// 		panic(err)
// 	}
// 	return b
// }

// ValidateBasic implements the sdk.Msg interface.
func (msg MsgGetDIDDocument) ValidateBasic() error {
	_, err := types.AccAddressFromBech32(msg.Retriever)
	if err != nil {
		return fmt.Errorf("invalid creator address (%s): %v", msg.Retriever, err)
	}
	return nil
}
