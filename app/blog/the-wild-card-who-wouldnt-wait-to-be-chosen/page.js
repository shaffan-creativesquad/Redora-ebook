import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: "The Wild Card Who Wouldn't Wait to Be Chosen | Scribe Media Blog",
  description:
    "A free excerpt from Danielle Mills Walden's book Scratching the Surface. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: '/blog/dont-aspire-to-glory.-aspire-to-work',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-startup-stock-photos-7372.jpg',
    title: "Don't Aspire to Glory. Aspire to Work.",
    date: 'Mar 26, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/the-receptionist-who-was-always-cold-a-lesson-in-strategic-blindness',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-gustavo-fring-6285298.jpg',
    title: 'The Receptionist Who Was Always Cold: A Lesson in Strategic Blindness',
    date: 'May 21, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/why-i-stopped-blindly-trusting-my-crohns-doctors',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-cristian-rojas-8459996.jpg',
    title: "Why I Stopped Blindly Trusting My Crohn's Doctors",
    date: 'May 01, 2026',
  },
]

export default function TheWildCardPage() {
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

            <h1 className="blog-post__title">The Wild Card Who Wouldn&rsquo;t Wait to Be Chosen</h1>

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
                  <time dateTime="2026-03-26">March 26, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-rajtatavarthy-171568.jpg?width=960&height=540"
            alt="Spectators watching tennis at an outdoor court"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/scratchingthesurface">Scratching the Surface</a> by Danielle Mills Walden.</em></p>

            <p>Nobody hands you a seat at the table. Sometimes you have to find the back door.</p>

            <p>My dad understood that. He tracked pro tennis tournaments obsessively, looking specifically for days when multiple events overlapped. When top players had to split between tournaments, draw sheets had openings&mdash;wild card spots for players who wouldn&rsquo;t normally qualify. That was my way in. He found those gaps and sent me to fill them.</p>

            <p>That&rsquo;s how I ended up at the Cincinnati Open, one of the largest tennis events in the United States, ranked around 500 in the world. These were Serena- and Venus-level players. Not Danielle-level players. But I was there, my name on a locker tag next to players I had idolized, trying my best to look like it was just another Tuesday.</p>

            <p>My opponent was Sorana C&icirc;rstea, a Romanian junior who would eventually reach a singles ranking of 21 in the world. We played on the grandstand court, in front of thousands of people. I had never been so nervous in my life. But the pressure wasn&rsquo;t really on me. If she lost a game, she&rsquo;d look bad. If I lost, I&rsquo;d just look exactly like what I was: an underdog who wasn&rsquo;t supposed to be there.</p>

            <p>I didn&rsquo;t win the match. But I didn&rsquo;t get bageled either. I won games. I walked away with around $20,000, the most I had ever been paid to play tennis, and I hadn&rsquo;t even won the tournament. More than the money, I had a taste of what it felt like to compete at the highest level, and I wanted more of it.</p>

            <p>Those wild card moments kept the dream alive. Without my dad campaigning for me, working every angle he could find, they never would have happened. Not every sports parent does that for their kid, and I&rsquo;ll never stop being grateful.</p>

            <p>Over time, I learned to campaign for myself. I didn&rsquo;t have an agent. Sponsors weren&rsquo;t coming to find me. So I went to find them. I built my pitch, worked on my photos and my speaking, and reached out to Yonex and K-Swiss directly with proposals. They both said yes. Standing in front of a mirror in K-Swiss gear with a Yonex racket in hand, I let myself say it out loud: you were the afterthought, Danielle. Look at where you are now.</p>

            <p>Then came the hardest decision of my career. In 2009, my senior year of high school, I had to choose between going pro full-time or accepting a college scholarship. I was playing the best tennis of my life. But I was also tired of living under my parents&rsquo; roof, answering to everyone, after years of traveling the world and being treated like an adult.</p>

            <p>In the end, my desire for freedom won. College meant independence. Pro tennis, at that stage, still meant going home.</p>

            <p>It wasn&rsquo;t giving up on the dream. It was betting on myself in a different way. All it took was one win, one tournament, and everything could change.</p>

            <p>&hellip;</p>

            <p><em>For more advice on betting on yourself and creating your own opportunities, you can find <a href="https://geni.us/scratchingthesurface">Scratching the Surface</a> on Amazon.</em></p>

            <p><strong>Danielle Mills Walden</strong> is the founder and CEO of HEADSTRONG LLC, where she leverages her years as a professional tennis player into practical, actionable success strategies for business and sports professionals. Focusing on mindset, personal branding, and perseverance, Danielle delivers her message through private coaching, workshops, speaking engagements, and the HEADSTRONG Podcast. Danielle&rsquo;s first book, <em>How to Master LinkedIn and Separate Yourself from the Masses</em>, guides readers through the critical steps of setting up and maintaining an effective LinkedIn profile and presence. <em>Scratching the Surface</em> tells how she developed the skills to become an entrepreneur, coach, speaker, and author.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-wild-card-who-wouldnt-wait-to-be-chosen&text=The+Wild+Card+Who+Wouldn%27t+Wait+to+Be+Chosen" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-wild-card-who-wouldnt-wait-to-be-chosen&title=The+Wild+Card+Who+Wouldn%27t+Wait+to+Be+Chosen" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-wild-card-who-wouldnt-wait-to-be-chosen" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
                <a key={post.href} href={post.href} className="blog-post__related-card" target={post.href.startsWith('/') ? undefined : '_blank'} rel={post.href.startsWith('/') ? undefined : 'noopener noreferrer'}>
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
