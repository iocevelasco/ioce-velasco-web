import { Toaster } from "sonner"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import SocialProof from "@/components/SocialProof"
import Services from "@/components/Services"
import HowItWorks from "@/components/HowItWorks"
import Cases from "@/components/Cases"
import About from "@/components/About"
import FAQ from "@/components/FAQ"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <HowItWorks />
        <Cases />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </>
  )
}
