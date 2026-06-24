import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Emily Lewis Bowers | Scribe Media Author',
  description:
    'Emily Lewis Bowers is a published Scribe Media author. Emily Bowers grew up in a small town in Florida, raised by a mother who abused and then abandoned her. Her book Mother Trauma explores generational trauma and healing.',
}

export default function EmilyLewisBowersAuthorPage() {
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
                src="./assets/Emily_Lewis_Bowers_Headshot.jpg"
                alt="Emily Lewis Bowers"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
                unoptimized
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Emily Lewis Bowers</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Relationships</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/B0B2KNV7C6?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
              </div>
            </div>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Emily</h2>
            <div className="author-detail__bio">
              <p>
                Emily Bowers grew up in a small town in Florida, raised by a mother who abused and
                then abandoned her. As an adult, Emily recognized that she was caught in a cycle of
                generational trauma and set out to change patterns and become a very different mom
                than the mothers in her family. With the support of her therapist, friends, and
                family, including her unofficially adopted mother, Emily learned to love herself and
                help others do the same. She lives in Vero Beach, Florida, with her husband, their
                three young children, and one Great Pyrenees, Josie.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link href="/published-books/mother-trauma" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/EmilyBowers_WebsiteCover_Final.jpg"
                    alt="Mother Trauma"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Mother Trauma</p>
                </div>
              </Link>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Emily and 2,000+ authors who have published with Scribe Media.
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
