import './publishing-book-cover.css'
import Navbar from '@/components/Navbar'
import PublishingBookCover from '@/components/PublishingBookCover'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Scribe Publishing: Getting Started on Your Book Cover | Scribe Media',
  description: 'Three steps to prepare for your welcome call and get started on your book cover with Scribe Publishing — identify covers you love, covers you hate, and email your Publishing Manager.',
}

export default function PublishingBookCoverPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <PublishingBookCover />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
