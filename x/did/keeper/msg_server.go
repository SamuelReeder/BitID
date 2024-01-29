package keeper

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"os"
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

func NewMsgServerImpl(keeper Keeper) types.MsgServer {
	return &msgServer{k: keeper}
}

func (ms msgServer) DefineDIDDocument(ctx context.Context, msg *types.MsgDefineDIDDocument) (*types.MsgDefineDIDDocumentResponse, error) {
	// if length := len([]byte(msg.Index)); 8000000000 < length || length < 1 {
	// 	return nil, types.ErrInvalidDid
	// }

	fmt.Println(msg.JSONString)
	// ctx.Value("logger").(log.Logger).Info("hi")
	// (log.Logger).Info("hi")
	os.Stdout.WriteString("hello\n")
	fmt.Println("hi")
	// Assuming msg.JSONString is a path to a JSON file
	jsonFile, err0 := os.ReadFile(msg.JSONString)
	if err0 != nil {
		return nil, fmt.Errorf("error reading JSON file: %v", err0)
	}

	var didDocument types.DIDDocument
	err := json.Unmarshal([]byte(jsonFile), &didDocument)
	if err != nil {
		return nil, fmt.Errorf("error parsing JSON:%v", err)
	}

	if _, err := ms.k.storedDID.Get(ctx, msg.Creator); err == nil || errors.Is(err, collections.ErrEncoding) {
		return nil, fmt.Errorf("DID already exists for creator: %s", msg.Creator)
	}

	fmt.Println(didDocument.String())
	// fmt.Println(didDocument.Id)
	// fmt.Println(didDocument.Created)
	// fmt.Println(didDocument.Updated)
	// fmt.Println(didDocument.Context)
	// fmt.Println(didDocument.Authentication)
	// fmt.Println(didDocument.Service)

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
