import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: "The Speech Nobody Knew Almost Didn't Happen | Scribe Media Blog",
  description:
    "A free excerpt from Adam Castillo's book Finding Our Voice. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: '/blog/why-your-business-lives-or-dies-by-the-team-you-build',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-tima-miroshnichenko-5439368.jpg',
    title: 'Why Your Business Lives or Dies by the Team You Build',
    date: 'Apr 02, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/comfort-is-a-false-god-why-discomfort-is-the-shortcut-to-growth',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2026/book-bites/ChatGPT-Image-Feb-26-2026-11_04_24-AM.png',
    title: 'Comfort Is a False God: Why Discomfort Is the Shortcut to Growth',
    date: 'Mar 05, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/disrupt-yourself-before-someone-else-beats-you-to-it',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-julio-lopez-75309646-29502358.jpg',
    title: 'Disrupt Yourself Before Someone Else Beats You to It',
    date: 'May 21, 2026',
  },
]

export default function TheSpeechNobodyKnewPage() {
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

            <h1 className="blog-post__title">The Speech Nobody Knew Almost Didn&rsquo;t Happen</h1>

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
            src="https://scribemedia.com/hs-fs/hubfs/pexels-borta-2790256-4331578.jpg?width=960&height=540"
            alt="Black microphone in a lit conference hall"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/findingourvoice">Finding Our Voice</a> by Adam Castillo.</em></p>

            <p>There&rsquo;s a particular kind of irony that only leaders in crisis understand. You can spend weeks crafting the perfect speech&mdash;one about community pride, economic survival, and the audacity to keep believing&mdash;pour your heart into every word, deliver it to a room full of people who needed to hear it, and walk offstage knowing a constitutional crisis is waiting for you in the morning.</p>

            <p>That was October 27, 2023.</p>

            <p>Nearly 200 members of AMCHAM Myanmar gathered for the Governors Dinner, the first real celebration of its kind since the coup had fractured everything. Pressed suit jackets. Business cards. Conversations flowing freely. For more than two years, the idea of gathering in one room with purpose and pride had felt not just foreign, but dangerous. That night, something had shifted.</p>

            <p>We had momentum. We had accreditation, finally recognized by the US Chamber of Commerce after years of pursuit. That certificate, framed and displayed in glass, wasn&rsquo;t just a trophy. It was proof that we had endured.</p>

            <p>The speech I delivered that night was built around a single, repeating question: &ldquo;Is this a time for American commerce?&rdquo; It wasn&rsquo;t a rhetorical flourish. It was the question investors hesitated over, the one policymakers raised an eyebrow at, the one journalists used to frame their skepticism. My answer was yes&mdash;not a naive yes, but a defiant, reasoned, resolute one.</p>

            <p>To make it land, I made it personal. I told the room about arriving in Myanmar with no money, drowning in debt, and angry at the world. About how this country gave me something no other place had: a second chance. That vulnerability wasn&rsquo;t performance. It was a challenge to the room to own their story the same way.</p>

            <p>What almost no one in that ballroom knew was what had unfolded just hours before. While the tables were being arranged upstairs, I was downstairs in a board meeting fighting for the Chamber&rsquo;s financial survival. We were months away from running out of cash. Hard decisions had been made: converting staff salaries to local currency, cutting unnecessary advisory fees, eliminating comforts that had quietly bled us dry. The votes passed, narrowly.</p>

            <p>Then came the fallout. A board member who had not attended a single in-person meeting in six months chose that afternoon to trigger the Chamber&rsquo;s first constitutional crisis, disputing board term lengths on a technicality he had never once raised before. The timing was not coincidental. It was a power play, and it failed.</p>

            <p>That night, even with the weight of a resolved crisis and a new one already forming, I stood at that podium and delivered every word without flinching. Because leadership isn&rsquo;t defined by the ease of your victories. It&rsquo;s defined by how you carry the weight of the struggle while still showing up for the people counting on you.</p>

            <p>The hardest challenges forge the toughest people. That room proved it.</p>

            <p>&hellip;</p>

            <p><em>For more advice on leading through crisis and finding your voice under pressure, you can find <a href="https://geni.us/findingourvoice">Finding Our Voice</a> on Amazon.</em></p>

            <p><strong>Adam Castillo</strong> believes in one guiding truth: the American spirit is unbreakable. Wherever he goes, in whatever capacity, as a Marine officer, entrepreneur, or the face of American commerce in Myanmar, he carries that belief with him. He founded AGS Myanmar, the country&rsquo;s leading security risk management company, and served as president of the American Business Community during the post-coup collapse. He has received the APAC Rising Star of the Year Award, was named one of White Page International&rsquo;s 100 Inspirational Leaders of Asia, and was included in AsiaOne Magazine&rsquo;s Top 40 Most Influential Young Leaders in Asia.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-speech-nobody-knew-almost-didnt-happen&text=The+Speech+Nobody+Knew+Almost+Didn%27t+Happen" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-speech-nobody-knew-almost-didnt-happen&title=The+Speech+Nobody+Knew+Almost+Didn%27t+Happen" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fthe-speech-nobody-knew-almost-didnt-happen" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
