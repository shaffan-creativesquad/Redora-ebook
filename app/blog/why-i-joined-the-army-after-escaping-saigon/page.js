import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Why I Joined the Army After Escaping Saigon | Scribe Media Blog',
  description:
    "A free excerpt from MyLinh Brewster Shattan's book Raising Athena. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/how-a-small-inventors-patents-may-prove-apple-pay-was-built-on-stolen-ideas',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-shvetsa-4226270.jpg',
    title: "How a Small Inventor's Patents May Prove Apple Pay Was Built on Stolen Ideas",
    date: 'Apr 15, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/the-simple-switch-from-aimless-to-visionary',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-cottonbro-8370867.jpg',
    title: 'The Simple Switch from Aimless to Visionary',
    date: 'May 28, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/book-in-a-box-now-scribe',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2018/08/scribe-abj2.jpg',
    title: 'Book in a Box Rebrands as Scribe Media',
    date: 'Jun 16, 2018',
  },
]

export default function SaigonArmyPage() {
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

            <h1 className="blog-post__title">Why I Joined the Army After Escaping Saigon</h1>

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
            src="https://scribemedia.com/hs-fs/hubfs/pexels-rdne-7467847.jpg?width=960&height=540"
            alt="Soldier in camouflage uniform"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/raisingathena">Raising Athena</a> by MyLinh Brewster Shattan.</em></p>

            <p>I was born into a story that was never supposed to be mine. My father stayed in South Vietnam until the last helicopter lifted off, long after he had sent me, my mother, and my brother home. He felt he owed it to the South Vietnamese&mdash;his allies, his friends&mdash;and he could not leave until he had done everything possible to help them escape. It was never enough, and I carried that weight with me.</p>

            <p>My Saigon years never left me. And though my family was lucky to get out, I could not escape the past any more than my father could, or my mother and her family. That long night in April was hardwired into a nation&rsquo;s consciousness, into my parents&rsquo; lives, and into my own story.</p>

            <p>Twelve years after Saigon fell, I reported to the United States Military Academy at West Point in 1987. Then, thirty years later, my daughter did the same. That parallel stopped me cold. I needed to understand what had driven me to make that choice&mdash;and what was now driving her.</p>

            <p>The fear I felt as a mother kept me awake at night. It began in earnest when my daughter, Cara, decided to attend West Point. I wanted to understand why I had chosen this path, what I had buried or avoided, and what challenges she might face. If I could make sense of my own reasons for going, surely I could make sense of hers.</p>

            <p>When I served, there was a combat exclusion for women. For my generation, that was simply the reality. Cara joined during the Global War on Terrorism with no such restrictions, and recent changes to gender-neutral physical fitness standards meant she would be held to the same bar as the men in combat arms roles. This was a decidedly different force than the one I had joined.</p>

            <p>What scared me? The possibility of death, injury, assault, trauma&mdash;yes to all of those. But also something harder to name: the growing divide between a society and its defenders, between the people who make the decision to go to war and the ones who actually go. Coming to terms with those risks, in the full light of motherhood, was a long and difficult ride.</p>

            <p>The writing that came from all of this was not outlined or plotted. It was essential&mdash;a search for meaning, with discovery often arriving as a surprise. The biggest lesson was the hardest to pin down. It had to do with the stories we tell ourselves about war, about sacrifice, about what it means to serve. When the map doesn&rsquo;t match the ground, you haven&rsquo;t figured out where you are yet. That disorientation, as a mother watching her daughter walk the same path, caught me completely off guard.</p>

            <p>…</p>

            <p><em>For more advice on military service, motherhood, and the stories we inherit, you can find <a href="https://geni.us/raisingathena">Raising Athena</a> on Amazon.</em></p>

            <p><strong>MyLinh Brewster Shattan</strong> was born in Washington, DC, then lived in Saigon until evacuated with her family in 1975. She reported to West Point in 1987, where she was a cadet captain and captain of the women&rsquo;s track team. Upon graduation, she served as an army officer in a newly reunified Germany. She holds master&rsquo;s degrees from Queens University and Florida Southern College. As creator and editor of the <em>TreeHouseLetter</em> and podcast, she writes about the best ideas and writing out there. MyLinh&rsquo;s husband is her West Point classmate. Their three children also graduated from West Point and serve in the US Army.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-i-joined-the-army-after-escaping-saigon&text=Why+I+Joined+the+Army+After+Escaping+Saigon" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-i-joined-the-army-after-escaping-saigon&title=Why+I+Joined+the+Army+After+Escaping+Saigon" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-i-joined-the-army-after-escaping-saigon" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
