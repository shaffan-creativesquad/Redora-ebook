'use client'
import { useState, useMemo } from 'react'

const INITIAL = 48
const BATCH = 48

function BookCard({ b }) {
  return (
    <div className="bl-card">
      <a className="bl-card__cover-link" href={b.href}>
        <div className="bl-card__cover-wrap book-shadow">
          <img src={b.img} alt={b.title} loading="lazy" width="186" height="286" />
          <div className="bl-card__overlay">
            <span className="bl-card__overlay-label">View Book</span>
          </div>
        </div>
      </a>
      <h4 className="bl-card__title">
        <a className="bl-card__title-link" href={b.href} tabIndex={-1}>{b.title}</a>
      </h4>
      <p className="bl-card__author">
        <a className="bl-card__author-link" href={b.authorHref}>{b.author}</a>
      </p>
      {b.rating && (
        <div className="bl-card__rating">
          <span className="bl-card__rating-star">★</span>
          <span> {b.rating}</span>
          {b.reviewCount && <span className="bl-card__rating-count"> ({b.reviewCount})</span>}
        </div>
      )}
      {b.industryLink && (
        <a className="bl-card__industry-link" href={b.industryLink.href}>{b.industryLink.label}</a>
      )}
    </div>
  )
}

export default function BooksGrid({ books, genres, industries, imprints }) {
  const [query, setQuery] = useState('')
  const [genre, setGenre] = useState('All')
  const [industry, setIndustry] = useState('All')
  const [imprint, setImprint] = useState('All')
  const [sort, setSort] = useState('rating')
  const [shown, setShown] = useState(INITIAL)

  const isFiltered = query.trim() !== '' || genre !== 'All' || industry !== 'All' || imprint !== 'All'

  const filtered = useMemo(() => {
    setShown(INITIAL)
    const q = query.trim().toLowerCase()
    let result = books.filter(b => {
      if (q && !b.title.toLowerCase().includes(q) && !b.author.toLowerCase().includes(q)) return false
      if (genre !== 'All' && !b.genres.includes(genre)) return false
      if (industry !== 'All' && b.industry !== industry) return false
      if (imprint !== 'All' && b.imprint !== imprint) return false
      return true
    })

    if (sort === 'rating') {
      result = [...result].sort((a, b) => (parseFloat(b.rating) || 0) - (parseFloat(a.rating) || 0))
    } else if (sort === 'title') {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title))
    } else if (sort === 'author') {
      result = [...result].sort((a, b) => a.author.localeCompare(b.author))
    }

    return result
  }, [books, query, genre, industry, imprint, sort])

  const paged = isFiltered ? filtered : filtered.slice(0, shown)

  return (
    <>
      <div className="books-listing__controls">
        <div className="books-listing__search-wrap">
          <i className="ph ph-magnifying-glass books-listing__search-icon"></i>
          <input
            type="text"
            className="books-listing__search"
            aria-label="Search books by title or author"
            placeholder="Search by title or author..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>

        <div className="books-listing__sort-wrap">
          <label className="books-listing__sort-label" htmlFor="bookSort">Sort by:</label>
          <select
            className="books-listing__sort"
            id="bookSort"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            <option value="rating">Most Ratings</option>
            <option value="title">Title A–Z</option>
            <option value="author">Author A–Z</option>
          </select>
        </div>

        <div className="books-listing__filters">
          {genres.map(g => (
            <button
              key={g}
              className={`books-listing__filter-btn${genre === g ? ' active' : ''}`}
              onClick={() => setGenre(g)}
            >{g}</button>
          ))}
        </div>

        <div className="books-listing__filter-dropdowns">
          <select
            className={`books-listing__filter-select${industry !== 'All' ? ' is-active' : ''}`}
            value={industry}
            onChange={e => setIndustry(e.target.value)}
          >
            {industries.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>

          <div className="books-listing__filter-divider" />

          <select
            className={`books-listing__filter-select${imprint !== 'All' ? ' is-active' : ''}`}
            value={imprint}
            onChange={e => setImprint(e.target.value)}
          >
            {imprints.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="books-listing__count">
        Showing {paged.length} of {filtered.length} books
      </div>

      <div className="books-listing__grid">
        {paged.length === 0
          ? <p className="books-listing__empty">No books match your search.</p>
          : paged.map((b, i) => <BookCard key={i} b={b} />)
        }
      </div>

      {!isFiltered && shown < filtered.length && (
        <div className="books-listing__load-more-wrap">
          <button
            className="books-listing__load-more"
            onClick={() => setShown(s => Math.min(s + BATCH, filtered.length))}
          >
            Load More Books ({filtered.length - shown} remaining)
          </button>
        </div>
      )}
    </>
  )
}
