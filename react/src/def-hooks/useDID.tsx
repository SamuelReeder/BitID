// import { useMemo } from "react";
// import useBitidDid from "../hooks/useBitidDid";
// import { useAddressContext } from "./addressContext";
// import { useDenomContext } from "./denomContext";

// export const useDID = (perPage: number) => {
//   // composables
//   const { address } = useAddressContext();
//   const { DID } = useBitidDid();
//   const enabled = useMemo(() => {
//     return address != "";
//   }, [address]);
//   const query = QueryAllBalances(address, {}, { enabled }, perPage);
//   type HelperBalances = NonNullable<NonNullable<Required<typeof query.data>>["pages"][0]["balances"]>;

//   const balancesRaw = query.data?.pages.reduce((bals, page) => {
//     if (page.balances) {
//       return bals.concat(page.balances);
//     } else {
//       return bals;
//     }
//   }, [] as HelperBalances);

//   const balances = useMemo(() => {
//     return {
//       assets: balancesRaw ?? [],
//       isLoading: query.isLoading,
//     };
//   }, [balancesRaw]);

//   return {
//     balancesRaw,
//     balances,
//     isLoading: query.isLoading,
//     fetch: query.fetchNextPage,
//     hasMore: query.hasNextPage,
//   };
// };
