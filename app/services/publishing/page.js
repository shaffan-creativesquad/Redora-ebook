import './publishing.css'
import Navbar from '@/components/Navbar'
import ScribePublishing from '@/components/ScribePublishing'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Scribe Publishing | Professional Book Publishing | Scribe Media',
  description: 'Scribe Publishing is for authors with a finished manuscript who want professional design, publishing, and distribution — without giving up rights or royalties.',
}

export default function ScribePublishingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribePublishing />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
