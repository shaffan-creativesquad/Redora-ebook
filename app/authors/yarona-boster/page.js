import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Yarona Boster | Scribe Media Author',
  description:
    'Yarona Boster is an Advanced Certified Life Coach, certified speaker coach, TEDx speaker, TEDx event moderator, and a two-time international bestselling author.',
}

export default function YaronaBosterAuthorPage() {
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
                src="/assets/yarona-boster-headshot.jpg"
                alt="Yarona Boster"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Yarona Boster</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Home and Family</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/B0GMK9NMZW?tag=scribemedia0a-20"
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
            <h2 className="author-detail__section-title">About Yarona</h2>
            <div className="author-detail__bio">
              <p>
                Yarona Boster is an Advanced Certified Life Coach, certified speaker coach, TEDx
                speaker, TEDx event moderator, and a two-time international bestselling author. With
                nearly two decades spent in early childhood and human development, psychology, and
                coaching, Yarona cohosts The Evolution of Parenting podcast and helps people craft
                emotionally resonant messages for world stages. Her TEDx talk explores parenting and
                foundational loss, a subject shaped by her numerous experiences with death and the
                dying process. From parents to world leaders, Yarona empowers people to lead and
                connect with empathy, resilience, and purpose through transformative communication.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link
                href="/published-books/unspoken-signals"
                className="author-detail__book-card"
              >
                <div className="author-detail__book-cover-wrap">
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/unspokensignals-cover-opt.jpg"
                    alt="Unspoken Signals"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Unspoken Signals</p>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Family</span>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Yarona and 2,000+ authors who have published with Scribe Media.
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
