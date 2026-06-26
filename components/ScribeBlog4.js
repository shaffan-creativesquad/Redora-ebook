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
    href: '/blog/why-boundaries-are-the-most-loving-thing-you-can-give-your-child',
    img: '/assets/pexels-juanpphotoandvideo-1250452.png',
    alt: 'Why Boundaries Are the Most Loving Thing You Can Give Your Child',
    tag: 'Book Bites',
    title: 'Why Boundaries Are the Most Loving Thing You Can Give Your Child',
    excerpt: 'The following is adapted from Who You Are Is How You Parent by Jivan Das.',
    author: 'Eric Jorgenson',
    date: 'Mar 19, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/what-does-it-mean-to-be-a-peacemaker',
    img: '/assets/pexels-cottonbro-6814536-1.png',
    alt: 'Argument',
    tag: 'Book Bites',
    title: 'What Does It Mean to Be a Peacemaker?',
    excerpt: 'The following is adapted from Healthy Minds, Healthy Nation by Gilbert Martina.',
    author: 'Eric Jorgenson',
    date: 'Mar 19, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/playing-hurt-the-dangerous-culture-of-toughness-in-hockey',
    img: '/assets/pexels-tony-schnagl-6469030.png',
    alt: 'Hockey Face Off',
    tag: 'Book Bites',
    title: 'Playing Hurt: The Dangerous Culture of Toughness in Hockey',
    excerpt: 'The following is adapted from Gloves Off by Behn Wilson.',
    author: 'Eric Jorgenson',
    date: 'Mar 19, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/when-google-banned-us-and-the-ftc-came-knocking-a-founders-survival-guide',
    img: '/assets/ChatGPT-Image-Feb-26-2026-10_48_22-AM.png',
    alt: "When Google Banned Us and the FTC Came Knocking: A Founder's Survival Guide",
    tag: 'Book Bites',
    title: "When Google Banned Us and the FTC Came Knocking: A Founder's Survival Guide",
    excerpt: 'The following is adapted from 3 Startups, 40 Pivots by Ali Moiz and Murtaza Hussain.',
    author: 'Eric Jorgenson',
    date: 'Mar 05, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/comfort-is-a-false-god-why-discomfort-is-the-shortcut-to-growth',
    img: '/assets/ChatGPT-Image-Feb-26-2026-11_04_24-AM.png',
    alt: 'Comfort Is a False God: Why Discomfort Is the Shortcut to Growth',
    tag: 'Book Bites',
    title: 'Comfort Is a False God: Why Discomfort Is the Shortcut to Growth',
    excerpt: 'The following is adapted from The Shortcut by Dylan Trussell.',
    author: 'Eric Jorgenson',
    date: 'Mar 05, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/how-breaking-the-rules-can-change-everything',
    img: '/assets/pexels-max-flinterman-225455-715425.png',
    alt: 'How Breaking the Rules Can Change Everything',
    tag: 'Book Bites',
    title: 'How Breaking the Rules Can Change Everything',
    excerpt: 'The following is adapted from Rational Defiance by Henk Pretorius, PhD.',
    author: 'Eric Jorgenson',
    date: 'Mar 05, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/the-myth-of-fear-why-people-really-snitch',
    img: '/assets/pexels-max-flinterman-225455-715425.png',
    alt: 'The Myth of Fear: Why People Really Snitch',
    tag: 'Book Bites',
    title: 'The Myth of Fear: Why People Really Snitch',
    excerpt: 'The following is adapted from The 21 Myths of Street Life by Russell C. Lathom.',
    author: 'Eric Jorgenson',
    date: 'Mar 05, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/practicing-medicine-on-my-terms-from-burnout-to-purpose',
    img: '/assets/ChatGPT-Image-Feb-19-2026-03_50_21-PM.png',
    alt: 'Practicing Medicine on My Terms: From Burnout to Purpose',
    tag: 'Book Bites',
    title: 'Practicing Medicine on My Terms: From Burnout to Purpose',
    excerpt: 'The following is adapted from White Coat, Heavy Soul by Richard Harris.',
    author: 'Eric Jorgenson',
    date: 'Feb 26, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/tough-love-for-california-compassion-with-consequences',
    img: '/assets/Screenshot-2026-02-26-at-12.49.01-PM.png',
    alt: 'Tough Love for California: Compassion with Consequences',
    tag: 'Book Bites',
    title: 'Tough Love for California: Compassion with Consequences',
    excerpt: 'The following is adapted from California 2.0 by Jon Henderson.',
    author: 'Eric Jorgenson',
    date: 'Feb 26, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/why-smart-leaders-make-terrible-decisions-and-how-to-avoid-it',
    img: '/assets/ChatGPT-Image-Feb-19-2026-03_29_23-PM.png',
    alt: 'Why Smart Leaders Make Terrible Decisions—and How to Avoid It',
    tag: 'Book Bites',
    title: 'Why Smart Leaders Make Terrible Decisions—and How to Avoid It',
    excerpt: 'The following is adapted from Breaking Bad News by Jeff Hahn.',
    author: 'Eric Jorgenson',
    date: 'Feb 26, 2026',
    read: '3 min read',
  },
]

export default function ScribeBlog4() {
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
            style={{ background: 'none', border: '1px solid rgba(52, 217, 195, 0.12)', cursor: 'pointer', fontFamily: 'inherit' }}
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
                {p.tag && <span className="blog-card__tag">{p.tag}</span>}
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
          <a href="/blog/page/3">← Prev</a>
          <a href="/blog">1</a>
          <a href="/blog/page/2">2</a>
          <a href="/blog/page/3">3</a>
          <span className="active">4</span>
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
