import './author-hour.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import EpisodeList from './EpisodeList'
import episodes from './episodes.json'

export const metadata = {
  title: 'Author Hour Podcast | Scribe Media',
  description: 'The best ideas and stories from new nonfiction books, through in-depth conversations with the authors who wrote them.',
}

export default function AuthorHourPage() {
  const validEpisodes = episodes.filter(ep => ep.name)

  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ah">
          {/* Hero */}
          <div className="ah__hero">
            <h1 className="ah__logo">Author Hour</h1>
            <p className="ah__tagline">A Scribe Media Podcast</p>
            <p className="ah__desc">The best ideas and stories from new nonfiction books, through in-depth conversations with the authors who wrote them.</p>

            <div className="ah__host-card">
              <img
                className="ah__host-img"
                src="/assets/EricJorgenson.jpg"
                alt="Eric Jorgenson"
              />
              <div className="ah__host-info">
                <p className="ah__host-name">Eric Jorgenson</p>
                <p className="ah__host-role">Host · Author in Residence at Scribe Media</p>
              </div>
            </div>

            <div className="ah__platforms">
              <a href="https://open.spotify.com/show/3eKrcC84M1Tf7gD303NeDQ" target="_blank" rel="noopener noreferrer" className="ah__plat ah__plat--sp">
                <i className="ph ph-spotify-logo"></i> Spotify
              </a>
              <a href="https://podcasts.apple.com/in/podcast/author-hour/id1851573431" target="_blank" rel="noopener noreferrer" className="ah__plat ah__plat--ap">
                <i className="ph ph-apple-logo"></i> Apple Podcasts
              </a>
              <a href="https://www.youtube.com/@ScribeMediaco" target="_blank" rel="noopener noreferrer" className="ah__plat ah__plat--yt">
                <i className="ph ph-youtube-logo"></i> YouTube
              </a>
            </div>
          </div>

          <div className="ah__rule"></div>

          {/* Episodes */}
          <div className="ah__eps">
            <div className="ah__eps-head">
              <h2 className="ah__eps-title">Episodes</h2>
              <span className="ah__eps-count">{validEpisodes.length} episodes</span>
            </div>
            <EpisodeList episodes={validEpisodes} />
          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
