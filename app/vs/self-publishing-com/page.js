import './vs-self-publishing-com.css'
import Navbar from '@/components/Navbar'
import VsSelfPublishingCom from '@/components/VsSelfPublishingCom'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Scribe Media vs. SelfPublishing.com | Comparison',
  description: 'SelfPublishing.com (Chandler Bolt) was originally a course and coaching company, now repositioning as a publisher. See a full side-by-side comparison with Scribe Media.',
}

export default function VsSelfPublishingComPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <VsSelfPublishingCom />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
