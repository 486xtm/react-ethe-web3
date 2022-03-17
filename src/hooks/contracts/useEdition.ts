import { useContract } from "./useContract";
import { Edition } from "@thirdweb-dev/sdk";

/**
 * Returns a Edition contract instance
 * @param contractAddress - the address of the Edition contract, found in your thirdweb dashboard
 * @public
 */
export function useEdition(contractAddress?: string): Edition | undefined {
  return useContract("edition", contractAddress);
}
