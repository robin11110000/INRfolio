"use client"

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, Wallet, DollarSign, AlertCircle } from "lucide-react"

const chartData = [
  { date: "Jan 1", value: 50000 },
  { date: "Jan 8", value: 62000 },
  { date: "Jan 15", value: 58000 },
  { date: "Jan 22", value: 75000 },
  { date: "Jan 29", value: 82000 },
  { date: "Feb 5", value: 95000 },
  { date: "Feb 12", value: 112000 },
]

const assetDistribution = [
  { name: "Bitcoin", value: 45000, color: "#f7931a" },
  { name: "Ethereum", value: 35000, color: "#627eea" },
  { name: "Stablecoins", value: 20000, color: "#26a17b" },
  { name: "Altcoins", value: 12000, color: "#8b5cf6" },
]

export default function PortfolioOverview() {
  const totalValue = 112000
  const totalValueINR = totalValue * 83 // Approximate INR conversion
  const dayChange = 17000
  const dayChangePercent = 15.2

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Total Portfolio Value</h3>
            <Wallet className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-foreground">${totalValue.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground mt-2">₹{totalValueINR.toLocaleString()}</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">24h Change</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-green-600">+${dayChange.toLocaleString()}</p>
          <p className="text-sm text-green-600 mt-2">+{dayChangePercent}%</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Holdings</h3>
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
          <p className="text-2xl font-bold text-foreground">4</p>
          <p className="text-sm text-muted-foreground mt-2">Asset types</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Tax Liability</h3>
            <AlertCircle className="w-5 h-5 text-orange-600" />
          </div>
          <p className="text-2xl font-bold text-orange-600">₹{(totalValueINR * 0.3).toLocaleString()}</p>
          <p className="text-sm text-muted-foreground mt-2">30% flat tax</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Portfolio Growth Chart */}
        <div className="lg:col-span-2 bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Portfolio Growth</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
                <XAxis dataKey="date" stroke="var(--color-muted-foreground)" />
                <YAxis stroke="var(--color-muted-foreground)" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#3b82f6" fillOpacity={1} fill="url(#colorValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Asset Distribution */}
        <div className="bg-card rounded-lg border border-border p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Asset Distribution</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={assetDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {assetDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
