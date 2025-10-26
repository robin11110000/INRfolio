# INRfolio - Privacy-First Crypto Portfolio & Tax Tracker for India

A self-hosted, privacy-first cryptocurrency portfolio manager and tax tracker built specifically for Indian crypto users. All data is stored locally on your device—no cloud sync, no third-party leaks.

## 🎯 Features

### 📊 Portfolio Management
- **Real-time Portfolio Dashboard**: Track your crypto holdings across multiple Indian exchanges
- **Multi-Exchange Support**: Seamlessly integrate WazirX, CoinDCX, CoinSwitch, and self-custody wallets
- **INR & USD Valuation**: View your portfolio in both Indian Rupees and US Dollars
- **Asset Breakdown**: Detailed table showing all holdings with 24h changes and allocation percentages
- **Portfolio Growth Charts**: Visual representation of your portfolio performance over time

### 💰 Indian Tax Compliance
- **30% Flat Tax Calculation**: Automatic calculation of crypto profit tax as per Indian law
- **1% TDS Tracking**: Annual Tax Deducted at Source per wallet
- **GST Flag**: Optional GST calculation for service fees
- **Tax Summary Dashboard**: Clear breakdown of tax liability by exchange
- **ITR-Ready PDF Export**: Generate downloadable tax reports compatible with Income Tax filing

### 📚 Compliance & Education
- **Madras High Court Ruling Explained**: Clear summary of the "crypto as property" classification
- **Tax Compliance Guide**: Step-by-step explanation of Indian crypto tax rules
- **Inheritance & Succession**: Information about crypto inheritance under Indian law
- **Privacy Best Practices**: Security tips for protecting your crypto assets

### 🔒 Privacy-First Design
- **100% Local Storage**: All portfolio data stored on your device only
- **No Cloud Sync**: Your data never leaves your computer
- **No Third-Party Tracking**: Zero data leaks to external services
- **Privacy Badge**: Visual indicator showing privacy-first operation
- **Offline Mode**: Full functionality without internet connection

### 📱 User Experience
- **Mobile-Friendly Design**: Fully responsive interface for desktop and mobile
- **Dark Mode Support**: Easy on the eyes with automatic theme detection
- **India-Centric Design**: Colors, copy, and UX optimized for Indian users
- **Intuitive Navigation**: Easy access to all features and information

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/inrfolio.git
   cd inrfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Building for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📖 Usage Guide

### 1. Dashboard Overview
- View your total portfolio value in INR and USD
- See 24-hour changes and portfolio allocation
- Monitor estimated tax liability
- Check portfolio growth over time

### 2. Managing Exchanges
- Connect your WazirX, CoinDCX, and CoinSwitch accounts
- View balances and assets per exchange
- Track sync status and last update time
- All credentials stored locally on your device

### 3. Tax Calculation
- Automatic 30% flat tax calculation on holdings
- 1% TDS calculation per wallet annually
- Optional GST flag for service fees
- Export tax summary as PDF for ITR filing

### 4. Compliance Information
- Read about the Madras High Court ruling
- Understand Indian crypto tax rules
- Learn about inheritance and succession
- Follow privacy best practices

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 19 + Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 + shadcn/ui components
- **Charts**: Recharts for data visualization
- **Storage**: Browser LocalStorage API (100% client-side)
- **Icons**: Lucide React

### Project Structure
\`\`\`
inrfolio/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── dashboard/
│   │   └── page.tsx            # Dashboard page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── navigation.tsx          # Top navigation
│   ├── hero-section.tsx        # Landing hero
│   ├── dashboard-preview.tsx   # Landing preview
│   ├── features-section.tsx    # Features showcase
│   ├── footer.tsx              # Footer
│   └── dashboard/
│       ├── portfolio-overview.tsx
│       ├── asset-breakdown.tsx
│       ├── exchange-balances.tsx
│       ├── tax-summary-preview.tsx
│       └── compliance-guide.tsx
├── lib/
│   ├── tax-calculator.ts       # Tax calculation logic
│   ├── local-storage.ts        # Local storage utilities
│   ├── exchange-data.ts        # Mock exchange data
│   └── pdf-export.ts           # PDF export utilities
└── hooks/
    └── use-portfolio.ts        # Portfolio data hook
\`\`\`

## 🔐 Privacy & Security

### Data Storage
- **100% Local**: All data stored in browser's LocalStorage
- **No Servers**: No backend servers or cloud storage
- **No Tracking**: No analytics, no user tracking
- **No Leaks**: Your data never leaves your device

### Best Practices
1. **Use HTTPS**: Always access INRfolio over HTTPS
2. **Secure Device**: Keep your computer/phone secure
3. **Backup Keys**: Securely backup your private keys
4. **Use VPN**: Consider using a VPN for additional privacy
5. **Clear Cache**: Periodically clear browser cache

## 💡 Indian Tax Rules Explained

### Capital Gains Tax
- **Rate**: 30% flat tax on crypto profits
- **Calculation**: (Selling Price - Cost Basis) × 30%
- **Reporting**: Must be reported in ITR

### TDS (Tax Deducted at Source)
- **Rate**: 1% per wallet per financial year
- **Threshold**: Applies to transactions above ₹50,000
- **Credit**: Credited against final tax liability

### Reporting Requirements
- Report all crypto transactions in ITR
- Maintain detailed transaction records
- Include crypto holdings in asset declaration
- Report foreign exchange transactions if applicable

### Madras High Court Ruling (2023)
The Madras High Court classified cryptocurrency as "property" under Indian law, meaning:
- Crypto is subject to income tax on gains
- Holdings are considered assets for wealth tax
- Transfers between wallets may trigger capital gains
- Inheritance follows property succession laws

## 📦 Recommended Libraries for Production

### Exchange API Integration
- **WazirX API**: `axios` + official WazirX API documentation
- **CoinDCX API**: `axios` + CoinDCX REST API
- **CoinSwitch API**: `axios` + CoinSwitch Kuber API

### PDF Generation
- **jsPDF**: `npm install jspdf` - PDF generation
- **html2canvas**: `npm install html2canvas` - HTML to canvas conversion

### INR Pricing
- **CoinGecko API**: Free crypto pricing API with INR support
- **Coinglass API**: Advanced crypto analytics

### State Management (Optional)
- **Zustand**: Lightweight state management
- **TanStack Query**: Server state management

### Example Integration
\`\`\`typescript
import axios from 'axios'

// Fetch crypto prices in INR
async function getCryptoPricesINR() {
  const response = await axios.get(
    'https://api.coingecko.com/api/v3/simple/price',
    {
      params: {
        ids: 'bitcoin,ethereum',
        vs_currencies: 'inr',
        include_market_cap: true,
      },
    }
  )
  return response.data
}
\`\`\`

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎯 Roadmap

- [ ] Real API integration with WazirX, CoinDCX, CoinSwitch
- [ ] Advanced transaction history tracking
- [ ] Multi-year tax reports
- [ ] Portfolio rebalancing suggestions
- [ ] Mobile app (React Native)
- [ ] Hardware wallet integration
- [ ] Multi-language support
- [ ] Community features

---

**Built with ❤️ for Indian crypto users**

Privacy-first. Tax-compliant. India-focused.
