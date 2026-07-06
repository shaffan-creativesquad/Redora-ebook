import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How To Get A Great Book Cover | The Scribe Method | Scribe Media',
  description: 'Learn what separates a great book cover from a bad one, and how to work with a designer to get a cover that sells your book.',
}

export default function BookCoverPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 7: DESIGN YOUR BOOK</p>
          <p className="chapter__num">Chapter 28</p>
          <h1 className="chapter__title">How To Get A Great Book Cover</h1>
          <div className="chapter__content">
            <p>People do judge a book by its cover. On Amazon, readers spend less than a second deciding whether to click on a book thumbnail. In a bookstore, your cover has even less time to compete with hundreds of others. A great cover is not a luxury—it&apos;s a marketing essential.</p>

            <h2>What Makes a Book Cover Great?</h2>
            <p>A great cover accomplishes three things instantly:</p>
            <ol>
              <li><strong>Signals the genre</strong> — readers have subconscious expectations for what covers in their preferred genre look like. Violating those expectations is risky.</li>
              <li><strong>Communicates the promise</strong> — even without reading the title, the imagery, typography, and color should give the reader a sense of what they&apos;ll get.</li>
              <li><strong>Looks professional at thumbnail size</strong> — most book sales happen online, where your cover displays at 100–150 pixels wide. If it&apos;s not legible and compelling at that size, it won&apos;t sell.</li>
            </ol>

            <h2>Research the Market First</h2>
            <p>Before briefing a designer, spend time on Amazon looking at the top-selling books in your category. Note patterns: What colors dominate? What typography styles are common? What imagery appears repeatedly? Your cover doesn&apos;t need to be identical to these, but it should fit the visual language of your genre while standing out within it.</p>

            <h2>Working With a Cover Designer</h2>
            <ol>
              <li>
                <strong>Hire a professional who specializes in book covers</strong>
                <p>General graphic designers often struggle with book covers because the format has unique constraints (spine, back cover, thumbnail legibility). Look for designers with a portfolio of published book covers in your genre.</p>
              </li>
              <li>
                <strong>Provide a thorough brief</strong>
                <p>Share your title, subtitle, target audience, genre, key themes, and examples of covers you love (and why). The more context you give, the better the first round of concepts will be.</p>
              </li>
              <li>
                <strong>Give structured feedback</strong>
                <p>Don&apos;t say &quot;I don&apos;t like it.&quot; Say &quot;The font feels too playful for a serious business book—can we try something bolder and more authoritative?&quot; Specific feedback leads to faster, better results.</p>
              </li>
              <li>
                <strong>Test it</strong>
                <p>Before finalizing, show the cover to people in your target audience. Services like Pickfu allow you to run quick A/B tests on cover variations and get real feedback from real readers.</p>
              </li>
            </ol>

            <h2>Key Elements of a Book Cover</h2>
            <ul>
              <li><strong>Title</strong> — must be legible at thumbnail size; don&apos;t sacrifice readability for style</li>
              <li><strong>Subtitle</strong> — for nonfiction, a clear subtitle often drives sales more than the main title</li>
              <li><strong>Author name</strong> — sized appropriately (bigger if you&apos;re well-known)</li>
              <li><strong>Imagery</strong> — relevant, high-quality, and genre-appropriate</li>
              <li><strong>Color palette</strong> — intentional and consistent with your brand</li>
              <li><strong>Blurbs</strong> — if included on the cover, use only the strongest one or two</li>
            </ul>

            <h2>What to Avoid</h2>
            <ul>
              <li>Clip art or stock photos that look generic</li>
              <li>Too many fonts or competing visual elements</li>
              <li>Illegible text at small sizes</li>
              <li>Designing for print without considering the digital thumbnail</li>
            </ul>

            <h2>Final Thoughts</h2>
            <p>Your cover is the first thing a potential reader sees. Invest in getting it right. A professional, genre-appropriate cover that looks great as a thumbnail can be one of the highest-ROI decisions you make in your publishing journey.</p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="/consult" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-to-take-the-right-author-photo" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How To Take The Right Author Photo</span>
            </a>
            <a href="/scribe-method-book/design-your-book-layout" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">Design Your Book Layout</span>
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
