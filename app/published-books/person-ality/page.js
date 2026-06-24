import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Person-ality by Deb Gabor',
  description:
    'Person-ality by Deb Gabor — the third installment in her series about cultivating dynamic brands, revealing the humans behind the business.',
}

export default function PersonAlityPage() {
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
                  src="https://scribemedia.com/hubfs/images/books/DebGabor_WebsiteCover.jpg"
                  alt="Person-ality"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Person-ality</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/deb-gabor">Deb Gabor</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★<span className="bd-star-empty">☆</span></span>
                  <span className="bd-rating-value">4.2</span>
                  <span className="bd-rating-count">19 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Market Research Business</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    <em>We look to brands for what to do, what to think, and how to feel. We want
                    to know what to support and what to stand against. Brands are the new voice of
                    authority. Now is the perfect time to reveal their humanity.</em>
                  </p>
                  <p>
                    Consumers want to connect with the brands they support. Business leaders want to
                    create purposeful, passionate companies. At this intersection of shared values is
                    where a brand&apos;s authority is established and humanity shines through.
                  </p>
                  <p>
                    But how do you ensure a meaningful connection? How do you make it last? How do
                    you establish an authoritative footprint that encourages growth wherever you are
                    and follows you throughout your career? In <em>Person-ality</em>, brand
                    impresario <strong>Deb Gabor</strong> delivers the third installment in her
                    series about cultivating dynamic brands. Deb&apos;s first two books showed how
                    to shape a sexy brand and create a loyal customer base. Now, Deb shares the
                    secrets to differentiating yourself and your company by exposing the humans
                    behind the business. With one-of-a-kind strategies, inspiring stories, and key
                    exercises to point you in the right direction, <em>Person-ality</em> is a
                    fascinating exploration of the present and future of marketing.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Marketing</span>
                  <span className="bd-tag">Marketing and Advertising</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/Person-ality"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$7.99</span>
                  </a>
                  <a
                    href="/success-stories/deb-gabor-branding-is-sex"
                    className="bd-btn bd-btn--secondary"
                  >
                    Read Success Story
                  </a>
                  <a href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
