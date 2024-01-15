package keeper

import (
	"fmt"

	"cosmossdk.io/core/store"
	"cosmossdk.io/log"
	storetypes "cosmossdk.io/store/types"
	"github.com/cosmos/cosmos-sdk/codec"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"github.com/SamuelReeder/BitID/x/did/types"
)

type (
	Keeper struct {
		storeKey     storetypes.StoreKey
		cdc          codec.BinaryCodec
		storeService store.KVStoreService
		logger       log.Logger

		// the address capable of executing a MsgUpdateParams message. Typically, this
		// should be the x/gov module account.
		authority string
	}
)

func NewKeeper(
	cdc codec.BinaryCodec,
	storeService store.KVStoreService,
	logger log.Logger,
	authority string,

) Keeper {
	if _, err := sdk.AccAddressFromBech32(authority); err != nil {
		panic(fmt.Sprintf("invalid authority address: %s", authority))
	}

	return Keeper{
		cdc:          cdc,
		storeService: storeService,
		authority:    authority,
		logger:       logger,
	}
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
