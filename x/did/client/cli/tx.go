package cli

import (
	// Import necessary packages

	"fmt"
	"io/ioutil"

	"github.com/SamuelReeder/BitID/x/did/types"
	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/tx"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/spf13/cobra"
)

func CmdSetDIDDocument() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "set-did-document [id] [path-to-json]",
		Short: "Set a new DID document",
		Args:  cobra.MinimumNArgs(2), // Adjust the number of arguments based on your DIDDocument structure
		RunE: func(cmd *cobra.Command, args []string) error {
			clientCtx := client.GetClientContextFromCmd(cmd)
			txBuilder := clientCtx.TxConfig.NewTxBuilder()

			// Parsing arguments and creating DIDDocument struct
			id := args[0]
			// Parse other fields...
			_, err := ioutil.ReadFile(args[1])
			// jsonFileContext before
			// if err != nil {
			// 	return err
			// }

			// Unmarshal JSON content into your DID type
			// var didDocument types.DIDDocument
			// err = json.Unmarshal(jsonFileContent, &didDocument)
			// if err != nil {
			// 	return err
			// }

			verificationMethods := []*types.VerificationMethod{
				{ /* initialize with values */ },
			}

			services := []*types.Service{
				{ /* initialize with values */ },
			}

			didDocument := types.DIDDocument{
				Context:        "https://www.w3.org/ns/did/v1",
				Id:             "did:example:123456789abcdefghi",
				Authentication: verificationMethods,
				Service:        services,
				Created:        "2020-05-01T00:00:00Z",
				Updated:        "2021-05-01T00:00:00Z",
			}

			// clientCtx.AccountRetriever.GetAccount()
			// Creating a new MsgSetDIDDocument
			// clientCtx.GetFromAddress().String()
			msg := types.NewMsgSetDIDDocument("cosmos1kmqls6wvy50flhl3nc8473nyg8d62amdy5sxxe", id, didDocument)
			err = txBuilder.SetMsgs(msg)
			if err != nil {
				return err
			}

			addressString := "cosmos1kmqls6wvy50flhl3nc8473nyg8d62amdy5sxxe"
			accAddress, err := sdk.AccAddressFromBech32(addressString)
			if err != nil {
				// Handle error
			}

			clientCtx.FromAddress = accAddress

			fmt.Println("The message has been created.")
			fmt.Println(string(didDocument.Id))

			// Broadcasting the transaction
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)

			// usage:
			// /root/go/bin/BitIDd tx set-did-document rand example_DID.json
		},
	}

	// cmd.Flags().AddFlagSet(flags.TxFlagsToCmdFlags())
	return cmd
}

func GetTxCmd() *cobra.Command {
	didTxCmd := &cobra.Command{
		Use:                        types.ModuleName,
		Short:                      "DID transaction commands",
		DisableFlagParsing:         true,
		SuggestionsMinimumDistance: 2,
		RunE:                       client.ValidateCmd,
	}

	didTxCmd.AddCommand(
		CmdSetDIDDocument(),
		// Add other transaction commands here
	)

	return didTxCmd
}
