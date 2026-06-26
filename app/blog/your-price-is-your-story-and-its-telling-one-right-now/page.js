import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Your Price Is Your Story… And It's Telling One Right Now | Scribe Media Blog",
  description:
    "A free excerpt from Edward Lee's book The Last Mile of Trust. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/disrupt-yourself-before-someone-else-beats-you-to-it',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-julio-lopez-75309646-29502358.jpg',
    title: 'Disrupt Yourself Before Someone Else Beats You to It',
    date: 'May 21, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/its-your-plan-how-involving-clients-changes-everything',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-kampus-8439650.jpg',
    title: '"It\'s Your Plan": How Involving Clients Changes Everything',
    date: 'Apr 15, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/why-your-brain-is-your-biggest-investing-problem-and-what-to-do-about-it',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-alesiakozik-6770609.jpg',
    title: 'Why Your Brain Is Your Biggest Investing Problem (And What to Do About It)',
    date: 'Apr 02, 2026',
  },
]

export default function YourPriceIsYourStoryPage() {
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

            <h1 className="blog-post__title">Your Price Is Your Story&hellip; And It&rsquo;s Telling One Right Now</h1>

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
                  <time dateTime="2026-06-11">June 11, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-leeloothefirst-8962460.jpg?width=960&height=540"
            alt="Your Price Is Your Story"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/TheLastMileofTrust">The Last Mile of Trust</a> by Edward Lee.</em></p>

            <p>Whether you realize it or not, your price tag is already sending a message. Every number you put on your product or service is your business&rsquo;s autobiography, only written in dollars instead of words. It says, &ldquo;Here is what we built. Here is what it is worth. Here is why it matters.&rdquo; That&rsquo;s not a marketing decision. <strong>That&rsquo;s an identity decision.</strong></p>

            <p>And most businesses get it completely wrong.</p>

            <p>The default move is to look at what competitors charge, anchor to that number, and call it a day. But that approach skips the only question that actually matters: <strong>what have we created that is genuinely worth paying for?</strong></p>

            <p><strong>Your price needs to answer five questions:</strong></p>
            <ul>
              <li>What have we actually created?</li>
              <li>Why is it better than what existed before?</li>
              <li>Why is it valuable to the people who need it?</li>
              <li>Why does it matter to our specific customer?</li>
              <li>Why is it better than every other option they&rsquo;re considering?</li>
            </ul>

            <p>These aren&rsquo;t questions you hand off to your content team. They&rsquo;re existential questions about who you are and what you stand for—and your customers are already reading the answers in your price, whether you wrote them intentionally or not.</p>

            <p>Seth Godin put it best: great marketing isn&rsquo;t about reaching everyone. It&rsquo;s about reaching your specific people with a message that resonates. Pricing works the same way. <strong>The right price acts like a beacon</strong>—pulling in the customers who are a perfect fit and helping everyone else self-select out. Not based on budget alone, but on alignment and belief.</p>

            <p>Here&rsquo;s how powerful that can be. Take Maya, a business owner who builds a platform to help freelancers run their businesses more professionally—invoicing, tax prep, contracts, client communication. Her competitors charge $12 a month. Maya charges $39. Not because she ran out of cheaper options. Because she isn&rsquo;t selling a dashboard and some templates. She&rsquo;s selling stability, confidence, and growth to serious freelancers who want to go pro. Her price tells that story with total clarity. And her best customers love her for it because it signals she actually takes them seriously.</p>

            <p>That&rsquo;s what confident pricing does. It says: we know exactly what we deliver, we know exactly who it&rsquo;s for, and we&rsquo;re not interested in being everything to everyone. That&rsquo;s how you escape the race to the bottom and stop competing on price alone.</p>

            <p>When your price and your promise align, you earn real trust. When they don&rsquo;t, when you promise exceptional work but price like a commodity, or charge premium rates and deliver shallow value, that gap destroys trust fast.</p>

            <p><strong>Pricing isn&rsquo;t just tactics. It&rsquo;s your truth, translated into numbers.</strong></p>

            <p>…</p>

            <p><em>For more advice on building trust through pricing and positioning, you can find <a href="https://geni.us/TheLastMileofTrust">The Last Mile of Trust</a> by Edward Lee on Amazon.</em></p>

            <p><strong>Edward Lee</strong> is a leading authority on monetization who has spent his career helping entrepreneurs and businesses unlock growth. He is the founder and CEO of HelloAdvisr, whose clients have reached a combined valuation of more than $1.4 billion. In addition to his advisory work, Edward teaches entrepreneurship and international business at UCLA and Loyola Marymount University and executive leadership at the University of Oxford. He hosts <em>Margin for Error</em>, a podcast exploring the highs and lows of building new ventures, and serves as Expert-in-Residence at the Entrepreneurship Centre at the Oxford University Said Business School and at New York-based venture capital firm H/L Ventures.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fyour-price-is-your-story-and-its-telling-one-right-now&text=Your+Price+Is+Your+Story%E2%80%A6+And+It%27s+Telling+One+Right+Now" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fyour-price-is-your-story-and-its-telling-one-right-now&title=Your+Price+Is+Your+Story" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fyour-price-is-your-story-and-its-telling-one-right-now" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
