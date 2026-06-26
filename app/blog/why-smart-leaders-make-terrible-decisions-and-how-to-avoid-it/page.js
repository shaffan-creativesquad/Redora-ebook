import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Why Smart Leaders Make Terrible Decisions—and How to Avoid It | Scribe Media Blog',
  description:
    "A free excerpt from Jeff Hahn's book Breaking Bad News. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/the-night-watchnight-broke-something-in-me',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-jordan-besson-2051439001-29281308.jpg',
    title: 'The Night Watchnight Broke Something in Me',
    date: 'May 07, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/why-every-founder-should-consider-writing-a-book',
    img: null,
    title: 'Why Every Founder Should Consider Writing a Book',
    date: 'Jul 03, 2025',
  },
  {
    href: '/blog/playing-hurt-the-dangerous-culture-of-toughness-in-hockey',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-tony-schnagl-6469030.jpg',
    title: 'Playing Hurt: The Dangerous Culture of Toughness in Hockey',
    date: 'Mar 19, 2026',
  },
]

export default function WhySmartLeadersPage() {
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

            <h1 className="blog-post__title">Why Smart Leaders Make Terrible Decisions&mdash;and How to Avoid It</h1>

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
                  <time dateTime="2026-02-26">February 26, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/blog-featured/2026/book-bites/ChatGPT-Image-Feb-19-2026-03_29_23-PM.png?width=960&height=540"
            alt="Why Smart Leaders Make Terrible Decisions"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/breakingbadnews">Breaking Bad News</a> by Jeff Hahn.</em></p>

            <p>When a crisis breaks, most executives face a brutal internal conflict. Do they admit mistakes and ask for forgiveness? Or do they defend, rationalize, and protect the brand at all costs?</p>

            <p>Too often, they choose self-justification.</p>

            <p>Why? Because of cognitive dissonance&mdash;the psychological tension we feel when our actions don&rsquo;t match our beliefs. When leaders rationalize a bad situation, their emotions settle. Harmony is restored internally, even if the external damage worsens. But when behavior clashes with publicly stated values, the pressure intensifies fast.</p>

            <p>This dynamic becomes especially dangerous when brands have clearly defined their principles. Once an organization publicly commits to certain standards, stakeholders expect consistency. As persuasion expert Robert Cialdini explains, once someone takes a stand, there is a powerful pull to behave in ways that align with that earlier commitment&mdash;even when circumstances have changed.</p>

            <p>Consider Chipotle Mexican Grill. After multiple foodborne illness outbreaks, the company faced intense scrutiny. Why? Because its brand had long emphasized freshness and food integrity. The gap between promise and reality created dissonance&mdash;not just for customers, but likely within the company itself. Adjusting messaging would have meant acknowledging that the original positioning needed revision. And that&rsquo;s psychologically painful.</p>

            <p>But clinging to consistency can be just as damaging. As Ralph Waldo Emerson warned, &ldquo;A foolish consistency is the hobgoblin of little minds.&rdquo; When leaders repeat the same messaging while circumstances shift dramatically, they risk appearing detached&mdash;or worse, indifferent.</p>

            <p>Crisis pressure only compounds the problem. News spreads instantly across traditional and social media. Expectations collide with exposed behavior. Stakeholders demand clarity. Inside the organization, leaders feel an overwhelming need to restore equilibrium. That emotional tidal wave often drives poor judgment.</p>

            <p>Few examples illustrate this better than BP during the 2010 Deepwater Horizon disaster. As millions of gallons of oil spilled into the Gulf of Mexico, CEO Tony Hayward said, &ldquo;I&rsquo;d like my life back.&rdquo; The remark became infamous&mdash;not because he lacked intelligence, but because dissonance and pressure distorted perspective. In trying to regain normalcy for himself, he further damaged the company&rsquo;s reputation.</p>

            <p>Here&rsquo;s the hard truth: every brand will face a crisis eventually. And crises are not calm, analytical moments. They are emotional, high-pressure events fueled by inconsistency between what was promised and what has occurred.</p>

            <p>That&rsquo;s why leaders need more than instinct. They need models, frameworks, and decision-making tools that create structure under stress. Clear frameworks reduce uncertainty, minimize reactive decisions, and help organizations align behavior with values when it matters most.</p>

            <p>Crisis doesn&rsquo;t create character&mdash;it exposes it. And without a disciplined approach, even seasoned executives can say or do the wrong thing at the worst possible time.</p>

            <p>&hellip;</p>

            <p><em>For more advice on navigating reputation crises and managing cognitive dissonance under pressure, you can find <a href="https://geni.us/breakingbadnews">Breaking Bad News</a> on Amazon.</em></p>

            <p>Jeff Hahn grew up on a farm in northeast Iowa in the middle of the 1970s farm crisis. A tornado destroyed his family&rsquo;s farm, so he eventually left Iowa by joining the US Air Force. Jeff&rsquo;s career in public relations and crisis communications includes time at Lockheed, Motorola, and Hahn, his integrated marketing and PR firm.</p>

            <p>The anthem of his farm years is John Mellencamp&rsquo;s &ldquo;Rain on the Scarecrow,&rdquo; but his favorite song of all time is &ldquo;Staying Alive&rdquo; by the Bee Gees. Perhaps unsurprising for a crisis guy, Jeff&rsquo;s favorite movie is <em>Apocalypse Now</em>.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-smart-leaders-make-terrible-decisions-and-how-to-avoid-it&text=Why+Smart+Leaders+Make+Terrible+Decisions" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-smart-leaders-make-terrible-decisions-and-how-to-avoid-it&title=Why+Smart+Leaders+Make+Terrible+Decisions" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-smart-leaders-make-terrible-decisions-and-how-to-avoid-it" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
