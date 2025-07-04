const envParam = {
  palomaNestServiceAPIBaseUrl: process.env.PALOMA_NEST_SERVICE_API_BASE_URL || '',
  onramperApiKey: process.env.ONRAMPER_API_KEY || '',
  palomaExtensionId: process.env.PALOMA_EXTENSION_ID || 'cjmmdephaciiailjnoikekdebkcbcfmi',
  MORALIS_SERVICE_API_KEY: process.env.MORALIS_SERVICE_API_KEY || '',
  nodeSale_eth: process.env.NODESALE_CONTRACT_ETH || '',
  nodeSale_bnb: process.env.NODESALE_CONTRACT_BNB || '',
  nodeSale_base: process.env.NODESALE_CONTRACT_BASE || '',
  nodeSale_arb: process.env.NODESALE_CONTRACT_ARB || '',
  nodeSale_op: process.env.NODESALE_CONTRACT_OP || '',
  nodeSale_polygon: process.env.NODESALE_CONTRACT_POLYGON || '',
  nodeSale_fiat: process.env.NODESALE_CONTRACT_FIAT || '',
  PASSCODE: process.env.PASSCODE || '',
  transakApiKey: process.env.TRANSAK_API_KEY || '',
  coinbaseApiKey: process.env.COINBASE_API_KEY || '',
  isNodesaleDisable: process.env.IS_NODESALE_DISABLE || false,
};

const purchaseSupportedNetworks = {
  '0000': 'Credit Card',
  '0001': 'Bank Account',
  '0002': 'Coinbase Wallet',
  '1': 'Ethereum',
  '10': 'Optimism',
  '56': 'BNB',
  '137': 'Polygon',
  '8453': 'Base',
  '42161': 'Arbitrum',
};

const DEFAULT_MAIN_CHAINS = [
  // mainnets
  'eip155:1',
  'eip155:10',
  'eip155:100',
  'eip155:137',
  'eip155:42161',
  'eip155:42220',
];

enum WalletProfiles {
  CopyAddress = 'Copy address',
  CopiedAddress = 'Copied address!',
  OpenExplorer = 'Open in Explorer',
  Disconnect = 'Disconnect',
}

const SLIPPAGE_DOMINATOR = 1000;
const SLIPPAGE_PERCENTAGE = 1; // default slippage is 1%
const DEADLINE = 5; // 5 MIN

const USER_ACCESS_TOKEN = 'user_access_token';
const PURCHASE_INFO = 'my_purchase_info';
const PURCHASED_WALLET = 'my_recent_token_purchased_wallet';

export {
  DEADLINE,
  DEFAULT_MAIN_CHAINS,
  envParam,
  PURCHASE_INFO,
  PURCHASED_WALLET,
  purchaseSupportedNetworks,
  SLIPPAGE_DOMINATOR,
  SLIPPAGE_PERCENTAGE,
  USER_ACCESS_TOKEN,
  WalletProfiles,
};
