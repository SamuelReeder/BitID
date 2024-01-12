package types

const (
	// ModuleName defines the module name
	ModuleName = "bitid"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_bitid"
)

var (
	ParamsKey = []byte("p_bitid")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
