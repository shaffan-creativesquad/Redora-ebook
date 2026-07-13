import './why-scribe.css'
import Navbar from '@/components/Navbar'
import WhyScribeHero from '@/components/WhyScribeHero'
import BooksProofRail from '@/components/BooksProofRail'
import CaseStudies from '@/components/CaseStudies'
import ReviewsPreview from '@/components/ReviewsPreview'
import ServiceCategories from '@/components/ServiceCategories'
import WhyScribeCTA from '@/components/WhyScribeCTA'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Why Readora | World's #1 Professional Publishing Company",
  description: "We've published over 3,000 books for more than 2,000 authors, including 23 NYT and WSJ Bestsellers.",
}

export default function WhyScribePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          padding: '0 20px',
        }}>
          <WhyScribeHero />
          <BooksProofRail />
          <CaseStudies />
          <ReviewsPreview />
          <ServiceCategories />
          <WhyScribeCTA />
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
