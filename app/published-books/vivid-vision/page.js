import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Vivid Vision by Cameron Herold | Scribe Media',
  description: 'A revolutionary tool that will help owners, CEOs, and senior managers create inspirational, detailed, and actionable three-year mission statements for their companies.',
}

export default function VividVisionPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>

        {/* ── Book Detail ── */}
        <section className="book-detail-page">
          <div className="book-detail-page__inner">

            <a href="/published-books" className="bd-back">
              ← Back to Published Books
            </a>

            <div className="bd-layout">
              {/* Cover */}
              <div>
                <Image
                  src="/assets/vivid-vision.jpg"
                  alt="Vivid Vision"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">Vivid Vision</h1>
                <p className="bd-author">by <a href="/authors/cameron-herold">Cameron Herold</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.5 · 1,233 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Workplace Culture
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>Many corporations have slick, flashy mission statements that ultimately do little to motivate employees and less to impress customers, investors, and partners.</p>
                  <p style={{ marginTop: '0.75rem' }}>But there is a way to share your excitement for the future of your company in a clear, compelling, and powerful way — and entrepreneur and business growth expert Cameron Herold can show you how.</p>
                  <p style={{ marginTop: '0.75rem' }}><em>Vivid Vision</em> is a revolutionary tool that will help owners, CEOs, and senior managers create inspirational, detailed, and actionable three-year mission statements for their companies. In this easy-to-follow guide, Herold walks organization leaders through the simple steps to creating their own Vivid Vision, from brainstorming to sharing the ideas to using the document to drive progress in the years to come.</p>
                  <p style={{ marginTop: '0.75rem' }}>By focusing on mapping out how you see your company looking and feeling in every category of business, without getting bogged down by data and numbers, <em>Vivid Vision</em> creates a holistic road map to success that will get all of your teammates passionate about the big picture.</p>
                  <p style={{ marginTop: '0.75rem' }}>Your company is your dream, one that you want to share with your staff, clients, and stakeholders. <em>Vivid Vision</em> is the tool you need to make that dream a reality.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">B2B Consulting</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Vivid-Vision-Remarkable-Aligning-Business/dp/161961877X/?_encoding=UTF8&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$43.92</span>
                  </a>
                  <a href="/success-stories/cameron-herold-free-pr" className="bd-btn bd-btn--secondary">
                    Read Success Story
                  </a>
                  <a href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Author Section ── */}
        <div className="bd-author-section">
          <div className="bd-divider" />
          <div className="bd-author-layout">
            <Image
              src="/assets/cameron-herold.png"
              alt="Cameron Herold"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/cameron-herold">Cameron Herold</a></h2>
              <div className="bd-author-bio">
                <p>Cameron Herold is a top business consultant, best-selling author, and speaker. He&apos;s the mastermind behind hundreds of companies&apos; exponential growth and he&apos;s touched thousands of businesses indirectly through his work.</p>
                <p>At age 21, he had 14 employees. By 35, he&apos;d helped build his first two 100 Million Dollar companies. By the age of 42, Cameron had engineered 1-800-GOT-JUNK?&apos;s spectacular growth from $2 Million to $106 Million in revenue in just six years.</p>
                <p>His companies landed over 5,200 media placements in those same six years, including coverage on Oprah. Not simply a theory guy, Cameron teaches what he knows from experience and is passionate about sharing his expertise with today&apos;s most dynamic business leaders.</p>
              </div>
              <a href="/authors/cameron-herold" className="bd-author-link">
                View full profile →
              </a>
            </div>
          </div>
        </div>

        {/* ── Author Hour ── */}
        <div className="book-ah">
          <div className="book-ah__divider" />
          <p className="book-ah__label">Listen on Author Hour</p>
          <div className="book-ah__grid">
            <a className="book-ah__card" href="/author-hour/episode/ep-85-cameron-herold-vivid-vision">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Cameron Herold: Vivid Vision</p>
              <p className="book-ah__card-meta">January 19, 2018</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
            <a className="book-ah__card" href="/author-hour/episode/ep-237-cameron-herold-free-pr">
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Cameron Herold: Free PR</p>
              <p className="book-ah__card-meta">February 02, 2019</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </a>
          </div>
        </div>

        {/* ── Related Books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Cameron Herold</h2>
          <div className="bd-related-grid">
            <a href="/published-books/it-pays-to-play" className="bd-related-item">
              <Image
                src="/assets/KristiHerold_WebsiteCover.jpg"
                alt="It Pays to PLAY"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">It Pays to PLAY</div>
            </a>
            <a href="/published-books/the-second-in-command" className="bd-related-item">
              <Image
                src="/assets/CameronHerold4_WebsiteCover.jpg"
                alt="The Second in Command"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">The Second in Command</div>
            </a>
            <a href="/published-books/meetings-suck" className="bd-related-item">
              <Image
                src="/assets/meetings-suck.jpg"
                alt="Meetings Suck"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Meetings Suck</div>
            </a>
            <a href="/published-books/free-pr" className="bd-related-item">
              <Image
                src="/assets/free-PR.jpg"
                alt="Free PR"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Free PR</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
