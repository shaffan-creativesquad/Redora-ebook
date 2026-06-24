import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'I Forgot to Die by Khalil Rafati | Scribe Media',
  description: 'An incredible true story of pain, suffering, addiction and redemption — and how one man ultimately conquered his demons and wrote himself a new life story.',
}

export default function IForgotToDiePage() {
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
                  src="/assets/i-forgot-to-die.jpg"
                  alt="I Forgot to Die"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">I Forgot to Die</h1>
                <p className="bd-author">by <a href="/authors/khalil-rafati">Khalil Rafati</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.7 · 1,555 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Books
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>&ldquo;The first bullet punched a hole in the door. The shot was deafening and a beam of light poured into the bathroom. Then they fired again.&rdquo;</p>
                  <p style={{ marginTop: '0.75rem' }}>Khalil Rafati went to Los Angeles in the 1990s and had it all. He was working with Hollywood movie stars and legendary rock musicians, but it wasn&apos;t long before he found his way into the dark underbelly of the City of Angels.</p>
                  <p style={{ marginTop: '0.75rem' }}>When he hit rock bottom — addicted to heroin and cocaine, overtaken by paranoia and psychosis, written off by his friends and family — he grabbed a shovel and kept digging. At 33, Khalil was 109 pounds, a convicted felon, high school dropout, and homeless junkie living on the infamous Skid Row in downtown L.A.</p>
                  <p style={{ marginTop: '0.75rem' }}>So how does someone with nothing, who feels like they deserve nothing, and who just wants to end it all turn their life around?</p>
                  <p style={{ marginTop: '0.75rem' }}><em>I Forgot to Die</em> is an incredible true story of pain, suffering, addiction and redemption — and how one man ultimately conquered his demons and wrote himself a new life story.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Memoir</span>
                  <span className="bd-tag">Health and Diet</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/I-Forgot-Die-Khalil-Rafati/dp/1619613743/?&_encoding=UTF8&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$15.91</span>
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
              src="/assets/Khalil_Rafati_Headshot.webp"
              alt="Khalil Rafati"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/khalil-rafati">Khalil Rafati</a></h2>
              <div className="bd-author-bio">
                <p>Khalil Rafati is the founder of Sun Life Organics, a chain of health-focused juice bars and cafes in Southern California. His journey from homeless heroin addict on Skid Row to successful entrepreneur is one of the most remarkable redemption stories in recent memory.</p>
                <p>After hitting rock bottom at 33 years old — 109 pounds, a convicted felon and high school dropout — Khalil rebuilt his life through discipline, spirituality, and a commitment to health. He now helps others transform their lives through his businesses and his deeply personal memoir, <em>I Forgot to Die</em>.</p>
              </div>
              <a href="/authors/khalil-rafati" className="bd-author-link">
                View full profile →
              </a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
