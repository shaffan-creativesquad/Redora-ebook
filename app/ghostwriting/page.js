import './ghostwriting.css'
import Navbar from '@/components/Navbar'
import ScribeElite from '@/components/ScribeElite'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Readora Elite | Premier Ghostwriting | Readora',
  description: 'Readora Elite is the premier professional ghostwriting experience for executives and thought leaders who want the absolute best.',
}

export default function GhostwritingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribeElite />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
