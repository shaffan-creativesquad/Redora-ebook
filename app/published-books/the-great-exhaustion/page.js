import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'The Great Exhaustion | Scribe Media',
  description:
    'The Great Exhaustion by Josh Dix — a published Scribe Media title.',
}

export default function TheGreatExhaustionPage() {
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
              {/* ── Cover placeholder ── */}
              <div>
                <div style={{
                  width: '100%',
                  aspectRatio: '2/3',
                  background: 'rgba(52, 217, 195, 0.1)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent, var(--accent-gold))',
                  fontSize: '1.5rem',
                }}>
                  No Cover
                </div>
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">The Great Exhaustion</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/josh-dix" className="bd-author-link">
                    Josh Dix
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

      </main>
      <Footer />
    </>
  )
}
