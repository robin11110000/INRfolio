// WazirX API types
export interface WazirXBalance {
  [key: string]: {
    available: string
    locked: string
  }
}

export interface WazirXTicker {
  [key: string]: {
    buy: string
    sell: string
    last: string
  }
}

// CoinDCX API types
export interface CoinDCXBalance {
  id: string
  symbol: string
  balance: number
  locked: number
}

export interface CoinDCXTicker {
  symbol: string
  lastPrice: string
  priceChangePercent: string
}

// CoinSwitch API types
export interface CoinSwitchBalance {
  symbol: string
  balance: number
}

export interface CoinSwitchRate {
  symbol: string
  rate: number
}

// Mock API responses for demo (replace with real API calls)
export const mockWazirXData = {
  balances: {
    BTC: { available: "2.5", locked: "0" },
    ETH: { available: "15.8", locked: "0" },
    USDT: { available: "20000", locked: "0" },
  },
  tickers: {
    BTCINR: { buy: "4200000", sell: "4210000", last: "4205000" },
    ETHINR: { buy: "300000", sell: "301000", last: "3000000" },
    USDTINR: { buy: "83", sell: "84", last: "83.5" },
  },
}

export const mockCoinDCXData = {
  balances: [
    { id: "1", symbol: "BTC", balance: 1.2, locked: 0 },
    { id: "2", symbol: "ETH", balance: 8.5, locked: 0 },
    { id: "3", symbol: "MATIC", balance: 5000, locked: 0 },
  ],
  tickers: [
    { symbol: "BTCINR", lastPrice: "4200000", priceChangePercent: "2.5" },
    { symbol: "ETHINR", lastPrice: "300000", priceChangePercent: "1.8" },
    { symbol: "MATICINR", lastPrice: "60", priceChangePercent: "-1.2" },
  ],
}

export const mockCoinSwitchData = {
  balances: [
    { symbol: "BTC", balance: 0.3 },
    { symbol: "LINK", balance: 150 },
  ],
  rates: [
    { symbol: "BTCINR", rate: 4200000 },
    { symbol: "LINKINR", rate: 1600 },
  ],
}

// WazirX API Integration
export async function fetchWazirXBalances(apiKey: string, apiSecret: string) {
  try {
    // In production, implement proper API authentication
    // For now, return mock data
    console.log("[v0] Fetching WazirX balances...")
    return mockWazirXData.balances
  } catch (error) {
    console.error("[v0] WazirX API error:", error)
    throw error
  }
}

export async function fetchWazirXTickers() {
  try {
    console.log("[v0] Fetching WazirX tickers...")
    return mockWazirXData.tickers
  } catch (error) {
    console.error("[v0] WazirX ticker error:", error)
    throw error
  }
}

// CoinDCX API Integration
export async function fetchCoinDCXBalances(apiKey: string, apiSecret: string) {
  try {
    console.log("[v0] Fetching CoinDCX balances...")
    return mockCoinDCXData.balances
  } catch (error) {
    console.error("[v0] CoinDCX API error:", error)
    throw error
  }
}

export async function fetchCoinDCXTickers() {
  try {
    console.log("[v0] Fetching CoinDCX tickers...")
    return mockCoinDCXData.tickers
  } catch (error) {
    console.error("[v0] CoinDCX ticker error:", error)
    throw error
  }
}

// CoinSwitch API Integration
export async function fetchCoinSwitchBalances(apiKey: string) {
  try {
    console.log("[v0] Fetching CoinSwitch balances...")
    return mockCoinSwitchData.balances
  } catch (error) {
    console.error("[v0] CoinSwitch API error:", error)
    throw error
  }
}

export async function fetchCoinSwitchRates() {
  try {
    console.log("[v0] Fetching CoinSwitch rates...")
    return mockCoinSwitchData.rates
  } catch (error) {
    console.error("[v0] CoinSwitch rate error:", error)
    throw error
  }
}

