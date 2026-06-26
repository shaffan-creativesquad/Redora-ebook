import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Fire Them Now by Phillip Stutts',
  description:
    'Fire Them Now by Phillip Stutts — illuminates common failures within the digital marketing industry and explores the strategies and tactics used in politics that win for businesses.',
}

export default function FireThemNowPage() {
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
                  src="/assets/fire-them-now.jpg"
                  alt="Fire Them Now"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Fire Them Now</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/phillip-stutts">Phillip Stutts</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-value">4.5</span>
                  <span className="bd-rating-count">92 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Entrepreneurship</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    Your digital marketing firm is failing your business, not delivering on the kind
                    of passion, commitment, and innovation they promised. To ensure that you&apos;re
                    getting the best, you need to know how to demand better&mdash;by learning from
                    the incredible strategies of the fast-paced arena of political marketing. In
                    Fire Them Now, Phillip Stutts illuminates common failures within the digital
                    marketing industry and explores the strategies and tactics used in politics that
                    win for businesses. He examines why political marketers are producing some of
                    the most successful marketing in the game&mdash;working with limited budgets and
                    tight deadlines while demonstrating unwavering work ethic, adaptability, and
                    proactivity. This eye-opening guide offers a new pathway for businesses to
                    succeed in an ever-changing economy, providing the tools you&apos;ll need to
                    challenge your current digital marketing agency. And if they can&apos;t deliver
                    the win, Fire Them Now!
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Law and Politics</span>
                  <span className="bd-tag">Marketing</span>
                  <span className="bd-tag">Marketing and Advertising</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Fire-Them-Now-Strategies-Businesses/dp/1619618869/?_encoding=UTF8&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$10.79</span>
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
              src="https://scribemedia.com/hubfs/author-headshots/phillip-stutts.jpg"
              alt="Phillip Stutts"
              loading="lazy"
            />
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/phillip-stutts">Phillip Stutts</a></h2>
              <div className="book-author-section__bio"><p>Founder, CEO, and bestselling author Phillip Stutts plays the game of corporate and political marketing on the highest level, battling with fierce competition, multibillion-dollar budgets, and a win-or-die mindset. He&apos;s worked with multiple Fortune 200 companies, contributed to more than 1,400 election victories (including three presidential wins), and made more than 350 national media appearances on outlets like ESPN, CBS, and CNN. Phillip has been lauded by Fox Business as a &ldquo;marketing genius&rdquo; who has &ldquo;generated record sales for his clients.&rdquo;</p></div>
              <a className="book-author-section__link" href="/authors/phillip-stutts">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a className="book-ah__card" href="/author-hour/episode/ep-106-phillip-stutts-fire-them-now">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Phillip Stutts: Fire Them Now</p>
              <p className="book-ah__card-meta">March 06, 2018</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
            <a className="book-ah__card" href="/author-hour/episode/ep-682-phillip-stutts-episode-682">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Phillip Stutts: Episode 682</p>
              <p className="book-ah__card-meta">April 19, 2021</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="book-related">
          <div className="book-related__divider"></div>
          <p className="book-related__label">More by this author</p>
          <h2 className="book-related__heading">Phillip Stutts</h2>
          <div className="book-related__grid">
            <a className="book-related__item" href="/published-books/the-undefeated-marketing-system">
              <img
                className="book-related__cover"
                src="https://scribemedia.com/hubfs/images/books/The-undefeated-marketing-system.jpg"
                alt="The Undefeated Marketing System"
                loading="lazy"
              />
              <div className="book-related__title">The Undefeated Marketing System</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
