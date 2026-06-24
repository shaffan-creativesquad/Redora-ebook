import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Phillip Stutts | Published Author',
  description:
    'Phillip Stutts is the bestselling author of Fire Them Now and The Undefeated Marketing System, published with Scribe Media.',
}

export default function PhillipStuttsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="https://scribemedia.com/hs-fs/hubfs/author-headshots/phillip-stutts.jpg?width=600&height=600&name=phillip-stutts.jpg"
                alt="Phillip Stutts"
                className="author-detail__avatar-img"
                loading="eager"
                width="600"
                height="600"
              />
              <span className="author-detail__initials author-detail__initials--fallback">PS</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Phillip Stutts</h1>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 2 Books</span>
                <span className="author-detail__tag">Law and Politics</span>
                <span className="author-detail__tag">Marketing</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/1619618869?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
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
              <div className="author-detail__stat-value">259</div>
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
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Entrepreneurship</span>
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Nonprofit Marketing &amp; Communications</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Phillip</h2>
            <div className="author-detail__bio"><p>Founder, CEO, and bestselling author Phillip Stutts plays the game of corporate and political marketing on the highest level, battling with fierce competition, multibillion-dollar budgets, and a win-or-die mindset. He&apos;s worked with multiple Fortune 200 companies, contributed to more than 1,400 election victories (including three presidential wins), and made more than 350 national media appearances on outlets like ESPN, CBS, and CNN. Phillip has been lauded by Fox Business as a &ldquo;marketing genius&rdquo; who has &ldquo;generated record sales for his clients.&rdquo;</p></div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/fire-them-now-the-7-lies-digital-marketers-sell-and-the-truth-about-political-strategies-that-help-businesses-win">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/fire-them-now.jpg?width=264&height=406&name=fire-them-now.jpg"
                    alt="Fire Them Now"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Fire Them Now</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.5</span>
                    <span>(92)</span>
                  </div>
                </div>
              </a>

              <a className="author-detail__book-card" href="/published-books/the-undefeated-marketing-system">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/The-undefeated-marketing-system.jpg?width=264&height=406&name=The-undefeated-marketing-system.jpg"
                    alt="The Undefeated Marketing System"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">The Undefeated Marketing System</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.7</span>
                    <span>(167)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Marketing and Advertising</span>
              <span className="author-detail__tag">Business Management</span>
            </div>
          </div>

          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <a className="author-detail__ah-card" href="/author-hour/episode/ep-106-phillip-stutts-fire-them-now">
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Phillip Stutts: Fire Them Now</p>
                <p className="author-detail__ah-meta">March 06, 2018</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
              <a className="author-detail__ah-card" href="/author-hour/episode/ep-682-phillip-stutts-episode-682">
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Phillip Stutts: Episode 682</p>
                <p className="author-detail__ah-meta">April 19, 2021</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
            </div>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join Phillip and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
