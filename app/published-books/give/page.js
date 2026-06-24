import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Give by Nicholas Kusmich | Scribe Media',
  description: 'Most marketers concentrate on what they\'re trying to get. The best marketers concentrate on what they have to give. Nicholas Kusmich shows you how Facebook advertising can transform your business.',
}

export default function GivePage() {
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
                  src="/assets/give.jpg"
                  alt="Give"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">Give</h1>
                <p className="bd-author">by <a href="/authors/nicholas-kusmich">Nicholas Kusmich</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.5 · 660 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Auctions &amp; Small Business
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>Most marketers concentrate on what they&apos;re trying to get. The best marketers concentrate on what they have to give.</p>
                  <p style={{ marginTop: '0.75rem' }}>The way people consume media is changing, fast. Laptops, tablets, and smartphones keep us constantly connected to the web. This represents a huge opportunity for savvy marketers. The only problem: the old methods are no longer working. New media demands new advertising.</p>
                  <p style={{ marginTop: '0.75rem' }}>Facebook is the single most effective platform for marketing in the Internet era, and Nicholas Kusmich is the best Facebook marketer in the world. In <em>GIVE</em>, he will show you what differentiates Facebook from traditional advertising and explain why it&apos;s so important to promote your business in a way that&apos;s congruent with the norms of social media.</p>
                  <p style={{ marginTop: '0.75rem' }}>He&apos;ll take you through a four-step process to pinpoint your market, master your message, create a magnet, and build a mechanism that both collects and helps you retain and develop those relationships. When used well, Nic&apos;s Facebook advertising strategies can send your return on investment through the roof.</p>
                  <p style={{ marginTop: '0.75rem' }}>In <em>GIVE</em>, you&apos;ll find the tools you need to share your authentic voice with the people who want to hear it and turn their attention into satisfying, meaningful sales.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Marketing</span>
                  <span className="bd-tag">Marketing and Advertising</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Give-Ultimate-Facebook-Advertising-Generate-ebook/dp/B06Y6KZK5L/?&_encoding=UTF8&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$8.39</span>
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
              src="/assets/Nicholas_Kusmich_Headshot.jpg"
              alt="Nicholas Kusmich"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/nicholas-kusmich">Nicholas Kusmich</a></h2>
              <div className="bd-author-bio">
                <p>Nicholas Kusmich is widely regarded as the world&apos;s leading Facebook advertising strategist. He has helped generate tens of millions of dollars in revenue for clients across dozens of industries by applying his unique contextual advertising philosophy.</p>
                <p>His approach centers on the idea that great marketing starts with giving — delivering genuine value before ever asking for a sale. Through his agency, consulting work, and bestselling book <em>GIVE</em>, Nicholas has helped thousands of entrepreneurs and business owners build authentic relationships with their audiences and convert attention into meaningful, lasting revenue.</p>
              </div>
              <a href="/authors/nicholas-kusmich" className="bd-author-link">
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
