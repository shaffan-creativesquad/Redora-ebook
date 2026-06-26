import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import authorsData from '../authors.json'
import authorsDetail from '../authors-detail.json'
import '../author-detail.css'

function getAuthor(slug) {
  return authorsData.find(a => a.href === `/authors/${slug}`)
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) return { title: 'Author Not Found' }
  return {
    title: `${author.name} | Published Author`,
    description: `${author.name} is a published Scribe Media author.`,
    openGraph: { title: author.name, images: author.img ? [author.img] : [] },
  }
}

export default async function AuthorPage({ params }) {
  const { slug } = await params
  const author = getAuthor(slug)
  if (!author) notFound()

  const detail = authorsDetail[slug] || {}
  const firstName = author.name.split(' ')[0]

  // Merge book links with cover data from detail JSON
  const books = (author.bookLinks || []).map((bl, i) => {
    const cover = detail.bookCovers?.[i] || {}
    return {
      title: bl.title,
      href: cover.href || bl.href,
      coverImg: cover.coverImg || null,
      isBestseller: cover.isBestseller ?? false,
      rating: author.ratingNum || null,
    }
  })

  const hasStats = author.ratingNum || author.reviews || author.bookcount
  const hasBadges = author.badges?.length > 0
  const hasBio = !!detail.bio
  const hasBooks = books.length > 0
  const hasIndustry = !!author.industry
  const hasAmazon = !!author.amazonHref

  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">
          <a href="/authors" className="author-detail__back">
            <i className="ph ph-arrow-left"></i> All Authors
          </a>

          {/* Header */}
          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              {author.img ? (
                <img
                  src={author.img}
                  alt={author.name}
                  className="author-detail__avatar-img"
                  loading="eager"
                  width={600}
                  height={600}
                />
              ) : null}
              <span
                className="author-detail__initials author-detail__initials--fallback"
                style={author.img ? {} : { display: 'flex' }}
              >
                {author.initials}
              </span>
            </div>

            <div className="author-detail__info">
              <h1 className="author-detail__name">{author.name}</h1>

              {/* Tags */}
              <div className="author-detail__meta">
                {author.bookcount > 0 && (
                  <span className="author-detail__tag">
                    <i className="ph ph-books"></i> {author.bookcount} {author.bookcount === 1 ? 'Book' : 'Books'}
                  </span>
                )}
                {author.industry && (
                  <span className="author-detail__tag">{author.industry}</span>
                )}
                {author.company && (
                  <span className="author-detail__tag">{author.company}</span>
                )}
              </div>

              {/* Links */}
              <div className="author-detail__links">
                {hasAmazon && (
                  <a
                    href={author.amazonHref}
                    className="author-detail__link author-detail__link--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ph ph-amazon-logo"></i> View on Amazon
                  </a>
                )}
                {author.websiteHref && (
                  <a
                    href={author.websiteHref}
                    className="author-detail__link author-detail__link--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ph ph-globe"></i> Website
                  </a>
                )}
                {author.linkedinHref && (
                  <a
                    href={author.linkedinHref}
                    className="author-detail__link author-detail__link--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ph ph-linkedin-logo"></i> LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Stats bar */}
          {hasStats && (
            <div className="author-detail__stats-bar">
              {author.ratingNum && (
                <div className="author-detail__stat">
                  <div className="author-detail__stat-value">
                    <span className="author-detail__star-icon">★</span> {author.ratingNum}
                  </div>
                  <div className="author-detail__stat-label">Average Rating</div>
                </div>
              )}
              {author.reviews && (
                <div className="author-detail__stat">
                  <div className="author-detail__stat-value">
                    {author.reviews.toLocaleString()}
                  </div>
                  <div className="author-detail__stat-label">Amazon Reviews</div>
                </div>
              )}
              {author.bestseller && (
                <div className="author-detail__stat">
                  <div className="author-detail__stat-value">
                    {hasBadges ? author.badges.length : '✓'}
                  </div>
                  <div className="author-detail__stat-label">
                    {author.badges?.length === 1 ? 'Bestseller' : 'Bestsellers'}
                  </div>
                </div>
              )}
              {author.bookcount > 0 && (
                <div className="author-detail__stat">
                  <div className="author-detail__stat-value">{author.bookcount}</div>
                  <div className="author-detail__stat-label">
                    {author.bookcount === 1 ? 'Book Published' : 'Books Published'}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Bestseller badges */}
          {hasBadges && (
            <div className="author-detail__bestseller-list">
              {author.badges.map((badge, i) => (
                <span key={i} className="author-detail__bestseller-tag">🏆 {badge}</span>
              ))}
            </div>
          )}

          {/* Bio */}
          {hasBio && (
            <div className="author-detail__section">
              <h2 className="author-detail__section-title">About {firstName}</h2>
              <div className="author-detail__bio">
                <p>{detail.bio}</p>
              </div>
            </div>
          )}

          {/* Books */}
          {hasBooks && (
            <div className="author-detail__section">
              <h2 className="author-detail__section-title">Published Books</h2>
              <div className="author-detail__books-grid">
                {books.map((book, i) => (
                  <a key={i} className="author-detail__book-card" href={book.href}>
                    <div className="author-detail__book-cover-wrap">
                      {book.isBestseller && (
                        <span className="author-detail__book-card-badge">🏆 Bestseller</span>
                      )}
                      {book.coverImg ? (
                        <img
                          className="author-detail__book-cover"
                          src={book.coverImg}
                          alt={book.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="author-detail__book-cover-placeholder">
                          <i className="ph ph-book-open"></i>
                        </div>
                      )}
                    </div>
                    <div className="author-detail__book-card-info">
                      <p className="author-detail__book-card-title">{book.title}</p>
                      {book.rating && (
                        <div className="author-detail__book-card-rating">
                          <span className="author-detail__book-card-stars">★</span>
                          <span>{book.rating}</span>
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          {/* Industry */}
          {hasIndustry && (
            <div className="author-detail__section">
              <h2 className="author-detail__section-title">Industries</h2>
              <div className="author-detail__meta">
                <span className="author-detail__tag">{author.industry}</span>
              </div>
            </div>
          )}

          {/* Success story / testimonial links */}
          {(author.storyHref || author.reviewHref) && (
            <div className="author-detail__section">
              <h2 className="author-detail__section-title">Featured</h2>
              <div className="author-detail__links">
                {author.storyHref && (
                  <a href={author.storyHref} className="author-detail__link author-detail__link--secondary">
                    <i className="ph ph-star"></i> Success Story
                  </a>
                )}
                {author.reviewHref && (
                  <a href={author.reviewHref} className="author-detail__link author-detail__link--secondary">
                    <i className="ph ph-quotes"></i> Testimonial
                  </a>
                )}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join {firstName} and 2,000+ authors who have published with Scribe Media.
            </p>
            <a href="/consult" className="author-detail__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
