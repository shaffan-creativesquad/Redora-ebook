import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How Writing A Book Can Build Your Brand | The Readora Method | Readora',
  description: 'Learn how a published book creates a powerful foundation for your personal brand, drives media attention, and opens doors to new opportunities.',
}

export default function BookBrandPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Readora Method</a>
          <p className="chapter__part">PART 9: REFERENCE MATERIAL</p>
          <p className="chapter__num">Chapter 37</p>
          <h1 className="chapter__title">How Writing A Book Can Build Your Brand</h1>
          <div className="chapter__content">
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/realistic-and-unrealistic-expectations-for-a-book" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">Realistic and Unrealistic Expectations For a Book</span>
            </a>
            <a href="/scribe-method-book/how-to-make-money-with-your-book" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How To Make Money With Your Book</span>
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
