import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'The Invisible Threat | Scribe Media',
  description:
    'The Invisible Threat by Matthew Eby — uncover the hidden pitfalls professional fiduciaries face, avoid costly mistakes, and make smarter decisions with over twenty years of proven strategies.',
}

export default function TheInvisibleThreatPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="book-detail-page">
          <div className="book-detail-page__inner">

            <Link href="/published-books" className="bd-back">
              <i className="ph ph-arrow-left"></i> Back to Published Books
            </Link>

            <div className="bd-layout">
              {/* ── Cover ── */}
              <div>
                <Image
                  src="./assets/71X99i9tZZL._SL1360_.jpg"
                  alt="The Invisible Threat"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">The Invisible Threat</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/matthew-eby" className="bd-author-link">
                    Matthew Eby
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.5 · 10 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Business &amp; Organizational Learning
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    Challenge Assumptions; Change Outcomes.
                  </p>
                  <p>
                    Stop feeling your way through the dense fog of today&apos;s financial landscape,
                    overwhelmed by complex and fragmented standards. <em>The Invisible Threat</em>{' '}
                    uncovers the hidden pitfalls professional fiduciaries face, helping you avoid
                    costly mistakes and make smarter decisions.
                  </p>
                  <p>
                    With over twenty years of experience, Matt and Joanne bring fresh insights and
                    proven strategies to tackle the toughest challenges in fiduciary duty. They
                    reveal how to break free from outdated habits and clear the confusion that often
                    clouds judgment.
                  </p>
                  <p>
                    Discover how to identify and question hidden assumptions, embrace adaptive
                    change, and foster effective collaboration for superior results.{' '}
                    <em>The Invisible Threat</em> equips you with the tools and insights to drive
                    meaningful improvements and confidently shape your professional journey.
                    Transform uncertainty into clarity and steer your career toward success with
                    newfound confidence.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Finance and Accounting</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/4gMubWr?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$16.99</span>
                  </a>
                  <Link href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
