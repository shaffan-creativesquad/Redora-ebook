import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Buy Then Build by Walker Deibel | Scribe Media',
  description: 'Entrepreneurs have a problem: startups. What if you could skip the startup phase and generate profitable revenue on day one? Walker Deibel shows you how.',
}

export default function BuyThenBuildPage() {
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
                  src="/assets/Buy&build.png"
                  alt="Buy Then Build"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">Buy Then Build</h1>
                <p className="bd-author">by <a href="/authors/walker-deibel">Walker Deibel</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.7 · 2,191 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Consolidation &amp; Merger
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>Entrepreneurs have a problem: startups. Almost all startups either fail or never truly reach a sustainable size. Despite the popularity of entrepreneurship, we haven&apos;t engineered a better way to start… Until now.</p>
                  <p style={{ marginTop: '0.75rem' }}>What if you could skip the startup phase and generate profitable revenue on day one? In <em>Buy Then Build</em>, acquisition entrepreneur Walker Deibel shows you how to begin with a sustainable, profitable company and grow from there.</p>
                  <p style={{ marginTop: '0.75rem' }}>You&apos;ll learn how to:</p>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', color: 'rgba(255,255,255,0.68)', lineHeight: '1.8' }}>
                    <li>Buy an existing company rather than starting from scratch</li>
                    <li>Use ownership as a path to financial independence</li>
                    <li>Spend a fraction of the time raising capital</li>
                    <li>Find great brokers, generate your own &ldquo;deal flow,&rdquo; and see new listings early</li>
                    <li>Uncover the best opportunities and biggest risks of any company</li>
                    <li>Navigate the acquisition process</li>
                    <li>Become a successful acquisition entrepreneur</li>
                  </ul>
                  <p style={{ marginTop: '0.75rem' }}><em>Buy Then Build</em> is your guide to outsmart the startup game, live the entrepreneurial lifestyle, and reap the financial rewards of ownership now.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Entrepreneurship</span>
                  <span className="bd-tag">Finance and Accounting</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/43PJ8Cd?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$13.89</span>
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
              src="/assets/Walker_Deibel_Headshot.webp"
              alt="Walker Deibel"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/walker-deibel">Walker Deibel</a></h2>
              <div className="bd-author-bio">
                <p>Walker Deibel is an acquisition entrepreneur who has co-founded or acquired seven companies. As the author of <em>Buy Then Build</em>, he has helped thousands of entrepreneurs bypass the startup phase and step directly into ownership of profitable, existing businesses.</p>
                <p>Deibel is a managing director at Quiet Light, a leading online business brokerage, and the founder of Acquisition Lab, the world&apos;s premier educational platform for acquisition entrepreneurs. He earned his MBA from Washington University in St. Louis&apos; Olin Business School.</p>
              </div>
              <a href="/authors/walker-deibel" className="bd-author-link">
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
              href="/author-hour/episode/ep-201-walker-deibel-buy-then-build"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Walker Deibel: Buy Then Build</p>
              <p className="book-ah__card-meta">October 29, 2018</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
