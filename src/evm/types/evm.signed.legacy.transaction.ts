export class SignedLegacyTransaction {
  // Type of the transaction (should be '0x0' for legacy transactions)
  // Must match pattern ^0x0$
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

  // Gas price for the transaction
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  gasPrice: string;

  // Chain ID that this transaction is valid on
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  chainId: string;

  // v value of the transaction
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  v: string;

  // r component of the signature
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  r: string;

  // s component of the signature
  // Must match pattern ^0x([1-9a-f]+[0-9a-f]*|0)$
  s: string;
}
