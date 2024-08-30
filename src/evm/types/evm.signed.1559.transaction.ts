class AccessListEntry {
  // Must match pattern ^0x[0-9a-fA-F]{40}$
  address: string;
  // Array of storage keys
  storageKeys: string[];
}

export class Signed1559Transaction {
  // Type of the transaction (should be '0x2' for EIP-1559 transactions)
  // Must match pattern ^0x2$
  type: string;

  // Nonce of the transaction
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  nonce: string;

  // To address or contract creation (null for contract creation)
  // Must be either a valid address or null
  to: string | null;

  // Gas limit for the transaction
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  gas: string;

  // Value of the transaction in wei
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  value: string;

  // Input data for the transaction
  // Must match pattern ^0x[0-9a-f]*$
  input: string;

  // Maximum priority fee per gas
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  maxPriorityFeePerGas: string;

  // Maximum fee per gas
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  maxFeePerGas: string;

  // Deprecated gas price
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  gasPrice: string;

  // EIP-2930 access list
  accessList: AccessListEntry[];

  // Chain ID that this transaction is valid on
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  chainId: string;

  // Parity of the y-value of the secp256k1 signature
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  yParity: string;

  // v value for backwards compatibility (deprecated)
  // Optional, must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  v?: string;

  // r component of the signature
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  r: string;

  // s component of the signature
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  s: string;
}
