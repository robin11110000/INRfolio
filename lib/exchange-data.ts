/**
 * Mock exchange data for Indian crypto exchanges
 * In production, these would connect to real APIs
 */

export interface ExchangeBalance {
  exchange: "wazirx" | "coindcx" | "coinswitch"
  assets: Array<{
    symbol: string
    quantity: number
    inrValue: number
  }>
  totalINR: number
  lastSynced: number
}

/**
 * Mock WazirX portfolio data
 */
export function getMockWazirXData(): ExchangeBalance {
  return {
    exchange: "wazirx",
    assets: [
      { symbol: "BTC", quantity: 0.5, inrValue: 2500000 },
      { symbol: "ETH", quantity: 5, inrValue: 1000000 },
      { symbol: "USDT", quantity: 10000, inrValue: 830000 },
    ],
    totalINR: 4330000,
    lastSynced: Date.now(),
  }
}

/**
 * Mock CoinDCX portfolio data
 */
export function getMockCoinDCXData(): ExchangeBalance {
  return {
    exchange: "coindcx",
    assets: [
      { symbol: "BTC", quantity: 0.25, inrValue: 1250000 },
      { symbol: "SOL", quantity: 50, inrValue: 500000 },
      { symbol: "MATIC", quantity: 5000, inrValue: 300000 },
    ],
    totalINR: 2050000,
    lastSynced: Date.now(),
  }
}

/**
 * Mock CoinSwitch portfolio data
 */
export function getMockCoinSwitchData(): ExchangeBalance {
  return {
    exchange: "coinswitch",
    assets: [
      { symbol: "ETH", quantity: 2, inrValue: 400000 },
      { symbol: "DOGE", quantity: 10000, inrValue: 150000 },
      { symbol: "XRP", quantity: 1000, inrValue: 100000 },
    ],
    totalINR: 650000,
    lastSynced: Date.now(),
  }
}

/**
 * Get all exchange balances
 */
export function getAllExchangeBalances(): ExchangeBalance[] {
  return [getMockWazirXData(), getMockCoinDCXData(), getMockCoinSwitchData()]
}

/**
 * Calculate total portfolio value across all exchanges
 */
export function calculateTotalPortfolioValue(): number {
  const balances = getAllExchangeBalances()
  return balances.reduce((sum, balance) => sum + balance.totalINR, 0)
}

/**
 * Get aggregated asset holdings
 */
export function getAggregatedAssets() {
  const balances = getAllExchangeBalances()
  const assetMap = new Map<string, { quantity: number; inrValue: number }>()

  balances.forEach((balance) => {
    balance.assets.forEach((asset) => {
      const existing = assetMap.get(asset.symbol) || { quantity: 0, inrValue: 0 }
      assetMap.set(asset.symbol, {
        quantity: existing.quantity + asset.quantity,
        inrValue: existing.inrValue + asset.inrValue,
      })
    })
  })

  return Array.from(assetMap.entries()).map(([symbol, data]) => ({
    symbol,
    ...data,
  }))
}
