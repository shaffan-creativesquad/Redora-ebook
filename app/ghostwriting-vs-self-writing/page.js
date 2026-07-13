import './ghostwriting-vs-self-writing.css'
import Navbar from '@/components/Navbar'
import GhostwritingVsSelfWriting from '@/components/GhostwritingVsSelfWriting'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ghostwriting vs. Writing It Yourself | Readora',
  description: 'An honest comparison of ghostwriting vs. self-writing. Cost, time, quality, and completion rate — everything you need to decide which path is right for your book.',
}

export default function GhostwritingVsSelfWritingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <GhostwritingVsSelfWriting />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
