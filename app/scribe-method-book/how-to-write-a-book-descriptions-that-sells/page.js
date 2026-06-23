import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How To Write A Book Description That Sells | The Scribe Method | Scribe Media',
  description: 'Learn how to write a compelling book description that hooks readers, communicates your value, and drives more sales on Amazon and beyond.',
}

export default function BookDescriptionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 7: DESIGN YOUR BOOK</p>
          <p className="chapter__num">Chapter 25</p>
          <h1 className="chapter__title">How To Write A Book Description That Sells</h1>
          <div className="chapter__content">
            <p>Your book description—the copy on your back cover and Amazon listing—is the single most important piece of sales copy you&apos;ll write for your book. Most readers decide to buy or move on based almost entirely on this paragraph. Getting it right is worth your full attention.</p>

            <h2>What a Book Description Actually Does</h2>
            <p>A book description doesn&apos;t summarize your book. It sells it. The distinction matters. Your job isn&apos;t to tell readers what&apos;s inside—it&apos;s to make them desperate to find out. Think of it as an ad for your book, not a synopsis.</p>

            <h2>The Anatomy of a Strong Book Description</h2>
            <ol>
              <li>
                <strong>Hook — grab attention immediately</strong>
                <p>Your first sentence must stop the reader. Lead with a bold statement, a provocative question, or the most compelling promise your book delivers. You have about three seconds before a reader moves on.</p>
              </li>
              <li>
                <strong>Problem — name their pain</strong>
                <p>Describe the problem your reader is experiencing in language they&apos;d use themselves. The more precisely you name their struggle, the more they feel you understand them—and trust that your book has the answer.</p>
              </li>
              <li>
                <strong>Promise — deliver hope</strong>
                <p>Make a clear, specific promise. Not &quot;this book will help you succeed,&quot; but &quot;in 90 days, you&apos;ll have a complete manuscript using the exact system that helped 2,000+ authors publish their books.&quot;</p>
              </li>
              <li>
                <strong>Proof — establish credibility</strong>
                <p>Why should readers believe you? Mention relevant credentials, your experience, your track record, or social proof (bestseller status, number of clients helped, notable endorsements).</p>
              </li>
              <li>
                <strong>Call to action — tell them what to do</strong>
                <p>End with a clear invitation: &quot;Pick up your copy today and start writing the book you&apos;ve been putting off for years.&quot;</p>
              </li>
            </ol>

            <h2>Key Principles for Your Description</h2>
            <ul>
              <li><strong>Write for your reader, not for yourself.</strong> Every sentence should be about what the reader gets, not what you wrote.</li>
              <li><strong>Use short paragraphs and clear language.</strong> Dense blocks of text are skipped. Break things up.</li>
              <li><strong>Lead with benefits, not features.</strong> &quot;You&apos;ll double your productivity&quot; beats &quot;this book contains 12 chapters on time management.&quot;</li>
              <li><strong>Include keywords.</strong> On Amazon, your description affects search rankings. Research the terms your ideal reader types into search bars and work them in naturally.</li>
              <li><strong>Test different versions.</strong> Write two or three variations and get feedback from people in your target audience before publishing.</li>
            </ul>

            <h2>Common Mistakes to Avoid</h2>
            <ul>
              <li>Starting with &quot;In this book...&quot; — it signals a summary, not a pitch</li>
              <li>Leading with your bio instead of the reader&apos;s problem</li>
              <li>Being vague about who the book is for</li>
              <li>Making the description too long — aim for 150–300 words</li>
              <li>Forgetting to include a call to action</li>
            </ul>

            <h2>Final Thoughts</h2>
            <p>Spend real time on your description. Rewrite it multiple times. Get feedback. Your book may be incredible, but if the description doesn&apos;t hook readers, they&apos;ll never find out.</p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="https://amzn.to/3P14NjR" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/lock-in-your-manuscript-copyediting" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">Lock In Your Manuscript: Copyediting</span>
            </a>
            <a href="/scribe-method-book/how-to-write-your-author-bio-and-why-it-matters" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How To Write Your Author Bio (And Why it Matters)</span>
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
