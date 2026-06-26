import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Why Your Business Lives or Dies by the Team You Build | Scribe Media Blog',
  description:
    "A free excerpt from Eddy Arriola's book It's All About Relationships. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: '/blog/why-your-brain-is-your-biggest-investing-problem-and-what-to-do-about-it',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-alesiakozik-6770609.jpg',
    title: 'Why Your Brain Is Your Biggest Investing Problem (And What to Do About It)',
    date: 'Apr 02, 2026',
  },
  {
    href: '/blog/treat-ai-like-your-best-sales-rep-because-it-already-is',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-tim-witzdam-1081250691-32021560.jpg',
    title: 'Treat AI Like Your Best Sales Rep (Because It Already Is)',
    date: 'Apr 15, 2026',
  },
  {
    href: '/blog/the-softball-questions-investors-ask-that-can-sink-your-pitch',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-aurelijus-u-2148621102-30711884.jpg',
    title: 'The “Softball” Questions Investors Ask That Can Sink Your Pitch',
    date: 'May 01, 2026',
  },
]

export default function WhyYourBusinessTeamPage() {
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

            <h1 className="blog-post__title">Why Your Business Lives or Dies by the Team You Build</h1>

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
            src="https://scribemedia.com/hs-fs/hubfs/pexels-tima-miroshnichenko-5439368.jpg?width=960&height=540"
            alt="Businessman looking at employee in a meeting"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/itsallaboutrelationsh">It&rsquo;s All About Relationships</a> by Eddy Arriola.</em></p>

            <p>What separates thriving companies from ones that stall out? It&rsquo;s rarely the product. It&rsquo;s rarely the strategy. More often than not, it comes down to the people&mdash;and the system behind how those people are chosen, developed, and led.</p>

            <p>The best CEOs don&rsquo;t leave that system to chance. They don&rsquo;t hand it off to HR and hope for the best. They take ownership of what can be called the &ldquo;People Machine&rdquo;: a living, intentional engine that continuously attracts top talent, selects the right candidates through a rigorous process, and brings them on board with clarity and purpose. More importantly, it trains, coaches, and holds people accountable while keeping the best ones growing and engaged.</p>

            <p>Here&rsquo;s the thing most leaders miss: this machine isn&rsquo;t really about processes. It&rsquo;s about relationships. Every hire, every performance conversation, every coaching moment is an opportunity to build trust and shape the culture of your organization. Systems don&rsquo;t produce results on their own&mdash;people do, through how they show up for each other and for their leader.</p>

            <p>That&rsquo;s why building this machine has to be the CEO&rsquo;s responsibility, not a task delegated down the chain. It needs to be talked about often, tied directly to company strategy, and celebrated publicly. Department heads shouldn&rsquo;t see hiring and developing people as a side task&mdash;it should be central to how they define their own success.</p>

            <p>One of the fastest ways to undermine the whole system? Tolerating mediocrity. Every organization has its &ldquo;sacred cows&rdquo;: people who&rsquo;ve been around forever or are technically skilled but toxic to the team. Letting them stay sends a message to everyone else that standards are negotiable. Sometimes the most powerful thing a leader can do is make one hard call and let people see it.</p>

            <p>As Pixar co-founder Ed Catmull put it, a brilliant team will take a mediocre idea and either fix it or replace it with something better. That&rsquo;s the real power of getting the people side right.</p>

            <p>The same principle extends to senior leadership. Google&rsquo;s Project Aristotle&mdash;an exhaustive internal study on team performance&mdash;found that the single most important factor in a high-performing team isn&rsquo;t individual talent. It&rsquo;s psychological safety: the ability for team members to take risks and speak up without fear. Dependability, clear goals, meaningful work, and a shared sense of impact round out what makes a leadership team truly exceptional.</p>

            <p>Even the best team, though, can drift without structure. Consistent one-on-ones, priority meetings, and regular check-ins are what keep a group of talented individuals functioning as a unified, high-performing team.</p>

            <p>&hellip;</p>

            <p><em>For more advice on building high-performing teams and leadership systems, you can find <a href="https://geni.us/itsallaboutrelationsh">It&rsquo;s All About Relationships</a> on Amazon.</em></p>

            <p><strong>Eddy Arriola</strong> is an accomplished entrepreneur and leader recognized for building and guiding organizations that thrive. As founder and CEO of Apollo Bank, he led one of Florida&rsquo;s premier financial institutions through its successful sale in 2022. He was appointed chairman of the Inter-American Foundation by the president of the United States and confirmed by the US Senate, serving under three administrations. A board member of multiple public and private companies, Arriola combines private-sector leadership with public service, offering a unique perspective on growth, governance, and relationships in business.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-your-business-lives-or-dies-by-the-team-you-build&text=Why+Your+Business+Lives+or+Dies+by+the+Team+You+Build" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-your-business-lives-or-dies-by-the-team-you-build&title=Why+Your+Business+Lives+or+Dies+by+the+Team+You+Build" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-your-business-lives-or-dies-by-the-team-you-build" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
