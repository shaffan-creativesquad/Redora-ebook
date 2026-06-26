import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Fans First by Jesse Cole',
  description:
    'The Savannah Bananas sell out every game, have a waitlist in the thousands, and entertain millions on social media. Learn how with Fans First by Jesse Cole.',
}

export default function FansFirstPage() {
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
                  src="/assets/JesseCole_eBookCover_Final-1.jpg"
                  alt="Fans First"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Fans First</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/jesse-cole">Jesse Cole</Link>
                </p>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>The Savannah Bananas should not exist.</p>
                  <p>
                    You can&apos;t name any of their players. They play in a 1920s-era ballpark with
                    no ads or billboards. They play in kilts, stilts, and stilettos. They even have
                    an all-grandma dance team: the Banana Nanas.
                  </p>
                  <p>Everything the Bananas do is unconventional. It shouldn&apos;t work.</p>
                  <p>
                    And yet they sell out every game, have a waitlist in the thousands, ship
                    merchandise around the globe, and entertain millions of followers on social media.
                  </p>
                  <p>ESPN calls the Bananas &ldquo;the greatest show in baseball.&rdquo;</p>
                  <p>How is this even possible?</p>
                  <p>Two words: Fans First.</p>
                  <p>
                    Packed with behind-the-peel stories, hard-earned lessons, and a few other
                    surprises, Fans First teaches you how to stand out in your marketplace, drive
                    explosive growth, and inspire fanatical loyalty.
                  </p>
                  <p>
                    If this all sounds bananas, that&apos;s the point. Normal leaders read normal
                    books and get normal results. But if you&apos;re ready to change the game, break
                    the rules, and create your own unforgettable team, then it&apos;s time to go
                    Fans First.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Sports and Fitness</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/FansFirst"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon
                  </a>
                  <a
                    href="/success-stories/jesse-cole-in-demand-speaker"
                    className="bd-btn bd-btn--secondary"
                  >
                    Read Success Story
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
              src="https://scribemedia.com/hubfs/author-headshots/Jesse_Cole_Headshot.jpg"
              alt="Jesse Cole"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/jesse-cole">Jesse Cole</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  Jesse Cole is a fanatic about fandom. In 2016, he founded Fans First
                  Entertainment and launched the Savannah Bananas with one mission: to spark a
                  fan-focused movement. Whether at the ballpark, on social media, onstage delivering
                  keynotes, in features for ESPN and Entrepreneur, or in his first book, Find Your
                  Yellow Tux, Jesse continues to create fans all over the world.
                </p>
                <p>
                  Jesse is the proud inventor of Banana Ball and Dolce &amp; Banana underwear and
                  not-so-proud promoter of the Human Horse Race and Flatulence Fun Night. He&apos;s
                  a raving fan of his wife, Emily, his kids, and peerless promoters like Walt
                  Disney, PT Barnum, and Bill Veeck. Jesse owns seven yellow tuxedos.
                </p>
              </div>
              <Link href="/authors/jesse-cole" className="bd-author-link">
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
              href="/author-hour/episode/ep-941-jesse-cole-episode-941"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Jesse Cole: Episode 941</p>
              <p className="book-ah__card-meta">May 13, 2022</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
            <a
              className="book-ah__card"
              href="/author-hour/episode/ep-60-jesse-cole-find-your-yellow-tux"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Jesse Cole: Find Your Yellow Tux</p>
              <p className="book-ah__card-meta">December 04, 2017</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
