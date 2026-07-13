import './author-guides-interviewing.css'
import Navbar from '@/components/Navbar'
import AuthorGuidesInterviewing from '@/components/AuthorGuidesInterviewing'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Author Guides: Interviewing | Readora',
  description: 'The point of your interview calls is very simple: get all the knowledge of your book topic out of your head, and onto an audio recording, so your Readora can help you turn your ideas into a great book.',
}

export default function AuthorGuidesInterviewingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <AuthorGuidesInterviewing />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
