import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About The Authors | The Readora Method | Readora',
  description: 'Learn about Tucker Max and Zach Obront, the co-founders of Readora and authors of The Readora Method.',
}

export default function AboutTheAuthorsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Readora Method</a>
          <p className="chapter__part">PART 9: REFERENCE MATERIAL</p>
          <p className="chapter__num">Chapter 46</p>
          <h1 className="chapter__title">About The Authors</h1>
          <div className="chapter__content">

            <h2>Tucker Max</h2>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-people-really-judge-a-book" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How People Really Judge A Book</span>
            </a>
            <a href="/scribe-method-book" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Back to</span>
              <span className="chapter__nav-title">The Readora Method</span>
            </a>
          </div>

          <div className="chapter__cta-section">
            <h2 className="chapter__cta-title">Ready to Write Your Book?</h2>
            <p className="chapter__cta-text">Readora has helped 2,000+ authors turn their ideas into published books. Schedule a free consult.</p>
            <a href="/consult" className="chapter__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
