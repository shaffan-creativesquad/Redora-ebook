import './cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Cameron Herold | Scribe Media Author',
  description:
    'Cameron Herold is a top business consultant, best-selling author, and speaker. He has published 4 books with Scribe Media including Meetings Suck, Vivid Vision, and Free PR.',
}

const books = [
  {
    href: '/published-books/the-second-in-command',
    cover: 'https://scribemedia.com/hs-fs/hubfs/images/books/CameronHerold4_WebsiteCover.jpg',
    title: 'The Second in Command',
    rating: '4.7',
    reviews: '332',
  },
  {
    href: '/published-books/meetings-suck',
    cover: 'https://scribemedia.com/hs-fs/hubfs/images/books/meetings-suck.jpg',
    title: 'Meetings Suck',
    rating: '4.2',
    reviews: '439',
  },
  {
    href: '/published-books/vivid-vision-a-remarkable-tool-for-aligning-your-business-around-a-shared-vision-of-the-future',
    cover: 'https://scribemedia.com/hs-fs/hubfs/images/books/vivid-vision.jpg',
    title: 'Vivid Vision',
    rating: '4.5',
    reviews: '1,233',
  },
  {
    href: '/published-books/free-pr',
    cover: 'https://scribemedia.com/hs-fs/hubfs/images/books/free-PR.jpg',
    title: 'Free PR',
    rating: '4.7',
    reviews: '208',
  },
]

const bestsellerCategories = [
  'Business Conflict Resolution & Mediation',
  'Organizational Behavior',
  'Workplace Culture',
  'Public Relations',
]

const ahEpisodes = [
  {
    href: '/author-hour/episode/ep-85-cameron-herold-vivid-vision',
    title: 'Cameron Herold: Vivid Vision',
    date: 'January 19, 2018',
  },
  {
    href: '/author-hour/episode/ep-237-cameron-herold-free-pr',
    title: 'Cameron Herold: Free PR',
    date: 'February 02, 2019',
  },
]

export default function CameronHeroldAuthorPage() {
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
                src="/assets/Cameron_Herold_Headshot.jpg"
                alt="Cameron Herold"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Cameron Herold</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 4 Books
                </span>
                <span className="author-detail__tag">Business</span>
                <span className="author-detail__tag">Marketing</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/1544537603?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
              </div>
            </div>
          </div>

          {/* ── Stats bar ── */}
          <div className="author-detail__stats-bar">
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">
                <span className="author-detail__star-icon">★</span> 4.5
              </div>
              <div className="author-detail__stat-label">Average Rating</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">2,212</div>
              <div className="author-detail__stat-label">Amazon Reviews</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">4</div>
              <div className="author-detail__stat-label">Bestsellers</div>
            </div>
            <div className="author-detail__stat">
              <div className="author-detail__stat-value">4</div>
              <div className="author-detail__stat-label">Books Published</div>
            </div>
          </div>

          {/* ── Bestseller categories ── */}
          <div className="author-detail__bestseller-list">
            {bestsellerCategories.map((cat) => (
              <span key={cat} className="author-detail__bestseller-tag">
                🏆 Bestseller in {cat}
              </span>
            ))}
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Cameron</h2>
            <div className="author-detail__bio">
              <p>
                Cameron Herold is a top business consultant, best-selling author, and speaker. He&apos;s
                the mastermind behind hundreds of companies&apos; exponential growth and he&apos;s touched
                thousands of businesses indirectly through his work.
              </p>
              <p>
                At age 21, he had 14 employees. By 35, he&apos;d helped build his first two 100 Million
                Dollar companies. By the age of 42, Cameron had engineered 1-800-GOT-JUNK?&apos;s
                spectacular growth from $2 Million to $106 Million in revenue in just six years.
              </p>
              <p>
                His companies landed over 5,200 media placements in those same six years, including
                coverage on Oprah.
              </p>
              <p>
                Not simply a theory guy, Cameron teaches what he knows from experience and is passionate
                about sharing his expertise with today&apos;s most dynamic business leaders.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              {books.map((book) => (
                <Link key={book.href} href={book.href} className="author-detail__book-card">
                  <div className="author-detail__book-cover-wrap">
                    <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                    <Image
                      src={book.cover}
                      alt={book.title}
                      width={264}
                      height={406}
                      className="author-detail__book-cover"
                      unoptimized
                    />
                  </div>
                  <div className="author-detail__book-card-info">
                    <p className="author-detail__book-card-title">{book.title}</p>
                    <div className="author-detail__book-card-rating">
                      <span className="author-detail__book-card-stars">★</span>
                      <span>{book.rating}</span>
                      <span>({book.reviews})</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Business Management</span>
              <span className="author-detail__tag">B2B Consulting</span>
              <span className="author-detail__tag">Marketing and Advertising</span>
            </div>
          </div>

          {/* ── Case Study banner ── */}
          <div className="author-detail__case-study">
            <div className="author-detail__case-study-content">
              <p className="author-detail__case-study-eyebrow">★ Scribe Case Study</p>
              <p className="author-detail__case-study-title">
                Cameron Herold&apos;s Books Changed How Workplaces Operate Worldwide
              </p>
              <p className="author-detail__case-study-desc">
                Cameron Herold used his books to share his superpower with the world: building
                world-class cultures. Read how he did it on Scribe.
              </p>
            </div>
            <Link href="/success-stories/cameron-herold-free-pr" className="author-detail__case-study-btn">
              Read the Case Study <span style={{ fontSize: '1.1rem' }}>→</span>
            </Link>
          </div>

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              {ahEpisodes.map((ep) => (
                <Link key={ep.href} href={ep.href} className="author-detail__ah-card">
                  <span className="author-detail__ah-tag">Author Hour</span>
                  <p className="author-detail__ah-title">{ep.title}</p>
                  <p className="author-detail__ah-meta">{ep.date}</p>
                  <span className="author-detail__ah-link">Listen / Read →</span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Cameron and 2,000+ authors who have published with Scribe Media.
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
