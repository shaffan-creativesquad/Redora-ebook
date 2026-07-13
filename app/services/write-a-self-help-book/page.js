import './write-a-self-help-book.css'
import Navbar from '@/components/Navbar'
import WriteASelfHelpBook from '@/components/WriteASelfHelpBook'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Write a Self-Help Book | Readora',
  description: 'Transform your personal growth expertise and life lessons into a professionally published self-help book that helps others.',
}

export default function WriteASelfHelpBookPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <WriteASelfHelpBook />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
