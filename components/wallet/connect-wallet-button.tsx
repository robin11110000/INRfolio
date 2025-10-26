"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import ConnectWalletModal from "./connect-wallet-modal"
import { useWallet } from "@/lib/wallet-context"

export default function ConnectWalletButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { getConnectedWallets } = useWallet()
  const connected = getConnectedWallets()

  if (connected.length > 0) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 px-3 py-2 bg-primary/10 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-sm font-medium text-primary">{connected.length} Connected</span>
        </div>
        <Button variant="outline" size="sm" onClick={() => setIsOpen(true)}>
          Manage
        </Button>
      </div>
    )
  }

  return (
    <>
      <Button size="sm" className="bg-primary hover:bg-primary/90" onClick={() => setIsOpen(true)}>
        <Wallet className="w-4 h-4 mr-2" />
        Connect Wallet
      </Button>
      <ConnectWalletModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}
