import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'F#ck Content Marketing by Randy Frisch',
  description:
    'F#ck Content Marketing by Randy Frisch — a book for everyone in the organization who needs better context and direction for how to drive demand, revenue, and relationships with content.',
}

export default function FckContentMarketingPage() {
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
                  src="/assets/fck-content-marketing.jpg"
                  alt="F#ck Content Marketing"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">F#ck Content Marketing</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/randy-frisch">Randy Frisch</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★<span className="bd-star-empty">☆</span></span>
                  <span className="bd-rating-value">4.3</span>
                  <span className="bd-rating-count">93 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Blogging &amp; Blogs</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p><em>F#ck Content Marketing</em> isn&apos;t a book for content marketers.</p>
                  <p>
                    Instead, it&apos;s for everyone in the organization who needs better context and
                    direction for how to drive demand, revenue, and relationships with content. Truly
                    effective companies (and marketers) create content experiences, drawing the customer
                    into an immersive infinite scroll that mirrors the consumer experience of Netflix,
                    Spotify, and other billion-dollar brands.
                  </p>
                  <p>
                    Randy Frisch will push you to rethink how you approach content for complex buyer
                    journeys. The current mindset is all about volume&mdash;the more content created,
                    the better. But the reality is that almost 70 percent of content created within an
                    organization is never used, and there&apos;s little point investing in content
                    marketing if you&apos;re not leveraging the assets you create.
                  </p>
                  <p>
                    In this book, Frisch unpacks the Content Experience Framework, arming your
                    organization to deliver personalized experiences that leverage your content to
                    engage your audiences at scale&mdash;as well as identify and ramp up the key
                    players in your organization who need to own this process.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Marketing</span>
                  <span className="bd-tag">Marketing and Advertising</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/154451364X?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$14.42</span>
                  </a>
                  <a href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Author Section ── */}
        <div className="book-author-section">
          <div className="book-author-section__divider"></div>
          <div className="book-author-section__layout">
            <img
              className="book-author-section__photo"
              src="https://scribemedia.com/hubfs/author-headshots/randy-frisch.jpg"
              alt="Randy Frisch"
              loading="lazy"
            />
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/randy-frisch">Randy Frisch</a></h2>
              <div className="book-author-section__bio"><p>Truly effective companies (and marketers) create content experiences, drawing the customer into an immersive infinite scroll that mirrors the consumer experience of Netflix, Spotify, and other billion-dollar brands.Randy Frisch will push you to rethink how you approach content for complex buyer journeys.</p></div>
              <a className="book-author-section__link" href="/authors/randy-frisch">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a className="book-ah__card" href="/author-hour/episode/ep-249-randy-frisch-f-content-marketing">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Randy Frisch: F Content Marketing</p>
              <p className="book-ah__card-meta">February 19, 2019</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
