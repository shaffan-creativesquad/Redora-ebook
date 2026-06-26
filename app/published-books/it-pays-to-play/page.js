import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'It Pays to PLAY by Kristi Herold | Scribe Media',
  description:
    'Organizations that provide opportunities for employees to playfully connect, bond, and build friendships see improvements in retention, engagement, and innovation.',
}

export default function ItPaysToPlayPage() {
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
                  src="/assets/KristiHerold_WebsiteCover-book.jpg"
                  alt="It Pays to PLAY"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">It Pays to PLAY</h1>
                <p className="bd-author">by <a href="/authors/kristi-herold">Kristi Herold</a></p>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    &ldquo;All work and no play&rdquo; makes for a dull workplace&hellip;and a costly one.
                  </p>
                  <p style={{ marginTop: '0.75rem' }}>
                    Organizations that provide opportunities for employees to playfully connect, bond, and
                    build friendships see improvements in retention, engagement, and innovation. Intentional
                    play at work creates a culture that benefits all employees&apos; physical and mental
                    health <em>and</em> the company&apos;s bottom line.
                  </p>
                  <p style={{ marginTop: '0.75rem' }}>
                    <em>It Pays to PLAY</em> is a rich resource filled with ideas for play at work—whether
                    in-person, hybrid, or remote—and illustrates how the ROI from play is multi-faceted and
                    exponential. Learn the ways play can be easily and affordably implemented—regardless of
                    your industry—benefiting everyone from the most junior employee to the C-suite right
                    through to the end customer. It truly does pay to play.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Business Management</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/ItPaystoPLAY"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$8.00</span>
                  </a>
                  <a href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider" />
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a className="book-ah__card" href="/author-hour/episode/ep-1055-kristi-herold-episode-1055">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Kristi Herold: Episode 1055</p>
              <p className="book-ah__card-meta">October 24, 2022</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Kristi Herold</h2>
          <div className="bd-related-grid">
            <a href="/published-books/the-second-in-command" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/CameronHerold4_WebsiteCover.jpg"
                alt="The Second in Command"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">The Second in Command</div>
            </a>
            <a href="/published-books/meetings-suck" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/meetings-suck.jpg"
                alt="Meetings Suck"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Meetings Suck</div>
            </a>
            <a href="/published-books/vivid-vision-a-remarkable-tool-for-aligning-your-business-around-a-shared-vision-of-the-future" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/vivid-vision.jpg"
                alt="Vivid Vision"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Vivid Vision</div>
            </a>
            <a href="/published-books/free-pr" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/free-PR.jpg"
                alt="Free PR"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Free PR</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
