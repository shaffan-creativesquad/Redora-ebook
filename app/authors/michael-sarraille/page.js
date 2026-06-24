import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Michael Sarraille | Published Author',
  description:
    'Michael Sarraille is a published Scribe Media author. MIKE SARRAILLE, a retired US Navy SEAL officer and former Recon Marine, served twenty years in Specia...',
}

export default function MichaelSarraille() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="https://scribemedia.com/hs-fs/hubfs/author-headshots/Michael_Sarraille_Headshot.jpg?width=600&height=600&name=Michael_Sarraille_Headshot.jpg"
                alt="Michael Sarraille"
                className="author-detail__avatar-img"
                loading="eager"
              />
              <span className="author-detail__initials author-detail__initials--fallback">MS</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Michael Sarraille</h1>

              <p className="author-detail__location"><i className="ph ph-map-pin"></i> Austin, TX</p>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 2 Books</span>
                <span className="author-detail__tag">Business</span>
                <span className="author-detail__tag">Military</span>
                <span className="author-detail__tag">Leadership</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/B08GFG5C53?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a href="https://www.linkedin.com/in/michaelsarraillemba/" className="author-detail__link author-detail__link--secondary" target="_blank" rel="noopener">
                  <i className="ph ph-linkedin-logo"></i> LinkedIn
                </a>
                <a href="https://www.talentwargroup.com" className="author-detail__link author-detail__link--secondary" target="_blank" rel="noopener">
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
              <div className="author-detail__stat-value">684</div>
              <div className="author-detail__stat-label">Amazon Reviews</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">1</div>
              <div className="author-detail__stat-label">Bestseller</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">2</div>
              <div className="author-detail__stat-label">Books Published</div>
            </div>
          </div>

          <div className="author-detail__bestseller-list">
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Human Resources &amp; Personnel Management</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Michael</h2>
            <div className="author-detail__bio"><p>MIKE SARRAILLE, a retired US Navy SEAL officer and former Recon Marine, served twenty years in Special Operations before founding Talent War Group, a leadership development and executive search firm. As CEO, he leads an impressive team of experts who specialize in helping clients foster a culture of success by optimizing their company&apos;s most valuable resource: its employees. Mike is also the director of the Men&apos;s Journal Everyday Warrior franchise, which includes a critically acclaimed podcast. Recently, he founded ATTA, a performance-focused apparel brand born out of his Everyday Warrior concept and fueled by his passion for helping people succeed. An avid skydiver, Mike enjoys pushing the limits of what&apos;s possible. This inspired him to start Legacy Expeditions, an adventure capital firm that embarks on record-setting expeditions in honor of the brave men and women who lost their lives during the Global War on Terrorism. Learn more at Mikesarraille.com and Talentwargroup.com.</p></div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/the-talent-war">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/The-Talent-War-1.jpg?width=264&height=406&name=The-Talent-War-1.jpg"
                    alt="The Talent War"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">The Talent War</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.7</span>
                    <span>(684)</span>
                  </div>
                </div>
              </a>
              <a className="author-detail__book-card" href="/published-books/the-everyday-warrior">
                <div className="author-detail__book-cover-wrap">
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/MichaelSarraille_WebsiteCover.jpg?width=264&height=406&name=MichaelSarraille_WebsiteCover.jpg"
                    alt="The Everyday Warrior"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">The Everyday Warrior</p>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Careers Services</span>
              <span className="author-detail__tag">Education</span>
            </div>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join Michael and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
