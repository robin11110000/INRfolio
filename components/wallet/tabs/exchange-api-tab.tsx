"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2, Eye, EyeOff } from "lucide-react"
import { useWallet } from "@/lib/wallet-context"

interface ExchangeAPITabProps {
  onClose: () => void
}

export default function ExchangeAPITab({ onClose }: ExchangeAPITabProps) {
  const [activeExchange, setActiveExchange] = useState<"wazirx" | "coindcx" | "coinswitch" | null>(null)
  const [apiKey, setApiKey] = useState("")
  const [apiSecret, setApiSecret] = useState("")
  const [showSecret, setShowSecret] = useState(false)
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { connectWallet } = useWallet()

  const handleConnect = async () => {
    if (!apiKey.trim()) {
      setError("API Key is required")
      return
    }

    if (activeExchange !== "coinswitch" && !apiSecret.trim()) {
      setError("API Secret is required")
      return
    }

    try {
      setIsConnecting(true)
      setError(null)

      const exchangeNames = {
        wazirx: "WazirX",
        coindcx: "CoinDCX",
        coinswitch: "CoinSwitch",
      }

      connectWallet({
        id: `${activeExchange}-${Date.now()}`,
        type: activeExchange as any,
        apiKey,
        apiSecret: activeExchange === "coinswitch" ? undefined : apiSecret,
        name: `${exchangeNames[activeExchange]} API`,
        connected: true,
        lastConnected: Date.now(),
      })

      setApiKey("")
      setApiSecret("")
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to connect exchange")
      console.error("[v0] Exchange connection error:", err)
    } finally {
      setIsConnecting(false)
    }
  }

  if (!activeExchange) {
    return (
      <div className="space-y-3">
        <p className="text-sm text-muted-foreground">
          Connect your Indian exchange API keys to import your portfolio automatically.
        </p>

        <div className="space-y-2">
          <button
            onClick={() => setActiveExchange("wazirx")}
            className="w-full p-3 border border-border rounded-lg hover:bg-muted transition text-left"
          >
            <div className="font-semibold text-foreground">WazirX</div>
            <div className="text-xs text-muted-foreground">India's largest crypto exchange</div>
          </button>

          <button
            onClick={() => setActiveExchange("coindcx")}
            className="w-full p-3 border border-border rounded-lg hover:bg-muted transition text-left"
          >
            <div className="font-semibold text-foreground">CoinDCX</div>
            <div className="text-xs text-muted-foreground">Leading Indian crypto platform</div>
          </button>

          <button
            onClick={() => setActiveExchange("coinswitch")}
            className="w-full p-3 border border-border rounded-lg hover:bg-muted transition text-left"
          >
            <div className="font-semibold text-foreground">CoinSwitch</div>
            <div className="text-xs text-muted-foreground">Popular crypto exchange in India</div>
          </button>
        </div>

        <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-xs text-muted-foreground">
            <strong>Secure:</strong> API keys are encrypted and stored locally. Never shared with third parties.
          </p>
        </div>
      </div>
    )
  }

  const exchangeNames = {
    wazirx: "WazirX",
    coindcx: "CoinDCX",
    coinswitch: "CoinSwitch",
  }

  return (
    <div className="space-y-4">
      <button onClick={() => setActiveExchange(null)} className="text-sm text-primary hover:underline">
        ← Back to exchanges
      </button>

      <div>
        <h3 className="font-semibold text-foreground mb-2">Connect {exchangeNames[activeExchange]}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Enter your API credentials. Your keys are stored locally and never sent to external servers.
        </p>
      </div>

      {error && <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-lg">{error}</div>}

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">API Key</label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter your API key"
            className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        {activeExchange !== "coinswitch" && (
          <div>
            <label className="block text-sm font-medium text-foreground mb-1">API Secret</label>
            <div className="relative">
              <input
                type={showSecret ? "text" : "password"}
                value={apiSecret}
                onChange={(e) => setApiSecret(e.target.value)}
                placeholder="Enter your API secret"
                className="w-full px-3 py-2 border border-border rounded-lg bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                onClick={() => setShowSecret(!showSecret)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showSecret ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <Button onClick={() => setActiveExchange(null)} variant="outline" className="flex-1" disabled={isConnecting}>
          Cancel
        </Button>
        <Button onClick={handleConnect} className="flex-1 bg-primary hover:bg-primary/90" disabled={isConnecting}>
          {isConnecting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
          Connect
        </Button>
      </div>

      <div className="p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
        <p className="text-xs text-yellow-700 dark:text-yellow-300">
          <strong>How to get API keys:</strong> Visit your exchange settings and create API keys with read-only
          permissions. Never share your secret key.
        </p>
      </div>
    </div>
  )
}
