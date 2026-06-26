import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Escape the Wolf by Clint Emerson',
  description:
    'Escape the Wolf raises the safety IQ of today\'s global travelers. Using Escape the Wolf\'s exclusive, holistic Total Awareness System, international travelers are empowered to identify, minimize, or avoid all types of wolves or threats.',
}

export default function EscapeTheWolfPage() {
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
                <img
                  src="https://scribemedia.com/hubfs/images/books/ClintEmerson_WebsiteCover.jpg"
                  alt="Escape the Wolf"
                  className="bd-cover"
                  loading="eager"
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Escape the Wolf</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/clint-emerson">Clint Emerson</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-value">4.7</span>
                  <span className="bd-rating-count">376 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Travel Tips</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p><em>Escape the Wolf</em> raises the safety IQ of today&apos;s global travelers. Using <em>Escape the Wolf</em>&apos;s exclusive, holistic Total Awareness System, international travelers are empowered to identify, minimize, or avoid all types of wolves or threats&mdash;from common crime, health issues, and natural disasters to kidnapping and even terrorism. The author shares his years of hands-on experience in dealing with high-risk situations.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Military</span>
                  <span className="bd-tag">Travel</span>
                  <span className="bd-tag">Business Management</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/EscapetheWolf"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$6.99</span>
                  </a>
                  <a href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Author Section ── */}
        <div className="book-author-section">
          <div className="book-author-section__divider"></div>
          <div className="book-author-section__layout">
            <img
              className="book-author-section__photo"
              src="/assets/Clint_Emerson_Headshot.png"
              alt="Clint Emerson"
              loading="lazy"
            />
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/clint-emerson">Clint Emerson</a></h2>
              <div className="book-author-section__bio">
                <p>Entrepreneur and bestselling author Clint Emerson is a retired 20-year Navy SEAL, who served with the elite DEVGRU and national government agencies. Escape the Wolf, the company Emerson founded, is a crisis management company providing preemptive, holistic security solutions and crisis management. Emerson is the author of Escape the Wolf and the bestselling 100 Deadly Skills book series.</p>
              </div>
              <a className="book-author-section__link" href="/authors/clint-emerson">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
