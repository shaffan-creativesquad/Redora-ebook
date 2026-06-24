import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Practical Sustainability by Jeff Kavanaugh',
  description:
    'Enterprises are vital to our green future and fundamental to modern life, yet they fall short of their sustainable promise. The big question is not if we should address sustainability, but how.',
}

export default function PracticalSustainabilityPage() {
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
                  src="./assets/practical-sustainability.jpg"
                  alt="Practical Sustainability"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Practical Sustainability</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/jeff-kavanaugh">Jeff Kavanaugh</Link>
                </p>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    Enterprises are vital to our green future and fundamental to modern life, yet
                    they fall short of their sustainable promise. The big question is not if we
                    should address sustainability, but how. Practical Sustainability shows how we can
                    solve half the wicked sustainability challenge in five years, using today&apos;s
                    technology &ndash; and then the rest through data-driven R&amp;D. It also
                    provides insights from carbon-neutral journeys and award-winning achievements.
                    How? A heavy dose of science, systems design and digital twins, together with
                    human factors and behavioral psychology that drive adoption. Award-winning
                    Practical Sustainability provides the first guide for sustainable business in the
                    post-Covid age. It is an Amazon #1 best-seller, a Forbes&apos; &ldquo;must
                    read,&rdquo; and adopted by leading universities to anchor their sustainability
                    curricula. Co-authors Corey Glickman and Jeff Kavanaugh are well-known as
                    thought leaders in the field; they have been published in Harvard Business
                    Review, presented at leading forums like the World Economic Forum and United
                    Nations, and Kavanaugh previously authored the books The Live Enterprise and
                    Consulting Essentials.Practical Sustainability is the result of three years of
                    research and collaboration. The authors interviewed dozens of global business,
                    tech, and policy leaders, and also drew upon extensive original research and
                    corporate data. They also detail how Infosys achieved carbon neutrality in 2020,
                    a full 30 years ahead of the Paris climate agreement. Practical Sustainability
                    contains specific recommendations and over 50 frameworks to help leaders
                    implement their own sustainability journeys. It also contains over 340 annotated
                    references for further study and action. Whether designing strategy, launching
                    initiatives, or correcting course, Practical Sustainability will help readers
                    deliver the ESG results and the bottom-line profitability we need for a
                    sustainable future.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Environment</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/Sustainability"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$9.99</span>
                  </a>
                  <a
                    href="https://www.amazon.com/Practical-Sustainability-Circular-Commerce-Smarter/dp/B0B2DSPS9V/ref=sr_1_1?crid=3DYF1BYOVRR47&keywords=Practical+Sustainability&qid=1658475800&s=audible&sprefix=practical+sustainability%2Caudible%2C77&sr=1-1"
                    className="bd-btn bd-btn--secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen to Audiobook
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
              src="https://scribemedia.com/hubfs/author-headshots/jeff-kavanaugh.jpg"
              alt="Jeff Kavanaugh"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/jeff-kavanaugh">Jeff Kavanaugh</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  NOTE: From top to bottom on the hardcover bio flap, the authors want things in
                  this order: <br />the Corey Glickman headshot<br />Corey Glickman bio<br />Jeff
                  Kavanaugh headshot<br />Jeff Kavanaugh bio<br />then the Knowledge Institute URL
                </p>
                <p>[Corey Glickman headshot]</p>
                <p>
                  Corey Glickman is Vice President at Infosys and leads their sustainability and
                  design business, delivering smart space initiatives for clients globally. Corey is
                  a member of both the World Economic Forum Pioneer Cities group and the MIT
                  Technology Review Board and is a faculty expert at Singularity University. The
                  American Institute of Graphic Arts named Corey one of the one hundred most
                  influential designers of the decade.
                </p>
                <p>[Jeff Kavanaugh headshot]</p>
                <p>
                  Jeff Kavanaugh is Vice President and Head of the Infosys Knowledge Institute, the
                  research and thought leadership arm of Infosys, a leading tech and consulting
                  company. Jeff is an adjunct professor at the Jindal School of Management at the
                  University of Texas at Dallas and author of the books The Live Enterprise and
                  Consulting Essentials. Jeff has been published in Harvard Business Review and
                  other leading business publications.
                </p>
              </div>
              <Link href="/authors/jeff-kavanaugh" className="bd-author-link">
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
              href="/author-hour/episode/ep-126-jeff-kavanaugh-consulting-essentials"
              className="book-ah__card"
            >
              <span className="book-ah__tag">Author Hour</span>
              <p className="book-ah__card-title">Jeff Kavanaugh: Consulting Essentials</p>
              <p className="book-ah__card-meta">April 12, 2018</p>
              <span className="book-ah__card-link">Listen / Read →</span>
            </Link>
          </div>
        </div>

        {/* ── Related books ── */}
        <div className="bd-related">
          <div className="bd-divider" />
          <p className="bd-related-label">More by this author</p>
          <h2 className="bd-related-heading">Jeff Kavanaugh</h2>
          <div className="bd-related-grid">
            <Link
              href="/published-books/consulting-essentials-the-art-and-science-of-people-facts-and-frameworks"
              className="bd-related-item"
            >
              <Image
                src="https://scribemedia.com/hubfs/images/books/consulting-essentials.jpg"
                alt="Consulting Essentials"
                width={130}
                height={195}
                className="bd-related-cover"
                unoptimized
              />
              <div className="bd-related-title">Consulting Essentials</div>
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
