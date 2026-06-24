import './how-it-works.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata = {
  title: 'How It Works | Scribe Media',
  description: 'From first conversation to published book. Learn the full Scribe Media process — consultation, positioning, writing, editing, design, and distribution.',
}

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>

        <section className="content-page">
          <div className="content-page__header">
            <h1 className="content-page__heading">How Scribe Works</h1>
            <p className="content-page__subheading">From first conversation to published book. Here&apos;s the process.</p>
          </div>

          <div className="content-page__body">
            <p>We get this question a lot: &ldquo;How does this actually work?&rdquo;</p>

            <p>Fair question. Paying $30,000 to $135,000 for a book is a big decision. You should know exactly what you&apos;re getting into before you commit. So here&apos;s the full process, no surprises.</p>

            <h2>Step 1: The Consultation</h2>

            <p>It starts with a free call. No pitch, no pressure. We talk about your goals, your audience, your timeline, and your book idea. Sometimes we tell people they&apos;re not ready yet. Sometimes we suggest a different service than the one they came in asking about.</p>

            <p>The point is to figure out if we&apos;re a good fit. If we are, we&apos;ll recommend the right service and walk you through what to expect. If we&apos;re not, we&apos;ll tell you that too.</p>

            <p><a href="/consult">Book your free consultation here.</a></p>

            <h2>Step 2: Positioning and Outline</h2>

            <p>Before anyone writes a word, we figure out the strategy.</p>

            <p>Who is this book for? What do you want it to accomplish? What&apos;s the core argument or story? How should it be structured?</p>

            <p>We call this positioning. It&apos;s the most important step, and it&apos;s the one most people skip when they try to write on their own. A book without clear positioning is a book that sits on the shelf.</p>

            <p>You&apos;ll work with your team to develop a detailed outline that maps every chapter. By the end of this phase, you&apos;ll know exactly what the book will say and how it will say it.</p>

            <h2>Step 3: Interviews (For Ghostwriting and Professional)</h2>

            <p>If you&apos;re using our <a href="/services/professional-book-writers">Professional</a> or <a href="/services/ghostwriting">Elite Ghostwriting</a> service, we don&apos;t ask you to sit down and write. Instead, we interview you.</p>

            <p>Your writer conducts 20 to 40 hours of structured interviews. They ask the right questions to pull out your ideas, stories, expertise, and voice. Every session is recorded and transcribed.</p>

            <p>This is how we get a book that sounds like you, not like a ghostwriter. Because the ideas, the stories, the perspective... they&apos;re all yours. We just organize and polish them into a book.</p>

            <p>If you&apos;re using our <a href="/services/guided-author">Guided Author</a> program, you do the writing yourself with coaching and feedback from our team.</p>

            <h2>Step 4: Writing and Revision</h2>

            <p>Your writer takes the interview transcripts and turns them into a manuscript. This isn&apos;t a rough draft handed off to you to fix. It&apos;s professional writing that captures your voice and ideas clearly.</p>

            <p>You review every chapter. You give feedback. We revise. This cycle repeats until you&apos;re genuinely happy with the manuscript. Most books go through two to three rounds of revision.</p>

            <p>For Guided Author, you write each chapter and our editors give detailed feedback. Same revision cycle, different division of labor.</p>

            <h2>Step 5: Editing</h2>

            <p>Once the manuscript is solid, it goes through multiple rounds of professional editing:</p>

            <ul>
              <li><strong>Developmental editing.</strong> Does the structure work? Is the argument clear? Are there gaps?</li>
              <li><strong>Line editing.</strong> Sentence-level clarity, flow, and readability.</li>
              <li><strong>Copyediting.</strong> Grammar, consistency, fact-checking.</li>
              <li><strong>Proofreading.</strong> Final pass to catch anything that slipped through.</li>
            </ul>

            <p>Most people don&apos;t realize how many layers of editing go into a professional book. This is a big part of what separates a polished book from a self-published rough draft.</p>

            <h2>Step 6: Cover Design and Interior Layout</h2>

            <p>Your book gets a custom cover designed by professional book designers. Not a template. Not Canva. A real cover that looks like it belongs in a bookstore, because it will be in bookstores.</p>

            <p>Interior layout includes typesetting, chapter headers, font selection, and all the details that make a book feel professional when you hold it. We also design the ebook and audiobook covers if applicable.</p>

            <p>You approve every design decision. It&apos;s your book.</p>

            <h2>Step 7: Publishing and Distribution</h2>

            <p>We handle all the logistics:</p>

            <ul>
              <li>ISBN registration</li>
              <li>Copyright filing</li>
              <li>Library of Congress listing</li>
              <li>Amazon (Kindle, paperback, hardcover)</li>
              <li>Barnes &amp; Noble</li>
              <li>IngramSpark (40,000+ retailers and libraries)</li>
              <li>Apple Books, Google Play, and other digital platforms</li>
            </ul>

            <p>Your book is available everywhere books are sold. And you own 100% of the rights and royalties. We don&apos;t take a cut. Not now, not ever.</p>

            <h2>Step 8: Your Book Is in the World</h2>

            <p>Most of our authors hold their finished, published book within 9 to 15 months of starting. That includes writing, editing, design, and publishing. Some faster, some slower, depending on the service and their schedule.</p>

            <p>But the book launch is just the beginning. Our authors use their books to grow businesses, land speaking gigs, attract clients, build credibility, and create impact in their fields. Check out our <a href="/success-stories">success stories</a> to see what&apos;s possible.</p>

            <h2>Which Service Is Right for You?</h2>

            <p>It depends on how involved you want to be in the writing and what your budget looks like.</p>

            <ul>
              <li><strong><a href="/services/ghostwriting">Scribe Elite</a></strong> ($135,000+): Premier ghostwriting. Top-tier writers, fully customized.</li>
              <li><strong><a href="/services/professional-book-writers">Professional</a></strong> ($56,000): We interview you and write the book. Full publishing included.</li>
              <li><strong><a href="/services/guided-author">Guided Author</a></strong> ($44,000): You write with our coaching. We edit and publish.</li>
              <li><strong><a href="/services/publishing">Publishing</a></strong> ($29,000): You&apos;ve written the manuscript. We handle everything else.</li>
            </ul>

            <p>Not sure which fits? That&apos;s exactly what the consultation is for.</p>

            <p><a href="/consult">Schedule your free consultation</a> and we&apos;ll help you figure it out.</p>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="cta-form-section">
          <div className="cta-form-section__inner">
            <div className="cta-form-section__logo" aria-hidden="true">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="8" fill="var(--color-accent, #e02d2d)" />
                <path d="M12 10h24v28H12z" fill="#0d0d0d" />
                <path d="M16 16h16M16 22h16M16 28h10" stroke="#ffffff" strokeWidth="2" />
              </svg>
            </div>
            <h2 className="cta-form-section__heading">Learn how professionals write and publish their books.</h2>
            <p className="cta-form-section__subheading">Join 57,000+ readers receiving expert writing and publishing insights from our Scribe team.</p>
            <div className="cta-form-section__pill-list" aria-hidden="true">
              <span className="cta-form-section__pill">Writing frameworks</span>
              <span className="cta-form-section__pill">Publishing playbooks</span>
              <span className="cta-form-section__pill">Launch case studies</span>
            </div>
            <div className="cta-form-section__form-wrap">
              <NewsletterForm />
              <p className="form-privacy-notice">
                By submitting, you agree to our <a href="/privacy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a>.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
