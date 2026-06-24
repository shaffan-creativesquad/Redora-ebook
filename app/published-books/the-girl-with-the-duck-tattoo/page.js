import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'The Girl with the Duck Tattoo by Sarma Melngailis | Scribe Media',
  description: 'A raw, unflinching memoir of how one smart, driven woman went from building a dream to being ensnared in a cult of one — and the dog who helped bring her back to herself.',
}

export default function TheGirlWithTheDuckTattooPage() {
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
                  src="/assets/61DQ2qIRLzL._SL1360_.jpg"
                  alt="The Girl with the Duck Tattoo"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">The Girl with the Duck Tattoo</h1>
                <p className="bd-author">by <a href="/authors/sarma-melngailis">Sarma Melngailis</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★☆</span>
                  <span className="bd-rating-text">4.3 · 97 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Abuse Self-Help
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p><strong>Sarma</strong> had a thriving restaurant, a beloved brand, and a mission: to change the way people eat.</p>
                  <p style={{ marginTop: '0.75rem' }}>From the outside, her life appeared charmed — celebrity patrons, glowing press, and a business on the brink of expansion — until she met the man who would dismantle it all and ultimately land her in jail.</p>
                  <p style={{ marginTop: '0.75rem' }}>The enigmatic &quot;Mr. Fox&quot; barreled into her life with promises of unlimited funding, boundless empowerment, even immortality. What he delivered instead was fear, coercive control, and catastrophic financial ruin.</p>
                  <p style={{ marginTop: '0.75rem' }}><em>The Girl with the Duck Tattoo</em> is a raw, unflinching memoir of how one smart, driven woman went from building a dream to being ensnared in a cult of one. It&apos;s a wild ride through delusion and deceit, a cautionary tale of idealism weaponized, and a tribute to the dog who helped bring her back to herself.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Memoir</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/47r0rgj"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$30.75</span>
                  </a>
                  <a href="/success-stories/why-sarma-melngailis-turned-down-traditional-publishing-to-control-her-own-story" className="bd-btn bd-btn--secondary">
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
              src="/assets/sarma-mengailis.png"
              alt="Sarma Melngailis"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/sarma-melngailis">Sarma Melngailis</a></h2>
              <div className="bd-author-bio">
                <p>Sarma Melngailis is a restaurateur and author who founded Pure Food and Wine and One Lucky Duck, two landmark raw vegan restaurants in New York City that attracted celebrity clientele and critical acclaim. A graduate of the French Culinary Institute and the Wharton School at the University of Pennsylvania, she built one of the most talked-about dining destinations in the country before her life unraveled in spectacular fashion.</p>
                <p>Her dramatic story was chronicled in the Netflix documentary <em>Bad Vegan</em>. <em>The Girl with the Duck Tattoo</em> is her own account — unfiltered, honest, and far more nuanced than any documentary could capture.</p>
              </div>
              <a href="/authors/sarma-melngailis" className="bd-author-link">
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
              href="/author-hour/episode/sarma-melngailis-writing-her-truth-beyond-bad-vegan"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Sarma Melngailis: Writing Her Truth Beyond &quot;Bad Vegan&quot;</p>
              <p className="book-ah__card-meta">September 24, 2025 · 01:03:56</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
