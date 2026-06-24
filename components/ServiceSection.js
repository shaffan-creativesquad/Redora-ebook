import Image from 'next/image'

const sectionBg = {
  padding: 'clamp(3rem,4.2vw,4.8rem) 1.25rem',
  background: `
    radial-gradient(circle at 12% 8%, rgba(220,45,45,0.05), transparent 38%),
    radial-gradient(circle at 88% 92%, rgba(80,80,80,0.04), transparent 36%),
    linear-gradient(180deg,#0d0d0d 0%,#141414 100%)
  `,
}

export default function ServiceSection({ category, heading, text, tags, learnMoreText, learnMoreHref, authorImage, bookImage, imageRight = true }) {
  const content = (
    <div className="ss-content" style={{
      order: imageRight ? 1 : 2,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
    }}>
      <p style={{ margin: '0 0 0.45rem', color: '#f05656', textTransform: 'uppercase', letterSpacing: '0.11em', fontSize: '0.76rem', fontWeight: 700 }}>
        {category}
      </p>
      <h2 className="font-playfair" style={{
        margin: '0 0 0.75rem', color: '#f0f0f0',
        fontSize: 'clamp(1.55rem,2.45vw,2.25rem)',
        lineHeight: 1.15, maxWidth: '17ch',
      }}>
        {heading}
      </h2>
      <p style={{ margin: '0 0 0.8rem', color: '#e0e0e0', fontSize: '1rem', lineHeight: 1.62, maxWidth: '65ch' }}>
        {text}
      </p>
      {tags && tags.length > 0 && (
        <p style={{ display: 'flex', flexWrap: 'wrap', gap: '0.55rem 1rem', margin: '0 0 0.55rem' }}>
          {tags.map(tag => (
            <a key={tag.label} href={tag.href} style={{ color: '#e02d2d', fontSize: '0.92rem', fontWeight: 700, textDecoration: 'none' }}>
              {tag.label}
            </a>
          ))}
        </p>
      )}
      <a href={learnMoreHref || '#'} style={{ color: '#b7b7b7', fontSize: '0.91rem', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '0.2em' }}>
        {learnMoreText || 'Learn More'}
      </a>
    </div>
  )

  const media = (
    <div className="ss-media" style={{
      order: imageRight ? 2 : 1,
      display: 'grid',
      gridTemplateColumns: '1fr 0.46fr',
      gap: '0.55rem',
      alignItems: 'end',
      minWidth: 0,
    }}>
      <div style={{
        borderRadius: '14px', overflow: 'hidden',
        border: '1px solid rgba(168,168,168,0.24)',
        boxShadow: '0 12px 32px rgba(0,0,0,0.45)',
        background: '#161616', aspectRatio: '1/1',
      }}>
        {authorImage && (
          <Image src={authorImage} alt={category} width={760} height={760}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            unoptimized loading="lazy"
          />
        )}
      </div>
      <div style={{
        borderRadius: '8px', overflow: 'hidden',
        border: '1px solid rgba(168,168,168,0.24)',
        boxShadow: '0 12px 32px rgba(0,0,0,0.45)',
        background: '#111111', aspectRatio: '241/405',
      }}>
        {bookImage && (
          <Image src={bookImage} alt="Book cover" width={360} height={606}
            style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#111111', display: 'block' }}
            unoptimized loading="lazy"
          />
        )}
      </div>
    </div>
  )

  return (
    <section style={sectionBg}>
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>
        <article className="ss-article" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
          gap: 'clamp(1rem,1.9vw,1.8rem)',
          alignItems: 'center',
          padding: 'clamp(1rem,1.6vw,1.3rem)',
          border: '1px solid rgba(168,168,168,0.22)',
          borderRadius: '16px',
          background: 'linear-gradient(180deg,rgba(19,19,19,0.92),rgba(17,17,17,0.96))',
        }}>
          {content}
          {media}
        </article>
      </div>
    </section>
  )
}
