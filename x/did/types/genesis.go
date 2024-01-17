package types

// this line is used by starport scaffolding # genesis/types/import

// "github.com/SamuelReeder/BitID/x/did/keeper"

// DefaultIndex is the default global index
const DefaultIndex uint64 = 1

// DefaultGenesis returns the default genesis state
func DefaultGenesis() *GenesisState {
	return &GenesisState{
		// this line is used by starport scaffolding # genesis/types/default
		Params: DefaultParams(),
	}
}

// Validate performs basic genesis state validation returning an error upon any
// failure.
func (gs GenesisState) Validate() error {
	// this line is used by starport scaffolding # genesis/types/validate

	if err := gs.Params.Validate(); err != nil {
		return err
	}

	unique := make(map[string]bool)
	for _, indexedStoredDID := range gs.IndexedStoredDID {
		if length := len([]byte(indexedStoredDID.Index)); 8000000000 < length || length < 1 {
			return ErrInvalidDid
		}
		if _, ok := unique[indexedStoredDID.Index]; ok {
			return ErrDuplicateAddress
		}
		if err := indexedStoredDID.StoredDID.Validate(); err != nil {
			return ErrInvalidDid
		}
		unique[indexedStoredDID.Index] = true
	}

	return nil
}
