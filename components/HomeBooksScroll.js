'use client'
import { useRef, useState, useEffect } from 'react'

export default function HomeBooksScroll({ books }) {
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
        const itemWidth = el.querySelector('.home-books-scroll__item')?.offsetWidth || 200
        el.scrollBy({ left: itemWidth + 24, behavior: 'smooth' })
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  function scrollBy(dir) {
    const el = ref.current
    if (!el) return
    const itemWidth = el.querySelector('.home-books-scroll__item')?.offsetWidth || 200
    el.scrollBy({ left: dir * (itemWidth + 24) * 5, behavior: 'smooth' })
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

      <div ref={ref} className="home-books-scroll">
        {books.map((b, i) => (
          <div key={i} className="home-books-scroll__item">
            <div className="bl-card">
              <div className="bl-card__cover-wrap book-shadow">
                <img src={b.img} alt={b.title} loading="lazy" width="186" height="286" />
              </div>
              <h4 className="bl-card__title">{b.title}</h4>
              <p className="bl-card__author">{b.author}</p>
              {b.rating && (
                <div className="bl-card__rating">
                  <span className="bl-card__rating-star">★</span>
                  <span> {b.rating}</span>
                  {b.reviewCount && <span className="bl-card__rating-count"> ({b.reviewCount})</span>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
