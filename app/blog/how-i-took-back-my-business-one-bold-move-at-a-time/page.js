import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How I Took Back My Business One Bold Move at a Time | Scribe Media Blog',
  description:
    "A free excerpt from Suzanne Iovanna's book Reclaiming My Pride. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/practicing-medicine-on-my-terms-from-burnout-to-purpose',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2026/book-bites/ChatGPT-Image-Feb-19-2026-03_50_21-PM.png',
    title: 'Practicing Medicine on My Terms: From Burnout to Purpose',
    date: 'Feb 26, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/book-in-a-box-now-scribe',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2018/08/scribe-abj2.jpg',
    title: 'Book in a Box Rebrands as Scribe Media',
    date: 'Jun 16, 2018',
  },
  {
    href: 'https://scribemedia.com/blog/how-hitting-rock-bottom-taught-me-to-trust-my-intuition',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-tima-miroshnichenko-6463188.jpg',
    title: 'How Hitting Rock Bottom Taught Me to Trust My Intuition',
    date: 'May 01, 2026',
  },
]

export default function TookBackBusinessPage() {
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

            <h1 className="blog-post__title">How I Took Back My Business One Bold Move at a Time</h1>

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
                  <time dateTime="2026-04-23">April 23, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-pixabay-164634.jpg?width=960&height=540"
            alt="Mercedes-Benz vehicles parked in a row"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/reclaimingmypride">Reclaiming My Pride</a> by Suzanne Iovanna.</em></p>

            <p>When I became the head of Pride Motor Group after losing my husband Michael, I inherited more than a family business. I inherited a war.</p>

            <p>James, a business partner who held partial ownership in our dealerships, had spent months taking advantage of my inexperience. He controlled the books, managed the auctions, and surrounded himself with loyal employees who kept me in the dark. What I didn&rsquo;t know was that while he smiled and charmed everyone around him, he was systematically draining money from my business and planning to leave me with nothing.</p>

            <p>I had to fight back. And I had to do it smart.</p>

            <p>My first move was changing advertising agencies. The previous firm had been doing work for James&rsquo;s other dealership, which was wrongfully using the Pride logo. I needed to stand apart. But there was another reason: I needed to become the face of Pride. Even though I was terrified, I filmed my first commercial and discovered something unexpected. I was good at it. In real life, I was the wallflower in crowds, but in front of a camera, I was a force. Go figure.</p>

            <p>When I screened that commercial for James and all the managers in a conference room and unveiled our redesigned logo, the room went silent. Mouths hung open. It was one of the best days of my life.</p>

            <p>From there, I kept moving. I fired employees who were loyal to James instead of me, including my finance director Rick, who had been feeding me bad information and spending half his time at James&rsquo;s dealership. Each firing felt like a small victory.</p>

            <p>Then came the computers. My lawyer brought in a team that swept through the office in about fifteen minutes and seized the hard drives. When we reviewed James&rsquo;s computer, we found an email to his wife stating he planned to destroy me and have all three dealerships to himself within months. That was all I needed to see.</p>

            <p>When I finally took over the used car auctions, something James had actively tried to keep me away from, I immediately started recouping money. He had been quietly pocketing hundreds per car, every Wednesday, for months. Once I started showing up, the scheme stopped cold.</p>

            <p>By the summer of 2016, I had bought James out entirely. It cost me a million dollars just to be free of him. And when the dust settled, I had spent another million on a lawyer who, I later realized, hadn&rsquo;t done nearly enough to hold him accountable. But I was still standing. Bruised, scared, and learning as I went, but standing.</p>

            <p>Some people thought it was foolish to take over a car dealership with no experience in the industry. But I was doing it for my kids, for my in-laws, and for myself. I wasn&rsquo;t going to let anyone take what my family had built.</p>

            <p>…</p>

            <p><em>For more advice on reclaiming your power in business and refusing to back down, you can find <a href="https://geni.us/reclaimingmypride">Reclaiming My Pride</a> on Amazon.</em></p>

            <p>As CEO and president of Pride Motor Group, <strong>Suzanne T. Iovanna</strong> is one of the few women who own and operate car dealerships in the US. Under her leadership, Pride Motor Group won the Lynn Chamber of Commerce &ldquo;Large Business of the Year&rdquo; award in 2024. She actively supports causes like Hyundai&rsquo;s Hope on Wheels walk for cancer, the Jimmy Fund, Chevrolet&rsquo;s Wreaths Across America campaign, Girls Inc., My Brother&rsquo;s Table, and youth events. Suzanne sits on the Board of Trustees of the University of New England, her alma mater. She calls Massachusetts home.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fhow-i-took-back-my-business-one-bold-move-at-a-time&text=How+I+Took+Back+My+Business+One+Bold+Move+at+a+Time" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fhow-i-took-back-my-business-one-bold-move-at-a-time&title=How+I+Took+Back+My+Business+One+Bold+Move+at+a+Time" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fhow-i-took-back-my-business-one-bold-move-at-a-time" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
