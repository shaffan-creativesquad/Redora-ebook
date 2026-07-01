import './books-for-brands.css'
import Navbar from '@/components/Navbar'
import ScribeBooksForBrands from '@/components/ScribeBooksForBrands'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Books for Brands | Scribe Media',
  description: "Turn your brand's knowledge into a professionally published book. Scribe partners with corporate brands for thought leadership publishing.",
}

export default function BooksForBrandsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribeBooksForBrands />
        <Newsletter />
      </main>
      
      <Footer />
    </>
  )
}
