import './author-directory.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import data from './author-directory.json'

export const metadata = {
  title: 'Author Directory | Scribe Media',
  description: 'Complete A-Z directory of all Scribe Media authors. Browse 1,400+ published authors.',
}

export default function AuthorDirectoryPage() {
  const { total, letters, groups } = data

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>

        <div className="dir-banner">
          <div className="dir-banner__inner">
            <p className="dir-banner__text">
              Looking to browse and search our authors? Head to our main authors page.
            </p>
            <a href="/authors" className="dir-banner__btn">Browse Our Authors</a>
          </div>
        </div>

        <div className="dir-page-wrap">
          <div className="dir-page">
            <h1 className="dir-page__title">Author Directory</h1>
            <p className="dir-page__subtitle">
              A complete A-Z index of all Scribe Media authors.
            </p>
            <p className="dir-page__count">
              {total.toLocaleString()} authors listed alphabetically by last name
            </p>

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
                  {groups[letter].map((author, i) => (
                    <li key={i} className="dir-group__item">
                      <a className="dir-group__link" href={author.href}>
                        {author.name}
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
