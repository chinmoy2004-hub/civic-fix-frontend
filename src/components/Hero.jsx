import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react'

function CityIllustration() {
  return (
    <svg viewBox="0 0 480 400" className="h-full w-full" role="img" aria-label="City illustration">
      {/* sky */}
      <rect width="480" height="400" rx="32" fill="#dcfce7" />
      <circle cx="380" cy="80" r="40" fill="#fde68a" />
      {/* clouds */}
      <ellipse cx="100" cy="70" rx="40" ry="14" fill="#fff" />
      <ellipse cx="130" cy="62" rx="28" ry="12" fill="#fff" />
      {/* back buildings */}
      <rect x="40" y="170" width="70" height="170" rx="6" fill="#86efac" />
      <rect x="330" y="150" width="80" height="190" rx="6" fill="#86efac" />
      {/* front buildings */}
      <rect x="120" y="120" width="90" height="220" rx="8" fill="#1b5e43" />
      <rect x="220" y="160" width="100" height="180" rx="8" fill="#0f3d2e" />
      {/* windows */}
      {[140, 170, 200, 230].map((y) => (
        <g key={y}>
          <rect x="135" y={y} width="16" height="16" rx="3" fill="#bbf7d0" />
          <rect x="165" y={y} width="16" height="16" rx="3" fill="#bbf7d0" />
        </g>
      ))}
      {[180, 215, 250].map((y) => (
        <g key={y}>
          <rect x="237" y={y} width="16" height="16" rx="3" fill="#4ade80" />
          <rect x="268" y={y} width="16" height="16" rx="3" fill="#4ade80" />
        </g>
      ))}
      {/* trees */}
      <rect x="86" y="290" width="8" height="50" fill="#1b5e43" />
      <circle cx="90" cy="280" r="26" fill="#22c55e" />
      <rect x="406" y="295" width="8" height="45" fill="#1b5e43" />
      <circle cx="410" cy="285" r="22" fill="#22c55e" />
      {/* street light */}
      <rect x="326" y="230" width="5" height="110" fill="#0f3d2e" />
      <circle cx="328" cy="226" r="9" fill="#fde047" />
      {/* road */}
      <rect y="340" width="480" height="60" fill="#0f3d2e" />
      <rect x="40" y="366" width="50" height="6" rx="3" fill="#bbf7d0" />
      <rect x="140" y="366" width="50" height="6" rx="3" fill="#bbf7d0" />
      <rect x="240" y="366" width="50" height="6" rx="3" fill="#bbf7d0" />
      <rect x="340" y="366" width="50" height="6" rx="3" fill="#bbf7d0" />
    </svg>
  )
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-mint-50 to-white">
      {/* soft decorative blobs */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-fresh-100 blur-3xl" />
      <div className="absolute -right-24 top-40 h-72 w-72 rounded-full bg-fresh-400/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:px-8">
        {/* LEFT: TEXT */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-fresh-100 px-4 py-1.5 text-sm font-semibold text-forest-700">
            <span className="h-2 w-2 rounded-full bg-fresh-400" />
            Civic reporting made simple
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight text-forest-900 sm:text-5xl lg:text-6xl">
            Make your city better,{' '}
            <span className="text-forest-600">one report at a time.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/80">
            Report civic issues like potholes, garbage, street lights, water leakage and more.
            Track the progress and be a part of a cleaner, safer and better community.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-forest-900 px-7 py-3.5 font-semibold text-white shadow-lg shadow-forest-900/25 transition hover:-translate-y-0.5 hover:bg-forest-700">
              Report an Issue
              <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </button>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-full border-2 border-forest-900/15 bg-white px-7 py-3.5 font-semibold text-forest-900 transition hover:-translate-y-0.5 hover:border-forest-600 hover:bg-fresh-100"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* RIGHT: ILLUSTRATION */}
        <div className="relative mx-auto w-full max-w-lg animate-fade-up [animation-delay:200ms]">
          <div className="aspect-[6/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-forest-900/15 ring-1 ring-fresh-100">
            <CityIllustration />
          </div>

          {/* floating cards */}
          <div className="absolute -left-4 top-10 flex animate-float items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-left-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-fresh-100 text-forest-700">
              <MapPin size={18} />
            </span>
            <div className="text-sm leading-tight">
              <p className="font-bold text-forest-900">Pothole reported</p>
              <p className="text-ink/60">Main Street</p>
            </div>
          </div>

          <div className="absolute -right-2 bottom-10 flex animate-float items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl [animation-delay:2s] sm:-right-6">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-900 text-fresh-400">
              <CheckCircle2 size={18} />
            </span>
            <div className="text-sm leading-tight">
              <p className="font-bold text-forest-900">Issue resolved</p>
              <p className="text-ink/60">Just now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero