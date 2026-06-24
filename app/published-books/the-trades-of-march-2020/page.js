import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'The Trades of March 2020 | Scribe Media',
  description:
    'The Trades of March 2020 by Alex Gurevich — a Wall Street Journal Bestseller. A firsthand account of navigating financial markets during the pandemic crisis. Bestseller in Knowledge Capital.',
}

export default function TradesOfMarch2020Page() {
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
                  src="./assets/the-trades-of-march.jpg"
                  alt="The Trades of March 2020"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">The Trades of March 2020</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/alex-gurevich">Alex Gurevich</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★<span className="bd-star-empty">☆</span></span>
                  <span className="bd-rating-text">4.2 · 123 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Knowledge Capital
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    <strong>WALL STREET JOURNAL BESTSELLER</strong> A lucidly intelligent account
                    of an investment strategy during turbulent times. — <em>Kirkus Reviews</em>
                  </p>
                  <p>
                    &ldquo;Alex is one of the most extraordinary traders I have known. He has the
                    rare ability to look through the daily &lsquo;noise&rsquo; and form clear views
                    of what should, or sometimes has to, happen in markets. He has a brilliant mind
                    capable of describing those views to risk officers and investors to gain their
                    confidence and support. In this book, Alex offers a glimpse into the psychology
                    of a trader&rsquo;s life, capturing the emotions pervasive across trading rooms
                    globally. This is not just for professional investors; at times it reads like a
                    thriller appealing to a wide variety of interests.&rdquo; — John Anderson,
                    Co-Head of Fixed Income and Commodities at Millennium Management
                  </p>
                  <p>
                    Have you ever wondered what happens in the command control of a global macro
                    hedge fund when US stock markets plunge 35 percent in just three weeks? Welcome
                    to the mind of Alex Gurevich, Wall Street Journal Bestselling Author and
                    Founder and CIO of HonTe Investments.
                  </p>
                  <p>
                    As tragic events unfolded around the world, the pandemic ruptured the sequence
                    of price action and devoured financial markets like a black hole. Through
                    Gurevich&apos;s personal narrative and the team&apos;s actual Slack messages,{' '}
                    <em>The Trades of March 2020</em> follows their frenetic efforts to survive the
                    crisis.
                  </p>
                  <p>
                    From the first terrifying days of loss, both personal and professional, to the
                    team&apos;s redoubled attempts to identify emerging opportunities, this account
                    of crucial, in-the-moment decisions is a faithful record of the trading moves
                    made in the unprecedented month of March 2020.
                  </p>
                  <p>
                    Discover the thinking and investment philosophy that led HonTe to survive and
                    ultimately thrive during one of the most extraordinary challenges of our time.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Financial Planning</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/B09NX372KG?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$9.99</span>
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
              src="https://scribemedia.com/hubfs/author-headshots/Alex_Gurevich_Headshot.jpg"
              alt="Alex Gurevich"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/alex-gurevich">Alex Gurevich</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  As tragic events unfolded around the world, the pandemic ruptured the sequence of
                  price action and devoured financial markets like a black hole. Through
                  Gurevich&apos;s personal narrative and the team&apos;s actual Slack messages,{' '}
                  <em>The Trades of March 2020</em> follows their frenetic efforts to survive the
                  crisis. <em>The Next Perfect Trade</em> shifts focus from the forces that drive
                  markets to those that drive successful trades, an approach HonTe Investments
                  founder Alex Gurevich named the &ldquo;Magic Sword of Necessity.&rdquo; With
                  complete training and equipment, the sword of necessity gives you a devastating
                  advantage.
                </p>
              </div>
              <Link href="/authors/alex-gurevich" className="bd-author-link">
                View full profile <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider" />
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <Link
              href="/author-hour/episode/ep-832-alex-gurevich-the-trades-of-march-2020-a-shield-against-uncertainty"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">
                Alex Gurevich: The Trades of March 2020: A Shield Against Uncertainty
              </p>
              <p className="book-ah__card-meta">December 09, 2021</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
