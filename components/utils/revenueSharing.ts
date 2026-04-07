
export type StakeholderShares = {
  [key: string]: number; // percentage
};

export type DistributionResult = {
  [key: string]: number; // monetary value
};

export function calculateDistribution(
  price: number,
  discount: number, // e.g. 0.1 for 10% discount
  shares: StakeholderShares
): DistributionResult {
  const netRevenue = price * (1 - discount);
  const result: DistributionResult = {};

  Object.entries(shares).forEach(([stakeholder, percentage]) => {
    result[stakeholder] = (netRevenue * percentage) / 100;
  });

  return result;
}
