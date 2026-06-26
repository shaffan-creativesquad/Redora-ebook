import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'The Talent War by Michael Sarraille',
  description:
    'The Talent War by Michael Sarraille — how US Special Operations Forces assess, select, and develop world-class talent, and how your organization can do the same.',
}

export default function TheTalentWarPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="book-detail-page">
          <div className="book-detail-page__inner">

            <Link href="/published-books" className="bd-back">
              <i className="ph ph-arrow-left"></i> Back to Published Books
            </Link>

            <div className="bd-layout">
              {/* ── Cover ── */}
              <div>
                <Image
                  src="/assets/The-Talent-War-1.jpg"
                  alt="The Talent War"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">The Talent War</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/michael-sarraille">Michael Sarraille</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-value">4.7</span>
                  <span className="bd-rating-count">684 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Human Resources &amp; Personnel Management</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>Foreword written by New York Times bestselling author and retired Navy SEAL Jocko Willink. A must-read for any business leader looking to build elite teams and win on talent. Talent is the foundation of every success story from Silicon Valley to Wall Street to Main Street, and even on the battlefields of Iraq and Afghanistan. It&apos;s the hidden asset that never shows up on the balance sheet, despite being the driver for a company&apos;s true value. And now, in this hypercompetitive business environment, the war for talent has never been more important, or more complex. Of eight hundred CEOs and six hundred C-suite executives polled in 2019, the overwhelming majority cited the ability to attract and retain top talent as their number one concern. For your organization to win, you need to attract and retain the best talent. But without the right strategy or mindset, you won&apos;t be able to do so--and you won&apos;t be able to compete. After all, your people, not your product or service, are your strongest competitive advantage. When it comes to winning on talent, no one does it better or more consistently than the US Special Operations community. Their success comes down to their people and a widely held foundational belief: Talent + Leadership = Victory. The Talent War explores how US Special Operations Forces assess, select, and develop their world-class talent. You&apos;ll learn how to adopt a talent mindset, the single greatest weapon you can possess in the war for talent. When your organization reflects this mindset, you will hire, train, and develop the right people, and put them in the best positions to make decisions that allow you to retake the advantage and win the war.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Military</span>
                  <span className="bd-tag">Careers Services</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/B08GFG5C53?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$9.99</span>
                  </a>
                  <a href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Author Section ── */}
        <div className="book-author-section">
          <div className="book-author-section__divider"></div>
          <div className="book-author-section__layout">
            <img
              className="book-author-section__photo"
              src="https://scribemedia.com/hubfs/author-headshots/Michael_Sarraille_Headshot.jpg"
              alt="Michael Sarraille"
              loading="lazy"
            />
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/michael-sarraille">Michael Sarraille</a></h2>
              <div className="book-author-section__bio"><p>MIKE SARRAILLE, a retired US Navy SEAL officer and former Recon Marine, served twenty years in Special Operations before founding Talent War Group, a leadership development and executive search firm. As CEO, he leads an impressive team of experts who specialize in helping clients foster a culture of success by optimizing their company&apos;s most valuable resource: its employees. Mike is also the director of the Men&apos;s Journal Everyday Warrior franchise, which includes a critically acclaimed podcast. Recently, he founded ATTA, a performance-focused apparel brand born out of his Everyday Warrior concept and fueled by his passion for helping people succeed. An avid skydiver, Mike enjoys pushing the limits of what&apos;s possible. This inspired him to start Legacy Expeditions, an adventure capital firm that embarks on record-setting expeditions in honor of the brave men and women who lost their lives during the Global War on Terrorism. Learn more at Mikesarraille.com and Talentwargroup.com.</p></div>
              <a className="book-author-section__link" href="/authors/michael-sarraille">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a className="book-ah__card" href="/author-hour/episode/ep-1123-michael-sarraille-book-4-episode-1123">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Michael Sarraille Book 4: Episode 1123</p>
              <p className="book-ah__card-meta">February 02, 2023</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="book-related">
          <div className="book-related__divider"></div>
          <p className="book-related__label">More by this author</p>
          <h2 className="book-related__heading">Michael Sarraille</h2>
          <div className="book-related__grid">
            <a className="book-related__item" href="/published-books/the-everyday-warrior">
              <img className="book-related__cover" src="https://scribemedia.com/hubfs/images/books/MichaelSarraille_WebsiteCover.jpg" alt="The Everyday Warrior" loading="lazy" />
              <div className="book-related__title">The Everyday Warrior</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
