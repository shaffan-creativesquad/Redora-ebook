import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Mission: Motherhood by Cheri Bergeron',
  description:
    'Mission: Motherhood by Cheri Bergeron — a raw, riveting story of becoming a mother in the twenty-first century.',
}

export default function MissionMotherhoodPage() {
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
                  src="https://scribemedia.com/hubfs/images/books/713RC4IYyeL._SL1360_.jpg"
                  alt="Mission: Motherhood"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Mission: Motherhood</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/cheri-bergeron">Cheri Bergeron</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-value">5.0</span>
                  <span className="bd-rating-count">22 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Fertility</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>If the glass slipper doesn&apos;t fit, screw the fairy tale! Become a mother on your own terms.Cheri Bergeron knew motherhood was her purpose. Her mission. She set out to make a family the old-fashioned way: find the right guy, get married, and have babies. When fate and fertility issues intervened, she refused to accept failure as an option.Mission: Motherhood is a raw, riveting story of becoming a mother in the twenty-first century. From sexist and misguided doctors to an estranged husband who makes a legal claim to her uterus, from the joys of fostering and giving birth to the despair of loss and wrestling with faith, Cheri deftly proves it&apos;s possible to accomplish the mission of motherhood and achieve the family of your dreams.Mission: Motherhood opens a world of possibilities for everyone feeling trapped by antiquated concepts of motherhood. Let it empower you to write a new fairy tale of love and family.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Home and Family</span>
                  <span className="bd-tag">Family</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/4jJviru?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$19.99</span>
                  </a>
                  <a href="/success-stories/cheri-bergeron-mission-motherhood-fertility-journey" className="bd-btn bd-btn--secondary">
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
              src="https://scribemedia.com/hubfs/author-headshots/Cheri_Bergeron_Headshot.jpg"
              alt="Cheri Bergeron"
              loading="lazy"
            />
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/cheri-bergeron">Cheri Bergeron</a></h2>
              <div className="book-author-section__bio"><p>Become a mother on your own terms. Cheri Bergeron knew motherhood was her purpose. Her mission.</p></div>
              <a className="book-author-section__link" href="/authors/cheri-bergeron">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a className="book-ah__card" href="/author-hour/episode/cheri-bergeron-screw-the-fairytale">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Cheri Bergeron: &ldquo;Screw The Fairytale&rdquo;</p>
              <p className="book-ah__card-meta">April 30, 2025 · 00:25:48</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="book-related">
          <div className="book-related__divider"></div>
          <p className="book-related__label">More by this author</p>
          <h2 className="book-related__heading">Cheri Bergeron</h2>
          <div className="book-related__grid">
            <a className="book-related__item" href="/published-books/chasing-excellence">
              <img
                className="book-related__cover"
                src="https://scribemedia.com/hubfs/images/books/chasing-excellence.jpg"
                alt="Chasing Excellence"
                loading="lazy"
              />
              <div className="book-related__title">Chasing Excellence</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
