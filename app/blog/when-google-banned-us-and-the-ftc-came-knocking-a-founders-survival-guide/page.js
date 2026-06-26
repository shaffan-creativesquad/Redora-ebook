import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: "When Google Banned Us and the FTC Came Knocking: A Founder's Survival Guide | Scribe Media Blog",
  description:
    "A free excerpt from Ali Moiz and Murtaza Hussain's book 3 Startups, 40 Pivots. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/why-every-founder-should-consider-writing-a-book',
    img: null,
    title: 'Why Every Founder Should Consider Writing a Book',
    date: 'Jul 03, 2025',
  },
  {
    href: 'https://scribemedia.com/blog/inclusive-practices-that-close-the-wage-gap',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-edmond-dantes-8068836.jpg',
    title: 'Inclusive Practices That Close the Wage Gap',
    date: 'May 21, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/why-a-top-ghostwriter-chose-scribe-for-his-debut-novel',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2025/12/adam-skolnick.jpg',
    title: 'Why a Top Ghostwriter Chose Scribe for His Debut Novel',
    date: 'Dec 02, 2025',
  },
]

export default function WhenGoogleBannedUsPage() {
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

            <h1 className="blog-post__title">When Google Banned Us and the FTC Came Knocking: A Founder&rsquo;s Survival Guide</h1>

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
            src="https://scribemedia.com/hs-fs/hubfs/blog-featured/2026/book-bites/ChatGPT-Image-Feb-26-2026-10_48_22-AM.png?width=960&height=540"
            alt="When Google Banned Us and the FTC Came Knocking: A Founder's Survival Guide"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/3startups40pivots">3 Startups, 40 Pivots</a> by Ali Moiz and Murtaza Hussain.</em></p>

            <p>We thought we&rsquo;d finally cracked it.</p>

            <p>After struggling to grow our own Chrome extension, we decided to build something bigger: an ad network for Chrome extensions. Mobile ad networks were exploding, but no one had built one for Chrome. So we did.</p>

            <p>Our first product, Free Weekly Apps, allowed desktop users to discover and install free Android apps directly onto their phones. We built new technology that connected a user&rsquo;s Chrome browser to their Google Play account. It worked. Mobile game developers loved it. Within weeks, we had $15 million in ad purchase orders lined up.</p>

            <p>For the first time, it felt like real scale.</p>

            <p>Then came the moment every founder dreads.</p>

            <p>A handful of users complained that apps were &ldquo;installing themselves.&rdquo; They weren&rsquo;t&mdash;users had opted in&mdash;but confusion spread quickly. Google noticed. They didn&rsquo;t like how we matched Google Play emails between desktop and mobile. Overnight, they banned us, delisted our clients&rsquo; apps, and effectively killed the product.</p>

            <p>Losing our own revenue hurt. Getting our partners&rsquo; apps banned because they trusted us was worse. We shut everything down and walked away from Chrome entirely.</p>

            <p>A couple of years later, just when we thought it was behind us, we received a letter from the FTC. Google had reported us. The Federal Trade Commission alleged privacy violations and spyware. We knew the claims were unfounded&mdash;but that didn&rsquo;t make it less terrifying. Fighting a federal case can cost millions in legal fees. We didn&rsquo;t have millions.</p>

            <p>We found a local lawyer, made our case, and ultimately walked away with no fines&mdash;just a commitment to strengthen our privacy disclosures. Still, the ordeal dragged on for years. Stress. Legal calls. Due diligence questions from future investors. When Sequoia and Andreessen Horowitz later evaluated us, this issue surfaced every time.</p>

            <p>Here&rsquo;s what saved us: we never stopped communicating.</p>

            <p>Even when everything was falling apart, we sent monthly investor updates. No spin. No disappearing act. Just honest reporting. Over time, those updates built trust. Investors don&rsquo;t just need to see your wins&mdash;they need to understand how you think when you&rsquo;re losing.</p>

            <p>Writing those updates also forced clarity. As Paul Graham has said, good writing is good thinking. Putting chaos into words helps you see patterns. It becomes a monthly report card&mdash;and sometimes, therapy.</p>

            <p>We also learned something deeper: startups run on founder energy. If you wake up excited about the problem, you&rsquo;ll keep going. If that energy dies, the company dies with it.</p>

            <p>That doesn&rsquo;t mean clinging to broken ideas. Stubbornness kills more startups than competition ever will. Flexibility wins. Pivoting is painful&mdash;you throw away months of work and start from zero&mdash;but sometimes it&rsquo;s the only path forward.</p>

            <p>What ultimately carried us through wasn&rsquo;t ego. It was fulfillment. It was the grind of building something real. And most of all, it was our co-founder relationship. When your identity isn&rsquo;t tied to being right, but to building something meaningful together, you can survive almost anything.</p>

            <p>&hellip;</p>

            <p><em>For more advice on surviving startup pivots, regulatory crises, and the emotional realities of entrepreneurship, you can find <a href="https://geni.us/3startups40pivots">3 Startups, 40 Pivots</a> on Amazon.</em></p>

            <p><strong>Murti Hussain</strong> and <strong>Ali Moiz</strong> have nearly forty years of combined experience in building online companies. Together, they co-founded companies including Peanut Labs (acquired by Dynata ~$30m), Streamlabs (acquired by Logitech ~$170m), and Stonks (current). They have raised over $50 million in venture capital from Sequoia, a16z, and others. Angel investors and mentors to founders, they hold PhDs in failure and not giving up.</p>

            <p><strong>Murti</strong> is a competitive squash player, surfer, aviation enthusiast, and licensed jet pilot. He lives with his fianc&eacute;e, Seda, and their two dogs.</p>

            <p><strong>Ali</strong> enjoys writing children&rsquo;s books. He lives with his wife, Sarah, and his two children.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhen-google-banned-us-and-the-ftc-came-knocking-a-founders-survival-guide&text=When+Google+Banned+Us+and+the+FTC+Came+Knocking" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhen-google-banned-us-and-the-ftc-came-knocking-a-founders-survival-guide&title=When+Google+Banned+Us+and+the+FTC+Came+Knocking" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhen-google-banned-us-and-the-ftc-came-knocking-a-founders-survival-guide" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
