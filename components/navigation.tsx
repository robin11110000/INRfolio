"use client"
import { Menu, Lock } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import ConnectWalletButton from "@/components/wallet/connect-wallet-button"
import { useWallet } from "@/lib/wallet-context"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { getConnectedWallets } = useWallet()

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">INRfolio</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/dashboard" className="text-foreground hover:text-primary transition">
              Dashboard
            </Link>
            <a href="/dashboard?tab=tax" className="text-foreground hover:text-primary transition">
              Tax Summary
            </a>
            <a href="/dashboard?tab=compliance" className="text-foreground hover:text-primary transition">
              Compliance
            </a>
            <a href="#" className="text-foreground hover:text-primary transition">
              Docs
            </a>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <ConnectWalletButton />
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </nav>
  )
}
