package did_test

import (
	"testing"

	keepertest "github.com/SamuelReeder/BitID/testutil/keeper"
	"github.com/SamuelReeder/BitID/testutil/nullify"
	"github.com/SamuelReeder/BitID/x/did/module"
	"github.com/SamuelReeder/BitID/x/did/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.DidKeeper(t)
	did.InitGenesis(ctx, k, genesisState)
	got := did.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
