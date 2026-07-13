import './page-two.css'
import Navbar from '@/components/Navbar'
import VsPageTwo from '@/components/VsPageTwo'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Page Two Books vs. Readora | Comparison',
  description: 'Considering Page Two Books? See how it compares to Readora — pulled directly from our sales team\'s competitive briefing. 3,000+ authors. 250,000+ books in print. Flat-fee pricing.',
}

export default function VsPageTwoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <VsPageTwo />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
