import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Reframe by Mona Patel',
  description:
    '"Why not? What if?" If those questions give you pause, it might be because you\'ve been carrying around the wrong frame. In this personal book, Mona Patel wants to outfit you with a new way of seeing and working.',
}

export default function ReframePage() {
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
                  src="/assets/reframe.jpg"
                  alt="Reframe"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Reframe</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/mona-patel">Mona Patel</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">
                    ★★★★<span className="bd-star-empty">☆</span>
                  </span>
                  <span className="bd-rating-text">4.2 · 64 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Business Consulting
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    &ldquo;Why not? What if? If those questions give you pause, it might be because
                    you&apos;ve been carrying around the wrong frame. In this personal book, Mona
                    Patel wants to outfit you with a new way of seeing and working.&rdquo; -Seth
                    Godin, Author of Your Turn&ldquo;Part business, part personal development,
                    Reframe is full of practical ways to jumpstart innovation.&rdquo; -Adam Grant,
                    Wharton Professor and New York Times bestselling Author of Give and Take What if
                    we could affect profound positive change by creating more innovative
                    companies?Too many people feel stuck at work.They have ideas that could really
                    disrupt the market and help their companies create beautiful, innovative,
                    game-changing products and services, but a host of reasons hold them back. This
                    book dives into those reasons, and offers a techniques to help people unlock
                    their creativity and generate brilliant ideas. It&apos;s a philosophy and
                    methodology used successfully for years with Fortune 500 clients, and it&apos;s
                    the driving force behind the incredible growth of Motivate Design, a leading
                    user experience design agency. In Reframe, the CEO, Mona Patel, shares her
                    recipe for the first time, along with the compelling story of how she got there,
                    on how to spark innovation and creativity anywhere, anytime. Those who are
                    disappointed by the stagnation that plagues companies trying to be innovative
                    will find fun and highly effective ways to remove mental, professional, and
                    organizational barriers and bring out (and condition) each employee&apos;s
                    creative muscle. The goal of Reframe is to help you see the difference between
                    facts and beliefs, impossible and possible, and problems and opportunities. The
                    shift in how you see things changes everything.Case studies, advice from years
                    of strategic design and innovation consulting, and a how-to guide for a unique
                    creative framework, provide convincing evidence that your organization&apos;s
                    next big idea is around the corner. This book will help you conquer roadblocks,
                    identify opportunities and generate brilliant ideas.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Leadership</span>
                  <span className="bd-tag">B2B Consulting</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Reframe-Shift-Work-Innovate-Think-ebook/dp/B00VTZX9XK/?&_encoding=UTF8&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$3.99</span>
                  </a>
                  <Link href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Author section (no photo) ── */}
        <div className="bd-author-section">
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/mona-patel">Mona Patel</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  They have ideas that could really disrupt the market and help their companies
                  create beautiful, innovative, game-changing products and services, but a host of
                  reasons hold them back. In Reframe, the CEO, Mona Patel, shares her recipe for
                  the first time, along with the compelling story of how she got there, on how to
                  spark innovation and creativity anywhere, anytime.
                </p>
              </div>
              <Link href="/authors/mona-patel" className="bd-author-link">
                View full profile <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Related books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Mona Patel</h2>
          <div className="bd-related-grid">
            <Link href="/published-books/prep-expert-digital-sat-playbook" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/ShaanPatel_EbookCover_Final.webp"
                alt="Prep Expert Digital SAT Playbook"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Prep Expert Digital SAT Playbook</div>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
