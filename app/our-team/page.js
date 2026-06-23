import './our-team.css'
import Navbar from '@/components/Navbar'
import OurTeam from '@/components/OurTeam'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Meet Our Team | Scribe Media',
  description: 'Meet the Scribe Media team. True domain experts from the world of traditional publishing and operations professionals from hard-driving industries.',
}

export default function OurTeamPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px', background: '#0d0d0d' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <OurTeam />
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
