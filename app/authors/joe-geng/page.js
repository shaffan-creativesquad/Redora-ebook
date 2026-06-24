import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Joe Geng | Published Author',
  description:
    'Joe Geng is a published Scribe Media author. JOE GENG grew up among the tanneries of Canada helping his father make gloves, and he has spent his entire lif...',
}

export default function JoeGeng() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="https://scribemedia.com/hs-fs/hubfs/author-headshots/joe-geng.jpg?width=600&height=600&name=joe-geng.jpg"
                alt="Joe Geng"
                className="author-detail__avatar-img"
                loading="eager"
              />
              <span className="author-detail__initials author-detail__initials--fallback">JG</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Joe Geng</h1>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 1 Book</span>
                <span className="author-detail__tag">Business</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/1544506252?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
                  <i className="ph ph-amazon-logo"></i> View on Amazon
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
              <div className="author-detail__stat-value">28</div>
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
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Manufacturing Industry</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Joe</h2>
            <div className="author-detail__bio"><p>JOE GENG grew up among the tanneries of Canada helping his father make gloves, and he has spent his entire life studying industrial hand safety, overseeing glove R&amp;D, and consulting with leading companies like Toyota, Honda, SpaceX, General Motors, Bombardier Aircraft, and Shell Oil. He presently acts as vice president at Superior Glove, the Geng family business considered one of the world&apos;s most innovative and disruptive glove manufacturers. Superior is a major global supplier to aerospace, automotive, oil &amp; gas, and construction companies, and has been named one of Canada&apos;s best-managed companies seven years in a row by Deloitte. Joe holds degrees from Trinity Western University and attended Reutlingen leather school in Germany, which he describes as the &quot;Hogwarts of leather making.&quot; He lives in Oakville, Ontario, with his wife and three kids.</p></div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/rethinking-hand-safety">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/rethinking-hand-safety.jpg?width=264&height=406&name=rethinking-hand-safety.jpg"
                    alt="Rethinking Hand Safety"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Rethinking Hand Safety</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.7</span>
                    <span>(28)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Manufacturing</span>
            </div>
          </div>

          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <a className="author-detail__ah-card" href="/author-hour/episode/ep-405-joe-geng-episode-405">
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Joe Geng: Episode 405</p>
                <p className="author-detail__ah-meta">December 19, 2019</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
            </div>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join Joe and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
