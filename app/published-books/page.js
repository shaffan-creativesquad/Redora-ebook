import './published-books.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import BooksGrid from './BooksGrid'
import data from './books.json'

export const metadata = {
  title: 'Published Books | Scribe Media',
  description: "We've published over 3,000 books for authors in just 10 years, including 23 New York Times and Wall Street Journal bestsellers.",
}

export default function PublishedBooksPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <section className="books-listing">
          <div className="books-listing__header">
            <h1 className="books-listing__heading">Published Books</h1>
            <p className="books-listing__subheading">
              We&apos;ve published over 3,000 books for authors in just 10 years, including 23 New York Times and Wall Street Journal bestsellers:
            </p>
          </div>
          <BooksGrid
            books={data.books}
            genres={data.genres}
            industries={data.industries}
            imprints={data.imprints}
          />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
