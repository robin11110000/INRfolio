export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Download
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Support
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition">
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 INRfolio. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
