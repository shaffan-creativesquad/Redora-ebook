import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Lock In Your Manuscript: Copyediting | The Readora Method | Readora',
  description: 'Learn what copyediting is, why it matters, and how to prepare your manuscript for a professional copyedit before publishing.',
}

export default function CopyeditingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/readora-method-book" className="chapter__back">← The Readora Method</a>
          <p className="chapter__part">PART 6: FINISH YOUR MANUSCRIPT</p>
          <p className="chapter__num">Chapter 24</p>
          <h1 className="chapter__title">Lock In Your Manuscript: Copyediting</h1>
          <div className="chapter__content">
          </div>

          <div className="chapter__nav">
            <a href="/readora-method-book/how-to-get-incredible-blurbs-for-your-book" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How To Get Incredible Blurbs For Your Book</span>
            </a>
            <a href="/readora-method-book/how-to-write-a-book-descriptions-that-sells" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How To Write A Book Description That Sells</span>
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
