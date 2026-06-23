import './success-stories.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import StoriesGrid from './StoriesGrid'
import storiesData from './stories.json'

export const metadata = {
  title: 'Author Success Stories | Scribe Media',
  description: 'Real authors. Real results. See how Scribe helped them write, publish, and leverage their books.',
}

export default function SuccessStoriesPage() {
  const stories = storiesData.stories
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <section className="ss-page">
          <div className="ss-page__header">
            <h1 className="ss-page__heading">Author Success Stories</h1>
            <p className="ss-page__subheading">
              Real authors. Real results. See how Scribe helped them write, publish, and leverage their books.
            </p>
          </div>
          <StoriesGrid stories={stories} />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
