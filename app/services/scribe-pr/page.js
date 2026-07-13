import './scribe-pr.css'
import Navbar from '@/components/Navbar'
import ScribePR from '@/components/ScribePR'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Book Publicity & PR Services | Readora',
  description: 'Professional book PR and publicity services. Media placements, podcast bookings, and comprehensive visibility campaigns.',
}

export default function ScribePRPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribePR />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
