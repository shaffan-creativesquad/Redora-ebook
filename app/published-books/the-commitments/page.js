import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'The Commitments | Scribe Media',
  description:
    'The Commitments by Tracy Thomas — #1 on Amazon and a Barnes & Noble and Wall Street Journal National Bestseller. A step-by-step guide to personal transformation.',
}

export default function TheCommitmentsPage() {
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
                  src="./assets/TracyThomas_WebsiteCover_2.png"
                  alt="The Commitments"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">The Commitments</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/tracy-thomas">Tracy Thomas</Link>
                </p>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    #1 on AMAZON, and a BARNES &amp; NOBLE and WALL STREET JOURNAL NATIONAL
                    BESTSELLERYou are meant to feel joy every day—to be wildly happy, deeply
                    purposeful, and fulfilled. So why are so many of us so miserable? The unconscious
                    emotional conditioning that most people have received in their lives keeps us
                    stuck in negative patterns of anxiety, depression, addiction, and aimlessness.
                    We&apos;ve been taught to live in reaction, not in intention.
                  </p>
                  <p>
                    In reality, life is not as hard as it&apos;s been made out to be. When you live
                    your life on purpose, you transform into the person you&apos;ve always wanted to
                    be. You don&apos;t need years of therapy and struggle to get there. All you need
                    are The Commitments.
                  </p>
                  <p>
                    Developed by Dr. Tracy Thomas for a client list that includes celebrities,
                    Fortune 500 CEOs, sports figures, and more, The Commitments are finally
                    available here, for the first time, to the general public. Don&apos;t get
                    trapped by confusion, uncertainty, or pain. Learn the secrets of The
                    Commitments, and get ready to live your most elevated life.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Personal Development</span>
                  <span className="bd-tag">Psychology and Counseling</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/TheCommitments"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$4.99</span>
                  </a>
                  <a
                    href="https://www.amazon.com/Commitments-Step-Step-Personal-Transformation/dp/B0B6784HMT/ref=sr_1_1?crid=25HNWT8QR4N2G&keywords=The+Commitments+a+step+by+step&qid=1658476082&s=audible&sprefix=the+commitments+a+step+by+step%2Caudible%2C59&sr=1-1"
                    className="bd-btn bd-btn--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen to Audiobook
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
              src="https://scribemedia.com/hubfs/author-headshots/Tracy_Thomas_Headshot.jpg"
              alt="Tracy Thomas"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/tracy-thomas">Tracy Thomas</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  Dr. Tracy Thomas is the Mogul Maker, Reality Creator, and Dynastic Empire Builder.
                  An award-winning psychologist and Wall Street Journal bestselling author of The
                  Commitments© and The Method©, she oversees The Empire Company as the world&apos;s
                  preeminent intentional conditioning expert.
                </p>
                <p>
                  Dr. Tracy and her team equip the greatest experts, performers, innovators and
                  leaders on the planet with precise action steps that transform them as individuals,
                  while also imbuing their families, teams, and boards with new purpose. At its
                  core, The Empire Company builds new worlds, ushering the global elite into their
                  highest calling and elevating the entirety of the human experience.
                </p>
                <p>
                  Nothing is impossible with The Empire Company: millions, billions, trillions, a
                  multi-generational family dynasty… any reality can be chosen and achieved with Dr.
                  Tracy&apos;s methodology.
                </p>
              </div>
              <Link href="/authors/tracy-thomas" className="bd-author-link">
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
              href="/author-hour/episode/ep-882-thomas-epperson-episode-882"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Thomas Epperson: Episode 882</p>
              <p className="book-ah__card-meta">February 23, 2022</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
