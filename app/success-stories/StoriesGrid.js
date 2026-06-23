'use client'
import { useState, useMemo } from 'react'

const INITIAL = 12
const BATCH = 12

const GOALS = [
  { label: 'All Stories', value: 'all' },
  { label: 'Attract New Clients', value: 'attract new clients' },
  { label: "Change People's Lives", value: "change people's lives" },
  { label: 'Differentiate from Competition', value: 'differentiate from competition' },
  { label: 'Guide Others Through Hardship', value: 'guide others through hardship' },
  { label: 'Leave a Legacy', value: 'leave a legacy' },
  { label: 'Secure Speaking Engagements', value: 'secure speaking engagements' },
  { label: 'Clarify Ideas', value: 'clarify my ideas' },
  { label: 'Own Term or Method', value: 'own term or method' },
]

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')
}

function StoryCard({ s }) {
  return (
    <a className="ss-card" href={s.href} aria-label={`Read ${s.title}`}>
      <div className="ss-card__img-wrap">
        {s.img ? (
          <img
            src={s.img}
            alt={s.title}
            className="ss-card__img"
            loading="lazy"
            width="720"
            height="405"
          />
        ) : (
          <div className="ss-card__img-placeholder">
            <span className="ss-card__img-placeholder-initials">{getInitials(s.author || s.title)}</span>
          </div>
        )}
        {s.featured && <span className="ss-card__featured-badge">Featured</span>}
      </div>
      <div className="ss-card__body">
        <h2 className="ss-card__title">{s.title}</h2>
        {s.author && <p className="ss-card__author">{s.author}</p>}
        {s.excerpt && <p className="ss-card__excerpt">{s.excerpt}</p>}
        {s.tags && s.tags.length > 0 && (
          <div className="ss-card__tags">
            {s.tags.map((tag, i) => (
              <span key={i} className="ss-card__tag">{tag}</span>
            ))}
          </div>
        )}
        <span className="ss-card__read-more">
          Read story <i className="ph ph-arrow-right" aria-hidden="true" />
        </span>
      </div>
    </a>
  )
}

export default function StoriesGrid({ stories }) {
  const [query, setQuery] = useState('')
  const [goal, setGoal] = useState('all')
  const [shown, setShown] = useState(INITIAL)

  const isFiltered = query.trim() !== '' || goal !== 'all'

  const filtered = useMemo(() => {
    setShown(INITIAL)
    const q = query.trim().toLowerCase()
    return stories.filter(s => {
      if (goal !== 'all') {
        const goals = (s.goals || []).map(g => g.toLowerCase())
        if (!goals.includes(goal)) return false
      }
      if (q) {
        const haystack = `${s.title} ${s.author}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })
  }, [stories, query, goal])

  const paged = isFiltered ? filtered : filtered.slice(0, shown)

  return (
    <>
      <div className="ss-search">
        <i className="ph ph-magnifying-glass ss-search__icon" aria-hidden="true" />
        <input
          type="text"
          className="ss-search__input"
          placeholder="Search by author or story title..."
          aria-label="Search success stories"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <div className="ss-page__filters">
        {GOALS.map(g => (
          <button
            key={g.value}
            className={`ss-filter-btn${goal === g.value ? ' active' : ''}`}
            onClick={() => setGoal(g.value)}
          >
            {g.label}
          </button>
        ))}
      </div>

      <p className="ss-page__count">
        <span>{paged.length}</span> of <span>{filtered.length}</span> stories
      </p>

      <div className="ss-grid">
        {filtered.length === 0 ? (
          <p style={{ gridColumn: '1/-1', textAlign: 'center', color: '#9ca3af', padding: '3rem 0' }}>
            No stories match your search.
          </p>
        ) : (
          paged.map((s, i) => <StoryCard key={i} s={s} />)
        )}
      </div>

      {!isFiltered && shown < filtered.length && (
        <div className="ss-page__load-more-wrap">
          <button
            className="ss-load-more-btn"
            onClick={() => setShown(s => Math.min(s + BATCH, filtered.length))}
          >
            Load More Stories ({filtered.length - shown} remaining)
          </button>
        </div>
      )}
    </>
  )
}
