'use client'
import Image from 'next/image'

const aboutLinks = [
  ['About', '/why-scribe'],
  ['How It Works', '/how-it-works'],
  ['Scribe Team', '/scribe-team'],
  ['Eric Jorgenson', '/eric-jorgenson'],
  ['Origin', '/our-origin'],
  ['Careers', '/careers'],
  ['Newsroom', '/newsroom'],
  ['Alumni', '/alumni'],
  ['Contact', '/contact'],
  ['Ambassadors', '/ambassadors'],
  ['FAQs', '/faq'],
]
const booksLinks = [
  ['Success Stories', '/success-stories'],
  ['Book Bites', '/blog/tag/book-bites'],
  ['Reviews', '/reviews'],
  ['Book Directory', '/book-directory'],
  ['Author Directory', '/author-directory'],
]
const resourcesLinks = [
  ['Author Resources Library', '/author-resources-library'],
  ['The Scribe Method', '/scribe-method-book'],
  ['The Scribe Blog', '/blog'],
  ['Episode Directory', '/episode-directory'],
  ['Author Directory', '/author-directory'],
  ['Book Directory', '/book-directory'],
  ['Author FAQs', '/author-faqs'],
  ['Author Services', '/author-services'],
  ['Interviewing Guide', '/author-guides-interviewing'],
  ['Book Cover Tips', '/publishing-book-cover'],
  ['Formatting Tips', '/publishing-formatting-tips'],
  ['Audiobook Guidelines', '/audiobook-submission-guidelines'],
  ['Ghostwriting vs. Self-Writing', '/ghostwriting-vs-self-writing'],
  ['Write Your Book', '/write-your-book'],
]
const servicesLinks = [
  ['All Services', '/services'],
  ['Scribe Publishing', '/services/publishing'],
  ['Scribe Guided Author', '/services/guided-author'],
  ['Scribe Professional', '/services/professional-book-writers'],
  ['Scribe Elite', '/services/ghostwriting'],
  ['Scribe Signature', '/services/scribe-signature'],
  ['Scribe Audiobook', '/services/audiobook'],
  ['Scribe Marketing', '/services/book-marketing'],
  ['Scribe Compass', '/services/scribe-compass'],
  ['Book Coaching', '/services/book-coaching'],
  ['Book Writing', '/services/book-writing'],
  ['Scribe PR', '/services/scribe-pr'],
  ['Write a Self-Help Book', '/services/write-a-self-help-book'],
  ['Books for Brands', '/services/books-for-brands'],
  ['Get a Quote', '/pricing/quote'],
  ['Audiobook Pricing', '/pricing/audiobook'],
  ['Marketing Pricing', '/pricing/marketing'],
]
const compareLinks = [
  ['vs. Forbes Books', '/vs/forbes-books'],
  ['vs. Kevin Anderson Associates', '/vs/kevin-anderson-associates'],
  ['vs. Page Two', '/vs/page-two'],
  ['vs. Peaceful Profits', '/vs/peaceful-profits'],
  ['vs. Self-Publishing.com', '/vs/self-publishing-com'],
]

const socials = [
  { label: 'Twitter', href: 'https://x.com/scribemediaco', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
  { label: 'Instagram', href: 'https://www.instagram.com/scribemediaco/', icon: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/scribe-media', icon: 'M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z' },
]

function LinkCol({ title, links }) {
  return (
    <div style={{ padding: '0 0.25rem' }}>
      <h4 style={{ color: '#ffffff', fontWeight: 700, margin: '0 0 0.74rem', fontSize: '0.87rem', letterSpacing: '0.055em', textTransform: 'uppercase' }}>
        {title}
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} style={{ color: '#9a9a9a', display: 'block', padding: '0.3rem 0', fontSize: '0.875rem', textDecoration: 'none', lineHeight: 1.4, transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#fff'}
              onMouseLeave={e => e.currentTarget.style.color = '#9a9a9a'}
            >{label}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer style={{
      position: 'relative', overflow: 'clip',
      background: `
        radial-gradient(circle at 14% -8%, rgba(220,45,45,0.06), transparent 36%),
        radial-gradient(circle at 86% 110%, rgba(80,80,80,0.04), transparent 42%),
        linear-gradient(180deg,#111111 0%,#0a0a0a 100%)
      `,
      paddingTop: 'clamp(2.3rem,3.6vw,3.3rem)',
      paddingBottom: '1.25rem',
      borderTop: '1px solid rgba(168,168,168,0.2)',
    }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6" style={{ gap: '1.05rem', marginBottom: '1.65rem', alignItems: 'start' }}>

          {/* Brand col */}
          <div className="lg:col-span-1" style={{ paddingRight: '0.65rem' }}>
            <div style={{ marginBottom: '0.9rem' }}>
              <Image src="/assets/logo-sm-on-dark.svg" alt="Scribe Media" width={160} height={52} unoptimized style={{ height: '40px', width: 'auto' }} />
            </div>
            <p style={{ color: '#b8b8b8', fontSize: '0.9rem', lineHeight: 1.58, margin: '0 0 1.15rem', maxWidth: '32ch' }}>
              We help entrepreneurs, executives, and experts write, publish, and market their books.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem' }}>
              {socials.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label} target="_blank" rel="noopener noreferrer" style={{
                  color: '#c4c4c4', width: '36px', height: '36px', borderRadius: '999px',
                  border: '1px solid rgba(168,168,168,0.24)', background: 'rgba(20,20,20,0.7)',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none', transition: 'all 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(220,45,45,0.55)'; e.currentTarget.style.background = 'rgba(220,45,45,0.14)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#c4c4c4'; e.currentTarget.style.borderColor = 'rgba(168,168,168,0.24)'; e.currentTarget.style.background = 'rgba(20,20,20,0.7)' }}
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          <LinkCol title="About Scribe" links={aboutLinks} />
          <LinkCol title="Books and Authors" links={booksLinks} />
          <LinkCol title="Free Resources" links={resourcesLinks} />
          <LinkCol title="Services" links={servicesLinks} />
          <LinkCol title="Compare Scribe" links={compareLinks} />
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(168,168,168,0.16)', paddingTop: '0.95rem',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '0.55rem',
        }}>
          <p style={{ color: '#8a8a8a', fontSize: '0.82rem', margin: 0 }}>© 2026 Scribe Media. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.2rem', flexWrap: 'wrap' }}>
            {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms-of-service']].map(([label, href]) => (
              <a key={label} href={href} style={{ color: '#aaaaaa', fontSize: '0.82rem', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = '#aaaaaa'}
              >{label}</a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  )
}
