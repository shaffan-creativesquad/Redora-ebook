import './book-school.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Readora Book School | Write, Publish & Launch Your Book | $197',
  description: 'A step-by-step video course covering idea validation, positioning, writing, editing, and publishing your non-fiction book. Built on the same process used to help 2,000+ authors.',
}

const CHECKOUT_URL = 'https://buy.stripe.com/test_eVqaEX65Za15ghe9Bf4Vy00'

export default function BookSchoolPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="slo-page">

          {/* ── HERO ── */}
          <section className="slo-hero">
            <div className="slo-hero__inner">
              <span className="slo-hero__badge">Readora Book School</span>
              <h1 className="slo-hero__title">Write and Publish Your Best Possible Book</h1>
              <p className="slo-hero__subtitle">97% of people who start writing their book never finish. After helping 2,000+ authors start, produce, and finish their book, Readora built this course to guide you every step of the way. 28 video lessons, templates, and worksheets from idea to published book.</p>
              <a href={CHECKOUT_URL} className="slo-hero__cta">Get Instant Access</a>
            </div>
          </section>

          {/* ── TRUST BAR ── */}
          <section className="slo-trust">
            <div className="slo-trust__row">
              <div className="slo-trust__item">
                <span className="slo-trust__icon">✓</span>
                <span>2,000+ Authors Served</span>
              </div>
              <div className="slo-trust__item">
                <span className="slo-trust__icon">✓</span>
                <span>WSJ, NYT &amp; USA Today Bestsellers</span>
              </div>
              <div className="slo-trust__item">
                <span className="slo-trust__icon">✓</span>
                <span>You Own 100% of Your IP</span>
              </div>
            </div>
          </section>

          {/* ── STATS ── */}
          <section className="slo-section slo-section--dark">
            <div className="slo-container">
              <h2 className="slo-section__heading">The World&apos;s Premier Self-Publishing Firm</h2>
              <p className="slo-section__sub">Readora helps entrepreneurs, executives, and thought leaders turn their ideas into professionally published books. Our world-class team has created numerous Wall Street Journal, New York Times, and USA Today bestsellers. Now that knowledge is yours.</p>
              <div className="slo-proof__grid">
                <div className="slo-proof__card">
                  <div className="slo-proof__stat">2,000+</div>
                  <div className="slo-proof__label">Authors helped to start, produce, and finish their book</div>
                </div>
                <div className="slo-proof__card">
                  <div className="slo-proof__stat">28</div>
                  <div className="slo-proof__label">Step-by-step video lessons across 6 modules</div>
                </div>
                <div className="slo-proof__card">
                  <div className="slo-proof__stat">100%</div>
                  <div className="slo-proof__label">You own your IP, your manuscript, your royalties</div>
                </div>
              </div>
            </div>
          </section>

          {/* ── WHY WRITE A BOOK ── */}
          <section className="slo-section slo-section--light">
            <div className="slo-container">
              <h2 className="slo-section__heading" style={{ color: 'var(--slo-text-dark)' }}>The Book Becomes Your Positioning Tool</h2>
              <p className="slo-section__sub" style={{ color: 'var(--slo-text-dark-muted)' }}>If you use it well, it opens doors that were previously shut or didn&apos;t exist yet. We&apos;ve seen clients use their books to:</p>
              <div className="slo-proof__grid">
                <div className="slo-proof__card" style={{ background: 'rgba(0,0,0,0.03)', borderColor: 'rgba(0,0,0,0.08)' }}>
                  <div className="slo-proof__stat" style={{ fontSize: '1.5rem' }}>🎙</div>
                  <div className="slo-proof__label" style={{ color: 'var(--slo-text-dark-muted)' }}>Land $20,000 speaking gigs</div>
                </div>
                <div className="slo-proof__card" style={{ background: 'rgba(0,0,0,0.03)', borderColor: 'rgba(0,0,0,0.08)' }}>
                  <div className="slo-proof__stat" style={{ fontSize: '1.5rem' }}>💼</div>
                  <div className="slo-proof__label" style={{ color: 'var(--slo-text-dark-muted)' }}>Close high-ticket clients</div>
                </div>
                <div className="slo-proof__card" style={{ background: 'rgba(0,0,0,0.03)', borderColor: 'rgba(0,0,0,0.08)' }}>
                  <div className="slo-proof__stat" style={{ fontSize: '1.5rem' }}>🎓</div>
                  <div className="slo-proof__label" style={{ color: 'var(--slo-text-dark-muted)' }}>Launch programs and masterminds</div>
                </div>
                <div className="slo-proof__card" style={{ background: 'rgba(0,0,0,0.03)', borderColor: 'rgba(0,0,0,0.08)' }}>
                  <div className="slo-proof__stat" style={{ fontSize: '1.5rem' }}>📈</div>
                  <div className="slo-proof__label" style={{ color: 'var(--slo-text-dark-muted)' }}>Build brand trust at scale</div>
                </div>
              </div>
            </div>
          </section>

          {/* ── WHAT'S INSIDE ── */}
          <section className="slo-section slo-section--mid">
            <div className="slo-container">
              <h2 className="slo-section__heading">What&apos;s Inside the Course</h2>
              <p className="slo-section__sub">Six modules. 28 lessons. Everything Readora has learned helping 2,000+ authors, organized into the same process we use with our professional clients.</p>
              <div className="slo-modules">
                <div className="slo-module-card">
                  <div className="slo-module-card__num">1</div>
                  <h3 className="slo-module-card__title">Should You Write a Book? (The Decision)</h3>
                  <ul className="slo-module-card__list">
                    <li>Should You Write a Book?</li>
                    <li>Define Your Book Objectives</li>
                    <li>Know Your Audience</li>
                  </ul>
                  <p className="slo-module-card__note">Before you write a single word, get crystal clear on whether a book is the right move.</p>
                </div>
                <div className="slo-module-card">
                  <div className="slo-module-card__num">2</div>
                  <h3 className="slo-module-card__title">Your Book Idea &amp; Positioning (The Foundation)</h3>
                  <ul className="slo-module-card__list">
                    <li>How to Pick the Perfect Book Idea</li>
                    <li>Develop Your Book Idea</li>
                    <li>Why Book Positioning Matters</li>
                    <li>How to Position Your Book</li>
                    <li>Book Titles: How to Pick the Perfect Title</li>
                    <li>The 6 Critical Attributes of a Best-Selling Title</li>
                  </ul>
                  <p className="slo-module-card__note">You can&apos;t just start with content. You need to start with positioning.</p>
                </div>
                <div className="slo-module-card">
                  <div className="slo-module-card__num">3</div>
                  <h3 className="slo-module-card__title">Overcome Your Fears &amp; Outline Your Book (The Plan)</h3>
                  <ul className="slo-module-card__list">
                    <li>Fear Solving</li>
                    <li>How to Structure &amp; Outline Your Book</li>
                  </ul>
                  <p className="slo-module-card__note">Includes Fear Solving Worksheet + Book Outline Template</p>
                </div>
                <div className="slo-module-card">
                  <div className="slo-module-card__num">4</div>
                  <h3 className="slo-module-card__title">Write &amp; Edit Your Book (The Execution)</h3>
                  <ul className="slo-module-card__list">
                    <li>Writing Your Book</li>
                    <li>Editing Your Book</li>
                  </ul>
                  <p className="slo-module-card__note">Includes Writing &amp; Editing Plan template. How to get your book done in less than a year with our method.</p>
                </div>
                <div className="slo-module-card">
                  <div className="slo-module-card__num">5</div>
                  <h3 className="slo-module-card__title">Publish Your Book Like a Pro (The Production)</h3>
                  <ul className="slo-module-card__list">
                    <li>Publishing Your Book: Complete Overview</li>
                    <li>How to Find a Book Cover Designer</li>
                    <li>Book Layout &amp; Interior Design</li>
                    <li>Graphics &amp; Images in Your Book</li>
                    <li>Book ISBNs &amp; Barcodes</li>
                    <li>How to Self-Publish Your Book</li>
                    <li>How to Publish Your Paperback</li>
                    <li>How to Price Your Book</li>
                    <li>How to Write the Perfect Book Description</li>
                    <li>How to Write Your Book Acknowledgments</li>
                  </ul>
                  <p className="slo-module-card__note">Cover design, layout, ISBNs, pricing, descriptions, and distribution.</p>
                </div>
                <div className="slo-module-card">
                  <div className="slo-module-card__num">6</div>
                  <h3 className="slo-module-card__title">Market Your Book &amp; Build Authority (The Launch)</h3>
                  <ul className="slo-module-card__list">
                    <li>Marketing Your Book: Complete Overview</li>
                    <li>How to Think About Book Marketing</li>
                    <li>How to Use a Book to Get Media Coverage &amp; PR</li>
                    <li>How to Use a Book to Get on Podcasts</li>
                    <li>How to Use a Book to Get on TV</li>
                  </ul>
                  <p className="slo-module-card__note">Your book is only valuable if people read it.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── WHO THIS IS FOR ── */}
          <section className="slo-section slo-section--dark">
            <div className="slo-container">
              <h2 className="slo-section__heading">Who This Course Is For</h2>
              <p className="slo-section__sub">Book School is for authors, not writers. Writers write books for a living. Authors write books that help them with their other career.</p>
              <ul className="slo-for__list">
                <li className="slo-for__item">
                  <span className="slo-for__icon">✓</span>
                  <span className="slo-for__text"><strong>Entrepreneurs and executives</strong> who want to use a book as a positioning tool that opens doors that were previously shut or didn&apos;t exist yet</span>
                </li>
                <li className="slo-for__item">
                  <span className="slo-for__icon">✓</span>
                  <span className="slo-for__text"><strong>Consultants and coaches</strong> who want to close high-ticket clients and build brand trust at scale with a book that demonstrates their expertise</span>
                </li>
                <li className="slo-for__item">
                  <span className="slo-for__icon">✓</span>
                  <span className="slo-for__text"><strong>Speakers and thought leaders</strong> who want to land speaking gigs, get media coverage, and create a lasting body of work that elevates their authority</span>
                </li>
                <li className="slo-for__item">
                  <span className="slo-for__icon">✓</span>
                  <span className="slo-for__text"><strong>Anyone who has lived, learned, built, or healed something with intention</strong> and has something worth sharing. You don&apos;t need to be famous. You need to be clear, honest, and committed to helping others through your story or expertise.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* ── OVERCOME FEAR ── */}
          <section className="slo-section slo-section--mid">
            <div className="slo-container">
              <h2 className="slo-section__heading">Worried You&apos;re Not Ready?</h2>
              <p className="slo-section__sub">The authors who worry they&apos;re &ldquo;not interesting enough&rdquo; are usually the ones who end up writing the most powerful books, because they care about depth, not vanity.</p>
              <div className="slo-proof__grid">
                <div className="slo-proof__card">
                  <div className="slo-proof__label" style={{ fontSize: '1rem', lineHeight: 1.6 }}>&ldquo;I don&apos;t have a book in me&rdquo;</div>
                  <p style={{ margin: '0.5rem 0 0', color: 'var(--slo-text-muted)', fontSize: '0.9rem' }}>If you&apos;ve lived, learned, built, or healed anything with intention, you have something worth sharing.</p>
                </div>
                <div className="slo-proof__card">
                  <div className="slo-proof__label" style={{ fontSize: '1rem', lineHeight: 1.6 }}>&ldquo;I&apos;m afraid no one will care&rdquo;</div>
                  <p style={{ margin: '0.5rem 0 0', color: 'var(--slo-text-muted)', fontSize: '0.9rem' }}>Most people with something meaningful to say never get around to saying it. This process is designed to remove every barrier between you and the finished book.</p>
                </div>
                <div className="slo-proof__card">
                  <div className="slo-proof__label" style={{ fontSize: '1rem', lineHeight: 1.6 }}>&ldquo;I don&apos;t know where to start&rdquo;</div>
                  <p style={{ margin: '0.5rem 0 0', color: 'var(--slo-text-muted)', fontSize: '0.9rem' }}>The course starts with positioning, not content — so your very first lesson answers the question every reader will ask: why should I read this book?</p>
                </div>
              </div>
            </div>
          </section>

          {/* ── SOCIAL PROOF WALL ── */}
          <section className="slo-social-wall">
            <div className="slo-container" style={{ maxWidth: '1100px' }}>
              <h2 className="slo-section__heading">Real Students. Real Results.</h2>
              <p className="slo-section__sub" style={{ color: 'var(--slo-text-muted)' }}>Thousands of aspiring authors have used this exact system to finally write their books.</p>
              <div className="slo-social-wall__grid">
                <div className="slo-social-wall__card"><img src="https://scribemedia.com/hubfs/book-school/social-proof/louis-m-finally-writing.png" alt="Louis M sharing that he's finally writing his book" loading="lazy" /></div>
                <div className="slo-social-wall__card"><img src="https://scribemedia.com/hubfs/book-school/social-proof/matt-swain-inspiring.png" alt="Matt Swain praising the course as inspiring" loading="lazy" /></div>
                <div className="slo-social-wall__card"><img src="https://scribemedia.com/hubfs/book-school/social-proof/practicebalance-caffeinating.png" alt="Student caffeinating for Day 2 of Book School" loading="lazy" /></div>
                <div className="slo-social-wall__card"><img src="https://scribemedia.com/hubfs/book-school/social-proof/harry-hayman-its-happening.png" alt="Harry Hayman excited about starting his book" loading="lazy" /></div>
                <div className="slo-social-wall__card"><img src="https://scribemedia.com/hubfs/book-school/social-proof/shruthi-sharma-eye-openers.png" alt="Shruthi Sharma calling Book School classes eye openers" loading="lazy" /></div>
                <div className="slo-social-wall__card"><img src="https://scribemedia.com/hubfs/book-school/social-proof/mariedraws-classroom.png" alt="Student showing their classroom setup" loading="lazy" /></div>
                <div className="slo-social-wall__card"><img src="https://scribemedia.com/hubfs/book-school/social-proof/jeanette-mcglothin-journey.png" alt="Jeanette McGlothin beginning her book writing journey" loading="lazy" /></div>
                <div className="slo-social-wall__card"><img src="https://scribemedia.com/hubfs/book-school/social-proof/rachael-air-instagram.png" alt="Rachael praising the practical advice from the memoir workshop" loading="lazy" /></div>
              </div>
            </div>
          </section>

          {/* ── PRICING ── */}
          <section className="slo-pricing" id="pricing">
            <div className="slo-container">
              <h2 className="slo-section__heading" style={{ marginBottom: '2rem' }}>Get Instant Access to Book School</h2>
              <div className="slo-pricing__card">
                <span className="slo-pricing__badge">Limited Time Offer</span>
                <div className="slo-pricing__original">Valued at $997</div>
                <div className="slo-pricing__price">$197</div>
                <p className="slo-pricing__note">One-time payment. Instant, lifetime access.</p>
                <ul className="slo-pricing__features">
                  <li><span className="slo-pricing__check">✓</span>28 step-by-step video lessons across 6 modules</li>
                  <li><span className="slo-pricing__check">✓</span>The complete Readora Method: writing, publishing, and marketing</li>
                  <li><span className="slo-pricing__check">✓</span>Templates: Fear Solving Worksheet, Book Outline, Writing &amp; Editing Plan</li>
                  <li><span className="slo-pricing__check">✓</span>Built on the same process used to publish 2,000+ books</li>
                  <li><span className="slo-pricing__check">✓</span>You own 100% of your IP, your manuscript, your creative assets, your royalties</li>
                  <li><span className="slo-pricing__check">✓</span>Lifetime access with all future updates</li>
                </ul>
                <a href={CHECKOUT_URL} className="slo-hero__cta">Get Instant Access for $197</a>
                <p style={{ margin: '1.25rem 0 0', fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)' }}>Secure checkout. You&apos;ll be redirected to complete your purchase.</p>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="slo-section slo-section--light">
            <div className="slo-container">
              <h2 className="slo-section__heading" style={{ color: 'var(--slo-text-dark)' }}>Frequently Asked Questions</h2>
              <p className="slo-section__sub" style={{ marginBottom: '2rem' }}>Everything you need to know before getting started.</p>
              <ul className="slo-faq">
                <li className="slo-faq__item">
                  <div className="slo-faq__q">What&apos;s included in Book School?</div>
                  <p className="slo-faq__a">28 video lessons across six modules: The Decision, The Foundation, The Plan, The Execution, The Production, and The Launch. Each lesson includes downloadable templates and worksheets. The course is built on the same Readora Method used to help 2,000+ authors write, publish, and market their books.</p>
                </li>
                <li className="slo-faq__item">
                  <div className="slo-faq__q">Who is this course for?</div>
                  <p className="slo-faq__a">Book School is for authors, not writers. Writers write books for a living. Authors write books that help them with their other career. If you&apos;re an entrepreneur, executive, consultant, coach, speaker, or thought leader who wants to turn your ideas into a professionally published book, this course is for you.</p>
                </li>
                <li className="slo-faq__item">
                  <div className="slo-faq__q">How is this different from Readora&apos;s done-for-you services?</div>
                  <p className="slo-faq__a">Readora&apos;s full-service offerings start at $29,000 and include a dedicated team. With Readora Professional, you talk for 90 minutes a week and we do the rest. With Guided Author, you&apos;re doing the writing but you&apos;ll never feel like you&apos;re doing it alone. Book School gives you the same knowledge and frameworks to do it yourself.</p>
                </li>
                <li className="slo-faq__item">
                  <div className="slo-faq__q">I&apos;m worried I don&apos;t have a book in me.</div>
                  <p className="slo-faq__a">If you&apos;ve lived, learned, built, or healed anything with intention, you have something worth sharing. The authors who worry they&apos;re &ldquo;not interesting enough&rdquo; are usually the ones who end up writing the most powerful books, because they care about depth, not vanity. You don&apos;t need to be famous. You need to be clear, honest, and committed to helping others.</p>
                </li>
                <li className="slo-faq__item">
                  <div className="slo-faq__q">How long do I have access?</div>
                  <p className="slo-faq__a">Lifetime access. Once you purchase, you can revisit any lesson at any time. You&apos;ll also receive all future course updates at no additional charge.</p>
                </li>
                <li className="slo-faq__item">
                  <div className="slo-faq__q">What if I decide I want more help later?</div>
                  <p className="slo-faq__a">Many Book School students go on to work with Readora directly. This process is designed to remove every barrier between you and the finished book you&apos;ve had in your head for years. We&apos;ll guide you every step of the way.</p>
                </li>
                <li className="slo-faq__item">
                  <div className="slo-faq__q">Do I keep ownership of my book?</div>
                  <p className="slo-faq__a">Yes. You own 100% of the intellectual property. You own your manuscript, your creative assets, your royalties, and your publishing accounts. We&apos;re not here to take anything. We&apos;re here to help you bring it to life at the highest level.</p>
                </li>
              </ul>
            </div>
          </section>

          {/* ── FINAL CTA ── */}
          <section className="slo-final-cta">
            <h2 className="slo-final-cta__heading">Most People Never Get Around to Saying It</h2>
            <p className="slo-final-cta__sub">Most people with something meaningful to say never get around to saying it. Or they try, and it never gets finished. Or it gets finished, but it doesn&apos;t land the way it should. Don&apos;t let that be you.</p>
            <a href={CHECKOUT_URL} className="slo-hero__cta">Get Instant Access for $197</a>
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
