import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Inclusive Practices That Close the Wage Gap | Scribe Media Blog',
  description:
    "A free excerpt from David Weaver's book Equal Pay Matters. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/step-inside-the-brooklyn-paramounts-roaring-1928-debut',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-hyrlf-meng-317253942-18413963.jpg',
    title: "Step Inside the Brooklyn Paramount's Roaring 1928 Debut",
    date: 'May 28, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/the-receptionist-who-was-always-cold-a-lesson-in-strategic-blindness',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-gustavo-fring-6285298.jpg',
    title: 'The Receptionist Who Was Always Cold: A Lesson in Strategic Blindness',
    date: 'May 21, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/why-your-brain-is-your-biggest-investing-problem-and-what-to-do-about-it',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-alesiakozik-6770609.jpg',
    title: 'Why Your Brain Is Your Biggest Investing Problem (And What to Do About It)',
    date: 'Apr 02, 2026',
  },
]

export default function InclusivePracticesPage() {
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

            <h1 className="blog-post__title">Inclusive Practices That Close the Wage Gap</h1>

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
                  <time dateTime="2026-05-21">May 21, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-edmond-dantes-8068836.jpg?width=960&height=540"
            alt="Inclusive Practices That Close the Wage Gap"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/equalpaymatters">Equal Pay Matters</a> by David Weaver.</em></p>

            <p>Closing the wage gap takes more than good intentions. Diversity gets people in the door. Inclusion is what keeps them respected, valued, and empowered to grow. And because inclusion shapes how people get hired, promoted, and paid, it can quietly fuel wage gaps if you&rsquo;re not paying attention. If you&rsquo;re serious about closing those gaps and keeping them closed, look at your compensation systems through an inclusive lens.</p>

            <p>Here&rsquo;s how I approach each piece.</p>

            <p><strong>Inclusive hiring</strong> starts with structure. I always recommend a consistent interview format with set questions and scoring rubrics to cut bias. You can still be warm. Just be consistent. Skip salary history too. Someone underpaid at their last job shouldn&rsquo;t be underpaid at yours. Post salary ranges even if your state doesn&rsquo;t require it, because that gives every applicant equal footing. And make sure your candidate pool and your hiring panel are both diverse. That alone deters groupthink and boosts representation.</p>

            <p><strong>Equitable promotions</strong> start with regular audits of promotion data so you can spot gender, race, or other demographic gaps. Clarify the criteria for advancement and apply them consistently across departments. Build mentor and sponsor programs for underrepresented employees so everyone has access to growth. Track timelines too, because some teams move people up faster than others, and that inconsistency creates inequity.</p>

            <p><strong>Fair and consistent pay practices</strong> come down to discipline. Tie merit increases to performance-based criteria, not a manager&rsquo;s gut feeling. If you don&rsquo;t post salary ranges publicly, build internal guidelines so new hires are paid in line with their peers. Run annual pay equity audits and actually make the adjustments when you find gaps. Keep every communication about pay, bonuses, and benefits clear, concise, and easy for every employee to understand.</p>

            <p>Once pay equity is achieved, you can&rsquo;t maintain it without weaving it into your compensation philosophy across the entire talent life cycle. Every decision, from posting a role to handing out a bonus, shapes how equitable your company really is.</p>

            <p>That kind of change doesn&rsquo;t happen by thinking about it. It happens through intentional action. When a company moves with intention, everyone involved understands the purpose, the reasoning, and the impact. That depth turns equity into part of your organizational DNA.</p>

            <p>Companies that close the wage gap through intentional action show up as bold goal setters who aren&rsquo;t afraid to measure progress, with equity built into their compensation systems and a thriving, inclusive culture that opens real pathways for hiring, development, and advancement.</p>

            <p>It takes courage, clarity, and consistency. The work is hard. The reward is a stronger, fairer workplace with a committed talent force.</p>

            <p>…</p>

            <p><em>For more advice on closing the wage gap through inclusive practices, you can find <a href="https://geni.us/equalpaymatters">Equal Pay Matters</a> on Amazon.</em></p>

            <p><strong>David Weaver</strong> is an award-winning and bestselling author of <em>Pay Matters</em> and the children&rsquo;s book <em>Pay Matters to Kids</em>. Founder of the Compensation and HR Group, David is an instructor at the Compensation Analyst Academy and the executive director of the Pay Matters Foundation, an independent and private nonprofit organization dedicated to providing people with knowledge about pay.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Finclusive-practices-that-close-the-wage-gap&text=Inclusive+Practices+That+Close+the+Wage+Gap" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Finclusive-practices-that-close-the-wage-gap&title=Inclusive+Practices+That+Close+the+Wage+Gap" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Finclusive-practices-that-close-the-wage-gap" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
