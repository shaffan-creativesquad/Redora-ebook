import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Jeff Kavanaugh | Scribe Media Author',
  description:
    'Jeff Kavanaugh is a published Scribe Media author and Vice President and Head of the Infosys Knowledge Institute. Author of Practical Sustainability and Consulting Essentials.',
}

export default function JeffKavanaughAuthorPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">

          <Link href="/authors" className="author-detail__back">
            <i className="ph ph-arrow-left"></i> All Authors
          </Link>

          {/* ── Header ── */}
          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <Image
                src="/assets/jeff-kavanaugh.png"
                alt="Jeff Kavanaugh"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
                unoptimized
              />
              <span className="author-detail__initials author-detail__initials--fallback">JK</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Jeff Kavanaugh</h1>
              <p className="author-detail__location">
                <i className="ph ph-map-pin"></i> Colleyville, TX
              </p>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 2 Books
                </span>
                <span className="author-detail__tag">Business</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/B09PZHP2GV?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a
                  href="https://www.linkedin.com/in/jeffkavanaugh"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph ph-linkedin-logo"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* ── Stats bar ── */}
          <div className="author-detail__stats-bar">
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">
                <span className="author-detail__star-icon">★</span> 4.4
              </div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">133</div>
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

          {/* ── Bestseller categories ── */}
          <div className="author-detail__bestseller-list">
            <span className="author-detail__bestseller-tag">
              🏆 Bestseller in Consulting
            </span>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Jeff</h2>
            <div className="author-detail__bio">
              <p>
                NOTE: From top to bottom on the hardcover bio flap, the authors want things in this
                order: <br />the Corey Glickman headshot<br />Corey Glickman bio<br />Jeff
                Kavanaugh headshot<br />Jeff Kavanaugh bio<br />then the Knowledge Institute URL
              </p>
              <p>[Corey Glickman headshot]</p>
              <p>
                Corey Glickman is Vice President at Infosys and leads their sustainability and
                design business, delivering smart space initiatives for clients globally. Corey is a
                member of both the World Economic Forum Pioneer Cities group and the MIT Technology
                Review Board and is a faculty expert at Singularity University. The American
                Institute of Graphic Arts named Corey one of the one hundred most influential
                designers of the decade.
              </p>
              <p>[Jeff Kavanaugh headshot]</p>
              <p>
                Jeff Kavanaugh is Vice President and Head of the Infosys Knowledge Institute, the
                research and thought leadership arm of Infosys, a leading tech and consulting
                company. Jeff is an adjunct professor at the Jindal School of Management at the
                University of Texas at Dallas and author of the books The Live Enterprise and
                Consulting Essentials. Jeff has been published in Harvard Business Review and other
                leading business publications.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link href="/published-books/practical-sustainability" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/practical-sustainability.jpg?width=264&height=406&name=practical-sustainability.jpg"
                    alt="Practical Sustainability"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Practical Sustainability</p>
                </div>
              </Link>
              <Link
                href="/published-books/consulting-essentials-the-art-and-science-of-people-facts-and-frameworks"
                className="author-detail__book-card"
              >
                <div className="author-detail__book-cover-wrap">
                  <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/consulting-essentials.jpg?width=264&height=406&name=consulting-essentials.jpg"
                    alt="Consulting Essentials"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Consulting Essentials</p>
                  <div className="author-detail__book-card-rating">
                    <span className="author-detail__book-card-stars">★</span>
                    <span>4.4</span>
                    <span>(133)</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Environment</span>
              <span className="author-detail__tag">B2B Consulting</span>
            </div>
          </div>

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <Link
                href="/author-hour/episode/ep-126-jeff-kavanaugh-consulting-essentials"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Jeff Kavanaugh: Consulting Essentials</p>
                <p className="author-detail__ah-meta">April 12, 2018</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Jeff and 2,000+ authors who have published with Scribe Media.
            </p>
            <Link href="/consult" className="author-detail__cta-btn">
              Schedule a Consult
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
