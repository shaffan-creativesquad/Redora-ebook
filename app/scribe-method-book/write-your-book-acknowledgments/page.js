import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Write Your Book Acknowledgments | The Readora Method | Readora',
  description: 'Learn how to write heartfelt, meaningful book acknowledgments that honor everyone who helped make your book possible.',
}

export default function BookAcknowledgmentsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Readora Method</a>
          <p className="chapter__part">PART 6: FINISH YOUR MANUSCRIPT</p>
          <p className="chapter__num">Chapter 21</p>
          <h1 className="chapter__title">Write Your Book Acknowledgments</h1>
          <div className="chapter__content">
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/write-your-book-dedication" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">Write Your Book Dedication</span>
            </a>
            <a href="/scribe-method-book/write-your-book-foreword" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">Write Your Book Foreword</span>
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
