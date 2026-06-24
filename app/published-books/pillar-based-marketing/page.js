import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Pillar-Based Marketing | Scribe Media',
  description:
    'Pillar-Based Marketing: A Data-Driven Methodology for SEO and Content That Actually Works — by Ryan Brock. Bestseller in Search Engines.',
}

export default function PillarBasedMarketingPage() {
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
                  src="./assets/Brock-and-Day_WebsiteCover-bbok.jpg"
                  alt="Pillar-Based Marketing"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Pillar-Based Marketing</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/ryan-brock">Ryan Brock</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★☆</span>
                  <span className="bd-rating-text">4.3 · 27 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Search Engines
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    Marketers don&apos;t need more data. Between keyword lists, search volumes, and
                    backlinking opportunities, they need to unwind that data and make sense of it
                    all. As customer behavior evolves, simple hacks and tricks aren&apos;t going to
                    cut it if you want to get your content to Page One.
                  </p>
                  <p>
                    In <em>Pillar-Based Marketing: A Data-Driven Methodology for SEO and Content
                    That Actually Works</em>, Ryan Brock and Toph Day teach you how to
                    revolutionize your approach to organic content marketing. Pillar-Based Marketing
                    aligns your strategies with how customers actually behave online. You&apos;ll
                    eliminate the guesswork in building your content strategies and dramatically
                    improve your search engine rankings. Once you understand the psychology of
                    digital customers, you&apos;ll acquire qualified traffic, leads, and customers
                    more efficiently than with traditional SEO methods.
                  </p>
                  <p>
                    Reclaim your time with the practical strategies in <em>Pillar-Based
                    Marketing</em>. Expand your approach from linear, keyword-focused methods and
                    generate content that reliably gets you on Page One of search engine results.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Marketing</span>
                  <span className="bd-tag">Marketing and Advertising</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/B0BXVKHM6B?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$6.99</span>
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
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <Image
              src="https://scribemedia.com/hubfs/author-headshots/ryan-brock.jpg"
              alt="Ryan Brock"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/ryan-brock">Ryan Brock</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  In <em>Pillar-Based Marketing: A Data-Driven Methodology for SEO and Content
                  That Actually Works</em>, Ryan Brock and Toph Day teach you how to
                  revolutionize your approach to organic content marketing.
                </p>
              </div>
              <Link href="/authors/ryan-brock" className="bd-author-link">
                View full profile <span>→</span>
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
