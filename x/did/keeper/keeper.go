package keeper

import (
	context "context"
	"fmt"

	"cosmossdk.io/collections"
	"cosmossdk.io/core/store"
	"cosmossdk.io/log"
	storetypes "cosmossdk.io/store/types"
	codec "github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"github.com/SamuelReeder/BitID/x/did/types"
)

type (
	Keeper struct {
		storeKey     storetypes.StoreKey
		cdc          codec.BinaryCodec
		storeService store.KVStoreService
		logger       log.Logger

		schema    collections.Schema
		params    collections.Item[types.Params]
		storedDID collections.Map[string, types.DIDDocument]
		// the address capable of executing a MsgUpdateParams message. Typically, this
		// should be the x/gov module account.
		authority string
	}
)

// GetDID implements types.QueryServer.
func (Keeper) GetDID(context.Context, *types.QueryGetDIDRequest) (*types.QueryGetDIDResponse, error) {
	panic("unimplemented")
}

func NewKeeper(
	cdc codec.BinaryCodec,
	storeService store.KVStoreService,
	logger log.Logger,
	authority string,

) Keeper {
	if _, err := sdk.AccAddressFromBech32(authority); err != nil {
		panic(fmt.Sprintf("invalid authority address: %s", authority))
	}

	sb := collections.NewSchemaBuilder(storeService)
	// collections.GetValue[string, string](fileStorage, "key")
	k := Keeper{
		cdc: cdc,
		// addressCodec: addressCodec,
		storeService: storeService,
		authority:    authority,
		logger:       logger,
		params:       collections.NewItem(sb, types.ParamsKey, "params", codec.CollValue[types.Params](cdc)),
		storedDID: collections.NewMap(sb,
			types.StoredDIDKey, "storedDID", collections.StringKey,
			codec.CollValue[types.DIDDocument](cdc)),
	}

	schema, err := sb.Build()
	if err != nil {
		panic(err)
	}

	k.schema = schema

	return k
}

// GetAuthority returns the module's authority.
func (k Keeper) GetAuthority() string {
	return k.authority
}

// Logger returns a module-specific logger.
func (k Keeper) Logger() log.Logger {
	return k.logger.With("module", fmt.Sprintf("x/%s", types.ModuleName))
}

func (k Keeper) SetDIDDocument(ctx sdk.Context, document types.DIDDocument) {
	store := ctx.KVStore(k.storeKey)
	b, err := k.cdc.Marshal(&document)
	if err != nil {
		panic("could not marshal DIDDocument to bytes")
	}
	store.Set([]byte(document.Id), b)
}

func (k Keeper) GetDIDDocument(ctx sdk.Context, id string) (types.DIDDocument, bool) {
	store := ctx.KVStore(k.storeKey)
	b := store.Get([]byte(id))
	if b == nil {
		return types.DIDDocument{}, false
	}
	var document types.DIDDocument
	err := k.cdc.Unmarshal(b, &document)
	if err != nil {
		panic("could not unmarshal DIDDocument from bytes")
	}
	return document, true
}

func (k Keeper) QueryDIDDocument(ctx context.Context, req *types.QueryGetDIDRequest) (*types.QueryGetDIDResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	sdkCtx := sdk.UnwrapSDKContext(ctx)

	// Logic to get the DID document from the store
	// This is just a placeholder. Replace it with your actual logic.
	didDocument, found := k.GetDIDDocument(sdkCtx, req.Creator)
	if !found {
		return nil, status.Error(codes.NotFound, "DID document not found")
	}

	return &types.QueryGetDIDResponse{DID: &didDocument}, nil
}
