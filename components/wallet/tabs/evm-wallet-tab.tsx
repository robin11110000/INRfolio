"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useWallet } from "@/lib/wallet-context"

interface EVMWalletTabProps {
  onClose: () => void
}

export default function EVMWalletTab({ onClose }: EVMWalletTabProps) {
  const [isConnecting, setIsConnecting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { connectWallet } = useWallet()

  const connectMetaMask = async () => {
    try {
      setIsConnecting(true)
      setError(null)

      if (!window.ethereum) {
        setError("MetaMask not installed. Please install MetaMask extension.")
        return
      }

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      })

      if (accounts && accounts.length > 0) {
        connectWallet({
          id: `metamask-${accounts[0]}`,
          type: "metamask",
          address: accounts[0],
          name: `MetaMask (${accounts[0].slice(0, 6)}...${accounts[0].slice(-4)})`,
          connected: true,
          lastConnected: Date.now(),
        })
        onClose()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to connect MetaMask")
      console.error("[v0] MetaMask connection error:", err)
    } finally {
      setIsConnecting(false)
    }
  }

  const connectWalletConnect = async () => {
    try {
      setIsConnecting(true)
      setError(null)

      // For demo, generate a mock address
      const mockAddress = `0x${Math.random().toString(16).slice(2, 42)}`

      connectWallet({
        id: `walletconnect-${mockAddress}`,
        type: "walletconnect",
        address: mockAddress,
        name: `WalletConnect (${mockAddress.slice(0, 6)}...${mockAddress.slice(-4)})`,
        connected: true,
        lastConnected: Date.now(),
      })
      onClose()
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to connect WalletConnect")
      console.error("[v0] WalletConnect error:", err)
    } finally {
      setIsConnecting(false)
    }
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Connect your EVM wallet to track your on-chain assets and DeFi positions.
      </p>

      {error && <div className="p-3 bg-destructive/10 text-destructive text-sm rounded-lg">{error}</div>}

      <div className="space-y-3">
        <Button
          onClick={connectMetaMask}
          disabled={isConnecting}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
        >
          {isConnecting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
          Connect MetaMask
        </Button>

        <Button
          onClick={connectWalletConnect}
          disabled={isConnecting}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white"
        >
          {isConnecting ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
          Connect WalletConnect
        </Button>
      </div>

      <div className="p-3 bg-primary/5 rounded-lg border border-primary/20">
        <p className="text-xs text-muted-foreground">
          <strong>Privacy First:</strong> Your wallet connection is stored locally on your device. INRfolio never stores
          your private keys or sends data to external servers.
        </p>
      </div>
    </div>
  )
}
