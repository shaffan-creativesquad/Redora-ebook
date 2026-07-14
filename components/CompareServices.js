import Image from 'next/image'

const cards = [
  { image: '/assets/readora-bbok.png', alt: 'Free writing and publishing guides from Readora', title: 'Free Guides, Frameworks, and Publishing Playbooks', href: '/free-resources', imgBg: '#0d1b3e', contain: true },
  { image: '/assets/Bottom_Books.webp', alt: 'Browse books published by Readora authors', title: 'Browse the Full Catalogue of Readora-Published Books', href: '/#published-books' },
]

export default function CompareServices() {
  return (
    <section style={{
      padding: 'clamp(2.4rem,3.5vw,3.8rem) 1.25rem',
      background: 'linear-gradient(180deg,#111111 0%,#161616 100%)',
      borderTop: '1px solid rgba(168,168,168,0.2)',
    }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

        {/* Compare card */}
        <div style={{
          borderRadius: '20px',
          border: '1px solid rgba(168,168,168,0.24)',
          padding: 'clamp(1.45rem,2.7vw,2.35rem)',
          background: `
            radial-gradient(circle at 82% 18%, rgba(220,45,45,0.12), transparent 42%),
            linear-gradient(140deg,#161616 0%,#1a1a1a 52%,#141414 100%)
          `,
          textAlign: 'center',
          marginBottom: 'clamp(1.1rem,2vw,1.6rem)',
        }}>
          <h2 className="font-playfair" style={{ margin: '0 0 0.6rem', color: '#f0f0f0', fontSize: 'clamp(1.9rem,3.1vw,2.95rem)', lineHeight: 1.14 }}>
            One platform. Every service your book needs.
          </h2>
          <p style={{ margin: '0 auto 1rem', maxWidth: '62ch', color: '#bbbbb', fontSize: '1.01rem', lineHeight: 1.6 }}>
            Whether you need a ghostwriter, a publishing team, a launch strategy, or all three — Readora brings every service under one roof so nothing falls through the cracks.
          </p>
          <a href="/services" style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            minHeight: '46px', padding: '0.65rem 1.2rem', borderRadius: '999px',
            textDecoration: 'none', color: '#ffffff', fontWeight: 800,
            background: '#e02d2d',
            whiteSpace: 'nowrap',
          }}>
            See All Services
          </a>
        </div>

        {/* 3-card grid */}
        <div className="cs-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 'clamp(0.75rem,1.5vw,1.05rem)' }}>
          {cards.map((card, i) => (
            <article key={i} style={{
              borderRadius: '14px', overflow: 'hidden',
              border: '1px solid rgba(168,168,168,0.22)',
              background: 'linear-gradient(180deg,rgba(22,22,22,0.94),rgba(18,18,18,0.96))',
            }}>
              <div style={{
                width: '100%', aspectRatio: '16/9',
                background: card.imgBg || 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
                padding: card.contain ? '1.5rem' : 0,
                boxSizing: 'border-box',
              }}>
                <Image
                  src={card.image} alt={card.alt}
                  width={988} height={500}
                  style={{
                    width: '100%', height: '100%', display: 'block',
                    objectFit: card.contain ? 'contain' : 'cover',
                    objectPosition: 'center',
                  }}
                  unoptimized
                  loading={i === 1 ? 'eager' : 'lazy'}
                  priority={i === 1}
                />
              </div>
              <div style={{ padding: '0.95rem' }}>
                <h3 style={{ margin: '0 0 0.7rem', color: '#f0f0f0', fontSize: '1.07rem', lineHeight: 1.34, fontWeight: 700 }}>
                  {card.title}
                </h3>
                <a href={card.href} style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  minHeight: '40px', padding: '0.45rem 0.9rem', borderRadius: '999px',
                  textDecoration: 'none', border: '1px solid rgba(220,45,45,0.5)',
                  background: 'rgba(220,45,45,0.1)', color: '#ffe0e0', fontWeight: 700, fontSize: '0.9rem',
                }}>
                  Explore Now
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
