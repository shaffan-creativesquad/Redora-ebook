import './books-for-lawyers.css'
import Navbar from '@/components/Navbar'
import ScribeBooksForLawyers from '@/components/ScribeBooksForLawyers'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Books for Lawyers & Attorneys | Readora',
  description: 'Top attorneys use books to establish authority and attract high-value clients. Readora helps legal professionals turn their expertise into published books.',
}

export default function BooksForLawyersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribeBooksForLawyers />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
