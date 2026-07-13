import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServiceSection from '@/components/ServiceSection'
import CompareServices from '@/components/CompareServices'
import PublishingImprints from '@/components/PublishingImprints'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import booksData from './published-books/books.json'
import newReleases from './new-releases/books.json'
import storiesData from './stories.json'
import HomeBooksScroll from '@/components/HomeBooksScroll'
import HomeStoriesScroll from '@/components/HomeStoriesScroll'
import './published-books/published-books.css'

const services = [
  {
    category: 'Book Publishing',
    heading: 'Go from finished manuscript to bookstore shelf — with your name on the cover.',
    text: "Marcus Hale spent twenty years building his firm before deciding the world needed to hear what he'd learned. Readora handled everything — editing, design, distribution, and launch strategy. Six months later his book was on national bestseller lists and his phone hadn't stopped ringing.",
    tags: [
      { label: 'READORA PUBLISHING', href: '/services/publishing' },
      { label: 'READORA AUDIOBOOK', href: '/services/audiobook' },
    ],
    learnMoreText: 'Explore Publishing Services',
    learnMoreHref: '/services',
    authorImage: '/assets/Goggins_Homepage-rev.webp',
    bookImage: '/assets/Goggins_Book.webp',
    imageRight: true,
  },
  {
    category: 'Book Writing',
    heading: 'Share everything you know — in your own voice, without writing a single word.',
    text: 'Dr. Serena Park had decades of medical expertise and zero time to sit at a keyboard. Readora paired her with a dedicated writer who captured her voice through recorded conversations. The finished book positioned her as the definitive authority in her field — and she never wrote a word.',
    tags: [
      { label: 'READORA PROFESSIONAL', href: '/services/professional-book-writers' },
      { label: 'READORA ELITE', href: '/pricing/elite' },
    ],
    learnMoreText: 'Explore Writing Services',
    learnMoreHref: '/services',
    authorImage: '/assets/Robin.webp',
    bookImage: '/assets/Robin_Book.webp',
    imageRight: false,
  },
  {
    category: 'Book Coaching',
    heading: 'Write your book yourself — with an expert strategist guiding every chapter.',
    text: "Daniel Cruz had a powerful story and the drive to write it himself. What he lacked was a clear structure and a publishing roadmap. Readora's coaching program gave him both — and six months later he had a Wall Street Journal bestseller and a six-figure speaking deal to go with it.",
    tags: [{ label: 'READORA GUIDED AUTHOR', href: '/services/guided-author' }],
    learnMoreText: 'Explore Book Coaching',
    learnMoreHref: '/services/guided-author',
    authorImage: '/assets/Joey.webp',
    bookImage: '/assets/Joey_Book.webp',
    imageRight: true,
  },
  {
    category: 'Book Marketing',
    heading: 'Launch your book like a product — and watch it grow your business.',
    text: "Priya Nair knew her book was good. What she needed was a launch strategy built to turn readers into clients. Readora's marketing team crafted a full launch campaign that generated six figures in new business within the first 90 days — and kept her booked solid for the year that followed.",
    tags: [],
    learnMoreText: 'Explore Marketing Services',
    learnMoreHref: '/services/book-marketing',
    authorImage: '/assets/Will.webp',
    bookImage: '/assets/Will_Book.webp',
    imageRight: false,
  },
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="has-nav-offset">
        <Hero />
        {services.map((service, i) => (
          <ServiceSection key={i} {...service} />
        ))}
        <CompareServices />
        <PublishingImprints />
        <section id="published-books" className="books-listing">
          <div className="books-listing__header">
            <h2 className="books-listing__heading">Books We&apos;ve Published</h2>
            <p className="books-listing__subheading">
              From debut authors to seasoned executives — every book in our catalogue is a story that deserved to exist. Including 18 national bestsellers.
            </p>
          </div>
          <HomeBooksScroll books={booksData.books} />
        </section>
        <section id="new-releases" className="books-listing">
          <div className="books-listing__header">
            <h2 className="books-listing__heading">New Releases</h2>
            <p className="books-listing__subheading">
              Fresh off the press — books published by Readora authors in the last 90 days.
            </p>
          </div>
          <HomeBooksScroll books={newReleases} />
        </section>
        <section id="success-stories" className="books-listing">
          <div className="books-listing__header">
            <h2 className="books-listing__heading">Author Success Stories</h2>
            <p className="books-listing__subheading">
              Every author had a goal. Here&apos;s what happened when they partnered with Readora to reach it.
            </p>
          </div>
          <HomeStoriesScroll stories={storiesData.stories.slice(0, 20)} />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
