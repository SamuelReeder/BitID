package types

const (
	// ModuleName defines the module name
	ModuleName = "did"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_did"
)

var (
	ParamsKey = []byte("p_did")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
