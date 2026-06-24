import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Clint Emerson | Published Author',
  description:
    'Clint Emerson is a published Scribe Media author. Entrepreneur and bestselling author Clint Emerson is a retired 20-year Navy SEAL, who served with the eli...',
}

export default function ClintEmerson() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="https://scribemedia.com/hs-fs/hubfs/author-headshots/Clint_Emerson_Headshot.jpg?width=600&height=600&name=Clint_Emerson_Headshot.jpg"
                alt="Clint Emerson"
                className="author-detail__avatar-img"
                loading="eager"
              />
              <span className="author-detail__initials author-detail__initials--fallback">CE</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Clint Emerson</h1>

              <p className="author-detail__location"><i className="ph ph-map-pin"></i> Frisco, TX</p>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 2 Books</span>
                <span className="author-detail__tag">Personal Development</span>
                <span className="author-detail__tag">Military</span>
                <span className="author-detail__tag">Travel</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/147679605X?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a href="https://clintemerson.com" className="author-detail__link author-detail__link--secondary" target="_blank" rel="noopener">
                  <i className="ph ph-globe"></i> Website
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
              <div className="author-detail__stat-value">11,661</div>
              <div className="author-detail__stat-label">Amazon Reviews</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">2</div>
              <div className="author-detail__stat-label">Bestsellers</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">2</div>
              <div className="author-detail__stat-label">Books Published</div>
            </div>
          </div>

          <div className="author-detail__bestseller-list">
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Intelligence &amp; Espionage History</span>
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Travel Tips</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Clint</h2>
            <div className="author-detail__bio"><p>Entrepreneur and bestselling author Clint Emerson is a retired 20-year Navy SEAL, who served with the elite DEVGRU and national government agencies. Escape the Wolf, the company Emerson founded, is a crisis management company providing preemptive, holistic security solutions and crisis management. Emerson is the author of Escape the Wolf and the bestselling 100 Deadly Skills book series.</p></div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/100-deadly-skills">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/100-deadly-skills.jpg?width=264&height=406&name=100-deadly-skills.jpg"
                    alt="100 Deadly Skills"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">100 Deadly Skills</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.6</span>
                    <span>(11,285)</span>
                  </div>
                </div>
              </a>
              <a className="author-detail__book-card" href="/published-books/escape-the-wolf">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/ClintEmerson_WebsiteCover.jpg?width=264&height=406&name=ClintEmerson_WebsiteCover.jpg"
                    alt="Escape the Wolf"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Escape the Wolf</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.7</span>
                    <span>(376)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Sports and Fitness</span>
              <span className="author-detail__tag">Business Management</span>
            </div>
          </div>

          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <a className="author-detail__ah-card" href="/author-hour/episode/ep-609-clint-emerson-episode-609">
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Clint Emerson: Episode 609</p>
                <p className="author-detail__ah-meta">January 13, 2021</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
            </div>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join Clint and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
