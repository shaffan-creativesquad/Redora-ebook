import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'The Myth of Fear: Why People Really Snitch | Scribe Media Blog',
  description:
    "A free excerpt from Russell C. Lathom's book The 21 Myths of Street Life. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/accountability-isnt-the-enemy-confusion-is',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2026/01/pexels-kampus-8171188-1.jpg',
    title: "Accountability Isn’t the Enemy—Confusion Is",
    date: 'Jan 29, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/the-night-watchnight-broke-something-in-me',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-jordan-besson-2051439001-29281308.jpg',
    title: 'The Night Watchnight Broke Something in Me',
    date: 'May 07, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/how-to-finish-writing-a-book',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2021/05/book-ghostwriting-services.jpeg',
    title: 'How to Finish Writing a Book: The Keys to Getting Unstuck',
    date: 'May 07, 2021',
  },
]

export default function TheMythOfFearPage() {
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

            <h1 className="blog-post__title">The Myth of Fear: Why People Really Snitch</h1>

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
            src="https://scribemedia.com/hs-fs/hubfs/blog-featured/2026/book-bites/pexels-max-flinterman-225455-715425.jpg?width=960&height=540"
            alt="The Myth of Fear: Why People Really Snitch"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/the21mythsofstreetlife">The 21 Myths of Street Life</a> by Russell C. Lathom.</em></p>

            <p>When it comes to street life, one of the most persistent myths is that people snitch purely out of fear. It&rsquo;s a convenient explanation&mdash;fear is simple, emotional, and easy to understand. But as anyone who has lived the streets knows, the truth is far more complex. Snitching isn&rsquo;t always about trembling in an interrogation room or panicking under threat; for many, it&rsquo;s a calculated, strategic choice.</p>

            <p>While fear can motivate someone to cooperate with law enforcement, it&rsquo;s often secondary to survival and self-interest. Survival in the streets isn&rsquo;t just about avoiding pain&mdash;it&rsquo;s about gaining control, maintaining power, and securing one&rsquo;s place in an unforgiving world. Some individuals snitch not to save themselves from immediate danger, but to shift the balance of power, protect their future, or exploit opportunities.</p>

            <p>This calculated approach is exemplified in what&rsquo;s known as &ldquo;dry snitching&rdquo;&mdash;subtle, indirect betrayals designed to harm rivals without overtly appearing disloyal. Unlike someone who cracks under pressure, the dry snitch acts with intention, using information as a weapon for leverage, revenge, or social positioning. These acts are deliberate, rooted in strategy rather than panic, and demonstrate that snitching can be a tool of ambition as much as survival.</p>

            <p>History and modern examples alike reinforce that snitching is rarely simple. From the betrayal of Judas in biblical times to notorious figures like mob boss James &ldquo;Whitey&rdquo; Bulger, cooperation with authorities has often been about calculated advantage, not fear. Bulger, for instance, used informant status as a weapon to eliminate rivals while maintaining his criminal empire. This pattern continues today, with some informants operating almost as career players&mdash;simultaneously navigating both sides of the law for personal gain.</p>

            <p>Even in everyday street dynamics, betrayal is often strategic. People may cooperate with law enforcement to exit a gang, protect a new lifestyle, or build influence without directly confronting their enemies. These actions reveal that snitches aren&rsquo;t always weak&mdash;they&rsquo;re sometimes smarter, more calculating, and more in control than the very people they betray.</p>

            <p>Understanding why people snitch challenges the oversimplified idea that fear drives all betrayal. Snitching can stem from ambition, pragmatism, or strategic calculation, not just a desperate bid to survive. Recognizing this nuance is essential for anyone navigating street life, criminal justice, or communities where loyalty and power constantly shift.</p>

            <p>The myth that snitches act solely out of fear not only misrepresents reality&mdash;it leaves people unprepared for the true dynamics of survival, strategy, and influence. Betrayal isn&rsquo;t always born from weakness; sometimes it&rsquo;s born from intelligence, planning, and a willingness to use the rules to one&rsquo;s advantage.</p>

            <p>&hellip;</p>

            <p><em>For more advice on understanding the complex realities of street life and survival strategies, you can find <a href="https://geni.us/the21mythsofstreetlife">The 21 Myths of Street Life</a> on Amazon.</em></p>

            <p><strong>Russell C. Lathom</strong> spent most of his early life raised in street culture. Despite working jobs and going to college, the streets kept dragging him back. Each return shattered new possibilities and eventually led to years in state and federal prisons. Behind bars, Russell began to intellectually challenge the streets and confronted his addiction to crime. He saw, for the first time, the myths that shaped street culture. Admitting these truths meant tearing himself away from a life he loved so he could step into society with a new identity: writer and published author.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-myth-of-fear-why-people-really-snitch&text=The+Myth+of+Fear%3A+Why+People+Really+Snitch" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-myth-of-fear-why-people-really-snitch&title=The+Myth+of+Fear%3A+Why+People+Really+Snitch" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-myth-of-fear-why-people-really-snitch" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
