import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Don't Aspire to Glory. Aspire to Work. | Scribe Media Blog",
  description:
    "A free excerpt from Eric Jorgenson's book The Book of Elon. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/book-publishing-process',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2021/04/book-publishing-process.jpeg',
    title: 'Book Publishing Process: A Step-by-Step Guide for Aspiring Nonfiction Authors',
    date: 'Apr 15, 2021',
  },
  {
    href: 'https://scribemedia.com/blog/cheri-bergeron-mission-motherhood-fertility-journey',
    img: null,
    title: 'Mission Motherhood: How Cheri Bergeron Turned a Decade of Heartbreak into a Lifeline for Aspiring Moms',
    date: 'Aug 18, 2025',
  },
  {
    href: 'https://scribemedia.com/blog/the-speech-nobody-knew-almost-didnt-happen',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-borta-2790256-4331578.jpg',
    title: "The Speech Nobody Knew Almost Didn't Happen",
    date: 'Mar 26, 2026',
  },
]

export default function DontAspireToGloryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <article className="blog-post">

          <a href="/blog" className="blog-post__back">
            <i className="ph ph-arrow-left"></i> Back to Blog
          </a>

          <header className="blog-post__header">
            <div className="blog-post__tags">
              <a href="/blog/tag/book-bites" className="blog-post__tag">Book Bites</a>
            </div>

            <h1 className="blog-post__title">Don&rsquo;t Aspire to Glory. Aspire to Work.</h1>

            <div className="blog-post__meta">
              <img
                src="https://scribemedia.com/hs-fs/hubfs/images/team/EricJorgenson.jpg?width=48&height=48&name=EricJorgenson.jpg"
                alt="Eric Jorgenson"
                className="blog-post__author-avatar"
                width={48}
                height={48}
              />
              <div className="blog-post__meta-text">
                <span className="blog-post__author-name">Eric Jorgenson</span>
                <span className="blog-post__date">
                  <time dateTime="2026-03-26">March 26, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-startup-stock-photos-7372.jpg?width=960&height=540"
            alt="Person typing on Apple keyboard in front of iMac"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/thebookofelon">The Book of Elon</a> by Eric Jorgenson.</em></p>

            <p>What does it mean to live a successful life? For Elon Musk, the answer isn&rsquo;t fame, wealth, or recognition. It&rsquo;s something far more grounded: usefulness.</p>

            <p>The measure of success, by his own account, comes down to one question: &ldquo;How many useful things can I get done?&rdquo; Each morning starts with a simple intention&mdash;how can I be useful today? Not how can I impress, not how can I get ahead, but how can I genuinely contribute?</p>

            <p>That mindset is harder to sustain than it sounds. Being truly useful, contributing more than you consume, is one of the more difficult things a person can aim for. But it&rsquo;s worth aiming for. The goal isn&rsquo;t perfection. It&rsquo;s making the set of choices most likely to move things in a positive direction, and course-correcting when you get it wrong.</p>

            <p>There&rsquo;s deep respect in this philosophy for people who simply put in an honest day&rsquo;s work. Whether someone is farming, building software, writing, or entertaining, if they&rsquo;re making a positive contribution to the people around them, that counts. Utility doesn&rsquo;t require a spotlight.</p>

            <p>So how do you actually know if you&rsquo;re helping? Think about it mathematically. Multiply how many people you&rsquo;ve helped by how much you helped each one. That product is your total impact. It&rsquo;s similar to the physics definition of work, and the framing matters: a product that changes the lives of a small group of people dramatically is just as valuable as one that nudges a massive audience in a small but positive direction. The math works out roughly the same.</p>

            <p>That lens applies to any product, project, or career path. Ask yourself: compared to what already exists, how much better is what I&rsquo;m offering, and how many people will feel that difference? A simple app doesn&rsquo;t need to reinvent civilization. If it&rsquo;s making even a modest number of people&rsquo;s lives genuinely easier, that&rsquo;s good work. Not every contribution has to change the world. It just has to add something real to it.</p>

            <p>This is the same advice passed on to the next generation: follow what genuinely interests and fulfills you, work hard at it, and find a way to add more than you take. Engineering, writing, building, creating&mdash;whatever the path, the measure is whether it leaves something useful behind.</p>

            <p>A useful life, in the end, is a life worth having lived.</p>

            <p>&hellip;</p>

            <p><em>For more advice on living with purpose and maximizing your impact, you can find <a href="https://geni.us/thebookofelon">The Book of Elon</a> on Amazon.</em></p>

            <p><strong>Eric Jorgenson</strong> curates the most useful ideas from our greatest thinkers and doers&mdash;and preserves them in our most permanent format: books.</p>

            <p>He&rsquo;s the author of <em>The Almanack of Naval Ravikant</em> (2M+ copies sold) and <em>The Anthology of Balaji</em>. He&rsquo;s CEO of Scribe Media, where authors retain full financial and creative control of their books.</p>

            <p>Eric lives in Kansas City with his wife and son in a house that&rsquo;s slowly becoming a library. He invests in obsessive geniuses building utopian technology.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fdont-aspire-to-glory.-aspire-to-work&text=Don%27t+Aspire+to+Glory.+Aspire+to+Work." target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fdont-aspire-to-glory.-aspire-to-work&title=Don%27t+Aspire+to+Glory.+Aspire+to+Work." target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fdont-aspire-to-glory.-aspire-to-work" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
            </div>
          </div>

          <div className="blog-post__author-bio">
            <img src="https://scribemedia.com/hs-fs/hubfs/images/team/EricJorgenson.jpg?width=72&height=72&name=EricJorgenson.jpg" alt="Eric Jorgenson" className="blog-post__author-bio-avatar" width={72} height={72} />
            <div className="blog-post__author-bio-content">
              <span className="blog-post__author-bio-label">Written by</span>
              <h3 className="blog-post__author-bio-name">Eric Jorgenson</h3>
              <p className="blog-post__author-bio-text">CEO of Scribe Media. Author of The Almanack of Naval Ravikant.</p>
            </div>
          </div>

          <div className="blog-post__related">
            <h2 className="blog-post__related-title">More from The Scribe Blog</h2>
            <div className="blog-post__related-grid">
              {relatedPosts.map((post) => (
                <a key={post.href} href={post.href} className="blog-post__related-card" target="_blank" rel="noopener noreferrer">
                  {post.img ? (
                    <img src={post.img} alt={post.title} className="blog-post__related-img" loading="lazy" width={960} height={600} />
                  ) : (
                    <div style={{ width: '100%', aspectRatio: '16/10', background: 'linear-gradient(135deg,rgba(52,217,195,0.15),rgba(52,217,195,0.05))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="ph ph-article" style={{ fontSize: '2rem', color: 'var(--accent-gold)', opacity: 0.4 }}></i>
                    </div>
                  )}
                  <div className="blog-post__related-body">
                    <h3 className="blog-post__related-card-title">{post.title}</h3>
                    <span className="blog-post__related-card-meta">{post.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="blog-post__cta">
            <h2 className="blog-post__cta-title">Ready to Write Your Book?</h2>
            <p className="blog-post__cta-text">Scribe has helped 2,000+ authors turn their ideas into published books. Schedule a free consult to get started.</p>
            <a href="/consult" className="blog-post__cta-btn">Schedule a Consult</a>
          </div>

        </article>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
