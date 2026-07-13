import './scribe-signature.css'
import Navbar from '@/components/Navbar'
import ScribeSignature from '@/components/ScribeSignature'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Readora Signature | Readora',
  description: 'A premium, customized book writing and publishing experience designed around your specific needs, timeline, and vision.',
}

export default function ScribeSignaturePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribeSignature />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
