'use client'
import { useState } from 'react'

const featured = {
  href: '/blog/a-peek-into-lenas-journey',
  img: '/assets/VivianLiu_Twitter_Post_AvailableNow.webp',
  alt: "A Peek into Lena's Journey",
  tag: 'Book Bites',
  title: "A Peek into Lena's Journey",
  excerpt: "The following is an excerpt from Lena's Journey by Vivian Liu.",
  author: 'Eric Jorgenson',
  date: 'June 17, 2026',
  read: '7 min read',
}

const posts = [
  {
    href: '/blog/when-you-choose-your-attitude-you-choose-your-world',
    img: '/assets/pexels-kimmo-vainio-314143536-18386434.webp',
    alt: 'When You Choose Your Attitude, You Choose Your World',
    tag: 'Book Bites',
    title: 'When You Choose Your Attitude, You Choose Your World',
    excerpt: 'The following is an excerpt from The Stonecaster by Dillon W. Buck.',
    author: 'Eric Jorgenson',
    date: 'Jun 17, 2026',
    read: '4 min read',
  },
  {
    href: '/blog/float-like-a-butterfly-what-muhammad-ali-taught-me-about-being-a-black-sheep',
    img: '/assets/pexels-eberhardgross-32707948.webp',
    alt: 'Float Like a Butterfly: What Muhammad Ali Taught Me About Being a Black Sheep',
    tag: 'Book Bites',
    title: 'Float Like a Butterfly: What Muhammad Ali Taught Me About Being a Black Sheep',
    excerpt: 'The following is adapted from The Black Sheep Advantage by Dr. Thom LeBeau.',
    author: 'Eric Jorgenson',
    date: 'Jun 17, 2026',
    read: '4 min read',
  },
  {
    href: '/blog/your-price-is-your-story-and-its-telling-one-right-now',
    img: '/assets/pexels-leeloothefirst-8962460.webp',
    alt: "Your Price Is Your Story… And It's Telling One Right Now",
    tag: 'Book Bites',
    title: "Your Price Is Your Story… And It's Telling One Right Now",
    excerpt: 'The following is adapted from The Last Mile of Trust by Edward Lee.',
    author: 'Eric Jorgenson',
    date: 'Jun 11, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/step-inside-the-brooklyn-paramounts-roaring-1928-debut',
    img: '/assets/pexels-hyrlf-meng-317253942-18413963.webp',
    alt: "Step Inside the Brooklyn Paramount's Roaring 1928 Debut",
    tag: 'Book Bites',
    title: "Step Inside the Brooklyn Paramount's Roaring 1928 Debut",
    excerpt: 'The following is adapted from The Brooklyn Paramount Theatre by Michael Hittman.',
    author: 'Eric Jorgenson',
    date: 'May 28, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/the-simple-switch-from-aimless-to-visionary',
    img: '/assets/pexels-cottonbro-8370867.webp',
    alt: 'The Simple Switch from Aimless to Visionary',
    tag: 'Book Bites',
    title: 'The Simple Switch from Aimless to Visionary',
    excerpt: 'The following is adapted from Dreams and Deadlines by Wolfram Hedrich & Sebastian Voss.',
    author: 'Eric Jorgenson',
    date: 'May 28, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/the-receptionist-who-was-always-cold-a-lesson-in-strategic-blindness',
    img: '/assets/pexels-gustavo-fring-6285298.webp',
    alt: 'The Receptionist Who Was Always Cold: A Lesson in Strategic Blindness',
    tag: 'Book Bites',
    title: 'The Receptionist Who Was Always Cold: A Lesson in Strategic Blindness',
    excerpt: 'The following is adapted from Strategy Is Attitude by Ganzorig.',
    author: 'Eric Jorgenson',
    date: 'May 21, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/disrupt-yourself-before-someone-else-beats-you-to-it',
    img: '/assets/pexels-julio-lopez-75309646-29502358.webp',
    alt: 'Disrupt Yourself Before Someone Else Beats You to It',
    tag: 'Book Bites',
    title: 'Disrupt Yourself Before Someone Else Beats You to It',
    excerpt: 'The following is adapted from Do Your Thing by Ralph Hamers.',
    author: 'Eric Jorgenson',
    date: 'May 21, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/inclusive-practices-that-close-the-wage-gap',
    img: '/assets/pexels-edmond-dantes-8068836.webp',
    alt: 'Inclusive Practices That Close the Wage Gap',
    tag: 'Book Bites',
    title: 'Inclusive Practices That Close the Wage Gap',
    excerpt: 'The following is adapted from Equal Pay Matters by David Weaver.',
    author: 'Eric Jorgenson',
    date: 'May 21, 2026',
    read: '3 min read',
  },
  {
    href: '/blog/when-birthday-cake-couldnt-sweeten-the-storm',
    img: '/assets/pexels-towfiqu-barbhuiya-3440682-12065625.webp',
    alt: "Birthday cake with lit candles.",
    tag: 'Book Bites',
    title: "When Birthday Cake Couldn't Sweeten the Storm",
    excerpt: 'The following is adapted from Before Forever by Ellisa Allen.',
    author: 'Eric Jorgenson',
    date: 'May 07, 2026',
    read: '3 min read',
  },
]

export default function ScribeBlog() {
  const [search, setSearch] = useState('')

  const filtered = posts.filter(p =>
    !search || p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="blog-listing">
      {/* Hero */}
      <div className="blog-hero">
        <span className="blog-hero__tag">The Readora Blog</span>
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

      {/* Featured post */}
      {!search && (
        <div className="blog-featured">
          <a href={featured.href} className="blog-featured__image-wrap">
            <img src={featured.img} alt={featured.alt} className="blog-featured__image" loading="eager" width={960} height={600} />
          </a>
          <div className="blog-featured__content">
            <h2 className="blog-featured__title"><a href={featured.href}>{featured.title}</a></h2>
            <p className="blog-featured__excerpt">{featured.excerpt}</p>
            <div className="blog-featured__meta">
              <span className="blog-featured__author">{featured.author}</span>
              <span className="blog-featured__dot"></span>
              <time>{featured.date}</time>
              <span className="blog-featured__dot"></span>
              <span>{featured.read}</span>
            </div>
          </div>
        </div>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="blog-grid">
          {filtered.map((p, i) => (
            <article key={i} className="blog-card">
              <a href={p.href} className="blog-card__image-wrap">
                <img src={p.img} alt={p.alt} className="blog-card__image" loading="lazy" width={960} height={600} />
              </a>
              <div className="blog-card__body">
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
          <p>Try a different search term.</p>
        </div>
      )}

      {/* CTA */}
      <div className="blog-cta">
        <h2 className="blog-cta__title">Ready to Write Your Book?</h2>
        <p className="blog-cta__text">Readora has helped 2,000+ authors turn their ideas into published books. Schedule a free consult to get started.</p>
        <a href="/consult" className="blog-cta__btn">Schedule a Consult</a>
      </div>
    </div>
  )
}
