'use client'
import Image from 'next/image'

const heroBooks = [
  { src: '/assets/Goggins_Book.webp', alt: "Can't Hurt Me" },
  { src: '/assets/Robin_Book.webp', alt: 'The Thought Leader Formula' },
  { src: '/assets/Joey_Book.webp', alt: 'Never Lose a Customer Again' },
  { src: '/assets/Will_Book.webp', alt: 'Marketing to Mindstates' },
]

const bookStyles = [
  { transform: 'none', zIndex: 1 },
  { transform: 'none', zIndex: 1 },
  { transform: 'none', zIndex: 1 },
  { transform: 'none', zIndex: 1 },
]

const stats = [
  { value: '2,000+', label: 'Authors Served' },
  { value: '3,000+', label: 'Books Published' },
  { value: '23',     label: 'NYT and WSJ Best Sellers' },
]

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      overflow: 'clip',
      padding: 'clamp(2.8rem,5vw,4.8rem) 1.25rem clamp(2.1rem,3.2vw,3.3rem)',
      background: `
        radial-gradient(circle at 10% 4%, rgba(220,45,45,0.08), transparent 34%),
        radial-gradient(circle at 90% 88%, rgba(80,80,80,0.06), transparent 36%),
        linear-gradient(180deg,#080808 0%,#0d0d0d 52%,#141414 100%)
      `,
      borderBottom: '1px solid rgba(168,168,168,0.2)',
    }}>
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `
          radial-gradient(circle at 20% 20%, rgba(220,45,45,0.06), transparent 42%),
          radial-gradient(circle at 82% 70%, rgba(80,80,80,0.05), transparent 38%)
        `,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1240px', margin: '0 auto', paddingTop: 'max(var(--navbar-safe-offset,112px),104px)' }}>
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: 'clamp(1.4rem,2.5vw,2.8rem)' }}>

          {/* Left content */}
          <div>
            <h1 className="font-playfair" style={{
              margin: '0 0 1.1rem', color: '#f0f0f0',
              fontSize: 'clamp(2.35rem,5.4vw,4.65rem)',
              lineHeight: 1.02, letterSpacing: '-0.025em', maxWidth: '16ch',
            }}>
              Professional publishing services to help you <span style={{ color: '#e02d2d' }}>write</span> your book.
            </h1>

            <p style={{ margin: '0 0 1.45rem', color: '#d0d0d0', fontSize: 'clamp(0.95rem,1.1vw,1.05rem)', lineHeight: 1.6, maxWidth: '52ch' }}>
              We help entrepreneurs, executives, and experts write, publish, and market their books. Because it&apos;s not just a book, it&apos;s your legacy.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                minHeight: '48px', padding: '0.7rem 1.5rem', borderRadius: '999px',
                fontSize: '0.99rem', fontWeight: 800, textDecoration: 'none',
                color: '#ffffff', background: '#e02d2d',
                whiteSpace: 'nowrap',
                boxShadow: '0 2px 16px rgba(220,45,45,0.3)',
              }}>
                Schedule a Consult
              </a>
              <a href="#" style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                minHeight: '48px', padding: '0.7rem 1.5rem', borderRadius: '999px',
                fontSize: '0.99rem', fontWeight: 800, textDecoration: 'none',
                color: '#f0f0f0', border: '1.5px solid rgba(220,45,45,0.52)',
                background: 'rgba(220,45,45,0.08)', whiteSpace: 'nowrap',
              }}>
                Compare Scribe Services
              </a>
            </div>
          </div>

          {/* Right — fanned books */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: 'clamp(0.6rem,1.4vw,1.1rem)',
            padding: '2.5rem 0.5rem',
          }} aria-label="Featured books">
            {heroBooks.map((book, i) => (
              <div key={i} style={{
                flex: '0 0 auto',
                width: 'clamp(100px,11.5vw,140px)',
                aspectRatio: '241/405',
                borderRadius: '8px', overflow: 'hidden',
                border: '1px solid rgba(168,168,168,0.22)',
                boxShadow: '0 16px 40px rgba(0,0,0,0.55), 0 4px 12px rgba(0,0,0,0.3)',
                background: '#161616',
                transform: bookStyles[i].transform,
                zIndex: bookStyles[i].zIndex,
                position: 'relative',
              }}>
                <Image
                  src={book.src} alt={book.alt}
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center' }}
                  unoptimized priority={i < 2}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div style={{
          marginTop: 'clamp(1.5rem,2.5vw,2rem)',
          display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
          border: '1px solid rgba(168,168,168,0.22)',
          borderRadius: '14px', background: 'rgba(17,17,17,0.72)', overflow: 'hidden',
        }} role="list" aria-label="Social proof">
          {stats.map((stat, i) => (
            <div key={i} role="listitem" style={{
              padding: '1rem 0.8rem', textAlign: 'center',
              borderLeft: i > 0 ? '1px solid rgba(168,168,168,0.18)' : 'none',
            }}>
              <span style={{ display: 'block', color: '#f0f0f0', fontSize: 'clamp(1.1rem,1.5vw,1.45rem)', fontWeight: 800, marginBottom: '0.2rem' }}>
                {stat.value}
              </span>
              <span style={{ color: '#b8b8b8', fontSize: '0.88rem', lineHeight: 1.35 }}>
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
