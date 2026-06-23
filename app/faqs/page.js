import './faqs.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import FaqAccordion from './FaqAccordion'
import faqsData from './faqs.json'

export const metadata = {
  title: 'Frequently Asked Questions | Scribe Media',
  description: 'Everything you need to know about working with Scribe Media.',
}

export default function FaqsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <section className="faq-page">
          <div className="faq-page__header">
            <h1 className="faq-page__heading">Frequently Asked Questions</h1>
            <p className="faq-page__subheading">
              Everything you need to know about working with Scribe Media.
            </p>
          </div>
          <FaqAccordion categories={faqsData.categories} />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
