import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Painted Baby | Scribe Media',
  description:
    'Painted Baby by Matt Shoup — how revealing your dirty little secret builds genuine connections, deep trust, and long-lasting relationships with clients.',
}

export default function PaintedBabyPage() {
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
                  src="./assets/MattShoup_WebsiteCover.jpg"
                  alt="Painted Baby"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Painted Baby</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/matt-shoup" className="bd-author-link">
                    Matt Shoup
                  </Link>
                </p>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    Painting a picture of perfection prevents true connection. Every business leader
                    has a dirty little secret tucked away, never dreaming they would share it with
                    anyone, let alone prospective clients. But revealing it tells an important story
                    and lays the groundwork for genuine connections between you, your clients, and
                    those you serve. It inspires others, showing them that honesty is a priority and
                    accountability is unconditional. Revealing this secret empowers you to show the
                    best version of yourself by sharing how you have handled your worst
                    moments&mdash;which is exactly what your clients want to understand.
                  </p>
                  <p>
                    In <em>Painted Baby</em>, serial entrepreneur Matt Shoup shows how to establish
                    real and deep connections, build true rapport, and create long-lasting trust with
                    clients and others you serve. He invites you on an empowering journey to explore
                    your imperfections and grow comfortable with your guard down, allowing the
                    rawest, most compelling version of yourself to shine through. You&apos;ll learn
                    the tenets of great storytelling, why crafting your message counts, and how to
                    communicate with conviction, even when you&apos;re vulnerable.
                  </p>
                  <p>
                    Are you ready for a challenge? Step outside your comfort zone with this
                    innovative approach to embracing imperfection.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Business Management</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/PaintedBaby"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$6.99</span>
                  </a>
                  <Link
                    href="/success-stories/matt-shoup-painted-baby-cracked-five-figure-speaking-threshold"
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

        {/* ── Author section ── */}
        <div className="bd-author-section">
          <div className="bd-divider"></div>
          <div className="bd-author-layout">
            <Image
              src="/assets/Matt_Shoup_Headshot.jpg"
              alt="Matt Shoup"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/matt-shoup">Matt Shoup</Link>
              </h2>
              <p className="bd-author-bio">
                Matt Shoup is a serial entrepreneur, bilingual keynote speaker, and award-winning
                business leader who is passionate about inspiring entrepreneurs in realizing their
                leadership potential. Since 2005, Matt has founded six successful companies and been
                featured on Fox Business, the BBC, U.S. News &amp; World Report, and Entrepreneur.
                A Brazilian jujitsu black belt, Spanish coffee addict, aspiring paella chef, and fan
                of all things Spain, Matt lives in northern Colorado with his wife, Emily; their
                children, Riley and Hailey; and Romeo, their giant schnoodle.
              </p>
              <Link href="/authors/matt-shoup" className="bd-author-link">
                View full profile →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <Link
              href="/author-hour/episode/matt-shoup-how-one-book-unlocked-five-figure-speaking-gigs"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">
                Matt Shoup: How One Book Unlocked Five-Figure Speaking Gigs
              </p>
              <p className="book-ah__card-meta">May 08, 2026 · 00:27:01</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
            <Link
              href="/author-hour/episode/ep-1099-matt-shoup-episode-1099"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Matt Shoup: Episode 1099</p>
              <p className="book-ah__card-meta">December 20, 2022</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
