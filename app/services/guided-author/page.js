import './guided-author.css'
import Navbar from '@/components/Navbar'
import ScribeGuidedAuthor from '@/components/ScribeGuidedAuthor'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Scribe Guided Author | Write Your Book with Expert Support | Scribe Media',
  description: 'Scribe Guided Author is for experts and entrepreneurs who want to write their own book with professional coaching, editing, and full publishing support.',
}

export default function GuidedAuthorPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribeGuidedAuthor />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
