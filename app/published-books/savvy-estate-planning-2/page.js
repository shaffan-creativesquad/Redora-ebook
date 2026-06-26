import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Savvy Estate Planning | Scribe Media',
  description:
    'Savvy Estate Planning by James Cunningham — a no-nonsense guide to avoiding the top-ten estate planning mistakes that could damage your financial succession, family, heirs, and legacy.',
}

export default function SavvyEstatePlanningPage() {
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
                  src="/assets/savvy-estate-planning.jpg"
                  alt="Savvy Estate Planning"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Savvy Estate Planning</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/james-cunningham">James Cunningham</Link>
                </p>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    Too many people make the wrong choices when it comes to estate planning. If
                    it&apos;s not done properly, you could leave your loved ones facing trouble when
                    you pass away or become incapacitated. Fortunately, you can learn from
                    others&apos; mistakes and be prepared before speaking to a lawyer about your
                    future.
                  </p>
                  <p>
                    In this no-nonsense guide, attorney James L. Cunningham, Jr. shows how to avoid
                    the top-ten mistakes that could damage your financial succession, family, heirs,
                    and legacy. You&apos;ll get the unvarnished picture on probate, living trusts,
                    living wills, powers of attorney, conservators, and guardians, as well as
                    disability and incapacity planning and how to find the right attorney for you.
                    There&apos;s even a checklist to guide you on what issues to discuss with them.
                  </p>
                  <p>
                    <em>Savvy Estate Planning</em> provides the essentials you need to know about
                    estate planning. The only mistake you could make now would be to ignore it.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Financial Planning</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/SavvyEstatePlanning"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
                  </a>
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
          <div className="book-ah__divider" />
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <Link
              href="/author-hour/episode/ep-860-james-cunningham-episode-860"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">James Cunningham: Episode 860</p>
              <p className="book-ah__card-meta">January 24, 2022</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
