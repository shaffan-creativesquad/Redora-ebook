'use client'
import { useState, useMemo } from 'react'

const INITIAL = 9
const BATCH = 9

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <a href={post.href} className="blog-card__image-wrap">
        {post.img && <img src={post.img} alt={`Featured image for ${post.title}`} className="blog-card__image" loading="lazy" width="960" height="600" />}
      </a>
      <div className="blog-card__body">
        {post.tag && <span className="blog-card__tag">{post.tag}</span>}
        <h3 className="blog-card__title"><a href={post.href}>{post.title}</a></h3>
        {post.excerpt && <p className="blog-card__excerpt">{post.excerpt}</p>}
        <div className="blog-card__meta">
          <span className="blog-card__author">{post.author}</span>
          <span className="blog-card__dot"></span>
          <time>{post.date}</time>
          {post.readTime && <><span className="blog-card__dot"></span><span>{post.readTime}</span></>}
        </div>
      </div>
    </article>
  )
}

export default function BlogTagGrid({ featured, posts, paginationBase = '/blog/tag/book-writing', totalPages = 10 }) {
  const [query, setQuery] = useState('')
  const [shown, setShown] = useState(INITIAL)

  const isSearching = query.trim() !== ''

  const filtered = useMemo(() => {
    setShown(INITIAL)
    const q = query.trim().toLowerCase()
    if (!q) return posts
    return posts.filter(p =>
      p.title.toLowerCase().includes(q) || (p.excerpt || '').toLowerCase().includes(q)
    )
  }, [posts, query])

  const paged = isSearching ? filtered : filtered.slice(0, shown)

  return (
    <>
      <div className="blog-search">
        <div className="blog-search__wrap">
          <i className="ph ph-magnifying-glass blog-search__icon" aria-hidden="true" />
          <input
            type="search"
            className="blog-search__input"
            placeholder="Search articles..."
            aria-label="Search blog posts"
            autoComplete="off"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button type="button" className="blog-search__clear" aria-label="Clear search" onClick={() => setQuery('')} style={{ display: 'block' }}>
              <i className="ph ph-x" />
            </button>
          )}
        </div>
      </div>

      {query && (
        <div className="blog-search__count">
          {filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
        </div>
      )}

      {!isSearching && featured && (
        <div className="blog-featured">
          <a href={featured.href} className="blog-featured__image-wrap">
            {featured.img && <img src={featured.img} alt={`Featured image for ${featured.title}`} className="blog-featured__image" loading="eager" width="960" height="600" />}
          </a>
          <div className="blog-featured__content">
            {featured.tag && <span className="blog-featured__tag">{featured.tag}</span>}
            <h2 className="blog-featured__title"><a href={featured.href}>{featured.title}</a></h2>
            {featured.excerpt && <p className="blog-featured__excerpt">{featured.excerpt}</p>}
            <div className="blog-featured__meta">
              <span className="blog-featured__author">{featured.author}</span>
              <span className="blog-featured__dot"></span>
              <time>{featured.date}</time>
              {featured.readTime && <><span className="blog-featured__dot"></span><span>{featured.readTime}</span></>}
            </div>
          </div>
        </div>
      )}

      {filtered.length === 0 ? (
        <div className="blog-search__no-results" style={{ display: 'block' }}>
          <h3>No matching posts found</h3>
          <p>Try a different search term or <a href="/blog">browse all posts</a>.</p>
        </div>
      ) : (
        <div className="blog-grid">
          {paged.map((post, i) => <BlogCard key={i} post={post} />)}
        </div>
      )}

      {!isSearching && totalPages > 1 && (
        <nav className="blog-pagination" aria-label="Blog pagination">
          <span className="active">1</span>
          <a href={`${paginationBase}/page/2`}>2</a>
          <a href={`${paginationBase}/page/3`}>3</a>
          <span className="blog-pagination__ellipsis">…</span>
          <a href={`${paginationBase}/page/${totalPages}`}>{totalPages}</a>
          <a href={`${paginationBase}/page/2`}>Next →</a>
        </nav>
      )}
    </>
  )
}
