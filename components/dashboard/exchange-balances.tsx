"use client"

import { ExternalLink } from "lucide-react"

const exchanges = [
  {
    name: "WazirX",
    logo: "WX",
    balanceUSD: 35000,
    balanceINR: 2905000,
    assets: 3,
    lastSync: "2 minutes ago",
  },
  {
    name: "CoinDCX",
    logo: "CD",
    balanceUSD: 42000,
    balanceINR: 3486000,
    assets: 4,
    lastSync: "5 minutes ago",
  },
  {
    name: "CoinSwitch",
    logo: "CS",
    balanceUSD: 28000,
    balanceINR: 2324000,
    assets: 2,
    lastSync: "1 minute ago",
  },
  {
    name: "Self-Custody",
    logo: "SC",
    balanceUSD: 7000,
    balanceINR: 581000,
    assets: 2,
    lastSync: "Just now",
  },
]

export default function ExchangeBalances() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {exchanges.map((exchange, index) => (
        <div key={index} className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">{exchange.logo}</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{exchange.name}</h3>
                <p className="text-xs text-muted-foreground">Synced {exchange.lastSync}</p>
              </div>
            </div>
            <button className="p-2 hover:bg-muted rounded transition">
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          <div className="space-y-3">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Balance</p>
              <p className="text-2xl font-bold text-foreground">${exchange.balanceUSD.toLocaleString()}</p>
              <p className="text-sm text-muted-foreground">₹{exchange.balanceINR.toLocaleString()}</p>
            </div>

            <div className="pt-3 border-t border-border">
              <p className="text-sm text-muted-foreground">{exchange.assets} assets connected</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
