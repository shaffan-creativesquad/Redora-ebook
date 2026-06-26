import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How Breaking the Rules Can Change Everything | Scribe Media Blog',
  description:
    "A free excerpt from Henk Pretorius's book Rational Defiance. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: '/blog/why-smart-leaders-make-terrible-decisions-and-how-to-avoid-it',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2026/book-bites/ChatGPT-Image-Feb-19-2026-03_29_23-PM.png',
    title: 'Why Smart Leaders Make Terrible Decisions—and How to Avoid It',
    date: 'Feb 26, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/colin-dombroski-the-plantar-fasciitis-plan',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2019/07/colin-dombroski.jpg',
    title: 'A Book Helped Colin Dombroski Get More People Back on Their Feet',
    date: 'Jul 03, 2019',
  },
  {
    href: 'https://scribemedia.com/blog/the-credibility-flywheel',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2025/12/Screenshot-2025-12-17-at-12.55.33-PM-2.png',
    title: 'The Credibility Flywheel',
    date: 'Dec 17, 2025',
  },
]

export default function HowBreakingTheRulesPage() {
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

            <h1 className="blog-post__title">How Breaking the Rules Can Change Everything</h1>

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
                  <time dateTime="2026-03-05">March 05, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/blog-featured/2026/book-bites/pexels-max-flinterman-225455-715425.jpg?width=960&height=540"
            alt="How Breaking the Rules Can Change Everything"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/rationaldefiance">Rational Defiance</a> by Henk Pretorius, PhD.</em></p>

            <p>True progress often comes from refusing to follow the crowd. Across history, the most transformative achievements share one thing in common: someone daring to challenge convention with purpose. This isn&rsquo;t blind rebellion, it&rsquo;s what I call <strong>Rational Defiance</strong>.</p>

            <p>Consider the early 1990s, when Jerry Sternin led the Save the Children program in Vietnam. With minimal resources and little institutional support, his team sought solutions where others hadn&rsquo;t looked. They discovered local families who successfully nourished their children despite widespread malnutrition. These families fed children even when sick, offered small frequent meals, used nutrient-rich foods often discarded, and actively ensured each child ate. By amplifying these unconventional yet effective practices, Sternin&rsquo;s team helped reduce malnutrition by 65&ndash;85% within two years. Today, the positive deviance approach he pioneered has improved the lives of millions in over sixty countries.</p>

            <p>Rational Defiance isn&rsquo;t just for public health, it shows up in personal ambition as well. Arnold Schwarzenegger grew up in postwar Austria feeling out of place. He rejected the conventional path of school, marriage, and a predictable life. Instead, he pursued bodybuilding, excelling in a niche sport with relentless discipline. When he outgrew that stage, he pivoted to acting, despite doubts about his accent, size, and name. Later, he entered politics with no prior experience, becoming the Governor of California. Each step reflected deliberate defiance: he didn&rsquo;t break the rules for fun, but to create a better life aligned with his purpose.</p>

            <p>Athletics offers another powerful example. In the 1960s, high jumper Dick Fosbury struggled with the dominant straddle technique, repeatedly failing at the bar. Instead of conforming, he experimented, curling his body backward to clear the bar&mdash;the now-famous Fosbury Flop. Initially mocked as lazy, Fosbury persisted. At the 1968 Olympics, he won gold and set a record, fundamentally changing high-jumping technique worldwide. His success illustrates that selective, thoughtful defiance can rewrite the rules entirely.</p>

            <p>These stories&mdash;spanning public health, personal growth, and sports&mdash;share a common principle: <strong>purposeful nonconformity</strong>. Rational Defiance is deliberate, selective, and guided by a vision for meaningful improvement. It&rsquo;s not impulsive; it&rsquo;s informed and intentional. The best nonconformists challenge the status quo because they see a better path forward, not for the thrill of breaking rules.</p>

            <p>Whether improving a community, reinventing a career, or redefining a sport, Rational Defiance can transform lives, systems, and fields. The key is being different enough to make an impact while intentional enough to create lasting change.</p>

            <p>&hellip;</p>

            <p><em>For more advice on challenging convention and using purposeful nonconformity to achieve meaningful results, you can find <a href="https://geni.us/rationaldefiance">Rational Defiance</a> on Amazon.</em></p>

            <p><strong>Henk Pretorius</strong> holds a PhD in cognitive psychology and has spent his career both experiencing conformity and defying it. At twenty-four, he co-founded a market research startup that disrupted an industry resistant to change, growing it into Africa&rsquo;s leading digital insights agency before its acquisition in 2018. Henk now runs an AI transformation agency and is building his next startup. He is married with two daughters and splits his time between South Africa and the United States.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fhow-breaking-the-rules-can-change-everything&text=How+Breaking+the+Rules+Can+Change+Everything" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fhow-breaking-the-rules-can-change-everything&title=How+Breaking+the+Rules+Can+Change+Everything" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fhow-breaking-the-rules-can-change-everything" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
                <a
                  key={post.href}
                  href={post.href}
                  className="blog-post__related-card"
                  target={post.href.startsWith('/') ? undefined : '_blank'}
                  rel={post.href.startsWith('/') ? undefined : 'noopener noreferrer'}
                >
                  <img src={post.img} alt={post.title} className="blog-post__related-img" loading="lazy" width={960} height={600} />
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
