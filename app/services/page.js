import './services.css'
import Navbar from '@/components/Navbar'
import CompareAllServices from '@/components/CompareAllServices'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Our Services | Readora',
  description: 'Compare all Readora services. Professional ghostwriting, guided authoring, publishing, and more.',
}

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <CompareAllServices />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
