import Link from 'next/link'
import { Github, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4">py2rs.info</h3>
            <p className="text-gray-400 mb-4">
              Helping Python developers transition to Rust with practical tutorials and guides.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/AlexsJones/py2rs" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="View on GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tutorials" className="text-gray-400 hover:text-white transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-400 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Tutorials */}
          <div>
            <h4 className="font-semibold mb-4">Popular Tutorials</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/tutorials/variables-and-mutability" className="text-gray-400 hover:text-white transition-colors">
                  Variables & Mutability
                </Link>
              </li>
              <li>
                <Link href="/tutorials/ownership-for-pythonistas" className="text-gray-400 hover:text-white transition-colors">
                  Ownership for Pythonistas
                </Link>
              </li>
              <li>
                <Link href="/tutorials/rust-modules-vs-python-packages" className="text-gray-400 hover:text-white transition-colors">
                  Modules vs Packages
                </Link>
              </li>
              <li>
                <Link href="/tutorials/first-rust-cli" className="text-gray-400 hover:text-white transition-colors">
                  Your First Rust CLI
                </Link>
              </li>
            </ul>
          </div>

          {/* Future Links Placeholder */}
          <div>
            <h4 className="font-semibold mb-4">More</h4>
            <p className="text-gray-400 text-sm">
              More content coming soon!
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 py2rs.info. Built with Next.js and ❤️ for the Python → Rust community.</p>
        </div>
      </div>
    </footer>
  )
}
