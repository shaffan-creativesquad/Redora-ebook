import './kevin-anderson-associates.css'
import Navbar from '@/components/Navbar'
import VsKevinAndersonAssociates from '@/components/VsKevinAndersonAssociates'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Kevin Anderson & Associates vs. Scribe Media | Comparison',
  description: 'Kevin Anderson & Associates offers ghostwriting only. Scribe is a full publishing and brand partner — writing, editing, design, audiobook, distribution, and launch. See the comparison.',
}

export default function VsKevinAndersonAssociatesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <VsKevinAndersonAssociates />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
