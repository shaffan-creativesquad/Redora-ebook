import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: '100 Deadly Skills by Clint Emerson',
  description:
    '100 Deadly Skills by Clint Emerson — A hands-on, practical survival guide from retired Navy SEAL Clint Emerson adapted for civilians from actual special forces operations.',
}

export default function OneHundredDeadlySkillsPage() {
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
                  src="/assets/100-deadly-skills.jpg"
                  alt="100 Deadly Skills"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">100 Deadly Skills</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/clint-emerson">Clint Emerson</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-value">4.6</span>
                  <span className="bd-rating-count">11,285 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Intelligence &amp; Espionage History</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>A hands-on, practical survival guide from retired Navy SEAL Clint Emerson—adapted for civilians from actual special forces operations—to eluding pursuers, evading capture, and surviving any dangerous situation.In today's increasingly dangerous world, threats to your personal safety are everywhere. From acts of terror to mass shootings, and from the unseen (and sometimes virtual) matrix of everyday crime, danger is no longer confined to dark alleys or unstable regions. Potentially life-threatening circumstances can arise anywhere, anytime, and Clint Emerson—former Navy SEAL—wants you to be prepared. 100 Deadly Skills contains proven self-defense skills, evasion tactics, and immobilizing maneuvers—modified from the world of black ops—to help you take action in numerous "worst case" scenarios from escaping a locked trunk, to making an improvised Taser, to tricking facial recognition software. With easy-to-understand instructions and illustrations, Emerson outlines in detail many life-saving strategies and teaches you how to think and act like a member of the special forces. This complete course in survival teaches you how to prevent tracking, evade a kidnapping, elude an active shooter, rappel down the side of a building, immobilize a bad guy, protect yourself against cyber-criminals, and much more—all using low-tech to "no-tech" methods. Clear, detailed, and presented in an easy-to-understand and execute format, 100 Deadly Skills is an invaluable resource. Because let's face it, when danger is imminent, you don't have time for complicated instructions.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Personal Development</span>
                  <span className="bd-tag">Sports and Fitness</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/147679605X?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$12.10</span>
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
              src="https://scribemedia.com/hubfs/author-headshots/Clint_Emerson_Headshot.jpg"
              alt="Clint Emerson"
              loading="lazy"
            />
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/clint-emerson">Clint Emerson</a></h2>
              <div className="book-author-section__bio"><p>Entrepreneur and bestselling author Clint Emerson is a retired 20-year Navy SEAL, who served with the elite DEVGRU and national government agencies. Escape the Wolf, the company Emerson founded, is a crisis management company providing preemptive, holistic security solutions and crisis management. Emerson is the author of Escape the Wolf and the bestselling 100 Deadly Skills book series.</p></div>
              <a className="book-author-section__link" href="/authors/clint-emerson">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a className="book-ah__card" href="/author-hour/episode/ep-609-clint-emerson-episode-609">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Clint Emerson: Episode 609</p>
              <p className="book-ah__card-meta">January 13, 2021</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
