import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import storiesData from '../stories.json'
import '../cameron-herold-free-pr/cameron-herold.css'

function getStory(slug) {
  return storiesData.stories.find(s => s.href === `/success-stories/${slug}`)
}

export async function generateStaticParams() {
  return storiesData.stories.map(s => ({
    slug: s.href.replace('/success-stories/', ''),
  }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const story = getStory(slug)
  if (!story) return { title: 'Story Not Found' }
  return {
    title: `${story.title} | Scribe Media`,
    description: story.excerpt || `${story.author}'s success story with Scribe Media.`,
    openGraph: {
      title: story.title,
      description: story.excerpt,
      images: story.img ? [story.img] : [],
    },
  }
}

export default async function SuccessStoryPage({ params }) {
  const { slug } = await params
  const story = getStory(slug)
  if (!story) notFound()

  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="ss-detail">

          <div className="ss-detail__hero">
            {story.img && (
              <img
                src={story.img}
                alt={story.title}
                className="ss-detail__hero-img"
                loading="eager"
              />
            )}
            <h1 className="ss-detail__title">{story.title}</h1>
          </div>

          {(story.goals?.length > 0 || story.fears?.length > 0 || story.tags?.length > 0) && (
            <div className="ss-detail__meta">
              {story.goals?.map((g, i) => (
                <span key={i} className="ss-detail__tag ss-detail__tag--goal">{g}</span>
              ))}
              {story.fears?.map((f, i) => (
                <span key={i} className="ss-detail__tag ss-detail__tag--fear">{f}</span>
              ))}
            </div>
          )}


          <div className="ss-detail__content">
            {story.excerpt && <p>{story.excerpt}</p>}
          </div>

          <div className="ss-detail__cta-section">
            <h2 className="ss-detail__cta-title">Ready to Write Your Success Story?</h2>
            <p className="ss-detail__cta-text">
              Join 1,600+ authors who have published with Scribe Media and transformed their careers.
            </p>
            <Link href="/consult" className="ss-detail__cta-btn">
              Schedule a Consult
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
