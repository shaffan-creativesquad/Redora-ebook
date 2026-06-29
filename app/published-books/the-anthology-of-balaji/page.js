import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'The Anthology of Balaji by Eric Jorgenson | Scribe Media',
  description:
    'The Anthology of Balaji distills Balaji Srinivasan\'s ideas on technology, crypto, and the future — curated by Eric Jorgenson, author of The Almanack of Naval Ravikant.',
}

export default function TheAnthologyOfBalajiPage() {
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
                <img
                  src="https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/images/books/EricJorgenson_EbookCover_Final-scaled.jpg"
                  alt="The Anthology of Balaji"
                  width={260}
                  height={390}
                  className="bd-cover"
                  loading="eager"
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">The Anthology of Balaji</h1>
                <p className="bd-author">
                  by <a href="/authors/eric-jorgenson">Eric Jorgenson</a>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.6 · 268 ratings on Amazon</span>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Technology</span>
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    Balaji Srinivasan is one of the most prolific thinkers of our time — an entrepreneur,
                    investor, and technologist whose ideas on crypto, network states, and the future of
                    civilization have influenced a generation of builders.
                  </p>
                  <p style={{ marginTop: '0.75rem' }}>
                    <em>The Anthology of Balaji</em> is a curated collection of his most insightful ideas,
                    compiled by Eric Jorgenson — the author behind the word-of-mouth sensation
                    <em> The Almanack of Naval Ravikant</em> (2M+ copies sold).
                  </p>
                  <p style={{ marginTop: '0.75rem' }}>
                    Whether you are building a company, investing in the future, or simply trying to
                    understand where the world is headed, this book distils Balaji&apos;s thinking into
                    a clear, actionable guide.
                  </p>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/s?k=The+Anthology+of+Balaji"
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
              src="/assets/Eric_Jorgenson_Headshot.png"
              alt="Eric Jorgenson"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <a href="/authors/eric-jorgenson">Eric Jorgenson</a>
              </h2>
              <div className="bd-author-bio">
                <p>
                  Eric Jorgenson curates the most useful ideas from our greatest thinkers and doers
                  and preserves them in our most permanent format: books. He&apos;s the author of{' '}
                  <em>The Almanack of Naval Ravikant</em> (2M+ copies sold),{' '}
                  <em>The Anthology of Balaji</em>, and <em>The Book of Elon</em>.
                </p>
                <p>
                  He&apos;s CEO of Scribe Media, where authors retain full financial and creative
                  control of their books.
                </p>
              </div>
              <a href="/authors/eric-jorgenson" className="bd-author-link">
                View full profile →
              </a>
            </div>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Eric Jorgenson</h2>
          <div className="bd-related-grid">
            <a href="/published-books/the-almanack-of-naval-ravikant" className="bd-related-item">
              <img
                src="https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/images/books/the-almanack-of-navl-ravikant.jpg"
                alt="The Almanack of Naval Ravikant"
                width={130}
                height={195}
                className="bd-related-cover"
                loading="lazy"
              />
              <div className="bd-related-title">The Almanack of Naval Ravikant</div>
            </a>
            <a href="/published-books/the-book-of-elon" className="bd-related-item">
              <img
                src="https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/images/books/the-book-of-elon.jpg"
                alt="The Book of Elon"
                width={130}
                height={195}
                className="bd-related-cover"
                loading="lazy"
              />
              <div className="bd-related-title">The Book of Elon</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
