import './forbes-books.css'
import Navbar from '@/components/Navbar'
import VsForbesBooks from '@/components/VsForbesBooks'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Forbes Books vs. Scribe Media | Comparison',
  description: 'Considering Forbes Books? See how it compares to Scribe Media — pulled directly from our sales team\'s competitive briefing. 3,000+ authors. 250,000+ books in print. Flat-fee pricing.',
}

export default function VsForbesBooksPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <VsForbesBooks />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
