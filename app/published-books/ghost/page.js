import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Ghost | Scribe Media',
  description:
    'Ghost by Iona Holloway — a haunting, vulnerable memoir about why strong women go to war with their bodies, and how to find the heart to heal.',
}

export default function GhostPage() {
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
                  src="/assets/Ghost.jpg"
                  alt="Ghost"
                  width={300}
                  height={450}
                  className="bd-cover"
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Ghost</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/iona-holloway" className="bd-author-link">
                    Iona Holloway
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.6 · 113 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Reference
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    I am going to show you why your pain is invisible to everyone else, and why, in
                    the struggle to be seen, your body became your battlefield.
                  </p>
                  <p>
                    From the outside, your life looks polished. You&apos;re talented, successful,
                    strong. Your perfection safeguards you against suffering. Everyone assumes
                    you&apos;re fine, and you hide in plain sight.
                  </p>
                  <p>
                    But the truth is that, inside, you feel like a fraud. From childhood, you&apos;ve
                    been gaslighted by your own gifts. &ldquo;Good enough&rdquo; is impossible. But
                    being perfect leaves no space to be human. You suffer in silence. You use your
                    body as a canvas to scream your pain, shrinking in a desperate bid to be visible.
                  </p>
                  <p>
                    This book is my story and the story of women I have worked with. It is the story
                    of how vulnerability will unlock your truth and set you free.
                  </p>
                  <p>
                    Iona Holloway woke up one day and knew she could never go on another diet. She
                    was willing to sacrifice her &ldquo;perfect body&rdquo; if it meant she felt
                    whole&mdash;not lost, ashamed, and hopeless. She became her own guide on the
                    hard journey of coming home to herself.
                  </p>
                  <p>
                    Haunting, vulnerable, blunt, and stunning, <em>Ghost</em> is a story that
                    reveals why strong women go to war with their bodies. In her debut memoir, Iona
                    Holloway explores lost childhood, identity webs, hot shame, emotional freeze,
                    love, and lineage to tell the story of how to change not just behaviours, but
                    beliefs. How to ask for help. How to let go of perfect.
                  </p>
                  <p>
                    Now is not the time to shrink. This book won&apos;t heal you, but it will help
                    you find the heart to heal.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Memoir</span>
                  <span className="bd-tag">Health and Diet</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/B08PVXMGQP?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$6.99</span>
                  </a>
                  <Link
                    href="/success-stories/iona-holloway-ghost"
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
              src="/assets/Iona-Holloway-541-296.jpg"
              alt="Iona Holloway"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/iona-holloway">Iona Holloway</Link>
              </h2>
              <p className="bd-author-bio">
                It is the story of how vulnerability will unlock your truth and set you free. Iona
                Holloway woke up one day and knew she could never go on another diet. She was willing
                to sacrifice her &ldquo;perfect body&rdquo; if it meant she felt whole&mdash;not
                lost, ashamed, and hopeless. She became her own guide on the hard journey of coming
                home to herself. Haunting, vulnerable, blunt, and stunning, <em>Ghost</em> is a
                story that reveals why strong women go to war with their bodies. In her debut memoir,
                Iona Holloway explores lost childhood, identity webs, hot shame, emotional freeze,
                love, and lineage to tell the story of how to change not just behaviours, but
                beliefs.
              </p>
              <Link href="/authors/iona-holloway" className="bd-author-link">
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
              href="/author-hour/episode/ep-594-iona-holloway-ghost-why-perfect-women-shrink"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Iona Holloway: Ghost: Why Perfect Women Shrink</p>
              <p className="book-ah__card-meta">December 18, 2020</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
