import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Rich Kurtzman | Scribe Media Author',
  description:
    'Rich Kurtzman has dedicated his entire professional career to international education. He directs a study abroad company and is a sought-after speaker on building intercultural competence and working across cultures.',
}

export default function RichKurtzmanAuthorPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="author-detail">

          <Link href="/authors" className="author-detail__back">
            <i className="ph ph-arrow-left"></i> All Authors
          </Link>

          {/* ── Header ── */}
          <div className="author-detail__header">
            <div className="author-detail__avatar-wrap">
              <Image
                src="/assets/RichKurtzman_Headshot.jpg"
                alt="Rich Kurtzman"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Rich Kurtzman</h1>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Education</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/B0B1CMX3LX?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
              </div>
            </div>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Rich</h2>
            <div className="author-detail__bio">
              <p>
                Rich Kurtzman was born and raised in Chicago, Illinois. He studied abroad in Russia
                and Spain and interned in Italy before following his dream to work in Barcelona.
                Still there twenty years later, Rich has dedicated his entire professional career to
                international education. Today, he directs a study abroad company and is a
                sought-after speaker on building intercultural competence and working across cultures.
              </p>
              <p>
                Rich and his wonderful English wife live just outside Barcelona with their two
                multicultural, multilingual children. His newsletter, Culture Stock: Tips and Tricks
                for Increasing Cultural Awareness, has a distribution of thousands. Find more
                information at FishInWaterBook.com.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link
                href="/published-books/like-a-fish-in-water"
                className="author-detail__book-card"
              >
                <div className="author-detail__book-cover-wrap">
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/Rich-Kurtzman_WebsiteCover_Final.webp"
                    alt="Like a Fish in Water"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Like a Fish in Water</p>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Education</span>
            </div>
          </div>

          {/* ── Case Study banner ── */}
          <div className="author-detail__case-study">
            <div className="author-detail__case-study-content">
              <p className="author-detail__case-study-eyebrow">★ Scribe Case Study</p>
              <p className="author-detail__case-study-title">
                How Rich Kurtzman Turned a COVID Pause into a Category-Defining Playbook
              </p>
              <p className="author-detail__case-study-desc">
                When travel paused, Rich Kurtzman wrote the must-have book for students studying
                abroad&mdash;now used by 10+ universities and boosting his credibility.
              </p>
            </div>
            <Link
              href="/success-stories/how-rich-kurtzman-turned-covid-pause-into-category-defining-playbook"
              className="author-detail__case-study-btn"
            >
              Read the Case Study <span style={{ fontSize: '1.1rem' }}>→</span>
            </Link>
          </div>

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <Link
                href="/author-hour/episode/rich-kurtzman-how-writing-a-book-transformed-his-business-abroad"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">
                  Rich Kurtzman: How Writing A Book Transformed His Business Abroad
                </p>
                <p className="author-detail__ah-meta">September 29, 2025 · 00:28:58</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
              <Link
                href="/author-hour/episode/ep-918-rich-kurtzman-episode-918"
                className="author-detail__ah-card"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Rich Kurtzman: Episode 918</p>
                <p className="author-detail__ah-meta">April 25, 2022</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </Link>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Rich and 2,000+ authors who have published with Scribe Media.
            </p>
            <Link href="/consult" className="author-detail__cta-btn">
              Schedule a Consult
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
