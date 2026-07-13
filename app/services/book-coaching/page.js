import './book-coaching.css'
import Navbar from '@/components/Navbar'
import BookCoaching from '@/components/BookCoaching'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Book Coaching Services | Readora',
  description: 'Expert book coaching to guide your writing journey. Get the structure, accountability, and professional feedback you need to write a great book in your own voice.',
}

export default function BookCoachingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <BookCoaching />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
