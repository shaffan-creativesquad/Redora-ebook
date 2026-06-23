import './book-directory.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import data from './book-directory.json'

export const metadata = {
  title: 'Published Books Directory | Scribe Media',
  description: 'A complete A-Z index of all 1,700+ books published by Scribe Media authors.',
}

export default function BookDirectoryPage() {
  const { total, letters, groups } = data

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>

        <div className="dir-banner">
          <div className="dir-banner__inner">
            <p className="dir-banner__text">
              Looking to browse, search, and filter our books? Head to our main collection page.
            </p>
            <a href="/published-books" className="dir-banner__btn">Browse Published Books</a>
          </div>
        </div>

        <div className="dir-page-wrap">
          <div className="dir-page">
            <h1 className="dir-page__title">Published Books Directory</h1>
            <p className="dir-page__subtitle">
              A complete A-Z index of all books published by Scribe Media authors.
            </p>
            <p className="dir-page__count">{total.toLocaleString()} books listed alphabetically</p>

            {/* Letter jump nav */}
            <nav className="dir-letters" aria-label="Jump to letter">
              {letters.map(letter => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="dir-letters__btn"
                  aria-label={`Jump to ${letter}`}
                >
                  {letter}
                </a>
              ))}
            </nav>

            {/* Letter groups */}
            {letters.map(letter => (
              <div key={letter} className="dir-group" id={`letter-${letter}`}>
                <h2 className="dir-group__letter">{letter}</h2>
                <ul className="dir-group__list">
                  {groups[letter].map((book, i) => (
                    <li key={i} className="dir-group__item">
                      <a className="dir-group__link" href={book.href}>
                        {book.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
