import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Beyond Giftology by John Ruhlin',
  description:
    'Beyond Giftology by John Ruhlin — the Referral Partner Transformation System that replaces cold calls and ads with genuine partnerships and trust.',
}

export default function BeyondGiftologyPage() {
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
                  src="/assets/711vuXOgjmL._SL1500_.jpg"
                  alt="Beyond Giftology"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Beyond Giftology</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/john-ruhlin">John Ruhlin</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-value">4.8</span>
                  <span className="bd-rating-count">65 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Marketing</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    Relationships can take you places marketing can&apos;t. Word of mouth is the
                    most powerful form of advertising, but asking for referrals can feel awkward
                    and transactional. That&apos;s where the Referral Partner Transformation (RPT)
                    System comes in. Instead of chasing fish (nagging for referrals), build a
                    fishing fleet&mdash;a proactive system of partners and R.I.C.H. relationships
                    that effortlessly generate referrals month after month. This refreshing,
                    sustainable approach to business growth replaces cold calls, ads, and
                    algorithms with genuine partnerships and trust. Packed with proven, practical
                    strategies, Beyond GIFT&middot;OLOGY helps you create a network of loyal allies
                    who want to see you succeed. Whether you&apos;re a service professional, sales
                    leader, or small business owner&mdash;solo or leading a team&mdash;Beyond
                    GIFT&middot;OLOGY turns timeless ideas into a transformative system for lasting
                    success. Stop chasing. Start building. And become blessed beyond measure.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Leadership</span>
                  <span className="bd-tag">Business Management</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/4iyBW2W?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon $0.99
                  </a>
                  <a
                    href="/success-stories/john-ruhlin-case-study"
                    className="bd-btn bd-btn--secondary"
                  >
                    Read Success Story
                  </a>
                  <Link href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Author section ── */}
        <div className="bd-author-section">
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <Image
              src="https://scribemedia.com/hubfs/author-headshots/John_Ruhlin_Headshot.jpg"
              alt="John Ruhlin"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/john-ruhlin">John Ruhlin</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  John Ruhlin is the world&apos;s leading authority in maximizing customer loyalty
                  through radical generosity. He is the founder and author of Giftology and has
                  been featured in Fox News, Forbes, Fast Company, Inc and New York Times. While
                  becoming the #1 performer out of 1.5 million sales reps for one of the
                  world&apos;s most recognizable brands, John developed a system of using
                  generosity to gain access to elite clients and generate thousands of referrals.
                  He and his firm now help automate this process for individuals and organizations
                  like UBS, Raymond James, DR Horton, Keller Williams, the Chicago Cubs, and
                  Caesar&apos;s Palace. John and the Giftology team can help any individual turn
                  their clients into their own personal sales force to drive exponential growth.
                </p>
              </div>
              <Link href="/authors/john-ruhlin" className="bd-author-link">
                View full profile <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Related books ── */}
        <div className="book-related">
          <div className="book-related__divider" />
          <p className="book-related__label">More by this author</p>
          <h2 className="book-related__heading">John Ruhlin</h2>
          <div className="book-related__grid">
            <Link href="/published-books/giftology" className="book-related__item">
              <img
                className="book-related__cover"
                src="https://scribemedia.com/hubfs/images/books/giftology.jpg"
                alt="Giftology"
                loading="lazy"
              />
              <div className="book-related__title">Giftology</div>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
