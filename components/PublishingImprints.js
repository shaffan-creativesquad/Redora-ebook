'use client'
import Image from 'next/image'

const imprints = [
  {
    logo: '/assets/lioncrest-logo-footer.svg',
    name: 'Ember Press',
    desc: 'Our premier imprint for authors who complete editorial work with Readora — built for books that demand the highest standard of craft.',
    href: '/services/publishing',
  },
  {
    logo: '/assets/ht-logo.svg',
    name: 'Thornfield Books',
    desc: 'Our flagship publishing imprint, available to all authors who partner with Readora for full publishing services.',
    href: '/services/publishing',
  },
]

export default function PublishingImprints() {
  return (
    <section style={{
      background: 'linear-gradient(180deg,#0d0d0d 0%,#0a0a0a 100%)',
      padding: '4.5rem 1.5rem',
      textAlign: 'center',
      borderTop: '1px solid rgba(220,45,45,0.08)',
    }}>
      <h2 className="font-playfair" style={{ fontSize: 'clamp(2rem,3vw,2.25rem)', fontWeight: 700, color: '#ffffff', margin: '0 0 0.75rem' }}>
        Your book deserves a proper home.
      </h2>
      <p style={{ color: '#9ca3af', fontSize: '1rem', lineHeight: 1.6, maxWidth: '620px', margin: '0 auto 2.5rem' }}>
        Readora authors publish under one of two carefully curated imprints — each built to give your work the credibility, distribution, and shelf presence it has earned.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto' }}>
        {imprints.map((imp, i) => (
          <div key={i} style={{
            background: 'linear-gradient(180deg,rgba(25,25,25,0.95) 0%,rgba(15,15,15,0.95) 100%)',
            border: '1px solid rgba(201,212,232,0.15)',
            borderRadius: '12px', padding: '2rem 2.5rem', textAlign: 'center',
            width: '100%', maxWidth: '340px',
            transition: 'transform 0.3s ease, border-color 0.3s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.borderColor = 'rgba(220,45,45,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.borderColor = 'rgba(201,212,232,0.15)' }}
          >
            <div style={{ position: 'relative', height: '40px', marginBottom: '1rem' }}>
              <Image src={imp.logo} alt={imp.name} fill style={{ objectFit: 'contain' }} unoptimized />
            </div>
            <div style={{ color: '#ffffff', fontSize: '1.1rem', fontWeight: 600, margin: '0 0 0.5rem' }}>{imp.name}</div>
            <p style={{ color: '#9ca3af', fontSize: '0.85rem', lineHeight: 1.5, margin: 0 }}>{imp.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
