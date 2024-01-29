package types

import (
	fmt "fmt"

	"cosmossdk.io/errors"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (didDocument DIDDocument) GetVerificationMethod() (user sdk.AccAddress, err error) {
	address, err := sdk.AccAddressFromBech32(didDocument.Id)
	return address, errors.Wrapf(err, ErrVC.Error(), didDocument.Id)
}

func (didDocument DIDDocument) ParseDID() (str string, err error) {
	if didDocument.Id == "" {
		return "", errors.Wrapf(fmt.Errorf("Empty ID"), ErrInvalidDid.Error())
	}
	return didDocument.Id + didDocument.Created, nil
}

func (didDocument DIDDocument) Validate() (err error) {
	// TODO: validate all fields
	// in particular ensure no duplicates
	// and no illegal fields
	// make sure all fields adhere to our given standards:
	// check time
	// check formats
	// check if extra info
	_, err = didDocument.GetVerificationMethod()
	if err != nil {
		return err
	}
	_, err = didDocument.ParseDID()
	return err
}

// TODO: any necessary methods
