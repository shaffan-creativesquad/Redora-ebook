import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'True Love and Suffering | Scribe Media',
  description:
    'After only a year of marriage, Pavel Ythjall found himself staring into the eyes of a neurosurgeon who told him point-blank: "Your wife will be paralyzed, neck down, for life."',
}

export default function TrueLoveAndSufferingPage() {
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
                  src="/assets/true-love-and-suffering.jpg"
                  alt="True Love and Suffering"
                  width={300}
                  height={450}
                  className="bd-cover"
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">True Love and Suffering</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/pavel-ythjall" className="bd-author-link">
                    Pavel Ythjall
                  </Link>
                </p>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    After only a year of marriage, Pavel Ythjall found himself staring into the eyes
                    of a neurosurgeon who told him point-blank: &ldquo;Your wife will be paralyzed,
                    neck down, for life.&rdquo; At the time, Pavel had a broken neck too. His
                    vertebrae were supported by a halo screwed directly into his skull. A tragic
                    accident on the way to a Christmas party had changed their lives forever. They
                    had no family to help them. The doctor predicted Kat would find a way to kill
                    herself, despite the paralysis. As reality sank in, everyone thought Pavel would
                    leave her. But he was their only hope of discovering a new way to move
                    forward&mdash;together.
                  </p>
                  <p>
                    A beautiful, heart-wrenching story of trauma, love, grace, and the ultimate
                    meaning of life, <em>True Love and Suffering</em> was born from the global
                    movement around Pavel and Kat&apos;s incredible journey. Join thousands around
                    the world who have discovered their own strength, resilience, and hope for true
                    love through the inspiring lives of these two heroes.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Memoir</span>
                  <span className="bd-tag">Psychology and Counseling</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/TrueLoveandSuffering"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$6.99</span>
                  </a>
                  <a
                    href="https://www.amazon.com/True-Love-Suffering-Caretakers-Blessings/dp/B09M5XV6DT/ref=sr_1_1?crid=1U3M6H1ULLU3H&keywords=True+Love+and+Suffering&qid=1658477475&s=audible&sprefix=true+love+and+suffering%2Caudible%2C74&sr=1-1"
                    className="bd-btn bd-btn--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen to Audiobook
                  </a>
                  <Link
                    href="/success-stories/pavel-ythjall-true-love-and-suffering"
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
              src="/assets/Pavel-Ythjal-541-296.jpg"
              alt="Pavel Ythjall"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/pavel-ythjall">Pavel Ythjall</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  Pavel Ythjall is one of the top contemporary photographers for women in fitness in
                  America. He came to the United States from Sweden to pursue the American dream. He
                  was well on his way when tragedy struck.
                </p>
                <p>
                  Kat was a major in the US Air Force. An American born and raised in Belize, she
                  was an avid fitness enthusiast, marathoner, and triathlete, earning pro status with
                  the International Federation of Bodybuilding.
                </p>
                <p>
                  Today, Kat runs a family home command station for Pavel and their four Yorkies,
                  managing her caregivers while taking online classes for a second master&apos;s
                  degree in psychology.
                </p>
              </div>
              <Link href="/authors/pavel-ythjall" className="bd-author-link">
                View full profile →
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
