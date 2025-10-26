"use client"

import { AlertCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { downloadTaxReport } from "@/lib/pdf-export"

export default function TaxSummaryPreview() {
  const totalValue = 112000
  const totalValueINR = totalValue * 83
  const flatTax = totalValueINR * 0.3
  const tdsPerWallet = totalValueINR * 0.01
  const totalTaxLiability = flatTax + tdsPerWallet

  const handleExportPDF = () => {
    const reportData = {
      year: new Date().getFullYear(),
      totalPortfolioValue: totalValueINR,
      totalProfit: totalValueINR * 0.5,
      totalLoss: totalValueINR * 0.1,
      netProfit: totalValueINR * 0.4,
      flatTax,
      tdsAmount: tdsPerWallet,
      totalTaxLiability,
      exchangeBreakdown: [
        { name: "WazirX", balance: 2905000, tax: 2905000 * 0.31 },
        { name: "CoinDCX", balance: 3486000, tax: 3486000 * 0.31 },
        { name: "CoinSwitch", balance: 2324000, tax: 2324000 * 0.31 },
        { name: "Self-Custody", balance: 581000, tax: 581000 * 0.31 },
      ],
      generatedDate: new Date().toLocaleDateString("en-IN"),
    }
    downloadTaxReport(reportData)
  }

  return (
    <div className="space-y-6">
      {/* Tax Warning */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex gap-3">
        <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-orange-900">Tax Compliance Notice</h3>
          <p className="text-sm text-orange-800 mt-1">
            As per Indian tax law, crypto holdings are taxed at 30% flat rate. This is a preview only. Consult a tax
            professional for accurate calculations.
          </p>
        </div>
      </div>

      {/* Tax Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-card rounded-lg border border-border p-6">
          <p className="text-sm text-muted-foreground mb-2">Portfolio Value (INR)</p>
          <p className="text-3xl font-bold text-foreground">₹{totalValueINR.toLocaleString()}</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <p className="text-sm text-muted-foreground mb-2">30% Flat Tax</p>
          <p className="text-3xl font-bold text-orange-600">₹{flatTax.toLocaleString()}</p>
        </div>

        <div className="bg-card rounded-lg border border-border p-6">
          <p className="text-sm text-muted-foreground mb-2">1% TDS (Annual)</p>
          <p className="text-3xl font-bold text-orange-600">₹{tdsPerWallet.toLocaleString()}</p>
        </div>
      </div>

      {/* Total Tax Liability */}
      <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-lg p-6">
        <p className="text-sm text-muted-foreground mb-2">Total Tax Liability (Estimated)</p>
        <p className="text-4xl font-bold text-orange-600 mb-4">₹{totalTaxLiability.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground mb-6">
          This includes 30% flat tax on holdings and 1% TDS per wallet annually. Actual liability may vary based on
          transaction history.
        </p>
        <Button onClick={handleExportPDF} className="bg-primary hover:bg-primary/90 gap-2">
          <Download className="w-4 h-4" />
          Export Tax Summary (PDF)
        </Button>
      </div>

      {/* Tax Breakdown Table */}
      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">Tax Breakdown by Exchange</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Exchange</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Balance (INR)</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">30% Tax</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">1% TDS</th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-foreground">Total Tax</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "WazirX", balance: 2905000 },
                { name: "CoinDCX", balance: 3486000 },
                { name: "CoinSwitch", balance: 2324000 },
                { name: "Self-Custody", balance: 581000 },
              ].map((exchange, index) => (
                <tr key={index} className="border-b border-border hover:bg-muted/30 transition">
                  <td className="px-6 py-4 font-medium text-foreground">{exchange.name}</td>
                  <td className="px-6 py-4 text-right text-foreground">₹{exchange.balance.toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-orange-600">₹{(exchange.balance * 0.3).toLocaleString()}</td>
                  <td className="px-6 py-4 text-right text-orange-600">
                    ₹{(exchange.balance * 0.01).toLocaleString()}
                  </td>
                  <td className="px-6 py-4 text-right font-semibold text-orange-600">
                    ₹{(exchange.balance * 0.31).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
