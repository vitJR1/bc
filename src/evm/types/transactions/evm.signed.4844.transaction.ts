class AccessListEntry {
  // Must match pattern ^0x[0-9a-fA-F]{40}$
  address: string;

  // Array of storage keys
  // Must match pattern ^0x[0-9a-f]{64}$
  storageKeys: string[];
}

export class Signed4844Transaction {
  // Type of the transaction
  // Must match pattern ^0x([0-9a-fA-F]?){1,2}$
  type: string;

  // Nonce of the transaction
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  nonce: string;

  // Address to which the transaction is sent
  // Must match pattern ^0x[0-9a-fA-F]{40}$
  to: string;

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

  // Maximum fee per blob gas
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  maxFeePerBlobGas: string;

  // EIP-2930 access list
  accessList: AccessListEntry[];

  // List of versioned blob hashes associated with the transaction's EIP-4844 data blobs
  blobVersionedHashes: string[];

  // Chain ID that this transaction is valid on
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  chainId: string;

  // Parity of the y-value of the secp256k1 signature
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  yParity: string;

  // 'r' component of the signature
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  r: string;

  // 's' component of the signature
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  s: string;
}
