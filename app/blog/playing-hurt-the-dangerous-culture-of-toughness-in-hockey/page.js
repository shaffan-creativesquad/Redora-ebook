import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Playing Hurt: The Dangerous Culture of Toughness in Hockey | Scribe Media Blog',
  description:
    "A free excerpt from Behn Wilson's book Gloves Off. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/book-endorsements-blurbs',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2018/11/How-to-Get-Incredible-Endorsements-and-Blurbs-for-Your-Book.jpg',
    title: 'How to Get Incredible Endorsements and Blurbs for Your Book',
    date: 'Nov 09, 2018',
  },
  {
    href: 'https://scribemedia.com/blog/i-only-had-two-options.-heres-what-i-chose',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-rdne-7467927.jpg',
    title: "I Only Had Two Options. Here's What I Chose.",
    date: 'Apr 02, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/mark-aho-building-wealth-and-living-in-faith',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2019/05/mark-aho-1-700x406.jpg',
    title: "How Mark Aho Used His Book to Share His Story, His Faith, and His Philosophy",
    date: 'May 15, 2019',
  },
]

export default function PlayingHurtPage() {
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

            <h1 className="blog-post__title">Playing Hurt: The Dangerous Culture of Toughness in Hockey</h1>

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
                  <time dateTime="2026-03-19">March 19, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-tony-schnagl-6469030.jpg?width=960&height=540"
            alt="Hockey Face Off"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/glovesoff">Gloves Off</a> by Behn Wilson.</em></p>

            <p>At eighteen years old, playing in my final year of junior hockey, I took a puck directly to the temple during a road game against the Sudbury Wolves. No helmet protection. No warning. Just a stray shot that missed the net by ten feet and found my head instead.</p>

            <p>I went down instantly. When things came back into focus, I was on my hands and knees, blood dripping onto the ice beneath me. I was stitched up in the dressing room and sent right back out.</p>

            <p>I had a concussion. I played the rest of the game anyway.</p>

            <p>That was the culture. When a coach or trainer asked if you were good to go, the answer was always yes. No exceptions, no discussion. As my father had drilled into me from the beginning: <em>you never let anyone else take your shift.</em> By the time I was eighteen, that mindset wasn&rsquo;t a choice anymore&mdash;it was hardwired. Saying you were too hurt to play simply wasn&rsquo;t something players did.</p>

            <p>The next morning, the consequences of that decision were impossible to ignore. The swelling around my temple had ballooned so severely overnight that I couldn&rsquo;t open my eye. I tried prying my eyelids apart with my fingers. It didn&rsquo;t work. The eye was swollen shut, held together only by stitches that looked ready to tear open at the slightest touch. When I finally managed to force the eye open, my entire eyeball was bloodshot, red as a cherry. I suspected a broken bone somewhere in there. I probably needed an X-ray. Maybe a specialist.</p>

            <p>We had a game that night. I played.</p>

            <p>My plan going in was simple: no fights, stick held high to protect the wound. Clean, cautious, controlled. Then my defense partner got run over in the corner, and everything unraveled. A hit turned into a scuffle, the scuffle turned into a bench-clearing brawl, and suddenly I was standing across from Ted Nolan&mdash;a tough, scrappy competitor who had no idea what kind of desperate, cornered rage he was about to run into.</p>

            <p>With one functioning eye and stitches on the verge of splitting open, there was no strategy left, only instinct. I fought with everything I had, throwing punches fast enough and hard enough that he never got close to my face. I won the fight. Ted, bloodied and likely nursing a broken nose, came back for a second round. I won that one too.</p>

            <p>When it was all over, players scattered across the ice collecting gloves and sticks, some bleeding, some heading to the penalty box, my only thought was that I had saved my eye. But standing there, exhausted and still in pain, I couldn&rsquo;t help but wonder whether it would have just been smarter to sit the game out entirely.</p>

            <p>It&rsquo;s a question that cuts to the heart of a culture that prioritized toughness over everything else, including basic health and safety.</p>

            <hr />

            <p><em>For more advice on mental toughness, resilience, and what it really takes to compete at the highest level, you can find <a href="https://geni.us/glovesoff">Gloves Off</a> on Amazon.</em></p>

            <p><strong>Behn Wilson</strong> is a former professional hockey player. Drafted sixth overall in the first round, Behn played with the Philadelphia Flyers for five years. He was later traded to the Chicago Blackhawks, with whom he played for an additional five years. During the 1979 NHL season, Behn competed in the Stanley Cup Finals with the Flyers and, in 1980, participated in the NHL All-Star Game. A native of Toronto, Ontario, Canada, Behn retired in 1988 and enjoys traveling the world with his wife, Rita. They live in Wyoming and Florida, enjoying time with their children and grandchildren.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fplaying-hurt-the-dangerous-culture-of-toughness-in-hockey&text=Playing+Hurt%3A+The+Dangerous+Culture+of+Toughness+in+Hockey" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fplaying-hurt-the-dangerous-culture-of-toughness-in-hockey&title=Playing+Hurt%3A+The+Dangerous+Culture+of+Toughness+in+Hockey" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fplaying-hurt-the-dangerous-culture-of-toughness-in-hockey" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
