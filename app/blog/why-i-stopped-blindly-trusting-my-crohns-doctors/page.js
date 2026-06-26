import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Why I Stopped Blindly Trusting My Crohn's Doctors | Scribe Media Blog",
  description:
    "A free excerpt from Hadley Ott's book Drug-Free Crohn's. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/ari-meisel',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2016/09/Post_How-ari-meisel-created.jpg',
    title: 'How Ari Meisel Used A Book To Impact The World (And Build His Business)',
    date: 'Sep 13, 2016',
  },
  {
    href: 'https://scribemedia.com/blog/the-night-watchnight-broke-something-in-me',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-jordan-besson-2051439001-29281308.jpg',
    title: 'The Night Watchnight Broke Something in Me',
    date: 'May 07, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/disrupt-yourself-before-someone-else-beats-you-to-it',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-julio-lopez-75309646-29502358.jpg',
    title: 'Disrupt Yourself Before Someone Else Beats You to It',
    date: 'May 21, 2026',
  },
]

export default function CrohnsDoctorsPage() {
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

            <h1 className="blog-post__title">Why I Stopped Blindly Trusting My Crohn&rsquo;s Doctors</h1>

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
            src="https://scribemedia.com/hs-fs/hubfs/pexels-cristian-rojas-8459996.jpg?width=960&height=540"
            alt="Empty Waiting Room"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/drugfreecrohns">Drug-Free Crohn&rsquo;s</a> by Hadley Ott.</em></p>

            <p>Anyone who has stepped inside an American hospital, clinic, or doctor&rsquo;s office knows the system has problems. Long waits. Thin staffing. Inconsistent care. Providers whose competence you quietly question.</p>

            <p>Walk through any medical door and the first question isn&rsquo;t &ldquo;what&rsquo;s wrong?&rdquo; but &ldquo;what insurance do you have?&rdquo; You hand over your card, your ID, your co-pay, and fill out paperwork asking whether you feel safe at home, all before anyone addresses the reason you showed up. Imagine walking into a grocery store and being stopped at the entrance: &ldquo;Cash or card?&rdquo; You&rsquo;d leave. Yet that&rsquo;s essentially how our medical system greets you.</p>

            <p>I&rsquo;m the type of person who avoids doctors whenever possible, which makes my Crohn&rsquo;s journey all the more ironic. My family only turned to the hospital when things got extremely bad. Visits became routine, but I never liked them. There&rsquo;s an unhealthy mental weight to spending your adolescence in places like Vanderbilt. Kids belong outside and in classrooms. I knew I was burning precious years on appointments that produced little, and I started to feel I needed to break the cycle. Add in the mandatory blood draw that follows almost every Crohn&rsquo;s visit, and the frustration compounds.</p>

            <p>Before I stopped going to Vanderbilt, I ran a quiet experiment. Every appointment, the staff handed me a tablet stacked with nearly a hundred questions. &ldquo;For your health so we can better understand your unique needs.&rdquo; Each question had a good answer and a bad answer. &ldquo;How do you feel?&rdquo; Excellent or terrible.</p>

            <p>One visit, I selected all the good answers. No one commented. The next visit, I selected all the bad answers, the kind that should have triggered alarm. Still no reaction. The entire survey turned out to be a box-check for insurance or federal compliance. Once I realized my responses changed nothing about my care, I quit taking it seriously. That&rsquo;s bureaucracy harming outcomes in plain sight.</p>

            <p>When the doctor finally arrived, it was the same routine every time. Nothing new. Nothing meaningful. I&rsquo;d share symptoms that had already resolved, and the response was always, &ldquo;Let us know in six months if it happens again.&rdquo;</p>

            <p>I&rsquo;m not anti-doctor. Medicine has existed for thousands of years, and physicians can be a great resource. But doctors aren&rsquo;t above criticism. My grandmother reminded me often that medicine is still called a practice, and we should treat it accordingly. Never ask a barber if you need a haircut. Self-interest quietly shapes professional advice.</p>

            <p>The deeper truth is that healthcare in America is often sick care. One appointment becomes five. Symptoms get managed, not healed. As long as you stay tethered to conventional treatment, you&rsquo;ll never be fully well. My goal is to help you look elsewhere for healing.</p>

            <p>…</p>

            <p><em>For more advice on healing Crohn&rsquo;s without relying on pharmaceuticals, you can find <a href="https://geni.us/drugfreecrohns">Drug-Free Crohn&rsquo;s</a> on Amazon.</em></p>

            <p>After being diagnosed with Crohn&rsquo;s disease at the age of twelve, <strong>Hadley Ott</strong> spent more than a decade going through the wringer of conventional doctors, hospitals, and pharmaceuticals before finally curing himself naturally. His goal through his private health coaching practice is to help others with autoimmune disease do the same. Hadley previously worked in public policy and served as a research economist on the Council of Economic Advisors to the White House. He is a certified functional nutrition counselor and holds degrees from UT Martin and Troy University. He lives and works in Clarksville, Tennessee.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-i-stopped-blindly-trusting-my-crohns-doctors&text=Why+I+Stopped+Blindly+Trusting+My+Crohn%27s+Doctors" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-i-stopped-blindly-trusting-my-crohns-doctors&title=Why+I+Stopped+Blindly+Trusting+My+Crohn%27s+Doctors" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhy-i-stopped-blindly-trusting-my-crohns-doctors" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
