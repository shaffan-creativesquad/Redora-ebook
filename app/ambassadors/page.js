import './ambassadors.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AmbassadorsForm from '@/components/AmbassadorsForm'

export const metadata = {
  title: 'Ambassador Program | Readora',
  description: 'Join the Readora Ambassador Program. Earn referral commissions when your connections publish books with Readora.',
}

export default function AmbassadorsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <div className="amb">

          {/* Hero */}
          <section className="amb__hero">
            <div className="amb__hero-content">
              <p className="amb__hero-eyebrow">Readora Ambassador Program</p>
              <h1>Earn up to <em className="amb__hero-amount">$12,000</em> for every new Readora author you refer.</h1>
              <p className="amb__hero-sub">Connect us with experts in your network, and get paid when they publish their book with Readora.</p>
              <a className="amb__hero-cta" href="#ambassador-form">Apply Now</a>
            </div>
          </section>

          {/* Stats bar */}
          <section className="amb__stats-bar">
            <div className="amb__container">
              <div className="amb__stat">
                <p className="amb__stat-value">1,600+</p>
                <p className="amb__stat-label">Authors Served</p>
              </div>
              <div className="amb__stat">
                <p className="amb__stat-value">3,000+</p>
                <p className="amb__stat-label">Books Published</p>
              </div>
              <div className="amb__stat">
                <p className="amb__stat-value">23</p>
                <p className="amb__stat-label">NYT &amp; WSJ Best Sellers</p>
              </div>
            </div>
          </section>

          {/* Tier cards */}
          <section className="amb__tiers-section">
            <div className="amb__container">
              <h2 className="amb__tiers-heading">What you earn for every author you refer</h2>
              <p className="amb__tiers-sub">Your commission depends on which Readora service your referral chooses.</p>
              <div className="amb__tiers-grid">
                <article className="amb__tier-card gold">
                  <p className="amb__tier-amount">$12,000</p>
                  <p className="amb__tier-per">per referral</p>
                  <h3 className="amb__tier-name">Readora Elite Ghostwriting</h3>
                  <p className="amb__tier-desc">White-glove ghostwriting with a senior writer.</p>
                  <a className="amb__tier-link" href="/services/ghostwriting">View Service</a>
                </article>
                <article className="amb__tier-card blue">
                  <p className="amb__tier-amount">$4,000</p>
                  <p className="amb__tier-per">per referral</p>
                  <h3 className="amb__tier-name">Readora Professional</h3>
                  <p className="amb__tier-desc">Interview-driven ghostwriting.</p>
                  <a className="amb__tier-link" href="/services/professional-book-writers">View Service</a>
                </article>
                <article className="amb__tier-card green">
                  <p className="amb__tier-amount">$3,000</p>
                  <p className="amb__tier-per">per referral</p>
                  <h3 className="amb__tier-name">Readora Guided Author</h3>
                  <p className="amb__tier-desc">Author writes with our coaching. We publish.</p>
                  <a className="amb__tier-link" href="/services/guided-author">View Service</a>
                </article>
                <article className="amb__tier-card red">
                  <p className="amb__tier-amount">$1,000</p>
                  <p className="amb__tier-per">per referral</p>
                  <h3 className="amb__tier-name">Readora Publishing</h3>
                  <p className="amb__tier-desc">Editing and publishing for finished manuscripts.</p>
                  <a className="amb__tier-link" href="/services/publishing">View Service</a>
                </article>
              </div>
            </div>
          </section>

          {/* Our Ambassadors */}
          <section className="amb__intro-section">
            <div className="amb__container">
              <h2>Our Ambassadors</h2>
              <div className="amb__intro-copy">
                <p>Our ambassadors are experts and respected voices in their fields. Through their hard work and thought leadership, they have earned the trust of their peers.</p>
                <p>We&apos;ve worked with thousands of authors already, and there are still tens of thousands of potential authors who should write a book and don&apos;t yet know we can help them.</p>
                <p>That&apos;s where you come in. The best way to reach great authors is through a warm introduction from someone they trust.</p>
              </div>
              <div className="amb__people-grid">
                <article className="amb__person-card">
                  <div className="amb__person-media">
                    <img src="/assets/cameron-herold.png" alt="Cameron Herold" loading="lazy" />
                  </div>
                  <div className="amb__person-body">
                    <h3>Cameron Herold</h3>
                    <p className="amb__person-title">Founder of the COO Alliance</p>
                    <p className="amb__person-desc">Author of Vivid Vision and Meetings Suck. CNN&apos;s &ldquo;the man executives turn to for business advice.&rdquo;</p>
                  </div>
                </article>
                <article className="amb__person-card">
                  <div className="amb__person-media">
                    <img src="/assets/lewis-howes.jpg" alt="Lewis Howes" loading="lazy" />
                  </div>
                  <div className="amb__person-body">
                    <h3>Lewis Howes</h3>
                    <p className="amb__person-title">Founder of The School of Greatness</p>
                    <p className="amb__person-desc">NYT bestselling author and host of The School of Greatness, one of the world&apos;s most-downloaded podcasts.</p>
                  </div>
                </article>
                <article className="amb__person-card">
                  <div className="amb__person-media">
                    <img src="/assets/chris-dessi.jpg" alt="Chris Dessi" loading="lazy" />
                  </div>
                  <div className="amb__person-body">
                    <h3>Chris Dessi</h3>
                    <p className="amb__person-title">Founder and CEO of Silverback Social</p>
                    <p className="amb__person-desc">Personal-branding expert and bestselling author featured in CNBC, CNN, Fox News, Inc., and Forbes.</p>
                  </div>
                </article>
                <article className="amb__person-card">
                  <div className="amb__person-media">
                    <img src="/assets/james-altucher.jpg" alt="James Altucher" loading="lazy" />
                  </div>
                  <div className="amb__person-body">
                    <h3>James Altucher</h3>
                    <p className="amb__person-title">WSJ Bestselling Author of Choose Yourself</p>
                    <p className="amb__person-desc">WSJ bestselling author of Choose Yourself, founder of 20+ companies, host of The James Altucher Show.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* How it works */}
          <section className="amb__how">
            <div className="amb__container">
              <h2>How it works</h2>
              <p className="amb__how-sub">Here&apos;s a real-world example of how the Readora Ambassador Program actually works.</p>
              <div className="amb__step-list">
                <article className="amb__step">
                  <div className="amb__step-media">
                    <img src="/assets/step-1-cameron.png" alt="Cameron Herold signed up as an ambassador" loading="lazy" />
                  </div>
                  <div className="amb__step-copy">
                    <h3>1. Cameron Signed Up as an Ambassador</h3>
                    <p>As an entrepreneur with a large network and social media following, Cameron was a natural fit. He signed up to start making introductions.</p>
                  </div>
                </article>
                <article className="amb__step">
                  <div className="amb__step-media">
                    <img src="/assets/step-2-cam.png" alt="Cameron sharing Readora with his network" loading="lazy" />
                  </div>
                  <div className="amb__step-copy">
                    <h3>2. Cameron Shared Readora with His Network</h3>
                    <p>He knew his colleague John Ruhlin and his sister Kristi Herold both had wisdom worth sharing. He sent an introduction email to ambassador@readora.com with John and Kristi CC&apos;d, so the referral was credited to him before they ever booked their consults.</p>
                  </div>
                </article>
                <article className="amb__step">
                  <div className="amb__step-media">
                    <img src="/assets/step-3-giftology.png" alt="Two new books published" loading="lazy" />
                  </div>
                  <div className="amb__step-copy">
                    <h3>3. Two New Books Were Born</h3>
                    <p>John and Kristi both signed on as Readora authors. Cameron got paid as each book hit its milestones.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="amb__faq">
            <div className="amb__container">
              <h2>Frequently Asked Questions</h2>
              <p className="amb__faq-intro">Everything you need to know about referring authors and getting paid.</p>
              <div className="amb__faq-list">
                <details className="amb__faq-item">
                  <summary className="amb__faq-q">How do I introduce someone to Readora?</summary>
                  <div className="amb__faq-a">
                    <p>Send an email introduction to <a href="mailto:ambassador@readora.com">ambassador@readora.com</a> and CC the person you are introducing on the email. That single step both introduces them to our team and registers your introduction.</p>
                    <p><strong>Your email must arrive at ambassador@readora.com before the person you&apos;re introducing submits their own consultation form on readora.com.</strong> Once a prospective client is already logged in our system, no commission can be paid for that author.</p>
                  </div>
                </details>
                <details className="amb__faq-item">
                  <summary className="amb__faq-q">Who is a good fit for Readora?</summary>
                  <div className="amb__faq-a">
                    <p>Founders, executives, coaches, speakers, investors, and other experts who have a story or a framework worth publishing, and who can invest in a premium service. Readora is non-fiction only.</p>
                  </div>
                </details>
                <details className="amb__faq-item">
                  <summary className="amb__faq-q">How should I talk about Readora to a potential author?</summary>
                  <div className="amb__faq-a">
                    <p>Lead with the outcome. Readora takes a busy expert from idea to published book without them writing a word (or with as much coaching as they want). Authors keep 100% creative, legal, and financial control of their work.</p>
                  </div>
                </details>
                <details className="amb__faq-item">
                  <summary className="amb__faq-q">What if they say Readora is too expensive?</summary>
                  <div className="amb__faq-a">
                    <p>Readora is for authors who prioritize their time and brand over their budget. The book becomes a credibility asset for life: a premium ghostwritten book typically pays for itself many times over in speaking, consulting, and client work.</p>
                  </div>
                </details>
                <details className="amb__faq-item">
                  <summary className="amb__faq-q">How much do I earn?</summary>
                  <div className="amb__faq-a">
                    <ul>
                      <li><strong>$12,000</strong> for each Readora Elite Ghostwriting author</li>
                      <li><strong>$4,000</strong> for each Readora Professional author</li>
                      <li><strong>$3,000</strong> for each Readora Guided Author</li>
                      <li><strong>$1,000</strong> for each Readora Publishing author</li>
                    </ul>
                  </div>
                </details>
                <details className="amb__faq-item">
                  <summary className="amb__faq-q">When do I get paid?</summary>
                  <div className="amb__faq-a">
                    <p>Your commission is paid in three installments as your author&apos;s book gets made: <strong>10%</strong> at their first project milestone, <strong>40%</strong> around the halfway point, and <strong>50%</strong> at completion. Payouts go out at the end of each month.</p>
                  </div>
                </details>
                <details className="amb__faq-item">
                  <summary className="amb__faq-q">How will I receive payment?</summary>
                  <div className="amb__faq-a">
                    <p>Securely through <strong>Plooto</strong>. You&apos;ll receive an email each time a payout becomes available.</p>
                  </div>
                </details>
                <details className="amb__faq-item">
                  <summary className="amb__faq-q">Can I introduce more than one person?</summary>
                  <div className="amb__faq-a">
                    <p>Yes. There&apos;s no cap on how many people you can introduce, and you get paid for each one who becomes a Readora author.</p>
                  </div>
                </details>
                <details className="amb__faq-item">
                  <summary className="amb__faq-q">What if I have other ideas for promoting Readora?</summary>
                  <div className="amb__faq-a">
                    <p>Great. Email us at <a href="mailto:authorstrategy@readora.com">authorstrategy@readora.com</a>. We love getting creative with ambassadors on speaking gigs, podcast features, content collaborations, and event partnerships.</p>
                  </div>
                </details>
                <details className="amb__faq-item">
                  <summary className="amb__faq-q">Do I need to be a published Readora author to be an ambassador?</summary>
                  <div className="amb__faq-a">
                    <p>No. If you have a network of experts, founders, executives, or thought leaders, you can join. Past Readora authorship is not required.</p>
                  </div>
                </details>
                <details className="amb__faq-item">
                  <summary className="amb__faq-q">What happens after I introduce someone?</summary>
                  <div className="amb__faq-a">
                    <p>Our Author Strategy team picks up the introduction from your email, replies to schedule a strategy call with the person you introduced, and tags them as your referral in our system. If they sign with Readora, your commission kicks in at their first project milestone.</p>
                  </div>
                </details>
                <details className="amb__faq-item">
                  <summary className="amb__faq-q">Can my author get a discount?</summary>
                  <div className="amb__faq-a">
                    <p>Readora doesn&apos;t discount its services, so introducing someone isn&apos;t a way to get them a price break. Your author pays the standard rate, and you earn the standard commission.</p>
                  </div>
                </details>
              </div>
            </div>
          </section>

          {/* Apply Form */}
          <div className="amb__form-section" id="ambassador-form">
            <h2>Apply to Become an Ambassador</h2>
            <p>Fill out the form below and we&apos;ll send you your unique link.</p>
            <p className="amb__terms-note">Before submitting, review the <a href="/ambassador-terms-of-service">Readora Ambassador Program Terms &amp; Conditions</a>.</p>
            <div className="amb__form-wrapper">
              <AmbassadorsForm />
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
