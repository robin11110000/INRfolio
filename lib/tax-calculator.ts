/**
 * INRfolio Tax Calculator
 * Implements Indian crypto tax rules:
 * - 30% flat tax on crypto profits
 * - 1% TDS per wallet/year
 * - GST flag for service fees
 */

export interface TaxCalculation {
  totalProfit: number
  flatTax: number
  tdsPerWallet: number
  totalTDS: number
  gstOnFees: number
  totalTaxLiability: number
  effectiveTaxRate: number
}

export interface PortfolioAsset {
  symbol: string
  quantity: number
  costBasis: number
  currentValue: number
  exchange: "wazirx" | "coindcx" | "coinswitch" | "self-custody"
}

export interface YearlyTaxSummary {
  year: number
  totalProfit: number
  totalLoss: number
  netProfit: number
  taxCalculation: TaxCalculation
  assetBreakdown: Record<string, PortfolioAsset>
}

/**
 * Calculate Indian crypto tax liability
 * 30% flat tax on profits + 1% TDS per wallet
 */
export function calculateIndianCryptoTax(
  totalProfit: number,
  walletCount: number,
  gstApplicable = false,
): TaxCalculation {
  // 30% flat tax on profits
  const flatTax = totalProfit > 0 ? totalProfit * 0.3 : 0

  // 1% TDS per wallet per year
  const tdsPerWallet = totalProfit > 0 ? totalProfit * 0.01 : 0
  const totalTDS = tdsPerWallet * walletCount

  // GST on service fees (18% if applicable)
  const gstOnFees = gstApplicable ? flatTax * 0.18 : 0

  // Total tax liability
  const totalTaxLiability = flatTax + totalTDS + gstOnFees

  // Effective tax rate
  const effectiveTaxRate = totalProfit > 0 ? (totalTaxLiability / totalProfit) * 100 : 0

  return {
    totalProfit,
    flatTax,
    tdsPerWallet,
    totalTDS,
    gstOnFees,
    totalTaxLiability,
    effectiveTaxRate,
  }
}

/**
 * Calculate yearly P&L summary
 */
export function calculateYearlyPnL(assets: PortfolioAsset[], year: number, walletCount: number): YearlyTaxSummary {
  let totalProfit = 0
  let totalLoss = 0

  const assetBreakdown: Record<string, PortfolioAsset> = {}

  assets.forEach((asset) => {
    const profit = asset.currentValue - asset.costBasis
    if (profit > 0) {
      totalProfit += profit
    } else {
      totalLoss += Math.abs(profit)
    }
    assetBreakdown[asset.symbol] = asset
  })

  const netProfit = totalProfit - totalLoss
  const taxCalculation = calculateIndianCryptoTax(netProfit, walletCount)

  return {
    year,
    totalProfit,
    totalLoss,
    netProfit,
    taxCalculation,
    assetBreakdown,
  }
}

/**
 * Format currency for INR display
 */
export function formatINR(value: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)
}

/**
 * Format currency for USD display
 */
export function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(value)
}
