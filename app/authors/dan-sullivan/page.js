import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Dan Sullivan | Scribe Media Author',
  description:
    'Dan Sullivan is a published Scribe Media author and expert coach. Author of Who Not How — a business classic that reframes how entrepreneurs achieve their goals.',
}

export default function DanSullivanAuthorPage() {
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
                src="./assets/Dan_Sullivan_Headshot.jpg"
                alt="Dan Sullivan"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
                unoptimized
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Dan Sullivan</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Business</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/Who-Not-How-Accelerating-Teamwork-ebook/dp/B0867ZJ151//ref=sr_1_2?dchild=1&tag=scribemedia0a-20"
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
            <h2 className="author-detail__section-title">About Dan</h2>
            <div className="author-detail__bio">
              <p>
                Expert coach Dan Sullivan knows the question we should ask instead: &ldquo;Who can
                do this for me?&rdquo; This may seem simple.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <ul className="author-detail__books-list">
              <li className="author-detail__book-item">
                <i className="ph ph-book-open-text author-detail__book-icon"></i>
                <Link href="/published-books/who-not-how" className="author-detail__book-link">
                  Who Not How
                </Link>
              </li>
            </ul>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Business Management</span>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Dan and 2,000+ authors who have published with Scribe Media.
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
