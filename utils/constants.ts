export const TWITTER_LINK = 'https://twitter.com/paloma_chain';
export const TELEGRAM_LINK = 'https://t.me/palomachain';
export const GITHUB_LINK = 'https://github.com/palomachain';
export const DISCORD_LINK = 'https://discord.gg/tNqkNHvVNc';

export const PALOMABOT_WEBSITE_LINK = 'https://palomabot.ai';
export const COMMUNITY_LINK = 'https://discord.gg/tbzNsehE4u';

export const LATEST_BLOG_SHOW_CNT = 3;

export const PAGE_LANDING = 'landing-page';

export const TotalNodes = 97414;
export const NodeSlot1 = 6000;
export const ChangeR = 0.9596113741;
export const StartingPrice = 30;
export const EndingPrice = 1000;
export const Exponent = 2;
export const NSlots = 40;
export const GrainsPerNode = 5000;
export const TotalGrains = 6500000000;
export const Inflation = 7; // 7%
export const CommunityFee = 2; // 2%
export const ValidatorFee = 5; // 5%
export const RelayRewardFee = 30; // 30%
export const PigeonGasFee = 10; // 10%
export const Increment = (EndingPrice - StartingPrice) / (NSlots - 1) ** Exponent;

export const NodeSaleStartDate = 1726668000 * 1000; // 2:00 PM, September 18, 2024 Coordinated Universal Time (UTC)
export const NodeSaleEndDate = 1740959999 * 1000; // 0:00 AM, March 2, 2025 Coordinated Universal Time (UTC)

export const PaymentStatus = [
  0, // purchased
  1, // whitelisted
  2, // activated
  3, // sold
];
