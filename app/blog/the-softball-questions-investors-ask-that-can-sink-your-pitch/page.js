import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'The "Softball" Questions Investors Ask That Can Sink Your Pitch | Scribe Media Blog',
  description:
    "A free excerpt from Adam Crawshaw's book The Doubt Loop. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/the-simple-switch-from-aimless-to-visionary',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-cottonbro-8370867.jpg',
    title: 'The Simple Switch from Aimless to Visionary',
    date: 'May 28, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/the-north-star-of-every-great-book',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2025/12/north-star-.jpg',
    title: 'The North Star of Every Great Book',
    date: 'Dec 17, 2025',
  },
  {
    href: 'https://scribemedia.com/blog/why-i-joined-the-army-after-escaping-saigon',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-rdne-7467847.jpg',
    title: 'Why I Joined the Army After Escaping Saigon',
    date: 'Apr 23, 2026',
  },
]

export default function SoftballQuestionsPage() {
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

            <h1 className="blog-post__title">The &ldquo;Softball&rdquo; Questions Investors Ask That Can Sink Your Pitch</h1>

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
                  <time dateTime="2026-04-30">April 30, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-aurelijus-u-2148621102-30711884.jpg?width=960&height=540"
            alt="Line graph made out of coins"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/thedoubtloop">The Doubt Loop</a> by Adam Crawshaw.</em></p>

            <p>If your pitch lands, the conversation usually drifts into what feels like softball questions. &ldquo;How big is the market?&rdquo; and its polite cousins. Don&rsquo;t be fooled. Those lobs are X-rays. Investors are watching how you handle the subtext to see whether the discipline behind your story matches the poetry. Nail the answers and the momentum keeps flowing. Flub them, and the magic you built up earlier quietly dissolves.</p>

            <p>Here are the five questions I&rsquo;ve learned to decode.</p>

            <p><strong>How big is the market?</strong></p>

            <p>They want to know you&rsquo;ve crunched the numbers, not dreamed them up. Start with the customers you can realistically reach in the next few years. Glossier, for instance, launched by counting the loyal readers of its beauty blog and estimating how many would buy a $16 Boy Brow. It didn&rsquo;t wave at a $500 billion cosmetics pie. Once you&rsquo;ve locked that reachable slice, widen the lens to show how new products multiply it. A grounded base plus a believable path to upside signals you know where the first dollars come from and how to stack the next ones.</p>

            <p><strong>Who are your competitors?</strong></p>

            <p>Investors really mean, &ldquo;Can you describe the playing field and explain why you still score?&rdquo; Tip your hat to the toughest rival. Think of Yeti acknowledging Igloo&rsquo;s grip on cheap coolers, then pointing out the indestructible design and premium branding that let it charge five times more. Respect for the incumbents plus a clear moat beats loud bravado every time.</p>

            <p><strong>What&rsquo;s the business model?</strong></p>

            <p>They know your revenue engine will evolve. They need to see you understand the full menu: one-time sales, subscriptions, usage-based, ad-supported. Pick the one that fits how customers receive value today, and be ready to explain when you&rsquo;d pivot. When Mailchimp shifted from pay-as-you-go credits to tiered subscriptions, it wasn&rsquo;t locked in; the team could still point to scenarios where usage pricing might return.</p>

            <p><strong>How will you acquire users?</strong></p>

            <p>Investors are hunting for one repeatable, affordable channel. Dropbox won early by giving every new user extra storage for referring a friend, a loop that drove millions of sign-ups with almost zero marketing spend. Depth on one proven path beats wishful breadth on ten.</p>

            <p><strong>Why do you want to do this?</strong></p>

            <p>This is your motive, and investors need it served straight. Control, fortune, obsession; be explicit. When Hamdi Ulukaya bought a shuttered Kraft plant to launch Chobani, he told backers he missed the thick, tangy yogurt of his childhood and believed American shoppers deserved better. Because his motive was crystal clear, every board conversation filtered through that lens.</p>

            <p>You&rsquo;ll field a million questions dressed in different costumes. Don&rsquo;t get hypnotized by the outfit. Listen for the beat beneath the melody, answer that, and the momentum you earned holds.</p>

            <p>…</p>

            <p><em>For more advice on navigating investor conversations and raising capital, you can find <a href="https://geni.us/thedoubtloop">The Doubt Loop</a> on Amazon.</em></p>

            <p><strong>Adam Crawshaw</strong> is a startup founder and investor who turned his self-doubt into a competitive edge. As co-founder of Assembly, he helped scale a scrappy software idea that served millions of users and reached a $1.4 billion exit in under three years. Before that, he learned under Michael Moritz at Sequoia, David Bonderman at TPG, and Joe Perella at Perella Weinberg Partners. He&rsquo;s talked with thousands of entrepreneurs, managed hundreds of employees, and made more mistakes than any keynote bio admits.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-softball-questions-investors-ask-that-can-sink-your-pitch&text=The+%22Softball%22+Questions+Investors+Ask+That+Can+Sink+Your+Pitch" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-softball-questions-investors-ask-that-can-sink-your-pitch&title=The+%22Softball%22+Questions+Investors+Ask" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-softball-questions-investors-ask-that-can-sink-your-pitch" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
