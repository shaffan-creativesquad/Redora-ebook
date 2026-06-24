import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Eric Jorgenson | Published Author',
  description:
    'Eric Jorgenson is a published Scribe Media author. Eric Jorgenson curates the most useful ideas from our greatest thinkers and doers and preserves them in ...',
}

export default function EricJorgenson() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="https://scribemedia.com/hs-fs/hubfs/author-headshots/Eric_Jorgenson_Headshot.jpg?width=600&height=600&name=Eric_Jorgenson_Headshot.jpg"
                alt="Eric Jorgenson"
                className="author-detail__avatar-img"
                loading="eager"
                width="600"
                height="600"
              />
              <span className="author-detail__initials author-detail__initials--fallback">EJ</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Eric Jorgenson</h1>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 3 Books</span>
                <span className="author-detail__tag">Personal Development</span>
                <span className="author-detail__tag">Business</span>
                <span className="author-detail__tag">Technology</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/B0F9VM4V5N?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a href="http://ejorgenson.com" className="author-detail__link author-detail__link--secondary" target="_blank" rel="noopener">
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
              <div className="author-detail__stat-value">22,946</div>
              <div className="author-detail__stat-label">Amazon Reviews</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">3</div>
              <div className="author-detail__stat-label">Bestsellers</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">3</div>
              <div className="author-detail__stat-label">Books Published</div>
            </div>
          </div>

          <div className="author-detail__bestseller-list">
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Business Decision Making &amp; Problem Solving</span>
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Business Technology Innovation</span>
            <span className="author-detail__bestseller-tag">🏆 Bestseller in #3,520 in Management</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Eric</h2>
            <div className="author-detail__bio">
              <p>Eric Jorgenson curates the most useful ideas from our greatest thinkers and doers and preserves them in our most permanent format: books.</p>
              <p>He&apos;s the author of <em>The Almanack of Naval Ravikant</em> (2M+ copies sold) and <em>The Anthology of Balaji</em>. He&apos;s CEO of Scribe Media, where authors retain full financial and creative control of their books.</p>
              <p>Eric lives in Kansas City with his wife and son in a house that&apos;s slowly becoming a library. He invests in obsessive geniuses building utopian technology.</p>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/the-almanack-of-naval-ravikant">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/the-almanack-of-navl-ravikant.jpg?width=264&height=406&name=the-almanack-of-navl-ravikant.jpg"
                    alt="The Almanack of Naval Ravikant"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">The Almanack of Naval Ravikant</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.7</span>
                    <span>(22,631)</span>
                  </div>
                </div>
              </a>
              <a className="author-detail__book-card" href="/published-books/the-anthology-of-balaji">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/EricJorgenson_EbookCover_Final-scaled.jpg?width=264&height=406&name=EricJorgenson_EbookCover_Final-scaled.jpg"
                    alt="The Anthology of Balaji"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">The Anthology of Balaji</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.6</span>
                    <span>(268)</span>
                  </div>
                </div>
              </a>
              <a className="author-detail__book-card" href="/published-books/the-book-of-elon">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/the-book-of-elon.jpg?width=264&height=406&name=the-book-of-elon.jpg"
                    alt="The Book of Elon"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">The Book of Elon</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>5</span>
                    <span>(47)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Financial Planning</span>
              <span className="author-detail__tag">Business Management</span>
              <span className="author-detail__tag">Technology</span>
              <span className="author-detail__tag">Entrepreneurship</span>
            </div>
          </div>

          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <a className="author-detail__ah-card" href="/author-hour/episode/ep-514-eric-jorgenson-the-almanac-of-naval-ravikant-a-guide-to-wealth-and-happin">
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Eric Jorgenson: The Almanac of Naval Ravikant: A Guide to Wealth and Happiness</p>
                <p className="author-detail__ah-meta">August 24, 2020</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
            </div>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join Eric and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
