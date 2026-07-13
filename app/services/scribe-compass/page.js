import './scribe-compass.css'
import Navbar from '@/components/Navbar'
import ScribeCompass from '@/components/ScribeCompass'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Readora Compass | Readora',
  description: 'Readora Compass: Strategic book positioning and planning to ensure your book achieves its goals before you start writing.',
}

export default function ScribeCompassPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribeCompass />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
