"use client"

import { useState } from "react"
import { X } from "lucide-react"
import EVMWalletTab from "./tabs/evm-wallet-tab"
import ExchangeAPITab from "./tabs/exchange-api-tab"

interface ConnectWalletModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ConnectWalletModal({ isOpen, onClose }: ConnectWalletModalProps) {
  const [activeTab, setActiveTab] = useState<"evm" | "exchange">("evm")
  const [isConnecting, setIsConnecting] = useState(false)

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-bold text-foreground">Connect Wallet</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 border-b border-border">
          <button
            onClick={() => setActiveTab("evm")}
            className={`flex-1 px-4 py-3 font-medium transition ${
              activeTab === "evm"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            EVM Wallets
          </button>
          <button
            onClick={() => setActiveTab("exchange")}
            className={`flex-1 px-4 py-3 font-medium transition ${
              activeTab === "exchange"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Exchange APIs
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {activeTab === "evm" && <EVMWalletTab onClose={onClose} />}
          {activeTab === "exchange" && <ExchangeAPITab onClose={onClose} />}
        </div>
      </div>
    </div>
  )
}
