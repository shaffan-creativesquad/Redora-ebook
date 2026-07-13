import './audiobook-submission-guidelines.css'
import Navbar from '@/components/Navbar'
import AudiobookSubmissionGuidelines from '@/components/AudiobookSubmissionGuidelines'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Audiobook Submission Guidelines | Readora',
  description: 'Submit your interior PDF, cover source files, and imprint information to begin audiobook production with Readora.',
}

export default function AudiobookSubmissionGuidelinesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <AudiobookSubmissionGuidelines />
      </main>
      <Footer />
    </>
  )
}
