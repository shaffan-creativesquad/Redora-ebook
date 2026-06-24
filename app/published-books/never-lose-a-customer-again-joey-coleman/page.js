import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Never Lose a Customer Again by Joey Coleman',
  description:
    'Award-winning speaker and business consultant Joey Coleman teaches audiences and companies all over the world how to turn a one-time purchaser into a lifelong customer.',
}

export default function NeverLoseACustomerAgainPage() {
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
                  src="./assets/NLaCA.jpg"
                  alt="Never Lose a Customer Again"
                  width={260}
                  height={400}
                  className="bd-cover"
                  priority
                  unoptimized
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">Never Lose a Customer Again</h1>
                <p className="bd-author">
                  by{' '}
                  <a className="bd-author-link-inline" href="/authors/null">Joey Coleman</a>
                </p>

                <p className="bd-section-title">About This Book</p>
                <div className="bd-description">
                  <p>
                    Award-winning speaker and business consultant Joey Coleman teaches audiences and
                    companies all over the world how to turn a one-time purchaser into a lifelong
                    customer.
                  </p>
                  <p>
                    Coleman&apos;s theory of building customer loyalty isn&apos;t about focusing on
                    marketing or closing the sale: It&apos;s about the First 100 Days&reg; after the
                    sale and the interactions the customer experiences.
                  </p>
                  <p>
                    While new customers experience joy, euphoria, and excitement, these feelings
                    quickly shift to fear, doubt, and uncertainty as buyer&apos;s remorse sets in.
                    Across all industries, somewhere between 20%-70% of newly acquired customers will
                    stop doing business with a company with the first 100 days of being a new
                    customer because they feel neglected in the early stages of customer onboarding.
                  </p>
                  <p>
                    In <em>Never Lose a Customer Again</em>, Coleman offers a philosophy and
                    methodology for dramatically increasing customer retention and as a result, the
                    bottom line. He identifies eight distinct emotional phases customers go through in
                    the 100 days following a purchase. From an impulse buy at Starbucks to the
                    thoughtful purchase of a first house, all customers have the potential to
                    experience the eight phases of the customer journey. If you can understand and
                    anticipate the customers&apos; emotions, you can apply a myriad of tools and
                    techniques -- in-person, email, phone, mail, video, and presents -- to cement a
                    long and valuable relationship.
                  </p>
                  <p>
                    Coleman&apos;s system is presented through research and case studies showing how
                    best-in-class companies create remarkable customer experiences at each step in
                    the customer lifecycle.
                  </p>
                  <p>
                    In the &ldquo;Acclimate&rdquo; stage, customers need you to hold their hand and
                    over-explain how to use your product or service. They&apos;re often too
                    embarrassed to admit they&apos;re confused. Take a cue from Canadian software
                    company PolicyMedical and their challenge of getting non-technical users to
                    undergo a complex installation and implementation process. They turned a series of
                    project spreadsheets and installation manuals into a beautiful puzzle customers
                    could assemble after completing each milestone.
                  </p>
                  <p>
                    In the &ldquo;Adopt&rdquo; stage, customers should be welcomed to the highest
                    tier of tribal membership with both public and private recognitions. For instance,
                    Sephora&apos;s VIB Rogue member welcome gift provides a metallic membership card
                    (private recognition) and a members-only shade of lipstick (for public display).
                  </p>
                  <p>
                    In the final stage, &ldquo;Advocate,&rdquo; loyal customers and raving fans are
                    primed to provide powerful referrals. That&apos;s how elite entrepreneurial event
                    MastermindTalks continues to sell-out their conference year after year - with zero
                    dollars spent on marketing. By surprising their loyal fans with amazing referral
                    bonuses (an all-expenses paid safari?!) they guarantee their community will keep
                    providing perfect referrals.
                  </p>
                  <p>
                    Drawing on nearly two decades of consulting and keynoting, Coleman provides
                    strategies and systems to increase customer loyalty. Applicable to companies in
                    any industry and of any size (whether measured in employee count, revenue, or
                    total number of customers), implementing his methods regularly leads to an
                    increase in profits of 25-100%.
                  </p>
                  <p>
                    Working with well-known clients like Hyatt Hotels, Zappos, and NASA, as well as
                    mom-and-pop shops and solo entrepreneurs around the world, Coleman&apos;s
                    customer retention system has produced incredible results in dozens of industries.
                  </p>
                  <p>
                    His approach to creating remarkable customer experiences requires minimal
                    financial investment and will be fun for owners, employees, and teams to
                    implement. This book is required reading for business owners, CEOs, and managers
                    - as well as sales and marketing teams, account managers, and customer service
                    representatives looking for easy to implement action steps that result in lasting
                    change, increased profits, and lifelong customer retention.
                  </p>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://www.amazon.com/dp/0735220034?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$14.25</span>
                  </a>
                  <Link
                    href="/success-stories/joey-coleman-never-lose-a-customer-again"
                    className="bd-btn bd-btn--secondary"
                  >
                    Read Success Story
                  </Link>
                  <Link href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
