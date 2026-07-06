import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Design Your Book Layout | The Scribe Method | Scribe Media',
  description: 'Learn how to design a professional interior book layout that is readable, polished, and meets publishing standards.',
}

export default function BookLayoutPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 7: DESIGN YOUR BOOK</p>
          <p className="chapter__num">Chapter 29</p>
          <h1 className="chapter__title">Design Your Book Layout</h1>
          <div className="chapter__content">
            <p>The interior layout of your book—also called typesetting or interior design—affects how readable and professional your book feels in a reader&apos;s hands. A poorly laid-out book is physically uncomfortable to read, even if the content is excellent. A well-designed interior is invisible: readers just enjoy the experience without knowing why.</p>

            <h2>What Interior Book Design Covers</h2>
            <ul>
              <li><strong>Typography</strong> — font selection, size, leading (line spacing), and kerning</li>
              <li><strong>Margins</strong> — space around text on all four sides; wider inner margins accommodate the book&apos;s spine</li>
              <li><strong>Page size</strong> — standard trim sizes for nonfiction (6×9 is most common)</li>
              <li><strong>Headers and footers</strong> — running heads with chapter titles or author name, and page numbers</li>
              <li><strong>Chapter openers</strong> — how each new chapter is introduced visually</li>
              <li><strong>Front matter and back matter</strong> — title page, copyright page, dedication, table of contents, index, etc.</li>
              <li><strong>Callouts and subheadings</strong> — visual hierarchy that makes the book scannable</li>
            </ul>

            <h2>DIY vs. Hiring a Designer</h2>
            <p><strong>DIY with software:</strong> Tools like Vellum (Mac only), Adobe InDesign, or Affinity Publisher give you control over interior layout. Vellum is the most author-friendly option and produces beautiful results without design experience.</p>
            <p><strong>Hire a professional:</strong> If your book includes complex formatting (tables, charts, illustrations, unusual layouts), hire a book interior designer. Expect to pay $300–$800 for a standard nonfiction book.</p>

            <h2>Key Design Principles for Readability</h2>
            <ol>
              <li>
                <strong>Choose serif fonts for body text</strong>
                <p>Serif fonts (Garamond, Minion, Caslon) are the standard for print books because the serifs guide the eye along each line. Sans-serif fonts are generally harder to read in long-form print.</p>
              </li>
              <li>
                <strong>Use generous line spacing</strong>
                <p>Lines that are too close together feel cramped and tiring. A leading of 120–145% of the font size is comfortable for most readers.</p>
              </li>
              <li>
                <strong>Keep line length in check</strong>
                <p>Lines that are too long (more than 70 characters) make it hard for the eye to return to the next line. Good layout keeps lines at 55–65 characters.</p>
              </li>
              <li>
                <strong>Be consistent</strong>
                <p>Every design choice—indentation, heading hierarchy, spacing around subheads—should be applied consistently throughout. Inconsistency looks unprofessional.</p>
              </li>
              <li>
                <strong>Avoid widow and orphan lines</strong>
                <p>A &quot;widow&quot; is a single word alone on the last line of a paragraph; an &quot;orphan&quot; is a single line at the top of a new page. Both look sloppy and most design software can fix them automatically.</p>
              </li>
            </ol>

            <h2>eBook Formatting</h2>
            <p>eBook layout follows different rules than print. eBooks are reflowable, meaning the reader controls font size and spacing. Fixed layouts (lots of images, tables) are harder to render well on eReaders. Keep your eBook formatting simple and test it on multiple devices before publishing.</p>

            <h2>Final Thoughts</h2>
            <p>Interior layout is invisible when done well and glaring when done poorly. Whether you DIY or hire a professional, take the time to get it right. Your readers will feel the difference, even if they can&apos;t articulate why.</p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="/consult" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-to-get-a-great-book-cover" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How To Get A Great Book Cover</span>
            </a>
            <a href="/scribe-method-book/how-to-properly-price-your-book" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How To Properly Price Your Book</span>
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
