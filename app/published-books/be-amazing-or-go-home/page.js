import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Be Amazing or Go Home by Shep Hyken',
  description:
    'Want to amaze your customers, impress the people you work with, and outshine your competition? Going from average to amazing isn\'t an out-of-reach goal.',
}

export default function BeAmazingOrGoHomePage() {
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
                  src="/assets/be-amazing-or-go-home.jpg"
                  alt="Be Amazing or Go Home"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Be Amazing or Go Home</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/shep-hyken">Shep Hyken</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.6 · 243 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Books
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    Want to amaze your customers, impress the people you work with, and outshine
                    your competition? Going from average to amazing isn&apos;t an out-of-reach goal.
                    In fact, amazement is a habit that anyone can master&mdash;and Shep Hyken knows
                    the tricks to making it your own.
                  </p>
                  <p>
                    In <em>Be Amazing or Go Home</em>, Shep shares the secrets behind making his
                    motto &ldquo;Always Be Amazing!&rdquo; an everyday lifestyle and shows how you
                    too can become exceptional in business and in life. Drawing on the routines of
                    incredible people, Shep demonstrates simple practices that can elevate your
                    game, including:
                  </p>
                  <ul>
                    <li>Showing up ready to amazing</li>
                    <li>Being proactive</li>
                    <li>Craving feedback</li>
                    <li>Taking responsibility</li>
                    <li>Embracing authenticity</li>
                    <li>Focusing on excellence</li>
                    <li>Turning misery into magic</li>
                  </ul>
                  <p>
                    Once you master these habits, you&apos;ll be able to create trust, build
                    stronger relationships, make sales, advance your career, and more. Now is the
                    time to step out of the ordinary and step into amazing.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Personal Development</span>
                  <span className="bd-tag">B2B Consulting</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Be-Amazing-Go-Home-Confidence/dp/096378207X/?_encoding=UTF8&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$149.99</span>
                  </a>
                  <Link href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Author section (no photo) ── */}
        <div className="bd-author-section">
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/shep-hyken">Shep Hyken</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  In fact, amazement is a habit that anyone can master--and Shep Hyken knows the
                  tricks to making it your own.
                </p>
              </div>
              <Link href="/authors/shep-hyken" className="bd-author-link">
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
