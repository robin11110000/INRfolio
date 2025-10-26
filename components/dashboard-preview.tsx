"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { ChevronLeft, ChevronRight, Code2, Lock } from "lucide-react"

const chartData = [
  { date: "1", value: 4000 },
  { date: "7", value: 5200 },
  { date: "14", value: 4800 },
  { date: "21", value: 6200 },
  { date: "28", value: 7100 },
  { date: "Feb", value: 8200 },
]

export default function DashboardPreview() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="bg-card rounded-lg border border-border shadow-lg overflow-hidden">
          {/* Dashboard Header */}
          <div className="bg-card border-b border-border p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <span className="text-primary-foreground text-xs font-bold">I</span>
              </div>
              <span className="font-semibold text-foreground">INRfolio</span>
            </div>
            <div className="flex items-center gap-4 text-muted-foreground">
              <button className="hover:text-foreground transition">☰</button>
              <button className="hover:text-foreground transition">🔔</button>
              <button className="hover:text-foreground transition">⚙️</button>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Sidebar */}
              <div className="lg:col-span-1">
                <div className="space-y-2">
                  <div className="px-4 py-2 bg-primary text-primary-foreground rounded font-medium">Dashboard</div>
                  <div className="px-4 py-2 text-foreground hover:bg-muted rounded cursor-pointer">Accounts</div>
                  <div className="px-4 py-2 text-foreground hover:bg-muted rounded cursor-pointer">Balances</div>
                  <div className="px-4 py-2 text-foreground hover:bg-muted rounded cursor-pointer">History</div>
                  <div className="px-4 py-2 text-foreground hover:bg-muted rounded cursor-pointer">On-chain</div>
                  <div className="px-4 py-2 text-foreground hover:bg-muted rounded cursor-pointer">Staking</div>
                  <div className="px-4 py-2 text-foreground hover:bg-muted rounded cursor-pointer">Statistics</div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="space-y-6">
                  {/* Total Balance */}
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Total Balance</p>
                    <h2 className="text-4xl font-bold text-foreground mb-2">124,523.83 $</h2>
                    <p className="text-sm text-green-600">↑ 490.86 % (103,448.83 $)</p>
                  </div>

                  {/* Chart */}
                  <div className="h-64 bg-muted/50 rounded-lg p-4">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                        <XAxis dataKey="date" stroke="var(--color-muted-foreground)" />
                        <YAxis stroke="var(--color-muted-foreground)" />
                        <Tooltip />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#10b981"
                          fillOpacity={1}
                          fill="url(#colorValue)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Balance Cards */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-2">Exchange Balances</p>
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">Kraken</span> 5,494.88 $
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Bybit</span> 156.89 $
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Binance</span> 8.88 $
                        </p>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-2">Blockchain Balances</p>
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">Binance Smart Chain</span> 11,192.63 $
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Arbitrum One</span> 8,264.08 $
                        </p>
                        <p className="text-sm">
                          <span className="font-medium">Ethereum</span> 2,752.71 $
                        </p>
                      </div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground mb-2">Manual Balances</p>
                      <div className="space-y-1">
                        <p className="text-sm">
                          <span className="font-medium">Banks</span> 99,801.37 $
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Footer */}
          <div className="bg-muted/30 border-t border-border px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span>Open source</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Self-hosted app</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                <span>Own your data</span>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-muted rounded transition">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-muted rounded transition">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
