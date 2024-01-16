package yourmodule

import (
	"time"

	"github.com/SamuelReeder/BitID/x/did/keeper"
	"github.com/SamuelReeder/BitID/x/did/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

// func HandleMsgSetDIDDocument(ctx types.Context, k keeper.Keeper, msg types.MsgSetDIDDocument) (*types.Result, error) {
// 	var document = types.DIDDocument{
// 		ID:       msg.ID,
// 		Document: msg.Document,
// 	}

// 	if err := k.SetDIDDocument(ctx, document); err != nil {
// 		return nil, fmt.Errorf("failed to set DID document: %v", err)
// 	}

// 	ctx.EventManager().EmitEvent(
// 		types.NewEvent(msg.Type(),
// 			types.NewAttribute("creator", msg.Creator),
// 			types.NewAttribute("id", msg.ID),
// 		),
// 	)

// 	return &types.Result{Events: ctx.EventManager().Events()}, nil
// }

func handleMsgCreateDIDDocument(ctx sdk.Context, k keeper.Keeper, msg types.MsgSetDIDDocument) (*sdk.Result, error) {
	// Logic to handle creating a DID document
	// e.g., k.CreateDIDDocument(ctx, msg.ID, ...)
	// Emit events, etc.
	document := types.DIDDocument{
		Context:        msg.Creator,
		Id:             msg.ID,
		Authentication: []*types.VerificationMethod{},
		Service:        []*types.Service{},
		Created:        time.Now().Format(time.RFC3339),
		Updated:        time.Now().Format(time.RFC3339),
	}

	k.SetDIDDocument(ctx, document)

	return &sdk.Result{}, nil
}

// func handleMsgGetDIDDocument(ctx sdk.Context, k keeper.Keeper, msg types.MsgGetDIDDocument) ([]byte, error) {
// 	// Logic to handle retrieving a DID document
// 	// e.g., document := k.GetDIDDocument(ctx, msg.ID)
// 	// Prepare response, emit events, etc.

// 	document, found := k.GetDIDDocument(ctx, msg.ID)
// 	if !found {
// 		// placeholder error TODO:
// 		return nil, sdk.ErrEmptyHexAddress
// 	}

// 	// Marshal the document
// 	res, err := codec.MarshalJSONIndent(k., document)
// 	if err != nil {
// 		return nil, sdk.ErrEmptyHexAddress
// 	}

// 	return res, err
// }
