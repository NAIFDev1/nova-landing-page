import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import TrustedBy from './sections/TrustedBy'
import Showcase from './sections/Showcase'
import Features from './sections/Features'
import Solutions from './sections/Solutions'
import Pricing from './sections/Pricing'
import Testimonials from './sections/Testimonials'
import FAQ from './sections/FAQ'
import FinalCTA from './sections/FinalCTA'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-clip bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Showcase />
        <Features />
        <Solutions />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}