import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PricingAudiobook from './PricingAudiobook'

export const metadata = {
  title: 'Audiobook Production Pricing | Readora',
  description: 'Professional audiobook production for published authors. Studio recording, post-production, and distribution to Audible, Apple Books, and more.',
}

export default function PricingAudiobookPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <PricingAudiobook />
      </main>
      <Footer />
    </>
  )
}
