import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Guy Gone Keto | Scribe Media',
  description:
    'Guy Gone Keto by Thom King — a ketogenic lifestyle guide that helps you lose weight, stay healthy, and keep it off by burning fats instead of sugars. Bestseller in Low Carbohydrate Diets.',
}

export default function GuyGoneKetoPage() {
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
                  src="/assets/guy-gone-keto.jpg"
                  alt="Guy Gone Keto"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Guy Gone Keto</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/thom-king">Thom King</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★☆</span>
                  <span className="bd-rating-text">4.4 · 29 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  🏆 Bestseller in Low Carbohydrate Diets
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    You&apos;ve tried countless diet plans, but the weight you lose keeps coming
                    back. The truth is dieting is always going to fail unless you&apos;re 100
                    percent committed to a beneficial lifestyle change. <em>Guy Gone Keto</em> can
                    guide you to your goal of shaping up, staying healthy, losing weight, and
                    keeping it off by burning fats instead of sugars.
                  </p>
                  <p>
                    Thom King always struggled with his weight before adopting a ketogenic
                    lifestyle. In <em>Guy Gone Keto</em> he details how perseverance and a
                    high-fat, low-carb diet enabled him to drop five waist sizes in a single year.
                    His essential wellness program includes tips for reading and understanding food
                    labels, supportive techniques to make you feel capable and empowered, as well
                    as tasty recipes and easy-to-follow meal plans that will keep you fit and
                    healthy for life.
                  </p>
                  <p>
                    Thom did it, and you can too. Dedicate yourself to going keto, and become who
                    you really want to be.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Health</span>
                  <span className="bd-tag">Sports and Fitness</span>
                  <span className="bd-tag">Health and Diet</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Guy-Gone-Keto-Achieve-Lifelong/dp/1544510985?&_encoding=UTF8&tag=scribemedia0a-20"
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
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/thom-king">Thom King</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  Thom King always struggled with his weight before adopting a ketogenic lifestyle.
                </p>
              </div>
              <Link href="/authors/thom-king" className="bd-author-link">
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
