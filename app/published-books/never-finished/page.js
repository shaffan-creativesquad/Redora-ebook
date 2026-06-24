import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Never Finished by David Goggins | Scribe Media',
  description: "This is not a self-help book. It's a wake-up call! In Never Finished, Goggins takes you inside his Mental Lab, where he developed the philosophy, psychology, and strategies that enabled him to learn that what he thought was his limit was only his beginning.",
}

export default function NeverFinishedPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>

        {/* ── Book Detail ── */}
        <section className="book-detail-page">
          <div className="book-detail-page__inner">

            <a href="/published-books" className="bd-back">
              ← Back to Published Books
            </a>

            <div className="bd-layout">
              {/* Cover */}
              <div>
                <Image
                  src="/assets/DavidGoggins_WebsiteCover.jpg"
                  alt="Never Finished"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">Never Finished</h1>
                <p className="bd-author">by <a href="/authors/david-goggins">David Goggins</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.8 · 14,000 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Business Motivation &amp; Self-Improvement
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>This is not a self-help book. It&apos;s a wake-up call!</p>
                  <p style={{ marginTop: '0.75rem' }}><em>Can&apos;t Hurt Me</em>, David Goggins&apos; smash hit memoir, demonstrated how much untapped ability we all have but was merely an introduction to the power of the mind. In <em>Never Finished</em>, Goggins takes you inside his Mental Lab, where he developed the philosophy, psychology, and strategies that enabled him to learn that what he thought was his limit was only his beginning and that the quest for greatness is unending.</p>
                  <p style={{ marginTop: '0.75rem' }}>The stories and lessons in this raw, revealing, unflinching memoir offer the listener a blueprint they can use to climb from the bottom of the barrel into a whole new stratosphere that once seemed unattainable. Whether you feel off-course in life, are looking to maximize your potential or drain your soul to break through your so-called glass ceiling, this is the only book you will ever need.</p>
                  <p style={{ marginTop: '0.75rem' }}>An annotated edition of <em>Never Finished</em>, offering over three hours of bonus content featuring deeper insights and never-before-told stories shared by David. Not available in other formats.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Military</span>
                  <span className="bd-tag">Personal Development</span>
                  <span className="bd-tag">Training and Development</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/B0BJ35MFZY?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
                  </a>
                  <a href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Author Section ── */}
        <div className="bd-author-section">
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <Image
              src="/assets/David_Goggins_Headshot.jpg"
              alt="David Goggins"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/david-goggins">David Goggins</a></h2>
              <div className="bd-author-bio">
                <p>David Goggins is a retired Navy SEAL, ultramarathon runner, and one of the world&apos;s most recognized endurance athletes. He is the only member of the U.S. Armed Forces to complete SEAL training (including two Hell Weeks), Army Ranger School (graduating as Enlisted Honor Man), and Air Force Tactical Air Controller training.</p>
                <p>An accomplished endurance athlete, Goggins has completed more than 60 ultra-marathons, triathlons, and ultra-triathlons, regularly placing in the top five and setting new course records. He once held the Guinness World Record for pull-ups, completing 4,030 in 17 hours.</p>
                <p>His debut memoir, Can&apos;t Hurt Me, became a New York Times Best Seller with over 7 million copies sold. His follow-up, Never Finished, continues his exploration of mental toughness, resilience, and the untapped potential within all of us. Both books were published through Scribe Media.</p>
              </div>
              <a href="/authors/david-goggins" className="bd-author-link">
                View full profile →
              </a>
            </div>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">David Goggins</h2>
          <div className="bd-related-grid">
            <a href="/published-books/cant-hurt-me" className="bd-related-item">
              <Image
                src="/assets/cant-hurt-me.webp"
                alt="Can't Hurt Me"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Can&apos;t Hurt Me</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
