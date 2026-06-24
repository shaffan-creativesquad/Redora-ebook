import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Randy Frisch | Published Author',
  description:
    'Randy Frisch is the author of F#ck Content Marketing, published with Scribe Media.',
}

export default function RandyFrischPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="https://scribemedia.com/hs-fs/hubfs/author-headshots/randy-frisch.jpg?width=600&height=600&name=randy-frisch.jpg"
                alt="Randy Frisch"
                className="author-detail__avatar-img"
                loading="eager"
                width="600"
                height="600"
              />
              <span className="author-detail__initials author-detail__initials--fallback">RF</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Randy Frisch</h1>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 1 Book</span>
                <span className="author-detail__tag">Marketing</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/154451364X?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
              </div>
            </div>
          </div>

          <div className="author-detail__stats-bar">
            <div className="author-detail__stat">
              <div className="author-detail__stat-value"><span className="author-detail__star-icon">★</span> 4.3</div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">93</div>
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
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Blogging &amp; Blogs</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Randy</h2>
            <div className="author-detail__bio"><p>Truly effective companies (and marketers) create content experiences, drawing the customer into an immersive infinite scroll that mirrors the consumer experience of Netflix, Spotify, and other billion-dollar brands.Randy Frisch will push you to rethink how you approach content for complex buyer journeys.</p></div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/fck-content-marketing">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/fck-content-marketing.jpg?width=264&height=406&name=fck-content-marketing.jpg"
                    alt="F#ck Content Marketing"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">F#ck Content Marketing</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.3</span>
                    <span>(93)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Marketing and Advertising</span>
            </div>
          </div>

          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <a className="author-detail__ah-card" href="/author-hour/episode/ep-249-randy-frisch-f-content-marketing">
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Randy Frisch: F Content Marketing</p>
                <p className="author-detail__ah-meta">February 19, 2019</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
            </div>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join Randy and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
