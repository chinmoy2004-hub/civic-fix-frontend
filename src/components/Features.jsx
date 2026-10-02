import { features } from '../data/features'

function Features() {
  return (
    <section id="how-it-works" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-forest-600">Why Civic Fix</p>
          <h2 className="mt-3 text-3xl font-extrabold text-forest-900 sm:text-4xl">
            Simple for you. Powerful for your city.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item) => {
            const Icon = item.icon // icon is a component, so it must start with a capital letter
            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-fresh-100 bg-mint-50 p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:shadow-forest-900/10"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-forest-900 text-fresh-400 transition group-hover:scale-110">
                  <Icon size={26} />
                </span>
                <h3 className="mt-5 text-lg font-bold text-forest-900">{item.title}</h3>
                <p className="mt-2 text-ink/70">{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features