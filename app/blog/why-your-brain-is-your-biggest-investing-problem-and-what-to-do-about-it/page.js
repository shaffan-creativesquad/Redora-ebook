import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Why Your Brain Is Your Biggest Investing Problem (And What to Do About It) | Scribe Media Blog',
  description:
    "A free excerpt from Paul Durso's book Moneywork. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: '/blog/its-your-plan-how-involving-clients-changes-everything',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-kampus-8439650.jpg',
    title: '"It\'s Your Plan": How Involving Clients Changes Everything',
    date: 'Apr 15, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/what-can-you-expect-when-working-with-scribe-media-on-your-audiobook',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2025/06/30056-Blog-graphics-Scribe-Media-2.png',
    title: 'What Can You Expect When Working with Scribe Media on Your Audiobook?',
    date: 'Jun 04, 2025',
  },
  {
    href: 'https://scribemedia.com/blog/why-your-business-lives-or-dies-by-the-team-you-build',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-tima-miroshnichenko-5439368.jpg',
    title: 'Why Your Business Lives or Dies by the Team You Build',
    date: 'Apr 02, 2026',
  },
]

export default function WhyYourBrainInvestingPage() {
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

            <h1 className="blog-post__title">Why Your Brain Is Your Biggest Investing Problem (And What to Do About It)</h1>

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
                  <time dateTime="2026-04-02">April 02, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-alesiakozik-6770609.jpg?width=960&height=540"
            alt="Laptop displaying stock market data"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/moneywork">Moneywork</a> by Paul Durso.</em></p>

            <p>You know that feeling when you walk into a grocery store for just one thing and leave with a cart full of stuff you didn&rsquo;t know you needed? Investing without a plan works a lot like that. You end up with a portfolio full of random stocks and a financial future about as predictable as your next impulse buy.</p>

            <p>I&rsquo;ve spent a lot of time studying what separates successful investors from cautionary tales, and it almost always comes down to two things: understanding market history and understanding yourself.</p>

            <p>Let&rsquo;s start with history. The late 1990s dot-com bubble is a perfect example of what happens when emotion drives the market. Everyone wanted a piece of any company with &ldquo;.com&rdquo; in the name, regardless of whether the business actually made money. When it crashed, investors who had chased the hype were left hoping they could afford ramen. But those who had stuck with solid, dividend-paying companies? They weren&rsquo;t unscathed, but they were in far better shape.</p>

            <p>The same story played out in 2008. When the housing bubble burst and markets tanked, dividend investors holding companies with strong balance sheets kept receiving checks. It&rsquo;s like being on a sinking ship with a life vest. You&rsquo;re wet, but you&rsquo;re afloat.</p>

            <p>Then came March 2020. The market experienced its fastest drop in history. Yet many dividend-paying companies not only kept their payouts, some actually increased them. They had the free cash flow to back it up, and that made all the difference.</p>

            <p>Which brings me to the second piece: your brain. It&rsquo;s great for a lot of things, but investing isn&rsquo;t always one of them. Fear tells you to sell everything when the market dips. Greed whispers that the hot stock your barber mentioned is going to the moon. These two impulses have derailed more financial plans than any market crash ever could.</p>

            <p>Then there&rsquo;s FOMO. By the time you hear about a &ldquo;can&rsquo;t miss&rdquo; opportunity, the real profits have already been made. Chasing those tips is like running for a train that&rsquo;s already left the station.</p>

            <p>The antidote to all of this is patience and compounding. Reinvesting dividends over time is like a snowball rolling downhill. A $10,000 investment in a dividend stock yielding four percent, with dividends reinvested, grows to over $32,000 in thirty years without adding a single dollar. That growth comes entirely from dividends buying more shares, which earn more dividends, and so on.</p>

            <p>Slow and steady really does win the race here. The goal isn&rsquo;t flashy wins. It&rsquo;s informed decisions, consistent behavior, and letting time do the heavy lifting.</p>

            <p>&hellip;</p>

            <p><em>For more advice on dividend investing and building long-term wealth, you can find <a href="https://geni.us/moneywork">MoneyWork</a> by Paul Durso on Amazon.</em></p>

            <p><strong>Paul L. Durso</strong> is a financial advisor, podcaster, and reformed market chaser turned dividend evangelist. As founder of Insight Folios and Uplift Technologies, Paul helps clients and fellow advisors turn spreadsheets into freedom plans. He&rsquo;s the voice behind <em>Planning Made Simple</em>, a certified estate planner, and a dad of three boys who ask tough financial questions at the dinner table. He appears regularly on CBS and FOX, but his favorite platform is still the family kitchen island. Paul believes in faith first, dividends second, and that compound interest might be one of God&rsquo;s best inventions.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-your-brain-is-your-biggest-investing-problem-and-what-to-do-about-it&text=Why+Your+Brain+Is+Your+Biggest+Investing+Problem+%28And+What+to+Do+About+It%29" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-your-brain-is-your-biggest-investing-problem-and-what-to-do-about-it&title=Why+Your+Brain+Is+Your+Biggest+Investing+Problem+%28And+What+to+Do+About+It%29" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-your-brain-is-your-biggest-investing-problem-and-what-to-do-about-it" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
