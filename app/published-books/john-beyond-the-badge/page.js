import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Beyond the Badge | Scribe Media',
  description:
    "Welcome to Thailand: there's no room for error, and the stakes are high. As an FBI Agent stationed in Bangkok, John Schachnovsky must build trust, goodwill, and long-term relationships with his Thai counterparts.",
}

export default function BeyondTheBadgePage() {
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
                  src="./assets/91Fzy3QOJ2L._SL1500_.jpg"
                  alt="Beyond the Badge"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Beyond the Badge</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/john-schachnovsky" className="bd-author-link">
                    John Schachnovsky
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★<span className="star-empty">☆</span></span>
                  <span className="bd-rating-text">4.4 · 30 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Reference &amp; Collections of Biographies
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>Welcome to Thailand: there&apos;s no room for error, and the stakes are high.</p>
                  <p>
                    As an FBI Agent stationed in Bangkok, <strong>John Schachnovsky</strong> must
                    build trust, goodwill, and long-term relationships with his Thai counterparts.{' '}
                    <em>Beyond the Badge</em> explores how those relationships lead to the capture of
                    dangerous criminals, transcending borders.
                  </p>
                  <p>
                    From high-profile incidents like the shocking death of David Carradine to
                    handling overseas terrorism, from the extradition of a suspect in the murder of a
                    United States Marine to apprehending a notorious kidnapper with an Interpol Red
                    Notice, experience true international crime investigations as never before: behind
                    the scenes and firsthand.
                  </p>
                  <p>
                    Follow former Special Agent Schachnovsky as he takes on Irish mobsters, parental
                    kidnappers, child abusers, cyber criminals, and murderers. More than a collection
                    of riveting tales of intrigue, <em>Beyond the Badge</em> is a window into FBI
                    foreign partnerships&mdash;a critical reminder of the importance of international
                    cooperation in the fight against crime.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Memoir</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/4oSmOAm?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$19.99</span>
                  </a>
                  <Link
                    href="/success-stories/fbi-international-crime-fighting-into-beyond-the-badge"
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
              href="/author-hour/episode/john-schachnovsky-72-hours-that-became-my-book"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">
                John Schachnovsky: 72 Hours That Became My Book
              </p>
              <p className="book-ah__card-meta">December 03, 2025 · 00:35:11</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
