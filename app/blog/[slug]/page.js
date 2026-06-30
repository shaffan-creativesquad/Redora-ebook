import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import '../blogpost.css'

// All resource library slugs — pre-rendered at build time
const RESOURCE_SLUGS = [
  '3-secrets-to-writing-a-book-people-cant-stop-recommending',
  'audiobook-production-companies',
  'audiobooks-who-benefits-most-and-why-authors-should-consider-them',
  'book-launch-content-calendar',
  'book-launch-social-media-campaign',
  'book-publishers-versus-course-businesses',
  'choosing-between-narrating-your-own-audiobook-or-hiring-a-professional',
  'day-book-published',
  'ebook-metadata',
  'engage-book-launch-audience',
  'entrepreneur-startup-assumptions',
  'exploring-when-audiobooks-might-not-be-the-right-fit-for-authors',
  'financial-advisor-book',
  'help-with-writing-a-book',
  'hemingway-app-review',
  'how-to-become-a-published-author',
  'how-to-co-author-book',
  'how-to-find-a-publisher-for-my-book',
  'how-to-know-if-your-book-idea-is-original',
  'how-to-make-my-application-stand-out',
  'how-to-use-ai-when-writing-a-book',
  'how-to-write-a-motivational-book',
  'how-to-write-a-synopsis',
  'how-to-write-an-autobiography',
  'hugh-howey-hero-of-self-publishing-the-story-of-wool',
  'hybrid-book-publishers',
  'i-have-an-idea-for-a-book-but-need-someone-to-write-it',
  'literary-devices',
  'memoir-ghostwriter',
  'memoir-outline',
  'new-publishing-playbook',
  'part-2-a-new-third-option-professional-publishing-as-the-future-of-book',
  'part-3-finding-your-author-identity',
  'part-4-18-prove-strategies-to-boost-your-book-sales',
  'should-you-narrate-your-own-audiobook-or-hire-a-professional',
  'starting-a-business-book',
  'the-finances-of-self-publishing-vs-traditional-publishing',
  'the-power-of-alt-text-enhancing-accessibility-in-audiobooks',
  'traditional-publishing-versus-self-publishing',
  'vellum-software',
  'what-its-like-working-with-scribe-a-behind-the-scenes-look-at-the-self-publishing-experience',
  'why-scribe-media-is-the-best-choice-for-audiobook-production',
  'write-a-business-book',
  'writing-motivation',
]

const RELATED_POSTS = [
  {
    href: '/blog/3-secrets-to-writing-a-book-people-cant-stop-recommending',
    img: 'https://scribemedia.com/hubfs/blog-featured/2024/03/Creative-Ways-to-Engage-Launch_1.jpg',
    title: '3 Secrets to Writing a Book People Can\'t Stop Recommending',
    date: 'Mar 25, 2024',
  },
  {
    href: '/blog/how-to-use-ai-when-writing-a-book',
    img: 'https://scribemedia.com/hs-fs/hubfs/blog-featured/2024/04/AIGhostwriting_BlogImage.jpg',
    title: 'How to Use AI When Writing a Book',
    date: 'Apr 18, 2024',
  },
  {
    href: '/blog/memoir-outline',
    img: 'https://scribemedia.com/hs-fs/hubfs/blog-featured/2020/10/How-to-Outline-Your-Memoir.jpg',
    title: 'How to Outline Your Memoir (A Complete Step-by-Step Guide)',
    date: 'Oct 06, 2020',
  },
]

async function fetchBlogPost(slug) {
  try {
    const res = await fetch(`https://scribemedia.com/blog/${slug}`, {
      next: { revalidate: 86400 },
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Next.js/1.0)' },
    })
    if (!res.ok) return null
    const html = await res.text()

    // og:image → featured image
    const imageMatch = html.match(/<meta property="og:image" content="([^"]+)"/)
    const image = imageMatch ? imageMatch[1] : null

    // og:title
    const titleMatch = html.match(/<meta property="og:title" content="([^"]+)"/)
    const title = titleMatch
      ? titleMatch[1]
      : slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())

    // description
    const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/)
    const description = descMatch ? descMatch[1] : ''

    // published date
    const dateMatch = html.match(/property="article:published_time"\s+content="([^"]+)"/)
    const dateRaw = dateMatch ? dateMatch[1] : null

    // tags — class="blog-post__tag" only (not blog-post__footer-tag)
    const tags = []
    const tagRe = /class="blog-post__tag"[^>]*>([^<]+)</g
    let m
    while ((m = tagRe.exec(html)) !== null) {
      tags.push(m[1].trim())
    }

    // article body — everything between blog-post__content and blog-post__footer
    let content = ''
    const contentMarker = 'class="blog-post__content"'
    const footerMarker = 'class="blog-post__footer"'
    const cStart = html.indexOf(contentMarker)
    const fStart = html.indexOf(footerMarker, cStart)

    if (cStart !== -1 && fStart !== -1) {
      const divOpenEnd = html.indexOf('>', cStart) + 1
      const rawSection = html.slice(divOpenEnd, fStart)
      // strip outer <span ...> wrapper
      const spanOpenEnd = rawSection.indexOf('>') + 1
      const spanCloseIdx = rawSection.lastIndexOf('</span>')
      content = spanCloseIdx !== -1
        ? rawSection.slice(spanOpenEnd, spanCloseIdx).trim()
        : rawSection.replace(/<\/div>\s*$/, '').trim()
    }

    return { title, image, description, dateRaw, tags, content }
  } catch {
    return null
  }
}

