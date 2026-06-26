import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'The Last Black Unicorn by Tiffany Haddish',
  description:
    'NEW YORK TIMES BESTSELLER "An inspiring story that manages to be painful, honest, shocking, bawdy, and hilarious." —The New York Times Book Review From stand-up comedian, actress, and breakout star of Girls Trip, Tiffany Haddish, comes The Last Black Unicorn.',
}

export default function TheLastBlackUnicornPage() {
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
                <img
                  src="/assets/the-last-black-unicorn.jpg"
                  alt="The Last Black Unicorn"
                  className="bd-cover"
                  loading="eager"
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">The Last Black Unicorn</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/tiffany-haddish">Tiffany Haddish</Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-value">4.6</span>
                  <span className="bd-rating-count">13,579 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-badge">🏆 Bestseller in Humor Essays</span>
                </div>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>NEW YORK TIMES BESTSELLER &ldquo;An inspiring story that manages to be painful, honest, shocking, bawdy, and hilarious.&rdquo; &mdash;The New York Times Book Review From stand-up comedian, actress, and breakout star of Girls Trip, Tiffany Haddish, comes The Last Black Unicorn, a sidesplitting, hysterical, edgy, and unflinching collection of (extremely) personal essays, as fearless as the author herself.</p>
                  <p>Growing up in one of the poorest neighborhoods of South Central Los Angeles, Tiffany learned to survive by making people laugh. If she could do that, then her classmates would let her copy their homework, the other foster kids she lived with wouldn&apos;t beat her up, and she might even get a boyfriend. Or at least she could make enough money&mdash;as the paid school mascot and in-demand Bar Mitzvah hype woman&mdash;to get her hair and nails done, so then she might get a boyfriend. None of that worked (and she&apos;s still single), but it allowed Tiffany to imagine a place for herself where she could do something she loved for a living: comedy.</p>
                  <p>By turns hilarious, filthy, and brutally honest, The Last Black Unicorn shows the world who Tiffany Haddish really is&mdash;humble, grateful, down-to-earth, and funny as hell. And now, she&apos;s ready to inspire others through the power of laughter.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Memoir</span>
                  <span className="bd-tag">Writing and Arts</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Last-Black-Unicorn-Tiffany-Haddish-ebook/dp/B06ZZLYVCG/?_encoding=UTF8&tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$13.99</span>
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
            <img
              className="book-author-section__photo"
              src="https://scribemedia.com/hs-fs/hubfs/author-headshots/Tiffany_Haddish_Headshot_v3.jpg"
              alt="Tiffany Haddish"
              loading="lazy"
            />
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/tiffany-haddish">Tiffany Haddish</a></h2>
              <div className="book-author-section__bio">
                <p>Tiffany Haddish is a stand-up comedian, actress, and breakout star of Girls Trip. Growing up in one of the poorest neighborhoods of South Central Los Angeles, she learned to survive by making people laugh. The Last Black Unicorn, her debut memoir, became a New York Times bestseller.</p>
              </div>
              <a className="book-author-section__link" href="/authors/tiffany-haddish">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
