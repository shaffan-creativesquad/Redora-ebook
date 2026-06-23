import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Conclusion: Publish Your Book | The Scribe Method | Scribe Media',
  description: 'The final step in The Scribe Method — a celebration of what you\'ve accomplished and a clear path to publishing your book.',
}

export default function ConclusionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 8: PUBLISH YOUR BOOK</p>
          <p className="chapter__num">Chapter 35</p>
          <h1 className="chapter__title">Conclusion: Publish Your Book</h1>
          <div className="chapter__content">
            <p>You made it. Whether you&apos;ve just read <em>The Scribe Method</em> in full or have been following it chapter by chapter while writing your manuscript, you now have everything you need to publish your book. This is the moment to take stock of how far you&apos;ve come—and to commit to the final push.</p>

            <h2>What You&apos;ve Learned</h2>
            <p>You started by understanding <em>why</em> writing a book matters—for your credibility, your business, your legacy, and your readers. You learned how to:</p>
            <ul>
              <li>Set realistic expectations and overcome your fears</li>
              <li>Position your book with a clear audience, objective, and idea</li>
              <li>Build a complete, chapter-by-chapter outline</li>
              <li>Create a writing plan and stick to it</li>
              <li>Write your first draft using whichever method fits you</li>
              <li>Edit your manuscript at every level—structure, line, and language</li>
              <li>Collect feedback from the right people</li>
              <li>Choose your title, dedication, acknowledgments, and foreword</li>
              <li>Get your manuscript professionally copyedited and locked</li>
              <li>Design your cover, interior, and author presence</li>
              <li>Price and distribute your book</li>
              <li>Navigate your publishing options</li>
            </ul>

            <h2>The Only Thing Left Is to Do It</h2>
            <p>Knowledge without action is just information. The world is full of people who say they&apos;ll write a book someday. You now know exactly how. The question is whether you&apos;ll do it.</p>
            <p>Every published author you admire was once sitting where you are now—with an idea, a desire, and uncertainty about whether they could pull it off. They did. You can too.</p>

            <h2>What Happens After You Publish</h2>
            <p>Publishing your book is not the end of the journey—it&apos;s the beginning of a new one. Your book is now a platform, a credibility asset, and a business tool. In the reference section that follows, you&apos;ll find additional guidance on how to leverage your book, manage your expectations for sales and impact, and continue growing as an author and thought leader.</p>

            <h2>A Final Word</h2>
            <p>At Scribe, we believe that everyone has expertise worth sharing and a story worth telling. The world needs your book. The ideas locked in your head—the lessons from your career, your experiences, your hard-won wisdom—deserve to reach the people who need them.</p>
            <p>Don&apos;t let another year pass without getting started. Write the book. Publish the book. Change someone&apos;s life with it.</p>
            <p>We&apos;re rooting for you.</p>
            <p><strong>— Tucker Max &amp; Zach Obront</strong></p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="https://amzn.to/3P14NjR" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-to-write-a-nonfiction-book-proposal-with-template" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How To Write a Nonfiction Book Proposal (With Template)</span>
            </a>
            <a href="/scribe-method-book/realistic-and-unrealistic-expectations-for-a-book" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">Realistic and Unrealistic Expectations For a Book</span>
            </a>
          </div>

          <div className="chapter__cta-section">
            <h2 className="chapter__cta-title">Ready to Publish Your Book?</h2>
            <p className="chapter__cta-text">Scribe has helped 2,000+ authors turn their ideas into published books. Schedule a free consult.</p>
            <a href="/consult" className="chapter__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
