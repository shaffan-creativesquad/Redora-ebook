import './books-for-coaches.css'
import Navbar from '@/components/Navbar'
import ScribeBooksForCoaches from '@/components/ScribeBooksForCoaches'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Books for Coaches | Readora',
  description: 'Executive coaches, business coaches, and life coaches use books to codify their methodology, attract premium clients, and scale their impact.',
}

export default function BooksForCoachesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribeBooksForCoaches />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
