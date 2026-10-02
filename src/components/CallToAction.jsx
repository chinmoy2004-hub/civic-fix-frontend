import { ArrowRight } from 'lucide-react'

function CallToAction() {
  return (
    <section id="contact" className="bg-mint-50 px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-forest-900 to-forest-600 px-6 py-14 text-center shadow-2xl shadow-forest-900/20 sm:px-12 md:py-20">
        <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-fresh-400/20 blur-2xl" />
        <div className="absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-fresh-400/20 blur-2xl" />

        <div className="relative">
          <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Your Voice Matters</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-fresh-100/90">
            Together we can build cleaner, safer and more beautiful communities.
          </p>
          <button className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-bold text-forest-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-fresh-100">
            Join Civic Fix
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <p className="mt-10 text-center text-sm text-ink/60">
        © 2026 Civic Fix. Stronger Communities. Better Tomorrows.
      </p>
    </section>
  )
}

export default CallToAction