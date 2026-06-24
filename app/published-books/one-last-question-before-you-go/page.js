import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'One Last Question Before You Go | Scribe Media',
  description:
    'One Last Question Before You Go by Kyle Thiermann — blending witty narrative with practical advice and twenty-seven bold questions, the popular podcast host and pro big wave surfer shows how interviewing our parents can reframe the way we see each other.',
}

export default function OneLastQuestionBeforeYouGoPage() {
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
                  src="/assets/61zQSkOstsL._SL1360_.jpg"
                  alt="One Last Question Before You Go"
                  width={300}
                  height={450}
                  className="bd-cover"
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">One Last Question Before You Go</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/kyle-thiermann" className="bd-author-link">
                    Kyle Thiermann
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.9 · 78 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Midlife Self-Help
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    How well do you know your parents? Really.
                  </p>
                  <p>
                    <strong>Kyle Thiermann</strong>&apos;s dad once bought a hot-air balloon off a
                    hitchhiker. His mom and stepdad are trying to spread a conspiracy theory. Now,
                    with his first book, Kyle wanders the American West—through rich redwood forests,
                    seedy surf culture, and a 1997 RV with teal carpet interior—to probe how asking
                    the right questions can change a relationship.
                  </p>
                  <p>
                    Blending witty narrative with practical advice and{' '}
                    <strong>twenty-seven bold questions</strong>, the popular podcast host and pro
                    big wave surfer shows that interviewing our parents can create way more than
                    digital family heirlooms. It can reframe the way we see each other.
                  </p>
                  <p>
                    <em>One Last Question Before You Go</em> is part story, part strategy—and
                    entirely unexpected.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Home and Family</span>
                  <span className="bd-tag">Family</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/43c1uOa?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$17.99</span>
                  </a>
                  <a
                    href="https://amzn.to/4otbJX6"
                    className="bd-btn bd-btn--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen to Audiobook
                  </a>
                  <Link
                    href="/success-stories/kyle-thiermann-one-last-question-before-you-go"
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
              src="/assets/Kylie_book.jpg"
              alt="Kyle Thiermann"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/kyle-thiermann">Kyle Thiermann</Link>
              </h2>
              <p className="bd-author-bio">
                Kyle Thiermann is a writer, podcast host, and professional surfer. His work spans
                from editorial (Men&apos;s Health, Surfer, Outside) to creative (Patagonia, Yeti,
                MUD\WTR) to The Kyle Thiermann Show, which has over 400 interviews with far-flung
                guests like Peter Attia, Matt Taibbi, Steve Rinella, Charles Duhigg, Duncan
                Trussell, Simon Rex, Kai Lenny, and Mick Fanning. Earlier, Kyle tried out standup
                comedy before discovering that 9 pm is past his bedtime. At least, that&apos;s the
                story he tells himself.
              </p>
              <Link href="/authors/kyle-thiermann" className="bd-author-link">
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
              href="/author-hour/episode/kyle-thiermann-everyone-should-interview-their-parents"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">
                Kyle Thiermann: Everyone Should Interview Their Parents
              </p>
              <p className="book-ah__card-meta">January 07, 2026 · 01:22:28</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
