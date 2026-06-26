import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Explosive Growth by Cliff Lerner',
  description:
    'Explosive Growth by Cliff Lerner — the ultimate startup playbook on growing to 100 million users, revealing genius growth tactics and a step-by-step playbook for massive growth.',
}

export default function ExplosiveGrowthPage() {
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
                  src="/assets/explosive-growth.jpg"
                  alt="Explosive Growth"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Explosive Growth</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/cliff-lerner">Cliff Lerner</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">
                    ★★★★<span className="bd-star-empty">☆</span>
                  </span>
                  <span className="bd-rating-value">4.4</span>
                  <span className="bd-rating-count">608 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Web Marketing</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    <em>Explosive Growth</em> is a Business Book like no other. It is a hilarious,
                    irreverent, and surprisingly moving true story about the crazy world of
                    startups, growth hacking, and making history at the intersection of Silicon
                    Valley and Madison Avenue.
                  </p>
                  <p>
                    Cliff Lerner created the world&apos;s first online dating app and grew it to
                    100 million users after making a daring bet on an unknown platform called
                    Facebook. His company&apos;s stock price went up 2,000% in one year, making
                    it one of the biggest early success stories in the Facebook App ecosystem.
                  </p>
                  <p>
                    <em>Explosive Growth</em> reveals this incredible untold story while offering
                    a rare behind-the-scenes look at a fast-growing startup. With lively and often
                    hilarious storytelling, this book uncovers genius growth tactics, numerous case
                    studies, and a step-by-step playbook to help your startup achieve massive
                    growth in any industry.
                  </p>
                  <p>
                    <strong>You will learn how to:</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>IGNITE EXPLOSIVE GROWTH</strong> — the unconventional strategies
                      that took this startup from near-bankruptcy to 100 million users
                    </li>
                    <li>
                      <strong>ONLY 3 METRICS</strong> — the counterintuitive approach of focusing
                      on just 3 metrics that drove massive growth
                    </li>
                    <li>
                      <strong>VIRAL GROWTH</strong> — the secret to building viral loops that
                      spread your product like wildfire
                    </li>
                    <li>
                      <strong>GENIUS MEDIA HACKS</strong> — the media strategies that generated
                      millions in free press coverage
                    </li>
                    <li>
                      <strong>PASSIONATE EMPLOYEES</strong> — how to build a team that is
                      obsessively passionate about growth
                    </li>
                  </ul>
                  <p>&nbsp;</p>
                  <p>
                    <strong>Who Is This Book For?</strong>
                  </p>
                  <p>
                    <strong>Entrepreneurs &amp; Startups</strong> — If you&apos;re building a
                    startup and want to grow fast, this book is your playbook.
                  </p>
                  <p>
                    <strong>Growth Hackers/Marketing/Product/Data</strong> — The tactics in this
                    book apply to any company trying to grow, regardless of industry.
                  </p>
                  <p>
                    <strong>Public Relations</strong> — The media hacks in this book will change
                    the way you think about PR forever.
                  </p>
                  <p>
                    <strong>CEOs</strong> — The leadership lessons in this book will help you
                    build a culture of growth.
                  </p>
                  <p>
                    <strong>Fans of The Social Network</strong> — If you loved the movie, you
                    will love this book.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Marketing</span>
                  <span className="bd-tag">Business Management</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/3xzv6I9?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon $9.07
                  </a>
                  <a
                    href="/success-stories/cliff-lerner-entrepreneurship-playbook"
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
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/cliff-lerner">Cliff Lerner</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  &ldquo;BEST STARTUP BOOKS OF ALL TIME&rdquo; - Benzinga&ldquo;TOP
                  GROWTH-HACKING BUSINESS BOOK&rdquo; - Entrepreneur MagazineExplosive Growth is
                  your ultimate startup playbook, offering a thrilling journey and a rare
                  behind-the-scenes look at a fast-growing startup that created the world&apos;s
                  first online dating app and grew to 100 million users. With lively and often
                  hilarious storytelling, Explosive Growth reveals genius growth tactics, numerous
                  case studies, and a step-by-step playbook to help your startup achieve massive
                  growth in any industry. Discover the Wild Story:When Snap Interactive was on the
                  brink of collapse, founder Cliff Lerner made a daring bet on an unknown platform
                  called Facebook. In &lsquo;Explosive Growth,&rsquo; Cliff Lerner takes you
                  along on the journey of one of the biggest early success stories in the Facebook
                  App ecosystem.&rdquo; - Michael Lazerow, Founder of Buddy Media, Sold to
                  Salesforce for $700m+.
                </p>
              </div>
              <Link href="/authors/cliff-lerner" className="bd-author-link">
                View full profile <span>→</span>
              </Link>
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
              href="/author-hour/episode/cliff-lerner"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Cliff Lerner</p>
              <p className="book-ah__card-meta">November 18, 2017 · 01:15:42</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
            <a
              className="book-ah__card"
              href="/author-hour/episode/ep-67-cliff-lerner-explosive-growth"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Cliff Lerner: Explosive Growth</p>
              <p className="book-ah__card-meta">November 06, 2017</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
