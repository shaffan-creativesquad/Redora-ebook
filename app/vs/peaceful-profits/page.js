import './peaceful-profits.css'
import Navbar from '@/components/Navbar'
import VsPeacefulProfits from '@/components/VsPeacefulProfits'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Readora vs. Peaceful Profits | Comparison',
  description: 'Peaceful Profits builds books as funnels for high-ticket coaching offers. Readora builds books as long-term brand and legacy assets. See the full side-by-side comparison.',
}

export default function VsPeacefulProfitsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <VsPeacefulProfits />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
