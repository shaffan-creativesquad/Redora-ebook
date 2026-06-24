import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'The Game Changing Attorney | Scribe Media',
  description:
    'The only resource you need to position your practice to draw in high-value clients and cases — by Michael Mogill, CEO of Crisp and Bestseller in Commercial Law.',
}

export default function TheGameChangingAttorneyPage() {
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
                  src="./assets/Stress-Free-Money-2.jpg"
                  alt="The Game Changing Attorney"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">The Game Changing Attorney</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/michael-mogill">Michael Mogill</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.6 · 626 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Commercial Law
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    The only resource you need to position your practice to draw in high-value
                    clients and cases. These days, even if you&apos;re an outstanding lawyer,
                    you&apos;re getting lost in the shuffle. America&apos;s legal landscape is
                    saturated with more than 1.3 million attorneys, and they&apos;re all competing
                    fiercely to attract the same discerning clients and high-value cases you are.
                    This is not just another marketing book; it&apos;s a comprehensive blueprint
                    designed for ambitious law firms eager to attract high-value cases.
                  </p>
                  <p>
                    <strong>Some of the Game-Changing Techniques You&apos;ll Discover:</strong>
                    <br /><strong>Master Your Brand Identity:</strong> Develop a compelling brand
                    narrative that resonates with your target audience, making your firm
                    unforgettable in a crowded marketplace.
                    <br /><strong>Growth Strategies Designed for Law Firms:</strong> Learn the art
                    of optimizing your online presence to ensure that potential clients find you
                    first. Discover elite-level growth strategies that attract and convert a vast
                    online audience searching for your services.
                    <br /><strong>Create a Client Acquisition System:</strong> Build a systematic
                    approach to attracting and retaining clients, ensuring a steady flow of business
                    while maximizing your firm&apos;s profitability.
                    <br /><strong>Craft Compelling Visual Content:</strong> Produce impactful videos
                    and marketing materials that speak directly to your ideal clients, forging strong
                    connections from the outset.
                    <br /><strong>Strategic Asset Placement:</strong> Not only will you create
                    marketing assets, but you&apos;ll also learn where to deploy them effectively to
                    maximize visibility.
                    <br /><strong>The Edge to Differentiate Your Practice:</strong> Equip yourself
                    with innovative techniques that go beyond traditional marketing, leveraging your
                    unique voice to attract the clients you truly want.
                  </p>
                  <p>
                    This essential resource guides you through the daunting world of legal marketing
                    with clear, actionable steps. You&apos;ll master the art of differentiation and
                    storytelling while learning exactly how to attract high-value clients. From
                    creating compelling content to measuring success with the right metrics, this
                    book equips you with everything you need to elevate your practice. With{' '}
                    <em>The Game Changing Attorney</em>, you&apos;ll gain the strategies to attract
                    better cases, boost your revenue, and reclaim your freedom—all within just one
                    week of implementing these proven techniques. Don&apos;t just compete; dominate
                    your market!
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Law and Politics</span>
                  <span className="bd-tag">Marketing and Advertising</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/B07JWGX3YB?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$6.49</span>
                  </a>
                  <Link
                    href="/success-stories/michael-mogill-game-changing-attorney"
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
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <Image
              src="https://scribemedia.com/hubfs/author-headshots/michael-mogill.jpg"
              alt="Michael Mogill"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/michael-mogill">Michael Mogill</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  Michael Mogill is the founder and CEO of Crisp, the largest law firm growth
                  company in the United States, which has helped generate over $1 billion in new
                  revenue for its clients. He started Crisp in 2012 with just $500 and no
                  investors, and the company has earned a spot on the Inc. 500 list of
                  fastest-growing private companies in America.
                </p>
              </div>
              <Link href="/authors/michael-mogill" className="bd-author-link">
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
