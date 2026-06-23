import '../../blog.css'
import Navbar from '@/components/Navbar'
import ScribeBlog2 from '@/components/ScribeBlog2'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog Page 2 — Writing, Publishing & Book Marketing Insights | Scribe Media',
  description: 'Expert insights on book writing, publishing, editing, and marketing from Scribe Media.',
}

export default function BlogPage2() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ScribeBlog2 />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
