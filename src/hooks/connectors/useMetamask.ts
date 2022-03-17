import { useConnect } from "../useConnect";
import invariant from "tiny-invariant";

/**
 * Convienience hook for connecting to a metamask (or any injected) wallet
 * @returns a function that will prompt the user to connect their metamask wallet
 * @public
 */
export function useMetamask() {
  const [connectors, connect] = useConnect();
  if (connectors.loading) {
    return () => Promise.reject("Metamask connector not ready to be used, yet");
  }
  const connector = connectors.data.connectors.find((c) => c.id === "injected");
  invariant(
    connector,
    "Metamask connector not found, please make sure it is provided to your <ThirdwebProvider />",
  );

  return () => connect(connector);
}
