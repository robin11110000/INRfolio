"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import PortfolioOverview from "@/components/dashboard/portfolio-overview"
import AssetBreakdown from "@/components/dashboard/asset-breakdown"
import ExchangeBalances from "@/components/dashboard/exchange-balances"
import TaxSummaryPreview from "@/components/dashboard/tax-summary-preview"
import ComplianceGuide from "@/components/dashboard/compliance-guide"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">Portfolio Dashboard</h1>
          <p className="text-muted-foreground">Track your crypto holdings and tax obligations</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-4 mb-8 border-b border-border overflow-x-auto">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 font-medium transition whitespace-nowrap ${
              activeTab === "overview"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("assets")}
            className={`px-4 py-2 font-medium transition whitespace-nowrap ${
              activeTab === "assets"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Assets
          </button>
          <button
            onClick={() => setActiveTab("exchanges")}
            className={`px-4 py-2 font-medium transition whitespace-nowrap ${
              activeTab === "exchanges"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Exchanges
          </button>
          <button
            onClick={() => setActiveTab("tax")}
            className={`px-4 py-2 font-medium transition whitespace-nowrap ${
              activeTab === "tax"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Tax Summary
          </button>
          <button
            onClick={() => setActiveTab("compliance")}
            className={`px-4 py-2 font-medium transition whitespace-nowrap ${
              activeTab === "compliance"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Compliance
          </button>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === "overview" && <PortfolioOverview />}
          {activeTab === "assets" && <AssetBreakdown />}
          {activeTab === "exchanges" && <ExchangeBalances />}
          {activeTab === "tax" && <TaxSummaryPreview />}
          {activeTab === "compliance" && <ComplianceGuide />}
        </div>
      </div>

      <Footer />
    </main>
  )
}
