import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Shaan Patel | Scribe Media Author',
  description:
    'Dr. Shaan Patel is founder and CEO of Prep Expert. As seen on ABC\'s "Shark Tank," Prep Expert has helped more than 100,000 students improve their SAT and ACT scores.',
}

export default function ShaanPatelAuthorPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">

          <Link href="/authors" className="author-detail__back">
            <i className="ph ph-arrow-left"></i> All Authors
          </Link>

          {/* ── Header ── */}
          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <Image
                src="/assets/shaan-patel.png"
                alt="Shaan Patel"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Shaan Patel</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Education</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/1544545274?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a
                  href="https://PrepExpert.com"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PrepExpert.com
                </a>
              </div>
            </div>
          </div>

          {/* ── Stats bar ── */}
          <div className="author-detail__stats-bar">
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">
                <span className="author-detail__star-icon">★</span> 4.5
              </div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">229</div>
              <div className="author-detail__stat-label">Amazon Reviews</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">1</div>
              <div className="author-detail__stat-label">Bestseller</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">1</div>
              <div className="author-detail__stat-label">Book Published</div>
            </div>
          </div>

          {/* ── Bestseller categories ── */}
          <div className="author-detail__bestseller-list">
            <span className="author-detail__bestseller-tag">
              🏆 Bestseller in Teen &amp; Young Adult SAT Study Aids
            </span>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Shaan</h2>
            <div className="author-detail__bio">
              <p>
                Dr. Shaan Patel is founder and CEO of Prep Expert. As seen on ABC&apos;s &ldquo;Shark
                Tank,&rdquo; Prep Expert is an education company that has helped more than 100,000
                students improve their SAT and ACT scores, get into top colleges, and win over $100
                million in scholarships. Dr. Patel has more than 20 years of experience in SAT prep and
                has published more than 10 books on the subject of test preparation. A board-certified
                dermatologist, Dr. Patel was named one of Inc. Magazine&apos;s &ldquo;30 Under
                30.&rdquo; He holds degrees from Yale University and the University of Southern
                California.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link
                href="/published-books/prep-expert-digital-sat-playbook"
                className="author-detail__book-card"
              >
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/ShaanPatel_EbookCover_Final.webp"
                    alt="Prep Expert Digital SAT Playbook"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Prep Expert Digital SAT Playbook</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.5</span>
                    <span>(229)</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Education</span>
            </div>
          </div>

          {/* ── Case Study banner ── */}
          <div className="author-detail__case-study">
            <div className="author-detail__case-study-content">
              <p className="author-detail__case-study-eyebrow">★ Scribe Case Study</p>
              <p className="author-detail__case-study-title">
                Shaan Patel&apos;s Prep Expert Digital SAT Playbook Doubled His Company&apos;s Revenue
                and Pays Him $13 a Copy vs $0.30 on His McGraw Hill Bestseller
              </p>
              <p className="author-detail__case-study-desc">
                Shaan Patel pitched 100 publishers and got 100 rejections 15 years ago. His
                Scribe-published SAT book doubled Prep Expert&apos;s annual revenue, returned 10-20x on
                the project, and pays…
              </p>
            </div>
            <Link
              href="/success-stories/how-shark-tank-winner-shaan-patel-leveraged-a-book-launch-to-drive-record-revenue-for-prep-expert"
              className="author-detail__case-study-btn"
            >
              Read the Case Study <span style={{ fontSize: '1.1rem' }}>→</span>
            </Link>
          </div>

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <Link
                href="/author-hour/episode/shaan-patel-how-to-make-a-book-pay-for-itself"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">
                  Shaan Patel: How to Make a Book Pay for Itself
                </p>
                <p className="author-detail__ah-meta">January 06, 2026 · 37:39</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Shaan and 2,000+ authors who have published with Scribe Media.
            </p>
            <Link href="/consult" className="author-detail__cta-btn">
              Schedule a Consult
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
