import './audiobook.css'
import Navbar from '@/components/Navbar'
import ScribeAudiobook from '@/components/ScribeAudiobook'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Audiobook Production & Distribution | Readora',
  description: 'Professional audiobook recording, production, and distribution across Audible, Amazon, iTunes, and Spotify. Starting at $8,000.',
}

export default function AudiobookPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <ScribeAudiobook />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
