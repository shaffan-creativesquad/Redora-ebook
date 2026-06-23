import './write-your-book.css'
import Navbar from '@/components/Navbar'
import WriteYourBook from '@/components/WriteYourBook'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Plan the Right Path for Your Book | Scribe Media',
  description: 'Book a free 15-minute strategy call. A focused conversation about your book idea, the best publishing path for your goals, and a clear next step.',
}

export default function WriteYourBookPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <WriteYourBook />
      </main>
      <Footer />
    </>
  )
}
