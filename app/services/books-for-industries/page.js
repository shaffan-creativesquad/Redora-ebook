import './books-for-industries.css'
import Navbar from '@/components/Navbar'
import ScribeIndustries from '@/components/ScribeIndustries'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Books for Every Industry | Scribe Media',
  description: 'Scribe has helped professionals across every industry write and publish books that build authority and grow their business.',
}

export default function BooksForIndustriesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribeIndustries />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
