import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Prep Expert Digital SAT Playbook by Shaan Patel | Scribe Media',
  description: 'Dr. Shaan Patel reveals the step-by-step blueprint to maximize your SAT score. Unlock perfect-score strategies used by 100,000+ students.',
}

export default function PrepExpertPage() {
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
                  src="/assets/ShaanPatel_EbookCover_Final.webp"
                  alt="Prep Expert Digital SAT Playbook"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">Prep Expert Digital SAT Playbook</h1>
                <p className="bd-author">by <a href="/authors/shaan-patel">Shaan Patel</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.5 · 229 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Teen &amp; Young Adult SAT Study Aids
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>Get ready to crush the SAT!</p>
                  <p style={{ marginTop: '0.75rem' }}>The SAT may be the most important test of your life. Your SAT performance impacts your college acceptances. It affects your scholarship opportunities. Your SAT score even influences consideration from &ldquo;test-optional&rdquo; universities. High school doesn&apos;t prepare you for the SAT — many who perform well in high school score poorly on standardized tests. That&apos;s about to change.</p>
                  <p style={{ marginTop: '0.75rem' }}><em>Prep Expert Digital SAT Playbook</em> reveals the step-by-step blueprint to maximize your SAT score. Dr. Shaan Patel has helped over 100,000 students improve their own SAT scores using the methods in this book. Now, it&apos;s your turn!</p>
                  <p style={{ marginTop: '0.75rem' }}>Unlock perfect-score strategies for every section of the SAT. Learn secrets to solve the toughest questions. Discover how to read passages faster and identify phrases that are always incorrect. Master how to solve algebra problems without doing any algebra. <em>Prep Expert Digital SAT Playbook</em> delivers powerful techniques to ensure your academic success.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Education</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/43dPxX0?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$28.10</span>
                  </a>
                  <a
                    href="https://amzn.to/48Yr3lE"
                    className="bd-btn bd-btn--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen to Audiobook
                  </a>
                  <a
                    href="/success-stories/how-shark-tank-winner-shaan-patel-leveraged-a-book-launch-to-drive-record-revenue-for-prep-expert"
                    className="bd-btn bd-btn--secondary"
                  >
                    Read Success Story
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
              src="/assets/shaan-patel.png"
              alt="Shaan Patel"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/shaan-patel">Shaan Patel</a></h2>
              <div className="bd-author-bio">
                <p>Dr. Shaan Patel is founder and CEO of Prep Expert. As seen on ABC&apos;s &ldquo;Shark Tank,&rdquo; Prep Expert is an education company that has helped more than 100,000 students improve their SAT and ACT scores, get into top colleges, and win over $100 million in scholarships.</p>
                <p>Dr. Patel has more than 20 years of experience in SAT prep and has published more than 10 books on the subject of test preparation. A board-certified dermatologist, Dr. Patel was named one of Inc. Magazine&apos;s &ldquo;30 Under 30.&rdquo; He holds degrees from Yale University and the University of Southern California.</p>
              </div>
              <a href="/authors/shaan-patel" className="bd-author-link">
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
              href="/author-hour/episode/shaan-patel-how-to-make-a-book-pay-for-itself"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Shaan Patel: How to Make a Book Pay for Itself</p>
              <p className="book-ah__card-meta">January 06, 2026 · 37:39</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Shaan Patel</h2>
          <div className="bd-related-grid">
            <a href="/published-books/reframe" className="bd-related-item">
              <Image
                src="/assets/reframe.jpg"
                alt="Reframe"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Reframe</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
