import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Branding is Sex by Deb Gabor | Scribe Media',
  description: 'Brand dominatrix Deb Gabor explains how proper brand positioning gets your customers in the mood — and keeps them coming back for more. A concrete how-to guide for building or re-igniting your brand.',
}

export default function BrandingIsSexPage() {
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
                  src="/assets/branding-is-sex.jpg"
                  alt="Branding is Sex"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">Branding is Sex</h1>
                <p className="bd-author">by <a href="/authors/deb-gabor">Deb Gabor</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.5 · 130 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Consumer Behavior
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>If you hate making money and the feeling of a mind-blowing, toe-curling orgasm — stay far away from this book. In <em>Branding is Sex</em>, brand dominatrix Deb Gabor explains how proper brand positioning gets your customers in the mood.</p>
                  <p style={{ marginTop: '0.75rem' }}>In just seven short and sweet chapters, Deb covers these juicy topics and more:</p>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', color: 'rgba(255,255,255,0.68)', lineHeight: '1.8' }}>
                    <li>How the most successful brands in the world get their customers laid</li>
                    <li>How to never fail The Bullshit Test</li>
                    <li>Who your brand should hop in the sack with (and it&apos;s not who you think)</li>
                  </ul>
                  <p style={{ marginTop: '0.75rem' }}>Don&apos;t rot in the brand graveyard like BlackBerry, Oldsmobile, Circuit City, Compaq, Blockbuster Video, and Pets.com. Get your sexy back and move from being &quot;just friends&quot; with your customers to being long-term &quot;friends with benefits.&quot;</p>
                  <p style={{ marginTop: '0.75rem' }}><em>Branding is Sex</em> provides you with a concrete foundation and a basic how-to plan for building or re-igniting your brand — without needing a PhD.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Marketing</span>
                  <span className="bd-tag">B2B Consulting</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Branding-Sex-Your-Customers-Anything-ebook/dp/B01GH62GDY/?&_encoding=UTF8&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$8.99</span>
                  </a>
                  <a href="/success-stories/deb-gabor-branding-is-sex" className="bd-btn bd-btn--secondary">
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
              src="/assets/Deb_Gabor_Headshot.jpg"
              alt="Deb Gabor"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/deb-gabor">Deb Gabor</a></h2>
              <div className="bd-author-bio">
                <p>Deb Gabor is a branding powerhouse, author, and CEO of Sol Marketing — a brand strategy consultancy whose clients range from early-stage startups to Fortune 500 giants including Microsoft, NBC Universal, and Adobe. She&apos;s spent decades obsessing over what makes customers irrationally loyal to the brands they love, and she calls it exactly what it is.</p>
                <p><em>Branding is Sex</em> was her first book — a no-nonsense, hilariously straight-talking manifesto that cuts through branding jargon and gets to the emotional truth of why people buy. She followed it up with <em>Irrational Loyalty</em> and <em>Person-ality</em>, completing a trilogy on what it takes to build a brand customers can&apos;t quit.</p>
              </div>
              <a href="/authors/deb-gabor" className="bd-author-link">
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
            <a className="book-ah__card" href="/author-hour/episode/ep-251-deb-gabor-episode-251">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Deb Gabor: Episode 251</p>
              <p className="book-ah__card-meta">March 10, 2019</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Deb Gabor</h2>
          <div className="bd-related-grid">
            <a href="/published-books/person-ality" className="bd-related-item">
              <Image
                src="/assets/branding-is-sex.jpg"
                alt="Person-ality"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Person-ality</div>
            </a>
            <a href="/published-books/irrational-loyalty" className="bd-related-item">
              <Image
                src="/assets/irrational-loyalty.jpg"
                alt="Irrational Loyalty"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Irrational Loyalty</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
