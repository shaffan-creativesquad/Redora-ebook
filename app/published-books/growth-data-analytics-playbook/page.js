import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Growth Data Analytics Playbook | Scribe Media',
  description:
    'A go-to guide for product and business growth by Yuzheng Sun. Learn actionable strategies for leveraging data analytics to drive growth, measure performance, and make informed decisions.',
}

export default function GrowthDataAnalyticsPlaybookPage() {
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
                  src="/assets/growth-book.jpg"
                  alt="Growth Data Analytics Playbook"
                  width={300}
                  height={450}
                  className="bd-cover"
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Growth Data Analytics Playbook</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/yuzheng-sun" className="bd-author-link">
                    Yuzheng Sun
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.6 · 14 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Mathematical &amp; Statistical Software
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    A go-to guide for product and business growth. While growth is key for survival
                    in the tech world, training is minimal&mdash;sometimes even nonexistent&mdash;for
                    leveraging data analytics. This book changes that.
                  </p>
                  <p>
                    In the <em>Growth Data Analytics Playbook</em>, Mengying Li, Joe Kumar, and
                    Yuzheng Sun outline a structured approach for utilizing data insights to drive
                    product and business growth. You&apos;ll learn actionable strategies for
                    identifying and understanding key opportunities, enabling accurate performance
                    measurement and informed decision-making. Mengying, Joe, and Yuzheng explore
                    product-market fit, retention metrics, and revenue generation, along with
                    strategies for enhancing user adoption and optimizing conversion rates.
                  </p>
                  <p>
                    A bridge between theory and application, the <em>Growth Data Analytics
                    Playbook</em> is a compelling and comprehensive guide that paves the way for
                    sustainable growth.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Business Management</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/3LKBpzP?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$19.56</span>
                  </a>
                  <Link href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Author section ── */}
        <div className="bd-author-section">
          <div className="bd-divider"></div>
          <div className="bd-author-layout">
            <Image
              src="/assets/Yuzheng-Sun_AuthorCentral_Headsh.png"
              alt="Yuzheng Sun"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/yuzheng-sun">Yuzheng Sun</Link>
              </h2>
              <p className="bd-author-bio">
                Yuzheng Sun is a staff data scientist at Statsig.com, where he champions best
                practices in product growth and experimentation. With over 300,000 online followers
                and over 200 prominent podcast guests, Yuzheng is one of the most influential
                thought leaders in the domain of data and growth. He is also a top AI instructor on
                Maven.com. Previously, Yuzheng was the Director of Data Science and Growth at
                Tencent Games, the world largest gaming company. He has also worked as a senior data
                scientist at Meta and an economist at Amazon. He holds a PhD in Economics from
                Cornell University.
              </p>
              <Link href="/authors/yuzheng-sun" className="bd-author-link">
                View full profile →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Related books ── */}
        <div className="bd-related">
          <div className="bd-divider"></div>
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Yuzheng Sun</h2>
          <div className="bd-related-grid">
            <Link href="/published-books/first-time-coders" className="bd-related-item">
              <Image
                src="https://scribemedia.com/hubfs/images/books/first-time-coders.jpg"
                alt="First Time Coders"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">First Time Coders</div>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
