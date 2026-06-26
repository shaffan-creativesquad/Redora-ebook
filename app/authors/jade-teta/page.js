import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Jade Teta | Published Author',
  description:
    'Jade Teta is a published Scribe Media author. Entrepreneur, bestselling author, and integrative physician Dr. Jade Teta is a renowned expert in physical an...',
}

export default function JadeTeta() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back"><i className="ph ph-arrow-left"></i> All Authors</a>

          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <img
                src="/assets/Jade_Teta_Headshot.png"
                alt="Jade Teta"
                className="author-detail__avatar-img"
                loading="eager"
                width="600"
                height="600"
              />
              <span className="author-detail__initials author-detail__initials--fallback">JT</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Jade Teta</h1>
              <p className="author-detail__location"><i className="ph ph-map-pin"></i> Winston-Salem, NC</p>

              <div className="author-detail__meta">
                <span className="author-detail__tag"><i className="ph ph-books"></i> 1 Book</span>
                <span className="author-detail__tag">Health</span>
              </div>
              <div className="author-detail__links">
                <a href="https://www.amazon.com/dp/B09PQJ5PCK?tag=scribemedia0a-20" className="author-detail__link author-detail__link--primary" target="_blank" rel="noopener">
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a href="https://www.linkedin.com/in/jadeteta" className="author-detail__link author-detail__link--secondary" target="_blank" rel="noopener">
                  <i className="ph ph-linkedin-logo"></i> LinkedIn
                </a>
                <a href="https://www.jadeteta.com" className="author-detail__link author-detail__link--secondary" target="_blank" rel="noopener">
                  <i className="ph ph-globe"></i> Website
                </a>
              </div>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Jade</h2>
            <div className="author-detail__bio"><p>Entrepreneur, bestselling author, and integrative physician Dr. Jade Teta is a renowned expert in physical and personal development, specializing in functional endocrinology, metabolic conditioning, and humanistic psychology. A continuing education provider for health and fitness professionals, Dr. Teta has sold more than one million books, video workouts, and online health programs to the general public. He&apos;s a contributor to the Textbook Of Natural Medicine and Integrative Sexual Health, the founder of Next Level Human, and host of the Next Level Human podcast. For more information, visit jadeteta.com and nextlevelhuman.com.</p></div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <a className="author-detail__book-card" href="/published-books/next-level-metabolism">
                <div className="author-detail__book-cover-wrap">
                  <img
                    className="author-detail__book-cover"
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/the-next-level-metabolism.jpg?width=264&height=406&name=the-next-level-metabolism.jpg"
                    alt="Next-Level Metabolism"
                    loading="lazy"
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Next-Level Metabolism</p>
                </div>
              </a>
            </div>
          </div>

          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Health and Diet</span>
            </div>
          </div>

          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">Join Jade and 2,000+ authors who have published with Scribe Media.</p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
