package types

// import (
// 	"fmt"

// 	"github.com/cosmos/cosmos-sdk/types"
// )

// // MsgSetDIDDocument defines a message for setting a DID document.
// type MsgSetDIDDocument struct {
// 	Creator  string
// 	ID       string
// 	Document string // Assuming the document is passed as a string, adjust as needed
// }

// // NewMsgSetDIDDocument creates a new MsgSetDIDDocument instance.
// func NewMsgSetDIDDocument(creator, id, document string) MsgSetDIDDocument {
// 	return MsgSetDIDDocument{
// 		Creator:  creator,
// 		ID:       id,
// 		Document: document,
// 	}
// }

// // Route implements the sdk.Msg interface.
// func (msg MsgSetDIDDocument) Route() string {
// 	return RouterKey
// }

// // Type implements the sdk.Msg interface.
// func (msg MsgSetDIDDocument) Type() string {
// 	return "SetDIDDocument"
// }

// // GetSigners implements the sdk.Msg interface.
// func (msg MsgSetDIDDocument) GetSigners() []types.AccAddress {
// 	creator, err := types.AccAddressFromBech32(msg.Creator)
// 	if err != nil {
// 		panic(err)
// 	}
// 	return []types.AccAddress{creator}
// }

// // GetSignBytes implements the sdk.Msg interface.
// func (msg MsgSetDIDDocument) GetSignBytes() []byte {
// 	b, err := types.ModuleCdc.MarshalJSON(&msg)
// 	if err != nil {
// 		panic(err)
// 	}
// 	return b
// }

// // ValidateBasic implements the sdk.Msg interface.
// func (msg MsgSetDIDDocument) ValidateBasic() error {
// 	_, err := types.AccAddressFromBech32(msg.Creator)
// 	if err != nil {
// 		return fmt.Errorf("invalid creator address (%s): %v", msg.Creator, err)
// 	}
// 	return nil
// }
