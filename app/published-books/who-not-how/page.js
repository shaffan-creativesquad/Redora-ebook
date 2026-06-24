import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export const metadata = {
  title: 'Who Not How by Dan Sullivan | Scribe Media',
  description: "The world's foremost entrepreneurial coach shows you how to make a mindset shift that opens the door to explosive growth and limitless possibility — in your business and your life.",
}

export default function WhoNotHowPage() {
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
                  src="/assets/who-not-how-cover-large.jpg"
                  alt="Who Not How"
                  width={260}
                  height={390}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* Info */}
              <div>
                <h1 className="bd-title">Who Not How</h1>
                <p className="bd-author">by <a href="/authors/dan-sullivan">Dan Sullivan</a></p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.7 · 3,660 ratings on Amazon</span>
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>The world&apos;s foremost entrepreneurial coach shows you how to make a mindset shift that opens the door to explosive growth and limitless possibility — in your business and your life.</p>
                  <p style={{ marginTop: '0.75rem' }}>Have you ever had a new idea or a goal that excites you... but not enough time to execute it? What about a goal you really want to accomplish... but can&apos;t because instead of taking action, you procrastinate? Do you feel like the only way things are going to get done is if you do them?</p>
                  <p style={{ marginTop: '0.75rem' }}>When we want something done, we&apos;ve been trained to ask ourselves: &ldquo;How can I do this?&rdquo; Well, there is a better question to ask. Expert coach Dan Sullivan knows the question we should ask instead: &ldquo;Who can do this for me?&rdquo;</p>
                  <p style={{ marginTop: '0.75rem' }}>This book will teach you how to make this essential paradigm shift so you can build a successful business effectively, immediately free up 1,000+ hours of work that you shouldn&apos;t be doing anyway, increase your vision in all areas of life, and never be limited in your goals and ambitions again.</p>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/Who-Not-How-Accelerating-Teamwork/dp/1401960588?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon
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
              src="/assets/Dan_Sullivan_Headshot.jpg"
              alt="Dan Sullivan"
              width={120}
              height={120}
              className="bd-author-photo"
              unoptimized
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name"><a href="/authors/dan-sullivan">Dan Sullivan</a></h2>
              <div className="bd-author-bio">
                <p>Dan Sullivan is the world&apos;s foremost expert on entrepreneurship and has coached more successful entrepreneurs than anyone else on the planet. He is the co-founder and president of Strategic Coach, the leading entrepreneurial coaching program in the world, which has helped tens of thousands of entrepreneurs achieve greater success and a higher quality of life.</p>
                <p>Over the past 40+ years, he has helped build thousands of successful companies and is the author of more than 50 books and publications on entrepreneurial success. His question, &ldquo;Who can do this for me?&rdquo; has liberated countless entrepreneurs from the belief that they must do everything themselves.</p>
              </div>
              <a href="/authors/dan-sullivan" className="bd-author-link">
                View full profile →
              </a>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
