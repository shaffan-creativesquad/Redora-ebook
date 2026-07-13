import './book-writing.css'
import Navbar from '@/components/Navbar'
import BookWriting from '@/components/BookWriting'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Book Writing Services | Readora',
  description: 'Professional book writing services for nonfiction authors. Choose from guided writing, professional ghostwriting, or elite ghostwriting.',
}

export default function BookWritingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <BookWriting />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
