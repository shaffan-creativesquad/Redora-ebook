import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Practicing Medicine on My Terms: From Burnout to Purpose | Scribe Media Blog',
  description:
    "A free excerpt from Richard Harris's book White Coat, Heavy Soul. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/how-i-took-back-my-business-one-bold-move-at-a-time',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-pixabay-164634.jpg',
    title: 'How I Took Back My Business One Bold Move at a Time',
    date: 'Apr 23, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/how-a-small-inventors-patents-may-prove-apple-pay-was-built-on-stolen-ideas',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-shvetsa-4226270.jpg',
    title: "How a Small Inventor's Patents May Prove Apple Pay Was Built on Stolen Ideas",
    date: 'Apr 15, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/how-hitting-rock-bottom-taught-me-to-trust-my-intuition',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-tima-miroshnichenko-6463188.jpg',
    title: 'How Hitting Rock Bottom Taught Me to Trust My Intuition',
    date: 'May 01, 2026',
  },
]

export default function PracticingMedicinePage() {
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

            <h1 className="blog-post__title">Practicing Medicine on My Terms: From Burnout to Purpose</h1>

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
            src="https://scribemedia.com/hs-fs/hubfs/blog-featured/2026/book-bites/ChatGPT-Image-Feb-19-2026-03_50_21-PM.png?width=960&height=540"
            alt="Practicing Medicine on My Terms: From Burnout to Purpose"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/whitecoatheavysoul">White Coat, Heavy Soul</a> by Richard Harris.</em></p>

            <p>For years, I questioned whether I chose the right specialty.</p>

            <p>When I transitioned from pharmacist to physician, internal medicine felt like the logical next step. I already understood medications and treatment plans. It seemed like the smoothest path forward&mdash;a practical decision rooted in experience.</p>

            <p>But what began as practicality turned into purpose.</p>

            <p>Internal medicine shaped me into the kind of physician I was meant to become. Internists are trained to see the big picture. We don&rsquo;t just treat symptoms; we study how organ systems interact, how medications and supplements collide, how genetics and environment influence disease risk. We learn to think holistically&mdash;understanding the body not as isolated parts, but as an interconnected system.</p>

            <p>That mindset didn&rsquo;t just shape how I practice medicine. It shaped how I approach business, leadership, and life.</p>

            <p>Today, I run a virtual direct primary care (DPC) clinic focused on metabolic health, deprescribing unnecessary medications, identifying disease risk, and implementing sustainable prevention strategies. And one of the most rewarding things I hear from patients is, &ldquo;I never realized I could feel this good.&rdquo;</p>

            <p>Direct primary care changed everything for me.</p>

            <p>Instead of operating inside a system driven by insurance reimbursements and visit quotas, DPC is built on a subscription-based model. That shift removes the pressure to churn through appointments or recommend unnecessary services. It eliminates the &ldquo;agency problem&rdquo; that can quietly distort medical decision-making.</p>

            <p>When you remove the intermediary, something powerful happens: the doctor&ndash;patient relationship becomes sacred again.</p>

            <p>In traditional healthcare, I often felt pressure, frustration, even hopelessness. In DPC, I feel alignment. I can focus entirely on what serves my patients. I have the time and freedom to build meaningful relationships, develop thoughtful care plans, and help people optimize their health&mdash;not just manage decline.</p>

            <p>This transition didn&rsquo;t happen overnight. It required honest soul-searching, reinvesting in myself, and learning from mentors, books, and conversations. It required facing an identity crisis and asking difficult questions about who I wanted to be&mdash;not just as a physician, but as a person.</p>

            <p>The result? I now practice medicine the way I imagined as a child: with the singular goal of helping people.</p>

            <p>There&rsquo;s room in my life for both the clinician and the entrepreneur. The pharmacist and the physician. The speaker and the healer. The journey hasn&rsquo;t been linear&mdash;but it&rsquo;s been transformative.</p>

            <p>If you&rsquo;re a healthcare professional wrestling with burnout, or a patient wondering whether a better model of care exists, know this: there is another way.</p>

            <p>&hellip;</p>

            <p><em>For more advice on rediscovering purpose in medicine and embracing direct primary care, you can find <a href="https://geni.us/whitecoatheavysoul">White Coat, Heavy Soul</a> on Amazon.</em></p>

            <p><strong>Dr. Richard Harris</strong> is a pharmacist, a board-certified internal medicine physician, and the chief medical officer for Nimbus Healthcare and Script Health. His client-centric view focuses on building relationships and establishing trust through a comprehensive lifestyle medicine system. Dr. Harris has been a guest speaker at several national conferences and has served on advisory boards with leading minds in medicine and holistic wellness. An avid reader, weight lifter, and video game enthusiast, he enjoys sports, traveling, philanthropy, and attending church.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fpracticing-medicine-on-my-terms-from-burnout-to-purpose&text=Practicing+Medicine+on+My+Terms%3A+From+Burnout+to+Purpose" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fpracticing-medicine-on-my-terms-from-burnout-to-purpose&title=Practicing+Medicine+on+My+Terms%3A+From+Burnout+to+Purpose" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fpracticing-medicine-on-my-terms-from-burnout-to-purpose" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
