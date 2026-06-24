import '../books-for-doctors/books-for-doctors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Books for Sales Professionals | Scribe Media',
  description:
    'Sales leaders and top performers use books to share their methodology, build authority in their industry, and create a powerful business development tool.',
}

export default function BooksForSalesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ind">

          {/* ── Hero ── */}
          <div className="ind__hero">
            <h1>The Book That Closes Deals Before You Pick Up the Phone</h1>
            <p>
              Sales leaders and top performers use books to share their methodology, build
              authority in their industry, and create a powerful business development tool.
            </p>
            <Link href="/consult" className="ind__cta-btn">Schedule a Free Consult</Link>
          </div>

          {/* ── Authors ── */}
          <div className="ind__section">
            <h2>Sales Leaders Who Published with Scribe</h2>
            <p className="subtitle">These sales professionals turned their expertise into bestselling books.</p>
            <div className="ind__authors-grid">

              {/* Tim Kintz */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img
                    className="ind__author-headshot"
                    src="https://scribemedia.com/hubfs/author-headshots/Tim_Kintz_Headshot.jpg"
                    alt="Tim Kintz"
                    loading="lazy"
                  />
                  <a href="/published-books/frictionless">
                    <img
                      className="ind__author-book"
                      src="https://scribemedia.com/hubfs/images/books/Frictionless.jpg"
                      alt="Frictionless"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="ind__author-name">
                  <a href="/authors/tim-kintz">Tim Kintz</a>
                </div>
                <div className="ind__author-title">
                  <a href="/published-books/frictionless">Frictionless</a>
                </div>
                <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                  <span className="ind__author-stars">★★★★★</span>
                  <span className="ind__author-review-count">
                    <a
                      href="https://www.amazon.com/Frictionless-Closing-Negotiating-Tim-Kintz/dp/1544506864/ref=sr_1_1?&_encoding=UTF8&tag=scribemedia0a-20"
                      target="_blank"
                      rel="noopener"
                    >
                      4.7 (320+)
                    </a>
                  </span>
                </div>
                <div className="ind__author-desc">
                  Transformed auto sales training with a framework used by dealerships across
                  North America.
                </div>
              </div>

              {/* John Ruhlin */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img
                    className="ind__author-headshot"
                    src="https://scribemedia.com/hubfs/author-headshots/John_Ruhlin_Headshot.jpg"
                    alt="John Ruhlin"
                    loading="lazy"
                  />
                  <a href="/published-books/beyond-giftology">
                    <img
                      className="ind__author-book"
                      src="https://scribemedia.com/hubfs/images/books/711vuXOgjmL._SL1500_.jpg"
                      alt="Beyond Giftology"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="ind__author-name">
                  <a href="/authors/john-ruhlin">John Ruhlin</a>
                </div>
                <div className="ind__author-title">
                  <a href="/published-books/beyond-giftology">Beyond Giftology</a>
                </div>
                <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                  <span className="ind__author-stars">★★★★★</span>
                  <span className="ind__author-review-count">
                    <a
                      href="https://amzn.to/4iyBW2W?tag=scribemedia0a-20"
                      target="_blank"
                      rel="noopener"
                    >
                      4.7 (2,100+)
                    </a>
                  </span>
                </div>
                <div className="ind__author-desc">
                  Giftology became the go-to resource for relationship-based selling, landing him
                  on hundreds of stages.
                </div>
                <a href="/success-stories/john-ruhlin-case-study" className="ind__author-link">
                  Read their success story →
                </a>
              </div>

              {/* Chris Voss */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img
                    className="ind__author-headshot"
                    src="https://scribemedia.com/hubfs/author-headshots/Chris_Voss_Headshot.jpg"
                    alt="Chris Voss"
                    loading="lazy"
                  />
                  <a href="/published-books/the-full-fee-agent">
                    <img
                      className="ind__author-book"
                      src="https://scribemedia.com/hubfs/images/books/VossShull_WebsiteCover.jpg"
                      alt="The Full Fee Agent"
                      loading="lazy"
                    />
                  </a>
                </div>
                <div className="ind__author-name">
                  <a href="/authors/chris-voss">Chris Voss</a>
                </div>
                <div className="ind__author-title">
                  <a href="/published-books/the-full-fee-agent">The Full Fee Agent</a>
                </div>
                <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                  <span className="ind__author-stars">★★★★★</span>
                  <span className="ind__author-review-count">
                    <a
                      href="https://geni.us/TheFullFeeAgent"
                      target="_blank"
                      rel="noopener"
                    >
                      4.6 (480+)
                    </a>
                  </span>
                </div>
                <div className="ind__author-desc">
                  Former FBI hostage negotiator who brought elite negotiation tactics to real
                  estate professionals.
                </div>
              </div>

            </div>
          </div>

          {/* ── Video ── */}
          <div className="ind__video-section">
            <h2>Hear From a Scribe Author</h2>
            <p className="subtitle">John Ruhlin on the art of strategic gifting</p>
            <div className="ind__video-embed">
              <iframe
                src="https://www.youtube.com/embed/4GGdrWYUdIg?rel=0"
                title="John Ruhlin on the art of strategic gifting"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          {/* ── Benefits ── */}
          <div className="ind__section">
            <h2>Why Sales Professionals Write Books</h2>
            <div className="ind__benefits-grid">
              <div className="ind__benefit">
                <h3>Become the authority</h3>
                <p>When you write the book on selling in your industry, prospects come to you pre-sold.</p>
              </div>
              <div className="ind__benefit">
                <h3>Train at scale</h3>
                <p>Your book becomes the training manual for your team and the industry standard others follow.</p>
              </div>
              <div className="ind__benefit">
                <h3>Open doors</h3>
                <p>Send your book to prospects instead of a brochure. Nothing opens doors like a published book.</p>
              </div>
              <div className="ind__benefit">
                <h3>Build a speaking career</h3>
                <p>Published sales leaders get invited to conferences, podcasts, and corporate training events.</p>
              </div>
            </div>
          </div>

          {/* ── Process ── */}
          <div className="ind__section ind__section--alt">
            <h2>How It Works</h2>
            <p className="subtitle">From idea to published book, we handle everything so you can focus on your work.</p>
            <div className="ind__process-grid">
              <div className="ind__process-card">
                <div className="ind__process-num">1</div>
                <h3>Strategy call</h3>
                <p>We learn about your goals, audience, and expertise to map the right path for your book.</p>
              </div>
              <div className="ind__process-card">
                <div className="ind__process-num">2</div>
                <h3>We write, you talk</h3>
                <p>Through structured interviews, our writers capture your ideas and craft them into a professional manuscript.</p>
              </div>
              <div className="ind__process-card">
                <div className="ind__process-num">3</div>
                <h3>Publish and launch</h3>
                <p>Editing, cover design, and global distribution. Your book launches on Amazon and everywhere books are sold.</p>
              </div>
            </div>
          </div>

          {/* ── Browse ── */}
          <div className="ind__browse">
            <div className="ind__browse-links">
              <Link href="/published-books" className="ind__browse-link">Browse All Books</Link>
              <Link href="/authors" className="ind__browse-link">Browse All Authors</Link>
              <Link href="/success-stories" className="ind__browse-link">Success Stories</Link>
              <Link href="/books-for-industries" className="ind__browse-link">All Industries</Link>
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div className="ind__bottom-cta">
            <h2>Ready to Write Your Book?</h2>
            <p>Schedule a free strategy call to explore how a book can grow your sales practice.</p>
            <Link href="/consult" className="ind__cta-btn">Schedule a Free Consult</Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
