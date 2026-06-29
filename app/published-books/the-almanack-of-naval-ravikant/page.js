import './almanack.css'
import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'The Almanack of Naval Ravikant by Eric Jorgenson | Scribe Media',
  description: 'Naval Ravikant is an entrepreneur, philosopher, and investor who has captivated the world with his principles for building wealth and creating long-term happiness.',
}

export default function AlmanackPage() {
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
                  src="/assets/the-almanack-of-navl-ravikant.png"
                  alt="The Almanack of Naval Ravikant"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">The Almanack of Naval Ravikant</h1>
                <p className="bd-author">by <a href="/authors/eric-jorgenson">Eric Jorgenson</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.7 · 22,631 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Business Decision Making &amp; Problem Solving
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>Getting rich is not just about luck; happiness is not just a trait we are born with. These aspirations may seem out of reach, but building wealth and being happy are skills we can learn.</p>
                  <p style={{ marginTop: '0.75rem' }}>So what are these skills, and how do we learn them? What are the principles that should guide our efforts? What does progress really look like?</p>
                  <p style={{ marginTop: '0.75rem' }}>Naval Ravikant is an entrepreneur, philosopher, and investor who has captivated the world with his principles for building wealth and creating long-term happiness. <em>The Almanack of Naval Ravikant</em> is a collection of Naval&apos;s wisdom and experience from the last ten years, shared as a curation of his most insightful interviews and poignant reflections. This isn&apos;t a how-to book, or a step-by-step gimmick. Instead, through Naval&apos;s own words, you will learn how to walk your own unique path toward a happier, wealthier life.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Personal Development</span>
                  <span className="bd-tag">Financial Planning</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness/dp/B0F9VM4V5N?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
                  </a>
                  <a
                    href="https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness/dp/B08XN41TSS"
                    className="bd-btn bd-btn--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen to Audiobook
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
                <p>Eric Jorgenson curates the most useful ideas from our greatest thinkers and doers and preserves them in our most permanent format: books.</p>
                <p>He&apos;s the author of <em>The Almanack of Naval Ravikant</em> (2M+ copies sold) and <em>The Anthology of Balaji</em>. He&apos;s CEO of Scribe Media, where authors retain full financial and creative control of their books.</p>
                <p>Eric lives in Kansas City with his wife and son in a house that&apos;s slowly becoming a library. He invests in obsessive geniuses building utopian technology.</p>
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
              <p className="book-ah__card-title">Eric Jorgenson: The Almanac of Naval Ravikant: A Guide to Wealth and Happiness</p>
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
            <a href="/published-books/the-book-of-elon" className="bd-related-item">
              <Image
                src="/assets/the-book-of-elon.jpg"
                alt="The Book of Elon"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">The Book of Elon</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
