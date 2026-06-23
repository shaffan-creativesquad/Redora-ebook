import './quote.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Get a Quote | Scribe Media',
  description:
    'Review your personalized quote and agreement details with Scribe Media. Enter your quote ID, verify your email, or contact your representative for help.',
}

export default function QuotePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <div className="q-page">
          <div className="q-state" id="state-loading" style={{ display: 'none' }}>
            <div className="spinner"></div>
            <h2>Loading Your Quote</h2>
            <p>Please wait while we retrieve your personalized quote.</p>
          </div>

          <div className="q-state" id="state-lookup" style={{ display: 'block' }}>
            <div className="q-lookup-card">
              <h2>Retrieve Your Quote</h2>
              <p style={{ marginBottom: '32px', lineHeight: 1.5 }}>
                Enter the email address and Deal ID your Scribe representative provided.
              </p>
              <div className="q-lookup-form">
                <label htmlFor="lookup-email">Email Address</label>
                <input type="email" id="lookup-email" placeholder="your@email.com" />
                <label htmlFor="lookup-deal">Deal ID</label>
                <input type="text" id="lookup-deal" placeholder="e.g. 318745104064" />
              </div>
              <button type="button" id="lookup-btn" className="q-btn q-btn--gold">
                Find My Quote
              </button>
              <p id="lookup-error" className="q-lookup-error"></p>
            </div>
            <p className="q-lookup-footer">
              Don't have this information? <a href="https://scribemedia.com/consult">Contact your representative</a>
            </p>
          </div>

          <div className="q-state" id="state-verify" style={{ display: 'none' }}>
            <div className="q-lookup-card">
              <h2>Verify Your Email</h2>
              <p style={{ marginBottom: '32px', lineHeight: 1.5 }}>
                For your security, please confirm your email address to view your quote.
              </p>
              <div className="q-lookup-form">
                <label htmlFor="verify-email">Email Address</label>
                <input type="email" id="verify-email" placeholder="your@email.com" />
              </div>
              <button type="button" id="verify-btn" className="q-btn q-btn--gold">
                View My Quote
              </button>
              <p id="verify-error" className="q-lookup-error"></p>
            </div>
            <p className="q-lookup-footer">
              Not your quote? <a href="https://scribemedia.com/consult">Contact your representative</a>
            </p>
          </div>

          <div className="q-state" id="state-error" style={{ display: 'none' }}>
            <h2>Quote Not Found</h2>
            <p id="error-message">
              This quote link is no longer valid. Please contact your Scribe representative.
            </p>
            <a href="https://scribemedia.com/consult" className="q-btn q-btn--gold" style={{ marginTop: '24px' }}>
              Schedule a Consult
            </a>
          </div>

          <div className="q-state" id="state-completed" style={{ display: 'none' }}>
            <div style={{ fontSize: '48px', color: 'var(--q-green)', marginBottom: '16px' }}>✓</div>
            <h2>Agreement Complete</h2>
            <p>
              This agreement has already been signed and the deposit has been paid. If you have
              questions, contact your Scribe team.
            </p>
            <a href="https://scribemedia.com" className="q-btn q-btn--outline" style={{ marginTop: '24px' }}>
              Back to Scribe Media
            </a>
          </div>

          <div id="quote-content" style={{ display: 'none' }}>
            <div className="q-progress">
              <div className="q-progress__step is-active" data-step="1">
                <span className="q-progress__num">1</span><span>Your Package</span>
              </div>
              <div className="q-progress__line"></div>
              <div className="q-progress__step" data-step="2">
                <span className="q-progress__num">2</span><span>Agreement</span>
              </div>
              <div className="q-progress__line"></div>
              <div className="q-progress__step" data-step="3">
                <span className="q-progress__num">3</span><span>Sign</span>
              </div>
              <div className="q-progress__line"></div>
              <div className="q-progress__step" data-step="4">
                <span className="q-progress__num">4</span><span>Pay</span>
              </div>
            </div>

            <div className="q-layout">
              <div className="q-main">
                <div className="q-section is-visible" id="step-1">
                  <div className="q-hero" id="hero-section">
                    <div className="q-hero__badge" id="hero-badge"></div>
                    <h1 className="q-hero__title" id="hero-title"></h1>
                    <p className="q-hero__subtitle" id="hero-subtitle"></p>
                    <div className="q-hero__price-row">
                      <span className="q-hero__price" id="hero-price"></span>
                      <span className="q-hero__price-term" id="hero-price-term"></span>
                    </div>
                    <div className="q-hero__price-note" id="hero-price-note"></div>
                    <div className="q-hero__rep" id="hero-rep" style={{ display: 'none' }}>
                      Prepared by <strong id="hero-rep-name"></strong>
                    </div>
                    <div id="discount-display" style={{ display: 'none' }}></div>
                  </div>

                  <div className="q-included" id="deliverables-section" style={{ display: 'none' }}>
                    <div className="q-included__heading">Everything Included in Your Package</div>
                    <div className="q-included__grid" id="deliverables-grid"></div>
                  </div>

                  <div className="q-deal-addons" id="deal-addons-section" style={{ display: 'none' }}>
                    <div className="q-deal-addons__heading">Add-On Services in Your Deal</div>
                    <div id="deal-addons-list"></div>
                  </div>

                  <div id="custom-items-section" style={{ display: 'none' }}></div>

                  <div className="q-enhance" id="enhance-section" style={{ display: 'none' }}>
                    <h2 className="q-enhance__heading">Want to Add More Services?</h2>
                    <p className="q-enhance__sub">
                      Optional services to maximize your book's reach and impact.
                    </p>
                    <div id="enhance-list"></div>
                    <div className="q-addons-save" id="addons-save">
                      <button type="button" className="q-btn q-btn--gold">
                        Update My Quote
                      </button>
                      <div className="saving-note">
                        Your quote and agreement will be updated with the selected services.
                      </div>
                    </div>
                  </div>

                  <div className="q-step-nav" style={{ borderTop: 'none', paddingTop: 0, marginTop: '24px' }}>
                    <span></span>
                    <button type="button" className="q-btn q-btn--gold">
                      Review Agreement →
                    </button>
                  </div>
                </div>

                <div className="q-section" id="step-2">
                  <div className="q-card">
                    <h2>Your Agreement</h2>
                    <p style={{ color: 'var(--q-dim)', fontSize: '13px', margin: '4px 0 16px' }}>
                      Please review the full agreement below. Scroll to read all sections.
                    </p>
                    <div className="q-agreement" id="agreement-text"></div>
                    <div id="custom-terms-section" style={{ display: 'none' }}>
                      <div className="q-custom-terms">
                        <h4>Additional Terms from Your Representative</h4>
                        <p id="custom-terms-text"></p>
                      </div>
                    </div>
                    <p style={{ fontSize: '13px', color: 'var(--q-dim)', marginTop: '16px', textAlign: 'center' }}>
                      By proceeding, you also agree to our{' '}
                      <a href="/terms/service-agreement" target="_blank" rel="noreferrer" style={{ color: 'var(--q-gold)' }}>
                        Master Terms & Conditions (v1)
                      </a>.
                    </p>
                    <div className="q-step-nav">
                      <button type="button" className="q-btn q-btn--outline">
                        ← Back to Package
                      </button>
                      <button type="button" className="q-btn q-btn--gold">
                        Sign Agreement →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="q-section" id="step-3">
                  <div className="q-card">
                    <h2>Sign Your Agreement</h2>
                    <p style={{ color: 'var(--q-dim)', fontSize: '13px', margin: '4px 0 20px' }}>
                      Complete the fields below and type your full legal name to sign. Fields marked with{' '}
                      <span style={{ color: '#ff6b6b' }}>*</span> are required.
                    </p>
                    <div className="q-sign-field">
                      <label htmlFor="sign-name">
                        Full Legal Name <span className="q-req">*</span>
                      </label>
                      <input type="text" id="sign-name" placeholder="Your full name as it appears on legal documents" />
                    </div>
                    <div className="q-sign-field">
                      <label htmlFor="sign-email">
                        Email Address <span className="q-req">*</span>
                      </label>
                      <input type="email" id="sign-email" placeholder="your@email.com" />
                    </div>
                    <div className="q-sign-field">
                      <label htmlFor="sign-phone">Phone Number</label>
                      <input type="tel" id="sign-phone" placeholder="(555) 555-5555" />
                    </div>
                    <div className="q-sign-field">
                      <label htmlFor="sign-address">
                        Mailing Address <span className="q-req">*</span>
                      </label>
                      <input type="text" id="sign-address" placeholder="Street address" />
                    </div>
                    <div style={{ display: 'flex', gap: '12px' }}>
                      <div className="q-sign-field" style={{ flex: 2 }}>
                        <label htmlFor="sign-city">
                          City <span className="q-req">*</span>
                        </label>
                        <input type="text" id="sign-city" placeholder="City" />
                      </div>
                      <div className="q-sign-field" style={{ flex: 1 }}>
                        <label htmlFor="sign-state">
                          State <span className="q-req">*</span>
                        </label>
                        <input type="text" id="sign-state" placeholder="State" />
                      </div>
                      <div className="q-sign-field" style={{ flex: 1 }}>
                        <label htmlFor="sign-zip">
                          Zip Code <span className="q-req">*</span>
                        </label>
                        <input type="text" id="sign-zip" placeholder="Zip" />
                      </div>
                    </div>
                    <label className="q-sign-checkbox">
                      <input type="checkbox" id="sign-agree-terms" />
                      <span>
                        <span className="q-req">*</span> I have read and agree to the{' '}
                        <a href="/terms/service-agreement" target="_blank" rel="noreferrer" style={{ color: 'var(--q-gold)' }}>
                          Master Terms & Conditions
                        </a>{' '}
                        and the deal-specific agreement
                      </span>
                    </label>
                    <label className="q-sign-checkbox">
                      <input type="checkbox" id="sign-agree-payment" />
                      <span>
                        <span className="q-req">*</span> I agree to the payment schedule shown in the summary
                      </span>
                    </label>
                    <label className="q-sign-checkbox">
                      <input type="checkbox" id="sign-agree-electronic" />
                      <span>
                        <span className="q-req">*</span> I consent to conduct this transaction electronically
                      </span>
                    </label>
                    <div className="q-signature-box">
                      <input type="text" id="sign-signature" placeholder="Type your full legal name" />
                      <div className="hint">
                        Type your full legal name exactly as entered above to sign <span className="q-req">*</span>
                      </div>
                    </div>
                    <div id="sign-error-msg" className="q-sign-errors" style={{ display: 'none' }}></div>
                    <div style={{ fontSize: '12px', color: 'var(--q-dim)', marginTop: '12px', textAlign: 'center' }}>
                      Signed on: <span id="sign-timestamp"></span> · IP recorded automatically
                    </div>
                    <div className="q-consult-cta">
                      <p>Have questions before signing? Talk to our team first.</p>
                      <a href="https://scribemedia.com/consult" className="q-btn q-btn--blue">
                        Schedule a Free Consult
                      </a>
                    </div>
                    <div className="q-step-nav">
                      <button type="button" className="q-btn q-btn--outline">
                        ← Back to Agreement
                      </button>
                      <button type="button" className="q-btn q-btn--gold" id="btn-to-pay">
                        Proceed to Payment →
                      </button>
                    </div>
                  </div>
                </div>

                <div className="q-section" id="step-4">
                  <div className="q-card">
                    <h2 id="pay-heading">Make Your Deposit</h2>
                    <div className="q-pay-summary" id="pay-summary-box">
                      <div className="first-payment" id="pay-amount">$1,000</div>
                      <div className="pay-note" id="pay-label">Deposit to get started</div>
                      <div className="pay-note" id="pay-remaining-note" style={{ marginTop: '8px' }}>
                        This $1,000 will be deducted from your first monthly payment.
                      </div>
                      <div className="pay-note" style={{ marginTop: '8px', color: 'var(--q-green)' }}>
                        Pay your deposit and we&apos;ll start your book process immediately.
                      </div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                      <button type="button" className="q-btn q-btn--gold" id="btn-pay" style={{ padding: '18px 48px', fontSize: '17px' }}>
                        Pay $1,000 Deposit
                      </button>
                      <p style={{ fontSize: '12px', color: 'var(--q-dim)', marginTop: '12px' }}>
                        You will be redirected to Stripe&apos;s secure checkout page.
                        <br />Powered by Stripe. Your card information never touches our servers.
                      </p>
                    </div>
                    <div className="q-consult-cta">
                      <p>Changed your mind? No problem. Talk to us first.</p>
                      <a href="https://scribemedia.com/consult" className="q-btn q-btn--blue">
                        Schedule a Free Consult Instead
                      </a>
                    </div>
                    <div className="q-step-nav">
                      <button type="button" className="q-btn q-btn--outline">
                        ← Back to Sign
                      </button>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="q-sidebar">
                <div className="q-summary">
                  <h3>Project Summary</h3>
                  <div id="summary-lines"></div>
                  <div id="summary-discount" style={{ display: 'none' }}></div>
                  <div id="summary-new-addons"></div>
                  <div className="q-summary__total">
                    <span>Total Investment</span>
                    <span className="value" id="sum-total">$0</span>
                  </div>
                  <div className="q-summary__payment">
                    <div className="amount" id="sum-monthly">$0</div>
                    <div className="term" id="sum-term"></div>
                  </div>
                  <div className="q-summary__rep" id="sum-rep" style={{ display: 'none' }}>
                    Your representative: <strong id="sum-rep-name"></strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
