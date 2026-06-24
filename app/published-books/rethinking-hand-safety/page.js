import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Rethinking Hand Safety by Joe Geng',
  description:
    'Around the globe, hand injuries are the number one preventable industrial accident—in manufacturing, construction, oil & gas, you name it...',
}

export default function RethinkingHandSafetyPage() {
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
                  src="https://scribemedia.com/hubfs/images/books/rethinking-hand-safety.jpg"
                  alt="Rethinking Hand Safety"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Rethinking Hand Safety</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/joe-geng">Joe Geng</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-value">4.7</span>
                  <span className="bd-rating-count">28 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Manufacturing Industry</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>Around the globe, hand injuries are the number one preventable industrial accident—in manufacturing, construction, oil &amp; gas, you name it. But what actually works to protect workers&apos; hands? What kind of training actually gets through? What causes a worker to act safely (or not) in the moment? Which stats are meaningful and which are useless? What infrastructure changes and PPE (personal protective equipment) decisions actually pay off? How do cultural issues play in? How have others reduced hand injuries by 50, even 90 percent?</p>
                  <p>In <em>Rethinking Hand Safety</em>, author Joe Geng takes the tough questions to major companies, leading safety experts, veteran safety managers, industrial psychologists, independent trainers, glove designers, and on-the-line workers. The result is an eye-opening, perspective-shifting, hard-hitting manual for changing a company culture, altering worker attitudes, and finally doing hand safety right.</p>
                  <p>This book is a must-read for safety managers, or anyone who wants to create a safer, better workplace.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Manufacturing</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/1544506252?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$17.89</span>
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
              src="https://scribemedia.com/hubfs/author-headshots/joe-geng.jpg"
              alt="Joe Geng"
              loading="lazy"
            />
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/joe-geng">Joe Geng</a></h2>
              <div className="book-author-section__bio"><p>JOE GENG grew up among the tanneries of Canada helping his father make gloves, and he has spent his entire life studying industrial hand safety, overseeing glove R&amp;D, and consulting with leading companies like Toyota, Honda, SpaceX, General Motors, Bombardier Aircraft, and Shell Oil. He presently acts as vice president at Superior Glove, the Geng family business considered one of the world&apos;s most innovative and disruptive glove manufacturers. Superior is a major global supplier to aerospace, automotive, oil &amp; gas, and construction companies, and has been named one of Canada&apos;s best-managed companies seven years in a row by Deloitte. Joe holds degrees from Trinity Western University and attended Reutlingen leather school in Germany, which he describes as the &quot;Hogwarts of leather making.&quot; He lives in Oakville, Ontario, with his wife and three kids.</p></div>
              <a className="book-author-section__link" href="/authors/joe-geng">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a className="book-ah__card" href="/author-hour/episode/ep-405-joe-geng-episode-405">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Joe Geng: Episode 405</p>
              <p className="book-ah__card-meta">December 19, 2019</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
