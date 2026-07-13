import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How To Get A Great Book Cover | The Readora Method | Readora',
  description: 'Learn what separates a great book cover from a bad one, and how to work with a designer to get a cover that sells your book.',
}

export default function BookCoverPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/readora-method-book" className="chapter__back">← The Readora Method</a>
          <p className="chapter__part">PART 7: DESIGN YOUR BOOK</p>
          <p className="chapter__num">Chapter 28</p>
          <h1 className="chapter__title">How To Get A Great Book Cover</h1>
          <div className="chapter__content">
          </div>

          <div className="chapter__nav">
            <a href="/readora-method-book/how-to-take-the-right-author-photo" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How To Take The Right Author Photo</span>
            </a>
            <a href="/readora-method-book/design-your-book-layout" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">Design Your Book Layout</span>
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
