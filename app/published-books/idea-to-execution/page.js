import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Idea to Execution by Ari Meisel & Nick Sonnenberg | Scribe Media',
  description: 'Ari Meisel and Nick Sonnenberg launched a profitable VA business in one day. Idea to Execution chronicles their first year in business together and reveals their 3-step process: Optimize, Automate, Outsource.',
}

export default function IdeaToExecutionPage() {
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
                  src="/assets/idea-to-execution.jpg"
                  alt="Idea to Execution"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">Idea to Execution</h1>
                <p className="bd-author">by <a href="/authors/ari-meisel">Ari Meisel</a> &amp; Nick Sonnenberg</p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★☆</span>
                  <span className="bd-rating-text">4.0 · 160 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Starting a Business
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>Nick Sonnenberg and Ari Meisel recently launched a profitable Virtual Assistant (VA) business in just one day — challenging the startup mentality that every new venture requires months of planning and a large investment of capital. Their VA business was born from scribbled notes on a cocktail napkin during dinner and was up-and-running less than 24 hours later.</p>
                  <p style={{ marginTop: '0.75rem' }}>By following their 3-step process — Optimize, Automate, Outsource — they leveraged free, readily available digital tools and apps with no outlay of cash whatsoever. Meisel and Sonnenberg reveal tactics for building a scalable business in today&apos;s world.</p>
                  <p style={{ marginTop: '0.75rem' }}>This fascinating and informative book chronicles their first year in business together. An essential read for any entrepreneur, it follows their journey from idea to execution, detailing a bold new approach to 21st century business based on fearless ingenuity and a willingness to rewrite the rules.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Business Management</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Idea-Execution-Optimize-Outsource-Everything/dp/1619615053/?&_encoding=UTF8&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$14.99</span>
                  </a>
                  <a href="/success-stories/ari-meisel" className="bd-btn bd-btn--secondary">
                    Read Success Story
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
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/ari-meisel">Ari Meisel</a></h2>
              <div className="bd-author-bio">
                <p>Ari Meisel is a productivity expert, entrepreneur, and the creator of the Less Doing methodology — a framework for optimizing, automating, and outsourcing everything so you can focus on what matters most. After nearly working himself to death at the peak of his career, he rebuilt his life from scratch and channeled those hard lessons into a system anyone can use.</p>
                <p>Together with co-author Nick Sonnenberg, Ari put his methodology to the ultimate test: launching a fully operational VA staffing company in a single day with nothing but a cocktail napkin idea and no upfront capital. That experiment became this book. Today Ari speaks, consults, and coaches entrepreneurs and executives on building businesses that run without burning out their founders.</p>
              </div>
              <a href="/authors/ari-meisel" className="bd-author-link">
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
            <a className="book-ah__card" href="/author-hour/episode/ep-16-ari-meisel-idea-to-execution">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Ari Meisel: Idea to Execution</p>
              <p className="book-ah__card-meta">June 22, 2017</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
            <a className="book-ah__card" href="/author-hour/episode/ari-meisel">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Ari Meisel</p>
              <p className="book-ah__card-meta">July 10, 2017 · 00:27:30</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Ari Meisel</h2>
          <div className="bd-related-grid">
            <a href="/published-books/the-art-of-less-doing" className="bd-related-item">
              <Image
                src="/assets/the-art-of-less-doing.jpg"
                alt="The Art Of Less Doing"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">The Art Of Less Doing</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
