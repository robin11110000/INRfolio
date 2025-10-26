import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { WalletProvider } from "@/lib/wallet-context"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "INRfolio - Privacy-First Crypto Portfolio & Tax Tracker for India",
  description:
    "Track your crypto portfolio in INR with Indian tax compliance. Local storage, zero data leaks. Support for WazirX, CoinDCX, CoinSwitch.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <WalletProvider>
          {children}
          <Analytics />
        </WalletProvider>
      </body>
    </html>
  )
}
