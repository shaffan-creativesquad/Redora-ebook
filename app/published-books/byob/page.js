import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'BYOB by Brian Scudamore',
  description:
    'BYOB by Brian Scudamore — the most intensely packed book of business advice ever compiled, featuring lessons from world-class leaders.',
}

export default function BYOBPage() {
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
                  src="./assets/BrianScudamore_WebsiteCover.jpg"
                  alt="BYOB"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">BYOB</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/brian-scudamore">Brian Scudamore</Link>
                </p>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    You hold in your hands what might be the most intensely packed book of business
                    advice ever compiled. This book includes what young Brian Scudamore learned from
                    a series of private chats with a man who took $1,000 and turned it into a
                    personal net worth of $3.5 billion. It includes what Simon Sinek told Brian the
                    night he slept on his sofa. You&apos;ll meet an NBA superstar, a past president
                    of Starbucks, a British advertising tycoon, and a winner of the Nobel Prize in
                    Physics as they wander on and off these pages like movie stars on the red carpet
                    at the Academy Awards.
                  </p>
                  <p>
                    Wait! Do not read this book unless you are ready for change, because when you
                    get to the end, you will be a significantly different person. You have been
                    warned.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Business Management</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/byob"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
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

        {/* ── Author section ── */}
        <div className="bd-author-section">
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <Image
              src="https://scribemedia.com/hubfs/author-headshots/brian-scudamore.jpg"
              alt="Brian Scudamore"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/brian-scudamore">Brian Scudamore</Link>
              </h2>
              <div className="bd-author-bio">
                <p>MEET BRIAN</p>
                <p>
                  Brian Scudamore has created three hugely successful brands and an exceptional
                  corporate culture by embracing failure and curating advice from the world&apos;s
                  most respected business leaders. He&apos;s always taken the road less traveled,
                  spurred on by his insatiable curiosity and drive to do things bigger and
                  better&mdash;and always together&mdash;with the passionate people at
                  1-800-GOT-JUNK?, WOW 1 DAY PAINTING, and Shack Shine, all under O2E Brands.
                  Brian is on a mission to share wisdom from thirty years in entrepreneurship to
                  help others realize their biggest dreams, take risks, and start today.
                </p>
              </div>
              <Link href="/authors/brian-scudamore" className="bd-author-link">
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
            <a
              className="book-ah__card"
              href="/author-hour/episode/ep-205-brian-scudamore-wtf-willing-to-fail"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Brian Scudamore: WTF: Willing to Fail</p>
              <p className="book-ah__card-meta">November 02, 2018</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
            <a
              className="book-ah__card"
              href="/author-hour/episode/ep-893-brian-scudamore-episode-893"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Brian Scudamore: Episode 893</p>
              <p className="book-ah__card-meta">March 15, 2022</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
