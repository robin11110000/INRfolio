"use client"

import { useState, useEffect } from "react"
import { aggregatePortfolioData, type ExchangePortfolio } from "@/lib/exchange-apis"

export function usePortfolio() {
  const [portfolios, setPortfolios] = useState<ExchangePortfolio[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadPortfolio = async () => {
      try {
        setLoading(true)
        // For demo, we'll use mock data from localStorage
        const storedPortfolios = localStorage.getItem("inrfolio_portfolios")
        if (storedPortfolios) {
          setPortfolios(JSON.parse(storedPortfolios))
        } else {
          // Load mock data
          const mockPortfolios = await aggregatePortfolioData()
          setPortfolios(mockPortfolios)
          localStorage.setItem("inrfolio_portfolios", JSON.stringify(mockPortfolios))
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load portfolio")
        console.error("[v0] Portfolio loading error:", err)
      } finally {
        setLoading(false)
      }
    }

    loadPortfolio()
  }, [])

  const refreshPortfolio = async () => {
    try {
      setLoading(true)
      const mockPortfolios = await aggregatePortfolioData()
      setPortfolios(mockPortfolios)
      localStorage.setItem("inrfolio_portfolios", JSON.stringify(mockPortfolios))
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to refresh portfolio")
    } finally {
      setLoading(false)
    }
  }

  const getTotalValue = () => {
    return portfolios.reduce((sum, p) => sum + p.totalValueINR, 0)
  }

  const getAllAssets = () => {
    return portfolios.flatMap((p) => p.assets)
  }

  return {
    portfolios,
    loading,
    error,
    refreshPortfolio,
    getTotalValue,
    getAllAssets,
  }
}
