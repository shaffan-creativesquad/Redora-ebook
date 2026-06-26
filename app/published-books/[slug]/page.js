import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import booksData from '../books.json'
import booksDetail from '../books-detail.json'
import authorsData from '../../authors/authors.json'
import authorsDetail from '../../authors/authors-detail.json'
import '../book-detail.css'

function getBook(slug) {
  return booksData.books.find(b => b.href === `/published-books/${slug}`)
}

function getAuthor(authorHref) {
  return authorsData.find(a => a.href === authorHref)
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const book = getBook(slug)
  if (!book) return { title: 'Book Not Found' }
  return {
    title: `${book.title} by ${book.author} | Scribe Media`,
    description: `${book.title} by ${book.author}, published by Scribe Media.`,
    openGraph: {
      title: `${book.title} by ${book.author}`,
      description: `${book.title} by ${book.author}, published by Scribe Media.`,
      images: (booksDetail[slug]?.coverImg || book.img) ? [booksDetail[slug]?.coverImg || book.img] : [],
    },
  }
}

export default async function BookPage({ params }) {
  const { slug } = await params
  const book = getBook(slug)
  if (!book) notFound()

  const author = getAuthor(book.authorHref)
  const authorSlug = book.authorHref?.split('/').pop()
  const authorDetailData = authorsDetail[authorSlug] || {}
  const bookDetail = booksDetail[slug] || {}

  // Related books by same author (excluding current)
  const relatedBooks = (author?.bookLinks || [])
    .filter(bl => bl.href !== `/published-books/${slug}`)
    .map(bl => {
      const rel = booksData.books.find(b => b.href === bl.href)
      return { title: bl.title, href: bl.href, img: rel?.img || null }
    })
    .slice(0, 6)

  // Cover: prefer scraped detail image, then books.json img
  const coverImg = bookDetail.coverImg || book.img || ''
  // Amazon: prefer per-book scraped link, then author-level link
  const amazonHref = bookDetail.amazonHref || author?.amazonHref || ''
  const authorImg = author?.img || ''
  const hasBio = !!(authorDetailData.bio)
  const bio = authorDetailData.bio || ''
  const description = bookDetail.description || ''
  const hasBadges = author?.badges?.length > 0

  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="book-detail-page">
          <div className="book-detail-page__inner">

            <a href="/published-books" className="bd-back">
              <i className="ph ph-arrow-left"></i> Back to Published Books
            </a>

            <div className="bd-layout">

              {/* Cover */}
              <div>
                {coverImg ? (
                  <img
                    src={coverImg}
                    alt={book.title}
                    className="bd-cover"
                    loading="eager"
                    width={260}
                    height={400}
                  />
                ) : (
                  <div className="bd-cover-placeholder">
                    <i className="ph ph-book-open"></i>
                  </div>
                )}
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">{book.title}</h1>
                <p className="bd-author">
                  by <a href={book.authorHref}>{book.author}</a>
                </p>

                {book.rating && (
                  <div className="bd-rating">
                    <span className="bd-stars">★★★★★</span>
                    <span className="bd-rating-value">{book.rating}</span>
                    {book.reviewCount && (
                      <span className="bd-rating-count">{book.reviewCount} ratings on Amazon</span>
                    )}
                  </div>
                )}

                {hasBadges && (
                  <div style={{ marginBottom: '1.25rem' }}>
                    {author.badges.map((badge, i) => (
                      <div key={i} className="bd-bestseller">
                        <span className="bd-bestseller-badge">🏆 {badge}</span>
                      </div>
                    ))}
                  </div>
                )}

                {description && (
                  <>
                    <p className="bd-section-title">About This Book</p>
                    <div className="bd-description">
                      <p>{description}</p>
                    </div>
                  </>
                )}

                {book.genres?.length > 0 && (
                  <div className="bd-tags" style={{ marginBottom: '1.5rem' }}>
                    {book.genres.map((g, i) => (
                      <span key={i} className="bd-tag">{g}</span>
                    ))}
                    {book.imprint && (
                      <span className="bd-tag" style={{ opacity: 0.6 }}>{book.imprint}</span>
                    )}
                  </div>
                )}

                <div className="bd-actions">
                  {amazonHref && (
                    <a
                      href={amazonHref}
                      className="bd-btn bd-btn--primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="ph ph-amazon-logo"></i> Buy on Amazon
                    </a>
                  )}
                  <a href={book.authorHref} className="bd-btn bd-btn--secondary">
                    <i className="ph ph-user"></i> View Author
                  </a>
                  <a href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Author Section */}
        {(hasBio || authorImg) && (
          <div className="bd-author-section">
            <div className="bd-divider"></div>
            <div className="bd-author-layout">
              {authorImg && (
                <img
                  className="bd-author-photo"
                  src={authorImg}
                  alt={book.author}
                  loading="lazy"
                />
              )}
              <div>
                <p className="bd-author-label">About the Author</p>
                <h2 className="bd-author-name">
                  <a href={book.authorHref}>{book.author}</a>
                </h2>
                {bio && (
                  <div className="bd-author-bio">
                    <p>{bio}</p>
                  </div>
                )}
                <a className="bd-author-link" href={book.authorHref}>
                  View full profile <span>→</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Related Books */}
        {relatedBooks.length > 0 && (
          <div className="bd-related">
            <div className="bd-divider"></div>
            <p className="bd-related-label">More by this author</p>
            <h2 className="bd-related-heading">{book.author}</h2>
            <div className="bd-related-grid">
              {relatedBooks.map((rb, i) => (
                <a key={i} className="bd-related-item" href={rb.href}>
                  {rb.img && (
                    <img
                      className="bd-related-cover"
                      src={rb.img}
                      alt={rb.title}
                      loading="lazy"
                    />
                  )}
                  <div className="bd-related-title">{rb.title}</div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem 5rem', textAlign: 'center' }}>
          <div className="bd-divider"></div>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
            Ready to write your book?
          </p>
          <h2 style={{ color: '#fff', fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>
            Join {book.author?.split(' ')[0]} and 2,000+ authors who published with Scribe Media
          </h2>
          <a href="/consult" className="bd-btn bd-btn--primary" style={{ display: 'inline-flex', margin: '0 auto' }}>
            Schedule a Free Consult
          </a>
        </div>

      </main>
      <Footer />
    </>
  )
}
