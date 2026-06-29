import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'The Book of Elon by Eric Jorgenson | Scribe Media',
  description: "Eric Jorgenson distills Elon Musk's mindset — purpose, intensity, and relentless pursuit — into an easy read that will personally mentor you toward a life full of purpose, passion, and prosperity.",
}

export default function TheBookOfElonPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>

        {/* ── Book Detail ── */}
        <section className="book-detail-page">
          <div className="book-detail-page__inner">

            <a href="/published-books" className="bd-back">
              ← Back to Published Books
            </a>

            <div className="bd-layout">
              {/* Cover */}
              <div>
                <Image
                  src="/assets/the-book-of-elon.jpg"
                  alt="The Book of Elon"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">The Book of Elon</h1>
                <p className="bd-author">by <a href="/authors/eric-jorgenson">Eric Jorgenson</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">5.0 · 47 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Management
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>Do you have a nagging fear that your work isn&apos;t truly important? Or that your potential greatness will wither, unrealized?</p>
                  <p style={{ marginTop: '0.75rem' }}>Most people never feel purpose in their work. They never bring their full energy to a meaningful mission.</p>
                  <p style={{ marginTop: '0.75rem' }}>Purpose and intensity are Elon Musk&apos;s superpowers. He chooses colossal missions. Then he is maniacal, creative, and relentless in pursuit of success. It&apos;s not charm, luck, or genius that made him the wealthiest person on Earth. It&apos;s his mindset.</p>
                  <p style={{ marginTop: '0.75rem' }}>Musk&apos;s mindset is laid out clearly in this book — the result of five years of work, distilling millions of words into an easy read. Eric Jorgenson also wrote <em>The Almanack of Naval Ravikant</em>, a word-of-mouth phenomenon with millions of readers in 40+ languages.</p>
                  <p style={{ marginTop: '0.75rem' }}>This isn&apos;t a biography or a cheesy self-help book. Instead, through Musk&apos;s own words, you will feel personally mentored to lead a rich life full of purpose, passion, and prosperity.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Entrepreneurship</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/thebookofelon"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
                  </a>
                  <a href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Author Section ── */}
        <div className="bd-author-section">
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <Image
              src="/assets/Eric_Jorgenson_Headshot.jpg"
              alt="Eric Jorgenson"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/eric-jorgenson">Eric Jorgenson</a></h2>
              <div className="bd-author-bio">
                <p>Eric Jorgenson curates the most useful ideas from our greatest thinkers and doers and preserves them in our most permanent format: books. He&apos;s the author of <em>The Almanack of Naval Ravikant</em> (2M+ copies sold) and <em>The Anthology of Balaji</em>.</p>
                <p>He&apos;s CEO of Scribe Media, where authors retain full financial and creative control of their books. Eric lives in Kansas City with his wife and son in a house that&apos;s slowly becoming a library. He invests in obsessive geniuses building utopian technology.</p>
              </div>
              <a href="/authors/eric-jorgenson" className="bd-author-link">
                View full profile →
              </a>
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
              href="/author-hour/episode/ep-514-eric-jorgenson-the-almanac-of-naval-ravikant-a-guide-to-wealth-and-happin"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Eric Jorgenson: The Almanack of Naval Ravikant — A Guide to Wealth and Happiness</p>
              <p className="book-ah__card-meta">August 24, 2020</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Eric Jorgenson</h2>
          <div className="bd-related-grid">
            <a href="/published-books/the-almanack-of-naval-ravikant" className="bd-related-item">
              <Image
                src="/assets/the-almanack-of-navl-ravikant.png"
                alt="The Almanack of Naval Ravikant"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">The Almanack of Naval Ravikant</div>
            </a>
            <a href="/published-books/the-anthology-of-balaji" className="bd-related-item">
              <img
                src="https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/images/books/EricJorgenson_EbookCover_Final-scaled.jpg"
                alt="The Anthology of Balaji"
                width={130}
                height={195}
                className="bd-related-cover"
                loading="lazy"
              />
              <div className="bd-related-title">The Anthology of Balaji</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
