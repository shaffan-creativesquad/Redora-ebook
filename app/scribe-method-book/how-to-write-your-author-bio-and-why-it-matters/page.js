import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How To Write Your Author Bio (And Why it Matters) | The Scribe Method | Scribe Media',
  description: 'Learn how to write a compelling author bio that builds credibility, connects with readers, and establishes your authority.',
}

export default function AuthorBioPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 7: DESIGN YOUR BOOK</p>
          <p className="chapter__num">Chapter 26</p>
          <h1 className="chapter__title">How To Write Your Author Bio (And Why it Matters)</h1>
          <div className="chapter__content">
            <p>Your author bio is one of the most read—and most neglected—pieces of copy associated with your book. It appears on your back cover, your Amazon listing, your website, media kits, and speaker one-sheets. A strong bio does more than list credentials; it builds trust and positions you as the right person to have written this book.</p>

            <h2>Why Your Author Bio Matters</h2>
            <p>Readers who are on the fence about buying your book will check the author bio to answer one question: &quot;Why should I trust this person?&quot; A weak bio—or no bio at all—leaves that question unanswered. A strong bio removes doubt and accelerates the purchase decision.</p>
            <p>Your bio also shows up in podcast pitches, speaking applications, and media requests. It&apos;s often the first thing a journalist, host, or event organizer reads. Make it count.</p>

            <h2>The Key Elements of a Strong Author Bio</h2>
            <ol>
              <li>
                <strong>Establish your relevant credentials</strong>
                <p>Lead with what makes you qualified to write this specific book. Don&apos;t list every degree and job title—focus on what&apos;s relevant to your reader. A former CEO writing a leadership book should lead with that; a therapist writing about relationships should lead with their clinical background.</p>
              </li>
              <li>
                <strong>Include specific, concrete proof</strong>
                <p>Numbers are your friend. &quot;Helped 2,000+ authors publish books,&quot; &quot;spoken at 50+ conferences,&quot; &quot;built a $10M company&quot;—these specific claims are far more credible than vague descriptions.</p>
              </li>
              <li>
                <strong>Show your human side</strong>
                <p>A bio that reads like a LinkedIn summary is forgettable. Add a personal detail that makes you real: where you live, something you&apos;re passionate about, an unexpected fact. This creates connection.</p>
              </li>
              <li>
                <strong>End with a call to action or a memorable line</strong>
                <p>Let readers know how to find you—your website, social media, or a free resource. End with something that sticks.</p>
              </li>
            </ol>

            <h2>Short Bio vs. Long Bio</h2>
            <p>You need two versions:</p>
            <ul>
              <li><strong>Short bio (50–75 words):</strong> for back covers, podcast introductions, and quick submissions. Focus only on the most relevant credentials and one personal detail.</li>
              <li><strong>Long bio (150–250 words):</strong> for your website, media kits, and speaker profiles. More detail, more personality, more story.</li>
            </ul>

            <h2>Common Bio Mistakes</h2>
            <ul>
              <li>Writing in first person when third person is standard for professional bios</li>
              <li>Listing every credential instead of the most relevant ones</li>
              <li>Being so modest that the reader doesn&apos;t understand why you&apos;re qualified</li>
              <li>Including outdated information</li>
              <li>Forgetting to include a way to find you online</li>
            </ul>

            <h2>Write Different Versions for Different Contexts</h2>
            <p>Your book bio, conference bio, and podcast bio don&apos;t have to be identical. Tailor each one to the audience and purpose. A business conference audience needs different framing than a literary festival crowd.</p>

            <h2>Final Thoughts</h2>
            <p>Your author bio is a living document—update it as your credentials grow and your focus evolves. Treat it as seriously as any other piece of marketing copy, because that&apos;s exactly what it is.</p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="/consult" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-to-write-a-book-descriptions-that-sells" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How To Write A Book Description That Sells</span>
            </a>
            <a href="/scribe-method-book/how-to-take-the-right-author-photo" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How To Take The Right Author Photo</span>
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
