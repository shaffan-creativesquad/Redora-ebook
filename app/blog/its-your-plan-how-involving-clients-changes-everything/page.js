import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: '"It\'s Your Plan": How Involving Clients Changes Everything | Scribe Media Blog',
  description:
    "A free excerpt from Paul L. Durso's book Built to Serve. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/fbi-international-crime-fighting-into-beyond-the-badge',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2025/12/john-S.jpeg',
    title: 'How John Schachnovsky Turned a Career of International Crime-Fighting into Beyond the Badge',
    date: 'Dec 17, 2025',
  },
  {
    href: 'https://scribemedia.com/blog/i-only-had-two-options.-heres-what-i-chose',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-rdne-7467927.jpg',
    title: "I Only Had Two Options. Here's What I Chose.",
    date: 'Apr 02, 2026',
  },
  {
    href: '/blog/inclusive-practices-that-close-the-wage-gap',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-edmond-dantes-8068836.jpg',
    title: 'Inclusive Practices That Close the Wage Gap',
    date: 'May 21, 2026',
  },
]

export default function ItsYourPlanPage() {
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

            <h1 className="blog-post__title">&ldquo;It&rsquo;s Your Plan&rdquo;: How Involving Clients Changes Everything</h1>

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
                  <time dateTime="2026-04-15">April 15, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-kampus-8439650.jpg?width=960&height=540"
            alt="Woman in red blazer sitting on a gray couch"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/builttoserve">Built to Serve</a> by Paul L. Durso.</em></p>

            <p>Most financial planning is done <em>to</em> clients, not <em>with</em> them. The advisor runs the numbers, presents a solution, and hopes the client signs. That approach leaves clients feeling like passive passengers in their own financial journey. And passengers rarely become advocates.</p>

            <p>Our process starts with something called the base plan. Before we layer in any strategies, we strip everything away to show clients exactly where they stand, with no filters and no optimistic projections. Just the raw numbers. Sometimes that means a lot of red ink. I had a client once who stared at the screen and said, &ldquo;Is that&hellip; all red?&rdquo; It was. But that honest moment of discomfort is exactly what opens the door to real engagement.</p>

            <p>From there, we walk through investment strategies together, not to dazzle with charts or impress with jargon, but to educate. Clients learn why certain approaches work, how each aligns with their values, and what tradeoffs come with each path. By the time they choose a strategy, they&rsquo;re not being sold anything. They understand it.</p>

            <p>Then comes the part I love most: unveiling the income plan. After all that work together, the red turns green. Clients see a tangible, visual picture of their financial future, and the transformation is often dramatic. I had a client light up and ask, &ldquo;Wait, where did all the red go?&rdquo; That moment never gets old.</p>

            <p>The plan only becomes real if they act on it, and language matters here more than it might seem. Calling it &ldquo;your plan,&rdquo; &ldquo;your income,&rdquo; &ldquo;your solution&rdquo; shapes ownership. I&rsquo;ve watched clients lean back and say, almost to themselves, &ldquo;This is my plan, isn&rsquo;t it?&rdquo; Some of our advisors call it &ldquo;the look&rdquo;&mdash;the moment the light bulb turns on and you know they truly get it.</p>

            <p>What surprises many clients is that this plan doesn&rsquo;t assume any market growth. We build income around historical dividend yields, and any upside is simply icing on the cake. That reframes the entire risk conversation. Instead of hoping for returns, clients see that their income needs are already solved without needing the market to cooperate.</p>

            <p>The ripple effects of this kind of involvement are powerful. Clients who helped build their plan become its biggest believers. And believers refer people. One of our advisors said he never got referrals before using this process. Now he can&rsquo;t stop them from coming in.</p>

            <p>Benjamin Franklin said it plainly: &ldquo;Tell me and I&rsquo;ll forget. Teach me and I may remember. Involve me and I learn.&rdquo; When clients learn, they own it. When they own it, they share it. That&rsquo;s not just good planning&mdash;it&rsquo;s a better way to serve.</p>

            <p>&hellip;</p>

            <p><em>For more advice on client-centered financial planning, you can find <a href="https://geni.us/builttoserve">Built to Serve</a> on Amazon.</em></p>

            <p><strong>Paul L. Durso</strong> is a financial advisor, entrepreneur, and creator of software programs, including Simplicitree and TallyFin. These platforms empower clients to understand their plan with clarity and confidence. He teaches advisors how to grow without chasing cold leads, confusing clients, or burning out. Paul is the founder of Insight Folios and host of the <em>Advisors Ascend</em> podcast. A follower of Jesus, husband to Stephanie, and dad to three turbo-charged boys. He can usually be found in flip-flops, sometimes in a studio, and occasionally crunching numbers with the enthusiasm of someone who truly believes spreadsheets are a love language.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fits-your-plan-how-involving-clients-changes-everything&text=%22It%27s+Your+Plan%22%3A+How+Involving+Clients+Changes+Everything" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fits-your-plan-how-involving-clients-changes-everything&title=%22It%27s+Your+Plan%22%3A+How+Involving+Clients+Changes+Everything" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fits-your-plan-how-involving-clients-changes-everything" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
