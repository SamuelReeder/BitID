package keeper

import (
	"context"
	"errors"
	"fmt"

	"cosmossdk.io/collections"
	"github.com/SamuelReeder/BitID/x/did/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

var _ types.QueryServer = queryServer{}

// NewQueryServerImpl returns an implementation of the module QueryServer.
func NewQueryServerImpl(k Keeper) types.QueryServer {
	return queryServer{k}
}

type queryServer struct {
	k Keeper
}

// GetDID implements types.QueryServer.
// func (queryServer) QueryDIDDocument(context.Context, *types.QueryGetDIDRequest) (*types.QueryGetDIDResponse, error) {
// 	panic("unimplemented")
// }

// Params implements types.QueryServer.
func (queryServer) Params(context.Context, *types.QueryParamsRequest) (*types.QueryParamsResponse, error) {
	panic("unimplemented")
}

// QueryDIDDocument implements types.QueryServer.
func (qs queryServer) GetDID(ctx context.Context, req *types.QueryGetDIDRequest) (*types.QueryGetDIDResponse, error) {
	fmt.Println(qs.k.storedDID.ValueCodec())
	// for v := collections.Range qs.k.storedDID.ValueCodec() {
	// 	fmt.Println(v)
	// }
	fmt.Println(qs.k.storedDID.KeyCodec())
	did, err := qs.k.storedDID.Get(ctx, req.Creator)
	if err == nil {
		return &types.QueryGetDIDResponse{DID: &did}, nil
	}
	if errors.Is(err, collections.ErrNotFound) {
		return &types.QueryGetDIDResponse{DID: nil}, nil
	}

	return nil, status.Error(codes.Internal, err.Error())
}
