import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'How To Take The Right Author Photo | The Scribe Method | Scribe Media',
  description: 'Learn what makes a great author photo and how to get one that builds trust, looks professional, and represents your brand.',
}

export default function AuthorPhotoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 7: DESIGN YOUR BOOK</p>
          <p className="chapter__num">Chapter 27</p>
          <h1 className="chapter__title">How To Take The Right Author Photo</h1>
          <div className="chapter__content">
            <p>Your author photo is often the first visual impression a reader, journalist, or event organizer gets of you. It appears on your book cover, Amazon listing, website, media kit, and social profiles. A poor photo undermines your credibility before a word is read. A great one builds immediate trust.</p>

            <h2>Why Your Author Photo Matters</h2>
            <p>People make snap judgments. A photo that looks amateurish, outdated, or misaligned with your book&apos;s tone can quietly sabotage your brand. Conversely, a professional, authentic photo signals that you take your work seriously—and that readers can take you seriously too.</p>

            <h2>Characteristics of a Great Author Photo</h2>
            <ul>
              <li><strong>Professional quality</strong> — hire a photographer; smartphone selfies rarely cut it for print</li>
              <li><strong>Current</strong> — your photo should look like you today, not ten years ago</li>
              <li><strong>Appropriate for your genre and audience</strong> — a business book calls for a different look than a personal memoir</li>
              <li><strong>Good lighting</strong> — natural light or professional studio lighting; avoid harsh shadows or blown-out backgrounds</li>
              <li><strong>Simple, uncluttered background</strong> — your face should be the focus</li>
              <li><strong>Genuine expression</strong> — you don&apos;t need to force a smile, but you should look approachable and confident</li>
            </ul>

            <h2>What to Wear</h2>
            <p>Dress the way your target reader expects to see you. A financial expert might wear a suit. A wellness coach might wear something more relaxed. The key is consistency with your brand—what you wear in your photo should match how you want to be perceived.</p>
            <p>Avoid busy patterns that distract from your face. Solid colors typically photograph better than prints.</p>

            <h2>Working With a Photographer</h2>
            <ol>
              <li>
                <strong>Choose a photographer with portrait experience</strong>
                <p>Look at their portfolio. Do the subjects look natural and well-lit? Do the photos feel professional but not stiff?</p>
              </li>
              <li>
                <strong>Share context before the shoot</strong>
                <p>Tell the photographer what the photo is for, who your audience is, and the tone you want to convey. Bring examples of photos you admire.</p>
              </li>
              <li>
                <strong>Take more shots than you think you need</strong>
                <p>Give yourself options. Shoot in different locations, different outfits, different expressions. You&apos;ll need horizontal and vertical versions for different uses.</p>
              </li>
              <li>
                <strong>Get high-resolution files</strong>
                <p>Make sure you receive high-res files (at least 300 dpi) suitable for print, not just web-resolution JPEGs.</p>
              </li>
            </ol>

            <h2>How Many Photos Do You Need?</h2>
            <p>Plan for at least 2–3 strong options. You&apos;ll want:</p>
            <ul>
              <li>A primary headshot (tight crop, face forward) for book covers and bios</li>
              <li>A secondary lifestyle or environmental shot for websites and media features</li>
              <li>A black-and-white version, which some publications require</li>
            </ul>

            <h2>Final Thoughts</h2>
            <p>Your author photo is a small investment with outsized returns. Don&apos;t treat it as an afterthought. A great photo makes every other piece of your author platform look more credible.</p>
            <p>Get a <strong>free online copy of <em>The Scribe Method</em></strong>{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">here</a>
              {' '}or <strong>purchase a hard copy</strong>{' '}
              <a href="/consult" target="_blank" rel="noopener noreferrer">here</a>!
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-to-write-your-author-bio-and-why-it-matters" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How To Write Your Author Bio (And Why it Matters)</span>
            </a>
            <a href="/scribe-method-book/how-to-get-a-great-book-cover" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">How To Get A Great Book Cover</span>
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
