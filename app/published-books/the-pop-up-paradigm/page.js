import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'The Pop Up Paradigm by Melissa Gonzalez',
  description:
    'New Extended and Revised Version! In a world where the relationship between brands and consumers is becoming more and more transactional, how can businesse...',
}

export default function ThePopUpParadigmPage() {
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
                  src="/assets/the-pop-up-paradigm.jpg"
                  alt="The Pop Up Paradigm"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">The Pop Up Paradigm</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/melissa-gonzalez">Melissa Gonzalez</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★<span className="bd-star-empty">☆</span></span>
                  <span className="bd-rating-value">3.8</span>
                  <span className="bd-rating-count">37 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Entrepreneurship</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>New Extended and Revised Version! In a world where the relationship between brands and consumers is becoming more and more transactional, how can businesses build real, human connections with their customers?Melissa Gonzalez, the retail strategist responsible for dozens of successful pop-ups from companies like Amazon, Marc Jacobs, Estee Lauder and J.Hilburn, has the answer. In her groundbreaking new book, she explains how companies can use temporary retail to generate customer loyalty, understand new markets, test innovative concepts, and much more. Whether you&apos;re a business with an online presence considering a move into physical retail, or an established retail brand looking to create some buzz, The Pop-Up Paradigm will teach you:The 7 most important ways that your brand can benefit from a pop-upWhy educating and empowering your customer is often the best type of marketingWhere retail is going via the exploration of the retail tech landscape (including Augmented Reality, Virtual Reality, Artificial Intelligence and the Internet of Things case studies, and how to make sure you&apos;re ahead of the curveThe most important things to consider when launching a pop-upThe Pop-Up Paradigm is the definitive guide to the important new role that pop-ups are playing in retail, and the perfect companion when deciding whether or not they make sense for your business.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Retail</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Pop-Up-Paradigm-Connections-Digital/dp/1619613026/?&_encoding=UTF8&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$15.95</span>
                  </a>
                  <a href="/success-stories/melissa-gonzalez" className="bd-btn bd-btn--secondary">
                    Read Success Story
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
              <h2 className="book-author-section__name"><a href="/authors/melissa-gonzalez">Melissa Gonzalez</a></h2>
              <div className="book-author-section__bio"><p>In a world where the relationship between brands and consumers is becoming more and more transactional, how can businesses build real, human connections with their customers?Melissa Gonzalez, the retail strategist responsible for dozens of successful pop-ups from companies like Amazon, Marc Jacobs, Estee Lauder and J.Hilburn, has the answer.</p></div>
              <a className="book-author-section__link" href="/authors/melissa-gonzalez">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
