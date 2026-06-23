import './episode-directory.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import data from './episode-directory.json'

export const metadata = {
  title: 'Episode Directory | Author Hour',
  description: 'Complete A-Z directory of all Author Hour podcast episodes. Browse 1,400+ episodes.',
}

export default function EpisodeDirectoryPage() {
  const { total, letters, groups } = data

  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>

        <div className="dir-banner">
          <div className="dir-banner__inner">
            <p className="dir-banner__text">
              Looking to browse and search our episodes? Head to our main Author Hour page.
            </p>
            <a href="/author-hour" className="dir-banner__btn">Browse Our Episodes</a>
          </div>
        </div>

        <div className="dir-page-wrap">
          <div className="dir-page">
            <h1 className="dir-page__title">Author Hour Episode Directory</h1>
            <p className="dir-page__subtitle">
              A complete A-Z index of all Author Hour podcast episodes.
            </p>
            <p className="dir-page__count">
              {total.toLocaleString()} episodes listed alphabetically by title
            </p>

            {/* Letter jump nav */}
            <nav className="dir-letters" aria-label="Jump to letter">
              {letters.map(letter => (
                <a
                  key={letter}
                  href={`#letter-${letter === '#' ? 'num' : letter}`}
                  className="dir-letters__btn"
                  aria-label={`Jump to ${letter}`}
                >
                  {letter}
                </a>
              ))}
            </nav>

            {/* Letter groups */}
            {letters.map(letter => (
              <div key={letter} className="dir-group" id={`letter-${letter === '#' ? 'num' : letter}`}>
                <h2 className="dir-group__letter">{letter}</h2>
                <ul className="dir-episodes__list">
                  {groups[letter].map((episode, i) => (
                    <li key={i} className="dir-episodes__item">
                      <a className="dir-episodes__link" href={episode.href}>
                        {episode.title}
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
