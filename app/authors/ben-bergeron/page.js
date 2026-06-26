import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ben Bergeron | Published Author',
  description:
    'Ben Bergeron is the bestselling author of Chasing Excellence, published with Scribe Media.',
}

export default function BenBergeron() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="/assets/Ben_Bergeron_Headshot.png"
                alt="Ben Bergeron"
                className="author-detail__avatar-img"
                loading="eager"
                width="600"
                height="600"
              />
              <span className="author-detail__initials author-detail__initials--fallback">B</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Ben Bergeron</h1>
              <p className="author-detail__location"><i className="ph ph-map-pin"></i> Natick, MA</p>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 1 Book</span>
                <span className="author-detail__tag">Psychology</span>
                <span className="author-detail__tag">Sports and Fitness</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/B0743MP21F?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a href="https://www.linkedin.com/in/benbergeron" className="author-detail__link author-detail__link--secondary" target="_blank" rel="noopener">
                  <i className="ph ph-linkedin-logo"></i> LinkedIn
                </a>
                <a href="https://CompTrain.com" className="author-detail__link author-detail__link--secondary" target="_blank" rel="noopener">
                  <i className="ph ph-globe"></i> Website
                </a>
              </div>
            </div>
          </div>

          <div className="author-detail__stats-bar">
            <div className="author-detail__stat">
              <div className="author-detail__stat-value"><span className="author-detail__star-icon">★</span> 4.7</div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">3,959</div>
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
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Sports Coaching</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Ben</h2>
            <div className="author-detail__bio"><p>CrossFit trainer Ben Bergeron has helped build the world&apos;s fittest athletes, but he&apos;s not like other coaches. He believes that greatness is not for the elite few; that winning is a result, not a goal; and that character, not talent, is what makes a true champion.</p></div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/chasing-excellence">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/chasing-excellence.jpg?width=264&height=406&name=chasing-excellence.jpg"
                    alt="Chasing Excellence"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Chasing Excellence</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.7</span>
                    <span>(3,959)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Psychology and Counseling</span>
            </div>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join Ben and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
