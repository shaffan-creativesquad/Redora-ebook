const reviews = [
  {
    name: 'Sarma Melngailis',
    credential: 'Former Owner, Pure Food and Wine',
    img: 'https://scribemedia.com/hubfs/images/testimonials/sarma-700x406-1.jpg',
    quote: '"I can say with 100% honesty that it was great every step of the way. If it was just you and me, not on a podcast, and you said, \'Just tell me what we could have done better,\' I\'d say: I don\'t know. I can\'t think of anything."',
  },
  {
    name: 'Adam Skolnick',
    credential: "Co-Author of Can't Hurt Me, NYT Contributor",
    img: 'https://scribemedia.com/hubfs/images/testimonials/AdamSkolnick_Headshot.jpg',
    quote: '"As soon as I made the commitment to publish this book with Scribe and go through you guys and just see it through, as soon as that contract was signed, everything else opened up."',
  },
  {
    name: 'Rich Kurtzman',
    credential: 'Founder & CEO, Barcelona SAE',
    img: 'https://scribemedia.com/hubfs/images/testimonials/RichKurtzman_Headshot.jpg',
    quote: '"I wasn\'t a \'writer.\' Scribe turned years of workshops into a clear book—and the book turned into credibility, revenue, and relationships I couldn\'t have reached any other way."',
  },
  {
    name: 'John Schachnovsky',
    credential: 'Former FBI Legal Attaché',
    img: 'https://scribemedia.com/hubfs/images/testimonials/JohnSchachnovsky_AuthorCentral_H.jpg',
    quote: '"Something that I can tell you now probably because of Scribe and how great an experience it was for me, I am crazily thinking about writing a second book… that is, if I can give a testament to Scribe, there\'s no way, if the process wasn\'t anything but great, that I would say I want to do this again."',
  },
  {
    name: 'Yuzheng Sun',
    credential: 'Staff Data Scientist, Statsig',
    img: 'https://scribemedia.com/hubfs/images/testimonials/Yuzheng-Sun_AuthorCentral_Headsh.jpg',
    quote: '"It has really been a pleasure to work with you. The process is smooth, and the result is outstanding. I\'ll definitely recommend you to anyone who seeks to publish a book. Hope our path come across again in the future."',
  },
  {
    name: 'Sam Goodner',
    credential: 'Serial Entrepreneur, Founder of Catapult Systems',
    img: 'https://scribemedia.com/hubfs/images/testimonials/SamGoodner_Headshot.jpg',
    quote: '"It was a pleasure working with you on this book project! I\'ve gotten everything I wanted out of this endeavor! Definitely ranks as a success in my book."',
  },
  {
    name: 'Pavel Ythjall',
    credential: 'Fitness Photographer & Entrepreneur',
    img: 'https://scribemedia.com/hubfs/images/testimonials/Pavel-Ythjal-541-296.jpg',
    quote: '"I don\'t have enough good words to say about my ghostwriter Mikey. She held my hand through the entire process. She\'s an angel."',
  },
  {
    name: 'Iona Holloway',
    credential: "Author & Women's Empowerment Coach",
    img: 'https://scribemedia.com/hubfs/images/testimonials/Iona-Holloway-541-296.jpg',
    quote: '"I expected the actual writing and publishing process to be really hard, but honestly, it was much easier than I thought it would be. They gave me hands-on guidance every step of the way, and I just followed the process."',
  },
  {
    name: 'Matthew Eby, Joanne Eby',
    credential: 'Co-Founders, Nth Degree Financial Solutions',
    img: 'https://scribemedia.com/hubfs/images/testimonials/Eby-Headshots.jpg',
    quote: '"The incredible praise we received from our industry colleagues for The Invisible Threat validates the effort and dedication we poured into the book. We couldn\'t have reached this milestone without the support of Scribe — especially Mark. He has been fantastic to work with. A truly skilled professional."',
  },
  {
    name: 'Linden Loren',
    credential: 'Co-Founder, Camo & Wind',
    img: 'https://scribemedia.com/hubfs/images/testimonials/Linden-v2.jpg',
    quote: '"Writing that book and working with [Scribe] is one of the best decisions I have ever made. There have been doors opened and connections formed I would have never had imagined."',
  },
  {
    name: 'Josh Dix',
    credential: 'Author',
    img: 'https://scribemedia.com/hubfs/images/testimonials/josh-dix.jpg',
    quote: '"Jeebus, this is amazing. Thank you. Seriously, I keep reading this and it so aptly captures the spirit of what I\'m trying to do and how to do it. It makes perfect sense to me. Not confusing at all. We are going to rock this. Man, I\'m so grateful and excited."',
  },
  {
    name: 'Candler Cook',
    credential: 'UGA Football Walk-On, Finance Professional',
    img: 'https://scribemedia.com/hubfs/images/testimonials/candler-cook.jpg',
    quote: '"I wanted to let all of you know that I leveraged my book into getting a job that I absolutely love. I remember reading the Scribe article about ways to get a great return on your book outside of just sales, but I never imagined it would lead to a job."',
  },
  {
    name: 'Stuart Waldner',
    credential: 'Plant-Based Wellness Advocate',
    img: 'https://scribemedia.com/hubfs/images/testimonials/StuartWaldner_Headshot.jpg',
    quote: '"As a Scribe Alumni, I\'m extremely grateful to read your post. It seems things are heading in the right direction. The world is a better place with Scribe Media in it. I\'m glad you\'re back home."',
  },
  {
    name: 'Dave Lamont',
    credential: 'CEO, Renfrew Business Group',
    img: 'https://scribemedia.com/hubfs/images/testimonials/Dave-Lamont-Headshot.jpg',
    quote: '"I am nothing but impressed!"',
  },
  {
    name: 'Pablo Munoz',
    credential: 'Managing Director, Muñoz & Company',
    img: 'https://scribemedia.com/hubfs/images/testimonials/Pablo-Munoz-Headshot.jpg',
    quote: '"Scribe is the best. You all helped me take an idea and make it into a book that I hope helps people. Hopefully, we can write more books together."',
  },
  {
    name: 'Ben Woodward',
    credential: 'Former Global President, Multinational Corp',
    img: 'https://scribemedia.com/hubfs/images/testimonials/BenWoodward_AuthorCentral_Headsh.jpg',
    quote: '"It has been fantastic and a wonderful journey. I have a busy and engaged speaker agent who has already booked me seven keynotes — all five figure fees plus expenses. And we are just getting started. Thank you for all you have done. It has been outstanding!"',
  },
  {
    name: 'Douglas Stone',
    credential: 'Wealth Advisor, SeaCrest Wealth Management',
    img: 'https://scribemedia.com/hubfs/images/testimonials/DouglasStone_Headshot.jpg',
    quote: '"I appreciate all your hard work and owe much of my success to you and Scribe! Thanks so much!"',
  },
  {
    name: 'Kyle Thiermann',
    credential: 'Author of One Last Question Before You Go',
    img: null,
    quote: '"I had a great experience with Scribe. You\'re not paying me to say that."',
  },
]

function getInitials(name) {
  const parts = name.trim().split(/\s+/)
  return (parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')
}

export default function Reviews() {
  return (
    <div className="reviews-page">
      <div className="reviews-page__header">
        <h1 className="font-playfair">What Our Authors Say</h1>
        <p>Real stories from real authors who trusted Scribe to bring their books to life.</p>
      </div>

      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <div key={i} className="review-card">
            <div className="review-card__author">
              {r.img ? (
                <img className="review-card__avatar" src={r.img} alt={r.name} loading="lazy" />
              ) : (
                <div className="review-card__avatar-placeholder">{getInitials(r.name)}</div>
              )}
              <div>
                <div className="review-card__name">{r.name}</div>
                <div className="review-card__credential">{r.credential}</div>
              </div>
            </div>
            <div className="review-card__stars">★★★★★</div>
            <div className="review-card__quote">{r.quote}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
