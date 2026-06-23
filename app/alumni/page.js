import './alumni.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Schedule a Consult - Alumni Only | Scribe Media',
  description: 'Welcome back, Scribe Alumni. Schedule a time to speak with one of our Author Strategists.',
}

export default function AlumniPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>

        <section className="alumni-page">
          <div className="alumni-page__header">
            <h1 className="alumni-page__heading">Schedule a Consult – Alumni Only</h1>
          </div>

          <div className="alumni-welcome">
            <h2 className="alumni-welcome__heading">Welcome back, Scribe Alumni!</h2>
            <blockquote className="alumni-welcome__blockquote">
              <img
                src="/assets/miles-rikki-1.png"
                alt="Two Scribe team members smiling"
                width="80"
                height="54"
                loading="lazy"
              />
              <p>Schedule a time to speak with one of our Author Strategists.</p>
            </blockquote>

            <form className="alumni-form" onSubmit={e => e.preventDefault()}>
              <div className="alumni-form__row">
                <div className="alumni-form__field">
                  <label className="alumni-form__label">
                    First Name<span className="alumni-form__required">*</span>
                  </label>
                  <input className="alumni-form__input" type="text" name="firstname" placeholder="First Name" required />
                </div>
                <div className="alumni-form__field">
                  <label className="alumni-form__label">
                    Last Name<span className="alumni-form__required">*</span>
                  </label>
                  <input className="alumni-form__input" type="text" name="lastname" placeholder="Last Name" required />
                </div>
              </div>

              <div className="alumni-form__field">
                <label className="alumni-form__label">
                  Email<span className="alumni-form__required">*</span>
                </label>
                <input className="alumni-form__input" type="email" name="email" placeholder="Email" required />
              </div>

              <div className="alumni-form__row">
                <div className="alumni-form__field">
                  <label className="alumni-form__label">Country</label>
                  <select className="alumni-form__select" name="country">
                    <option value="">Country</option>
                    <option value="USA">USA</option>
                    <option value="International">International</option>
                  </select>
                </div>
                <div className="alumni-form__field">
                  <label className="alumni-form__label">
                    Phone<span className="alumni-form__required">*</span>
                  </label>
                  <input className="alumni-form__input" type="tel" name="phone" placeholder="Phone" required />
                </div>
              </div>

              <div className="alumni-form__field">
                <label className="alumni-form__label">International Phone</label>
                <input className="alumni-form__input" type="tel" name="intl_phone" placeholder="Phone" />
              </div>

              <div className="alumni-form__field">
                <label className="alumni-form__label">
                  Which Service Are You Interested In?<span className="alumni-form__required">*</span>
                </label>
                <select className="alumni-form__select" name="service" required>
                  <option value="">Which Service Are You Interested In?</option>
                  <option value="Writing">Writing</option>
                  <option value="Publishing">Publishing</option>
                  <option value="Coaching">Coaching</option>
                  <option value="Audiobook">Audiobook</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Podcast">Podcast</option>
                  <option value="Undecided">Undecided</option>
                </select>
              </div>

              <div className="alumni-form__field">
                <label className="alumni-form__label">
                  Please let us know how we can continue to serve and support you at Scribe.<span className="alumni-form__required">*</span>
                </label>
                <textarea
                  className="alumni-form__textarea"
                  name="message"
                  placeholder="Please let us know how we can continue to serve and support you at Scribe."
                  required
                />
              </div>

              <button type="submit" className="alumni-form__submit">Schedule Consult</button>
            </form>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
