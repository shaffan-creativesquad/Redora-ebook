import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Statistical Consequences of Fat Tails by Nassim Nicholas Taleb',
  description:
    'Statistical Consequences of Fat Tails by Nassim Nicholas Taleb — investigating the misapplication of conventional statistical techniques to fat tailed distributions.',
}

export default function StatisticalConsequencesOfFatTailsPage() {
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
                  src="https://scribemedia.com/hubfs/images/books/Nassim-Taleb_SCoFT_WP.jpeg"
                  alt="Statistical Consequences of Fat Tails"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Statistical Consequences of Fat Tails</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/nassim-nicholas-taleb">Nassim Nicholas Taleb</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-value">4.6</span>
                  <span className="bd-rating-count">337 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Probability &amp; Statistics</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>The book investigates the misapplication of conventional statistical techniques to fat tailed distributions and looks for remedies, when possible.Switching from thin tailed to fat tailed distributions requires more than changing the color of the dress. Traditional asymptotics deal mainly with either n=1 or n=8, and the real world is in between, under the laws of the medium numberswhich vary widely across specific distributions. Both the law of large numbers and the generalized central limit mechanisms operate in highly idiosyncratic ways outside the standard Gaussian or Levy-Stable basins of convergence.A few examples:- The sample mean is rarely in line with the population mean, with effect on na&iuml;ve empiricism, but can be sometimes be estimated via parametric methods.- The empirical distribution is rarely empirical.- Parameter uncertainty has compounding effects on statistical metrics.- Dimension reduction (principal components) fails.- Inequality estimators (Gini or quantile contributions) are not additive and produce wrong results.- Many biases found in psychology become entirely rational under more sophisticated probability distributions.- Most of the failures of financial economics, econometrics, and behavioral economics can be attributed to using the wrong distributions.This book, the first volume of the Technical Incerto, weaves a narrative around published journal articles.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Education</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/1544508050?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$122.98</span>
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
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/nassim-nicholas-taleb">Nassim Nicholas Taleb</a></h2>
              <div className="book-author-section__bio"><p>Nassim Nicholas Taleb is a Lebanese-American essayist, scholar, and former options trader whose work focuses on problems of randomness, probability, and uncertainty. He is the author of the landmark Incerto series including the international bestseller The Black Swan, and serves as Distinguished Professor of Risk Engineering at New York University&apos;s Tandon School of Engineering.</p></div>
              <a className="book-author-section__link" href="/authors/nassim-nicholas-taleb">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
