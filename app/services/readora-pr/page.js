import './readora-pr.css'
import Navbar from '@/components/Navbar'
import ReadoraPR from '@/components/ReadoraPR'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Book Publicity & PR Services | Readora',
  description: 'Professional book PR and publicity services. Media placements, podcast bookings, and comprehensive visibility campaigns.',
}

export default function ReadoraPRPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ReadoraPR />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
