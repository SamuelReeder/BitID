package types

const (
	// ModuleName defines the module name
	ModuleName = "id"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_id"
)

var (
	ParamsKey = []byte("p_id")
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
