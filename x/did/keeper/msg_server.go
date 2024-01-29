package keeper

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"time"

	"cosmossdk.io/collections"
	"github.com/SamuelReeder/BitID/x/did/types"
)

type msgServer struct {
	k Keeper
}

// UpdateParams implements types.MsgServer.
func (msgServer) UpdateParams(context.Context, *types.MsgUpdateParams) (*types.MsgUpdateParamsResponse, error) {
	panic("unimplemented")
}

var _ types.MsgServer = msgServer{}

// NewMsgServerImpl returns an implementation of the MsgServer interface
// for the provided Keeper.
func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{k: keeper}
}

// // UpdateParams implements types.MsgServer.
// func (*msgServer) UpdateParams(context.Context, *types.MsgUpdateParams) (*types.MsgUpdateParamsResponse, error) {
// 	panic("unimplemented")
// }

// DefineDIDDocument implements types.MsgServer.
// func (msgServer) DefineDIDDocument(context.Context, *types.MsgDefineDIDDocument) (*types.MsgDefineDIDDocumentResponse, error) {
// 	if length := len([]byte(msg.Index)); 8000000000 < length || length < 1 {
//         return nil, types.ErrInvalidDid
//     }
//     if _, err := ms.k.StoredGames.Get(ctx, msg.Index); err == nil || errors.Is(err, collections.ErrEncoding) {
//         return nil, fmt.Errorf("game already exists at index: %s", msg.Index)
//     }

//     newBoard := rules.New()
//     storedGame := checkers.StoredGame{
//         Board: newBoard.String(),
//         Turn:  rules.PieceStrings[newBoard.Turn],
//         Black: msg.Black,
//         Red:   msg.Red,
//     }
//     if err := storedGame.Validate(); err != nil {
//         return nil, err
//     }
//     if err := ms.k.StoredGames.Set(ctx, msg.Index, storedGame); err != nil {
//         return nil, err
//     }

//     return &checkers.MsgCreateGameResponse{}, nil
// }

func (ms msgServer) DefineDIDDocument(ctx context.Context, msg *types.MsgDefineDIDDocument) (*types.MsgDefineDIDDocumentResponse, error) {
	// if length := len([]byte(msg.Index)); 8000000000 < length || length < 1 {
	// 	return nil, types.ErrInvalidDid
	// }
	var didDocument types.DIDDocument
	err := json.Unmarshal([]byte(msg.JSONString), &didDocument)
	if err != nil {
		return nil, fmt.Errorf("error parsing JSON: %v", err)
	}

	if _, err := ms.k.storedDID.Get(ctx, msg.Creator); err == nil || errors.Is(err, collections.ErrEncoding) {
		return nil, fmt.Errorf("DID already exists for creator: %s", msg.Creator)
	}

	// upon submitting DID, some party need to verify the DID

	// verificationMethods := []*types.VerificationMethod{
	// 	{ /* initialize with values */ },
	// }

	// services := []*types.Service{
	// 	{ /* initialize with values */ },
	// }

	// didDocument := types.DIDDocument{
	// 	Context:        "https://www.w3.org/ns/did/v1",
	// 	Id:             msg.Creator,
	// 	Authentication: verificationMethods,
	// 	Service:        services,
	// 	Created:        time.Now().String(),
	// 	Updated:        time.Now().String(),
	// }

	didDocument.Created = time.Now().String()
	didDocument.Updated = time.Now().String()

	if err := didDocument.Validate(); err != nil {
		return nil, err
	}
	if err := ms.k.storedDID.Set(ctx, msg.Creator, didDocument); err != nil {
		return nil, err
	}

	return &types.MsgDefineDIDDocumentResponse{}, nil
}

func ParseDIDDocument(jsonStr string) (types.DIDDocument, error) {
	var doc types.DIDDocument
	err := json.Unmarshal([]byte(jsonStr), &doc)
	if err != nil {
		return types.DIDDocument{}, err
	}
	return doc, nil
}
