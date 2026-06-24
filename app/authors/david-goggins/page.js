import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'David Goggins | Published Author',
  description:
    'David Goggins is a published Scribe Media author. David Goggins is a retired Navy SEAL, ultramarathon runner, and one of the world\'s most recognized endura...',
}

export default function DavidGoggins() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="https://scribemedia.com/hs-fs/hubfs/author-headshots/David_Goggins_Headshot.jpg?width=600&height=600&name=David_Goggins_Headshot.jpg"
                alt="David Goggins"
                className="author-detail__avatar-img"
                loading="eager"
              />
              <span className="author-detail__initials author-detail__initials--fallback">DG</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">David Goggins</h1>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 2 Books</span>
                <span className="author-detail__tag">Memoir</span>
                <span className="author-detail__tag">Military</span>
                <span className="author-detail__tag">Personal Development</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/1544512287?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
              </div>
            </div>
          </div>

          <div className="author-detail__stats-bar">
            <div className="author-detail__stat">
              <div className="author-detail__stat-value"><span className="author-detail__star-icon">★</span> 4.8</div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">119,142</div>
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
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Health, Fitness &amp; Dieting</span>
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Business Motivation &amp; Self-Improvement</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About David</h2>
            <div className="author-detail__bio">
              <p>David Goggins is a retired Navy SEAL, ultramarathon runner, and one of the world&apos;s most recognized endurance athletes. He is the only member of the U.S. Armed Forces to complete SEAL training (including two Hell Weeks), Army Ranger School (graduating as Enlisted Honor Man), and Air Force Tactical Air Controller training.</p>
              <p>An accomplished endurance athlete, Goggins has completed more than 60 ultra-marathons, triathlons, and ultra-triathlons, regularly placing in the top five and setting new course records. He once held the Guinness World Record for pull-ups, completing 4,030 in 17 hours.</p>
              <p>His debut memoir, Can&apos;t Hurt Me, became a New York Times Best Seller with over 7 million copies sold. His follow-up, Never Finished, continues his exploration of mental toughness, resilience, and the untapped potential within all of us. Both books were published through Scribe Media.</p>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/cant-hurt-me">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/cant-hurt-me.jpg?width=264&height=406&name=cant-hurt-me.jpg"
                    alt="Can't Hurt Me"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Can&apos;t Hurt Me</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.8</span>
                    <span>(105,142)</span>
                  </div>
                </div>
              </a>
              <a className="author-detail__book-card" href="/published-books/never-finished">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/DavidGoggins_WebsiteCover.jpg?width=264&height=406&name=DavidGoggins_WebsiteCover.jpg"
                    alt="Never Finished"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Never Finished</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.8</span>
                    <span>(14,000)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Training and Development</span>
            </div>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join David and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
