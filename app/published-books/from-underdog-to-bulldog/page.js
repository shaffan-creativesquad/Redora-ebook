import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'From Underdog to Bulldog | Scribe Media',
  description:
    'From Underdog to Bulldog by Candler Cook — the remarkable true story of one young man\'s extraordinary efforts to walk on and play football for the University of Georgia.',
}

export default function FromUnderdogToBulldogPage() {
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
                  src="./assets/from-underdog-to-bulldog.jpg"
                  alt="From Underdog to Bulldog"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">From Underdog to Bulldog</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/candler-cook" className="bd-author-link">
                    Candler Cook
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.8 · 82 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Southern U.S. Biographies
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    Candler Cook knows firsthand that dreams can come true&mdash;but only if
                    you&apos;re willing to fight for them.
                  </p>
                  <p>
                    A lifelong Bulldogs fan, Candler decided at age seven that he wanted to play
                    football for the University of Georgia. Despite being only a fourth-string
                    linebacker on his high school squad, he remained laser-focused on his quest.
                    Rejection followed rejection, but he refused to give up, even when others
                    insisted that he&apos;d never make the team. After years of intensive workouts
                    and grueling self-reinvention, Candler Cook finally played his first football
                    game for UGA&mdash;1,543 days after he walked into the coach&apos;s office and
                    requested a tryout.
                  </p>
                  <p>
                    A fascinating inside look at SEC football and a guidebook for anyone pursuing a
                    seemingly unattainable goal, From{' '}
                    <em>Underdog to Bulldog</em> is the remarkable true story of one young
                    man&apos;s extraordinary efforts to make the impossible happen.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Sports and Fitness</span>
                  <span className="bd-tag">Finance and Accounting</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/1544513801?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$16.99</span>
                  </a>
                  <Link
                    href="/success-stories/candler-cook-from-underdog-to-bulldog-7-years-and-now-a-major-motion-picture"
                    className="bd-btn bd-btn--secondary"
                  >
                    Read Success Story
                  </Link>
                  <Link href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <Link
              href="/author-hour/episode/ep-261-candler-cook-episode-261"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Candler Cook: Episode 261</p>
              <p className="book-ah__card-meta">March 22, 2019</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
            <Link
              href="/author-hour/episode/from-walk-on-to-the-big-screen-how-candler-cook-s-book-changed-his-career-and-st"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">
                From Walk-On to the Big Screen: How Candler Cook&apos;s Book Changed His Career and
                Started a Movie
              </p>
              <p className="book-ah__card-meta">June 03, 2026 · 00:29:29</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

        {/* ── Related books ── */}
        <div className="bd-related">
          <div className="bd-divider"></div>
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Candler Cook</h2>
          <div className="bd-related-grid">
            <Link href="/published-books/a-fools-errand" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/a-fools-errand.jpg"
                alt="A Fool's Errand"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">A Fool&apos;s Errand</div>
            </Link>
            <Link href="/published-books/reclamation" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/Reclamation.jpg"
                alt="Reclamation"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Reclamation</div>
            </Link>
            <Link href="/published-books/the-prescription-to-heal-your-career" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/ScottCook_WebsiteCover.jpg"
                alt="The Prescription to Heal Your Career"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">The Prescription to Heal Your Career</div>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
