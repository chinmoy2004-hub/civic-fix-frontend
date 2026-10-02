import { ArrowRight } from 'lucide-react'
import { categories } from '../data/categories'

function Categories() {
  return (
    <section id="categories" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-forest-600">Categories</p>
          <h2 className="mt-3 text-3xl font-extrabold text-forest-900 sm:text-4xl">
            Popular issue categories
          </h2>
          <p className="mt-4 text-ink/70">Pick a category and report a problem in your area.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((item) => {
            const Icon = item.icon
            return (
              <a
                key={item.title}
                href="#"
                className="group flex items-start gap-5 rounded-3xl border border-fresh-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-fresh-400 hover:shadow-xl hover:shadow-forest-900/10"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-fresh-100 text-forest-700 transition group-hover:bg-forest-900 group-hover:text-fresh-400">
                  <Icon size={26} />
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-forest-900">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink/70">{item.text}</p>
                </div>
                <ArrowRight
                  size={20}
                  className="mt-1 shrink-0 text-forest-600 transition group-hover:translate-x-1"
                />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Categories