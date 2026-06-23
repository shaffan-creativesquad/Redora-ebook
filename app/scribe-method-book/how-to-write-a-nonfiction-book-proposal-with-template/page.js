import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How To Write a Nonfiction Book Proposal (With Template) | The Scribe Method | Scribe Media',
  description: 'Learn how to write a compelling nonfiction book proposal that gets literary agents and publishers excited about your book.',
}

export default function BookProposalPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 8: PUBLISH YOUR BOOK</p>
          <p className="chapter__num">Chapter 34</p>
          <h1 className="chapter__title">How To Write a Nonfiction Book Proposal (With Template)</h1>
          <div className="chapter__content">
            <p>If you&apos;re pursuing traditional publishing, you&apos;ll need a book proposal. Unlike fiction, where publishers typically want a complete manuscript, nonfiction publishers often acquire books based on a proposal alone. A strong proposal is your pitch, your business case, and a demonstration of your writing—all in one document.</p>

            <h2>What Is a Book Proposal?</h2>
            <p>A book proposal is a document (typically 20–60 pages) that convinces a literary agent or publisher that:</p>
            <ol>
              <li>Your book idea is compelling and marketable</li>
              <li>You are the right person to write it</li>
              <li>There is a defined, reachable audience willing to buy it</li>
              <li>You can actually write well</li>
            </ol>

            <h2>The Core Sections of a Nonfiction Book Proposal</h2>

            <h3>1. Overview</h3>
            <p>A 1–3 page summary of your book: what it&apos;s about, who it&apos;s for, what makes it unique, and why now is the right time for it. This is the most important section—if the overview doesn&apos;t hook the agent, they may not read further.</p>

            <h3>2. Target Audience</h3>
            <p>Describe your primary and secondary readers in detail. Be specific. &quot;Everyone&quot; is not a target audience. Identify the demographics, psychographics, and existing behaviors of your ideal reader. Where do they buy books? What else do they read?</p>

            <h3>3. Competitive Analysis</h3>
            <p>List 4–6 comparable books (published in the last 3–5 years) and explain how yours is different. Don&apos;t say &quot;there&apos;s nothing like it&quot;—that signals you haven&apos;t done your research. Publishers want proof that readers already buy books in your space.</p>

            <h3>4. Author Bio and Platform</h3>
            <p>Your platform is everything. Publishers want to know: How many people follow you? What&apos;s your email list size? Do you speak, podcast, or get media coverage? A robust platform can sell a mediocre proposal; a weak platform can sink an excellent one.</p>
            <p>Include:</p>
            <ul>
              <li>Email subscribers</li>
              <li>Social media following (by platform)</li>
              <li>Podcast listenership or YouTube subscribers</li>
              <li>Speaking engagements and audiences</li>
              <li>Media appearances</li>
              <li>Corporate affiliations or organizational reach</li>
            </ul>

            <h3>5. Marketing Plan</h3>
            <p>Outline how you will promote the book. What will you do in the 3 months before launch? At launch? Ongoing? Be specific and realistic. Publishers won&apos;t invest in a book if the author has no plan to help market it.</p>

            <h3>6. Chapter Outline</h3>
            <p>A summary of each chapter—typically one paragraph per chapter—showing the arc of the book and that you&apos;ve thought through the structure. This demonstrates you have a complete, coherent vision.</p>

            <h3>7. Sample Chapters</h3>
            <p>Include 1–3 sample chapters that demonstrate your writing voice and the quality of the work. Most agents and publishers want at least the introduction and one core chapter.</p>

            <h2>Common Proposal Mistakes</h2>
            <ul>
              <li>Leading with why the book matters to <em>you</em> rather than to the reader</li>
              <li>Vague platform numbers or inflated claims agents can easily check</li>
              <li>A chapter outline that reads like a table of contents with no substance</li>
              <li>Comparing your book to classics (&quot;This is the next <em>Thinking, Fast and Slow</em>&quot;) — a red flag for agents</li>
              <li>Submitting before the writing sample chapters are excellent</li>
            </ul>

            <h2>Final Thoughts</h2>
            <p>A great book proposal takes weeks to write and revise. It&apos;s not a formality—it&apos;s a sales document. Agents receive hundreds of proposals; yours needs to stand out from the first page. Write the overview last, after you&apos;ve mapped out every other section, and make it sharp.</p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="https://amzn.to/3P14NjR" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/everything-you-need-to-know-about-self-publishing-book-distribution" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">Everything You Need To Know About Self-Publishing Book Distribution</span>
            </a>
            <a href="/scribe-method-book/conclusion-publish-your-book" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">Conclusion: Publish Your Book</span>
            </a>
          </div>

          <div className="chapter__cta-section">
            <h2 className="chapter__cta-title">Want Help Writing Your Book?</h2>
            <p className="chapter__cta-text">Scribe has helped 2,000+ authors turn their ideas into published books. Schedule a free consult.</p>
            <a href="/consult" className="chapter__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
