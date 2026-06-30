'use client'
import { useState } from 'react'

const tags = [
  'All Posts', 'Book Writing', 'Author Success Stories', 'Book Publishing',
  'Book Bites', 'Book Marketing', 'Author Branding', 'Book Editing',
  'Scribe', 'Idea to Execution', 'Book Positioning', 'Author Royalties',
  'Book Topic', 'Speaking',
]

const posts = [
  {
    href: '/blog/the-night-watchnight-broke-something-in-me',
    img: '/assets/pexels-jordan-besson-2051439001-29281308.webp',
    alt: 'Empty church pews',
    tag: 'Book Bites',
    title: 'The Night Watchnight Broke Something in Me',
    excerpt: 'The following is adapted from Through the Shadow of Fear by Jasper Cove.',
    author: 'Eric Jorgenson',
    date: 'May 07, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/the-quiet-way-we-teach-kids-to-distrust-themselves',
    img: '/assets/pexels-ron-lach-10554466.webp',
    alt: 'Child making the bed',
    tag: 'Book Bites',
    title: 'The Quiet Way We Teach Kids to Distrust Themselves',
    excerpt: 'The following is adapted from Unspoken Signals by Yarona Boster.',
    author: 'Eric Jorgenson',
    date: 'Apr 30, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/the-softball-questions-investors-ask-that-can-sink-your-pitch',
    img: '/assets/pexels-aurelijus-u-2148621102-30711884.webp',
    alt: 'Line graph made out of coins',
    tag: 'Book Bites',
    title: 'The "Softball" Questions Investors Ask That Can Sink Your Pitch',
    excerpt: 'The following is adapted from The Doubt Loop by Adam Crawshaw.',
    author: 'Eric Jorgenson',
    date: 'Apr 30, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/why-i-stopped-blindly-trusting-my-crohns-doctors',
    img: '/assets/pexels-cristian-rojas-8459996.webp',
    alt: 'Empty Waiting Room',
    tag: 'Book Bites',
    title: "Why I Stopped Blindly Trusting My Crohn's Doctors",
    excerpt: "The following is adapted from Drug-Free Crohn's by Hadley Ott.",
    author: 'Eric Jorgenson',
    date: 'Apr 30, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/why-your-gut-instinct-might-save-your-life',
    img: '/assets/pexels-hoodzie-12493038.webp',
    alt: 'Cars in a nearly empty parking lot',
    tag: 'Book Bites',
    title: 'Why Your Gut Instinct Might Save Your Life',
    excerpt: 'The following is adapted from A.W.A.R.E. by S. Gale Bleth.',
    author: 'Eric Jorgenson',
    date: 'Apr 30, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/how-hitting-rock-bottom-taught-me-to-trust-my-intuition',
    img: '/assets/pexels-tima-miroshnichenko-6463188.webp',
    alt: 'Pregnant Woman',
    tag: 'Book Bites',
    title: 'How Hitting Rock Bottom Taught Me to Trust My Intuition',
    excerpt: 'The following is adapted from God Is My Ghostwriter by Danielle K. White.',
    author: 'Eric Jorgenson',
    date: 'Apr 30, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/why-i-joined-the-army-after-escaping-saigon',
    img: '/assets/pexels-rdne-7467847.webp',
    alt: 'Why I Joined the Army After Escaping Saigon',
    tag: 'Book Bites',
    title: 'Why I Joined the Army After Escaping Saigon',
    excerpt: 'The following is adapted from Raising Athena by MyLinh Brewster Shattan.',
    author: 'Eric Jorgenson',
    date: 'Apr 23, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/how-i-took-back-my-business-one-bold-move-at-a-time',
    img: '/assets/pexels-pixabay-164634.webp',
    alt: 'How I Took Back My Business One Bold Move at a Time',
    tag: 'Book Bites',
    title: 'How I Took Back My Business One Bold Move at a Time',
    excerpt: 'The following is adapted from Reclaiming My Pride by Suzanne Iovanna.',
    author: 'Eric Jorgenson',
    date: 'Apr 23, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/treat-ai-like-your-best-sales-rep-because-it-already-is',
    img: '/assets/pexels-tim-witzdam-1081250691-32021560.webp',
    alt: 'Treat AI Like Your Best Sales Rep (Because It Already Is)',
    tag: 'Book Bites',
    title: 'Treat AI Like Your Best Sales Rep (Because It Already Is)',
    excerpt: 'The following is adapted from AI Marketing Blueprint by Shiv Narayanan.',
    author: 'Eric Jorgenson',
    date: 'Apr 15, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/how-a-small-inventors-patents-may-prove-apple-pay-was-built-on-stolen-ideas',
    img: '/assets/pexels-shvetsa-4226270.webp',
    alt: "How a Small Inventor's Patents May Prove Apple Pay Was Built on Stolen Ideas",
    tag: 'Book Bites',
    title: "How a Small Inventor's Patents May Prove Apple Pay Was Built on Stolen Ideas",
    excerpt: 'The following is adapted from The Venture Capital Alternative by Matt Moyers.',
    author: 'Eric Jorgenson',
    date: 'Apr 15, 2026',
    read: '3 min read',
  },
]

