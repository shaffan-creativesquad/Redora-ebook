import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Adam Skolnick | Scribe Media Author',
  description:
    'Adam Skolnick has covered adventure and endurance sports, travel, human rights and the environment for nearly twenty years. He is best known as the co-writer of the hit David Goggins memoirs, CAN\'T HURT ME and NEVER FINISHED.',
}

export default function AdamSkolnickAuthorPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">

          <Link href="/authors" className="author-detail__back">
            <i className="ph ph-arrow-left"></i> All Authors
          </Link>

          {/* ── Header ── */}
          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <Image
                src="/assets/AdamSkolnick_Headshot.jpg"
                alt="Adam Skolnick"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Adam Skolnick</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Fiction</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/American-Tiger-Adam-Skolnick/dp/1544549865?linkCode=sl1&tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
              </div>
            </div>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Adam</h2>
            <div className="author-detail__bio">
              <p>
                Adam Skolnick has covered adventure and endurance sports, travel, human rights and
                the environment for nearly twenty years. His work has appeared in The New York Times,
                Outside, Wired, Playboy, Lonely Planet, BBC, and Men&apos;s Health, but he&apos;s
                best known as the co-writer and audiobook narrator of the hit David Goggins memoirs,{' '}
                <em>CAN&apos;T HURT ME: Master Your Mind and Defy the Odds</em> and{' '}
                <em>NEVER FINISHED: Unshackle Your Mind and Win the War Within</em> (over six million
                sold combined). He is also the author of{' '}
                <em>ONE BREATH: Freediving, Death and the Quest to Shatter Human Limits</em>, which
                was featured in the hit Netflix documentary,{' '}
                <em>The Deepest Breath</em>, and is a frequent contributor to the Rich Roll Podcast.
                You can find him on Instagram @adamskolnick. This is his first novel.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <ul className="author-detail__books-list">
              <li className="author-detail__book-item">
                <Link href="/published-books/american-tiger" className="author-detail__book-link">
                  <i className="ph ph-book-open-text author-detail__book-icon"></i>
                  American Tiger
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Fiction</span>
            </div>
          </div>

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <Link
                href="/author-hour/episode/adam-skolnick-how-cant-hurt-me-led-to-american-tiger"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">
                  Adam Skolnick: How &ldquo;Can&apos;t Hurt Me&rdquo; Led to &ldquo;American Tiger&rdquo;
                </p>
                <p className="author-detail__ah-meta">November 04, 2025 · 00:43:22</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Adam and 2,000+ authors who have published with Scribe Media.
            </p>
            <Link href="/consult" className="author-detail__cta-btn">
              Schedule a Consult
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
