import '../books-for-doctors/books-for-doctors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Books for Retail | Scribe Media',
  description:
    'Scribe Media helps retail professionals write and publish books that build authority, attract clients, and grow their business. See our retail authors.',
}

export default function BooksForRetail() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ind">

          <div className="ind__hero">
            <h1>The Book That Makes You the Voice of Retail</h1>
            <p>Retail executives, brand leaders, and commerce innovators use books to share insights, attract partnerships, and establish thought leadership in a rapidly evolving industry.</p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

          <div className="ind__section">
            <h2>Retail Leaders Who Published with Scribe</h2>
            <p className="subtitle">These retail professionals turned their expertise into bestselling books.</p>
            <div className="ind__authors-grid">

              {/* Melissa Gonzalez */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img className="ind__author-book" src="https://scribemedia.com/hubfs/images/books/the-pop-up-paradigm.jpg" alt="The Pop Up Paradigm" loading="lazy" style={{ width: '70px', height: '105px' }} />
                </div>
                <div className="ind__author-name">Melissa Gonzalez</div>
                <div className="ind__author-title">The Pop Up Paradigm</div>
              </div>

              {/* Ron Thurston */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img className="ind__author-headshot" src="https://scribemedia.com/hubfs/author-headshots/Ron_Thurston_Headshot.jpg" alt="Ron Thurston" loading="lazy" />
                  <img className="ind__author-book" src="https://scribemedia.com/hubfs/images/books/Retail-Pride-2.jpg" alt="Retail Pride" loading="lazy" style={{ width: '70px', height: '105px' }} />
                </div>
                <div className="ind__author-name">Ron Thurston</div>
                <div className="ind__author-title">Retail Pride</div>
              </div>

              {/* Joe Geng */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img className="ind__author-book" src="https://scribemedia.com/hubfs/images/books/rethinking-hand-safety.jpg" alt="Rethinking Hand Safety" loading="lazy" style={{ width: '70px', height: '105px' }} />
                </div>
                <div className="ind__author-name">Joe Geng</div>
                <div className="ind__author-title">Rethinking Hand Safety</div>
              </div>

            </div>
          </div>

          <div className="ind__video-section">
            <h2>Hear From a Scribe Author</h2>
            <p className="subtitle">Ron Thurston on building pride in the retail industry</p>
            <div className="ind__video-embed">
              <iframe
                src="https://www.youtube.com/embed/dsg1JOzEXiA?rel=0"
                title="Ron Thurston on building pride in the retail industry"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="ind__section">
            <h2>Why Retail Professionals Write Books</h2>
            <div className="ind__benefits-grid">
              <div className="ind__benefit">
                <h3>Lead the conversation</h3>
                <p>Retail is transforming fast. A book positions you as the expert guiding the industry forward.</p>
              </div>
              <div className="ind__benefit">
                <h3>Attract partnerships</h3>
                <p>Brands, vendors, and investors seek out published retail leaders for strategic partnerships.</p>
              </div>
              <div className="ind__benefit">
                <h3>Build your personal brand</h3>
                <p>In an industry of big logos, a book makes your individual expertise stand out.</p>
              </div>
              <div className="ind__benefit">
                <h3>Share what works</h3>
                <p>Document the strategies and innovations that drive results in modern retail.</p>
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
            <p>Schedule a free strategy call to explore how a book can grow your retail practice.</p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
