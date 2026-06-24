import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Joe Mechlinski | Published Author',
  description:
    'Joe Mechlinski is a published Scribe Media author. But meaningful work-life integration is possible. In Shift the Work, Joe Mechlinski, the New York Times b...',
}

export default function JoeMechlinski() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="https://scribemedia.com/hs-fs/hubfs/images/books/shift-the-work.jpg?width=400&height=400&name=shift-the-work.jpg"
                alt="Joe Mechlinski"
                className="author-detail__avatar-img author-detail__avatar-img--cover"
                loading="eager"
              />
              <span className="author-detail__initials author-detail__initials--fallback">JM</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Joe Mechlinski</h1>
              <p className="author-detail__location"><i className="ph ph-map-pin"></i> Baltimore, MD</p>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 1 Book</span>
                <span className="author-detail__tag">Personal Development</span>
                <span className="author-detail__tag">Psychology</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/B07GVQT11B?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
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
              <div className="author-detail__stat-value">76</div>
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
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Workplace Behavior</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Joe</h2>
            <div className="author-detail__bio"><p>But meaningful work-life integration is possible.In Shift the Work, Joe Mechlinski, the New York Times bestselling author of Grow Regardless, shares his personal journey to find purpose, and how it influenced him to take a deeper dive into the science of human behavior.</p></div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/shift-the-work">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/shift-the-work.jpg?width=264&height=406&name=shift-the-work.jpg"
                    alt="Shift the Work"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Shift the Work</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.3</span>
                    <span>(76)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">B2B Consulting</span>
            </div>
          </div>

          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <a className="author-detail__ah-card" href="/author-hour/episode/ep-134-joe-mechlinski-shift-the-work">
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Joe Mechlinski: Shift the Work</p>
                <p className="author-detail__ah-meta">April 20, 2018</p>
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
