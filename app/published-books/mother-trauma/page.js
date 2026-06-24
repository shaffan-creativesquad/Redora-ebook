import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Mother Trauma | Scribe Media',
  description:
    'Mother Trauma by Emily Lewis Bowers — a powerful story of healing from emotional abuse and generational trauma, and how to become the mother you never had.',
}

export default function MotherTraumaPage() {
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
                  src="./assets/EmilyBowers_WebsiteCover_Final-book.jpg"
                  alt="Mother Trauma"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Mother Trauma</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/emily-lewis-bowers">Emily Lewis Bowers</Link>
                </p>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    Betrayal noun be·tray·al{' '}
                    <em>: the violation of a moral standard, or of a person&apos;s trust or confidence</em>
                  </p>
                  <p>
                    For <strong>Emily Bowers</strong>, betrayal, emotional abuse, manipulation, and
                    even fear prevailed in her early years, and her mother was the source.
                  </p>
                  <p>
                    When love is scarce and tension is high, how do you learn about love and ways to
                    share it? When you&apos;re a cog in a cycle of generational trauma, how do you
                    disrupt harmful patterns and build your own?
                  </p>
                  <p>
                    <em>How do you become a healthy mom when you never had one?</em>
                  </p>
                  <p>
                    In <em>Mother Trauma</em>, Emily shares her story to reveal the truth about
                    emotional abuse and its lifelong impact on survivors. She reveals the steps
                    she&apos;s taken to heal old wounds, learn self-love, and grow into the mother
                    she wanted and needed as a child. You can learn from trauma rather than live in
                    it, but you need hope, healing, and compassion—from others and yourself. Learn
                    how to release toxic relationships, reach out for support, and know, above all,
                    that you are never alone.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Relationships</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/MotherTrauma"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$6.99</span>
                  </a>
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
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <Image
              src="https://scribemedia.com/hubfs/author-headshots/Emily_Lewis_Bowers_Headshot.jpg"
              alt="Emily Lewis Bowers"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/emily-lewis-bowers">Emily Lewis Bowers</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  Emily Bowers grew up in a small town in Florida, raised by a mother who abused
                  and then abandoned her. As an adult, Emily recognized that she was caught in a
                  cycle of generational trauma and set out to change patterns and become a very
                  different mom than the mothers in her family. With the support of her therapist,
                  friends, and family, including her unofficially adopted mother, Emily learned to
                  love herself and help others do the same. She lives in Vero Beach, Florida, with
                  her husband, their three young children, and one Great Pyrenees, Josie.
                </p>
              </div>
              <Link href="/authors/emily-lewis-bowers" className="bd-author-link">
                View full profile <span>→</span>
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
