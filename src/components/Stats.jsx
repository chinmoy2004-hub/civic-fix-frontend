import { stats } from '../data/stats'

function Stats() {
  return (
    <section id="about" className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-forest-900 px-6 py-14 sm:px-10 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-fresh-400">Our Impact</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Real change, driven by citizens
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-7 text-center backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-fresh-400/15 text-fresh-400">
                  <Icon size={24} />
                </span>
                <p className="mt-5 text-4xl font-extrabold text-white">{item.value}</p>
                <p className="mt-1 font-medium text-fresh-100/80">{item.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats