import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: "There's No Perfect Time. There's Only Now. | Scribe Media Blog",
  description:
    "A free excerpt from Tommy Short's book The Call I Almost Missed. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/the-speech-nobody-knew-almost-didnt-happen',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-borta-2790256-4331578.jpg',
    title: "The Speech Nobody Knew Almost Didn't Happen",
    date: 'Mar 26, 2026',
  },
  {
    href: '/blog/your-price-is-your-story-and-its-telling-one-right-now',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-leeloothefirst-8962460.jpg',
    title: "Your Price Is Your Story… And It's Telling One Right Now",
    date: 'Jun 11, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/the-north-star-of-every-great-book',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2025/12/north-star-.jpg',
    title: 'The North Star of Every Great Book',
    date: 'Dec 17, 2025',
  },
]

export default function TheresNoPerfectTimePage() {
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

            <h1 className="blog-post__title">There&rsquo;s No Perfect Time. There&rsquo;s Only Now.</h1>

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
                  <time dateTime="2026-04-02">April 02, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-didsss-1367229.jpg?width=960&height=540"
            alt="Person holding a smartphone"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/thecallIalmostmissed">The Call I Almost Missed</a> by Tommy Short.</em></p>

            <p>I didn&rsquo;t come up with the idea during a slow season. There was no sabbatical, no mountaintop moment, no built-in support system. I had just launched a business as an executive coach and keynote speaker. My wife was still grieving the loss of her mother. My dad&rsquo;s health was uncertain. We had two kids at home, both under four years old. Our world was already stretched thin.</p>

            <p>And then, at 3 a.m. on June 28, 2023, one question woke me up and refused to leave: What if you turned your cell phone off for a year?</p>

            <p>I didn&rsquo;t tell anyone. I didn&rsquo;t write it down. I just turned it over in my head a hundred different ways. I imagined what I&rsquo;d lose. What I&rsquo;d gain. How it would affect my family, my business, my relationships. No matter how hard I tried to shake it, the idea stayed. It didn&rsquo;t feel like a hobby or an experiment. It felt like a calling. Wild and stupid and sacred all at once.</p>

            <p>I knew two things right away. First, waiting until January 1 would kill it. The longer I sat with the idea, the louder my fear would get. Logic would eventually win, and I would talk myself out of it entirely. Second, I wasn&rsquo;t completely sure why I was doing it. That clarity came a few weeks in, when it became undeniable that this had come from somewhere bigger than me.</p>

            <p>So on August 6, 2023, the second anniversary of starting my business, I turned my phone off. No announcement. No farewell post. I sat on the edge of my bed, held the phone in my hand, and pressed the button. When the screen went black, the silence wasn&rsquo;t just around me. It was in me. I walked into my closet and set the phone on a shelf next to a stack of shorts. That&rsquo;s where it would stay for the next 365 days.</p>

            <p>Before that moment, I told my wife. We were on a walk, the dog with us, sun out, calm air. I said I was going to turn my phone off for a year. She said, without hesitation: &ldquo;Absolutely not.&rdquo;</p>

            <p>She wasn&rsquo;t cruel. She was scared and tired and still grieving. And honestly, I wasn&rsquo;t really asking. I had already decided. That&rsquo;s one of my flaws. In marriage, being decisive to a fault isn&rsquo;t always a strength. Sometimes it&rsquo;s a shortcut through someone else&rsquo;s fear.</p>

            <p>We finished the walk in silence. And still, something in me said: Do it anyway. Not in rebellion, but in obedience to something I didn&rsquo;t yet fully understand.</p>

            <p>This year didn&rsquo;t give me all the answers. But it stripped away every lie I had been living. And it started with one simple truth: there is no perfect time. Only now.</p>

            <p>&hellip;</p>

            <p><em>For more advice on answering your calling and embracing the unknown, you can find <a href="https://geni.us/thecallIalmostmissed">The Call I Almost Missed</a> by Tommy Short on Amazon.</em></p>

            <p>Speaker and writer <strong>Tommy Short</strong> focuses on helping high-performing leaders reclaim presence in a distracted world. A former Division I Men&rsquo;s College Basketball Referee, for nearly two decades he officiated elite-level games including Olympic training camps and nationally televised matchups. When he stepped away from his phone for 365 days, he confronted his deepest fears about identity, success, and faith. His story, with its raw honesty and life-changing insights, has resonated with executives, athletes, and parents alike.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Ftheres-no-perfect-time.-theres-only-now&text=There%27s+No+Perfect+Time.+There%27s+Only+Now." target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Ftheres-no-perfect-time.-theres-only-now&title=There%27s+No+Perfect+Time.+There%27s+Only+Now." target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Ftheres-no-perfect-time.-theres-only-now" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
