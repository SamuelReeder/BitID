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

// ListDID implements types.QueryServer.
func (qs queryServer) ListDID(ctx context.Context, req *types.QueryListDIDRequest) (*types.QueryListDIDResponse, error) {
	// didList, err := qs.k.storedDID.()
	// if err != nil {
	// 	return nil, status.Error(codes.Internal, err.Error())
	// }

	// store := ctx.KVStore(qs.storeKey)
	// iterator := sdk.KVStorePrefixIterator(store, types.DIDDocument)

	// key, value := qs.k.storedDID.IterateRaw(ctx, nil, nil, collections.OrderAscending)

	// var dids []types.DIDDocument
	// for ; key.Valid() && value != nil; key, value = qs.k.storedDID.IterateRaw(ctx, key, value, collections.OrderAscending){
	// 	var did types.DIDDocument
	// 	codec.Cdc.MustUnmarshalBinaryBare(iterator.Value(), &did)
	// 	dids = append(dids, did)
	// }

	// iterator.Close()
	// return &types.QueryListDIDResponse{DIDs: dids}, nil
	iterator, err := qs.k.storedDID.IterateRaw(ctx, nil, nil, collections.OrderAscending)
	if err != nil {
		// Handle error
		return nil, err
	}
	defer iterator.Close()

	var dids []*types.DIDDocument
	var creators []string
	for ; iterator.Valid(); iterator.Next() {
		// var did types.DIDDocument
		key, err := iterator.Key()
		if err != nil {
			return nil, err
		}
		value, err := iterator.Value()
		if err != nil {
			return nil, err
		}
		// err := value.Unmarshal([]byte(jsonFile), &didDocument)
		// if err != nil {
		// 	return nil, fmt.Errorf("error parsing JSON:%v", err)
		// }
		// Optionally, you can use the key for something

		// err0 := qs.k.cdc.Unmarshal(value, &did)
		// if err != nil {
		//     // Handle error
		//     return nil, err
		// }
		creators = append(creators, string(key))
		dids = append(dids, &value)
	}

	// var didPointers []*types.DIDDocument
	// for _, did := range dids {
	// 	didPointers = append(didPointers, &did)
	// }
	return &types.QueryListDIDResponse{Creators: creators, DID: dids}, nil

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
