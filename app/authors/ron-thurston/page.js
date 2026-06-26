import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Ron Thurston | Published Author',
  description:
    'Ron Thurston is a published Scribe Media author. Ron Thurston wrote Retail Pride as an indispensable guide for every retail employee, manager, and multi-st...',
}

export default function RonThurston() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="/assets/Ron_Thurston_Headshot.png"
                alt="Ron Thurston"
                className="author-detail__avatar-img"
                loading="eager"
              />
              <span className="author-detail__initials author-detail__initials--fallback">RT</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Ron Thurston</h1>

              <p className="author-detail__location"><i className="ph ph-map-pin"></i> Miami, FL</p>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 2 Books</span>
                <span className="author-detail__tag">Business</span>
                <span className="author-detail__tag">Technology</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/B08JNDR73Y?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a href="https://www.linkedin.com/in/rthurston/" className="author-detail__link author-detail__link--secondary" target="_blank" rel="noopener">
                  <i className="ph ph-linkedin-logo"></i> LinkedIn
                </a>
                <a href="https://www.ronthurston.com/" className="author-detail__link author-detail__link--secondary" target="_blank" rel="noopener">
                  <i className="ph ph-globe"></i> Website
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
              <div className="author-detail__stat-value">202</div>
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
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Retailing Industry</span>
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Knowledge Capital</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Ron</h2>
            <div className="author-detail__bio"><p>Ron Thurston wrote Retail Pride as an indispensable guide for every retail employee, manager, and multi-store leader looking to accelerate their potential and grow their career.</p></div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/retail-pride">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/Retail-Pride-2.jpg?width=264&height=406&name=Retail-Pride-2.jpg"
                    alt="Retail Pride"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Retail Pride</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.7</span>
                    <span>(172)</span>
                  </div>
                </div>
              </a>
              <a className="author-detail__book-card" href="/published-books/human-pride">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/71CYzy6BLBL._SL1500_.jpg?width=264&height=406&name=71CYzy6BLBL._SL1500_.jpg"
                    alt="Human Pride"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Human Pride</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>5</span>
                    <span>(30)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Retail</span>
              <span className="author-detail__tag">AI</span>
              <span className="author-detail__tag">Technology</span>
            </div>
          </div>

          <div style={{ margin: '3rem 0', padding: '2rem 2.25rem', background: 'linear-gradient(135deg, rgba(52,217,195,0.08) 0%, rgba(192,132,252,0.05) 100%)', border: '1px solid rgba(52,217,195,0.25)', borderRadius: '14px', display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '260px' }}>
              <p style={{ margin: '0 0 0.5rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#34d9c3' }}>★ Scribe Case Study</p>
              <p style={{ margin: '0 0 0.65rem', fontSize: '1.35rem', fontWeight: 700, lineHeight: 1.3, color: '#ffffff', fontFamily: "'Playfair Display', Georgia, serif" }}>Ron Thurston Used Scribe to Celebrate America&apos;s Unsung Heroes (And Launched a New Career Along the Way)</p>
              <p style={{ margin: 0, fontSize: '0.9rem', color: '#a8a29e', lineHeight: 1.5 }}>With a true love for retail, Ron Thurston changes the narrative for industry workers around the world. Read more on the Scribe blog.</p>
            </div>
            <a href="/success-stories/ron-thurston-retail-pride" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.85rem 1.5rem', background: '#34d9c3', color: '#0c0a1d', fontWeight: 700, fontSize: '0.95rem', textDecoration: 'none', borderRadius: '10px', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>Read the Case Study <span style={{ fontSize: '1.1rem' }}>→</span></a>
          </div>

          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <a className="author-detail__ah-card" href="/author-hour/episode/ep-545-ron-thurston-retail-pride">
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Ron Thurston: Retail Pride</p>
                <p className="author-detail__ah-meta">September 25, 2020</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
            </div>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join Ron and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
