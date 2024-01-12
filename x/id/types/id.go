package types

import sdk "github.com/cosmos/cosmos-sdk/types"

type ID struct {
	// Define your ID fields here
	Identifier string
	Owner      sdk.AccAddress
	// Other relevant fields
}
