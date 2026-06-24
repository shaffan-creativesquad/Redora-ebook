import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Your Hunting Healthspan | Scribe Media',
  description:
    'Your Hunting Healthspan by Linden Loren — seventy-three ways to preserve your health at any age, cultivated specifically for hunters.',
}

export default function YourHuntingHealthspanPage() {
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
                  src="/assets/LindenLoren_eBookCover_Final-1.jpg"
                  alt="Your Hunting Healthspan"
                  width={300}
                  height={450}
                  className="bd-cover"
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Your Hunting Healthspan</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/linden-loren" className="bd-author-link">
                    Linden Loren
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">5.0 · 6 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Hunting &amp; Fishing Anthologies
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    If you ask a hunter if they&apos;d like to continue hunting for a long time,
                    they would probably say yes. Hunting is a meaningful and worthwhile lifestyle
                    that has been ingrained in our DNA for thousands of years. Unfortunately, our
                    twenty-first-century lifestyle affects the health of far too many hunters at some
                    point in their lives, which can eventually lessen their ability to hunt.
                  </p>
                  <p>
                    <em>Your Hunting Healthspan</em> protects your ability to hunt with seventy-three
                    ways to preserve your health at any age. Cultivated specifically for hunters,
                    these strategic tips can help prevent the most common conditions hunters face:
                    headaches, stomach pain, insomnia, depression, type 2 diabetes, cardiovascular
                    disease, and more.
                  </p>
                  <p>
                    Instead of falling prey to the health threats of the modern world, join the new
                    movement that&apos;s sweeping the hunting community. Start using these essential,
                    practical tips right now to improve Your Hunting Healthspan. Without health,
                    there is no more hunting.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Sports and Fitness</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/3TtVz2j?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$8.99</span>
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
              src="/assets/Linden-v2.jpg"
              alt="Linden Loren"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/linden-loren">Linden Loren</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  Linden Loren is the ideal blend of avid hunter and science geek. A professional
                  strength and conditioning trainer with a BS in exercise and sports science from
                  Oregon State University, he co-founded Camo &amp; Wind to merge science with his
                  love of the outdoors and help hunters improve their hunting healthspan.
                </p>
                <p>
                  He believes in three core values that drive everything he does: continue to be a
                  better husband for his wife and father for his son, continually learn and better
                  himself, and provide meaningful value to others. If you have any questions or
                  comments regarding the content in this book, or if you need assistance in
                  improving your own hunting healthspan, please reach out at camoandwind.com.
                </p>
              </div>
              <Link href="/authors/linden-loren" className="bd-author-link">
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
              href="/author-hour/episode/ep-544-lorenzo-gomez-the-rack-we-built"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Lorenzo Gomez: The Rack We Built</p>
              <p className="book-ah__card-meta">September 25, 2020</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
            <Link
              href="/author-hour/episode/ep-357-lorenzo-gomez-episode-357"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Lorenzo Gomez: Episode 357</p>
              <p className="book-ah__card-meta">September 06, 2019</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
            <Link
              href="/author-hour/episode/lorenzo-gomez"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Lorenzo Gomez</p>
              <p className="book-ah__card-meta">November 26, 2017 · 00:31:53</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
            <Link
              href="/author-hour/episode/ep-66-lorenzo-gomez-the-cilantro-diaries"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Lorenzo Gomez: The Cilantro Diaries</p>
              <p className="book-ah__card-meta">November 23, 2017</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
            <Link
              href="/author-hour/episode/ep-141-lorenzo-cohen-and-alison-jeffries-episode-141"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Lorenzo Cohen and Alison Jeffries: Episode 141</p>
              <p className="book-ah__card-meta">May 04, 2018</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
