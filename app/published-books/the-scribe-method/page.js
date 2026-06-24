import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'The Scribe Method by Tucker Max | Scribe Media',
  description: 'The Scribe Method will help you navigate your fears on the journey to becoming a published author. Guided by Tucker Max and Zach Obront, learn the step-by-step process that has created hundreds of bestselling titles.',
}

export default function ScribeMethodPage() {
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
                  src="/assets/41YXhRHxNqL._SL500_.jpg"
                  alt="The Scribe Method"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">The Scribe Method</h1>
                <p className="bd-author">by <a href="/authors/tucker-max">Tucker Max</a> &amp; Zach Obront</p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.5 · 227 ratings on Amazon</span>
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>You&apos;re ready to write your book. You&apos;ve accumulated hard-won knowledge and mastered the solution to a difficult problem. Now you want to put it out into the world and be recognized for your expertise, like those you&apos;ve watched reap the benefits of a published book.</p>
                  <p style={{ marginTop: '0.75rem' }}>You know you have to write it. You&apos;ve heard it from people for years: you should really write a book. They&apos;re right. It&apos;s time for you to write the book that cements your legacy and impacts other people — and maybe even the world.</p>
                  <p style={{ marginTop: '0.75rem' }}>So why haven&apos;t you done it yet?</p>
                  <p style={{ marginTop: '0.75rem' }}>The truth is, writing a book is scary. Is your idea good enough? How do you structure it, write it, and stay motivated? What if you actually finish it, and it&apos;s bad? Worst of all: what if you publish it, and no one cares?</p>
                  <p style={{ marginTop: '0.75rem' }}>If this sounds familiar, <em>The Scribe Method</em> will help you navigate these fears on your journey to becoming a published author. Guided by experts Tucker Max and Zach Obront, you&apos;ll overcome the obstacles that have held you back with a simple, time-saving, effective method to writing a great book, and learn the step-by-step process that has created hundreds of bestselling titles.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Personal Development</span>
                  <span className="bd-tag">Writing and Arts</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/1544514069?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$5.00</span>
                  </a>
                  <a href="/scribe-method-book" className="bd-btn bd-btn--secondary">
                    Read for Free
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
              src="/assets/tucker-max-headshot.jpg"
              alt="Tucker Max"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Authors</p>
              <h2 className="bd-author-name"><a href="/authors/tucker-max">Tucker Max</a> &amp; Zach Obront</h2>
              <div className="bd-author-bio">
                <p>Tucker Max is a #1 New York Times bestselling author and co-founder of Scribe Media. He pioneered the Book in a Box method and has helped thousands of experts, entrepreneurs, and leaders get their books written and published.</p>
                <p>Zach Obront is the co-founder of Scribe Media and the author of several books on entrepreneurship and storytelling. Together, Tucker and Zach developed <em>The Scribe Method</em> — a comprehensive, step-by-step process to writing, publishing, and marketing a nonfiction book that has produced hundreds of bestselling titles.</p>
              </div>
              <a href="/authors/tucker-max" className="bd-author-link">
                View Tucker&apos;s profile →
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
              href="/author-hour/episode/ep-7-tucker-max-episode-7"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Tucker Max: Episode 7</p>
              <p className="book-ah__card-meta">May 02, 2017</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Tucker Max</h2>
          <div className="bd-related-grid">
            <a href="/published-books/the-book-in-a-box-method" className="bd-related-item">
              <Image
                src="/assets/the-book-in-a-box-method.jpg"
                alt="The Book in a Box Method"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">The Book in a Box Method</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
