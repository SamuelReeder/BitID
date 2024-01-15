package keeper

import (
	"github.com/SamuelReeder/BitID/x/did/types"
)

var _ types.QueryServer = Keeper{}
