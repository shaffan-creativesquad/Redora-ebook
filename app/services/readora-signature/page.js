import './readora-signature.css'
import Navbar from '@/components/Navbar'
import ReadoraSignature from '@/components/ReadoraSignature'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Readora Signature | Readora',
  description: 'A premium, customized book writing and publishing experience designed around your specific needs, timeline, and vision.',
}

export default function ReadoraSignaturePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ReadoraSignature />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
