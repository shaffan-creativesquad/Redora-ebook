import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PricingMarketing from './PricingMarketing'

export const metadata = {
  title: 'Book Marketing Pricing | Scribe Media',
  description: 'Professional book marketing services for published authors. Select from readership, media, advertising, and content packages. Configure and purchase online.',
}

export default function PricingMarketingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <PricingMarketing />
      </main>
      <Footer />
    </>
  )
}
