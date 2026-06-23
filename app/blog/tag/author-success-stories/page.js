import '../../blog.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import BlogTagGrid from '../book-writing/BlogTagGrid'
import data from './posts.json'

export const metadata = {
  title: 'Author Success Stories | The Scribe Blog | Scribe Media',
  description: 'Real author success stories from 2,000+ published authors. See how Scribe helped them write, publish, and market their nonfiction books.',
}

const tags = [
  { label: 'All Posts', href: '/blog' },
  { label: 'Book Writing', href: '/blog/tag/book-writing' },
  { label: 'Author Success Stories', href: '/blog/tag/author-success-stories', active: true },
  { label: 'Book Publishing', href: '/blog/tag/book-publishing' },
  { label: 'Book Bites', href: '/blog/tag/book-bites' },
  { label: 'Book Marketing', href: '/blog/tag/book-marketing' },
  { label: 'Author Branding', href: '/blog/tag/author-branding' },
  { label: 'Book Editing', href: '/blog/tag/book-editing' },
  { label: 'Scribe', href: '/blog/tag/scribe' },
  { label: 'Idea to Execution', href: '/blog/tag/idea-to-execution' },
  { label: 'Book Positioning', href: '/blog/tag/book-positioning' },
  { label: 'Author Royalties', href: '/blog/tag/author-royalties' },
  { label: 'Book Topic', href: '/blog/tag/book-topic' },
  { label: 'Speaking', href: '/blog/tag/speaking' },
]

export default function AuthorSuccessStoriesTagPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="blog-listing">

          <div className="blog-hero">
            <span className="blog-hero__tag">The Scribe Blog</span>
            <h1 className="blog-hero__title">Writing, Publishing, and Book Marketing Insights</h1>
            <p className="blog-hero__desc">Expert insights from 2,000+ published authors. Strategies and stories to help you write, publish, and market your nonfiction book.</p>
          </div>

          <div className="blog-tags">
            {tags.map(t => (
              <a key={t.href} href={t.href} className={`blog-tags__link${t.active ? ' blog-tags__link--active' : ''}`}>{t.label}</a>
            ))}
          </div>

          <BlogTagGrid featured={data.featured} posts={data.posts} paginationBase="/blog/tag/author-success-stories" totalPages={9} />

          <div className="blog-cta">
            <h2 className="blog-cta__title">Ready to Write Your Book?</h2>
            <p className="blog-cta__text">Scribe has helped 2,000+ authors turn their ideas into published books. Schedule a free consult to get started.</p>
            <a href="#" className="blog-cta__btn">Schedule a Consult</a>
          </div>

        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
