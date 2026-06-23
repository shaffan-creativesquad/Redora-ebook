import './eric-jorgenson.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import NewsletterForm from '@/components/NewsletterForm'

export const metadata = {
  title: 'Eric Jorgenson | Scribe Media',
  description: 'Eric Jorgenson is an Author, Investor, and Scribe Media Owner. Author of The Almanack of Naval Ravikant with over 1 million copies sold.',
}

export default function EricJorgensonPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>

        <section className="content-page">
          <div className="content-page__header">
            <h1 className="content-page__heading">Eric Jorgenson</h1>
          </div>

          <div className="content-page__body">
            <img
              className="content-page__photo"
              src="/assets/EricJorgenson.jpg"
              alt="Eric Jorgenson"
              loading="lazy"
              width="300"
              height="300"
            />

            <h2>From Scribe Author to Scribe Owner</h2>

            <h2>Eric Jorgenson is an Author, Investor, and Scribe Media Owner.</h2>

            <p>Eric is an owner of Scribe Media, the largest Professional Publisher. Scribe helps entrepreneurs, executives, and experts write, publish, and market books of exacting quality. Authors with Scribe keep 100% of their IP, creative control, and royalties.</p>

            <p>Eric is the author of <a href="http://navalmanack.com/" target="_blank" rel="noopener">The Almanack of Naval Ravikant: A Guide to Wealth and Happiness</a> and <a href="https://balajianthology.com/" target="_blank" rel="noopener">The Anthology of Balaji.</a> His books have sold over 1 million copies and been translated into 40 languages. <em>The Book of Elon Musk: A Guide to Purpose and Success</em> is coming soon.</p>

            <p>He is an investor in dozens of (<em>borderline crazy</em>) deep-tech startups through <a href="http://rolling.fun/" target="_blank" rel="noopener">Rolling Fun</a>. They fund obsessive geniuses building utopian technologies. The goal is to find and support the megacap companies of the 2050s.</p>

            <p>Eric writes at <a href="http://ejorgenson.com/" target="_blank" rel="noopener">ejorgenson.com</a> and hosts the podcast, <a href="https://www.ejorgenson.com/podcast" target="_blank" rel="noopener">Smart Friends</a>. His blog has educated and entertained more than one million readers since 2014.</p>

            <h2>Companies Eric has publicly disclosed investment into:</h2>

            <p>Rolling Fun invests in obsessive geniuses building utopian technologies. The fund has a fun, collaborative investment process (and is never annoying).</p>

            <p>View the fund&apos;s public investments <a href="https://www.rolling.fun/investments" target="_blank" rel="noopener">here.</a></p>

            <h3>Select investments:</h3>
            <p>
              <a href="http://aalo.com/" target="_blank" rel="noopener">Aalo Atomics</a> – building nuclear microreactors to achieve $0.03/kwh electricity.<br />
              <a href="https://www.longshotspace.com/" target="_blank" rel="noopener">Longshot</a> – a 10-km long pressure-gun to shoot cargo up into space at miniscule cost.<br />
              <a href="https://www.atomlimbs.com/" target="_blank" rel="noopener">Atom Limbs</a> – robotic prosthetic arms (non-invasive, mind-controlled).<br />
              <a href="http://ouros.energy/" target="_blank" rel="noopener">Ouros Energy</a> – 10x energy density batteries, so EVs can drive 3000 miles, etc.<br />
              <a href="https://terraformindustries.wordpress.com/" target="_blank" rel="noopener">Terraform</a> – making synthetic natural gas from sunlight and air, reversing climate change profitably.
            </p>

            <h2>Eric By The Numbers</h2>

            <p>
              <strong>Email subscribers:</strong> 20,000+<br />
              <strong>Podcast Listens:</strong> 80 episodes, 500,000 downloads<br />
              <strong>LinkedIn Followers:</strong> 8,000<br />
              <strong>Twitter Followers:</strong> 65,000+
            </p>
            <ul>
              <li>1,000,000+ books sold</li>
              <li>4,000,000+ books given away</li>
              <li>Translated into 40+ languages</li>
              <li>Thousands of messages with lives changed</li>
              <li>Published a book of @balajis</li>
              <li>Writing a book of @elonmusk now</li>
            </ul>

            <h2>Featured Guest Appearances Related to Scribe</h2>

            <p>
              <a href="https://www.youtube.com/watch?v=_3BI3XUdRTE&t=2s" target="_blank" rel="noopener">With Nathan Barry on Billion Dollar Creator</a><br />
              <a href="https://www.youtube.com/watch?v=2Y-uh8S_4Zc&t=1353s" target="_blank" rel="noopener">With Chris Williamson on Modern Wisdom</a><br />
              <a href="https://www.youtube.com/watch?v=DWOE72JV6vs" target="_blank" rel="noopener">With Anthony Pompliano on Pomp Podcast</a>
            </p>

            <h2>Podcast Interviews with Eric</h2>

            <p>
              <a href="https://acquirersmultiple.com/2020/09/ep-83-the-acquirers-podcast-eric-jorgenson-navalmanack-naval-ravikants-almanack-and-his-lessons-on-wealth-and-happiness/" target="_blank" rel="noopener">The Acquirers Podcast – Navalmanack: Eric Jorgenson on The Almanack of Naval Ravikant with Tobias</a><br />
              <a href="https://jayclouse.com/podcast/eric-jorgenson/" target="_blank" rel="noopener">Creative Elements by Jay Clouse – Eric Jorgenson [Curation]</a><br />
              <a href="https://www.youtube.com/watch?feature=youtu.be&v=9sGNo1cGLl8" target="_blank" rel="noopener">Dalton Mabery – Capturing Knowledge of a World Class Thinker – Square One Show with Eric Jorgenson</a><br />
              <a href="https://podcasts.apple.com/us/podcast/391-eric-jorgenson-on-capturing-navals-knowledge/id1434060078?i=1000492358171" target="_blank" rel="noopener">The Pomp Podcast – #391: Eric Jorgenson on Capturing Naval&apos;s Knowledge</a><br />
              <a href="https://podcasts.apple.com/ug/podcast/creating-the-naval-ravikant-book-eric-jorgenson/id1523083101?i=1000491440655" target="_blank" rel="noopener">The Reformed Financial Advisor – Creating the Naval Ravikant Book | Eric Jorgenson</a><br />
              <a href="https://open.spotify.com/episode/7H7jfXSI6GkOmIU5p2vlVl" target="_blank" rel="noopener">Jim O&apos;Shaughnessy&apos;s Infinite Loops – Eric Jorgenson: The Almanack of Naval Ravikant (EP.11)</a><br />
              <a href="https://josephcwells.com/podcast/eric-jorgenson" target="_blank" rel="noopener">The Joseph Wells Podcast – #16 – Eric Jorgenson: Lessons from Naval Ravikant</a><br />
              <a href="https://louis-and-kyle.simplecast.com/episodes/eric-jorgenson-037-tQ4Nih3g" target="_blank" rel="noopener">The Louis and Kyle Show – Eric Jorgenson: Author of The Almanack of Naval Ravikant (Navalmanack)</a><br />
              <a href="https://podcasts.apple.com/us/podcast/225-eric-jorgenson-the-wisdom-of-naval-ravikant/id1347973549?i=1000492770207" target="_blank" rel="noopener">Modern Wisdom Podcast – #225 – Eric Jorgenson – The Wisdom of Naval Ravikant</a><br />
              <a href="https://www.perell.com/podcast/erig-jorgenson-lessons-from-naval-ravikant" target="_blank" rel="noopener">North Star Podcast by David Perell – Eric Jorgenson: Lessons from Naval Ravikant</a><br />
              <a href="https://podcast.wearelatech.com/episodes/eric-jorgenson-author-of-the-almanack-of-naval-ravikant" target="_blank" rel="noopener">We Are LA Tech – Eric Jorgenson, Author Of The Almanack Of Naval Ravikant</a><br />
              <a href="https://podcast.womenintechshow.com/episodes/eric-jorgenson-curating-ideas-and-execution" target="_blank" rel="noopener">Women in Tech Podcast by Espree Devora – Eric Jorgenson, Curating Ideas And Execution</a>
            </p>

            <h2>Featured News Releases or Press Mentions:</h2>

            <p>
              Mentioned on Tim Ferriss Podcast <a href="https://tim.blog/2020/10/14/naval/" target="_blank" rel="noopener">#473</a><br />
              Farnam Street Newsletter <a href="https://fs.blog/" target="_blank" rel="noopener">#389</a><br />
              <a href="https://balajianthology.com/" target="_blank" rel="noopener">Blurb from Marc Andreessen</a>: &ldquo;Balaji has the highest &apos;good idea output rate&apos; of anyone I know. This anthology compiles his insights in one place.&rdquo;
            </p>

            <h2>Skills, Stories, Topics for Interviews:</h2>

            <ul>
              <li>What we can learn from Naval, Balaji, Elon Musk.</li>
              <li>The Story of Scribe&apos;s rise, fall, and rebirth – the Phoenix rising!
                <ul>
                  <li>How I became a CEO through the side door.</li>
                </ul>
              </li>
              <li>Who should write a book? How?</li>
              <li>The step-ladder of personal brand-building</li>
              <li>What will a book get you? How do you market a book?</li>
              <li>How will today&apos;s technologies develop? What might the future look like?</li>
              <li>How has venture capital gotten off-track? How do we get back?</li>
              <li>Why should we be (insanely) optimistic about the future?</li>
            </ul>

            <p>For media inquiries, reach out to <a href="mailto:press@scribemedia.com">press@scribemedia.com</a>.</p>
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
