import { Code2, Zap, BarChart3, Lock } from "lucide-react"

const features = [
  {
    icon: BarChart3,
    title: "Dashboard",
    description: "A 360° overview of your assets",
  },
  {
    icon: Zap,
    title: "Exchanges",
    description: "Connect to a big number of centralized exchanges",
  },
  {
    icon: Lock,
    title: "History events",
    description: "View all historical events including, transactions, trades, deposits, withdrawals and more.",
  },
  {
    icon: Code2,
    title: "EVM protocols",
    description: "Manage assets across multiple protocols across EVM networks.",
  },
  {
    icon: BarChart3,
    title: "Profit/loss report",
    description: "A profit/loss report for all your historical trade data",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-balance">
          What does <span className="text-primary">INRfolio</span> offer?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className={`rounded-lg p-6 ${
                  index === 0
                    ? "bg-primary text-primary-foreground lg:col-span-2 lg:row-span-2"
                    : "bg-muted/50 text-foreground"
                }`}
              >
                <Icon className={`w-8 h-8 mb-4 ${index === 0 ? "text-primary-foreground" : "text-primary"}`} />
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className={`text-sm ${index === 0 ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
