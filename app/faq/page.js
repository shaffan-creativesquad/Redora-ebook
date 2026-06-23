import './faq.css'
import Navbar from '@/components/Navbar'
import Faq from '@/components/Faq'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Frequently Asked Questions | Scribe Media',
  description: 'Everything you need to know about working with Scribe Media — process, pricing, timeline, publishing, editing, marketing, and more.',
}

export default function FaqPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <Faq />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
