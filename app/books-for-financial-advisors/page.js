import '../books-for-doctors/books-for-doctors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Books for Finance | Readora',
  description:
    'Readora helps finance professionals write and publish books that build authority, attract clients, and grow their business. See our finance authors.',
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
            <h2>Finance Leaders Who Published with Readora</h2>
            <p className="ind__section-sub">
              These finance professionals turned their expertise into bestselling books.
            </p>
            <div className="ind__authors-grid">

              {/* Author 1 — Sheryl Sculley */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img
                    src="/assets/Chad_Willardson_Headshot.jpg"
                    alt="Sheryl Sculley"
                    className="ind__author-headshot"
                    loading="lazy"
                  />
                  <img
                    src="/assets/Book Covers/013.png"
                    alt="Greedy Bastards"
                    className="ind__author-book"
                    loading="lazy"
                  />
                </div>
                <p className="ind__author-name">Sheryl Sculley</p>
                <p className="ind__author-title">Greedy Bastards</p>
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
