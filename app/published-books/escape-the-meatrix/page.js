import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Escape the Meatrix | Scribe Media',
  description:
    'Escape the Meatrix by Stuart Waldner — exposing the real cost of America\'s meat-based diet on your health and the planet\'s survival.',
}

export default function EscapeTheMeatrixPage() {
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
                  src="/assets/StuartWaldner_WebsiteCover.jpg"
                  alt="Escape the Meatrix"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Escape the Meatrix</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/stuart-waldner" className="bd-author-link">
                    Stuart Waldner
                  </Link>
                </p>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>Choose the red pill and Escape the Meatrix</p>
                  <p>
                    What if you suddenly discovered you were trapped inside a dystopian cult of
                    oppression, murder, and profit&mdash;and that your greatest source of calories
                    was an artificially invented diet created by powerful lobbies, designed to line
                    the pockets of the 1% at the cost of your own health and the planet&apos;s very
                    survival?
                  </p>
                  <p>What would you do?</p>
                  <p>
                    <em>Escape the Meatrix</em> chronicles Stuart Waldner&apos;s eye-opening battle
                    against climate change as he exposes the real reason veggies are more expensive
                    than a burger (it&apos;s not what you think); the shocking list of diseases that
                    a plant-based lifestyle can slow, prevent, or even cure; and how America&apos;s
                    declining health is linked directly to corporate profit.
                  </p>
                  <p>
                    We might not like the truth, but the cost of ignorance is far too high. Will you
                    take the blue pill and let the planet burn? Or will you take the red pill, open
                    this book, and Escape the Meatrix?
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Health</span>
                  <span className="bd-tag">Healthcare and Medicine</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/EscapetheMeatrix"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$7.99</span>
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
          <div className="bd-divider"></div>
          <div className="bd-author-layout">
            <Image
              src="/assets/StuartWaldner_Headshot.jpg"
              alt="Stuart Waldner"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/stuart-waldner">Stuart Waldner</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  Stuart Waldner didn&apos;t set out to be an activist. After two decades of
                  exploring Earth&apos;s greatest wonders and connecting with sacred sites around
                  the globe, he transitioned to a plant-based lifestyle in 2008. The better he felt,
                  and the more he learned about the statistical connections between our dietary
                  choices and the worldwide crises we&apos;re about to face, the more he felt called
                  to wake people up&mdash;for our health and for the planet.
                </p>
                <p>
                  When he&apos;s not working or playing with his dogs, he enjoys cooking and eating
                  plant-based foods, running, and restoring windows in his 128-year-old Victorian
                  home.
                </p>
                <p>escapethemeatrix.com</p>
              </div>
              <Link href="/authors/stuart-waldner" className="bd-author-link">
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
              href="/author-hour/episode/ep-1031-stuart-waldner-episode-1031"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Stuart Waldner: Episode 1031</p>
              <p className="book-ah__card-meta">September 30, 2022</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
