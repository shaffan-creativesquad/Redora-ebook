import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: "How a Small Inventor's Patents May Prove Apple Pay Was Built on Stolen Ideas | Scribe Media Blog",
  description:
    "A free excerpt from Matt Moyers' book The Venture Capital Alternative. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/the-softball-questions-investors-ask-that-can-sink-your-pitch',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-aurelijus-u-2148621102-30711884.jpg',
    title: 'The “Softball” Questions Investors Ask That Can Sink Your Pitch',
    date: 'May 01, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/step-inside-the-brooklyn-paramounts-roaring-1928-debut',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-hyrlf-meng-317253942-18413963.jpg',
    title: "Step Inside the Brooklyn Paramount’s Roaring 1928 Debut",
    date: 'May 28, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/why-your-brain-is-your-biggest-investing-problem-and-what-to-do-about-it',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-alesiakozik-6770609.jpg',
    title: 'Why Your Brain Is Your Biggest Investing Problem (And What to Do About It)',
    date: 'Apr 02, 2026',
  },
]

export default function ApplePayPatentsPage() {
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

            <h1 className="blog-post__title">How a Small Inventor&rsquo;s Patents May Prove Apple Pay Was Built on Stolen Ideas</h1>

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
            src="https://scribemedia.com/hs-fs/hubfs/pexels-shvetsa-4226270.jpg?width=960&height=540"
            alt="Person paying using a smartphone"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/theventurecapitalalt">The Venture Capital Alternative</a> by Matt Moyers.</em></p>

            <p>Apple Pay debuted in 2014 to widespread fanfare and changed how millions of people think about paying for things. The untold story behind that launch involves a quiet, brilliant inventor named Satoshi, and it raises uncomfortable questions about how Silicon Valley&rsquo;s biggest companies actually build their products.</p>

            <p>I met Satoshi in the summer of 2019. By then, he had spent years watching Apple profit from technology he believed was his. A Stanford-educated engineer with a double PhD in electrical engineering and computer science, Satoshi had been building contactless payment inventions since the early 2000s. By 2014, when Apple Pay launched, his startup held 75 granted patents directly related to device-based payment systems.</p>

            <p>Apple had approached Satoshi back in 2007, inviting him to join a standard-setting group alongside Microsoft and Google. He attended meetings but never signed an NDA or shared any trade secrets. His instincts told him something was wrong. &ldquo;Apple was fishing for information when I met with them,&rdquo; he told me. &ldquo;It did not feel right to engage with them, so I backed away politely.&rdquo;</p>

            <p>He was right to be cautious. Rather than continuing to compete in a space being swallowed by Big Tech, Satoshi pivoted his company into IT support for professional investment managers. But his original patents remained very much alive.</p>

            <p>When his board tasked me with assessing the value of his IP, my team spent six weeks mining his patent portfolio. We found six patent families foundational to contactless smartphone payments. Our most conservative damages estimate ran into the low billions, and that was before accounting for wearable devices like the Apple Watch.</p>

            <p>Securing litigation funding was the next obstacle. By early 2020, we had four term sheets in hand. Then COVID-19 hit, and two funders pulled out. The two remaining offers looked very different: one provided upfront cash with a lower back-end return, while the other offered nothing upfront but two and a half times more on the outcome. Satoshi&rsquo;s board chose the higher back-end bet. After six more months of prior art searches, the deal finally closed.</p>

            <p>Since then, the world has begun to catch up to what Satoshi already knew. The European Union proposed a $27 billion fine against Apple for its closed NFC payment system&mdash;the very system Satoshi invented. In 2024, Apple agreed under EU pressure to allow third-party providers access to that system. Apple only becomes reasonable when the penalty is severe enough to force the issue.</p>

            <p>For small inventors, the path forward is difficult but navigable. It requires meticulous documentation, patient capital, and the right partners willing to go the full distance.</p>

            <p>…</p>

            <p><em>For more advice on patent monetization and protecting inventor IP, you can find <a href="https://geni.us/theventurecapitalalt">The Venture Capital Alternative</a> on Amazon.</em></p>

            <p><strong>Matt Moyers</strong> is a renowned IP strategist and financial expert with over twenty-five years at the intersection of IP and finance. He has advised on more than 20,000 projects, guiding creators, inventors, and companies through IP valuation, monetization, and financial strategy. The American Invents Act&rsquo;s (AIA&rsquo;s) devastating impact on small inventors inspired Matt to become a passionate advocate for reform of the US patent system. Named an IAM Strategy 300 Global Leader six times, he blends financial acumen with IP expertise. He calls Denver, Colorado, home.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fhow-a-small-inventors-patents-may-prove-apple-pay-was-built-on-stolen-ideas&text=How+a+Small+Inventor%27s+Patents+May+Prove+Apple+Pay+Was+Built+on+Stolen+Ideas" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fhow-a-small-inventors-patents-may-prove-apple-pay-was-built-on-stolen-ideas&title=How+a+Small+Inventor%27s+Patents+May+Prove+Apple+Pay+Was+Built+on+Stolen+Ideas" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fhow-a-small-inventors-patents-may-prove-apple-pay-was-built-on-stolen-ideas" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
