import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Screen Captured by Sean Herman | Scribe Media',
  description:
    "If you're a parent, you can't escape the avalanche of news touting the negative effects of technology on children. Sean Herman separates technology fact from fiction for his fellow parents.",
}

export default function ScreenCapturedPage() {
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
                  src="/assets/screen-captured.jpg"
                  alt="Screen Captured"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">Screen Captured</h1>
                <p className="bd-author">by <a href="/authors/sean-herman">Sean Herman</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">5.0 · 13 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Family Health
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    If you&apos;re a parent, you can&apos;t escape the avalanche of news touting the negative
                    effects of technology on children. You figure that screen time can&apos;t be as bad as
                    experts are making it out to be, and yet, you&apos;re unsure which platforms to trust and
                    may even have anxiety over what your kids are seeing online. You want to help them form
                    good habits around technology use, but where can you turn for guidance?
                  </p>
                  <p style={{ marginTop: '0.75rem' }}>
                    In <em>Screen Captured</em>, Sean Herman separates technology fact from fiction for his
                    fellow parents. He highlights the difference between positive screen time, which focuses
                    on education, connectedness, and creativity, and being screen captured, where we are
                    manipulated by tech companies to crave the infinite feed. He acknowledges privacy
                    concerns but digs deeper to reveal the true problem: a growing obsession among children
                    with the social validation they receive online.
                  </p>
                  <p style={{ marginTop: '0.75rem' }}>
                    Sean equips you with critical questions to ask so you can give your kids the best of
                    technology—while eliminating the worst of it.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Technology</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Screen-Captured-Helping-Families-Manipulation/dp/1544503768?&_encoding=UTF8&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$10.99</span>
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
              src="https://scribemedia.com/hubfs/author-headshots/sean-herman.jpg"
              alt="Sean Herman"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/sean-herman">Sean Herman</a></h2>
              <div className="bd-author-bio">
                <p>
                  You want to help them form good habits around technology use, but where can you turn for
                  guidance? In <em>Screen Captured</em>, Sean Herman separates technology fact from fiction
                  for his fellow parents.
                </p>
              </div>
              <a href="/authors/sean-herman" className="bd-author-link">
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
            <a className="book-ah__card" href="/author-hour/episode/ep-348-sean-herman-episode-348">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Sean Herman: Episode 348</p>
              <p className="book-ah__card-meta">August 24, 2019</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Sean Herman</h2>
          <div className="bd-related-grid">
            <a href="/published-books/the-alter-ego-effect" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/the-alter-ego-effect.jpg"
                alt="The Alter Ego Effect"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">The Alter Ego Effect</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
