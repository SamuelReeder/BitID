package keeper

import (
	"context"

	"github.com/SamuelReeder/BitID/x/did/types"
)

// InitGenesis initializes the module state from a genesis state.
func (k *Keeper) InitGenesis(ctx context.Context, data *types.GenesisState) error {
	if err := k.params.Set(ctx, data.Params); err != nil {
		return err
	}

	for _, indexedStoredDID := range data.IndexedStoredDID {
		if err := k.storedDID.Set(ctx, indexedStoredDID.Creator, indexedStoredDID.StoredDID); err != nil {
			return err
		}
	}

	return nil
}

// ExportGenesis exports the module state to a genesis state.
func (k *Keeper) ExportGenesis(ctx context.Context) (*types.GenesisState, error) {
	params, err := k.params.Get(ctx)
	if err != nil {
		return nil, err
	}

	var indexedStoredDID []types.IndexedStoredDID
	if err := k.storedDID.Walk(ctx, nil, func(creator string, storedDID types.DIDDocument) (bool, error) {
		indexedStoredDID = append(indexedStoredDID, types.IndexedStoredDID{
			Creator:   creator,
			StoredDID: storedDID,
		})
		return false, nil
	}); err != nil {
		return nil, err
	}

	return &types.GenesisState{
		Params:           params,
		IndexedStoredDID: indexedStoredDID,
	}, nil
}
