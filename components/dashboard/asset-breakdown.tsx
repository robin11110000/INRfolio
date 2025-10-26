"use client"

import { ArrowUpRight, ArrowDownLeft } from "lucide-react"

const assets = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    amount: 2.5,
    valueUSD: 105000,
    valueINR: 8715000,
    change24h: 5.2,
    allocation: 40,
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    amount: 15.8,
    valueUSD: 47400,
    valueINR: 3934200,
    change24h: 3.8,
    allocation: 28,
  },
  {
    name: "USDT",
    symbol: "USDT",
    amount: 20000,
    valueUSD: 20000,
    valueINR: 1660000,
    change24h: 0.1,
    allocation: 15,
  },
  {
    name: "Polygon",
    symbol: "MATIC",
    amount: 5000,
    valueUSD: 3600,
    valueINR: 298800,
    change24h: -2.1,
    allocation: 3,
  },
  {
    name: "Chainlink",
    symbol: "LINK",
    amount: 150,
    valueUSD: 2400,
    valueINR: 199200,
    change24h: 1.5,
    allocation: 2,
  },
  {
    name: "Other Assets",
    symbol: "MISC",
    amount: 0,
    valueUSD: 3600,
    valueINR: 298800,
    change24h: 0,
    allocation: 2,
  },
]

export default function AssetBreakdown() {
  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/30">
              <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Asset</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Amount</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Value (USD)</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Value (INR)</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">24h Change</th>
              <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Allocation</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset, index) => (
              <tr key={index} className="border-b border-border hover:bg-muted/30 transition">
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-foreground">{asset.name}</p>
                    <p className="text-sm text-muted-foreground">{asset.symbol}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-right text-foreground">{asset.amount.toLocaleString()}</td>
                <td className="px-6 py-4 text-right text-foreground">${asset.valueUSD.toLocaleString()}</td>
                <td className="px-6 py-4 text-right text-foreground">₹{asset.valueINR.toLocaleString()}</td>
                <td className="px-6 py-4 text-right">
                  <div
                    className={`flex items-center justify-end gap-1 ${asset.change24h >= 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {asset.change24h >= 0 ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownLeft className="w-4 h-4" />
                    )}
                    <span>{Math.abs(asset.change24h)}%</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${asset.allocation}%` }} />
                    </div>
                    <span className="text-sm text-muted-foreground">{asset.allocation}%</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
