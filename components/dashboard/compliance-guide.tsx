"use client"

import { AlertCircle, CheckCircle, BookOpen } from "lucide-react"

export default function ComplianceGuide() {
  return (
    <div className="space-y-6">
      {/* Privacy Badge */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex gap-3">
        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-green-900">Privacy-First Design</h3>
          <p className="text-sm text-green-800 mt-1">
            All your data is stored locally on your device. INRfolio never sends your portfolio data to any server or
            third party.
          </p>
        </div>
      </div>

      {/* Madras High Court Ruling */}
      <div className="bg-card rounded-lg border border-border p-6">
        <div className="flex items-start gap-3 mb-4">
          <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="text-2xl font-bold text-foreground">Madras High Court Ruling: Crypto as Property</h2>
            <p className="text-sm text-muted-foreground mt-1">Understanding the legal framework for crypto in India</p>
          </div>
        </div>

        <div className="space-y-4 mt-6">
          <div>
            <h3 className="font-semibold text-foreground mb-2">What the Ruling Says</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              In 2023, the Madras High Court clarified that cryptocurrency holdings are classified as "property" under
              Indian law. This means:
            </p>
            <ul className="list-disc list-inside text-sm text-muted-foreground mt-2 space-y-1">
              <li>Crypto is subject to income tax on gains (30% flat rate)</li>
              <li>Holdings are considered assets for wealth tax purposes</li>
              <li>Transfers between wallets may trigger capital gains tax</li>
              <li>Inheritance of crypto follows property succession laws</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <h3 className="font-semibold text-blue-900 mb-2">Key Implication</h3>
            <p className="text-sm text-blue-800">
              Crypto is NOT banned in India. It's treated as property and subject to standard tax rules. You must report
              all gains and holdings to the Income Tax Department.
            </p>
          </div>
        </div>
      </div>

      {/* Tax Compliance */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Tax Compliance in India</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-foreground mb-2">Capital Gains Tax</h3>
            <p className="text-sm text-muted-foreground mb-2">
              When you sell crypto at a profit, the gain is taxed at a flat rate of 30% (plus applicable surcharge and
              cess).
            </p>
            <div className="bg-muted/50 rounded p-3 text-sm font-mono text-foreground">
              Gain = Selling Price - Cost Basis
              <br />
              Tax = Gain × 30%
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">TDS (Tax Deducted at Source)</h3>
            <p className="text-sm text-muted-foreground mb-2">
              1% TDS is deducted on crypto transactions above ₹50,000 per financial year. This is credited against your
              final tax liability.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-2">Reporting Requirements</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
              <li>Report all crypto transactions in your ITR (Income Tax Return)</li>
              <li>Maintain detailed records of purchases, sales, and transfers</li>
              <li>Include crypto holdings in your asset declaration</li>
              <li>Report foreign exchange transactions if applicable</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Inheritance & Succession */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Inheritance & Succession</h2>

        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Under Indian law, crypto holdings are treated as property and follow standard succession rules:
          </p>

          <div className="space-y-3">
            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-foreground">Succession Certificate</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Heirs must obtain a succession certificate from the court to claim crypto assets.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-foreground">Estate Tax</h3>
              <p className="text-sm text-muted-foreground mt-1">
                The deceased's crypto holdings are valued at the date of death for estate purposes.
              </p>
            </div>

            <div className="border-l-4 border-primary pl-4">
              <h3 className="font-semibold text-foreground">Will & Testament</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Include crypto holdings in your will. Store private keys securely and provide instructions to heirs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privacy Best Practices */}
      <div className="bg-card rounded-lg border border-border p-6">
        <h2 className="text-xl font-bold text-foreground mb-4">Privacy Best Practices</h2>

        <div className="space-y-3">
          <div className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground">Use Local Storage</h3>
              <p className="text-sm text-muted-foreground">
                INRfolio stores all data locally on your device. Never upload sensitive information to cloud services.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground">Secure Your Keys</h3>
              <p className="text-sm text-muted-foreground">
                Never share private keys or seed phrases. Use hardware wallets for large holdings.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground">Maintain Records</h3>
              <p className="text-sm text-muted-foreground">
                Keep detailed transaction records for tax compliance. Export your tax summary annually.
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground">Use VPN</h3>
              <p className="text-sm text-muted-foreground">
                Consider using a VPN when accessing exchanges or managing your portfolio online.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex gap-3">
        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-yellow-900">Disclaimer</h3>
          <p className="text-sm text-yellow-800 mt-1">
            This information is for educational purposes only and should not be considered legal or tax advice. Please
            consult with a qualified tax professional or lawyer for your specific situation.
          </p>
        </div>
      </div>
    </div>
  )
}
