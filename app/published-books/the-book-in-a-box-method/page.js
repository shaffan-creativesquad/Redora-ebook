import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'The Book in a Box Method by Tucker Max | Scribe Media',
  description: 'Everything you\'ve ever been told about how to write a book is wrong. The Book in a Box Method cuts through all the nonsense to show you the exact steps to write and publish the best possible book, in less time than you thought possible.',
}

export default function BookInABoxPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>

        {/* ── Book Detail ── */}
        <section className="book-detail-page">
          <div className="book-detail-page__inner">

            <a href="/published-books" className="bd-back">
              ← Back to Published Books
            </a>

            <div className="bd-layout">
              {/* Cover */}
              <div>
                <Image
                  src="/assets/the-book-in-a-box-method.jpg"
                  alt="The Book in a Box Method"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">The Book in a Box Method</h1>
                <p className="bd-author">by <a href="/authors/tucker-max">Tucker Max</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.2 · 227 ratings on Amazon</span>
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>Everything you&apos;ve ever been told about how to write a book is wrong.</p>
                  <p style={{ marginTop: '0.75rem' }}>Authors assume that writing a book needs to be a struggle. They block off hours of precious time, throw away draft after draft, and never get any closer to a finished product. What if there was a way to get your idea into a published book that was better and faster?</p>
                  <p style={{ marginTop: '0.75rem' }}>Now, finally, there is. <em>The Book in a Box Method</em> cuts through all the nonsense to show you the exact steps to follow to ensure that you&apos;ll be able to write and publish the best possible book, in less time than you thought possible.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Writing and Arts</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Book-Box-Method-Groundbreaking-Publish-ebook/dp/B014EUTYGM/?&_encoding=UTF8&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
                  </a>
                  <a href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Author Section ── */}
        <div className="bd-author-section">
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <Image
              src="/assets/tucker-max-headshot.jpg"
              alt="Tucker Max"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/tucker-max">Tucker Max</a></h2>
              <div className="bd-author-bio">
                <p>Tucker Max is a #1 New York Times bestselling author with four books, including <em>I Hope They Serve Beer in Hell</em>, which spent three years on the list. He is the co-founder of Scribe Media, the publishing company he started to help leaders, entrepreneurs, and experts share their knowledge through books.</p>
                <p>Tucker pioneered the Book in a Box method — a revolutionary process that allows busy professionals to turn their spoken ideas into a fully published book without the traditional writing struggle. His work has helped thousands of authors bring their stories and expertise to the world.</p>
              </div>
              <a href="/authors/tucker-max" className="bd-author-link">
                View full profile →
              </a>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider" />
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a
              className="book-ah__card"
              href="/author-hour/episode/ep-7-tucker-max-episode-7"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Tucker Max: Episode 7</p>
              <p className="book-ah__card-meta">May 02, 2017</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Tucker Max</h2>
          <div className="bd-related-grid">
            <a href="/scribe-method-book" className="bd-related-item">
              <Image
                src="/assets/41YXhRHxNqL._SL500_.jpg"
                alt="The Scribe Method"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">The Scribe Method</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
