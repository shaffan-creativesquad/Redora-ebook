import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Pavel Ythjall | Scribe Media Author',
  description:
    'Pavel Ythjall is one of the top contemporary photographers for women in fitness in America. Author of True Love and Suffering, his story of tragedy and resilience.',
}

export default function PavelYthjallAuthorPage() {
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
                src="/assets/Pavel-Ythjal-541-296.jpg"
                alt="Pavel Ythjall"
                width={200}
                height={200}
                className="author-detail__avatar-img"
                priority
              />
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Pavel Ythjall</h1>
              <p className="author-detail__location">
                <i className="ph ph-map-pin"></i> Hawthorne, CA
              </p>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Memoir</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/B09HQCSK9B?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a
                  href="https://truelovethebook.com/"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ph ph-globe"></i> Website
                </a>
              </div>
            </div>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Pavel</h2>
            <div className="author-detail__bio">
              <p>
                Pavel Ythjall is one of the top contemporary photographers for women in fitness in
                America. He came to the United States from Sweden to pursue the American dream. He
                was well on his way when tragedy struck.
              </p>
              <p>
                Kat was a major in the US Air Force. An American born and raised in Belize, she was
                an avid fitness enthusiast, marathoner, and triathlete, earning pro status with the
                International Federation of Bodybuilding.
              </p>
              <p>
                Today, Kat runs a family home command station for Pavel and their four Yorkies,
                managing her caregivers while taking online classes for a second master&apos;s
                degree in psychology.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link
                href="/published-books/true-love-and-suffering"
                className="author-detail__book-card"
              >
                <div className="author-detail__book-cover-wrap">
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/true-love-and-suffering.jpg"
                    alt="True Love and Suffering"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">True Love and Suffering</p>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Psychology and Counseling</span>
            </div>
          </div>

          {/* ── Case Study banner ── */}
          <div className="author-detail__case-study">
            <div className="author-detail__case-study-content">
              <p className="author-detail__case-study-eyebrow">★ Scribe Case Study</p>
              <p className="author-detail__case-study-title">
                Pavel Ythjall&apos;s Book Created His Legacy&mdash;And Paved the Way to a
                Full-Length Feature Film
              </p>
              <p className="author-detail__case-study-desc">
                After suffering a tragic car accident, Pavel Ythjall turned to writing to cope with
                his pain. Now, he is a published Author helping people around the world.
              </p>
            </div>
            <Link
              href="/success-stories/pavel-ythjall-true-love-and-suffering"
              className="author-detail__case-study-btn"
            >
              Read the Case Study <span style={{ fontSize: '1.1rem' }}>→</span>
            </Link>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Pavel and 2,000+ authors who have published with Scribe Media.
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
