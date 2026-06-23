'use client'
import { useState, useMemo } from 'react'

const BATCH = 30
const INITIAL = 20

export default function EpisodeList({ episodes }) {
  const [query, setQuery] = useState('')
  const [shown, setShown] = useState(INITIAL)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return episodes
    return episodes.filter(ep =>
      ep.name.toLowerCase().includes(q) || ep.meta.toLowerCase().includes(q)
    )
  }, [query, episodes])

  const visible = query ? filtered : filtered.slice(0, shown)
  const remaining = episodes.length - shown

  return (
    <>
      <div className="ah__search-wrap">
        <input
          type="search"
          className="ah__search-input"
          placeholder="Search episodes by author or title…"
          aria-label="Search Author Hour episodes"
          autoComplete="off"
          value={query}
          onChange={e => { setQuery(e.target.value); setShown(INITIAL) }}
        />
      </div>

      <div className="ah__list">
        {visible.length === 0 && (
          <div className="ah__no-results">No episodes match your search.</div>
        )}
        {visible.map((ep, i) => (
          <a key={i} className="ah__card" href={ep.href}>
            <div className="ah__card-thumb">
              <img src={ep.img} alt={ep.alt} loading="lazy" />
              <div className="ah__card-thumb-overlay">▶</div>
            </div>
            <div className="ah__card-body">
              <p className="ah__card-name">{ep.name}</p>
              <p className="ah__card-meta">{ep.meta}</p>
            </div>
            {ep.dur && <span className="ah__card-dur">{ep.dur}</span>}
          </a>
        ))}
      </div>

      {!query && remaining > 0 && (
        <div className="ah__load-more-wrap">
          <button
            className="ah__load-more"
            onClick={() => setShown(s => Math.min(s + BATCH, episodes.length))}
          >
            Show More Episodes <span>({remaining} more)</span>
          </button>
        </div>
      )}
    </>
  )
}
