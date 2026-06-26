import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: "I Only Had Two Options. Here's What I Chose. | Scribe Media Blog",
  description:
    "A free excerpt from Devin Fish's book Answering the Hard Questions. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: '/blog/how-i-took-back-my-business-one-bold-move-at-a-time',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-pixabay-164634.jpg',
    title: 'How I Took Back My Business One Bold Move at a Time',
    date: 'Apr 23, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/fbi-international-crime-fighting-into-beyond-the-badge',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2025/12/john-S.jpeg',
    title: 'How John Schachnovsky Turned a Career of International Crime-Fighting into Beyond the Badge',
    date: 'Dec 17, 2025',
  },
  {
    href: '/blog/its-your-plan-how-involving-clients-changes-everything',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-kampus-8439650.jpg',
    title: '"It\'s Your Plan": How Involving Clients Changes Everything',
    date: 'Apr 15, 2026',
  },
]

export default function IOnlyHadTwoOptionsPage() {
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

            <h1 className="blog-post__title">I Only Had Two Options. Here&rsquo;s What I Chose.</h1>

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
            src="https://scribemedia.com/hs-fs/hubfs/pexels-rdne-7467927.jpg?width=960&height=540"
            alt="Soldier actively listening to her comrade"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/answeringthehardquest">Answering the Hard Questions</a> by Devin Fish.</em></p>

            <p>There was no in-between when I admitted myself to the hospital. I had to make a decision: life or death. That moment didn&rsquo;t come out of nowhere. It had been building for years, quietly boiling beneath the surface while I told everyone around me that I was doing just fine.</p>

            <p>No one ever asked why.</p>

            <p>My military career wasn&rsquo;t making things any easier. I had signed up to become a nurse, to help people, to save lives. What I didn&rsquo;t expect was failing Basic Training on my first attempt, washing out of nursing school weeks in, and cycling in and out of training environments for nearly a year. I eventually became a Cavalry Scout, a role that required a combat mentality I simply didn&rsquo;t have. Tell a fish to climb a tree, and it will fail. I&rsquo;m a quiet, indoor person who wanted to help people. None of that meshed with what being a good scout required.</p>

            <p>The rage built slowly. Ninety days of a detail at Fort Knox&mdash;triple-digit heat, sorting over a million rounds of ammunition, doing the grunt work for Cadets who weren&rsquo;t even in the Army yet&mdash;pushed me close to an edge I didn&rsquo;t know I was standing near. When I got back to Fort Hood, everything had changed. The unit didn&rsquo;t feel like family anymore. And I was still carrying all of it alone.</p>

            <p>Once a week, I told my fellow scouts I had an appointment. What they didn&rsquo;t know was that I was seeing a counselor. I would vent about hating my job, but I never told them about the blackmail, the loss of my mother, or the thoughts that had quietly taken root in my mind. I&rsquo;m not sure I even believed anyone could really help me.</p>

            <p>Then one day, I worked up the courage to say what I had been holding back for months. It took me that long to find thirty seconds of courage&hellip; a call for help.</p>

            <p>What I discovered in that moment is that the story I had been telling myself&mdash;that asking for help meant weakness&mdash;was a lie. Not a single person discouraged me. The problem was never them. It was me, and the silence I had chosen.</p>

            <p>That one act of honesty planted a seed. I started asking myself harder questions, and each answer led to the next. The question that started it all for me was simple: &ldquo;Do I want to die?&rdquo; From there, everything began to shift.</p>

            <p>Real change requires complete honesty. Lies offer a temporary escape but lead somewhere much darker. In truth, I found redemption. I believe you can too.</p>

            <p>&hellip;</p>

            <p><em>For more on mental resilience and the questions that can change your life, you can find <a href="https://geni.us/answeringthehardquest">Answering the Hard Questions</a> by Devin Fish on Amazon.</em></p>

            <p><strong>Devin Fish</strong> was born and raised in Rockford, Illinois. After graduating from high school, Devin joined the Army and served for nearly ten years as a cavalry scout and, later, a career counselor. In 2021, he was awarded the First Cavalry Division Retention NCO of the Year, an honor that changed his outlook on life. Devin has spent his Army career at Fort Hood, Texas; Fort Campbell, Kentucky; and in South Korea, Germany, and Kuwait, where he wrote <em>Answering the Hard Questions</em>. Persevering through poverty, instability, self-hatred, addiction, and generational trauma in his youth, Devin has channeled the lessons he&rsquo;s learned into inspiration for others.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fi-only-had-two-options.-heres-what-i-chose&text=I+Only+Had+Two+Options.+Here%27s+What+I+Chose." target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fi-only-had-two-options.-heres-what-i-chose&title=I+Only+Had+Two+Options.+Here%27s+What+I+Chose." target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fi-only-had-two-options.-heres-what-i-chose" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
