import './free-resources.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Free Resources | Readora',
  description: 'Everything you need to write, publish, and market a book that builds your business and authority. Podcasts, books, blog, courses, and more from Readora.',
}

export default function FreeResourcesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <div className="fr">

          {/* Hero */}
          <div className="fr__hero">
            <h1>Free Resources</h1>
            <p>Everything you need to write, publish, and market a book that builds your business and authority.</p>
          </div>

          <div className="fr__section">

            {/* ── Learn from Readora ── */}
            <h2 className="fr__section-title">Learn from Readora</h2>
            <div className="fr__grid">


              <a href="/scribe-method-book" className="fr__card fr__card--featured">
                <span className="fr__badge">WSJ Bestseller</span>
                <div className="fr__card-icon">📖</div>
                <h3>The Readora Method</h3>
                <p>Our Wall Street Journal bestseller lays out the entire Readora process for writing and publishing a non-fiction book. Read it free online.</p>
                <span className="fr__card-link">Read the Book →</span>
              </a>

              <a href="/blog" className="fr__card">
                <div className="fr__card-icon">✍️</div>
                <h3>The Readora Blog</h3>
                <p>Guides on writing, editing, publishing, book marketing, and launching from Readora co-founders and bestselling authors.</p>
                <span className="fr__card-link">Read the Blog →</span>
              </a>

              <a href="/book-school" className="fr__card fr__card--featured">
                <span className="fr__badge fr__badge--new">Course</span>
                <div className="fr__card-icon">🎓</div>
                <h3>Readora Book School</h3>
                <p>A step-by-step video course covering idea validation, positioning, writing, editing, and publishing your non-fiction book.</p>
                <span className="fr__card-link">Start Learning →</span>
              </a>

            </div>

            {/* ── See the Results ── */}
            <h2 className="fr__section-title">See the Results</h2>
            <div className="fr__grid">

              <a href="/#published-books" className="fr__card">
                <div className="fr__card-icon">📚</div>
                <h3>Published Books</h3>
                <p>Browse 1,700+ books published by Readora authors across business, health, memoir, self-help, and more.</p>
                <span className="fr__card-link">Browse All Books →</span>
              </a>

              <a href="/reviews" className="fr__card">
                <div className="fr__card-icon">⭐</div>
                <h3>Author Reviews</h3>
                <p>Read what real authors say about working with Readora. Hundreds of reviews from entrepreneurs, executives, and experts.</p>
                <span className="fr__card-link">Read Reviews →</span>
              </a>

            </div>

            {/* ── Quick Reads ── */}
            <h2 className="fr__section-title">Quick Reads</h2>
            <div className="fr__grid">

              <a href="/blog/tag/book-bites" className="fr__card">
                <div className="fr__card-icon">🍔</div>
                <h3>Book Bites</h3>
                <p>Short, actionable summaries of the best Readora-published books. Get the key takeaways in under 5 minutes.</p>
                <span className="fr__card-link">Read Book Bites →</span>
              </a>

              <a href="/faq" className="fr__card">
                <div className="fr__card-icon">❓</div>
                <h3>FAQs</h3>
                <p>Common questions about the Readora process, timelines, pricing, and what to expect when writing your book.</p>
                <span className="fr__card-link">View FAQs →</span>
              </a>

              <a href="/consult" className="fr__card fr__card--featured">
                <span className="fr__badge">Free</span>
                <div className="fr__card-icon">💬</div>
                <h3>Book a Strategy Call</h3>
                <p>Talk to our team about your book idea, goals, and which Readora service is the right fit. No obligation, no pressure.</p>
                <span className="fr__card-link">Schedule a Consult →</span>
              </a>

            </div>
          </div>

          {/* ── Newsletter CTA ── */}
          <section className="fr-cta">
            <div className="fr-cta__inner">
              <div className="fr-cta__icon">
                <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="48" height="48" rx="8" fill="#e02d2d" />
                  <path d="M12 10h24v28H12z" fill="#0d0d0d" />
                  <path d="M16 16h16M16 22h16M16 28h10" stroke="#e02d2d" strokeWidth="2" />
                </svg>
              </div>
              <h2 className="fr-cta__heading">Learn how professionals write and publish their books.</h2>
              <p className="fr-cta__sub">Join 57,000+ readers receiving expert writing and publishing insights from our Readora team.</p>
              <div className="fr-cta__pills" aria-hidden="true">
                <span className="fr-cta__pill">Writing frameworks</span>
                <span className="fr-cta__pill">Publishing playbooks</span>
                <span className="fr-cta__pill">Launch case studies</span>
              </div>
              <div className="fr-cta__form-wrap">
                <div className="fr-cta__form-placeholder">
                  Newsletter signup will be configured soon.<br />
                  <span style={{ fontSize: '0.82rem', opacity: 0.7 }}>
                    In the meantime, email <a href="mailto:privacy@readora.com" style={{ color: '#e02d2d' }}>privacy@readora.com</a> to get in touch.
                  </span>
                </div>
                <p className="fr-cta__privacy">
                  By submitting, you agree to our <a href="/privacy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a>.
                </p>
              </div>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
