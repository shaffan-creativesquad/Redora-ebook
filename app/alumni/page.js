import './alumni.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Schedule a Consult - Alumni Only | Readora',
  description: 'Welcome back, Readora Alumni. Schedule a time to speak with one of our Author Strategists.',
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
            <h2 className="alumni-welcome__heading">Welcome back, Readora Alumni!</h2>
            <blockquote className="alumni-welcome__blockquote">
              <img
                src="/assets/miles-rikki-1.png"
                alt="Two Readora team members smiling"
                width="80"
                height="54"
                loading="lazy"
              />
              <p>Schedule a time to speak with one of our Author Strategists.</p>
            </blockquote>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
