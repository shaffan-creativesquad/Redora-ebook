import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'The Only Software You Need To Write A Book Is Already On Your Computer | The Scribe Method | Scribe Media',
  description: "Stop searching for the perfect writing app. The tools you already have are all you need to write your book — here's how to use them.",
}

export default function WritingSoftwarePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 9: REFERENCE MATERIAL</p>
          <p className="chapter__num">Chapter 44</p>
          <h1 className="chapter__title">The Only Software You Need To Write A Book Is Already On Your Computer</h1>
          <div className="chapter__content">
            <p>Many aspiring authors spend more time researching writing tools than actually writing. The perfect app, the ideal software, the right setup—these become procrastination dressed up as preparation. The truth is blunt: the software doesn&apos;t matter nearly as much as the habit of sitting down and writing.</p>

            <h2>The Case for Simple Tools</h2>
            <p>Every major word processor—Microsoft Word, Google Docs, Apple Pages—is more than sufficient for writing a complete book manuscript. These tools have existed for decades, are deeply familiar to most people, and do everything a writer needs:</p>
            <ul>
              <li>Type and edit text</li>
              <li>Organize chapters and sections</li>
              <li>Track changes and comments during editing</li>
              <li>Export to the formats publishers and designers need</li>
              <li>Back up automatically to the cloud</li>
            </ul>
            <p>If you already use one of these tools every day, start there. Switching to something new adds a learning curve without adding meaningful writing capability.</p>

            <h2>Microsoft Word</h2>
            <p>The industry standard. Most editors, agents, and publishers work in Word. If you submit a manuscript professionally, Word (.docx) is almost certainly the requested format. Word&apos;s Styles system is powerful for formatting once you learn it, and Track Changes makes the editing process smooth and transparent.</p>

            <h2>Google Docs</h2>
            <p>The best choice for authors who want automatic cloud backup, easy sharing with collaborators (editors, beta readers), and access from any device. It&apos;s free, reliable, and integrates with everything. The primary limitation is export: formatting can sometimes shift when converting to Word or PDF, so proofread carefully after exporting.</p>

            <h2>Apple Pages</h2>
            <p>A solid option for Mac users who want a clean, distraction-free environment. Exports to Word format. Less common in professional publishing contexts, but works well for the drafting phase.</p>

            <h2>What About Scrivener?</h2>
            <p>Scrivener is a popular choice among authors who want to manage large, complex manuscripts—multiple chapters, research notes, character sheets, scene cards. It offers powerful organizational features that Word and Google Docs lack.</p>
            <p>However, Scrivener has a steep learning curve. Many authors spend weeks learning Scrivener instead of writing their book. Unless you&apos;re writing a long, highly complex manuscript (a multi-part series, a heavily researched nonfiction book with hundreds of sources), a simple word processor will serve you just as well.</p>
            <p>The rule: use Scrivener if you already know it. Don&apos;t learn it specifically to write your first book.</p>

            <h2>Dictation and Speech-to-Text</h2>
            <p>If you&apos;re using the Scribe Method (speaking your book rather than typing it), you&apos;ll want a transcription tool. Options include:</p>
            <ul>
              <li><strong>Built-in dictation:</strong> Both Windows and Mac have built-in speech-to-text that works in any word processor—free and surprisingly accurate</li>
              <li><strong>Otter.ai:</strong> Records and transcribes in real time; good for longer sessions</li>
              <li><strong>Rev.com:</strong> Human transcription at ~$1.50/minute; highest accuracy</li>
              <li><strong>Temi.com:</strong> AI transcription at ~$0.25/minute; fast and good for clear audio</li>
            </ul>

            <h2>The One Tool That Actually Matters</h2>
            <p>The most important tool in your writing toolkit is a calendar with recurring writing appointments. Block the time, show up, and write. No software in the world substitutes for consistent time in the chair.</p>

            <h2>Final Thoughts</h2>
            <p>Stop optimizing your tools and start writing. Open whatever word processor you already have, create a new document titled &quot;[Your Book Title] - Draft,&quot; and write your first sentence. That simple act will do more for your book than any app.</p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="https://amzn.to/3P14NjR" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-do-you-beat-writers-block" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How Do You Beat Writer&apos;s Block?</span>
            </a>
            <a href="/scribe-method-book/how-people-really-judge-a-book" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How People Really Judge A Book</span>
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
