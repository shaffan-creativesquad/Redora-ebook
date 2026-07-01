'use client'
import { useRef, useState, useEffect } from 'react'

function getInitials(name) {
  return (name || '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join('')
}

export default function HomeStoriesScroll({ stories }) {
  const ref = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const pausedRef = useRef(false)

  function updateArrows() {
    const el = ref.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1)
  }

  useEffect(() => {
    const el = ref.current
    if (!el) return
    updateArrows()
    el.addEventListener('scroll', updateArrows)
    return () => el.removeEventListener('scroll', updateArrows)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      if (pausedRef.current) return
      const el = ref.current
      if (!el) return
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' })
      } else {
        const itemWidth = el.querySelector('.hss-item')?.offsetWidth || 300
        el.scrollBy({ left: itemWidth + 24, behavior: 'smooth' })
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  function scrollBy(dir) {
    const el = ref.current
    if (!el) return
    const itemWidth = el.querySelector('.hss-item')?.offsetWidth || 300
    el.scrollBy({ left: dir * (itemWidth + 24) * 4, behavior: 'smooth' })
  }

  return (
    <div
      className="hbs-wrapper"
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      <div className="hbs-header">
        <div className="hbs-arrows">
          <button
            className={`hbs-arrow${!canScrollLeft ? ' hbs-arrow--disabled' : ''}`}
            onClick={() => scrollBy(-1)}
            aria-label="Scroll left"
            disabled={!canScrollLeft}
          >&#8592;</button>
          <button
            className={`hbs-arrow${!canScrollRight ? ' hbs-arrow--disabled' : ''}`}
            onClick={() => scrollBy(1)}
            aria-label="Scroll right"
            disabled={!canScrollRight}
          >&#8594;</button>
        </div>
      </div>

      <div ref={ref} className="hss-scroll">
        {stories.map((s, i) => (
          <div key={i} className="hss-item">
            <div className="hss-item__img-wrap">
              {s.img ? (
                <img src={s.img} alt={s.title} className="hss-item__img" loading="lazy" />
              ) : (
                <div className="hss-item__placeholder">
                  <span>{getInitials(s.author || s.title)}</span>
                </div>
              )}
            </div>
            <div className="hss-item__body">
              {s.author && <p className="hss-item__author">{s.author}</p>}
              <h3 className="hss-item__title">{s.title}</h3>
              {s.excerpt && <p className="hss-item__excerpt">{s.excerpt}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
