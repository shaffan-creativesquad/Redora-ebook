import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How to Write Your First Draft (The Readora Method) | The Readora Method | Readora',
  description: 'Learn how to write your first draft by speaking your book aloud and editing the transcription — the Readora Method approach.',
}

export default function ScribeMethodDraftPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Readora Method</a>
          <p className="chapter__part">PART 4: WRITE YOUR BOOK</p>
          <p className="chapter__num">Chapter 16</p>
          <h1 className="chapter__title">How to Write Your First Draft (The Readora Method)</h1>
          <div className="chapter__content">
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-to-write-your-first-draft-the-vomit-method" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How to Write Your First Draft (The Vomit Method)</span>
            </a>
            <a href="/scribe-method-book/how-to-edit-your-book" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How to Edit Your Book</span>
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
