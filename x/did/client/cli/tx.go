// package cli

// import (
// 	// Import necessary packages
// 	"github.com/SamuelReeder/BitID/x/did/types"
// 	"github.com/cosmos/cosmos-sdk/client"
// 	"github.com/cosmos/cosmos-sdk/client/flags"
// 	"github.com/cosmos/cosmos-sdk/client/tx"
// 	"github.com/spf13/cobra"
// )

// func CmdSetDIDDocument() *cobra.Command {
// 	cmd := &cobra.Command{
// 		Use:   "set-did-document [id] [other-fields...]",
// 		Short: "Set a new DID document",
// 		Args:  cobra.MinimumNArgs(2), // Adjust the number of arguments based on your DIDDocument structure
// 		RunE: func(cmd *cobra.Command, args []string) error {
// 			clientCtx := client.GetClientContextFromCmd(cmd)
// 			txBuilder := clientCtx.TxConfig.NewTxBuilder()

// 			// Parsing arguments and creating DIDDocument struct
// 			id := args[0]
// 			// Parse other fields...

// 			// Creating a new MsgSetDIDDocument
// 			msg := types.NewMsgSetDIDDocument(clientCtx.GetFromAddress().String(), id /* other fields */)
// 			err := txBuilder.SetMsgs(msg)
// 			if err != nil {
// 				return err
// 			}

// 			// Broadcasting the transaction
// 			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
// 		},
// 	}

// 	cmd.Flags().AddFlagSet(flags.TxFlagsToCmdFlags())
// 	return cmd
// }

// func GetTxCmd() *cobra.Command {
// 	didTxCmd := &cobra.Command{
// 		Use:                        types.ModuleName,
// 		Short:                      "DID transaction commands",
// 		DisableFlagParsing:         true,
// 		SuggestionsMinimumDistance: 2,
// 		RunE:                       client.ValidateCmd,
// 	}

// 	didTxCmd.AddCommand(
// 		CmdSetDIDDocument(),
// 		// Add other transaction commands here
// 	)

// 	return didTxCmd
// }
