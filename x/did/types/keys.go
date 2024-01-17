package types

import "cosmossdk.io/collections"

const (
	// ModuleName defines the module name
	ModuleName = "did"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_did"
)

var (
	ParamsKey    = []byte("p_did")
	StoredDIDKey = collections.NewPrefix("StoredDID/value/")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
