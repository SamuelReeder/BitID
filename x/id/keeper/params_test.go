package keeper_test

import (
	"testing"

	"github.com/stretchr/testify/require"

	keepertest "github.com/SamuelReeder/BitID/testutil/keeper"
	"github.com/SamuelReeder/BitID/x/id/types"
)

func TestGetParams(t *testing.T) {
	k, ctx := keepertest.IdKeeper(t)
	params := types.DefaultParams()

	require.NoError(t, k.SetParams(ctx, params))
	require.EqualValues(t, params, k.GetParams(ctx))
}
