'use client'
import Image from 'next/image'

const books = [
  { src: '/assets/cant-hurt-me.webp', title: "Can't Hurt Me", rating: '4.8', count: '(105.1k)' },
  { src: '/assets/the-almanack-of-navl-ravikant.png', title: 'The Almanack of Naval Ravikant', rating: '4.7', count: '(22.6k)' },
  { src: '/assets/DavidGoggins_WebsiteCover.jpg', title: 'Never Finished', rating: '4.8', count: '(14.0k)' },
  { src: '/assets/who-not-how-cover-large.jpg', title: 'Who Not How', rating: '4.7', count: '(3.7k)' },
  { src: '/assets/Buy&build.png', title: 'Buy Then Build', rating: '4.7', count: '(2.2k)' },
  { src: '/assets/i-forgot-to-die.jpg', title: 'I Forgot to Die', rating: '4.7', count: '(1.6k)' },
  { src: '/assets/vivid-vision.jpg', title: 'Vivid Vision', rating: '4.5', count: '(1.2k)' },
  { src: '/assets/give.jpg', title: 'Give', rating: '4.5', count: '(660)' },
  { src: '/assets/meetings-suck.jpg', title: 'Meetings Suck', rating: '4.2', count: '(439)' },
  { src: '/assets/ShaanPatel_EbookCover_Final.webp', title: 'Prep Expert Digital SAT Playbook', rating: '4.5', count: '(229)' },
  { src: '/assets/the-book-in-a-box-method.jpg', title: 'The Book in a Box Method', rating: '4.2', count: '(227)' },
  { src: '/assets/41YXhRHxNqL._SL500_.jpg', title: 'The Scribe Method', rating: '4.6', count: '(198)' },
  { src: '/assets/free-PR.jpg', title: 'Free PR', rating: '4.7', count: '(208)' },
  { src: '/assets/Sparrow-in-the-Razor-Wire.jpg', title: 'Sparrow in the Razor Wire', rating: '4.8', count: '(195)' },
  { src: '/assets/Stress-Free-Money-2.jpeg', title: 'Stress-Free Money', rating: '4.7', count: '(171)' },
  { src: '/assets/idea-to-execution.jpg', title: 'Idea to Execution', rating: '4.0', count: '(160)' },
  { src: '/assets/branding-is-sex.jpg', title: 'Branding is Sex', rating: '4.5', count: '(130)' },
  { src: '/assets/the-art-of-alighment.jpg', title: 'The Art of Alignment', rating: '4.6', count: '(124)' },
  { src: '/assets/61DQ2qIRLzL._SL1360_.jpg', title: 'The Girl with the Duck Tattoo', rating: '4.3', count: '(97)' },
  { src: '/assets/the-book-of-elon.jpg', title: 'The Book of Elon', rating: '5.0', count: '(47)' },
]

export default function BooksProofRail() {
  return (
    <div className="ws-proof">
      <p className="ws-proof__heading">Books We Helped Bring to Market</p>
      <div className="ws-proof__rail">
        {books.map((book, i) => (
          <a key={i} href="#" className="ws-proof__item">
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
