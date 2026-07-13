import './professional-book-writers.css'
import Navbar from '@/components/Navbar'
import ScribeProfessional from '@/components/ScribeProfessional'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Readora Professional | Expert Ghostwriting & Publishing | Readora',
  description: 'Readora Professional is our expert ghostwriting and publishing service. We interview you, write the manuscript, and handle full publishing — so you get a world-class book.',
}

export default function ScribeProfessionalPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribeProfessional />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
