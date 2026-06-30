'use client'
import { useState } from 'react'

const tags = [
  'All Posts', 'Book Writing', 'Book Bites', 'Book Marketing',
  'Idea to Execution', 'Book Positioning', 'Author Royalties',
  'Book Topic', 'Speaking',
]

const posts = [
  {
    href: '/blog/its-your-plan-how-involving-clients-changes-everything',
    img: '/assets/pexels-kampus-8439650.png',
    alt: '"It\'s Your Plan": How Involving Clients Changes Everything',
    tag: 'Book Bites',
    title: '"It\'s Your Plan": How Involving Clients Changes Everything',
    excerpt: 'The following is adapted from Built to Serve by Paul L. Durso.',
    author: 'Eric Jorgenson',
    date: 'Apr 15, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/theres-no-perfect-time.-theres-only-now',
    img: '/assets/pexels-didsss-1367229.png',
    alt: "There's No Perfect Time. There's Only Now.",
    tag: 'Book Bites',
    title: "There's No Perfect Time. There's Only Now.",
    excerpt: 'The following is adapted from The Call I Almost Missed by Tommy Short.',
    author: 'Eric Jorgenson',
    date: 'Apr 02, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/why-your-brain-is-your-biggest-investing-problem-and-what-to-do-about-it',
    img: '/assets/pexels-alesiakozik-6770609.png',
    alt: 'Why Your Brain Is Your Biggest Investing Problem (And What to Do About It)',
    tag: 'Book Bites',
    title: 'Why Your Brain Is Your Biggest Investing Problem (And What to Do About It)',
    excerpt: 'The following is adapted from Moneywork by Paul Durso.',
    author: 'Eric Jorgenson',
    date: 'Apr 02, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/why-your-business-lives-or-dies-by-the-team-you-build',
    img: '/assets/pexels-tima-miroshnichenko-5439368.png',
    alt: 'Why Your Business Lives or Dies by the Team You Build',
    tag: 'Book Bites',
    title: 'Why Your Business Lives or Dies by the Team You Build',
    excerpt: "The following is adapted from It's All About Relationships by Eddy Arriola.",
    author: 'Eric Jorgenson',
    date: 'Apr 02, 2026',
    read: '3 min read',
  },
  {
    href: "/blog/i-only-had-two-options.-heres-what-i-chose",
    img: '/assets/pexels-rdne-7467927.png',
    alt: "I Only Had Two Options. Here's What I Chose.",
    tag: 'Book Bites',
    title: "I Only Had Two Options. Here's What I Chose.",
    excerpt: 'The following is adapted from Answering the Hard Questions by Devin Fish.',
    author: 'Eric Jorgenson',
    date: 'Apr 02, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/authors-guides-interviewing',
    img: '/assets/How-to-Get-Interviewed-on-Podcasts.png',
    alt: 'A Guide for Authors: How to Prepare for Your Scribe Interview',
    tag: '',
    title: 'A Guide for Authors: How to Prepare for Your Scribe Interview',
    excerpt: 'Before you meet with your Scribe for the first time, we want to make sure you get the most out of every session.',
    author: 'Eric Jorgenson',
    date: 'Mar 31, 2026',
    read: '4 min read',
  },
  {
    href: '/blog/dont-aspire-to-glory.-aspire-to-work',
    img: '/assets/pexels-startup-stock-photos-7372.png',
    alt: "Don't Aspire to Glory. Aspire to Work.",
    tag: 'Book Bites',
    title: "Don't Aspire to Glory. Aspire to Work.",
    excerpt: 'The following is adapted from The Book of Elon by Eric Jorgenson.',
    author: 'Eric Jorgenson',
    date: 'Mar 26, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/the-wild-card-who-wouldnt-wait-to-be-chosen',
    img: '/assets/pexels-rajtatavarthy-171568.png',
    alt: "The Wild Card Who Wouldn't Wait to Be Chosen",
    tag: 'Book Bites',
    title: "The Wild Card Who Wouldn't Wait to Be Chosen",
    excerpt: 'The following is adapted from Scratching the Surface by Danielle Mills Walden.',
    author: 'Eric Jorgenson',
    date: 'Mar 26, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/the-speech-nobody-knew-almost-didnt-happen',
    img: '/assets/pexels-borta-2790256-4331578.png',
    alt: 'Microphone',
    tag: 'Book Bites',
    title: "The Speech Nobody Knew Almost Didn't Happen",
    excerpt: 'The following is adapted from Finding Our Voice by Adam Castillo.',
    author: 'Eric Jorgenson',
    date: 'Mar 26, 2026',
    read: '3 min read',
  },
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
]

export default function ScribeBlog3() {
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
          <a href="/blog/page/2">← Prev</a>
          <a href="/blog">1</a>
          <a href="/blog/page/2">2</a>
          <span className="active">3</span>
          <a href="/blog/page/4">4</a>
          <a href="/blog/page/4">Next →</a>
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
