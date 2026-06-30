const books = [
  {
    href: '/published-books/cant-hurt-me',
    cover: '/assets/cant-hurt-me.webp',
    title: "Can't Hurt Me",
    author: 'David Goggins',
    rating: '4.8',
    count: '127,000+',
  },
  {
    href: '/published-books/the-almanack-of-naval-ravikant',
    cover: '/assets/the-almanack-of-navl-ravikant.png',
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
    rating: '4.7',
    count: '18,500+',
  },
  {
    href: '/published-books/never-finished',
    cover: '/assets/DavidGoggins_WebsiteCover.jpg',
    title: 'Never Finished',
    author: 'David Goggins',
    rating: '4.8',
    count: '16,200+',
  },
  {
    href: '/published-books/who-not-how',
    cover: '/assets/who-not-how.jpg',
    title: 'Who Not How',
    author: 'Dan Sullivan',
    rating: '4.6',
    count: '8,400+',
  },
  {
    href: '/published-books/never-lose-a-customer-again-joey-coleman',
    cover: '/assets/NLaCA.jpg',
    title: 'Never Lose a Customer Again',
    author: 'Joey Coleman',
    rating: '4.7',
    count: '3,200+',
  },
  {
    href: '/published-books/buy-then-build',
    cover: '/assets/Buy&build.png',
    title: 'Buy Then Build',
    author: 'Walker Deibel',
    rating: '4.6',
    count: '2,100+',
  },
  {
    href: '/published-books/niching-up',
    cover: '/assets/ChrisDreyer_WebsiteCover.jpg',
    title: 'Niching Up',
    author: 'Chris Dreyer',
    rating: '4.7',
    count: '1,800+',
  },
  {
    href: '/published-books/i-forgot-to-die',
    cover: '/assets/i-forgot-to-die.jpg',
    title: 'I Forgot to Die',
    author: 'Khalil Rafati',
    rating: '4.8',
    count: '2,000+',
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
          <div className="consult-cal__card">
            <div className="consult-cal__header">
              <span className="consult-cal__header-dot"></span>
              <span className="consult-cal__header-text">Select a Time Below</span>
            </div>
            <div className="consult-cal__iframe-wrap">
              <iframe
                src="https://meetings-na2.hubspot.com/jmeza/schedule-consult-round-robin?embed=true"
                title="Schedule a Consult"
                width="100%"
                style={{ minWidth: '312px', minHeight: '615px', height: '756px', border: 'none' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="consult-trust">
        <div className="consult-trust__row">
          <div className="consult-trust__item">
            <span className="consult-trust__icon">✓</span> No obligation
          </div>
          <div className="consult-trust__item">
            <span className="consult-trust__icon">✓</span> 2,000+ authors served
          </div>
          <div className="consult-trust__item">
            <span className="consult-trust__icon">✓</span> Clear answer on fit
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="consult-video">
        <div className="consult-video__inner">
          <h2 className="consult-video__heading">Why Every Business Owner Should Write a Book</h2>
          <p className="consult-video__sub">Hear directly from Scribe CEO Eric Jorgenson on how a book changes your business.</p>
          <div className="consult-video__embed">
            <iframe
              src="https://www.youtube.com/embed/v75hQgU4Y0g?rel=0"
              title="Why Every Business Owner Should Write a Book"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Books showcase */}
      <section className="consult-books">
        <div className="consult-books__inner">
          <div className="consult-books__header">
            <h2 className="consult-books__heading">Join 2,000+ Published Authors</h2>
            <p className="consult-books__sub">These authors trusted Scribe to bring their books to life. Sorted by most Amazon reviews.</p>
          </div>
          <div className="consult-books__grid">
            {books.map((book, i) => (
              <a key={i} className="consult-books__item" href={book.href}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="consult-books__cover" src={book.cover} alt={book.title} loading="lazy" />
                <div className="consult-books__title">{book.title}</div>
                <div className="consult-books__author">{book.author}</div>
                <div className="consult-books__rating">
                  <span className="consult-books__stars">★★★★★</span>
                  <span className="consult-books__count">{book.rating} ({book.count})</span>
                </div>
              </a>
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
