'use client'
import { useState, useMemo, useRef } from 'react'

function FaqItem({ item }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button
        className="faq-item__question"
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        {item.question}
        <i className="ph ph-caret-down faq-item__icon" aria-hidden="true" />
      </button>
      <div className="faq-item__answer" aria-hidden={!open}>
        <div
          className="faq-item__answer-text"
          dangerouslySetInnerHTML={{ __html: item.answer.replace(/\r\n\r\n/g, '</p><p>').replace(/\r\n/g, '<br/>') }}
        />
      </div>
    </div>
  )
}

export default function FaqAccordion({ categories }) {
  const [query, setQuery] = useState('')
  const [activeNav, setActiveNav] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return categories.map(cat => ({
      ...cat,
      items: cat.items.filter(item =>
        !q || item.question.toLowerCase().includes(q) || item.answer.toLowerCase().includes(q)
      ),
    })).filter(cat => cat.items.length > 0)
  }, [categories, query])

  const totalFiltered = filtered.reduce((s, c) => s + c.items.length, 0)
  const totalAll = categories.reduce((s, c) => s + c.items.length, 0)

  const scrollTo = (id) => {
    setActiveNav(id)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <>
      <div className="faq-search">
        <div className="faq-search__wrap">
          <i className="ph ph-magnifying-glass faq-search__icon" aria-hidden="true" />
          <input
            type="text"
            className="faq-search__input"
            placeholder="Search frequently asked questions..."
            aria-label="Search frequently asked questions"
            autoComplete="off"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
        <div className="faq-search__count">
          {query.trim() ? `${totalFiltered} of ${totalAll} questions match` : ''}
        </div>
      </div>

      <div className="faq-page__nav">
        <button
          className={`faq-page__nav-btn${activeNav === 'all' ? ' active' : ''}`}
          onClick={() => { setActiveNav('all'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
        >
          All
        </button>
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`faq-page__nav-btn${activeNav === cat.id ? ' active' : ''}`}
            onClick={() => scrollTo(cat.id)}
          >
            {cat.title}
          </button>
        ))}
      </div>

      <div className="faq-page__content">
        {filtered.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#9ca3af', padding: '3rem 0' }}>
            No questions match your search.
          </p>
        ) : (
          filtered.map(cat => (
            <div key={cat.id} className="faq-category" id={cat.id}>
              <h2 className="faq-category__title">{cat.title}</h2>
              {cat.items.map((item, i) => (
                <FaqItem key={i} item={item} />
              ))}
            </div>
          ))
        )}
      </div>
    </>
  )
}
