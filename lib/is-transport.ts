import { AuthenticatorTransportFuture } from "@simplewebauthn/types";

export function isTransport(transportLike: string): transportLike is AuthenticatorTransportFuture {
  const transports = ["ble", "cable", "hybrid", "internal", "nfc", "smart-card", "usb"];

  return transports.includes(transportLike);
}
