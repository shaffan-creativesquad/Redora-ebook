import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Greedy Bastards | Scribe Media',
  description:
    'Greedy Bastards by Sheryl Sculley — the story of her uphill battle to turn around San Antonio city government and avoid financial collapse. Bestseller in Labor & Industrial Relations.',
}

export default function GreedyBastardsPage() {
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
                  src="./assets/GreedyBastards.jpg"
                  alt="Greedy Bastards"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Greedy Bastards</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/sheryl-sculley">Sheryl Sculley</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.6 · 237 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Labor &amp; Industrial Relations
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    When Sheryl Sculley was recruited to serve as San Antonio&apos;s new city
                    manager in 2005, the organization she inherited was a disorganized mess. City
                    infrastructure was crumbling, strong financial policies and systems were
                    nonexistent, many executive positions were vacant, public satisfaction was low,
                    ethical standards were weak, and public safety union salaries and benefits were
                    outpacing revenues, crowding out other essential city services. Simply put: San
                    Antonio was on the verge of collapse.
                  </p>
                  <p>
                    <em>Greedy Bastards</em> tells the story of Sheryl and her new team&apos;s
                    uphill battle to turn around San Antonio city government. She takes you behind
                    closed doors to share the hard changes she made and the strategies she used to
                    create mutually beneficial solutions to the city&apos;s biggest problems. Many
                    of the issues Sheryl found in San Antonio are present in cities across the US.
                  </p>
                  <p>
                    Packed with wins and losses, lessons learned, and pitfalls encountered,{' '}
                    <em>Greedy Bastards</em> is a guidebook for any city official tasked with
                    turning around a struggling city.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Politics</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/B08D8PY9SM?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$9.99</span>
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
            <Image
              src="https://scribemedia.com/hubfs/author-headshots/sheryl-sculley.jpg"
              alt="Sheryl Sculley"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/sheryl-sculley">Sheryl Sculley</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  When Sheryl Sculley was recruited to serve as San Antonio&apos;s new city manager
                  in 2005, the organization she inherited was a disorganized mess.
                </p>
              </div>
              <Link href="/authors/sheryl-sculley" className="bd-author-link">
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
            <Link
              href="/author-hour/episode/ep-485-sheryl-sculley-greedy-bastards-one-city-s-texas-sized-struggle-to-avoid-a"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">
                Sheryl Sculley: Greedy Bastards: One City&apos;s Texas Sized Struggle to Avoid a
                Financial Crisis
              </p>
              <p className="book-ah__card-meta">July 13, 2020</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
