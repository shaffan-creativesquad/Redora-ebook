import '../books-for-doctors/books-for-doctors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Books for Fitness & Wellness | Readora',
  description:
    'Readora helps fitness & wellness professionals write and publish books that build authority, attract clients, and grow their business. See our fit...',
}

export default function BooksForFitnessPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ind">

          {/* ── Hero ── */}
          <div className="ind__hero">
            <h1>The Book That Transforms You From Trainer to Authority</h1>
            <p>Fitness coaches, gym owners, and wellness experts use books to reach a global audience, launch programs, and build a brand beyond the gym floor.</p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

          {/* ── Featured Authors ── */}
          <div className="ind__section">
            <h2>Fitness &amp; Wellness Leaders Who Published with Readora</h2>
            <p className="subtitle">These fitness &amp; wellness professionals turned their expertise into bestselling books.</p>
            <div className="ind__authors-grid">

              {/* Ben Bergeron */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img className="ind__author-headshot" src="https://readora.com/hubfs/author-headshots/Ben_Bergeron_Headshot.jpg" alt="Ben Bergeron" loading="lazy" />
                  <img className="ind__author-book" src="https://readora.com/hubfs/images/books/713RC4IYyeL._SL1360_.jpg" alt="Mission: Motherhood" loading="lazy" />
                </div>
                <div className="ind__author-name">Ben Bergeron</div>
                <div className="ind__author-title">Mission: Motherhood</div>
              </div>

              {/* Jade Teta */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img className="ind__author-headshot" src="https://readora.com/hubfs/author-headshots/Jade_Teta_Headshot.jpg" alt="Jade Teta" loading="lazy" />
                  <img className="ind__author-book" src="https://readora.com/hubfs/images/books/the-next-level-metabolism.jpg" alt="Next-Level Metabolism" loading="lazy" />
                </div>
                <div className="ind__author-name">Jade Teta</div>
                <div className="ind__author-title">Next-Level Metabolism</div>
              </div>

            </div>
          </div>

          {/* ── Benefits ── */}
          <div className="ind__section">
            <h2>Why Fitness &amp; Wellness Professionals Write Books</h2>
            <div className="ind__benefits-grid">
              <div className="ind__benefit">
                <h3>Reach a global audience</h3>
                <p>A book lets you coach millions of people, not just the clients in your gym.</p>
              </div>
              <div className="ind__benefit">
                <h3>Launch programs and courses</h3>
                <p>Your book becomes the foundation for online programs, certifications, and workshops.</p>
              </div>
              <div className="ind__benefit">
                <h3>Build brand authority</h3>
                <p>Published fitness experts attract sponsorships, media features, and premium partnerships.</p>
              </div>
              <div className="ind__benefit">
                <h3>Create passive income</h3>
                <p>Book royalties and the programs built around your book generate revenue while you sleep.</p>
              </div>
            </div>
          </div>

          {/* ── How It Works ── */}
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

          {/* ── Browse Links ── */}
          <div className="ind__browse">
            <div className="ind__browse-links">
              <a href="/#published-books" className="ind__browse-link">Browse All Books</a>
              <a href="/books-for-industries" className="ind__browse-link">All Industries</a>
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div className="ind__bottom-cta">
            <h2>Ready to Write Your Book?</h2>
            <p>Schedule a free strategy call to explore how a book can grow your fitness &amp; wellness practice.</p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
