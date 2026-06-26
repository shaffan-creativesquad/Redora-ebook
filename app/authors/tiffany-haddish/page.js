import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Tiffany Haddish | Published Author',
  description:
    'Tiffany Haddish is a published Scribe Media author. NEW YORK TIMES BESTSELLER "An inspiring story that manages to be painful, honest, shocking, bawdy, and hilarious." —The New York Times Book Review',
}

export default function TiffanyHaddish() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="https://scribemedia.com/hs-fs/hubfs/author-headshots/Tiffany_Haddish_Headshot_v3.jpg"
                alt="Tiffany Haddish"
                className="author-detail__avatar-img"
                loading="eager"
              />
              <span className="author-detail__initials author-detail__initials--fallback">TH</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Tiffany Haddish</h1>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 1 Book</span>
                <span className="author-detail__tag">Memoir</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/B06ZZLYVCG?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
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
              <div className="author-detail__stat-value">13,579</div>
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
            <span className="author-detail__bestseller-tag">🏆 Bestseller in Humor Essays</span>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Tiffany</h2>
            <div className="author-detail__bio">
              <p>NEW YORK TIMES BESTSELLER &ldquo;An inspiring story that manages to be painful, honest, shocking, bawdy, and hilarious.&rdquo; &mdash;The New York Times Book Review From stand-up comedian, actress, and breakout star of Girls Trip, Tiffany Haddish, comes The Last Black Unicorn, a sidesplitting, hysterical, edgy, and unflinching collection of (extremely) personal essays, as fearless as the author herself. Growing up in one of the poorest neighborhoods of South Central Los Angeles, Tiffany learned to survive by making people laugh. By turns hilarious, filthy, and brutally honest, The Last Black Unicorn shows the world who Tiffany Haddish really is&mdash;humble, grateful, down-to-earth, and funny as hell.</p>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/the-last-black-unicorn">
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/the-last-black-unicorn.jpg?width=264&height=406&name=the-last-black-unicorn.jpg"
                    alt="The Last Black Unicorn"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">The Last Black Unicorn</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.6</span>
                    <span>(13,579)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Writing and Arts</span>
            </div>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join Tiffany and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
