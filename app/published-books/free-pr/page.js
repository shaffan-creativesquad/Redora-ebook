import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Free PR by Cameron Herold | Scribe Media',
  description: "You don't need an expensive PR firm. Cameron Herold and Adrian Salamunovic have taught thousands of company execs how to exploit free media coverage and build in-house PR that outperforms the so-called experts.",
}

export default function FreePRPage() {
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
                  src="/assets/free-PR.jpg"
                  alt="Free PR"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">Free PR</h1>
                <p className="bd-author">by <a href="/authors/cameron-herold">Cameron Herold</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.7 · 208 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Public Relations
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>Public relations has always been an essential part of doing business — which is probably why you&apos;re shelling out big money to an outside PR firm. But the truth is that you don&apos;t need them. You already have all the necessary tools in-house to do as good a job as the so-called experts.</p>
                  <p style={{ marginTop: '0.75rem' }}>Cameron Herold and Adrian Salamunovic have taught thousands of company execs how to exploit free media coverage and ditch these expensive, often ineffective outsiders. Cameron &amp; Adrian have also built in-house PR teams, spent decades learning how to generate <em>Free PR</em>, and how to leverage public relations to complement their sales and marketing strategy.</p>
                  <p style={{ marginTop: '0.75rem' }}>In <em>Free PR</em>, you&apos;ll learn how the media world operates while you gain invaluable insider knowledge and actionable advice on how to:</p>
                  <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem', color: 'rgba(255,255,255,0.68)', lineHeight: '1.8' }}>
                    <li>Build your own in-house PR team</li>
                    <li>Provide effective interviews</li>
                    <li>Score great media coverage for free with just a few easy steps</li>
                  </ul>
                  <p style={{ marginTop: '0.75rem' }}>Landing public relations coverage for yourself and your company is a powerful tool to help elevate your personal brand. PR is easier to generate than marketing, easier to leverage than marketing, and more cost effective than marketing. In other words, Public Relations is more critical than ever in growing your brand and your business.</p>
                  <p style={{ marginTop: '0.75rem' }}>You&apos;ve got more passion, commitment, a larger stake, and a deeper understanding of your business than any outside PR firm could ever have. So stop wasting money and take the reins yourself. Learn the secrets to landing TONS of <em>Free PR</em> for your company.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Marketing</span>
                  <span className="bd-tag">Marketing and Advertising</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/1619615282?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$20.68</span>
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
            <a href="/published-books/vivid-vision" className="bd-related-item">
              <Image
                src="/assets/vivid-vision.jpg"
                alt="Vivid Vision"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Vivid Vision</div>
            </a>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
