import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Nassim Nicholas Taleb | Published Author',
  description:
    'Nassim Nicholas Taleb is a published Scribe Media author. Nassim Nicholas Taleb is a Lebanese-American essayist, scholar, and former options trader whose w...',
}

export default function NassimNicholasTaleb() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="/assets/Nassim-Taleb_SCoFT_WP.png"
                alt="Nassim Nicholas Taleb"
                className="author-detail__avatar-img author-detail__avatar-img--cover"
                loading="eager"
              />
              <span className="author-detail__initials author-detail__initials--fallback">NT</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Nassim Nicholas Taleb</h1>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 1 Book</span>
                <span className="author-detail__tag">Business</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/1544508050?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
              </div>
            </div>
          </div>

          <div className="author-detail__stats-bar">
            <div className="author-detail__stat">
              <div className="author-detail__stat-value"><span className="author-detail__star-icon">★</span> 4.6</div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">337</div>
              <div className="author-detail__stat-label">Amazon Reviews</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">1</div>
              <div className="author-detail__stat-label">Bestseller</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">1</div>
              <div className="author-detail__stat-label">Book Published</div>
            </div>
          </div>

          <div className="author-detail__bestseller-list">
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Probability &amp; Statistics</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Nassim Nicholas</h2>
            <div className="author-detail__bio"><p>Nassim Nicholas Taleb is a Lebanese-American essayist, scholar, and former options trader whose work focuses on problems of randomness, probability, and uncertainty. He is the author of the landmark Incerto series including the international bestseller The Black Swan, and serves as Distinguished Professor of Risk Engineering at New York University&apos;s Tandon School of Engineering.</p></div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/statistical-consequences-of-fat-tails">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/Nassim-Taleb_SCoFT_WP.jpeg?width=264&height=406&name=Nassim-Taleb_SCoFT_WP.jpeg"
                    alt="Statistical Consequences of Fat Tails"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Statistical Consequences of Fat Tails</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.6</span>
                    <span>(337)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Education</span>
            </div>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join Nassim Nicholas and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