function formatDate(dateRaw) {
  if (!dateRaw) return null
  try {
    return new Date(dateRaw).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return null
  }
}

export async function generateStaticParams() {
  return RESOURCE_SLUGS.map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const data = await fetchBlogPost(slug)
  if (!data) return { title: 'Blog | Scribe Media' }
  return {
    title: `${data.title} | Scribe Media`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: data.image ? [data.image] : [],
    },
  }
}

export default async function BlogSlugPage({ params }) {
  const { slug } = await params
  const data = await fetchBlogPost(slug)
  if (!data) notFound()

  const { title, image, tags, dateRaw, content } = data
  const formattedDate = formatDate(dateRaw)
  const pageUrl = `https://scribemedia.com/blog/${slug}`
  const encodedUrl = encodeURIComponent(pageUrl)
  const encodedTitle = encodeURIComponent(title)

  // Filter out the current post from related posts
  const related = RELATED_POSTS.filter(p => !p.href.endsWith(slug)).slice(0, 3)

  return (
    <>
      <Navbar />
      <main id="main-content">
        <article className="blog-post">

          <a href="/author-resources-library" className="blog-post__back">
            <i className="ph ph-arrow-left"></i> Back to Author Resources Library
          </a>

          <header className="blog-post__header">
            {tags.length > 0 && (
              <div className="blog-post__tags">
                {tags.map(tag => (
                  <span key={tag} className="blog-post__tag">{tag}</span>
                ))}
              </div>
            )}
            <h1 className="blog-post__title">{title}</h1>
            <div className="blog-post__meta">
              <div className="blog-post__author-avatar--placeholder">
                <i className="ph ph-pen-nib"></i>
              </div>
              <div className="blog-post__meta-text">
                <span className="blog-post__author-name">Scribe Media</span>
                {formattedDate && (
                  <span className="blog-post__date">
                    <time dateTime={dateRaw}>{formattedDate}</time>
                  </span>
                )}
              </div>
            </div>
          </header>

          {image && (
            <img
              src={image}
              alt={title}
              className="blog-post__featured-image"
              width={960}
              height={540}
            />
          )}

          <div
            className="blog-post__content"
            dangerouslySetInnerHTML={{ __html: content }}
          />

          <div className="blog-post__footer">
            {tags.length > 0 && (
              <div className="blog-post__footer-tags">
                {tags.map(tag => (
                  <span key={tag} className="blog-post__footer-tag">{tag}</span>
                ))}
              </div>
            )}
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-post__share-link"
                aria-label="Share on X"
              >
                <i className="ph ph-x-logo"></i>
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-post__share-link"
                aria-label="Share on LinkedIn"
              >
                <i className="ph ph-linkedin-logo"></i>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-post__share-link"
                aria-label="Share on Facebook"
              >
                <i className="ph ph-facebook-logo"></i>
              </a>
            </div>
          </div>

          <div className="blog-post__author-bio">
            <div className="blog-post__author-bio-avatar--placeholder">
              <i className="ph ph-pen-nib"></i>
            </div>
            <div className="blog-post__author-bio-content">
              <span className="blog-post__author-bio-label">Written by</span>
              <h3 className="blog-post__author-bio-name">Scribe Media</h3>
              <p className="blog-post__author-bio-text">
                The world&apos;s best professional publishing company for nonfiction books.
                Scribe has helped 2,000+ authors turn their expertise into published books.
              </p>
            </div>
          </div>

          {related.length > 0 && (
            <div className="blog-post__related">
              <h2 className="blog-post__related-title">More from The Scribe Blog</h2>
              <div className="blog-post__related-grid">
                {related.map(post => (
                  <a key={post.href} href={post.href} className="blog-post__related-card">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="blog-post__related-img"
                      loading="lazy"
                      width={960}
                      height={600}
                    />
                    <div className="blog-post__related-body">
                      <h3 className="blog-post__related-card-title">{post.title}</h3>
                      <span className="blog-post__related-card-meta">{post.date}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}

          <div className="blog-post__cta">
            <h2 className="blog-post__cta-title">Ready to Write Your Book?</h2>
            <p className="blog-post__cta-text">
              Scribe has helped 2,000+ authors turn their ideas into published books.
              Schedule a free consult to get started.
            </p>
            <a href="/consult" className="blog-post__cta-btn">Schedule a Consult</a>
          </div>

        </article>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
