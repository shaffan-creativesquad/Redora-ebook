import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Melissa Gonzalez | Published Author',
  description:
    'Melissa Gonzalez is a published Scribe Media author. In a world where the relationship between brands and consumers is becoming more and more transactional...',
}

export default function MelissaGonzalez() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="https://scribemedia.com/hs-fs/hubfs/images/books/the-pop-up-paradigm.jpg?width=400&height=400&name=the-pop-up-paradigm.jpg"
                alt="Melissa Gonzalez"
                className="author-detail__avatar-img author-detail__avatar-img--cover"
                loading="eager"
              />
              <span className="author-detail__initials author-detail__initials--fallback">MG</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Melissa Gonzalez</h1>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 1 Book</span>
                <span className="author-detail__tag">Business</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/1619613026?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
              </div>
            </div>
          </div>

          <div className="author-detail__stats-bar">
            <div className="author-detail__stat">
              <div className="author-detail__stat-value"><span className="author-detail__star-icon">★</span> 3.8</div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">37</div>
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
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Entrepreneurship</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Melissa</h2>
            <div className="author-detail__bio"><p>In a world where the relationship between brands and consumers is becoming more and more transactional, how can businesses build real, human connections with their customers?Melissa Gonzalez, the retail strategist responsible for dozens of successful pop-ups from companies like Amazon, Marc Jacobs, Estee Lauder and J.Hilburn, has the answer.</p></div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/the-pop-up-paradigm">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/the-pop-up-paradigm.jpg?width=264&height=406&name=the-pop-up-paradigm.jpg"
                    alt="The Pop Up Paradigm"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">The Pop Up Paradigm</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>3.8</span>
                    <span>(37)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Retail</span>
            </div>
          </div>

          <div style={{ margin: '3rem 0', padding: '2rem 2.25rem', background: 'linear-gradient(135deg, rgba(52,217,195,0.08) 0%, rgba(192,132,252,0.05) 100%)', border: '1px solid rgba(52,217,195,0.25)', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34d9c3' }}>★ Scribe Case Study</p>
              <p style={{ margin: '0 0 0.65rem', fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.3, color: '#ffffff', fontFamily: "'Playfair Display', Georgia, serif" }}>How Melissa Gonzalez Used a Book to Raise Her Visibility, Create Authority, and Double Her Business</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#a8a29e', lineHeight: 1.5 }}>Melissa Gonzalez had a problem: she was great at her job, and not enough potential clients knew it, and as a result, her business was growing slowly. By publishing a book, she was …</p>
            </div>
            <a href="/success-stories/melissa-gonzalez" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.5rem', background: '#34d9c3', color: '#0c0a1d', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: '10px', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>Read the Case Study <span style={{ fontSize: '1.1rem' }}>→</span></a>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join Melissa and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
