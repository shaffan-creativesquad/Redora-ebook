import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'A Guide for Authors: How to Prepare for Your Scribe Interview | Scribe Media Blog',
  description:
    "Before you meet with your Scribe for the first time, we want to make sure you get the most out of every session. Learn how to prepare for your Scribe interview.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/brian-scott-the-reality-revolution',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2021/09/Brian_B.jpg',
    title: 'How Brian Scott Used Scribe to Create His Legacy and Transform the Lives of Thousands',
    date: 'Sep 10, 2021',
  },
  {
    href: 'https://scribemedia.com/blog/scribes-recent-releases-september-2025',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2025/12/booktok.jpg',
    title: "Scribe's Recent Releases: September 2025",
    date: 'Oct 15, 2025',
  },
  {
    href: 'https://scribemedia.com/blog/scribes-recent-releases-august-2025',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2025/12/booktok.jpg',
    title: "Scribe's Recent Releases: August 2025",
    date: 'Sep 10, 2025',
  },
]

export default function AuthorsGuidesInterviewingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <article className="blog-post">

          <a href="/blog" className="blog-post__back">
            <i className="ph ph-arrow-left"></i> Back to Blog
          </a>

          <header className="blog-post__header">
            <h1 className="blog-post__title">A Guide for Authors: How to Prepare for Your Scribe Interview</h1>

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
                  <time dateTime="2026-03-31">March 31, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">4 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/blog-featured/2017/09/How-to-Get-Interviewed-on-Podcasts.jpg?width=960&height=540"
            alt="A Guide for Authors: How to Prepare for Your Scribe Interview"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p>Before you meet with your Scribe for the first time, we want to make sure you get the most out of every session. Your Scribe&rsquo;s job is to draw out your best thinking and capture your voice&mdash;the more prepared you are, the better your book will be.</p>

            <p>This guide walks you through exactly what to expect and how to show up ready.</p>

            <h2>What Is the Scribe Interview Process?</h2>

            <p>The Scribe interview is a structured conversation between you and your Scribe (your dedicated ghostwriter). Rather than asking you to write anything yourself, your Scribe will ask you targeted questions&mdash;designed to surface your expertise, your stories, and the key insights you want to share with readers.</p>

            <p>Most sessions run 1&ndash;2 hours, and you&rsquo;ll typically do multiple sessions to cover your entire manuscript. Think of it less like an interview and more like a really engaging conversation with someone who is deeply invested in understanding your thinking.</p>

            <h2>How to Prepare Before Your First Session</h2>

            <p>You don&rsquo;t need to write anything ahead of time&mdash;that&rsquo;s what your Scribe is for. But a little preparation goes a long way.</p>

            <h3>1. Review Your Roadmap</h3>
            <p>Your Roadmap (the outline you finalized with your Scribe team) is the guide for your interviews. Before each session, read through the chapters you&rsquo;ll be covering. Refresh your memory on the main points you want to make and the examples or stories that support them.</p>

            <h3>2. Gather Your Source Materials</h3>
            <p>Think about what you already have that could be useful:</p>
            <ul>
              <li>Presentations or slide decks you&rsquo;ve given</li>
              <li>Articles, blog posts, or social media content you&rsquo;ve written</li>
              <li>Previous speeches or talk recordings</li>
              <li>Data, research, or case studies you reference</li>
              <li>Any notes, outlines, or drafts you&rsquo;ve previously started</li>
            </ul>
            <p>You don&rsquo;t need to review all of this ahead of time&mdash;just know it exists and be ready to share it with your Scribe if it comes up.</p>

            <h3>3. Think in Stories</h3>
            <p>The most compelling books are filled with specific stories and examples&mdash;not just advice or frameworks. Before your session, think about:</p>
            <ul>
              <li>A time you learned an important lesson the hard way</li>
              <li>A client or colleague who experienced a transformation because of your work</li>
              <li>A moment that crystallized your point of view on your topic</li>
              <li>Failures, pivots, or unexpected outcomes that taught you something valuable</li>
            </ul>
            <p>Your Scribe will help you find the right stories&mdash;but having a few in mind before you start will make the conversation flow naturally.</p>

            <h2>How to Show Up on the Day</h2>

            <h3>Set Yourself Up for a Distraction-Free Session</h3>
            <p>Block off the time on your calendar and protect it. Find a quiet space where you won&rsquo;t be interrupted. Silence your phone, close your email, and give yourself permission to be fully present for the duration of the call.</p>

            <h3>Talk Like You Would to a Smart Friend</h3>
            <p>Don&rsquo;t try to sound like a book. Your Scribe will handle the writing&mdash;your job is simply to talk. Speak the way you naturally would when explaining your ideas to a trusted colleague or client. The more conversational and authentic you are, the better your voice will come through in the manuscript.</p>

            <h3>Don&rsquo;t Self-Edit as You Go</h3>
            <p>One of the most common pitfalls is stopping yourself mid-thought because you think something isn&rsquo;t &ldquo;good enough&rdquo; or &ldquo;polished enough.&rdquo; Don&rsquo;t. Let your ideas flow. Your Scribe will capture the best of what you say, and nothing is wasted. Raw, unpolished thinking often contains your most powerful ideas.</p>

            <h3>Trust the Process</h3>
            <p>Your Scribe has done this many times. If you feel like you&rsquo;re going off on a tangent, don&rsquo;t worry&mdash;your Scribe will redirect you. If you&rsquo;re not sure how to answer a question, say so. The best answers often come from a moment of honest uncertainty followed by genuine exploration.</p>

            <h2>What Happens After Each Session</h2>

            <p>After each interview, your Scribe will review the recording and begin drafting your manuscript based on what was captured. You&rsquo;ll have the chance to review drafts and provide feedback&mdash;but the heavy lifting of writing is done for you.</p>

            <p>Your Scribe may also send follow-up questions between sessions if there are gaps to fill or points that need clarification. Responding promptly helps keep the project on schedule.</p>

            <h2>A Final Word Before You Begin</h2>

            <p>The authors who get the most out of the Scribe process are the ones who show up as themselves&mdash;curious, candid, and willing to dig into the things that matter most to them. Your expertise is the raw material. Your Scribe is the craftsperson. Together, you&rsquo;ll create something worth reading.</p>

            <p>We&rsquo;re excited to help you bring your book to life.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fauthors-guides-interviewing&text=A+Guide+for+Authors%3A+How+to+Prepare+for+Your+Scribe+Interview" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fauthors-guides-interviewing&title=A+Guide+for+Authors%3A+How+to+Prepare+for+Your+Scribe+Interview" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fauthors-guides-interviewing" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
