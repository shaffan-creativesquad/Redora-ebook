import '../books-for-doctors/books-for-doctors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Books for Military & Veterans | Scribe Media',
  description:
    'Scribe Media helps military & veterans professionals write and publish books that build authority, attract clients, and grow their business.',
}

export default function BooksForMilitary() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ind">

          <div className="ind__hero">
            <h1>The Book That Turns Your Service Into Your Next Mission</h1>
            <p>Veterans, active duty leaders, and military professionals use books to share hard-won lessons, transition to civilian careers, and inspire the next generation.</p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

          <div className="ind__section">
            <h2>Military &amp; Veterans Leaders Who Published with Scribe</h2>
            <p className="subtitle">These military &amp; veterans professionals turned their expertise into bestselling books.</p>
            <div className="ind__authors-grid">

              {/* Clint Emerson */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img className="ind__author-headshot" src="https://scribemedia.com/hubfs/author-headshots/Clint_Emerson_Headshot.jpg" alt="Clint Emerson" loading="lazy" />
                  <a href="/published-books/100-deadly-skills">
                    <img className="ind__author-book" src="https://scribemedia.com/hubfs/images/books/100-deadly-skills.jpg" alt="100 Deadly Skills" loading="lazy" style={{ width: '70px', height: '105px' }} />
                  </a>
                </div>
                <div className="ind__author-name">
                  Clint Emerson
                </div>
                <div className="ind__author-title">
                  <a href="/published-books/100-deadly-skills">100 Deadly Skills</a>
                </div>
                <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                  <span className="ind__author-stars">★★★★★</span>
                  <span className="ind__author-review-count">
                    <a href="https://www.amazon.com/100-Deadly-Skills-Operatives-Surviving/dp/147679605X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.XkMkjjrA3fyEQpD2-27FmcOOVu0GsaXz6p34eYTLj5NbUtmncz0QTeM5kOGT2DPxvglfeISndxeYUw0yssWz5HGfteenqvTKbhS1rtcCU7j0ErqpZnQH1BCAQXLXI5Smj5A5iAb-8MsmLgNkOZ3UGDZli9x9LCejBOKOUWr2b1OzoRTq7EllVDaZqWpmztRnbSnYOh3o5gBdM5blThrCxtmpPTZspioM63rUUWOblAQ.UnZwsCeq1WIxjBJ9MT17djOuKkmDSx-Sv1cIa95Tfqw&dib_tag=se&keywords=100+deadly+skills&qid=1769458874&sr=8-1&tag=scribemedia0a-20" target="_blank" rel="noopener">4.7 (8,900+)</a>
                  </span>
                </div>
                <div className="ind__author-desc">100 Deadly Skills became a global bestseller, drawing from 20 years as a Navy SEAL.</div>
              </div>

              {/* Mike Sarraille */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img className="ind__author-headshot" src="https://scribemedia.com/hubfs/author-headshots/Michael_Sarraille_Headshot.jpg" alt="Mike Sarraille" loading="lazy" />
                  <a href="/published-books/the-talent-war">
                    <img className="ind__author-book" src="https://scribemedia.com/hubfs/images/books/The-Talent-War-1.jpg" alt="The Talent War" loading="lazy" style={{ width: '70px', height: '105px' }} />
                  </a>
                </div>
                <div className="ind__author-name">
                  Mike Sarraille
                </div>
                <div className="ind__author-title">
                  <a href="/published-books/the-talent-war">The Talent War</a>
                </div>
                <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                  <span className="ind__author-stars">★★★★★</span>
                  <span className="ind__author-review-count">
                    <a href="https://www.amazon.com/Talent-War-Special-Operations-Organizations-ebook/dp/B08GFG5C53/ref=sr_1_1_sspa?dchild=1&keywords=the+talent+war&qid=1605029724&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyMVAzNjlHS1ROWE1IJmVuY3J5cHRlZElkPUEwMjc1MDk5TUtRNzhE&tag=scribemedia0a-20" target="_blank" rel="noopener">4.6 (680+)</a>
                  </span>
                </div>
                <div className="ind__author-desc">Former Navy SEAL officer bringing elite military talent principles to corporate America.</div>
              </div>

              {/* David Goggins */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img className="ind__author-headshot" src="https://scribemedia.com/hubfs/author-headshots/David_Goggins_Headshot.jpg" alt="David Goggins" loading="lazy" />
                  <a href="/published-books/cant-hurt-me">
                    <img className="ind__author-book" src="https://scribemedia.com/hubfs/images/books/cant-hurt-me.jpg" alt="Can't Hurt Me" loading="lazy" style={{ width: '70px', height: '105px' }} />
                  </a>
                </div>
                <div className="ind__author-name">
                  David Goggins
                </div>
                <div className="ind__author-title">
                  <a href="/published-books/cant-hurt-me">Can&apos;t Hurt Me</a>
                </div>
                <div className="ind__author-rating" style={{ justifyContent: 'center' }}>
                  <span className="ind__author-stars">★★★★★</span>
                  <span className="ind__author-review-count">
                    <a href="https://www.amazon.com/Cant-Hurt-Me-Master-Your/dp/1544512287/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=&sr=&tag=scribemedia0a-20" target="_blank" rel="noopener">4.8 (127,000+)</a>
                  </span>
                </div>
                <div className="ind__author-desc">Can&apos;t Hurt Me sold 3M+ copies, launching a global movement of mental toughness.</div>
              </div>

            </div>
          </div>

          <div className="ind__video-section">
            <h2>Hear From a Scribe Author</h2>
            <p className="subtitle">David Goggins on mastering your mind</p>
            <div className="ind__video-embed">
              <iframe
                src="https://www.youtube.com/embed/sLtHFE6qLCI?rel=0"
                title="David Goggins on mastering your mind"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="ind__section">
            <h2>Why Military &amp; Veterans Professionals Write Books</h2>
            <div className="ind__benefits-grid">
              <div className="ind__benefit">
                <h3>Share leadership lessons</h3>
                <p>Military leadership principles are in high demand in business. Your book bridges that gap.</p>
              </div>
              <div className="ind__benefit">
                <h3>Build a post-service career</h3>
                <p>A book opens doors to speaking, consulting, and executive roles in the private sector.</p>
              </div>
              <div className="ind__benefit">
                <h3>Honor your service</h3>
                <p>Document the stories and lessons that deserve to be preserved and shared.</p>
              </div>
              <div className="ind__benefit">
                <h3>Inspire others</h3>
                <p>Your experience can change lives. A book ensures your impact extends far beyond your service.</p>
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
              <a href="/success-stories" className="ind__browse-link">Success Stories</a>
              <a href="/books-for-industries" className="ind__browse-link">All Industries</a>
            </div>
          </div>

          <div className="ind__bottom-cta">
            <h2>Ready to Write Your Book?</h2>
            <p>Schedule a free strategy call to explore how a book can grow your military &amp; veterans practice.</p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
