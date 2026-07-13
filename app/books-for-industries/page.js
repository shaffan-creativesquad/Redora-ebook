import './books-for-industries.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata = {
  title: 'Books for Every Industry | Readora',
  description:
    'Readora has helped professionals across every industry write and publish books that build authority and grow their business. Find published authors in your field: lawyers, doctors, coaches, entrepreneurs, and more.',
}

export default function BooksForIndustriesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ind-index">

          <div className="ind-index__hero">
            <h1>Books for Every Industry</h1>
            <p>
              Readora has helped professionals across every industry write and publish books that
              build authority and grow their business. Find authors in your field.
            </p>
          </div>

          <div className="ind-index__grid">
            <Link href="/services/books-for-brands" className="ind-index__card">
              <h3>Books for Brands</h3>
              <p>Corporate thought leadership and brand publishing for enterprises and organizations.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/services/books-for-lawyers" className="ind-index__card">
              <h3>Books for Lawyers</h3>
              <p>Win clients, command higher fees, and become the authority in your practice area.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/books-for-doctors" className="ind-index__card">
              <h3>Books for Doctors</h3>
              <p>Educate patients at scale and establish thought leadership in your specialty.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/books-for-financial-advisors" className="ind-index__card">
              <h3>Books for Financial Advisors</h3>
              <p>Build trust with high-net-worth clients before your first meeting.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/books-for-coaches" className="ind-index__card">
              <h3>Books for Coaches</h3>
              <p>Codify your methodology and attract premium clients at scale.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/books-for-consultants" className="ind-index__card">
              <h3>Books for Consultants</h3>
              <p>Generate inbound leads and close bigger engagements with a published book.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/books-for-speakers" className="ind-index__card">
              <h3>Books for Speakers</h3>
              <p>Land more keynotes, increase your fee, and extend your message.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/books-for-entrepreneurs" className="ind-index__card">
              <h3>Books for Entrepreneurs</h3>
              <p>Attract investors, recruit talent, and build a personal brand that lasts.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/books-for-sales" className="ind-index__card">
              <h3>Books for Sales Professionals</h3>
              <p>Become the authority in your industry and open doors before you pick up the phone.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/books-for-marketers" className="ind-index__card">
              <h3>Books for Marketers</h3>
              <p>Prove your expertise and attract agency clients with a published methodology.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/books-for-fitness" className="ind-index__card">
              <h3>Books for Fitness &amp; Wellness</h3>
              <p>Reach a global audience and launch programs beyond the gym floor.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/books-for-tech" className="ind-index__card">
              <h3>Books for Tech Leaders</h3>
              <p>Share your vision and establish yourself as a voice that matters in technology.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/books-for-military" className="ind-index__card">
              <h3>Books for Military &amp; Veterans</h3>
              <p>Turn your service into your next mission with a book that inspires.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>

            <Link href="/books-for-retail" className="ind-index__card">
              <h3>Books for Retail Leaders</h3>
              <p>Lead the conversation in a rapidly evolving industry.</p>
              <span className="ind-index__card-arrow">View authors →</span>
            </Link>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