export default function ScribeBlog2() {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState('All Posts')

  const filtered = posts.filter(p => {
    const matchTag = activeTag === 'All Posts' || p.tag === activeTag
    const matchSearch = !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase())
    return matchTag && matchSearch
  })

  return (
    <div className="blog-listing">
      {/* Hero */}
      <div className="blog-hero">
        <span className="blog-hero__tag">The Scribe Blog</span>
        <h1 className="blog-hero__title">Writing, Publishing, and Book Marketing Insights</h1>
        <p className="blog-hero__desc">Expert insights from 2,000+ published authors. Strategies and stories to help you write, publish, and market your nonfiction book.</p>
      </div>

      {/* Search */}
      <div className="blog-search">
        <div className="blog-search__wrap">
          <svg className="blog-search__icon" width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <input
            type="search"
            className="blog-search__input"
            placeholder="Search articles..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>
      {search && (
        <div className="blog-search__count">{filtered.length} result{filtered.length !== 1 ? 's' : ''} for &ldquo;{search}&rdquo;</div>
      )}

      {/* Tags */}
      <div className="blog-tags">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`blog-tags__link${activeTag === tag ? ' blog-tags__link--active' : ''}`}
            style={{ background: 'none', border: '1px solid rgba(224, 45, 45, 0.12)', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="blog-grid">
          {filtered.map((p, i) => (
            <article key={i} className="blog-card">
              <a href={p.href} className="blog-card__image-wrap">
                <img src={p.img} alt={p.alt} className="blog-card__image" loading="lazy" width={960} height={600} />
              </a>
              <div className="blog-card__body">
                <span className="blog-card__tag">{p.tag}</span>
                <h3 className="blog-card__title"><a href={p.href}>{p.title}</a></h3>
                <p className="blog-card__excerpt">{p.excerpt}</p>
                <div className="blog-card__meta">
                  <span className="blog-card__author">{p.author}</span>
                  <span className="blog-card__dot"></span>
                  <time>{p.date}</time>
                  <span className="blog-card__dot"></span>
                  <span>{p.read}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="blog-search__no-results">
          <h3>No matching posts found</h3>
          <p>Try a different search term or tag.</p>
        </div>
      )}

      {/* Pagination */}
      {!search && activeTag === 'All Posts' && (
        <nav className="blog-pagination" aria-label="Blog pagination">
          <a href="/blog">← Prev</a>
          <a href="/blog">1</a>
          <span className="active">2</span>
          <a href="/blog/page/3">3</a>
          <a href="/blog/page/4">4</a>
          <a href="/blog/page/3">Next →</a>
        </nav>
      )}

      {/* CTA */}
      <div className="blog-cta">
        <h2 className="blog-cta__title">Ready to Write Your Book?</h2>
        <p className="blog-cta__text">Scribe has helped 2,000+ authors turn their ideas into published books. Schedule a free consult to get started.</p>
        <a href="/consult" className="blog-cta__btn">Schedule a Consult</a>
      </div>
    </div>
  )
}
