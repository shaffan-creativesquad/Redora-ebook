import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'The Receptionist Who Was Always Cold: A Lesson in Strategic Blindness | Scribe Media Blog',
  description:
    "A free excerpt from Ganzorig's book Strategy Is Attitude. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/treat-ai-like-your-best-sales-rep-because-it-already-is',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-tim-witzdam-1081250691-32021560.jpg',
    title: 'Treat AI Like Your Best Sales Rep (Because It Already Is)',
    date: 'Apr 15, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/the-future-of-network-marketing-a-vision-worth-building',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2026/01/pexels-pixabay-73871.jpg',
    title: 'The Future of Network Marketing: A Vision Worth Building',
    date: 'Jan 29, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/part-4-18-prove-strategies-to-boost-your-book-sales',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2024/12/18StrategiesBookSales.jpg',
    title: 'PART 4: 18 Proven Strategies to Boost Your Book Sales',
    date: 'Dec 23, 2024',
  },
]

export default function ReceptionistWhoWasAlwaysColdPage() {
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

            <h1 className="blog-post__title">The Receptionist Who Was Always Cold: A Lesson in Strategic Blindness</h1>

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
                  <time dateTime="2026-05-21">May 21, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-gustavo-fring-6285298.jpg?width=960&height=540"
            alt="The Receptionist Who Was Always Cold: A Lesson in Strategic Blindness"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/strategyisattitude">Strategy Is Attitude</a> by Ganzorig.</em></p>

            <p>One story from my years in leadership keeps pulling me back.</p>

            <p>I had just stepped into a senior executive role at a major company in Ulaanbaatar, where winter regularly drags temperatures down to minus 22 degrees Fahrenheit. The headquarters held nearly 400 employees: sharp local executives, Western expats, Ivy League graduates. The balance sheet ran into the billions. From any angle, it was a serious organization run by serious people.</p>

            <p>The front entrance sat about 60 feet from the reception desk. In winter, that door swung open constantly. The building had a foyer with two sets of doors, but both sets were lined up on the same axis. Every time they opened together, the lobby turned into a wind tunnel.</p>

            <p>Within a few days, I noticed our receptionist was freezing. She kept fidgeting with her posture and clothing, trying to look polished while gusts of arctic air slammed into her station. For hours each day, she was essentially working outdoors in business attire.</p>

            <p>What struck me was not the bad design. It was the silence around it.</p>

            <p>I raised it at the next executive committee meeting. Most of the people in that room had walked past that desk every winter for over a decade. They were brilliant. They were experienced. And almost none of them had ever paused to imagine what it felt like to sit in that chair.</p>

            <p>The fix took an afternoon. I asked the COO to reorient the inner door so it opened sideways, and to install a heated air curtain in the foyer. Problem gone.</p>

            <p>But the fix is not the point. The point is the blindness.</p>

            <p>This was not an intelligence problem. It was not an experience problem. It was a perception problem. The evidence had been sitting in plain sight for years. What the leadership team lacked was the inner machinery to see it.</p>

            <p>Now scale that up. Picture the same blindness applied not to a freezing reception desk but to the most decisive variable in a strategic situation. Picture the core risk, constraint, or opportunity feeling trivial to everyone in the room, because none of them have ever sat in the seat where it lives.</p>

            <p>That is strategic blindness in miniature. If leaders cannot feel discomfort at the entrance, they will absolutely miss the constraints choking the business model at its core.</p>

            <p>This is why honest situation analysis feels so punishing for most strategists. Reality is not hidden. It just demands a kind of awareness that does not show up uninvited. You have to sense what others ignore, question what routine has flattened, and look squarely at things you would rather not name.</p>

            <p>Strategy, in my experience, is not really about frameworks or templates. It is about perception. And perception cannot be downloaded from a dashboard.</p>

            <p>…</p>

            <p><em>For more advice on building sharper strategic perception, you can find <a href="https://geni.us/strategyisattitude">Strategy Is Attitude</a> on Amazon.</em></p>

            <p><strong>Ganzorig</strong> grew up herding on the Mongolian steppe, the same landscape that produced history&rsquo;s most effective strategists. He pursued fifteen years of independent research into the subconscious foundations of strategic judgment. He became a CEO at twenty-seven and has spent two decades building companies and teaching strategy. He is a Founder of the Education Reform Movement, the founding chairman of Mandal Financial Group, a World Economic Forum Young Global Leader, and Founder of the World Financial History Museum, which houses more than one thousand artifacts spanning two millennia.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-receptionist-who-was-always-cold-a-lesson-in-strategic-blindness&text=The+Receptionist+Who+Was+Always+Cold%3A+A+Lesson+in+Strategic+Blindness" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-receptionist-who-was-always-cold-a-lesson-in-strategic-blindness&title=The+Receptionist+Who+Was+Always+Cold" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-receptionist-who-was-always-cold-a-lesson-in-strategic-blindness" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
