import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance">
          Take control of your portfolio with unmatched privacy
        </h1>

        <p className="text-xl text-muted-foreground mb-8 text-balance">
          INRfolio is a privacy-first, self-hosted portfolio manager and tax tracker built for Indian crypto users.
        </p>

        <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
          <Download className="w-5 h-5" />
          Download INRfolio for free
        </Button>
      </div>
    </section>
  )
}
