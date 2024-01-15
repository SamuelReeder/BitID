// package cli

// import (
// 	// Import necessary packages
// 	"github.com/SamuelReeder/BitID/x/did/types"
// 	"github.com/cosmos/cosmos-sdk/client"
// 	"github.com/cosmos/cosmos-sdk/client/context"
// 	"github.com/cosmos/cosmos-sdk/client/flags"
// 	"github.com/spf13/cobra"
// )

// func CmdGetDIDDocument() *cobra.Command {
// 	cmd := &cobra.Command{
// 		Use:   "get-did-document [id]",
// 		Short: "Query a DID document",
// 		Args:  cobra.ExactArgs(1),
// 		RunE: func(cmd *cobra.Command, args []string) error {
// 			cliCtx := context.NewCLIContext().WithCodec(cdc)
// 			id := args[0]

// 			// Creating a new query client for the DID module
// 			queryClient := types.NewQueryClient(cliCtx)

// 			params := &types.QueryGetDIDDocumentRequest{
// 				Id: id,
// 			}

// 			res, err := queryClient.DIDDocument(context.Background(), params)
// 			if err != nil {
// 				return err
// 			}

// 			return cliCtx.PrintOutput(res)
// 		},
// 	}

// 	flags.AddQueryFlagsToCmd(cmd)
// 	return cmd
// }

// func GetQueryCmd() *cobra.Command {
// 	didQueryCmd := &cobra.Command{
// 		Use:                        types.ModuleName,
// 		Short:                      "DID query commands",
// 		DisableFlagParsing:         true,
// 		SuggestionsMinimumDistance: 2,
// 		RunE:                       client.ValidateCmd,
// 	}

// 	didQueryCmd.AddCommand(
// 		CmdGetDIDDocument(),
// 		// Add other query commands here
// 	)

// 	return didQueryCmd
// }
