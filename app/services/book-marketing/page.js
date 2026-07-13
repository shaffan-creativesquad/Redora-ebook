import './book-marketing.css'
import Navbar from '@/components/Navbar'
import ScribeBookMarketing from '@/components/ScribeBookMarketing'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Book Marketing Services | Readora',
  description: "Customizable book marketing packages designed to maximize your book's reach, credibility, and business impact.",
}

export default function BookMarketingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribeBookMarketing />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
