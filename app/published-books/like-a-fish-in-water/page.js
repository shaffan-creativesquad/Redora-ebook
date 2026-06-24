import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Like a Fish in Water | Scribe Media',
  description:
    'Like a Fish in Water by Rich Kurtzman — your personal guide to international living. Learn how to adapt to any culture, fit in with the locals, and turn challenges into opportunities while studying abroad.',
}

export default function LikeAFishInWaterPage() {
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
                  src="./assets/Rich-Kurtzman_WebsiteCover_Final.png"
                  alt="Like a Fish in Water"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Like a Fish in Water</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/rich-kurtzman" className="bd-author-link">
                    Rich Kurtzman
                  </Link>
                </p>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    Studying abroad is the opportunity of a lifetime, but the idea of leaving home
                    so far behind can feel overwhelming. <em>Like a Fish in Water</em> prepares you
                    to feel comfortable, confident, and ready to take on the world, even in
                    unfamiliar territory. Rich Kurtzman is a Chicago native who has spent more than
                    twenty years living in Barcelona, overseeing study abroad programs and coaching
                    multinational organizations&mdash;teaching students and executives alike how to
                    thrive in new countries and cultures. Step by step, Kurtzman shows you what to
                    expect from your experience abroad, helping you harness your new cultural
                    superpowers to land your dream job.
                  </p>
                  <p>
                    <em>Like a Fish in Water</em> is your personal guide to international living.
                    Learn how to adapt to any culture, fit in with the locals, and turn what you
                    thought were challenges into exciting opportunities. Done right, studying abroad
                    will dramatically expand your horizons&mdash;not just in your professional
                    career but for the rest of your life.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Education</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/LikeaFishinWater"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$6.99</span>
                  </a>
                  <Link
                    href="/success-stories/how-rich-kurtzman-turned-covid-pause-into-category-defining-playbook"
                    className="bd-btn bd-btn--secondary"
                  >
                    Read Success Story
                  </Link>
                  <Link href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Author section ── */}
        <div className="bd-author-section">
          <div className="bd-divider"></div>
          <div className="bd-author-layout">
            <Image
              src="/assets/RichKurtzman_Headshot.jpg"
              alt="Rich Kurtzman"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/rich-kurtzman">Rich Kurtzman</Link>
              </h2>
              <p className="bd-author-bio">
                Rich Kurtzman was born and raised in Chicago, Illinois. He studied abroad in Russia
                and Spain and interned in Italy before following his dream to work in Barcelona.
                Still there twenty years later, Rich has dedicated his entire professional career to
                international education. Today, he directs a study abroad company and is a
                sought-after speaker on building intercultural competence and working across cultures.
              </p>
              <p className="bd-author-bio">
                Rich and his wonderful English wife live just outside Barcelona with their two
                multicultural, multilingual children. His newsletter, Culture Stock: Tips and Tricks
                for Increasing Cultural Awareness, has a distribution of thousands. Find more
                information at FishInWaterBook.com.
              </p>
              <Link href="/authors/rich-kurtzman" className="bd-author-link">
                View full profile →
              </Link>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <Link
              href="/author-hour/episode/rich-kurtzman-how-writing-a-book-transformed-his-business-abroad"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">
                Rich Kurtzman: How Writing A Book Transformed His Business Abroad
              </p>
              <p className="book-ah__card-meta">September 29, 2025 · 00:28:58</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
            <Link
              href="/author-hour/episode/ep-918-rich-kurtzman-episode-918"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Rich Kurtzman: Episode 918</p>
              <p className="book-ah__card-meta">April 25, 2022</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
