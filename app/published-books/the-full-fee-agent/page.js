import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'The Full Fee Agent by Chris Voss',
  description:
    'The Full Fee Agent by Chris Voss — a proven blueprint for getting more business and doing business in a better way.',
}

export default function TheFullFeeAgentPage() {
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
                  src="https://scribemedia.com/hubfs/images/books/VossShull_WebsiteCover.jpg"
                  alt="The Full Fee Agent"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">The Full Fee Agent</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/chris-voss">Chris Voss</Link>
                </p>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    You got into real estate because you wanted flexibility, freedom, and a big
                    upside. Instead, you&apos;re working 24/7, freedom is the last thing you feel,
                    and every dollar is a struggle. The kicker: you rarely (if ever) charge your
                    full fee. Most days, you feel like a pushy salesperson who has to give discounts
                    to get business.<br />Not anymore.<br />The Full Fee Agent is a proven blueprint
                    for getting more business and, more importantly, doing business in a better
                    way.{' '}<br />Every deal comes easier, with less stress and more profit. The
                    tough conversations that used to haunt you become effortless. Your pipeline fills
                    with repeat and referral clients&mdash;and you feel more authentic and balanced
                    than ever before.<br />It&apos;s all thanks to one crucial skill, and this is
                    the one book you need to master it.<br />Stop giving away your value. Join the
                    growing ranks of full-fee agents who are charging their worth and reclaiming
                    their lives.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Marketing</span>
                  <span className="bd-tag">Sales</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/TheFullFeeAgent"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$18.85</span>
                  </a>
                  <Link href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider"></div>
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a
              className="book-ah__card"
              href="/author-hour/episode/ep-56-chris-voss-never-split-the-difference"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Chris Voss: Never Split the Difference</p>
              <p className="book-ah__card-meta">November 14, 2017</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
