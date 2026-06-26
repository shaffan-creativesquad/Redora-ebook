import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Tough Love for California: Compassion with Consequences | Scribe Media Blog',
  description:
    "A free excerpt from Jon Henderson's book California 2.0. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: '/blog/comfort-is-a-false-god-why-discomfort-is-the-shortcut-to-growth',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2026/book-bites/ChatGPT-Image-Feb-26-2026-11_04_24-AM.png',
    title: 'Comfort Is a False God: Why Discomfort Is the Shortcut to Growth',
    date: 'Mar 05, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/the-receptionist-who-was-always-cold-a-lesson-in-strategic-blindness',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-gustavo-fring-6285298.jpg',
    title: 'The Receptionist Who Was Always Cold: A Lesson in Strategic Blindness',
    date: 'May 21, 2026',
  },
  {
    href: '/blog/the-wild-card-who-wouldnt-wait-to-be-chosen',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-rajtatavarthy-171568.jpg',
    title: "The Wild Card Who Wouldn't Wait to Be Chosen",
    date: 'Mar 26, 2026',
  },
]

export default function ToughLoveForCaliforniaPage() {
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

            <h1 className="blog-post__title">Tough Love for California: Compassion with Consequences</h1>

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
            src="https://scribemedia.com/hs-fs/hubfs/blog-featured/2026/book-bites/Screenshot-2026-02-26-at-12.49.01-PM.png?width=960&height=540"
            alt="Tough Love for California: Compassion with Consequences"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/california20">California 2.0</a> by Jon Henderson.</em></p>

            <p>Let&rsquo;s be honest: loving a place means being willing to tell the truth about it.</p>

            <p>For those of us who have lived and worked in the Bay Area, the rise in shoplifting, neighborhood theft, and visible disorder isn&rsquo;t just a political talking point. It&rsquo;s personal. In cities like Oakland, petty crime and organized retail theft have chipped away at something more fragile than storefront glass&mdash;they&rsquo;ve eroded public confidence.</p>

            <p>When major retailers shutter locations near the Oakland airport, it&rsquo;s not because they stopped believing in the community. It&rsquo;s because the math stopped working. Tolerating theft is inflationary: losses get passed on through higher prices, insurance premiums rise, security costs balloon, and neighborhoods hollow out. Everyone pays.</p>

            <p>But the answer isn&rsquo;t ideological extremes. It&rsquo;s balance.</p>

            <p>You can believe deeply in helping people who are struggling and still defend property rights. Those positions are not opposites. They share the same moral foundation: dignity. Real dignity means creating systems that give people a path away from crime&mdash;and holding firm boundaries when that path is rejected.</p>

            <p>Public safety reform must start with accountability. Many officers are asked to serve as therapists, crisis responders, and social workers with only months of training. Meanwhile, departments invest heavily in equipment but underinvest in culture, training, and standards. Trust erodes when systems protect themselves instead of evolving.</p>

            <p>The reckoning that followed the murder of George Floyd exposed a truth many already knew: accountability can&rsquo;t be optional. Reform doesn&rsquo;t mean fewer police. It means better processes, higher standards, walking beats in neighborhoods, and swift removal of those unfit to wear the badge. Respect for law enforcement and insistence on accountability can coexist.</p>

            <p>We also need a smarter approach to homelessness and vice. Giving cash on a corner may ease conscience, but it doesn&rsquo;t solve root causes. A work-and-housing-first strategy&mdash;building rapid, scalable shelter and tying opportunity to responsibility&mdash;restores both safety and purpose. Compassion must be paired with consequence.</p>

            <p>Even controversial ideas deserve practical evaluation. Designated, well-regulated entertainment districts&mdash;structured spaces where adult freedoms are contained and taxed&mdash;could reduce spillover into residential neighborhoods while keeping billions in tourism dollars within the state. Instead of exporting revenue elsewhere, California could reinvest it in housing, infrastructure, and community safety.</p>

            <p>At its core, this vision isn&rsquo;t about punishment. It&rsquo;s about process. In aviation, mistakes are dissected and systems improved. Imagine policing and public policy embracing that same culture of continuous improvement&mdash;studying failures openly, fixing weak links, and prioritizing prevention over optics.</p>

            <p>This is what real balance looks like: law enforcement respected but never above the law; compassion extended but not exploited; freedom structured so that communities thrive.</p>

            <p>&hellip;</p>

            <p><em>For more advice on restoring public safety through accountability and balanced reform, you can find <a href="https://geni.us/california20">California 2.0</a> on Amazon.</em></p>

            <p><strong>Jon Henderson</strong> is a CFP professional, private pilot, entrepreneur, and independent candidate for California governor. A native Californian and proud product of the state&rsquo;s public schools, Jon is a graduate of San Diego State University. For twenty-five years, he has advised families across California&mdash;Republicans and Democrats&mdash;and has witnessed polarization deepen, even as people share far more in common than they realize. The desire to find common ground, restore respect, and regain balance has inspired Jon to write <em>California 2.0</em>. He founded Echo45 Advisors and Echo45 Tax &amp; Estate as fully independent firms dedicated to serving clients at the fiduciary standard, an ethic he wants to incorporate into California governance. Jon lives in the Bay Area with his family.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Ftough-love-for-california-compassion-with-consequences&text=Tough+Love+for+California%3A+Compassion+with+Consequences" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Ftough-love-for-california-compassion-with-consequences&title=Tough+Love+for+California%3A+Compassion+with+Consequences" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Ftough-love-for-california-compassion-with-consequences" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
