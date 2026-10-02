import { useState } from 'react'
import { Search, Menu, X, Leaf } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Categories', href: '#categories' },
  { label: 'Contact', href: '#contact' },
]

function Navbar() {
  // true = mobile menu open, false = closed
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-fresh-100 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* LOGO */}
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-forest-900 text-fresh-400">
            <Leaf size={22} />
          </span>
          <span className="leading-tight">
            <span className="block text-lg font-bold text-forest-900">Civic Fix</span>
            <span className="hidden text-[11px] text-forest-600 sm:block">
              Stronger Communities. Better Tomorrows.
            </span>
          </span>
        </a>

        {/* DESKTOP LINKS (hidden below 1024px) */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm font-medium text-ink transition-colors hover:text-forest-600"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="rounded-full p-2 text-ink transition hover:bg-fresh-100"
          >
            <Search size={20} />
          </button>

          <button className="hidden rounded-full px-4 py-2 text-sm font-semibold text-forest-900 transition hover:bg-fresh-100 sm:block">
            Sign In
          </button>
          <button className="hidden rounded-full bg-forest-900 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-forest-900/20 transition hover:-translate-y-0.5 hover:bg-forest-700 sm:block">
            Sign Up
          </button>

          {/* HAMBURGER (visible below 1024px) */}
          <button
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 text-ink transition hover:bg-fresh-100 lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="border-t border-fresh-100 bg-white px-4 pb-5 pt-3 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2.5 font-medium text-ink hover:bg-mint-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3 sm:hidden">
            <button className="flex-1 rounded-full border border-forest-900 py-2.5 font-semibold text-forest-900">
              Sign In
            </button>
            <button className="flex-1 rounded-full bg-forest-900 py-2.5 font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar