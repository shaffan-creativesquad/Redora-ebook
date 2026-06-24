import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'The Art of Alignment by Patty Beach | Scribe Media',
  description: 'Master certified coach and TEDx speaker Patty Beach shares proven principles and actionable advice for getting any group of any size to agree, commit, and move forward together.',
}

export default function TheArtOfAlignmentPage() {
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
                  src="/assets/the-art-of-alighment.jpg"
                  alt="The Art of Alignment"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">The Art of Alignment</h1>
                <p className="bd-author">by <a href="/authors/patty-beach">Patty Beach</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.6 · 124 ratings on Amazon</span>
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>Leadership often seems like an uphill battle. It can be practically impossible to get everyone on the same page, much less moving forward together. Imagine if you were a leader who could.</p>
                  <p style={{ marginTop: '0.75rem' }}>Whether you are at the top or the bottom of the organization, there&apos;s a real art to getting everyone aligned. Patty Beach — master certified coach, TEDx speaker, and trusted leadership consultant — has helped thousands of leaders align diverse teams, build psychological safety, and inspire lasting commitment with her memorable success formulas.</p>
                  <p style={{ marginTop: '0.75rem' }}>Pragmatic, thought-provoking, and thoroughly useful, <em>The Art of Alignment</em> offers real-life stories, proven principles, and actionable advice. This step-by-step guide explains how to introduce new ideas and get any group of any size to agree and commit. You&apos;ll even learn how to get your team members back on track when things fall off the rails.</p>
                  <p style={{ marginTop: '0.75rem' }}><em>&quot;Patty&apos;s book is the perfect guide for leaders and consultants charged with the tough task of gaining alignment in teams of all types.&quot;</em> — Robert W. Jake Jacobs, Author of <em>Leverage Change</em></p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Leadership</span>
                  <span className="bd-tag">Business Management</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/B08NSPYFBV?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$9.99</span>
                  </a>
                  <a href="/success-stories/patty-beach-the-art-of-alignment" className="bd-btn bd-btn--secondary">
                    Read Success Story
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
              src="/assets/patty-beach.jpg"
              alt="Patty Beach"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/patty-beach">Patty Beach</a></h2>
              <div className="bd-author-bio">
                <p>Patty Beach is a master certified coach, TEDx speaker, and founder of LeaderShift Inc., a leadership development consultancy she has run for over two decades. She works with executives, teams, and organizations to create the conditions where alignment is possible — where people stop talking past each other and start moving in the same direction.</p>
                <p>Her approach blends practical frameworks with deep human insight, drawing on years of consulting across industries to help leaders turn conflict and confusion into clarity and commitment. <em>The Art of Alignment</em> distills that body of work into a guide any leader can put to use immediately.</p>
              </div>
              <a href="/authors/patty-beach" className="bd-author-link">
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
              href="/author-hour/episode/ep-573-patty-beach-the-art-of-alignment-a-practical-guide-to-inclusive-leadershi"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Patty Beach: The Art of Alignment, A Practical Guide to Inclusive Leadership</p>
              <p className="book-ah__card-meta">November 06, 2020</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
