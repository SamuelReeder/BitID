package types

// DONTCOVER

import (
	sdkerrors "cosmossdk.io/errors"
)

// x/did module sentinel errors
var (
	ErrInvalidSigner    = sdkerrors.Register(ModuleName, 1100, "expected gov account as only signer for proposal message")
	ErrSample           = sdkerrors.Register(ModuleName, 1101, "sample error")
	ErrInvalidDid       = sdkerrors.Register(ModuleName, 2, "proposed DID was invalid")
	ErrDuplicateAddress = sdkerrors.Register(ModuleName, 3, "duplicate address")
	ErrInvalidQuery     = sdkerrors.Register(ModuleName, 4, "no DID associated with that query: %s")
	ErrVC               = sdkerrors.Register(ModuleName, 6, "VC failed")
)
