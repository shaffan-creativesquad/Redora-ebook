import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How To Take The Right Author Photo | The Readora Method | Readora',
  description: 'Learn what makes a great author photo and how to get one that builds trust, looks professional, and represents your brand.',
}

export default function AuthorPhotoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/readora-method-book" className="chapter__back">← The Readora Method</a>
          <p className="chapter__part">PART 7: DESIGN YOUR BOOK</p>
          <p className="chapter__num">Chapter 27</p>
          <h1 className="chapter__title">How To Take The Right Author Photo</h1>
          <div className="chapter__content">
          </div>

          <div className="chapter__nav">
            <a href="/readora-method-book/how-to-write-your-author-bio-and-why-it-matters" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How To Write Your Author Bio (And Why it Matters)</span>
            </a>
            <a href="/readora-method-book/how-to-get-a-great-book-cover" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How To Get A Great Book Cover</span>
            </a>
          </div>

          <div className="chapter__cta-section">
            <h2 className="chapter__cta-title">Want Help Writing Your Book?</h2>
            <p className="chapter__cta-text">Readora has helped 2,000+ authors turn their ideas into published books. Schedule a free consult.</p>
            <a href="/consult" className="chapter__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
