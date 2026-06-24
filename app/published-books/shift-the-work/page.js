import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Shift the Work by Joe Mechlinski',
  description:
    'Shift the Work by Joe Mechlinski — a guide to meaningful work-life integration through the science of human behavior.',
}

export default function ShiftTheWorkPage() {
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
                  src="https://scribemedia.com/hubfs/images/books/shift-the-work.jpg"
                  alt="Shift the Work"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Shift the Work</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/joe-mechlinski">Joe Mechlinski</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★<span className="bd-star-empty">☆</span></span>
                  <span className="bd-rating-value">4.3</span>
                  <span className="bd-rating-count">76 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Workplace Behavior</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p><strong>70% of the American workforce is disengaged.</strong></p>
                  <p>With every tick of the clock, millions of people inch closer to their breaking points―a growing epidemic of apathy and anxiety in the workplace that is affecting life outside of the office. But meaningful work-life integration is possible.</p>
                  <p>In <em>Shift the Work</em>, Joe Mechlinski, the <em>New York Times</em> bestselling author of <em>Grow Regardless</em>, shares his personal journey to find purpose, and how it influenced him to take a deeper dive into the science of human behavior. Inspired by neuroscience research about the connections between the brains in the head, heart, and gut that drive human perspectives and conduct, Joe shares how everyone can re-engage with their work and impact the world.</p>
                  <p>Filled with actionable strategies and inspiring true stories, this indispensable guide motivates readers to seek fulfilling opportunities, reconnect with their passions, and recognize their power to make a difference.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Personal Development</span>
                  <span className="bd-tag">Psychology</span>
                  <span className="bd-tag">B2B Consulting</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Shift-Work-Revolutionary-Science-Apathetic-ebook/dp/B07GVQT11B?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$7.99</span>
                  </a>
                  <a href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Author Section ── */}
        <div className="book-author-section">
          <div className="book-author-section__divider"></div>
          <div className="book-author-section__layout">
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/joe-mechlinski">Joe Mechlinski</a></h2>
              <div className="book-author-section__bio"><p>But meaningful work-life integration is possible.In Shift the Work, Joe Mechlinski, the New York Times bestselling author of Grow Regardless, shares his personal journey to find purpose, and how it influenced him to take a deeper dive into the science of human behavior.</p></div>
              <a className="book-author-section__link" href="/authors/joe-mechlinski">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a className="book-ah__card" href="/author-hour/episode/ep-134-joe-mechlinski-shift-the-work">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Joe Mechlinski: Shift the Work</p>
              <p className="book-ah__card-meta">April 20, 2018</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
