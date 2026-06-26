import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Disrupt Yourself Before Someone Else Beats You to It | Scribe Media Blog',
  description:
    "A free excerpt from Ralph Hamers's book Do Your Thing. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/your-price-is-your-story-and-its-telling-one-right-now',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-leeloothefirst-8962460.jpg',
    title: "Your Price Is Your Story… And It’s Telling One Right Now",
    date: 'Jun 11, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/part-4-18-prove-strategies-to-boost-your-book-sales',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2024/12/18StrategiesBookSales.jpg',
    title: 'PART 4: 18 Proven Strategies to Boost Your Book Sales',
    date: 'Dec 23, 2024',
  },
  {
    href: 'https://scribemedia.com/blog/why-your-gut-instinct-might-save-your-life',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-hoodzie-12493038.jpg',
    title: 'Why Your Gut Instinct Might Save Your Life',
    date: 'May 01, 2026',
  },
]

export default function DisruptYourselfPage() {
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

            <h1 className="blog-post__title">Disrupt Yourself Before Someone Else Beats You to It</h1>

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
                  <time dateTime="2026-05-21">May 21, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-julio-lopez-75309646-29502358.jpg?width=960&height=540"
            alt="Disrupt Yourself Before Someone Else Beats You to It"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/doyourthing">Do Your Thing</a> by Ralph Hamers.</em></p>

            <p>On September 29, 2013, I stood in front of ING&rsquo;s top 200 leaders and gave my first speech as incoming CEO. The message was simple: time&rsquo;s up. Technology wasn&rsquo;t just reshaping industries. It was wiping them off the map. Kodak. The record labels. These weren&rsquo;t slow declines. They were two-year disappearing acts, and the executives running those businesses never saw it coming.</p>

            <p>I wasn&rsquo;t there to pitch better tools or shinier apps. My pitch was bigger: forget improving what we already do, and start imagining a completely different bank. We had to be willing to take a hammer to our own business before someone else swung first. If we wouldn&rsquo;t cannibalize ourselves, we&rsquo;d shrink slowly into irrelevance, sanding down the edges of an outdated model while neobanks built new ones from scratch.</p>

            <p>ING Direct gave us a head start. As a challenger brand in several countries, it had already shown us what a bolder model could look like. Small-screen banking, intuitive digital experiences, straight-through processing. These weren&rsquo;t bells and whistles. They were leaps. To match that energy, I ditched the usual deck. My slides had no numbers, no tables, no text. Just images. A clean break from how ING used to talk to itself.</p>

            <p>To make the threat real, I showed a single photo from the 2013 papal inauguration: a sea of people in St. Peter&rsquo;s Square, every arm raised, every phone recording. Not a camera in sight. Then I asked the room, where did the camera industry go? Next came Lady Gaga, who built a global fan army through social media, community, and direct engagement, sidestepping every traditional gatekeeper in the music business. Where did the record industry go?</p>

            <p>These weren&rsquo;t gentle evolutions. They were ambushes. And the same ambush was forming around us. Neobanks were launching. Apple, Google, and Amazon were circling payments. E-commerce was quietly embedding finance into checkout flows. If we didn&rsquo;t stay close to customers and treat technology as a differentiator rather than a crutch, we&rsquo;d be the next case study in someone else&rsquo;s keynote.</p>

            <p>I deliberately didn&rsquo;t show up with a finished strategy. I wanted to land in the middle of the conversation, not at the end of it. The workstreams I&rsquo;d set up made sure the people who&rsquo;d have to execute the strategy were the ones helping write it. My ask to the top 200 was bigger than a plan. I wanted them to imagine building a bank no one had ever built before.</p>

            <p>The next morning, every leader woke up to a special alarm clock in their hotel room. No buzzer. Just a soft orange glow filling the room. It was our symbol: the sun rises orange every day. They carried those clocks home as a reminder that however hard the road got, we were the ones built to lead this transformation.</p>

            <p>…</p>

            <p><em>For more advice on leading bold, technology-driven change, you can find <a href="https://geni.us/doyourthing">Do Your Thing</a> on Amazon.</em></p>

            <p><strong>Ralph Hamers</strong> is the former CEO of ING and UBS and a corporate advisor, tech investor, and board chair. At ING, he completed the bank&rsquo;s post-crisis restructuring and transformed ING into a leading digital primary bank in Europe. During this period, ING achieved accelerated primary customer growth, one of the lowest cost-to-income ratios in European banking, and was recognized with <em>Global Finance&rsquo;s</em> Best Bank of the World award. As CEO of UBS, Ralph launched the One UBS strategy and played a central role in the rescue of Credit Suisse.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fdisrupt-yourself-before-someone-else-beats-you-to-it&text=Disrupt+Yourself+Before+Someone+Else+Beats+You+to+It" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fdisrupt-yourself-before-someone-else-beats-you-to-it&title=Disrupt+Yourself+Before+Someone+Else+Beats+You+to+It" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fdisrupt-yourself-before-someone-else-beats-you-to-it" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
