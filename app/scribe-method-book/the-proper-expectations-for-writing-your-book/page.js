import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'The Proper Expectations For Writing Your Book | The Scribe Method | Scribe Media',
  description: 'Before you start writing, set the right expectations. Learn what every author should anticipate on their book-writing journey.',
}

export default function ProperExpectationsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">

          <a href="/scribe-method-book" className="chapter__back">
            ← The Scribe Method
          </a>

          <p className="chapter__part">PART 1: PREPARE TO WRITE YOUR BOOK</p>
          <p className="chapter__num">Chapter 2</p>
          <h1 className="chapter__title">The Proper Expectations For Writing Your Book</h1>

          <div className="chapter__content">
            <blockquote>
              &quot;The art of good decision-making is looking forward to and celebrating the tradeoffs, not pretending they don&apos;t exist.&quot;<br />
              — Seth Godin
            </blockquote>

            <p>Writing a book is one of the most rewarding things you can do—but it&apos;s not without challenges. Before you dive in, it&apos;s important to set proper expectations for your journey.</p>
            <p>At Scribe, we&apos;ve helped over 1,200 authors write and publish their books. What separates those who succeed from those who don&apos;t? It&apos;s not talent or connections—it&apos;s having the right mindset and realistic expectations.</p>
            <p>Let&apos;s walk through what you should anticipate when writing your book and how to prepare for the road ahead.</p>

            <h2>Why Expectations Matter</h2>
            <p>Writing a book is hard work. Without the right preparation, you&apos;re more likely to feel stuck or overwhelmed. But when you anticipate the challenges and understand what&apos;s coming, you can navigate those obstacles with confidence.</p>
            <p>Here are five key expectations every author should have before starting their book.</p>

            <ol>
              <li>
                <strong>Expect Writing a Book to Be Hard</strong>
                <p>There&apos;s no shortcut, hack, or magic trick to make writing a book easy. Anyone who tells you otherwise is either misinformed or trying to sell you something.</p>
                <p>Great books take time, effort, and dedication. Expect hard work—and embrace it. The effort you put into your book will directly impact its quality and success.</p>
              </li>
              <li>
                <strong>Expect to Feel Tired</strong>
                <p>Writing is mentally and emotionally draining, especially if you&apos;re doing it right. You&apos;ll need to stay energized and take care of yourself throughout the process.</p>
                <p>Here are a few tips for self-care while writing:</p>
                <ul>
                  <li><strong>Take breaks</strong> to recharge.</li>
                  <li><strong>Get plenty of rest</strong> to stay sharp.</li>
                  <li>Find activities like walking or meditating that help you reset.</li>
                </ul>
                <p>Recognize when you need to pause and recharge so you can come back to writing with fresh energy.</p>
              </li>
              <li>
                <strong>Expect Confusion Along the Way</strong>
                <p>Writing a book isn&apos;t a linear process. Positioning your ideas, structuring your chapters, and even crafting sentences can feel overwhelming.</p>
                <p>You might encounter advice in this guide that feels counterintuitive or unfamiliar, but trust the process. Much like <em>The Karate Kid</em>, where Daniel learned karate through seemingly unrelated tasks, the exercises in <em>The Scribe Method</em> are designed to build your book step by step.</p>
                <p>Follow the instructions, even when they feel unusual. Every step is intentional and builds toward your end goal.</p>
              </li>
              <li>
                <strong>Expect to Feel Overwhelmed</strong>
                <p>Writing a book can feel like drinking from a firehose. There&apos;s a lot to process, and at times, you might feel like it&apos;s too much.</p>
                <p>Here&apos;s the good news: overwhelm happens when you don&apos;t know what to do next. <em>The Scribe Method</em> eliminates this by providing a clear, step-by-step roadmap. Follow it, and you&apos;ll always know your next move.</p>
              </li>
              <li>
                <strong>Expect Emotional Discomfort (and Maybe Fear)</strong>
                <p>Writing a book is a deeply personal journey. It will challenge you emotionally and force you to confront fears and insecurities.</p>
                <p>Fear of failure, judgment, or not being good enough can creep in—but these emotions are normal. Expect them, face them head-on, and don&apos;t let them derail you.</p>
                <p>In fact, fear is such an important topic that it&apos;s covered in the next chapter of this guide.</p>
              </li>
            </ol>

            <h2>A Final Word: Celebrate the Effort</h2>
            <p>As Theodore Roosevelt famously said, &quot;Nothing in the world is worth having or worth doing unless it means effort, pain, difficulty.&quot;</p>
            <p>Writing your book is no exception. While the process will challenge you, the rewards—personal fulfillment, professional growth, and the ability to share your story—are unmatched.</p>

            <h2>Ready to Begin Your Journey?</h2>
            <p>With proper expectations and the right guidance, you can write a book that leaves a lasting impact. Dive into <em>The Scribe Method</em> to start your journey today.</p>
            <p>
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer"><strong>Read the full guide online</strong></a>
              {' '}or{' '}
              <a href="https://amzn.to/3P14NjR" target="_blank" rel="noopener noreferrer"><strong>Order your copy here</strong></a>
              {' '}to take the next step.
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/introduction-why-write-a-book" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">Introduction: Why Write a Book?</span>
            </a>
            <a href="/scribe-method-book/the-six-fears-you-could-face-writing-your-book" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">The Six Fears You Could Face Writing Your Book</span>
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
