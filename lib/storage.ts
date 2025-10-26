export interface StoredExchangeCredentials {
  exchange: string
  apiKey: string
  apiSecret?: string
  encryptionKey?: string
  lastUpdated: Date
}

export interface StoredPortfolioData {
  portfolios: any[]
  lastSynced: Date
  version: number
}

// Store exchange credentials locally (encrypted in production)
export function storeExchangeCredentials(credentials: StoredExchangeCredentials) {
  try {
    const stored = localStorage.getItem("inrfolio_credentials") || "[]"
    const allCredentials = JSON.parse(stored)
    const index = allCredentials.findIndex((c: any) => c.exchange === credentials.exchange)

    if (index >= 0) {
      allCredentials[index] = credentials
    } else {
      allCredentials.push(credentials)
    }

    localStorage.setItem("inrfolio_credentials", JSON.stringify(allCredentials))
    console.log("[v0] Credentials stored for", credentials.exchange)
  } catch (error) {
    console.error("[v0] Error storing credentials:", error)
    throw error
  }
}

// Retrieve exchange credentials
export function getExchangeCredentials(exchange: string): StoredExchangeCredentials | null {
  try {
    const stored = localStorage.getItem("inrfolio_credentials") || "[]"
    const allCredentials = JSON.parse(stored)
    return allCredentials.find((c: any) => c.exchange === exchange) || null
  } catch (error) {
    console.error("[v0] Error retrieving credentials:", error)
    return null
  }
}

// Clear all stored data (for privacy)
export function clearAllData() {
  try {
    localStorage.removeItem("inrfolio_credentials")
    localStorage.removeItem("inrfolio_portfolios")
    localStorage.removeItem("inrfolio_tax_data")
    console.log("[v0] All local data cleared")
  } catch (error) {
    console.error("[v0] Error clearing data:", error)
    throw error
  }
}

// Export data for backup
export function exportData() {
  try {
    const credentials = localStorage.getItem("inrfolio_credentials")
    const portfolios = localStorage.getItem("inrfolio_portfolios")
    const taxData = localStorage.getItem("inrfolio_tax_data")

    return {
      credentials: credentials ? JSON.parse(credentials) : [],
      portfolios: portfolios ? JSON.parse(portfolios) : [],
      taxData: taxData ? JSON.parse(taxData) : [],
      exportedAt: new Date().toISOString(),
    }
  } catch (error) {
    console.error("[v0] Error exporting data:", error)
    throw error
  }
}
