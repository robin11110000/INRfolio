/**
 * Privacy-first local storage utilities
 * All data is stored locally - no cloud sync, no third-party leaks
 */

export interface StoredPortfolio {
  id: string
  name: string
  assets: Array<{
    symbol: string
    quantity: number
    costBasis: number
    exchange: string
  }>
  lastUpdated: number
}

export interface StoredSettings {
  currency: "INR" | "USD"
  gstApplicable: boolean
  privacyMode: boolean
  theme: "light" | "dark"
}

const STORAGE_KEYS = {
  PORTFOLIO: "inrfolio_portfolio",
  SETTINGS: "inrfolio_settings",
  EXCHANGE_CREDENTIALS: "inrfolio_exchange_creds",
  TAX_HISTORY: "inrfolio_tax_history",
}

/**
 * Save portfolio data locally
 */
export function savePortfolio(portfolio: StoredPortfolio): void {
  try {
    const existing = getPortfolios()
    const index = existing.findIndex((p) => p.id === portfolio.id)
    if (index >= 0) {
      existing[index] = portfolio
    } else {
      existing.push(portfolio)
    }
    localStorage.setItem(STORAGE_KEYS.PORTFOLIO, JSON.stringify(existing))
  } catch (error) {
    console.error("[v0] Failed to save portfolio:", error)
  }
}

/**
 * Get all portfolios from local storage
 */
export function getPortfolios(): StoredPortfolio[] {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.PORTFOLIO)
    return data ? JSON.parse(data) : []
  } catch (error) {
    console.error("[v0] Failed to get portfolios:", error)
    return []
  }
}

/**
 * Get single portfolio by ID
 */
export function getPortfolio(id: string): StoredPortfolio | null {
  const portfolios = getPortfolios()
  return portfolios.find((p) => p.id === id) || null
}

/**
 * Delete portfolio
 */
export function deletePortfolio(id: string): void {
  try {
    const existing = getPortfolios()
    const filtered = existing.filter((p) => p.id !== id)
    localStorage.setItem(STORAGE_KEYS.PORTFOLIO, JSON.stringify(filtered))
  } catch (error) {
    console.error("[v0] Failed to delete portfolio:", error)
  }
}

/**
 * Save settings
 */
export function saveSettings(settings: StoredSettings): void {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings))
  } catch (error) {
    console.error("[v0] Failed to save settings:", error)
  }
}

/**
 * Get settings
 */
export function getSettings(): StoredSettings {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SETTINGS)
    return data
      ? JSON.parse(data)
      : {
          currency: "INR",
          gstApplicable: false,
          privacyMode: true,
          theme: "light",
        }
  } catch (error) {
    console.error("[v0] Failed to get settings:", error)
    return {
      currency: "INR",
      gstApplicable: false,
      privacyMode: true,
      theme: "light",
    }
  }
}

/**
 * Clear all data (for privacy/reset)
 */
export function clearAllData(): void {
  try {
    Object.values(STORAGE_KEYS).forEach((key) => {
      localStorage.removeItem(key)
    })
  } catch (error) {
    console.error("[v0] Failed to clear data:", error)
  }
}
