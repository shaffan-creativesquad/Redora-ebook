import '../../blog.css'
import Navbar from '@/components/Navbar'
import ScribeBlog4 from '@/components/ScribeBlog4'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog Page 4 — Writing, Publishing & Book Marketing Insights | Scribe Media',
  description: 'Expert insights on book writing, publishing, editing, and marketing from Scribe Media.',
}

export default function BlogPage4() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ScribeBlog4 />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
