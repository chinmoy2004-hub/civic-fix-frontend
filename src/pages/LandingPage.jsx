import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Stats from '../components/Stats'
import Categories from '../components/Categories'
import CallToAction from '../components/CallToAction'

function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Categories />
        <CallToAction />
      </main>
    </>
  )
}

export default LandingPage