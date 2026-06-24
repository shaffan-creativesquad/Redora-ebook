import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Crank It! | Scribe Media',
  description:
    'Crank It! by Dave Lamont — an inspirational guide to turning dreams into reality by building connections, cultivating passion, and leading by example.',
}

export default function CrankItPage() {
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
                  src="./assets/DaveLamont_EbookCover_EPUB_Final.jpg"
                  alt="Crank It!"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Crank It!</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/dave-lamont" className="bd-author-link">
                    Dave Lamont
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★<span className="star-empty">☆</span></span>
                  <span className="bd-rating-text">4.2 · 14 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Knowledge Capital
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    Never confuse the money you make for the success you create. After procuring a
                    job opportunity with Chrysler, Dave Lamont worked hard and took risks. He created
                    opportunities, served others, and discovered that success has cornerstones:
                    passion, charisma, self-discipline, and kindness.
                  </p>
                  <p>
                    Now Dave is taking what he&apos;s learned and paying it forward. In{' '}
                    <em>Crank It!</em>, he shows how to turn dreams into reality by building
                    connections, cultivating passion, and leading by example. This inspirational
                    guide provides actionable steps and helpful resources for navigating your own
                    path to success in your professional and personal lives. You&apos;ll learn how
                    to become the kind of person others want on their team and as their coach, and
                    how to influence others as a leader and person. No matter your station in life
                    or phase of career, <em>Crank It!</em> will help you find fulfillment, leverage
                    your talent, and realize your true value.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Leadership</span>
                  <span className="bd-tag">Personal Development</span>
                  <span className="bd-tag">Business Management</span>
                  <span className="bd-tag">Training and Development</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/3VbmX6I?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$9.99</span>
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
          <div className="bd-divider"></div>
          <div className="bd-author-layout">
            <Image
              src="/assets/Dave-Lamont-Headshot.jpg"
              alt="Dave Lamont"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/dave-lamont">Dave Lamont</Link>
              </h2>
              <p className="bd-author-bio">
                Dave is a white-collar guy who considers himself a down-to-earth, non-flashy
                blue-collar guy. He has worked hard to not become a successful businessman, and now
                he wants to pay it forward with this how-to guide for succeeding in business and in
                life. He wants to share what he&apos;s learned about working hard, doing the right
                thing, cultivating passion, building a team, leading and managing in the corporate
                and retail sectors, and more.
              </p>
              <Link href="/authors/dave-lamont" className="bd-author-link">
                View full profile →
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
