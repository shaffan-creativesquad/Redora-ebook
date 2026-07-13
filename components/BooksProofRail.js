'use client'
import Image from 'next/image'

const books = [
  { src: '/assets/Book Covers/21.png',   title: 'Winning Every Day',       rating: '4.8', count: '(2.1k)',  href: '/published-books' },
  { src: '/assets/Book Covers/002.png',  title: 'Rise Beyond Limits',      rating: '4.7', count: '(1.8k)',  href: '/published-books' },
  { src: '/assets/Book Covers/22.png',   title: 'Fear Ends Here',          rating: '4.8', count: '(1.5k)',  href: '/published-books' },
  { src: '/assets/Book Covers/004.png',  title: 'Unbreakable Within',      rating: '4.7', count: '(1.3k)',  href: '/published-books' },
  { src: '/assets/Book Covers/27.png',   title: 'Beneath Crystal Seas',    rating: '4.6', count: '(980)',   href: '/published-books' },
  { src: '/assets/Book Covers/006.png',  title: 'Built for the Storm',     rating: '4.7', count: '(870)',   href: '/published-books' },
  { src: '/assets/Book Covers/28.png',   title: 'Whispers in the Pines',   rating: '4.8', count: '(760)',   href: '/published-books' },
  { src: '/assets/Book Covers/008.png',  title: 'The Power of Relentless', rating: '4.7', count: '(650)',   href: '/published-books' },
  { src: '/assets/Book Covers/29.png',   title: 'The Forgotten Compass',   rating: '4.6', count: '(540)',   href: '/published-books' },
  { src: '/assets/Book Covers/010.png',  title: 'Fear Ends Here',          rating: '4.7', count: '(490)',   href: '/published-books' },
  { src: '/assets/Book Covers/011.png',  title: 'The Dog in the Rake',     rating: '4.5', count: '(430)',   href: '/published-books' },
  { src: '/assets/Book Covers/012.png',  title: 'When Our Days Dark',      rating: '4.6', count: '(390)',   href: '/published-books' },
  { src: '/assets/Book Covers/013.png',  title: 'Chase the Impossible',    rating: '4.7', count: '(350)',   href: '/published-books' },
  { src: '/assets/Book Covers/014.png',  title: 'The Missing Method',      rating: '4.5', count: '(310)',   href: '/published-books' },
  { src: '/assets/Book Covers/015.png',  title: 'Anchored in Well',        rating: '4.6', count: '(280)',   href: '/published-books' },
  { src: '/assets/Book Covers/016.png',  title: 'Mind Over Every Battle',  rating: '4.7', count: '(250)',   href: '/published-books' },
  { src: '/assets/Book Covers/017.png',  title: 'No Excuses Left',         rating: '4.6', count: '(220)',   href: '/published-books' },
  { src: '/assets/Book Covers/018.png',  title: 'Beyond the Horizon',      rating: '4.5', count: '(195)',   href: '/published-books' },
  { src: '/assets/Book Covers/019.png',  title: 'The Winning Mindset',     rating: '4.7', count: '(170)',   href: '/published-books' },
  { src: '/assets/Book Covers/20.png',   title: 'The Discipline Code',     rating: '4.6', count: '(148)',   href: '/published-books' },
]

export default function BooksProofRail() {
  return (
    <div className="ws-proof">
      <p className="ws-proof__heading">Books We Helped Bring to Market</p>
      <div className="ws-proof__rail">
        {books.map((book, i) => (
          <div key={i} className="ws-proof__item">
            <div className="ws-proof__cover">
              <Image
                src={book.src} alt={book.title}
                fill style={{ objectFit: 'contain', objectPosition: 'center' }}
                unoptimized loading="lazy"
              />
            </div>
            <div className="ws-proof__title">{book.title}</div>
            <div className="ws-proof__rating">
              <span className="ws-proof__rating-star">★</span>
              <span>{book.rating}</span>
              <span className="ws-proof__rating-count">{book.count}</span>
            </div>
          </div>
        ))}
      </div>
      <a href="/#published-books" className="ws-proof__link">Browse All Published Books →</a>
    </div>
  )
}
