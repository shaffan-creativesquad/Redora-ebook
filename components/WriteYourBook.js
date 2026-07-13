import BookingCalendar from './BookingCalendar'

const books = [
  {
    href: '/published-books',
    cover: '/assets/Book Covers/01.jpg',
    title: 'Lead with Purpose',
    author: 'Readora Author',
    rating: '4.8',
    count: '2,100+',
  },
  {
    href: '/published-books',
    cover: '/assets/Book Covers/002.png',
    title: 'Rise Beyond Limits',
    author: 'Readora Author',
    rating: '4.7',
    count: '1,800+',
  },
  {
    href: '/published-books',
    cover: '/assets/Book Covers/003.jpg',
    title: 'The Growth Path',
    author: 'Readora Author',
    rating: '4.8',
    count: '1,600+',
  },
  {
    href: '/published-books',
    cover: '/assets/Book Covers/004.png',
    title: 'Unbreakable Within',
    author: 'Readora Author',
    rating: '4.7',
    count: '1,300+',
  },
  {
    href: '/published-books',
    cover: '/assets/Book Covers/005.jpg',
    title: 'Clarity First',
    author: 'Readora Author',
    rating: '4.6',
    count: '1,100+',
  },
  {
    href: '/published-books',
    cover: '/assets/Book Covers/006.png',
    title: 'Built for the Storm',
    author: 'Readora Author',
    rating: '4.7',
    count: '870+',
  },
  {
    href: '/published-books',
    cover: '/assets/Book Covers/007.jpg',
    title: 'The Inner Edge',
    author: 'Readora Author',
    rating: '4.7',
    count: '760+',
  },
  {
    href: '/published-books',
    cover: '/assets/Book Covers/008.png',
    title: 'The Power of Relentless',
    author: 'Readora Author',
    rating: '4.7',
    count: '650+',
  },
]

export default function WriteYourBook() {
  return (
    <>
      {/* Hero */}
      <section className="consult-hero">
        <div className="consult-hero__inner">
          <div className="consult-hero__badge">Free 15-Minute Strategy Call</div>
          <h1 className="consult-hero__title">Plan the Right Path for Your Book</h1>
          <p className="consult-hero__subtitle">A focused conversation about your book idea, the best publishing path for your goals, and a clear next step.</p>
        </div>
      </section>

      {/* Calendar */}
      <section className="consult-cal" id="consult-main-hero">
        <div className="consult-cal__outer">
          <BookingCalendar />
        </div>
      </section>

      {/* Trust bar */}
      <section className="consult-trust">
        <div className="consult-trust__row">
          <div className="consult-trust__item">
            <span className="consult-trust__icon">✓</span> No obligation
          </div>
          <div className="consult-trust__item">
            <span className="consult-trust__icon">✓</span> 500+ authors served
          </div>
          <div className="consult-trust__item">
            <span className="consult-trust__icon">✓</span> Clear answer on fit
          </div>
        </div>
      </section>


      {/* Books showcase */}
      <section className="consult-books">
        <div className="consult-books__inner">
          <div className="consult-books__header">
            <h2 className="consult-books__heading">Join 500+ Published Authors</h2>
            <p className="consult-books__sub">These authors trusted Readora to bring their books to life. Sorted by most Amazon reviews.</p>
          </div>
          <div className="consult-books__grid">
            {books.map((book, i) => (
              <div key={i} className="consult-books__item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="consult-books__cover" src={book.cover} alt={book.title} loading="lazy" />
                <div className="consult-books__title">{book.title}</div>
                <div className="consult-books__author">{book.author}</div>
                <div className="consult-books__rating">
                  <span className="consult-books__stars">★★★★★</span>
                  <span className="consult-books__count">{book.rating} ({book.count})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="consult-bottom">
        <div>
          <h2 className="consult-bottom__heading">Your Book Starts with a Conversation</h2>
          <p className="consult-bottom__sub">15 minutes. No obligation. Pick a time above and we will handle the rest.</p>
          <a href="#consult-main-hero" className="consult-bottom__btn">Pick Your Time</a>
        </div>
      </section>
    </>
  )
}
