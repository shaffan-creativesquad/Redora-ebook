import '../books-for-doctors/books-for-doctors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Books for Finance | Scribe Media',
  description:
    'Scribe Media helps finance professionals write and publish books that build authority, attract clients, and grow their business. See our finance authors.',
}

export default function BooksForFinancialAdvisorsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ind">

          {/* ── Hero ── */}
          <div className="ind__hero">
            <h1>The Book That Builds Trust Before the First Meeting</h1>
            <p>
              Financial advisors and wealth managers use books to build instant credibility,
              attract high-net-worth clients, and differentiate from every other advisor in
              their market.
            </p>
            <Link href="/consult" className="ind__cta-btn">
              Schedule a Free Consult
            </Link>
          </div>

          {/* ── Featured Authors ── */}
          <div className="ind__section">
            <h2>Finance Leaders Who Published with Scribe</h2>
            <p className="ind__section-sub">
              These finance professionals turned their expertise into bestselling books.
            </p>
            <div className="ind__authors-grid">

              {/* Author 1 — Sheryl Sculley (no headshot in source) */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <Link href="/published-books/greedy-bastards" style={{ borderRadius: '4px', width: 'auto', border: 'none' }}>
                    <Image
                      src="https://scribemedia.com/hubfs/images/books/GreedyBastards.jpg"
                      alt="Greedy Bastards"
                      width={70}
                      height={105}
                      className="ind__author-book"
                      unoptimized
                      style={{ width: '70px', height: '105px' }}
                    />
                  </Link>
                </div>
                <p className="ind__author-name">
                  Sheryl Sculley
                </p>
                <p className="ind__author-title">
                  <Link href="/published-books/greedy-bastards">Greedy Bastards</Link>
                </p>
                <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                  <span className="ind__author-stars">★★★★★</span>
                  <span className="ind__author-review-count">
                    <a
                      href="https://www.amazon.com/gp/product/B08D8PY9SM/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0?tag=scribemedia0a-20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      4.5 (340+)
                    </a>
                  </span>
                </div>
                <p className="ind__author-desc">
                  Documented her journey as the longest-serving city manager in San Antonio history.
                </p>
              </div>

              {/* Author 2 — Alex Gurevich */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <Image
                    src="https://scribemedia.com/hubfs/author-headshots/Alex_Gurevich_Headshot.jpg"
                    alt="Alex Gurevich"
                    width={70}
                    height={70}
                    className="ind__author-headshot"
                    unoptimized
                  />
                  <Link href="/published-books/the-trades-of-march-2020">
                    <Image
                      src="https://scribemedia.com/hubfs/images/books/the-trades-of-march.jpg"
                      alt="The Trades of March 2020"
                      width={70}
                      height={105}
                      className="ind__author-book"
                      unoptimized
                    />
                  </Link>
                </div>
                <p className="ind__author-name">
                  Alex Gurevich
                </p>
                <p className="ind__author-title">
                  <Link href="/published-books/the-trades-of-march-2020">The Trades of March 2020</Link>
                </p>
                <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                  <span className="ind__author-stars">★★★★★</span>
                  <span className="ind__author-review-count">
                    <a
                      href="https://www.amazon.com/Trades-March-2020-against-Uncertainty-ebook/dp/B09NX372KG/ref=sr_1_1?crid=V7Z9W6ZS9UCK&keywords=alex+gurevich&qid=1643132181&sprefix=alex+gur%2Caps%2C112&sr=8-1&tag=scribemedia0a-20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      4.3 (60+)
                    </a>
                  </span>
                </div>
                <p className="ind__author-desc">
                  Shared trading insights from the March 2020 crisis that resonated across Wall Street.
                </p>
              </div>

              {/* Author 3 — Chad Willardson */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <Image
                    src="https://scribemedia.com/hubfs/author-headshots/Chad_Willardson_Headshot.jpg"
                    alt="Chad Willardson"
                    width={70}
                    height={70}
                    className="ind__author-headshot"
                    unoptimized
                  />
                  <Link href="/published-books/stress-free-money">
                    <Image
                      src="https://scribemedia.com/hubfs/images/books/Stress-Free-Money-2.jpeg"
                      alt="Stress-Free Money"
                      width={70}
                      height={105}
                      className="ind__author-book"
                      unoptimized
                    />
                  </Link>
                </div>
                <p className="ind__author-name">
                  Chad Willardson
                </p>
                <p className="ind__author-title">
                  <Link href="/published-books/stress-free-money">Stress-Free Money</Link>
                </p>
                <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                  <span className="ind__author-stars">★★★★★</span>
                  <span className="ind__author-review-count">
                    <a
                      href="https://www.amazon.com/gp/product/1544516738?pf_rd_r=FR3XKCK6GFZPRC74XP1S&pf_rd_p=edaba0ee-c2fe-4124-9f5d-b31d6b1bfbee&tag=scribemedia0a-20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      4.7 (480+)
                    </a>
                  </span>
                </div>
                <p className="ind__author-desc">
                  Positioned himself as the go-to advisor for entrepreneurs and high-net-worth clients.
                </p>
                <a href="/success-stories/chad-willardson-stress-free-money" className="ind__author-link">
                  Read their success story →
                </a>
              </div>

            </div>
          </div>

          {/* ── Benefits ── */}
          <div className="ind__section">
            <h2>Why Finance Professionals Write Books</h2>
            <div className="ind__benefits-grid">
              <div className="ind__benefit">
                <h3>Attract ideal clients</h3>
                <p>
                  High-net-worth prospects choose the advisor who published the book on their exact
                  financial situation.
                </p>
              </div>
              <div className="ind__benefit">
                <h3>Shorten the sales cycle</h3>
                <p>
                  Clients who read your book arrive pre-sold on your philosophy and approach.
                </p>
              </div>
              <div className="ind__benefit">
                <h3>Stand out from competitors</h3>
                <p>
                  In a sea of advisors with the same credentials, a book makes you the obvious choice.
                </p>
              </div>
              <div className="ind__benefit">
                <h3>Scale your expertise</h3>
                <p>
                  Share your financial wisdom with thousands instead of one client at a time.
                </p>
              </div>
            </div>
          </div>

          {/* ── Process ── */}
          <div className="ind__section ind__section--alt">
            <h2>How It Works</h2>
            <p className="ind__section-sub">
              From idea to published book, we handle everything so you can focus on your work.
            </p>
            <div className="ind__process-grid">
              <div className="ind__process-card">
                <div className="ind__process-num">1</div>
                <h3>Strategy call</h3>
                <p>
                  We learn about your goals, audience, and expertise to map the right path for your book.
                </p>
              </div>
              <div className="ind__process-card">
                <div className="ind__process-num">2</div>
                <h3>We write, you talk</h3>
                <p>
                  Through structured interviews, our writers capture your ideas and craft them into a
                  professional manuscript.
                </p>
              </div>
              <div className="ind__process-card">
                <div className="ind__process-num">3</div>
                <h3>Publish and launch</h3>
                <p>
                  Editing, cover design, and global distribution. Your book launches on Amazon and
                  everywhere books are sold.
                </p>
              </div>
            </div>
          </div>

          {/* ── Browse links ── */}
          <div className="ind__browse">
            <div className="ind__browse-links">
              <Link href="/#published-books" className="ind__browse-link">Browse All Books</Link>
              <Link href="/success-stories" className="ind__browse-link">Success Stories</Link>
              <Link href="/books-for-industries" className="ind__browse-link">All Industries</Link>
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div className="ind__bottom-cta">
            <h2>Ready to Write Your Book?</h2>
            <p>
              Schedule a free strategy call to explore how a book can grow your finance practice.
            </p>
            <Link href="/consult" className="ind__cta-btn">
              Schedule a Free Consult
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
