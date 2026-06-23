import './contact.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact Scribe | Scribe Media',
  description: 'For general inquiries, please fill out the form below and our team will get back to you.',
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <section className="contact-page">
          <div className="contact-page__inner">
            <h1 className="contact-page__heading">Contact Scribe</h1>
            <p className="contact-page__subheading">For general inquiries, please fill out the form below and our team will get back to you.</p>

            <div className="contact-page__form-wrapper">
              <ContactForm />
              <p className="contact-page__privacy">
                By submitting, you agree to our <a href="/privacy">Privacy Policy</a> and <a href="/terms-of-service">Terms of Service</a>.
              </p>
            </div>

            <div className="contact-page__cta-section">
              <h2 className="contact-page__cta-heading">Ready to Get Started?</h2>
              <p className="contact-page__cta-text">Schedule a free consultation with our publishing strategists to discuss your book.</p>
              <a href="/consult" className="contact-page__cta-btn">Schedule a Consult</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
