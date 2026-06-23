'use client'
import { useState, useMemo } from 'react'

const INITIAL = 12
const BATCH = 12
const ALPHA = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const FILTERS = [
  { key: 'all', label: 'All Authors' },
  { key: 'featured', label: 'Featured' },
  { key: 'bestseller', label: 'Bestsellers' },
  { key: 'hasreviews', label: 'Top Reviewed' },
  { key: 'story', label: 'Success Stories' },
  { key: 'review', label: 'Testimonials' },
  { key: 'multi', label: 'Multiple Books' },
]

function AuthorCard({ a }) {
  return (
    <article className="author-card">
      <div className="author-card__top">
        {a.img
          ? (
            <a href={a.href} className="author-card__avatar-link" aria-label={`View ${a.name} profile`}>
              <img src={a.img} alt={a.name} className="author-card__avatar" loading="lazy" width="96" height="96" />
            </a>
          )
          : (
            <a href={a.href} className="author-card__initials" aria-label={`View ${a.name} profile`}>
              {a.initials}
            </a>
          )
        }
      </div>

      <h3 className="author-card__name">
        <a href={a.href} className="author-card__name-link">{a.name}</a>
      </h3>

      {a.company && <p className="author-card__company">{a.company}</p>}

      {a.meta && <p className="author-card__meta">{a.meta}</p>}

      {a.industry && (
        <p className="author-card__industry-tag">
          <a href={a.industryHref}>{a.industry}</a>
        </p>
      )}

      {a.ratingNum && (
        <div className="author-card__reviews">
          <span className="author-card__stars" style={{ '--star-percent': a.starPct }}>★★★★★</span>
          <span className="author-card__rating-num">{a.ratingNum}</span>
          <span className="author-card__review-count">·</span>
          <span className="author-card__review-count">{a.reviewCount}</span>
        </div>
      )}

      {a.bookLinks.length > 0 && (
        <div className="author-card__book-links">
          {a.bookLinks.map((bl, i) => (
            <a key={i} href={bl.href} className="author-card__book-link">{bl.title}</a>
          ))}
        </div>
      )}

      {a.badges.length > 0 && (
        <div className="author-card__badges">
          {a.badges.map((b, i) => {
            const cls = b.toLowerCase().includes('bestseller')
              ? 'author-card__badge author-card__badge--bestseller'
              : b.toLowerCase().includes('success') || b.toLowerCase().includes('story')
              ? 'author-card__badge author-card__badge--story'
              : 'author-card__badge author-card__badge--review'
            return <span key={i} className={cls}>{b}</span>
          })}
        </div>
      )}

      <div className="author-card__actions">
        {a.amazonHref && (
          <a href={a.amazonHref} className="author-card__btn" target="_blank" rel="noopener noreferrer">
            <i className="ph ph-amazon-logo"></i> Amazon
          </a>
        )}
        {a.storyHref && (
          <a href={a.storyHref} className="author-card__btn">
            <i className="ph ph-star"></i> Success Story
          </a>
        )}
        {a.reviewHref && (
          <a href={a.reviewHref} className="author-card__btn">
            <i className="ph ph-quotes"></i> Testimonial
          </a>
        )}
        {a.linkedinHref && (
          <a href={a.linkedinHref} className="author-card__btn" target="_blank" rel="noopener noreferrer">
            <i className="ph ph-linkedin-logo"></i> LinkedIn
          </a>
        )}
        {a.websiteHref && (
          <a href={a.websiteHref} className="author-card__btn" target="_blank" rel="noopener noreferrer">
            <i className="ph ph-globe"></i> Website
          </a>
        )}
      </div>
    </article>
  )
}

export default function AuthorsGrid({ authors }) {
  const [query, setQuery] = useState('')
  const [letter, setLetter] = useState('all')
  const [filter, setFilter] = useState('all')
  const [shown, setShown] = useState(INITIAL)

  const isFiltered = query.trim() !== '' || letter !== 'all' || filter !== 'all'

  const visible = useMemo(() => {
    setShown(INITIAL)
    const q = query.trim().toLowerCase()
    return authors.filter(a => {
      if (q && !a.name.toLowerCase().includes(q) && !a.company.toLowerCase().includes(q)) return false
      if (letter !== 'all' && a.letter !== letter) return false
      if (filter === 'featured' && !a.featured) return false
      if (filter === 'bestseller' && !a.bestseller) return false
      if (filter === 'hasreviews' && !a.ratingNum) return false
      if (filter === 'story' && !a.story) return false
      if (filter === 'review' && !a.review) return false
      if (filter === 'multi' && a.bookcount < 2) return false
      return true
    })
  }, [authors, query, letter, filter])

  const paged = isFiltered ? visible : visible.slice(0, shown)

  return (
    <>
      <div className="authors-page__controls">
        <div className="authors-search-wrap">
          <i className="ph ph-magnifying-glass"></i>
          <input
            type="text"
            className="authors-search"
            aria-label="Search authors by name or company"
            placeholder="Search by name or company"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="authors-alpha-nav">
        <button
          className={`alpha-btn${letter === 'all' ? ' active' : ''}`}
          onClick={() => setLetter('all')}
        >All</button>
        {ALPHA.map(l => (
          <button
            key={l}
            className={`alpha-btn${letter === l ? ' active' : ''}`}
            onClick={() => setLetter(l)}
          >{l}</button>
        ))}
      </div>

      <div className="authors-page__filters">
        {FILTERS.map(f => (
          <button
            key={f.key}
            className={`af-btn${filter === f.key ? ' active' : ''}`}
            onClick={() => setFilter(f.key)}
          >{f.label}</button>
        ))}
      </div>

      <div className="authors-page__count">
        Showing {paged.length} of {visible.length} authors
      </div>

      <div className="authors-grid">
        {paged.length === 0
          ? <p className="authors-no-results">No authors match your search.</p>
          : paged.map((a, i) => <AuthorCard key={i} a={a} />)
        }
      </div>

      {!isFiltered && shown < visible.length && (
        <div className="authors-page__load-wrap">
          <button
            className="authors-load-btn"
            onClick={() => setShown(s => Math.min(s + BATCH, visible.length))}
          >
            Show More Authors
          </button>
        </div>
      )}
    </>
  )
}
