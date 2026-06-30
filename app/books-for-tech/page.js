import '../books-for-doctors/books-for-doctors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Books for Tech | Scribe Media',
  description:
    'Tech founders, CTOs, and industry leaders use books to share their vision, attract talent and investment, and establish themselves as voices that matter in technology.',
}

export default function BooksForTech() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ind">

          <div className="ind__hero">
            <h1>The Book That Establishes You as a Tech Visionary</h1>
            <p>Tech founders, CTOs, and industry leaders use books to share their vision, attract talent and investment, and establish themselves as voices that matter in technology.</p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

          <div className="ind__section">
            <h2>Tech Leaders Who Published with Scribe</h2>
            <p className="subtitle">These tech professionals turned their expertise into bestselling books.</p>
            <div className="ind__authors-grid">

              {/* Eric Jorgenson — has headshot */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img className="ind__author-headshot" src="https://scribemedia.com/hubfs/author-headshots/Eric_Jorgenson_Headshot.jpg" alt="Eric Jorgenson" loading="lazy" />
                  <a href="/published-books/the-almanack-of-naval-ravikant">
                    <img className="ind__author-book" src="https://scribemedia.com/hubfs/images/books/the-almanack-of-navl-ravikant.jpg" alt="The Almanack of Naval Ravikant" loading="lazy" style={{ width: '70px', height: '105px' }} />
                  </a>
                </div>
                <div className="ind__author-name">
                  Eric Jorgenson
                </div>
                <div className="ind__author-title">
                  <a href="/published-books/the-almanack-of-naval-ravikant">The Almanack of Naval Ravikant</a>
                </div>
                <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                  <span className="ind__author-stars">★★★★★</span>
                  <span className="ind__author-review-count">
                    <a href="https://www.amazon.com/Almanack-Naval-Ravikant-Wealth-Happiness/dp/B0F9VM4V5N?tag=scribemedia0a-20" target="_blank" rel="noopener">4.7 (18,500+)</a>
                  </span>
                </div>
                <div className="ind__author-desc">The Almanack of Naval Ravikant became a global phenomenon with 18,500+ Amazon reviews.</div>
              </div>

              {/* Joe Mechlinski — book only */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <a href="/published-books/shift-the-work" style={{ borderRadius: '4px', width: 'auto', border: 'none' }}>
                    <img className="ind__author-book" src="https://scribemedia.com/hubfs/images/books/shift-the-work.jpg" alt="Shift the Work" loading="lazy" style={{ width: '70px', height: '105px' }} />
                  </a>
                </div>
                <div className="ind__author-name">
                  Joe Mechlinski
                </div>
                <div className="ind__author-title">
                  <a href="/published-books/shift-the-work">Shift the Work</a>
                </div>
                <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                  <span className="ind__author-stars">★★★★★</span>
                  <span className="ind__author-review-count">
                    <a href="https://www.amazon.com/Shift-Work-Revolutionary-Science-Apathetic-ebook/dp/B07GVQT11B?tag=scribemedia0a-20" target="_blank" rel="noopener">4.5 (120+)</a>
                  </span>
                </div>
                <div className="ind__author-desc">Challenged conventional leadership with a human-centered approach to organizational change.</div>
              </div>

              {/* Nassim Taleb — book only */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <a href="/published-books/statistical-consequences-of-fat-tails" style={{ borderRadius: '4px', width: 'auto', border: 'none' }}>
                    <img className="ind__author-book" src="https://scribemedia.com/hubfs/images/books/Nassim-Taleb_SCoFT_WP.jpeg" alt="Statistical Consequences of Fat Tails" loading="lazy" style={{ width: '70px', height: '105px' }} />
                  </a>
                </div>
                <div className="ind__author-name">
                  Nassim Taleb
                </div>
                <div className="ind__author-title">
                  <a href="/published-books/statistical-consequences-of-fat-tails">Statistical Consequences of Fat Tails</a>
                </div>
                <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                  <span className="ind__author-stars">★★★★★</span>
                  <span className="ind__author-review-count">
                    <a href="https://www.amazon.com/Statistical-Consequences-Fat-Tails-Preasymptotics/dp/1544508050/ref=sr_1_1?&_encoding=UTF8&tag=scribemedia0a-20" target="_blank" rel="noopener">4.4 (280+)</a>
                  </span>
                </div>
                <div className="ind__author-desc">One of the world&apos;s most influential thinkers on risk, uncertainty, and decision-making.</div>
              </div>

            </div>
          </div>

          <div className="ind__section">
            <h2>Why Tech Professionals Write Books</h2>
            <div className="ind__benefits-grid">
              <div className="ind__benefit">
                <h3>Attract funding and talent</h3>
                <p>A book demonstrates deep thinking and vision, exactly what investors and top engineers look for.</p>
              </div>
              <div className="ind__benefit">
                <h3>Shape the narrative</h3>
                <p>Define how your industry thinks about the problems you solve, before a competitor does.</p>
              </div>
              <div className="ind__benefit">
                <h3>Build a platform</h3>
                <p>Published tech leaders get invited to conferences, advisory boards, and media appearances.</p>
              </div>
              <div className="ind__benefit">
                <h3>Document your philosophy</h3>
                <p>Your approach to building technology deserves to be shared with the next generation of builders.</p>
              </div>
            </div>
          </div>

          <div className="ind__section ind__section--alt">
            <h2>How It Works</h2>
            <p className="subtitle">From idea to published book, we handle everything so you can focus on your work.</p>
            <div className="ind__process-grid">
              <div className="ind__process-card">
                <div className="ind__process-num">1</div>
                <h3>Strategy call</h3>
                <p>We learn about your goals, audience, and expertise to map the right path for your book.</p>
              </div>
              <div className="ind__process-card">
                <div className="ind__process-num">2</div>
                <h3>We write, you talk</h3>
                <p>Through structured interviews, our writers capture your ideas and craft them into a professional manuscript.</p>
              </div>
              <div className="ind__process-card">
                <div className="ind__process-num">3</div>
                <h3>Publish and launch</h3>
                <p>Editing, cover design, and global distribution. Your book launches on Amazon and everywhere books are sold.</p>
              </div>
            </div>
          </div>

          <div className="ind__browse">
            <div className="ind__browse-links">
              <a href="/#published-books" className="ind__browse-link">Browse All Books</a>
              <a href="/books-for-industries" className="ind__browse-link">All Industries</a>
            </div>
          </div>

          <div className="ind__bottom-cta">
            <h2>Ready to Write Your Book?</h2>
            <p>Schedule a free strategy call to explore how a book can grow your tech practice.</p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
