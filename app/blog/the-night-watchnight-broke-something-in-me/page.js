import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'The Night Watchnight Broke Something in Me | Scribe Media Blog',
  description:
    "A free excerpt from Jasper Cove's book Through the Shadow of Fear. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/book-in-a-box-now-scribe',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2018/08/scribe-abj2.jpg',
    title: 'Book in a Box Rebrands as Scribe Media',
    date: 'Jun 16, 2018',
  },
  {
    href: 'https://scribemedia.com/blog/step-inside-the-brooklyn-paramounts-roaring-1928-debut',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-hyrlf-meng-317253942-18413963.jpg',
    title: "Step Inside the Brooklyn Paramount's Roaring 1928 Debut",
    date: 'May 28, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/how-hitting-rock-bottom-taught-me-to-trust-my-intuition',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-tima-miroshnichenko-6463188.jpg',
    title: 'How Hitting Rock Bottom Taught Me to Trust My Intuition',
    date: 'May 01, 2026',
  },
]

export default function NightWatchnightPage() {
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

            <h1 className="blog-post__title">The Night Watchnight Broke Something in Me</h1>

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
                  <time dateTime="2026-05-07">May 07, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-jordan-besson-2051439001-29281308.jpg?width=960&height=540"
            alt="Empty church pews"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/throughtheshadowoffear">Through the Shadow of Fear</a> by Jasper Cove.</em></p>

            <p>The Watchnight service of 1985 began at eight and dragged on past midnight, sermon after sermon hammering us with warnings of the Great Tribulation, the mark of the beast, and eternal damnation. As a young teenager already drowning in spiritual turmoil, I felt the fear settle into the sanctuary like a fog I couldn&rsquo;t escape. Just before midnight, a woman wailed in tongues, her body contorting beneath a message I was certain meant something terrible. Then a man rose to his feet and prophesied that Jesus was returning that very night, and I ran to the altar with everyone else, frantically trying to recall every sin from the past week, right down to the times I had burped without saying excuse me.</p>

            <p>When the service finally ended and we drove home in our 1984 Buick, my mind spiraled into its familiar descent: eternal torment, the number 666, God&rsquo;s unyielding wrath. Less than a mile from the church, we crested a hill and saw flashing red and blue lights blocking the road. A drunk driver had hit Mary and Carl, a sweet couple from our church, head-on, and their car was demolished. Something inside me broke that night. I was too old to cry in front of my parents and too scared to ask for a hug, so I stuffed it all inside while my body began to shake uncontrollably.</p>

            <p>That ride home marked the beginning of years of obsessive nightly rituals. I would brush my teeth and floss not because I wanted to but because skipping might be disobedience, and disobedience was sin, and unconfessed sin meant I could split hell wide open in my sleep. Each night I read the Psalms, then condemned myself for choosing short chapters, then forced myself through longer ones, then questioned whether I had really read at all. I checked outlets, convinced the devil had loosened them to start a fire. I locked the front door, then unlocked it, then locked it again just to be sure. One Christmas, I unplugged the tree lights three times before bed, certain the joy of soft light wasn&rsquo;t worth the risk of dying in flames.</p>

            <p>By morning, the cycle just kept turning. At school, I bounced my eyes whenever a girl passed, then ran to a bathroom stall to pray the sinner&rsquo;s prayer between classes. I picked black spots off chips, terrified they were cancer sent as punishment. I refused mushrooms because one might be poisonous, and sickness would surely mean God&rsquo;s wrath. Looking back, it is clear I had spiraled into OCD, born from the hypervigilance drilled into me from the pulpit, where every preacher reinforced one underlying truth: you are never safe.</p>

            <p>…</p>

            <p><em>For more advice on healing from religious trauma and the fear that quietly shapes your faith, you can find <a href="https://geni.us/throughtheshadowoffear">Through the Shadow of Fear</a> on Amazon.</em></p>

            <p>Author, musician, survivor, and advocate <strong>Jasper Cove</strong> escaped the suffocating grip of a high-control church as well as the incessant fear and anxiety it produced. Inspired by the mind&ndash;body science of Dr. Joe Dispenza, Jasper rewired his fear-bound nervous system to create a life of freedom and resilience. Today, he coaches others to break free from religious trauma and limiting patterns.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-night-watchnight-broke-something-in-me&text=The+Night+Watchnight+Broke+Something+in+Me" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-night-watchnight-broke-something-in-me&title=The+Night+Watchnight+Broke+Something+in+Me" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-night-watchnight-broke-something-in-me" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
