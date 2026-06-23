'use client'
import { useState, useMemo } from 'react'
import faqData from '@/app/faq/faq-data.json'

export default function Faq() {
  const [openItems, setOpenItems] = useState(new Set())
  const [search, setSearch] = useState('')

  function toggleItem(id) {
    setOpenItems(prev => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const query = search.trim().toLowerCase()

  const filtered = useMemo(() => {
    if (!query) return faqData
    return faqData
      .map(cat => ({
        ...cat,
        items: cat.items.filter(
          item =>
            item.q.toLowerCase().includes(query) ||
            item.a.toLowerCase().includes(query)
        ),
      }))
      .filter(cat => cat.items.length > 0)
  }, [query])

  const totalVisible = filtered.reduce((s, c) => s + c.items.length, 0)

  function scrollToCategory(e, id) {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="faq-page">

      <div className="faq-search">
        <div className="faq-search__wrap">
          <i className="ph ph-magnifying-glass faq-search__icon" aria-hidden="true"></i>
          <input
            type="text"
            className="faq-search__input"
            placeholder="Search frequently asked questions..."
            aria-label="Search frequently asked questions"
            autoComplete="off"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <div className="faq-search__count" aria-live="polite">
          {query ? `${totalVisible} ${totalVisible === 1 ? 'result' : 'results'} found` : ''}
        </div>
      </div>

      <div className="faq-page__header">
        <h1 className="faq-page__heading">Frequently Asked Questions</h1>
        <p className="faq-page__subheading">Everything you need to know about working with Scribe Media.</p>
      </div>

      <div className="faq-page__nav" aria-label="Jump to category">
        {faqData.map(cat => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            className="faq-page__nav-btn"
            onClick={e => scrollToCategory(e, cat.id)}
          >
            {cat.title}
          </a>
        ))}
      </div>

      <div className="faq-page__count">118 questions answered</div>

      <div className="faq-page__content">
        {filtered.map(cat => (
          <div key={cat.id} className="faq-category" id={cat.id}>
            <h2 className="faq-category__title">{cat.title}</h2>
            {cat.items.map((item, i) => {
              const itemId = `${cat.id}-${i}`
              const isOpen = openItems.has(itemId)
              return (
                <div key={i} className={`faq-item${isOpen ? ' open' : ''}`}>
                  <button
                    className="faq-item__question"
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleItem(itemId)}
                  >
                    <span>{item.q}</span>
                    <i className="ph ph-caret-down faq-item__icon" aria-hidden="true"></i>
                  </button>
                  <div className={`faq-item__answer${isOpen ? ' faq-item__answer--open' : ''}`}>
                    <div
                      className="faq-item__answer-text"
                      dangerouslySetInnerHTML={{ __html: item.a }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>

    </section>
  )
}
