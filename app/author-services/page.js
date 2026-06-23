import './author-services.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Services for Published Authors | Scribe Media',
  description: 'Our team will review your author services submission and follow up with the next steps.',
  robots: 'noindex, nofollow',
}

export default function AuthorServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <section className="author-services-confirm">
          <div className="author-services-confirm__card">
            <p className="author-services-confirm__kicker">Submission Received</p>
            <h1>Thanks, your request is in.</h1>
            <p>
              Our team will review your author services submission and follow up with the next step.
              If you want to move faster, you can schedule a consult directly.
            </p>
            <div className="author-services-confirm__actions">
              <a
                className="author-services-confirm__btn author-services-confirm__btn--primary"
                href="/consult"
              >
                Schedule a Consult
              </a>
              <a className="author-services-confirm__btn" href="/services">
                View Services
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
