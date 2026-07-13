import './consult.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ConsultSection from './ConsultSection'

export const metadata = {
  title: 'Schedule a Free Strategy Consult | Readora',
  description: 'Book a free 15-minute strategy consult with Readora. Learn more from our expert nonfiction writing, publishing, and book marketing team.',
}

export default function ConsultPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">

        {/* Hero + Path Selector */}
        <section className="cs-hero">
          <div className="cs-hero__inner">
            <span className="cs-eyebrow">Free Strategy Consultation</span>
            <h1 className="cs-hero__heading">Which best describes where you are right now?</h1>
            <p className="cs-hero__sub">Tell us where you are and we&apos;ll point you to the right next step — no sales pressure, just clarity.</p>

            <div className="cs-steps" aria-hidden="true">
              <div className="cs-step"><span className="cs-step__num">1</span> Pick your path</div>
              <span className="cs-step-arrow">›</span>
              <div className="cs-step"><span className="cs-step__num">2</span> Answer a few questions</div>
              <span className="cs-step-arrow">›</span>
              <div className="cs-step"><span className="cs-step__num">3</span> Book your call time</div>
            </div>

            <ConsultSection />
          </div>
        </section>

        {/* Testimonials */}
        <section className="cs-testimonials" aria-label="Author testimonials">
          <div className="cs-testimonials__inner">
            <span className="cs-eyebrow--muted">What Authors Say</span>
            <h2 className="cs-testimonials__heading">Real authors. Real results.</h2>
            <p className="cs-testimonials__sub">Over 3,000 authors have trusted Readora to help them write, publish, and market their books.</p>
            <div className="cs-testimonials__grid">

              <div className="cs-testimonial-card">
                <div className="cs-testimonial-card__stars">★★★★★</div>
                <p className="cs-testimonial-card__quote">&ldquo;Readora turned years of workshops into a clear, compelling book — and the book turned into credibility, new revenue, and relationships I never could have built otherwise.&rdquo;</p>
                <div className="cs-testimonial-card__author">
                  <div className="cs-testimonial-card__name">Rich Kurtzman</div>
                  <div className="cs-testimonial-card__role">Founder &amp; CEO, Barcelona SAE</div>
                </div>
              </div>

              <div className="cs-testimonial-card">
                <div className="cs-testimonial-card__stars">★★★★★</div>
                <p className="cs-testimonial-card__quote">&ldquo;I leveraged my book into getting a job that I absolutely love. I never imagined writing a book would open that kind of door for me.&rdquo;</p>
                <div className="cs-testimonial-card__author">
                  <div className="cs-testimonial-card__name">Candler Cook</div>
                  <div className="cs-testimonial-card__role">Finance Professional &amp; Published Author</div>
                </div>
              </div>

              <div className="cs-testimonial-card">
                <div className="cs-testimonial-card__stars">★★★★★</div>
                <p className="cs-testimonial-card__quote">&ldquo;I&apos;m already thinking about writing a second book. There&apos;s no way I&apos;d say that if the experience hadn&apos;t been genuinely great every step of the way.&rdquo;</p>
                <div className="cs-testimonial-card__author">
                  <div className="cs-testimonial-card__name">John Schachnovsky</div>
                  <div className="cs-testimonial-card__role">Former FBI Legal Attaché</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Authority / Stats */}
        <section className="cs-authority" aria-label="Why Readora">
          <div className="cs-authority__inner">
            <div className="cs-authority__layout">

              <div>
                <div className="cs-authority__eyebrow">Why Readora</div>
                <h2 className="cs-authority__heading">The team behind 3,000+ published books</h2>
                <p className="cs-authority__body">
                  Readora has spent over a decade building the system, the team, and the track record that makes publishing a professional-quality book actually achievable — for executives, entrepreneurs, and experts who have a story worth sharing.
                </p>
                <ul className="cs-authority__list">
                  <li>Dedicated team of writers, editors, designers, and publishing specialists</li>
                  <li>End-to-end process: writing, editing, design, publishing, and distribution</li>
                  <li>Books distributed to Amazon, Barnes &amp; Noble, and 40,000+ retailers worldwide</li>
                  <li>Ghostwriting, self-publishing, and marketing — all under one roof</li>
                  <li>23 New York Times and Wall Street Journal bestsellers</li>
                </ul>
              </div>

              <div className="cs-stats-grid">
                <div className="cs-stat-card">
                  <div className="cs-stat-card__number">3,000<span>+</span></div>
                  <div className="cs-stat-card__label">Authors published</div>
                </div>
                <div className="cs-stat-card">
                  <div className="cs-stat-card__number">23</div>
                  <div className="cs-stat-card__label">NYT &amp; WSJ bestsellers</div>
                </div>
                <div className="cs-stat-card">
                  <div className="cs-stat-card__number">10<span>+</span></div>
                  <div className="cs-stat-card__label">Years in publishing</div>
                </div>
                <div className="cs-stat-card">
                  <div className="cs-stat-card__number">40K<span>+</span></div>
                  <div className="cs-stat-card__label">Retail outlets worldwide</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact / Not Sure */}
        <section className="cs-contact" id="cs-contact" aria-label="Not sure which path? Contact us">
          <div className="cs-contact__inner">
            <span className="cs-eyebrow--muted">Not Sure Yet?</span>
            <h2 className="cs-contact__heading">Just reach out. We&apos;ll help you figure it out.</h2>
            <p className="cs-contact__sub">No pitch, no pressure — just a quick note and we&apos;ll point you in the right direction.</p>
            <div className="cs-contact__form-wrap">
              <div className="cs-form-placeholder">
                Contact form will be configured soon.<br />
                <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>
                  Email us directly at{' '}
                  <a href="mailto:privacy@readora.com" style={{ color: '#e02d2d' }}>
                    privacy@readora.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
