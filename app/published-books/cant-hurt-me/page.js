import './book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "Can't Hurt Me by David Goggins",
  description:
    "For David Goggins, childhood was a nightmare - poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline,...",
}

export default function CantHurtMePage() {
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
                  src="/assets/cant-hurt-me.jpg"
                  alt="Can't Hurt Me"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Can&apos;t Hurt Me</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/david-goggins">David Goggins</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-value">4.8</span>
                  <span className="bd-rating-count">105,142 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Health, Fitness &amp; Dieting</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>For David Goggins, childhood was a nightmare - poverty, prejudice, and physical abuse colored his days and haunted his nights. But through self-discipline, mental toughness, and hard work, Goggins transformed himself from a depressed, overweight young man with no future into a U.S. Armed Forces icon and one of the world&apos;s top endurance athletes. The only man in history to complete elite training as a Navy SEAL, Army Ranger, and Air Force Tactical Air Controller, he went on to set records in numerous endurance events, inspiring <em>Outside</em> magazine to name him The Fittest (Real) Man in America.</p>
                  <p>In <em>Can&apos;t Hurt Me</em>, he shares his astonishing life story and reveals that most of us tap into only 40% of our capabilities. Goggins calls this The 40% Rule, and his story illuminates a path that anyone can follow to push past pain, demolish fear, and reach their full potential.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Memoir</span>
                  <span className="bd-tag">Military</span>
                  <span className="bd-tag">Personal Development</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/1544512287?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$29.99</span>
                  </a>
                  <a
                    href="https://www.amazon.com/Cant-Hurt-Me-David-Goggins-audiobook/dp/B07KKP62FW/ref=sr_1_1?crid=C2BQRWVPI21V&keywords=Can%27t+Hurt+Me&qid=1658475889&s=audible&sprefix=can%27t+hurt+me%2Caudible%2C68&sr=1-1"
                    className="bd-btn bd-btn--secondary"
                    target="_blank"
                    rel="noopener"
                  >
                    Listen to Audiobook
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
              src="https://scribemedia.com/hubfs/author-headshots/David_Goggins_Headshot.jpg"
              alt="David Goggins"
              loading="lazy"
            />
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/david-goggins">David Goggins</a></h2>
              <div className="book-author-section__bio">
                <p>David Goggins is a retired Navy SEAL, ultramarathon runner, and one of the world&apos;s most recognized endurance athletes. He is the only member of the U.S. Armed Forces to complete SEAL training (including two Hell Weeks), Army Ranger School (graduating as Enlisted Honor Man), and Air Force Tactical Air Controller training.</p>
                <p>An accomplished endurance athlete, Goggins has completed more than 60 ultra-marathons, triathlons, and ultra-triathlons, regularly placing in the top five and setting new course records. He once held the Guinness World Record for pull-ups, completing 4,030 in 17 hours.</p>
                <p>His debut memoir, Can&apos;t Hurt Me, became a New York Times Best Seller with over 7 million copies sold. His follow-up, Never Finished, continues his exploration of mental toughness, resilience, and the untapped potential within all of us. Both books were published through Scribe Media.</p>
              </div>
              <a className="book-author-section__link" href="/authors/david-goggins">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="book-related">
          <div className="book-related__divider"></div>
          <p className="book-related__label">More by this author</p>
          <h2 className="book-related__heading">David Goggins</h2>
          <div className="book-related__grid">
            <a className="book-related__item" href="/published-books/never-finished">
              <img className="book-related__cover" src="https://scribemedia.com/hubfs/images/books/DavidGoggins_WebsiteCover.jpg" alt="Never Finished" loading="lazy" />
              <div className="book-related__title">Never Finished</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
