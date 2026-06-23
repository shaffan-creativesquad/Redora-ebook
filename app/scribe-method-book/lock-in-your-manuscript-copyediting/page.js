import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Lock In Your Manuscript: Copyediting | The Scribe Method | Scribe Media',
  description: 'Learn what copyediting is, why it matters, and how to prepare your manuscript for a professional copyedit before publishing.',
}

export default function CopyeditingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 6: FINISH YOUR MANUSCRIPT</p>
          <p className="chapter__num">Chapter 24</p>
          <h1 className="chapter__title">Lock In Your Manuscript: Copyediting</h1>
          <div className="chapter__content">
            <p>You&apos;ve written, revised, and polished your manuscript. Now it&apos;s time for the final, critical step before design: copyediting. This is where errors get caught, inconsistencies get resolved, and your writing gets its last professional polish before it&apos;s locked in.</p>

            <h2>What Is Copyediting?</h2>
            <p>Copyediting is a line-level review of your manuscript that focuses on:</p>
            <ul>
              <li><strong>Grammar and punctuation</strong> — correcting mechanical errors</li>
              <li><strong>Spelling</strong> — catching typos and inconsistent spellings</li>
              <li><strong>Consistency</strong> — ensuring names, dates, hyphenation, and terminology are uniform throughout</li>
              <li><strong>Style</strong> — applying a consistent style guide (Chicago Manual of Style is standard for nonfiction)</li>
              <li><strong>Clarity</strong> — flagging awkward or confusing sentences without rewriting them</li>
            </ul>
            <p>Copyediting is distinct from developmental editing (which addresses structure and content) and proofreading (which catches errors after layout). Copyediting happens between these two stages.</p>

            <h2>Why Copyediting Matters</h2>
            <p>Readers notice errors, even if only subconsciously. A book riddled with typos and inconsistencies signals carelessness and undermines your credibility as an expert. A clean, professionally edited manuscript signals that you take your work seriously.</p>
            <p>Even excellent writers need a copyeditor. The author is too close to the manuscript to see every error. A fresh set of trained eyes catches what you&apos;ve read past dozens of times.</p>

            <h2>What to Do Before Sending to a Copyeditor</h2>
            <ol>
              <li>
                <strong>Complete your content revisions first</strong>
                <p>Don&apos;t send an incomplete or structurally unsettled manuscript to a copyeditor. Address all big-picture issues before copyediting begins—otherwise you&apos;ll pay to edit text you may later cut.</p>
              </li>
              <li>
                <strong>Run a self-edit pass</strong>
                <p>Use spell check, grammar tools (like Grammarly or ProWritingAid), and a read-aloud pass to catch obvious errors. This lets your copyeditor focus on the nuanced, harder-to-catch issues.</p>
              </li>
              <li>
                <strong>Create a style sheet</strong>
                <p>Document your preferences: How do you spell key terms? Do you use Oxford commas? How are chapter titles formatted? A style sheet gives your copyeditor a reference document and ensures consistency.</p>
              </li>
              <li>
                <strong>Note anything specific you want flagged</strong>
                <p>If you have deliberate stylistic choices that might look like errors (unusual punctuation, intentional fragments), flag them so the copyeditor doesn&apos;t &quot;fix&quot; them.</p>
              </li>
            </ol>

            <h2>How to Find a Good Copyeditor</h2>
            <p>Look for copyeditors with:</p>
            <ul>
              <li>Experience in your genre (business, memoir, self-help, etc.)</li>
              <li>A sample edit they can provide before you commit</li>
              <li>Clear turnaround times and pricing</li>
              <li>References or reviews from past clients</li>
            </ul>
            <p>The Editorial Freelancers Association (the-efa.org) is a good resource for finding qualified professionals. Expect to pay $30–$60 per hour, or a flat per-word rate, for quality copyediting.</p>

            <h2>After Copyediting</h2>
            <p>Once you receive the copyedited manuscript, review every change before accepting it. Some suggestions may not fit your voice or intent. Your job is to weigh each change, not accept all of them blindly. After your final review and approval, your manuscript is locked—ready for layout and design.</p>

            <h2>Final Thoughts</h2>
            <p>Copyediting is one of the most important investments you can make in your book&apos;s professionalism. Don&apos;t skip it, don&apos;t rush it, and don&apos;t try to do it entirely yourself. A clean manuscript is the foundation for everything that follows.</p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="https://amzn.to/3P14NjR" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-to-get-incredible-blurbs-for-your-book" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How To Get Incredible Blurbs For Your Book</span>
            </a>
            <a href="/scribe-method-book/how-to-write-a-book-descriptions-that-sells" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How To Write A Book Description That Sells</span>
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
