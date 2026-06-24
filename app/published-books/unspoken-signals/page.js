import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Unspoken Signals | Scribe Media',
  description:
    'Unspoken Signals by Yarona Boster — helping parents shift from reactivity to resilience and raise children who are secure, compassionate, and capable.',
}

export default function UnspokenSignalsPage() {
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
                  src="/assets/unspokensignals-cover-opt.jpg"
                  alt="Unspoken Signals"
                  width={300}
                  height={450}
                  className="bd-cover"
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Unspoken Signals</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/yarona-boster" className="bd-author-link">
                    Yarona Boster
                  </Link>
                </p>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    This book invites parents to move beyond quick fixes and discover the deeper
                    currents shaping family life. Drawing on nearly 2 decades of early childhood and
                    human development, psychology, and lived experience, Yarona Boster blends
                    heartfelt stories with practical tools to help parents shift from reactivity to
                    resilience. From connection and autonomy to competency, emotional literacy, and
                    legacy, this book equips families to raise children who are secure, compassionate,
                    and capable, while reminding parents that their own growth is part of the journey.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Home and Family</span>
                  <span className="bd-tag">Family</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/unspokensignals"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
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
          <div className="bd-divider"></div>
          <div className="bd-author-layout">
            <Image
              src="/assets/yarona-boster-headshot.jpg"
              alt="Yarona Boster"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/yarona-boster">Yarona Boster</Link>
              </h2>
              <p className="bd-author-bio">
                Yarona Boster is an Advanced Certified Life Coach, certified speaker coach, TEDx
                speaker, TEDx event moderator, and a two-time international bestselling author. With
                nearly two decades spent in early childhood and human development, psychology, and
                coaching, Yarona cohosts The Evolution of Parenting podcast and helps people craft
                emotionally resonant messages for world stages. Her TEDx talk explores parenting and
                foundational loss, a subject shaped by her numerous experiences with death and the
                dying process. From parents to world leaders, Yarona empowers people to lead and
                connect with empathy, resilience, and purpose through transformative communication.
              </p>
              <Link href="/authors/yarona-boster" className="bd-author-link">
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
