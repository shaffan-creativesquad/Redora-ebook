import './author-faqs.css'
import Navbar from '@/components/Navbar'
import AuthorFaqs from '@/components/AuthorFaqs'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Post-Publishing Author Guide | Scribe Media',
  description: 'Frequently asked questions for published Scribe Media authors — ordering copies, updating your author page, managing royalties, and more.',
}

export default function AuthorFaqsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <AuthorFaqs />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
