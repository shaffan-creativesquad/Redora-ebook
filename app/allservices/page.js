import '../pricing/pricing.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import PricingFaq from '../pricing/PricingFaq'

export const metadata = {
  title: 'Book Writing & Publishing Services | Readora',
  description: 'Compare Readora book writing and publishing service pricing: Readora Publishing, Guided Author, Readora Professional, and Readora Elite.',
}

export default function AllServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <div className="services-page">

          <div className="services-hero">
            <h1>Writing and Publishing Services</h1>
            <p>We offer four core ways to help you write and publish your nonfiction book.</p>
          </div>

          <div className="pricing-section">
            <h2>Compare Core Services</h2>
            <div className="pricing-grid">

              <div className="pricing-card">
                <div className="card-icon">
                  <svg viewBox="0 0 48 48" fill="none"><path d="M12 8h24v32H12z" stroke="#ff4444" strokeWidth="2"/><path d="M18 16h12M18 22h12M18 28h8" stroke="#ff4444" strokeWidth="2"/></svg>
                </div>
                <h3>Readora Publishing</h3>
                <p className="desc">You write the book, we handle everything else. Professional editing, design, publishing, and distribution.</p>
                <div className="price">$29,000</div>
                <div className="price-note">Paid Over 6 months</div>
                <div style={{ marginBottom: '20px' }}></div>
                <a href="/services/publishing" className="btn" aria-label="Learn more about Readora Publishing">Learn More</a>
              </div>

              <div className="pricing-card">
                <div className="card-icon">
                  <svg viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="16" stroke="#e02d2d" strokeWidth="2"/><path d="M24 14v10l7 7" stroke="#e02d2d" strokeWidth="2"/></svg>
                </div>
                <h3>Readora Guided Author</h3>
                <p className="desc">We guide you through the writing process with coaching, community, and professional publishing.</p>
                <div className="price">$44,000</div>
                <div className="price-note">Paid Over 15 months</div>
                <div style={{ marginBottom: '20px' }}></div>
                <a href="/services/guided-author" className="btn" aria-label="Learn more about Readora Guided Author">Learn More</a>
              </div>

              <div className="pricing-card popular">
                <div className="popular-badge">Most Popular</div>
                <div className="card-icon">
                  <svg viewBox="0 0 48 48" fill="none"><path d="M14 34l10-20 10 20" stroke="#8C00FF" strokeWidth="2"/><path d="M24 14v-4M18 36h12" stroke="#8C00FF" strokeWidth="2"/></svg>
                </div>
                <h3>Readora Professional</h3>
                <p className="desc">We interview you, write your book in your voice, and handle all editing, design, publishing, and distribution.</p>
                <div className="price">$56,000</div>
                <div className="price-note">Paid Over 12 months</div>
                <div style={{ marginBottom: '20px' }}></div>
                <a href="/services/professional-book-writers" className="btn" aria-label="Learn more about Readora Professional">Learn More</a>
              </div>

              <div className="pricing-card">
                <div className="card-icon">
                  <svg viewBox="0 0 48 48" fill="none"><path d="M24 8c-8 0-14 8-14 16s6 16 14 16" stroke="#e02d2d" strokeWidth="2"/><path d="M24 8c8 0 14 8 14 16s-6 16-14 16" stroke="#e02d2d" strokeWidth="2"/><path d="M20 20l4 4 8-8" stroke="#e02d2d" strokeWidth="2"/></svg>
                </div>
                <h3>Readora Elite</h3>
                <p className="desc">Premier ghostwriting for non-fiction authors. Professional writers capture your ideas and voice to create your book.</p>
                <div className="price">Custom</div>
                <div className="price-note">Flexible Payment Plan</div>
                <div className="price-min">$135K Min. Investment</div>
                <a href="/services/ghostwriting" className="btn" aria-label="Learn more about Readora Elite">Learn More</a>
              </div>

            </div>
            <p className="pricing-section__aux-link">
              Need a corporate-authoring solution? <a href="/services/books-for-brands">Explore Books for Brands</a>.
            </p>
          </div>

          <div className="comparison-section">
            <h2>How long will it take?</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Readora Publishing</th>
                  <th>Readora Guided Author</th>
                  <th>Readora Professional</th>
                  <th>Readora Elite</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Time Commitment</td>
                  <td>6 hours, all on the phone (not including time to complete your manuscript)</td>
                  <td>16 hours, all on the phone (10 Book Coach Calls + 6 hours for the publishing process)</td>
                  <td>2 hours per week on the phone over the span of 9-12 months</td>
                  <td>Varies</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comparison-section">
            <h2>What&apos;s Included?</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Readora Publishing</th>
                  <th>Readora Guided Author</th>
                  <th>Readora Professional</th>
                  <th>Readora Elite</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Full Publishing Package</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
                <tr><td>Proofreading</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
                <tr><td>Digital Course Access</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
                <tr>
                  <td>Full Content Edit</td>
                  <td>Opt. add-on</td>
                  <td>3 editing passes</td>
                  <td>Ongoing</td>
                  <td>Ongoing</td>
                </tr>
                <tr>
                  <td>Capture Book Ideas via Interviews</td>
                  <td><span className="dash">—</span></td>
                  <td><span className="dash">—</span></td>
                  <td><span className="check">✓</span></td>
                  <td><span className="check">✓</span></td>
                </tr>
                <tr>
                  <td>Professional Ghostwriting</td>
                  <td><span className="dash">—</span></td>
                  <td><span className="dash">—</span></td>
                  <td><span className="dash">—</span></td>
                  <td><span className="check">✓</span></td>
                </tr>
                <tr><td>Book Marketing Strategy</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
                <tr><td>Author Marketing Materials</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
              </tbody>
            </table>
          </div>

          <div className="comparison-section">
            <h2>How will we launch it?</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Readora Publishing</th>
                  <th>Readora Guided Author</th>
                  <th>Readora Professional</th>
                  <th>Readora Elite</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Launch Week Activities</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
                <tr><td>Launch Preparation Checklist</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
                <tr><td>Full Ownership Rights</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
                <tr><td>Full Book Royalties</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
                <tr><td>Full Creative Control</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
                <tr><td>Full Distribution</td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td><td><span className="check">✓</span></td></tr>
              </tbody>
            </table>
          </div>

          <div className="bottom-cta">
            <h2>Undecided?</h2>
            <p>Our author strategists can help you determine which plan is right for you.</p>
            <a href="/consult" className="cta-btn">Schedule a Consult</a>
          </div>

          <PricingFaq />

        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
