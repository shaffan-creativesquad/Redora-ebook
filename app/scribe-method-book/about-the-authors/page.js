import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About The Authors | The Scribe Method | Scribe Media',
  description: 'Learn about Tucker Max and Zach Obront, the co-founders of Scribe Media and authors of The Scribe Method.',
}

export default function AboutTheAuthorsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 9: REFERENCE MATERIAL</p>
          <p className="chapter__num">Chapter 46</p>
          <h1 className="chapter__title">About The Authors</h1>
          <div className="chapter__content">

            <h2>Tucker Max</h2>
            <p>Tucker Max is a four-time New York Times bestselling author who has sold over 4.5 million copies of his books worldwide. His books include <em>I Hope They Serve Beer in Hell</em>, <em>Assholes Finish Last</em>, <em>Hilarity Ensues</em>, and <em>Mate: Become the Man Women Want</em>.</p>
            <p>Tucker co-founded Scribe Media after realizing that many intelligent, accomplished people had books inside them—knowledge, insight, and stories worth sharing—but lacked the writing skills or the time to get them out. He built Scribe to solve that problem: to give experts and leaders a professional pathway to becoming published authors.</p>
            <p>Through Scribe, Tucker has helped over 2,000 authors write and publish books that have sold millions of copies combined, appeared on major bestseller lists, and changed the lives of readers around the world.</p>
            <p>Tucker lives in Austin, Texas, with his wife and children.</p>

            <h2>Zach Obront</h2>
            <p>Zach Obront is a publishing veteran and co-founder of Scribe Media. He is the author of <em>The Scribe Method</em> (co-written with Tucker Max) and <em>The Shortcut: How Ambitious People Achieve More by Doing Less</em>.</p>
            <p>Zach built the operational infrastructure of Scribe from the ground up, working directly with thousands of authors to develop the methodology that underlies <em>The Scribe Method</em>. He has consulted with Fortune 500 companies, bestselling authors, and entrepreneurs across industries on book strategy, positioning, and publishing.</p>
            <p>His work at Scribe has helped authors land book deals with major publishers, launch to bestseller lists, and use their books as the foundation for thriving speaking and consulting careers.</p>
            <p>Zach lives in Montreal, Canada.</p>

            <h2>About Scribe Media</h2>
            <p>Scribe Media is a professional book writing and publishing company that helps experts, entrepreneurs, and leaders write, publish, and market their books. Founded by Tucker Max and Zach Obront, Scribe has worked with over 2,000 authors and produced books that have sold millions of copies worldwide.</p>
            <p>Scribe&apos;s mission is simple: to help the world&apos;s best thinkers share their ideas in the form of a well-written, professionally published book.</p>
            <p>Learn more about Scribe&apos;s services and schedule a free consultation at{' '}
              <a href="/consult">scribemedia.com</a>.
            </p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="https://amzn.to/3P14NjR" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-people-really-judge-a-book" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How People Really Judge A Book</span>
            </a>
            <a href="/scribe-method-book" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Back to</span>
              <span className="chapter__nav-title">The Scribe Method</span>
            </a>
          </div>

          <div className="chapter__cta-section">
            <h2 className="chapter__cta-title">Ready to Write Your Book?</h2>
            <p className="chapter__cta-text">Scribe has helped 2,000+ authors turn their ideas into published books. Schedule a free consult.</p>
            <a href="/consult" className="chapter__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
