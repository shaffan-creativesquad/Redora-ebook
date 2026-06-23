import './reviews.css'
import Navbar from '@/components/Navbar'
import Reviews from '@/components/Reviews'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Author Reviews | Scribe Media',
  description: 'Real stories from real authors who trusted Scribe to bring their books to life.',
}

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <Reviews />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
