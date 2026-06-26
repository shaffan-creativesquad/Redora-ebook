import '../cameron-herold/cameron-herold.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Chris Heivly | Published Author',
  description:
    'Chris Heivly is a published Scribe Media author. Chris Heivly is a life-long entrepreneur, a multifaceted investor (angel, corporate VC and micro VC) and f...',
}

export default function ChrisHeivlyAuthorPage() {
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
                src="/assets/Chris_Heivly_Headshot.png"
                alt="Chris Heivly"
                width={600}
                height={600}
                className="author-detail__avatar-img"
                priority
                unoptimized
              />
              <span className="author-detail__initials author-detail__initials--fallback">CH</span>
            </div>
            <div className="author-detail__info">
              <h1 className="author-detail__name">Chris Heivly</h1>
              <p className="author-detail__location">
                <i className="ph ph-map-pin"></i> New London, NC
              </p>
              <div className="author-detail__meta">
                <span className="author-detail__tag">
                  <i className="ph ph-books"></i> 1 Book
                </span>
                <span className="author-detail__tag">Business</span>
              </div>
              <div className="author-detail__links">
                <a
                  href="https://www.amazon.com/dp/B0C1TF24XR?tag=scribemedia0a-20"
                  className="author-detail__link author-detail__link--primary"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="ph ph-amazon-logo"></i> View on Amazon
                </a>
                <a
                  href="https://www.linkedin.com/in/chrisheivly/"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="ph ph-linkedin-logo"></i> LinkedIn
                </a>
                <a
                  href="https://www.heivly.com"
                  className="author-detail__link author-detail__link--secondary"
                  target="_blank"
                  rel="noopener"
                >
                  <i className="ph ph-globe"></i> Website
                </a>
              </div>
            </div>
          </div>

          {/* ── About ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">About Chris</h2>
            <div className="author-detail__bio">
              <p>
                Chris Heivly is a life-long entrepreneur, a multifaceted investor (angel, corporate
                VC and micro VC) and for the last 12+ years a start community builder and
                consultant. He has been dubbed the &ldquo;The Startup Whisperer&rdquo; due to his
                experiences with helping founders, investors and startup community enthusiasts
                create environments for success.
              </p>
              <p>
                For over 30 years, Heivly has worked at the highest levels for some of the
                world&apos;s most recognized brands, including co-founder of MapQuest, which was
                sold to AOL for $1.2 billion; Rand McNally, the world&apos;s largest map
                publisher; and Accenture, the largest multinational management consulting,
                technology services, and outsourcing company on the planet. He has also personally
                directed over $75 million in investment capital on behalf of these and other
                organizations.
              </p>
              <p>
                Heivly currently serves as one of two managing directors of The Startup Factory,
                one of the largest seed investment firms in the Southeast. Under his leadership,
                the firm has made 35 investments in just four years in emerging technology
                companies.
              </p>
              <p>
                After TSF, Chris joined Techstars, the world&apos;s largest ecosystem that helps
                entrepreneurs build great businesses, to develop a new set of products and services
                focused on helping startup communities grow. This role leveraged Heivly&apos;s
                experience in building the Raleigh/Durham ecosystem with the expertise of Brad Feld
                (Foundry Group, Startup Communities, The Startup Community Way) and the Techstars
                staff. Over the past five and a half years, Heivly created a team of 12, generated
                consulting engagements (3 months to 3 years), and materially changed
                entrepreneurship in under-developed cities (Ft Wayne, Indiana; Lima, Peru; Buffalo,
                New York; Okanagan, British Columbia; Taipei, Taiwan and many others).
              </p>
              <p>
                Heivly has become a sought-after speaker and go-to source for media. He has been
                quoted in major national and international outlets such as Forbes, Inc., the
                Washington Post, TechCrunch, Crain&apos;s Business Journal, Huffington Post, Tech
                Cocktail, and the Financial, and has appeared in major-market TV stations across
                the U.S. Because of his stature in the startup world, he was heavily featured in
                the documentary Startupland, which showcased the world&apos;s most renowned
                entrepreneurs and startup experts. He is a contributing writer for Inc.com, the
                nation&apos;s leading entrepreneurial magazine for entrepreneurs and business
                owners, and has a significant following for Heivly.com, his own highly respected
                blog that offers brutally authentic commentary on startups and the startup
                community.
              </p>
              <p>
                His book, Build the Fort is about how to take the lessons you learned as a 10-year
                old and apply those lessons to starting anything. His book was inspired from a
                widely acclaimed TEDx talk in 2014. The book focuses on the months leading up to
                the decision to start a company and those first three critical months of getting
                your idea off the ground. His insights are being applied in multiple realms, from
                any individual with a dream, to startups and companies that aspire to be more
                innovative, to emerging entrepreneurial communities.
              </p>
              <p>
                Today, Chris is semi-retired, and picks a handful of meaningful projects to get
                involved in every year. He produces and hosts a podcast, Your Startup Community
                with Brad Feld and Ian Hathaway and expects to release his 2nd book this year,
                Build The Fort: STARTUP COMMUNITY BUILDER, A Global Field Guide for how to get
                involved, create impact, fund and accelerate your entrepreneurial ecosystem.
              </p>
            </div>
          </div>

          {/* ── Published Books ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Published Books</h2>
            <div className="author-detail__books-grid">
              <Link href="/published-books/build-the-fort" className="author-detail__book-card">
                <div className="author-detail__book-cover-wrap">
                  <Image
                    src="https://scribemedia.com/hs-fs/hubfs/images/books/ChrisHeivly_WebsiteCover.jpg?width=264&height=406&name=ChrisHeivly_WebsiteCover.jpg"
                    alt="Build the Fort"
                    width={264}
                    height={406}
                    className="author-detail__book-cover"
                    unoptimized
                  />
                </div>
                <div className="author-detail__book-card-info">
                  <p className="author-detail__book-card-title">Build the Fort</p>
                </div>
              </Link>
            </div>
          </div>

          {/* ── Industries ── */}
          <div className="author-detail__section">
            <h2 className="author-detail__section-title">Industries</h2>
            <div className="author-detail__meta">
              <span className="author-detail__tag">Business Management</span>
            </div>
          </div>

          {/* ── Author Hour ── */}
          <div className="author-detail__section author-detail__ah-section">
            <h2 className="author-detail__section-title">Featured on Author Hour</h2>
            <div className="author-detail__ah-grid">
              <a
                className="author-detail__ah-card"
                href="/author-hour/episode/ep-1173-chris-heivly-episode-1173"
              >
                <span className="author-detail__ah-tag">Author Hour</span>
                <p className="author-detail__ah-title">Chris Heivly: Episode 1173</p>
                <p className="author-detail__ah-meta">April 07, 2023</p>
                <span className="author-detail__ah-link">Listen / Read →</span>
              </a>
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="author-detail__cta-section">
            <h2 className="author-detail__cta-title">Ready to Write Your Book?</h2>
            <p className="author-detail__cta-text">
              Join Chris and 2,000+ authors who have published with Scribe Media.
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
