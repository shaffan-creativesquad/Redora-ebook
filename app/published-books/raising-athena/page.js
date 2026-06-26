import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Raising Athena | Scribe Media',
  description:
    'Raising Athena by MyLinh Shattan — a passionate, nuanced memoir exploring war, service, and what it means to watch your daughter follow in your footsteps at West Point.',
}

export default function RaisingAthenaPage() {
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
                  src="/assets/raising-athena-cover.jpg"
                  alt="Raising Athena"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Raising Athena</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/mylinh-shattan" className="bd-author-link">
                    MyLinh Shattan
                  </Link>
                </p>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>The hardest conflict to face is the one within.</p>
                  <p>
                    MyLinh Shattan is no stranger to conflict, from evacuating during the fall of
                    Saigon to reporting to West Point shortly after it accepts women. But when her
                    daughter, Cara, becomes a West Point cadet, she confronts memories she would
                    rather leave behind and new fears as a military mom.
                  </p>
                  <p>
                    For thirty years, MyLinh evaded questions about serving in the US Army. Now,
                    watching her daughter follow in her footsteps, she finds herself searching for
                    answers.
                  </p>
                  <p>
                    Why does anyone join the military? What&apos;s changed for women in the past
                    three decades? What hasn&apos;t?
                  </p>
                  <p>
                    <em>Raising Athena</em> is a passionate, nuanced, often philosophical testament
                    to the dedication and courage of those who protect our country. This memoir
                    explores in intimate detail the stories we tell ourselves about war, the
                    disconnect between myth and reality, and what it means to serve.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Memoir</span>
                  <span className="bd-tag">Military</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/raisingathena"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
                  </a>
                  <Link
                    href="/success-stories/mylinh-shattan-raising-athena-launched-at-west-point"
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
              src="/assets/mylinh-shattan-headshot.png"
              alt="MyLinh Shattan"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/mylinh-shattan">MyLinh Shattan</Link>
              </h2>
              <p className="bd-author-bio">
                MyLinh Brewster Shattan was born in Washington, DC, then lived in Saigon until
                evacuated with her family in 1975. She reported to West Point in 1987, where she was
                a cadet captain and captain of the women&apos;s track team. Upon graduation, she
                served as an army officer in a newly reunified Germany. She holds master&apos;s
                degrees from Queens University and Florida Southern College. As creator and editor of
                the TreeHouseLetter and podcast, she writes about the best ideas and writing out
                there. MyLinh&apos;s husband is her West Point classmate. Their three children also
                graduated from West Point and serve in the US Army.
              </p>
              <Link href="/authors/mylinh-shattan" className="bd-author-link">
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
              href="/author-hour/episode/mylinh-shattan-on-how-west-point-shaped-two-generations"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">
                MyLinh Shattan on How West Point Shaped Two Generations
              </p>
              <p className="book-ah__card-meta">June 01, 2026 · 00:32:56</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
