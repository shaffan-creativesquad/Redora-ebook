import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'The Quiet Way We Teach Kids to Distrust Themselves | Scribe Media Blog',
  description:
    "A free excerpt from Yarona Boster's book Unspoken Signals. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/the-wild-card-who-wouldnt-wait-to-be-chosen',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-rajtatavarthy-171568.jpg',
    title: "The Wild Card Who Wouldn't Wait to Be Chosen",
    date: 'Mar 26, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/why-your-business-lives-or-dies-by-the-team-you-build',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-tima-miroshnichenko-5439368.jpg',
    title: 'Why Your Business Lives or Dies by the Team You Build',
    date: 'Apr 02, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/the-night-watchnight-broke-something-in-me',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-jordan-besson-2051439001-29281308.jpg',
    title: 'The Night Watchnight Broke Something in Me',
    date: 'May 07, 2026',
  },
]

export default function TheQuietWayPage() {
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

            <h1 className="blog-post__title">The Quiet Way We Teach Kids to Distrust Themselves</h1>

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
            src="https://scribemedia.com/hs-fs/hubfs/pexels-ron-lach-10554466.jpg?width=960&height=540"
            alt="Child making the bed"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/unspokensignals">Unspoken Signals</a> by Yarona Boster.</em></p>

            <p>One of the deepest psychological needs any person has is the need for autonomy. According to Self Determination Theory, autonomy isn&rsquo;t about independence or isolation. It&rsquo;s the feeling of agency, the sense that your actions are self-directed and aligned with your identity. It&rsquo;s the inner experience of, &ldquo;I have a say in my world. I can choose. I can act. I can feel what I feel, and that feeling is mine.&rdquo;</p>

            <p>For kids, autonomy builds internal control. Not control over others, but over their own body, choices, and emotional landscape. That&rsquo;s how they learn to trust themselves. When that need is supported, children grow resilience, motivation, and a grounded sense of self. When it&rsquo;s thwarted, they may comply outwardly while feeling disconnected within.</p>

            <p>Long before they have words, children express their needs through their bodies. A baby arches away from a spoon. A toddler flings off a jacket. A preschooler refuses your hand in the parking lot. These aren&rsquo;t random acts. They&rsquo;re early expressions of agency.</p>

            <p>I remember when Connor was two and wouldn&rsquo;t wear socks. It was winter. I was frustrated. I tried reasoning, bribing, even sneaking them on while he was distracted. Nothing worked. Finally, I sat down and asked, &ldquo;What&rsquo;s wrong with the socks?&rdquo; He said, &ldquo;They squeeze.&rdquo; The size was too small, and they hurt him. Once I found a larger pair, he wore them happily.</p>

            <p>It wasn&rsquo;t about the socks. It was about sensation. It was about being listened to.</p>

            <p>When we override these signals because we are in a rush, feel embarrassed, or think we know better, we unintentionally teach children to override themselves. We teach them their body is negotiable. That their &ldquo;no&rdquo; is conditional. When we pause and listen instead, we teach them their body is trustworthy. That their instincts are worth honoring.</p>

            <p>Children are also exquisitely attuned to power dynamics. They know when a choice is real and when it is performative. &ldquo;Red cup or blue cup&rdquo; is a real choice. &ldquo;Clean up now or lose your screen time&rdquo; is not.</p>

            <p>A friend once shared a story that still sits heavy in my chest. Her daughter had been struggling with transitions. One day, she told her, &ldquo;You can get dressed now or lose your playdate later.&rdquo; Her daughter froze. Then she whispered with tears in her eyes, &ldquo;That is not a real choice, mommy.&rdquo; And she was right.</p>

            <p>My friend cried telling me that story. Not because she had done something terrible, but because she had seen it clearly. She had wrapped control in the language of autonomy, and her daughter had seen through it.</p>

            <p>Real choice matters. &ldquo;You can decide if you want help or want to try it on your own.&rdquo; These choices say, &ldquo;I trust you to listen to yourself.&rdquo; And when we mess it up, we can repair it. &ldquo;That wasn&rsquo;t a real choice. I&rsquo;m sorry.&rdquo; That repair teaches children that even grown-ups are still learning how to honor autonomy.</p>

            <p>…</p>

            <p><em>For more advice on raising children who trust themselves, you can find <a href="https://geni.us/unspokensignals">Unspoken Signals</a> on Amazon.</em></p>

            <p><strong>Yarona Boster</strong> is an Advanced Certified Life Coach, certified speaker coach, TEDx speaker, TEDx event moderator, and a two-time international bestselling author. With nearly two decades spent in early childhood and human development, psychology, and coaching, Yarona cohosts <em>The Evolution of Parenting</em> podcast and helps people craft emotionally resonant messages for world stages. Her TEDx talk explores parenting and foundational loss, a subject shaped by her numerous experiences with death and the dying process. From parents to world leaders, Yarona empowers people to lead and connect with empathy, resilience, and purpose through transformative communication.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-quiet-way-we-teach-kids-to-distrust-themselves&text=The+Quiet+Way+We+Teach+Kids+to+Distrust+Themselves" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-quiet-way-we-teach-kids-to-distrust-themselves&title=The+Quiet+Way+We+Teach+Kids+to+Distrust+Themselves" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-quiet-way-we-teach-kids-to-distrust-themselves" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
