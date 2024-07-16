# Bitcoin Testnet Wallet Generator

This project is a simple Bitcoin wallet generator for the testnet network using `bip39`, `bip32`, and `bitcoinjs-lib` libraries. It generates a mnemonic phrase, derives a seed from it, and creates a Bitcoin address along with its corresponding private key.

## Features

- Generates a 12-word mnemonic phrase
- Converts mnemonic to a seed
- Derives a hierarchical deterministic (HD) wallet node
- Creates a Bitcoin address (P2PKH) on the testnet network
- Outputs the Bitcoin address, private key (in WIF format), and mnemonic seed

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/bitcoin-testnet-wallet-generator.git
    cd bitcoin-testnet-wallet-generator
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

## Usage

To run the wallet generator, execute the following command:
```bash
node index.js


Wallet
Address: n1aRVxJrhRstz8RJPS1zR4gCqQ6LzRjnM9
Private Key: cT6r8sTj3wST7G7q49t7DQL5sDy1CMnN4hoD58PC8KN3T6HV6YbA
Seed: flock similar setup whale luxury page tuna helmet deny arrange hockey good
