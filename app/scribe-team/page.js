import './scribe-team.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TeamGrid from '@/components/TeamGrid'

export const metadata = {
  title: 'The Scribe Team | Scribe Media',
  description: 'Meet the Scribe Media team — true domain experts from traditional publishing and operations professionals from hard-driving industries.',
}

export default function ScribeTeamPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <section className="team-page">

          <div className="team-page__header">
            <h1 className="team-page__heading">The Scribe Team</h1>
            <p className="team-page__subheading">The team at Scribe is comprised of the best of two worlds -- true domain experts from the world of traditional publishing, and operations professionals from a variety of hard-driving industries and roles.</p>
          </div>

          <TeamGrid />

          <div className="team-page__cta">
            <h2 className="team-page__cta-heading">Ready to Start Your Book?</h2>
            <p className="team-page__cta-text">Schedule a consult with Scribe to map the right writing and publishing path for your goals.</p>
            <a href="/consult" className="team-page__cta-btn">Schedule a Consult</a>
          </div>

        </section>
      </main>
      <Footer />
    </>
  )
}
