import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Retail Pride by Ron Thurston',
  description:
    'When will you get a real career? When will you stop working nights and weekends? When do you plan to use your college degree? If you work in retail, these ...',
}

export default function RetailPridePage() {
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
                  src="https://scribemedia.com/hubfs/images/books/Retail-Pride-2.jpg"
                  alt="Retail Pride"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Retail Pride</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/ron-thurston">Ron Thurston</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-value">4.7</span>
                  <span className="bd-rating-count">172 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Retailing Industry</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>When will you get a real career? When will you stop working nights and weekends? When do you plan to use your college degree? If you work in retail, these are questions you often hear.Does this make you feel like the career you love was all just an accident? You&apos;re not alone. The retail industry employs millions, yet most people don&apos;t end up there by design. Ron Thurston wrote Retail Pride as an indispensable guide for every retail employee, manager, and multi-store leader looking to accelerate their potential and grow their career. It&apos;s filled with straightforward, practical tips for developing your talents, connecting with customers, and building your leadership skills. Based on more than twenty-five years of Ron&apos;s retail leadership experience, you&apos;ll discover a sense of belonging in the words of someone who has been a champion for the industry and shares your journey.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Retail</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/B08JNDR73Y?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$9.99</span>
                  </a>
                  <a href="/success-stories/ron-thurston-retail-pride" className="bd-btn bd-btn--secondary">
                    Read Success Story
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
            <img
              className="book-author-section__photo"
              src="https://scribemedia.com/hubfs/author-headshots/Ron_Thurston_Headshot.jpg"
              alt="Ron Thurston"
              loading="lazy"
            />
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/ron-thurston">Ron Thurston</a></h2>
              <div className="book-author-section__bio"><p>Ron Thurston wrote Retail Pride as an indispensable guide for every retail employee, manager, and multi-store leader looking to accelerate their potential and grow their career.</p></div>
              <a className="book-author-section__link" href="/authors/ron-thurston">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a className="book-ah__card" href="/author-hour/episode/ep-545-ron-thurston-retail-pride">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Ron Thurston: Retail Pride</p>
              <p className="book-ah__card-meta">September 25, 2020</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="book-related">
          <div className="book-related__divider"></div>
          <p className="book-related__label">More by this author</p>
          <h2 className="book-related__heading">Ron Thurston</h2>
          <div className="book-related__grid">
            <a className="book-related__item" href="/published-books/human-pride">
              <img
                className="book-related__cover"
                src="https://scribemedia.com/hubfs/images/books/71CYzy6BLBL._SL1500_.jpg"
                alt="Human Pride"
                loading="lazy"
              />
              <div className="book-related__title">Human Pride</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
