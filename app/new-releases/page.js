import './new-releases.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import books from './books.json'

export const metadata = {
  title: 'New Releases | Published Books | Scribe Media',
  description: 'Books published by Scribe authors in the last 90 days.',
}

function BookCard({ b }) {
  return (
    <div className="bl-card">
      <div className="bl-card__cover-wrap book-shadow">
        <img src={b.img} alt={b.title} loading="lazy" decoding="async" />
      </div>
      {b.launchDate && <p className="bl-card__launch-date">{b.launchDate}</p>}
      <h4 className="bl-card__title">{b.title}</h4>
      {b.author && <p className="bl-card__author">{b.author}</p>}
      {b.rating && (
        <div className="bl-card__rating">
          <span className="bl-card__rating-star">★</span>
          <span> {b.rating}</span>
          {b.reviewCount && <span className="bl-card__rating-count"> ({b.reviewCount})</span>}
        </div>
      )}
    </div>
  )
}

export default function NewReleasesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="new-releases-page" style={{ paddingTop: '84px' }}>
        <section className="new-releases" aria-label="New releases">
          <p className="new-releases__breadcrumb">
            <a href="/#published-books">Published Books</a>
            <span className="new-releases__breadcrumb-sep">/</span>
            New Releases
          </p>

          <h1 className="new-releases__heading">New Releases</h1>
          <p className="new-releases__subheading">
            Books published by Scribe authors in the last 90 days. Updated automatically.
          </p>


          <div className="new-releases__grid">
            {books.length === 0
              ? (
                <div className="new-releases__empty">
                  No new releases right now — check back soon, or browse our
                  <a href="/#published-books">full catalog</a>.
                </div>
              )
              : books.map((b, i) => <BookCard key={i} b={b} />)
            }
          </div>

          <div className="new-releases__footer">
            <a href="/#published-books">← Browse all published books</a>
          </div>
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
