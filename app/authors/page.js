import './authors.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import AuthorsGrid from './AuthorsGrid'
import allAuthors from './authors.json'

export const metadata = {
  title: 'Our Authors | Scribe Media',
  description: 'Meet the authors who trusted Scribe Media to bring their books to life. Over 1,500+ published authors across business, leadership, memoir, and more.',
}

const authors = allAuthors

export default function AuthorsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <section className="authors-page">
          <div className="authors-page__header">
            <h1 className="authors-page__heading">Our Authors</h1>
            <p className="authors-page__subheading">Meet the authors who trusted Scribe Media to bring their books to life. Over 1,500+ published authors across business, leadership, memoir, and more.</p>
          </div>
          <AuthorsGrid authors={authors} />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
