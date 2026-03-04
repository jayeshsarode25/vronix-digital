import { useState, useEffect } from 'react'
import Navbar  from './components/Navbar'
import Hero    from './components/Hero'
// import Services from './components/Services'
import WhyUs   from './components/WhyUs'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="font-body">
      <Navbar scrolled={scrolled} />
      <Hero />
      {/* <Services />   */}
      <WhyUs />
      <Contact />
      <Footer />
    </div>
  )
}