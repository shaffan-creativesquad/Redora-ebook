import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Sparrow in the Razor Wire by Quan Huynh | Scribe Media',
  description: 'Sparrow in the Razor Wire is Quan Huynh\'s story of transformation inside a place many see as the end of the road — a journey of redemption and discovery that led to his ultimate freedom.',
}

export default function SparrowInTheRazorWirePage() {
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
                  src="/assets/Sparrow-in-the-Razor-Wire.jpg"
                  alt="Sparrow in the Razor Wire"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">Sparrow in the Razor Wire</h1>
                <p className="bd-author">by <a href="/authors/quan-huynh">Quan Huynh</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.8 · 195 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Miracles &amp; Spirituality
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>In 1999, Quan Huynh shot and killed another man in a gang-related incident in Hollywood, California. He received a prison sentence of fifteen years to life in a state that, at the time, did not parole prisoners with life sentences. Behind bars, Quan continued his downward spiral.</p>
                  <p style={{ marginTop: '0.75rem' }}>This could have been the end of the story for Quan, as it is for many prisoners. But somewhere along the way, he discovered a new path — one that prompted him to commit to self-reflection, truth, and personal responsibility.</p>
                  <p style={{ marginTop: '0.75rem' }}><em>Sparrow in the Razor Wire</em> is Quan&apos;s story of transformation inside a place many see as the end of the road. In his book, he shares the journey of redemption and discovery that led to his ultimate freedom. He found that, no matter the prison, the key to unlocking the door is in each one of us.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Memoir</span>
                  <span className="bd-tag">Legal</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/B08F34LBXL?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$6.99</span>
                  </a>
                  <a href="/success-stories/quan-huynh-sparrow-in-the-razor-wire" className="bd-btn bd-btn--secondary">
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
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/quan-huynh">Quan Huynh</a></h2>
              <div className="bd-author-bio">
                <p>Quan Huynh grew up in Hollywood, California, and at a young age became entangled in gang life. In 1999, at the age of 19, he was convicted of murder and sentenced to fifteen years to life in prison in a state that, at the time, did not parole prisoners serving life sentences.</p>
                <p>Inside prison, Quan embarked on a profound journey of self-reflection, accountability, and spiritual growth. He became a certified yoga and meditation teacher, earned multiple degrees, and dedicated himself to helping other incarcerated individuals transform their lives. After serving over two decades, he was granted parole and released.</p>
                <p>Today, Quan is a speaker, educator, and advocate for criminal justice reform. <em>Sparrow in the Razor Wire</em> is his memoir — a testament to the power of redemption and the human capacity for change.</p>
              </div>
              <a href="/authors/quan-huynh" className="bd-author-link">
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
              href="/author-hour/episode/ep-502-quan-huynh-episode-502"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Quan Huynh: Episode 502</p>
              <p className="book-ah__card-meta">August 06, 2020</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
