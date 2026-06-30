import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ServiceSection from '@/components/ServiceSection'
import CompareServices from '@/components/CompareServices'
import PublishingImprints from '@/components/PublishingImprints'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import BooksGrid from './published-books/BooksGrid'
import booksData from './published-books/books.json'
import './published-books/published-books.css'

const services = [
  {
    category: 'Book Publishing',
    heading: 'Turn your manuscript into a professionally published book.',
    text: "David Goggins wanted to keep full ownership of his life story—turning down a traditional publishing deal. Goggins chose Scribe to publish his book, and Can't Hurt Me became one of the bestselling memoirs of all time.",
    tags: [
      { label: 'SCRIBE PUBLISHING', href: '/services/publishing' },
      { label: 'SCRIBE AUDIOBOOK', href: '/services/audiobook' },
    ],
    learnMoreText: 'Learn More about Publishing Services',
    learnMoreHref: '/services',
    authorImage: '/assets/Goggins_Homepage-rev.webp',
    bookImage: '/assets/Goggins_Book.webp',
    imageRight: true,
  },
  {
    category: 'Book Writing',
    heading: 'Your book, in your words and your voice. All without typing.',
    text: 'Robin Farmanfarmaian is an entrepreneur in the medical industry and wrote two books with Scribe to become "Robin Inc" and broke through the glass ceiling.',
    tags: [
      { label: 'SCRIBE PROFESSIONAL', href: '/services/professional-book-writers' },
      { label: 'SCRIBE ELITE', href: '/pricing/elite' },
    ],
    learnMoreText: 'Learn More about Writing Services',
    learnMoreHref: '/services',
    authorImage: '/assets/Robin.webp',
    bookImage: '/assets/Robin_Book.webp',
    imageRight: false,
  },
  {
    category: 'Book Coaching',
    heading: 'Get expert guidance to help you write, publish, and market your book.',
    text: 'Joey Coleman used Scribe to land a six-figure publishing deal and became a Wall Street Journal bestselling author.',
    tags: [{ label: 'SCRIBE GUIDED AUTHOR', href: '/services/guided-author' }],
    learnMoreText: 'Learn More about Book Coaching',
    learnMoreHref: '/services/guided-author',
    authorImage: '/assets/Joey.webp',
    bookImage: '/assets/Joey_Book.webp',
    imageRight: true,
  },
  {
    category: 'Book Marketing',
    heading: 'Leverage your book to build your business and a community of raving fans.',
    text: 'Will Leach, Founder and CEO of TriggerPoint Design, used our Book Launch service to generate over six figures in six months and pushed his marketing to a new level.',
    tags: [],
    learnMoreText: 'Learn More about Marketing Services',
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
            <h2 className="books-listing__heading">Published Books</h2>
            <p className="books-listing__subheading">
              We&apos;ve published over 3,000 books for authors in just 10 years, including 23 New York Times and Wall Street Journal bestsellers:
            </p>
          </div>
          <BooksGrid
            books={booksData.books}
            genres={booksData.genres}
            industries={booksData.industries}
            imprints={booksData.imprints}
          />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
