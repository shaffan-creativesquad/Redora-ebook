import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Next-Level Metabolism by Jade Teta',
  description:
    'Next-Level Metabolism by Jade Teta — a manual on metabolism teaching you to understand exactly how metabolism functions so you can finally take control and see lasting results.',
}

export default function NextLevelMetabolismPage() {
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
                  src="/assets/the-next-level-metabolism.jpg"
                  alt="Next-Level Metabolism"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Next-Level Metabolism</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/jade-teta">Jade Teta</Link>
                </p>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>This book is NOT a diet book. You will not find food lists, recipes, shopping guides or other diet related material here. This book is more like a manual on metabolism, teaching you to understand exactly how metabolism functions so you can finally take control and see lasting results.Part of the reason most fail with diet and exercise is that they try to outsource their understanding of metabolism to someone or something else; a blog, book, podcast, documentary or nutrition guru. That does not work. You must learn to master your own metabolic expressions and create a diet built for you by you. This book shows you how. It is not an easy read, but for those patient and willing to learn, it may just be the last &ldquo;diet book&rdquo; you ever read.Absorb what is useful, discard what is useless, add what is uniquely your own. —Bruce LeeWhen it comes to metabolism, each of us is distinctly unique. Still, we search for the perfect diet plan hoping for perfect results, basing our decisions on a formula designed by someone else—someone who may understand how the body works but not how your body works.Theories, trends, and gimmicks will get you nowhere. You need a different kind of solution. You need a long-term plan that is reliable, customizable, and completely in your control.It&apos;s time to stop looking and start creating.In Next-Level Metabolism, integrative doctor Dr. Jade Teta shows you how to understand your metabolism and create a personalized lifestyle that works with you, not against you. This is NOT a diet book. This is a solution focused on your physiology, psychology, personal preferences, and practical circumstances. It&apos;s an individualized, adaptable toolkit—one you can&apos;t lose—that will help you take your health expertise to the next level. Stop outsourcing your health, and take back control with a roadmap that lets you create your own path.</p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Health</span>
                  <span className="bd-tag">Health and Diet</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://geni.us/NextLevelMetabolism"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener"
                  >
                    Buy on Amazon <span className="bd-btn__price">$6.99</span>
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
              src="https://scribemedia.com/hubfs/author-headshots/Jade_Teta_Headshot.jpg"
              alt="Jade Teta"
              loading="lazy"
            />
            <div className="book-author-section__content">
              <p className="book-author-section__label">About the Author</p>
              <h2 className="book-author-section__name"><a href="/authors/jade-teta">Jade Teta</a></h2>
              <div className="book-author-section__bio"><p>Entrepreneur, bestselling author, and integrative physician Dr. Jade Teta is a renowned expert in physical and personal development, specializing in functional endocrinology, metabolic conditioning, and humanistic psychology. A continuing education provider for health and fitness professionals, Dr. Teta has sold more than one million books, video workouts, and online health programs to the general public. He&apos;s a contributor to the Textbook Of Natural Medicine and Integrative Sexual Health, the founder of Next Level Human, and host of the Next Level Human podcast. For more information, visit jadeteta.com and nextlevelhuman.com.</p></div>
              <a className="book-author-section__link" href="/authors/jade-teta">View full profile <span>→</span></a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
