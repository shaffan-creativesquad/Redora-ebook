'use client'
import Image from 'next/image'

const books = [
  { src: '/assets/cant-hurt-me.webp',                   title: "Can't Hurt Me",                    rating: '4.8', count: '(105.1k)', href: '/published-books/cant-hurt-me' },
  { src: '/assets/the-almanack-of-navl-ravikant.png',   title: 'The Almanack of Naval Ravikant',   rating: '4.7', count: '(22.6k)',  href: '/published-books/the-almanack-of-naval-ravikant' },
  { src: '/assets/DavidGoggins_WebsiteCover.jpg',       title: 'Never Finished',                   rating: '4.8', count: '(14.0k)', href: '/published-books/never-finished' },
  { src: '/assets/who-not-how-cover-large.jpg',         title: 'Who Not How',                      rating: '4.7', count: '(3.7k)',  href: '/published-books/who-not-how' },
  { src: '/assets/Buy&build.png',                       title: 'Buy Then Build',                   rating: '4.7', count: '(2.2k)',  href: '/published-books/buy-then-build' },
  { src: '/assets/i-forgot-to-die.jpg',                 title: 'I Forgot to Die',                  rating: '4.7', count: '(1.6k)', href: '/published-books/i-forgot-to-die' },
  { src: '/assets/vivid-vision.jpg',                    title: 'Vivid Vision',                     rating: '4.5', count: '(1.2k)', href: '/published-books/vivid-vision' },
  { src: '/assets/give.jpg',                            title: 'Give',                             rating: '4.5', count: '(660)',   href: '/published-books/give' },
  { src: '/assets/meetings-suck.jpg',                   title: 'Meetings Suck',                    rating: '4.2', count: '(439)',   href: '/published-books/meetings-suck' },
  { src: '/assets/ShaanPatel_EbookCover_Final.webp',    title: 'Prep Expert Digital SAT Playbook', rating: '4.5', count: '(229)',   href: '/published-books/prep-expert-digital-sat-playbook' },
  { src: '/assets/the-book-in-a-box-method.jpg',        title: 'The Book in a Box Method',         rating: '4.2', count: '(227)',   href: '/published-books/the-book-in-a-box-method' },
  { src: '/assets/41YXhRHxNqL._SL500_.jpg',             title: 'The Scribe Method',                rating: '4.6', count: '(198)',   href: '/scribe-method-book' },
  { src: '/assets/free-PR.jpg',                         title: 'Free PR',                          rating: '4.7', count: '(208)',   href: '/published-books/free-pr' },
  { src: '/assets/Sparrow-in-the-Razor-Wire.jpg',       title: 'Sparrow in the Razor Wire',        rating: '4.8', count: '(195)',   href: '/published-books/sparrow-in-the-razor-wire' },
  { src: '/assets/Stress-Free-Money-2.jpeg',            title: 'Stress-Free Money',                rating: '4.7', count: '(171)',   href: '/published-books/stress-free-money' },
  { src: '/assets/idea-to-execution.jpg',               title: 'Idea to Execution',                rating: '4.0', count: '(160)',   href: '/published-books/idea-to-execution' },
  { src: '/assets/branding-is-sex.jpg',                 title: 'Branding is Sex',                  rating: '4.5', count: '(130)',   href: '/published-books/branding-is-sex' },
  { src: '/assets/the-art-of-alighment.jpg',            title: 'The Art of Alignment',             rating: '4.6', count: '(124)',   href: '/published-books/the-art-of-alignment' },
  { src: '/assets/61DQ2qIRLzL._SL1360_.jpg',            title: 'The Girl with the Duck Tattoo',    rating: '4.3', count: '(97)',    href: '/published-books/the-girl-with-the-duck-tattoo' },
  { src: '/assets/the-book-of-elon.jpg',                title: 'The Book of Elon',                 rating: '5.0', count: '(47)',    href: '/published-books/the-book-of-elon' },
]

export default function BooksProofRail() {
  return (
    <div className="ws-proof">
      <p className="ws-proof__heading">Books We Helped Bring to Market</p>
      <div className="ws-proof__rail">
        {books.map((book, i) => (
          <a key={i} href={book.href} className="ws-proof__item">
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
          </a>
        ))}
      </div>
      <a href="/published-books" className="ws-proof__link">Browse All Published Books →</a>
    </div>
  )
}
