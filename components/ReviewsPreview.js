const reviews = [
  {
    text: "I can say with 100% honesty that it was great every step of the way. If it was just you and me, not on a podcast, and you said, 'Just tell me what we could have done better,' I'd say: I don't know. I can't think of anything.",
    author: 'Sarma Melngailis - The Girl With The Duck Tattoo',
  },
  {
    text: "As soon as I made the commitment to publish this book with Scribe and go through you guys and just see it through, as soon as that contract was signed, everything else opened up.",
    author: 'Adam Skolnick - American Tiger',
  },
  {
    text: "I wasn't a 'writer.' Scribe turned years of workshops into a clear book—and the book turned into credibility, revenue, and relationships I couldn't have reached any other way.",
    author: 'Rich Kurtzman - Like a Fish in Water',
  },
  {
    text: "Something that I can tell you now probably because of Scribe and how great an experience it was for me, I am crazily thinking about writing a second book… that is, if I can give a testament to Scribe, there's no way, if the process wasn't anything but great, that I would say I want to do this again.",
    author: 'John Schachnovsky - Beyond the Badge',
  },
]

export default function ReviewsPreview() {
  return (
    <div className="reviews-preview">
      <h2 className="font-playfair">What Authors Say</h2>
      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div key={i} className="review-card">
            <div className="review-stars">★★★★★</div>
            <p className="review-text">{r.text}</p>
            <div className="review-author">{r.author}</div>
          </div>
        ))}
      </div>
      <a href="/reviews" style={{ display: 'inline-block', color: '#e02d2d', fontWeight: 600, fontSize: '16px', textDecoration: 'none', marginTop: '28px' }}>
        Read All Reviews →
      </a>
    </div>
  )
}
