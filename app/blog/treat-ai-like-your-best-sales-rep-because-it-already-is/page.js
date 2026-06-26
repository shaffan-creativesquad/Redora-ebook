import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Treat AI Like Your Best Sales Rep (Because It Already Is) | Scribe Media Blog',
  description:
    "A free excerpt from Shiv Narayanan's book AI Marketing Blueprint. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/how-a-small-inventors-patents-may-prove-apple-pay-was-built-on-stolen-ideas',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-shvetsa-4226270.jpg',
    title: "How a Small Inventor's Patents May Prove Apple Pay Was Built on Stolen Ideas",
    date: 'Apr 15, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/why-i-stopped-blindly-trusting-my-crohns-doctors',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-cristian-rojas-8459996.jpg',
    title: "Why I Stopped Blindly Trusting My Crohn's Doctors",
    date: 'May 01, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/book-in-a-box-now-scribe',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2018/08/scribe-abj2.jpg',
    title: 'Book in a Box Rebrands as Scribe Media',
    date: 'Jun 16, 2018',
  },
]

export default function TreatAISalesRepPage() {
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

            <h1 className="blog-post__title">Treat AI Like Your Best Sales Rep (Because It Already Is)</h1>

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
            src="https://scribemedia.com/hs-fs/hubfs/pexels-tim-witzdam-1081250691-32021560.jpg?width=960&height=540"
            alt="Smartphone displaying AI chat interface"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/AImarketingblueprint">AI Marketing Blueprint</a> by Shiv Narayanan.</em></p>

            <p>Something shifted in how customers make purchasing decisions, and most businesses haven&rsquo;t caught up yet.</p>

            <p>I was working with Peter, the founder of a software company called ServiceFlow, when I noticed his close rates had improved without any changes to his sales process. The reason wasn&rsquo;t better reps or a sharper pitch. AI platforms had started recommending ServiceFlow in response to queries from customers who already had the exact problem it solves. By the time those customers landed on the website, they were already sold. All that remained was the formality of closing.</p>

            <p>This is what visibility in an AI world actually looks like. Customers aren&rsquo;t &ldquo;searching&rdquo; in the traditional sense anymore. They&rsquo;re querying AI the way they&rsquo;d consult a trusted expert. A recent study found that 41 percent of people have used AI to help navigate a breakup, and 57 percent trust AI more than a friend for dating advice. If people turn to AI for decisions that personal, they will absolutely follow its purchasing recommendations.</p>

            <p>That makes AI the most powerful sales rep and solutions consultant that has ever existed. Enable it properly, and it sends qualified buyers directly to you. Get it wrong, and it sends them to your competition.</p>

            <p>Here&rsquo;s the reframe that changed things for Peter: treat AI platforms like new sales reps who need to be onboarded. Peter ran a rigorous training program for every new hire, covering the market landscape, customer problems, product details, pricing, and competitive battle cards. It was a big reason his company had scaled as well as it had.</p>

            <p>&ldquo;The same work you put into training your reps now has to go into training AI platforms,&rdquo; I explained. That means making your market knowledge, customer insights, pricing, and sales enablement materials visible and accessible to AI.</p>

            <p>In the old world, content like buyer&rsquo;s guides and competitive comparisons lived behind forms or in the hands of sales reps. Customers had to wait for callbacks just to learn your pricing. In an AI world, all of that is training data. If you haven&rsquo;t made it available, the AI improvises using whatever sources it can find, and improvised answers often point customers toward a competitor with better content.</p>

            <p>Customers work through roughly 25 questions before making any purchasing decision, moving from awareness through education, consideration, and decision. They will find answers somewhere. The only question is whether those answers come from you or from someone else.</p>

            <p>ServiceFlow was exactly the right fit for the customers querying AI platforms. The AI just didn&rsquo;t know it yet, because the information to make that call had never been made available.</p>

            <p>Getting that information in front of AI is no longer optional. It is the new sales enablement.</p>

            <p>…</p>

            <p><em>For more advice on AI-driven marketing strategy, you can find <a href="https://geni.us/AImarketingblueprint">AI Marketing Blueprint</a> on Amazon.</em></p>

            <p><strong>Shiv Narayanan</strong> is the founder and CEO of How To SaaS, a management consulting firm that works with leading private equity investors, founders, CEOs, and revenue leaders to transform their companies and scale their enterprise value. He has helped B2B companies create hundreds of millions of dollars in pipeline and revenue with marketing, demand generation, and content. Shiv is also the two-time bestselling author of the books <em>Post-Acquisition Marketing</em> and <em>Exit-Ready Marketing</em> and the host of the <em>Private Equity Value Creation Podcast</em>. Previously, he served as the CMO of Wild Apricot, which was acquired by Rubicon Technology Partners in 2017 and flipped to Pamlico Capital in 2018.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Ftreat-ai-like-your-best-sales-rep-because-it-already-is&text=Treat+AI+Like+Your+Best+Sales+Rep+%28Because+It+Already+Is%29" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Ftreat-ai-like-your-best-sales-rep-because-it-already-is&title=Treat+AI+Like+Your+Best+Sales+Rep+%28Because+It+Already+Is%29" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Ftreat-ai-like-your-best-sales-rep-because-it-already-is" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
