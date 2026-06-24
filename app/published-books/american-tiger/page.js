import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'American Tiger | Scribe Media',
  description:
    'American Tiger by Adam Skolnick — published with Scribe Media. Adam Skolnick is best known as the co-writer of the hit David Goggins memoirs CAN\'T HURT ME and NEVER FINISHED.',
}

export default function AmericanTigerPage() {
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
              {/* ── Cover (no image available) ── */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '2/3',
                  background: 'rgba(52, 217, 195, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-gold)',
                  fontSize: '1.5rem',
                }}
              >
                No Cover
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">American Tiger</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/adam-skolnick" className="bd-author-link">
                    Adam Skolnick
                  </Link>
                </p>

                <h2 className="bd-section-title">About This Book</h2>
                <p className="bd-description">
                  Explore this published Scribe Media title and discover the author&apos;s
                  perspective, insights, and story.
                </p>

                <div className="bd-actions">
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
              src="/assets/AdamSkolnick_Headshot.jpg"
              alt="Adam Skolnick"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/adam-skolnick">Adam Skolnick</Link>
              </h2>
              <p className="bd-author-bio">
                Adam Skolnick has covered adventure and endurance sports, travel, human rights and
                the environment for nearly twenty years. His work has appeared in The New York Times,
                Outside, Wired, Playboy, Lonely Planet, BBC, and Men&apos;s Health, but he&apos;s
                best known as the co-writer and audiobook narrator of the hit David Goggins memoirs,{' '}
                <em>CAN&apos;T HURT ME: Master Your Mind and Defy the Odds</em> and{' '}
                <em>NEVER FINISHED: Unshackle Your Mind and Win the War Within</em> (over six
                million sold combined). He is also the author of{' '}
                <em>ONE BREATH: Freediving, Death and the Quest to Shatter Human Limits</em>, which
                was featured in the hit Netflix documentary, <em>The Deepest Breath</em>, and is a
                frequent contributor to the Rich Roll Podcast. You can find him on Instagram
                @adamskolnick. This is his first novel.
              </p>
              <Link href="/authors/adam-skolnick" className="bd-author-link">
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
              href="/author-hour/episode/adam-skolnick-how-cant-hurt-me-led-to-american-tiger"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">
                Adam Skolnick: How &ldquo;Can&apos;t Hurt Me&rdquo; Led to &ldquo;American Tiger&rdquo;
              </p>
              <p className="book-ah__card-meta">November 04, 2025 · 00:43:22</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