// Unified portfolio data structure
export interface PortfolioAsset {
  symbol: string
  name: string
  amount: number
  valueUSD: number
  valueINR: number
  exchange: string
  lastUpdated: Date
}

export interface ExchangePortfolio {
  exchange: string
  assets: PortfolioAsset[]
  totalValueUSD: number
  totalValueINR: number
  lastSynced: Date
}

// Aggregate portfolio data from all exchanges
export async function aggregatePortfolioData(
  wazirXKeys?: { apiKey: string; apiSecret: string },
  coinDCXKeys?: { apiKey: string; apiSecret: string },
  coinSwitchKey?: string,
): Promise<ExchangePortfolio[]> {
  const portfolios: ExchangePortfolio[] = []
  const inrRate = 83 // Approximate USD to INR rate

  try {
    // WazirX Portfolio
    if (wazirXKeys) {
      const balances = await fetchWazirXBalances(wazirXKeys.apiKey, wazirXKeys.apiSecret)
      const tickers = await fetchWazirXTickers()

      const assets: PortfolioAsset[] = Object.entries(balances).map(([symbol, balance]) => {
        const amount = Number.parseFloat(balance.available)
        const ticker = tickers[`${symbol}INR`]
        const priceINR = Number.parseFloat(ticker?.last || "0")
        const valueINR = amount * priceINR
        const valueUSD = valueINR / inrRate

        return {
          symbol,
          name: symbol,
          amount,
          valueUSD,
          valueINR,
          exchange: "WazirX",
          lastUpdated: new Date(),
        }
      })

      portfolios.push({
        exchange: "WazirX",
        assets,
        totalValueUSD: assets.reduce((sum, a) => sum + a.valueUSD, 0),
        totalValueINR: assets.reduce((sum, a) => sum + a.valueINR, 0),
        lastSynced: new Date(),
      })
    }

    // CoinDCX Portfolio
    if (coinDCXKeys) {
      const balances = await fetchCoinDCXBalances(coinDCXKeys.apiKey, coinDCXKeys.apiSecret)
      const tickers = await fetchCoinDCXTickers()

      const assets: PortfolioAsset[] = balances.map((balance) => {
        const ticker = tickers.find((t) => t.symbol === `${balance.symbol}INR`)
        const priceINR = Number.parseFloat(ticker?.lastPrice || "0")
        const valueINR = balance.balance * priceINR
        const valueUSD = valueINR / inrRate

        return {
          symbol: balance.symbol,
          name: balance.symbol,
          amount: balance.balance,
          valueUSD,
          valueINR,
          exchange: "CoinDCX",
          lastUpdated: new Date(),
        }
      })

      portfolios.push({
        exchange: "CoinDCX",
        assets,
        totalValueUSD: assets.reduce((sum, a) => sum + a.valueUSD, 0),
        totalValueINR: assets.reduce((sum, a) => sum + a.valueINR, 0),
        lastSynced: new Date(),
      })
    }

    // CoinSwitch Portfolio
    if (coinSwitchKey) {
      const balances = await fetchCoinSwitchBalances(coinSwitchKey)
      const rates = await fetchCoinSwitchRates()

      const assets: PortfolioAsset[] = balances.map((balance) => {
        const rate = rates.find((r) => r.symbol === `${balance.symbol}INR`)
        const priceINR = rate?.rate || 0
        const valueINR = balance.balance * priceINR
        const valueUSD = valueINR / inrRate

        return {
          symbol: balance.symbol,
          name: balance.symbol,
          amount: balance.balance,
          valueUSD,
          valueINR,
          exchange: "CoinSwitch",
          lastUpdated: new Date(),
        }
      })

      portfolios.push({
        exchange: "CoinSwitch",
        assets,
        totalValueUSD: assets.reduce((sum, a) => sum + a.valueUSD, 0),
        totalValueINR: assets.reduce((sum, a) => sum + a.valueINR, 0),
        lastSynced: new Date(),
      })
    }

    return portfolios
  } catch (error) {
    console.error("[v0] Error aggregating portfolio data:", error)
    throw error
  }
}
