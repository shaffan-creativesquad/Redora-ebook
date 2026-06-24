import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Build the Fort by Chris Heivly',
  description:
    'Build the Fort by Chris Heivly — the startup community builder\'s field guide to channeling your inner ten-year-old and growing thriving entrepreneurial ecosystems.',
}

export default function BuildTheFortPage() {
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
                  src="./assets/ChrisHeivly_WebsiteCover.jpg"
                  alt="Build the Fort"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Build the Fort</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/chris-heivly">Chris Heivly</Link>
                </p>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>As adults, we seem to make everything harder.</p>
                  <p>
                    We&rsquo;re driven to accelerate growth in our local startup
                    communities&mdash;but in the process, we overthink, overanalyze, and overload
                    even our simplest activities. Before long, our community goals buckle under the
                    weight of our complex adult concerns. Our motivation dries up. Our best ideas
                    fade away, leaving entrepreneurs no choice but to find another city in which to
                    make their dreams come true.
                  </p>
                  <p>The solution? Channel our inner ten-year-old&hellip;and Build the Fort.</p>
                  <p>
                    With this simple, actionable metaphor, Chris Heivly empowers readers to replace
                    the grown-up tendency to overcomplicate with his simple framework for effective
                    community and ecosystem building. Energetic, friendly, and relatable, Build the
                    Fort: The Startup Community Builder&rsquo;s Field Guide provides a compass to
                    move our ideas forward more successfully and propel our cities into the upper
                    echelon of startup communities.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Business Management</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/buildthefort"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon $9.99
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
              src="https://scribemedia.com/hubfs/author-headshots/Chris_Heivly_Headshot.jpg"
              alt="Chris Heivly"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/chris-heivly">Chris Heivly</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  Chris Heivly is a life-long entrepreneur, a multifaceted investor (angel,
                  corporate VC and micro VC) and for the last 12+ years a start community builder
                  and consultant. He has been dubbed the &ldquo;The Startup Whisperer&rdquo; due
                  to his experiences with helping founders, investors and startup community
                  enthusiasts create environments for success.
                </p>
                <p>
                  For over 30 years, Heivly has worked at the highest levels for some of the
                  world&apos;s most recognized brands, including co-founder of MapQuest, which was
                  sold to AOL for $1.2 billion; Rand McNally, the world&apos;s largest map
                  publisher; and Accenture, the largest multinational management consulting,
                  technology services, and outsourcing company on the planet. He has also
                  personally directed over $75 million in investment capital on behalf of these and
                  other organizations.
                </p>
                <p>
                  Heivly currently serves as one of two managing directors of The Startup Factory,
                  one of the largest seed investment firms in the Southeast. Under his leadership,
                  the firm has made 35 investments in just four years in emerging technology
                  companies.
                </p>
                <p>
                  After TSF, Chris joined Techstars, the world&apos;s largest ecosystem that helps
                  entrepreneurs build great businesses, to develop a new set of products and
                  services focused on helping startup communities grow. This role leveraged
                  Heivly&apos;s experience in building the Raleigh/Durham ecosystem with the
                  expertise of Brad Feld (Foundry Group, Startup Communities, The Startup Community
                  Way) and the Techstars staff. Over the past five and a half years, Heivly created
                  a team of 12, generated consulting engagements (3 months to 3 years), and
                  materially changed entrepreneurship in under-developed cities (Ft Wayne, Indiana;
                  Lima, Peru; Buffalo, New York; Okanagan, British Columbia; Taipei, Taiwan and
                  many others).
                </p>
                <p>
                  Heivly has become a sought-after speaker and go-to source for media. He has been
                  quoted in major national and international outlets such as Forbes, Inc., the
                  Washington Post, TechCrunch, Crain&apos;s Business Journal, Huffington Post,
                  Tech Cocktail, and the Financial, and has appeared in major-market TV stations
                  across the U.S. Because of his stature in the startup world, he was heavily
                  featured in the documentary Startupland, which showcased the world&apos;s most
                  renowned entrepreneurs and startup experts. He is a contributing writer for
                  Inc.com, the nation&apos;s leading entrepreneurial magazine for entrepreneurs and
                  business owners, and has a significant following for Heivly.com, his own highly
                  respected blog that offers brutally authentic commentary on startups and the
                  startup community.
                </p>
                <p>
                  His book, Build the Fort is about how to take the lessons you learned as a
                  10-year old and apply those lessons to starting anything. His book was inspired
                  from a widely acclaimed TEDx talk in 2014. The book focuses on the months leading
                  up to the decision to start a company and those first three critical months of
                  getting your idea off the ground. His insights are being applied in multiple
                  realms, from any individual with a dream, to startups and companies that aspire
                  to be more innovative, to emerging entrepreneurial communities.
                </p>
                <p>
                  Today, Chris is semi-retired, and picks a handful of meaningful projects to get
                  involved in every year. He produces and hosts a podcast, Your Startup Community
                  with Brad Feld and Ian Hathaway and expects to release his 2nd book this year,
                  Build The Fort: STARTUP COMMUNITY BUILDER, A Global Field Guide for how to get
                  involved, create impact, fund and accelerate your entrepreneurial ecosystem.
                </p>
              </div>
              <Link href="/authors/chris-heivly" className="bd-author-link">
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
            <a
              className="book-ah__card"
              href="/author-hour/episode/ep-1173-chris-heivly-episode-1173"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Chris Heivly: Episode 1173</p>
              <p className="book-ah__card-meta">April 07, 2023</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
