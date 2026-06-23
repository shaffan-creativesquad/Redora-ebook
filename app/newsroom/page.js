import './newsroom.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Newsroom | Scribe Media',
  description: 'Find out what the world is saying about Scribe Media. Press mentions, podcasts, and media resources.',
}

export default function NewsroomPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <section className="cp">
          <div className="cp__wrap">

            {/* Hero */}
            <header className="cp__hero">
              <h1>Newsroom</h1>
              <p>Find out what the world is saying about Scribe Media.</p>
            </header>

            {/* Featured outlet logos */}
            <div className="cp__logo-row" aria-label="Featured outlets">
              <div className="cp__logo-card">
                <span className="cp__logo-text">Inc.</span>
              </div>
              <div className="cp__logo-card">
                <span className="cp__logo-text">Forbes</span>
              </div>
              <div className="cp__logo-card">
                <span className="cp__logo-text">Business Insider</span>
              </div>
            </div>

            {/* Press Mentions */}
            <section className="cp__section">
              <h2>Press Mentions</h2>
              <div className="cp__grid">
                <article className="cp__card">
                  <a className="cp__card-link" href="https://www.inc.com/benjamin-p-hardy/scribe-books-is-disrupting-self-publishing-by-giving-away-all-secrets-for-free.html" target="_blank" rel="noopener">
                    <h3>Inc.</h3>
                    <p>How Scribe Media is changing publishing for entrepreneurs and thought leaders.</p>
                    <span className="cp__card-cta">Read Mention</span>
                  </a>
                </article>
                <article className="cp__card">
                  <a className="cp__card-link" href="https://www.forbes.com/sites/nathanpettijohn/2018/12/10/if-you-want-to-write-a-great-book-hire-a-great-scribe/" target="_blank" rel="noopener">
                    <h3>Forbes</h3>
                    <p>Why executives use professional publishing to build authority and grow businesses.</p>
                    <span className="cp__card-cta">Read Mention</span>
                  </a>
                </article>
                <article className="cp__card">
                  <a className="cp__card-link" href="https://www.businessinsider.com/women-entrepreneurs-write-books-to-stand-out-from-the-crowd-2016-4" target="_blank" rel="noopener">
                    <h3>Business Insider</h3>
                    <p>Inside the publishing company helping thousands of authors publish their books.</p>
                    <span className="cp__card-cta">Read Mention</span>
                  </a>
                </article>
              </div>
            </section>

            {/* Featured Podcasts */}
            <section className="cp__section">
              <h2>Featured Podcasts</h2>
              <div className="cp__grid">
                <article className="cp__card">
                  <a className="cp__card-link" href="https://jamesaltuchershow.com/episode/how-to-write-and-publish-a-book-in-30-days" target="_blank" rel="noopener">
                    <h3>The James Altucher Show</h3>
                    <p>Publishing trends and why everyone has a book in them.</p>
                    <span className="cp__card-cta">Listen Now</span>
                  </a>
                </article>
                <article className="cp__card">
                  <a className="cp__card-link" href="https://www.listennotes.com/podcasts/the-mindvalley/tucker-max-on-the-secrets-to-JfeG06Mt-1q/" target="_blank" rel="noopener">
                    <h3>The Mindvalley Podcast</h3>
                    <p>How writing a book can transform your personal brand.</p>
                    <span className="cp__card-cta">Listen Now</span>
                  </a>
                </article>
                <article className="cp__card">
                  <a className="cp__card-link" href="https://lewishowes.com/podcast/tucker-max-book/" target="_blank" rel="noopener">
                    <h3>The School of Greatness</h3>
                    <p>Unlocking human potential through storytelling and books.</p>
                    <span className="cp__card-cta">Listen Now</span>
                  </a>
                </article>
              </div>
            </section>

            {/* Press Inquiries */}
            <section className="cp__section cp__cta">
              <h2>Press Inquiries</h2>
              <p><a href="mailto:press@scribemedia.com">press@scribemedia.com</a></p>
              <div className="cp__press-kit">
                <img
                  className="cp__press-kit-logo"
                  src="/assets/logo-sm-on-dark.svg"
                  alt="Scribe Media logo"
                  loading="lazy"
                  width="164"
                  height="42"
                />
                <h3>Press Kit</h3>
                <p>Scribe Media is the first, biggest, and best professional publisher. Download logo files and boilerplate assets for media use.</p>
                <div className="cp__press-kit-links">
                  <a href="/assets/logo-sm-on-dark.svg" target="_blank" rel="noopener">Download SVG Logo</a>
                  <a href="/assets/lioncrest-logo-footer.svg" target="_blank" rel="noopener">Download PNG Logo</a>
                </div>
              </div>
              <p style={{ marginTop: '1.25rem' }}>
                <a href="/consult" className="cp__btn">Schedule a Consult</a>
              </p>
            </section>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
