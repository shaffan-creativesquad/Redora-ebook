import './blog.css'
import Navbar from '@/components/Navbar'
import ScribeBlog from '@/components/ScribeBlog'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Blog — Writing, Publishing & Book Marketing Insights | Scribe Media',
  description: 'Expert insights from 2,000+ published authors. Strategies and stories to help you write, publish, and market your nonfiction book.',
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <ScribeBlog />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
