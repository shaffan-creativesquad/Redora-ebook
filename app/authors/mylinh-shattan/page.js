import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'MyLinh Shattan | Scribe Media Author',
  description:
    'MyLinh Shattan is a West Point graduate, army veteran, and author of Raising Athena — a memoir about how West Point shaped two generations of her family.',
}

export default function MylinhShattanAuthorPage() {
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
                src="/assets/mylinh-shattan-headshot.png"
                alt="MyLinh Shattan"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">MyLinh Shattan</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Memoir</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/B0GTBRT18Q?tag=scribemedia0a-20"
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
            <h2 className="author-detail__section-title">About MyLinh</h2>
            <div className="author-detail__bio">
              <p>
                MyLinh Brewster Shattan was born in Washington, DC, then lived in Saigon until
                evacuated with her family in 1975. She reported to West Point in 1987, where she was
                a cadet captain and captain of the women&apos;s track team. Upon graduation, she
                served as an army officer in a newly reunified Germany. She holds master&apos;s
                degrees from Queens University and Florida Southern College. As creator and editor of
                the TreeHouseLetter and podcast, she writes about the best ideas and writing out
                there. MyLinh&apos;s husband is her West Point classmate. Their three children also
                graduated from West Point and serve in the US Army.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link
                href="/published-books/raising-athena"
                className="author-detail__book-card"
              >
                <div className="author-detail__book-cover-wrap">
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/raising-athena-cover.jpg"
                    alt="Raising Athena"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Raising Athena</p>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Memoir</span>
              <span className="author-detail__tag">Military</span>
            </div>
          </div>

          {/* ── Case Study banner ── */}
          <div className="author-detail__case-study">
            <div className="author-detail__case-study-content">
              <p className="author-detail__case-study-eyebrow">★ Scribe Case Study</p>
              <p className="author-detail__case-study-title">
                MyLinh Shattan&apos;s <em>Raising Athena</em> Launched at West Point With 500
                Returning Alumni and an Audiobook Timed to the 250th
              </p>
              <p className="author-detail__case-study-desc">
                MyLinh Shattan&apos;s memoir <em>Raising Athena</em>, rejected by traditional
                publishers and published by Scribe, launched at West Point&apos;s 50th anniversary
                of women with 500 returning alumni in&hellip;
              </p>
            </div>
            <Link
              href="/success-stories/mylinh-shattan-raising-athena-launched-at-west-point"
              className="author-detail__case-study-btn"
            >
              Read the Case Study <span style={{ fontSize: '1.1rem' }}>→</span>
            </Link>
          </div>

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <Link
                href="/author-hour/episode/mylinh-shattan-on-how-west-point-shaped-two-generations"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">
                  MyLinh Shattan on How West Point Shaped Two Generations
                </p>
                <p className="author-detail__ah-meta">June 01, 2026 · 00:32:56</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join MyLinh and 2,000+ authors who have published with Scribe Media.
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
