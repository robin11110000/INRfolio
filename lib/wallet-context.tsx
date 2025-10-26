"use client"

import type React from "react"
import { createContext, useContext, useState, useCallback, useEffect } from "react"

export interface ConnectedWallet {
  id: string
  type: "metamask" | "walletconnect" | "wazirx" | "coindcx" | "coinswitch"
  address?: string
  apiKey?: string
  apiSecret?: string
  name: string
  connected: boolean
  lastConnected: number
}

interface WalletContextType {
  wallets: ConnectedWallet[]
  connectWallet: (wallet: ConnectedWallet) => void
  disconnectWallet: (id: string) => void
  getConnectedWallets: () => ConnectedWallet[]
  isWalletConnected: (type: string) => boolean
}

const WalletContext = createContext<WalletContextType | undefined>(undefined)

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [wallets, setWallets] = useState<ConnectedWallet[]>([])

  // Load wallets from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem("inrfolio_wallets")
      if (stored) {
        setWallets(JSON.parse(stored))
      }
    } catch (error) {
      console.error("[v0] Failed to load wallets:", error)
    }
  }, [])

  const connectWallet = useCallback((wallet: ConnectedWallet) => {
    setWallets((prev) => {
      const existing = prev.find((w) => w.id === wallet.id)
      const updated = existing ? prev.map((w) => (w.id === wallet.id ? wallet : w)) : [...prev, wallet]
      localStorage.setItem("inrfolio_wallets", JSON.stringify(updated))
      return updated
    })
  }, [])

  const disconnectWallet = useCallback((id: string) => {
    setWallets((prev) => {
      const updated = prev.filter((w) => w.id !== id)
      localStorage.setItem("inrfolio_wallets", JSON.stringify(updated))
      return updated
    })
  }, [])

  const getConnectedWallets = useCallback(() => {
    return wallets.filter((w) => w.connected)
  }, [wallets])

  const isWalletConnected = useCallback(
    (type: string) => {
      return wallets.some((w) => w.type === type && w.connected)
    },
    [wallets],
  )

  return (
    <WalletContext.Provider
      value={{ wallets, connectWallet, disconnectWallet, getConnectedWallets, isWalletConnected }}
    >
      {children}
    </WalletContext.Provider>
  )
}

export function useWallet() {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error("useWallet must be used within WalletProvider")
  }
  return context
}
