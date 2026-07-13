import './publishing-formatting-tips.css'
import Navbar from '@/components/Navbar'
import PublishingFormattingTips from '@/components/PublishingFormattingTips'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Readora Publishing: Formatting Tips for Authors | Readora',
  description: 'Essential formatting tips for authors preparing their manuscript for publishing with Readora — from copy editing and headings to images and book descriptions.',
}

export default function PublishingFormattingTipsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <PublishingFormattingTips />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
