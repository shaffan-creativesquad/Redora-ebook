import '../books-for-doctors/books-for-doctors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Books for Marketers | Readora',
  description:
    'Marketing executives, agency founders, and CMOs use books to demonstrate thought leadership, attract clients, and establish their unique methodology.',
}

export default function BooksForMarketersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ind">

          {/* ── Hero ── */}
          <div className="ind__hero">
            <h1>The Book That Markets You Better Than Any Campaign</h1>
            <p>Marketing executives, agency founders, and CMOs use books to demonstrate thought leadership, attract clients, and establish their unique methodology.</p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

          {/* ── Authors ── */}
          <div className="ind__section">
            <h2>Marketing Leaders Who Published with Readora</h2>
            <p className="subtitle">These marketing professionals turned their expertise into bestselling books.</p>
            <div className="ind__authors-grid">

              {/* Deb Gabor */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img className="ind__author-headshot" src="/assets/Deb_Gabor_Headshot.jpg" alt="Deb Gabor" loading="lazy" />
                  <img className="ind__author-book" src="/assets/Book Covers/31.png" alt="Person-ality" loading="lazy" />
                </div>
                <div className="ind__author-name">Deb Gabor</div>
                <div className="ind__author-title">Person-ality</div>
              </div>

              {/* Randy Frisch */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img className="ind__author-book" src="/assets/Book Covers/32.png" alt="F#ck Content Marketing" loading="lazy" style={{ width: '70px', height: '105px' }} />
                </div>
                <div className="ind__author-name">Randy Frisch</div>
                <div className="ind__author-title">F#ck Content Marketing</div>
              </div>

              {/* Phillip Stutts */}
              <div className="ind__author-card" style={{ textAlign: 'center' }}>
                <div className="ind__author-img-wrap" style={{ justifyContent: 'center' }}>
                  <img className="ind__author-book" src="/assets/Book Covers/33.png" alt="Fire Them Now" loading="lazy" style={{ width: '70px', height: '105px' }} />
                </div>
                <div className="ind__author-name">Phillip Stutts</div>
                <div className="ind__author-title">Fire Them Now</div>
              </div>

            </div>
          </div>


          {/* ── Benefits ── */}
          <div className="ind__section">
            <h2>Why Marketing Professionals Write Books</h2>
            <div className="ind__benefits-grid">
              <div className="ind__benefit">
                <h3>Prove your expertise</h3>
                <p>In a field where everyone claims to be an expert, a book is undeniable proof.</p>
              </div>
              <div className="ind__benefit">
                <h3>Attract agency clients</h3>
                <p>Prospects choose the marketing firm whose founder literally wrote the book on their challenge.</p>
              </div>
              <div className="ind__benefit">
                <h3>Land speaking and media</h3>
                <p>Published marketers get invited to conferences, podcasts, and media appearances.</p>
              </div>
              <div className="ind__benefit">
                <h3>Create a lasting framework</h3>
                <p>Codify your methodology so it outlives trends and becomes the reference in your niche.</p>
              </div>
            </div>
          </div>

          {/* ── Process ── */}
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

          {/* ── Browse links ── */}
          <div className="ind__browse">
            <div className="ind__browse-links">
              <a href="/#published-books" className="ind__browse-link">Browse All Books</a>
              <a href="/books-for-industries" className="ind__browse-link">All Industries</a>
            </div>
          </div>

          {/* ── Bottom CTA ── */}
          <div className="ind__bottom-cta">
            <h2>Ready to Write Your Book?</h2>
            <p>Schedule a free strategy call to explore how a book can grow your marketing practice.</p>
            <a href="/consult" className="ind__cta-btn">Schedule a Free Consult</a>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
