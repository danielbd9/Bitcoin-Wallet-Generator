// Import dependencies
const bip39 = require('bip39');
const bip32 = require('bip32');
const bitcoin = require('bitcoinjs-lib');

// Define the network to use (testnet in this case)
const network = bitcoin.networks.testnet;

// Define the derivation path (adjusted to correct format)
const path = `m/49'/1'/0'/0/0`;

// Generate a random mnemonic (12-word phrase)
let mnemonic = bip39.generateMnemonic();

// Convert the mnemonic to a seed
const seed = bip39.mnemonicToSeedSync(mnemonic);

// Create a root node from the seed
let root = bip32.fromSeed(seed, network);

// Derive the account node using the derivation path
let account = root.derivePath(path);

// Derive the final node (change and address index)
let node = account.derive(0).derive(0);

// Generate a Bitcoin address from the node's public key
let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network
}).address;

// Print the wallet information
console.log('Wallet');
console.log('Address: ' + btcAddress);
console.log('Private Key: ' + node.toWIF());
console.log('Seed: ' + mnemonic);
