import '../../blog.css'
import Navbar from '@/components/Navbar'
import ScribeBlog3 from '@/components/ScribeBlog3'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog Page 3 — Writing, Publishing & Book Marketing Insights | Scribe Media',
  description: 'Expert insights on book writing, publishing, editing, and marketing from Scribe Media.',
}

export default function BlogPage3() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ScribeBlog3 />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
