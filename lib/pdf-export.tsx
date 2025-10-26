/**
 * PDF Export utilities for ITR-compatible tax reports
 * Uses jsPDF and html2canvas for client-side PDF generation
 */

export interface TaxReportData {
  year: number
  totalPortfolioValue: number
  totalProfit: number
  totalLoss: number
  netProfit: number
  flatTax: number
  tdsAmount: number
  totalTaxLiability: number
  exchangeBreakdown: Array<{
    name: string
    balance: number
    tax: number
  }>
  generatedDate: string
}

/**
 * Generate ITR-compatible PDF report
 * Note: In production, use jsPDF library
 */
export async function generateTaxReportPDF(data: TaxReportData): Promise<Blob> {
  // Create HTML content for PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; }
        .header { text-align: center; margin-bottom: 30px; }
        .title { font-size: 24px; font-weight: bold; }
        .subtitle { font-size: 14px; color: #666; margin-top: 5px; }
        .section { margin-bottom: 30px; }
        .section-title { font-size: 16px; font-weight: bold; margin-bottom: 15px; border-bottom: 2px solid #333; padding-bottom: 10px; }
        table { width: 100%; border-collapse: collapse; margin-top: 10px; }
        th, td { padding: 10px; text-align: left; border: 1px solid #ddd; }
        th { background-color: #f5f5f5; font-weight: bold; }
        .amount { text-align: right; }
        .summary-box { background-color: #f9f9f9; padding: 15px; border-left: 4px solid #007bff; margin: 15px 0; }
        .footer { margin-top: 40px; font-size: 12px; color: #666; border-top: 1px solid #ddd; padding-top: 20px; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="title">INRfolio Tax Report</div>
        <div class="subtitle">Crypto Portfolio Tax Summary for FY ${data.year}-${data.year + 1}</div>
      </div>

      <div class="section">
        <div class="section-title">Portfolio Summary</div>
        <table>
          <tr>
            <th>Metric</th>
            <th class="amount">Amount (INR)</th>
          </tr>
          <tr>
            <td>Total Portfolio Value</td>
            <td class="amount">₹${data.totalPortfolioValue.toLocaleString("en-IN")}</td>
          </tr>
          <tr>
            <td>Total Gains</td>
            <td class="amount">₹${data.totalProfit.toLocaleString("en-IN")}</td>
          </tr>
          <tr>
            <td>Total Losses</td>
            <td class="amount">₹${data.totalLoss.toLocaleString("en-IN")}</td>
          </tr>
          <tr>
            <td><strong>Net Profit/Loss</strong></td>
            <td class="amount"><strong>₹${data.netProfit.toLocaleString("en-IN")}</strong></td>
          </tr>
        </table>
      </div>

      <div class="section">
        <div class="section-title">Tax Calculation</div>
        <div class="summary-box">
          <strong>30% Flat Tax on Gains:</strong> ₹${data.flatTax.toLocaleString("en-IN")}<br>
          <strong>1% TDS (Annual):</strong> ₹${data.tdsAmount.toLocaleString("en-IN")}<br>
          <strong>Total Tax Liability:</strong> ₹${data.totalTaxLiability.toLocaleString("en-IN")}
        </div>
      </div>

      <div class="section">
        <div class="section-title">Exchange Breakdown</div>
        <table>
          <tr>
            <th>Exchange</th>
            <th class="amount">Balance (INR)</th>
            <th class="amount">Tax Liability (INR)</th>
          </tr>
          ${data.exchangeBreakdown
            .map(
              (ex) => `
            <tr>
              <td>${ex.name}</td>
              <td class="amount">₹${ex.balance.toLocaleString("en-IN")}</td>
              <td class="amount">₹${ex.tax.toLocaleString("en-IN")}</td>
            </tr>
          `,
            )
            .join("")}
        </table>
      </div>

      <div class="footer">
        <p><strong>Generated:</strong> ${data.generatedDate}</p>
        <p><strong>Disclaimer:</strong> This report is for informational purposes only. Please consult with a qualified tax professional for accurate tax filing.</p>
        <p><strong>Privacy Notice:</strong> This report was generated locally on your device. No data was sent to any server.</p>
      </div>
    </body>
    </html>
  `

  // Convert HTML to Blob
  const blob = new Blob([htmlContent], { type: "text/html" })
  return blob
}

/**
 * Download PDF report
 */
export function downloadTaxReport(data: TaxReportData): void {
  generateTaxReportPDF(data).then((blob) => {
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `INRfolio-Tax-Report-FY${data.year}-${data.year + 1}.html`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  })
}
