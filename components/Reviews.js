'use client'
import { useState } from 'react'

const reviews = [
  // ── Featured (shown in "All Reviews") ────────────────────────────────────
  {
    name: 'Shaan Patel', href: '/authors/shaan-patel',
    credential: 'Shark Tank veteran · CEO, Prep Expert',
    img: '/assets/shaan-patel.png',
    book: 'Prep Expert Digital SAT Playbook', bookHref: '/published-books/prep-expert-digital-sat-playbook',
    quote: '"A book is one of the most powerful lead generators for businesses out there."',
    themes: ['lead-generator', 'brand-defining'], featured: true,
  },
  {
    name: 'Sarma Melngailis', href: '/authors/sarma-melngailis',
    credential: 'Former Owner, Pure Food and Wine',
    img: '/assets/sarma-mengailis.png',
    book: 'The Girl with the Duck Tattoo', bookHref: '/published-books/the-girl-with-the-duck-tattoo',
    quote: '"I can say with 100% honesty that it was great every step of the way. If it was just you and me, not on a podcast, and you said, \'Just tell me what we could have done better,\' I\'d say: I don\'t know. I can\'t think of anything."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Adam Skolnick', href: '/authors/adam-skolnick',
    credential: "Co-Author of Can't Hurt Me, NYT Contributor",
    img: '/assets/AdamSkolnick_Headshot.jpg',
    book: 'American Tiger', bookHref: '/published-books/american-tiger',
    quote: '"As soon as I made the commitment to publish this book with Scribe and go through you guys and just see it through, as soon as that contract was signed, everything else opened up."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Rich Kurtzman', href: '/authors/rich-kurtzman',
    credential: 'Founder & CEO, Barcelona SAE',
    img: '/assets/RichKurtzman_Headshot.jpg',
    book: 'Like a Fish in Water', bookHref: '/published-books/like-a-fish-in-water',
    quote: '"I wasn\'t a \'writer.\' Scribe turned years of workshops into a clear book—and the book turned into credibility, revenue, and relationships I couldn\'t have reached any other way."',
    themes: ['process-praise', 'roi-revenue', 'authority-credibility'], featured: true,
  },
  {
    name: 'John Schachnovsky', href: '/authors/john-schachnovsky',
    credential: 'Former FBI Legal Attaché',
    img: '/assets/JohnSchachnovsky_AuthorCentral_H.jpg',
    book: 'Beyond the Badge', bookHref: '/published-books/john-beyond-the-badge',
    quote: '"Something that I can tell you now probably because of Scribe and how great an experience it was for me, I am crazily thinking about writing a second book… that is, if I can give a testament to Scribe, there\'s no way, if the process wasn\'t anything but great, that I would say I want to do this again."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Yuzheng Sun', href: '/authors/yuzheng-sun',
    credential: 'Staff Data Scientist, Statsig',
    img: '/assets/Yuzheng-Sun_AuthorCentral_Headsh.png',
    book: 'Growth Data Analytics Playbook', bookHref: '/published-books/growth-data-analytics-playbook',
    quote: '"It has really been a pleasure to work with you. The process is smooth, and the result is outstanding. I\'ll definitely recommend you to anyone who seeks to publish a book. Hope our path come across again in the future."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Sam Goodner', href: '/authors/sam-goodner',
    credential: 'Serial Entrepreneur, Founder of Catapult Systems',
    img: '/assets/SamGoodner_Headshot.jpg',
    book: 'Like Clockwork', bookHref: '/published-books/like-clockwork',
    quote: '"It was a pleasure working with you on this book project! I\'ve gotten everything I wanted out of this endeavor! Definitely ranks as a success in my book."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'John Sardella', href: '/authors/john-sardella',
    credential: 'Author, A Journey Without a Map',
    img: null,
    book: 'A Journey Without a Map', bookHref: '/published-books/a-journey-without-a-map',
    quote: '"From the first conversation [with the Scribe team] all the way through to the final production of the book, to where we are now talking about it six years later, it\'s just been a great experience working with [Scribe]."',
    themes: ['process-praise', 'long-tail-compound'], featured: true,
  },
  {
    name: 'Pavel Ythjall', href: '/authors/pavel-ythjall',
    credential: 'Fitness Photographer & Entrepreneur',
    img: '/assets/Pavel-Ythjal-541-296.jpg',
    book: 'True Love and Suffering', bookHref: '/published-books/true-love-and-suffering',
    quote: '"I don\'t have enough good words to say about my ghostwriter Mikey. She held my hand through the entire process. She\'s an angel."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Iona Holloway', href: '/authors/iona-holloway',
    credential: "Author & Women's Empowerment Coach",
    img: '/assets/Iona-Holloway-541-296.jpg',
    book: 'Ghost', bookHref: '/published-books/ghost',
    quote: '"I expected the actual writing and publishing process to be really hard, but honestly, it was much easier than I thought it would be. They gave me hands-on guidance every step of the way, and I just followed the process."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'MyLinh Shattan', href: '/authors/mylinh-shattan',
    credential: 'Author, Raising Athena',
    img: '/assets/mylinh-shattan-headshot.png',
    book: 'Raising Athena', bookHref: '/published-books/raising-athena',
    quote: '"There\'s a real silo in publishing for, there are voices that aren\'t heard that Scribe is allowing to be heard."',
    themes: ['beats-trad-pub'], featured: true,
  },
  {
    name: 'Matthew Eby, Joanne Eby', href: '/authors/matthew-eby',
    credential: 'Co-Founders, Nth Degree Financial Solutions',
    img: '/assets/Eby-Headshots.jpg',
    book: 'The Invisible Threat', bookHref: '/published-books/the-invisible-threat',
    quote: '"The incredible praise we received from our industry colleagues for The Invisible Threat validates the effort and dedication we poured into the book. We couldn\'t have reached this milestone without the support of Scribe — especially Mark. He has been fantastic to work with. A truly skilled professional."',
    themes: ['production-quality', 'long-tail-compound', 'bestseller-awards'], featured: true,
  },
  {
    name: 'Linden Loren', href: '/authors/linden-loren',
    credential: 'Co-Founder, Camo & Wind',
    img: '/assets/Linden-v2.jpg',
    book: 'Your Hunting Healthspan', bookHref: '/published-books/your-hunting-healthspan',
    quote: '"Writing that book and working with [Scribe] is one of the best decisions I have ever made. There have been doors opened and connections formed I would have never had imagined."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Josh Dix', href: '/authors/josh-dix',
    credential: 'Author',
    img: '/assets/josh-dix.jpg',
    book: 'The Great Exhaustion', bookHref: '/published-books/the-great-exhaustion',
    quote: '"Jeebus, this is amazing. Thank you. Seriously, I keep reading this and it so aptly captures the spirit of what I\'m trying to do and how to do it. It makes perfect sense to me. Not confusing at all. We are going to rock this. Man, I\'m so grateful and excited."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Candler Cook', href: '/authors/candler-cook',
    credential: 'UGA Football Walk-On, Finance Professional',
    img: '/assets/candler-cook.jpg',
    book: 'From Underdog to Bulldog', bookHref: '/published-books/from-underdog-to-bulldog',
    quote: '"I wanted to let all of you know that I leveraged my book into getting a job that I absolutely love. I remember reading the Scribe article about ways to get a great return on your book outside of just sales, but I never imagined it would lead to a job."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Tommy Short', href: '/authors/tommy-short',
    credential: 'Author, The Call I Almost Missed',
    img: '/assets/tommy-short-headshot-opt.jpg',
    book: 'The Call I Almost Missed', bookHref: '/published-books/the-call-i-almost-missed-short',
    quote: '"It felt like I wasn\'t just a name on a sheet. Even when my mom was sick, [the publishing manager] was reaching out to me, not about when is the book coming out. It was just like, hey, is there anything I can do for you. We\'ve never met in person. It felt like I was a member of the Scribe family even before I signed with them."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Stuart Waldner', href: '/authors/stuart-waldner',
    credential: 'Plant-Based Wellness Advocate',
    img: '/assets/StuartWaldner_Headshot.jpg',
    book: 'Escape the Meatrix', bookHref: '/published-books/escape-the-meatrix',
    quote: '"As a Scribe Alumni, I\'m extremely grateful to read your post. It seems things are heading in the right direction. The world is a better place with Scribe Media in it. I\'m glad you\'re back home."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Dave Lamont', href: '/authors/dave-lamont',
    credential: 'CEO, Renfrew Business Group',
    img: '/assets/Dave-Lamont-Headshot.jpg',
    book: 'Crank It!', bookHref: '/published-books/crank-it',
    quote: '"I am nothing but impressed!"',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Pablo Munoz', href: '/authors/pablo-munoz',
    credential: 'Managing Director, Muñoz & Company',
    img: '/assets/Pablo-Munoz-Headshot.jpg',
    book: "The Leader's Algorithm", bookHref: '/published-books/the-leaders-algorithm',
    quote: '"Scribe is the best. You all helped me take an idea and make it into a book that I hope helps people. Hopefully, we can write more books together."',
    themes: ['reader-impact'], featured: true,
  },
  {
    name: 'Matt Shoup', href: '/authors/matt-shoup',
    credential: 'Author, Painted Baby',
    img: '/assets/Matt_Shoup_Headshot.jpg',
    book: 'Painted Baby', bookHref: '/published-books/painted-baby',
    quote: '"I wanted to write a better book and I was really intrigued by the Scribe process. As soon as we signed, we jumped into it. We hit all the deadlines. It was amazing."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Ben Woodward', href: '/authors/ben-woodward',
    credential: 'Former Global President, Multinational Corp',
    img: '/assets/BenWoodward_AuthorCentral_Headsh.jpg',
    book: 'The Empowerment Paradox', bookHref: '/published-books/the-empowerment-paradox',
    quote: '"It has been fantastic and a wonderful journey. I have a busy and engaged speaker agent who has already booked me seven keynotes — all five figure fees plus expenses. And we are just getting started. Thank you for all you have done. It has been outstanding!"',
    themes: ['speaking-engagements'], featured: true,
  },
  {
    name: 'Douglas Stone', href: '/authors/douglas-stone',
    credential: 'Wealth Advisor, SeaCrest Wealth Management',
    img: '/assets/DouglasStone_Headshot.jpg',
    book: 'Navigate the Investment Jungle', bookHref: '/published-books/navigate-the-investment-jungle',
    quote: '"I appreciate all your hard work and owe much of my success to you and Scribe! Thanks so much!"',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Yarona Boster', href: '/authors/yarona-boster',
    credential: 'Advanced Certified Life Coach & TEDx Speaker',
    img: 'https://scribemedia.com/hubfs/author-headshots/yarona-boster-headshot.jpg',
    book: 'Unspoken Signals', bookHref: '/published-books/unspoken-signals',
    quote: '"I would definitely highly, highly recommend jumping into that mess with Scribe, because you guys gave me exactly, in my opinion, what I needed to do this with the right kind of support mechanisms that weren\'t overly authoritarian and weren\'t overly late and weren\'t chaotic and disorganized. So it was just the right amount."',
    themes: ['process-praise'], featured: true,
  },
  {
    name: 'Kyle Thiermann', href: '/authors/kyle-thiermann',
    credential: 'Author of One Last Question Before You Go',
    img: null,
    book: 'One Last Question Before You Go', bookHref: '/published-books/one-last-question-before-you-go',
    quote: '"Adam said, and I agree, that [Scribe] is every bit as professional as having gone through a Penguin Random House."',
    themes: ['production-quality', 'beats-trad-pub'], featured: true,
  },

  // ── Additional quotes (shown only when filtering by theme) ────────────────
  {
    name: 'Shaan Patel', href: '/authors/shaan-patel',
    credential: 'CEO, Prep Expert',
    img: '/assets/shaan-patel.png',
    book: 'Prep Expert Digital SAT Playbook', bookHref: '/published-books/prep-expert-digital-sat-playbook',
    quote: '"I always wanted to get back to that original level [of McGraw Hill quality] but without having to take the kind of pay cut that you do through a major publisher. And so that\'s when I found Scribe. And it was kind of the perfect match between self-publishing but still getting that professional level of publication."',
    themes: ['production-quality', 'beats-trad-pub', 'long-tail-compound'], featured: false,
  },
  {
    name: 'Shaan Patel', href: '/authors/shaan-patel',
    credential: 'CEO, Prep Expert',
    img: '/assets/shaan-patel.png',
    book: 'Prep Expert Digital SAT Playbook', bookHref: '/published-books/prep-expert-digital-sat-playbook',
    quote: '"[The Scribe team] made it happen, putting the book together in such a short time frame and then making all of that come to life in such an amazing and professional way, that we can compete with the Princeton Reviews and the Kaplans and the juggernauts in our space without having to go through a major publisher and still keep all that ROI for ourselves."',
    themes: ['process-praise', 'production-quality', 'beats-trad-pub'], featured: false,
  },
  {
    name: 'Shaan Patel', href: '/authors/shaan-patel',
    credential: 'CEO, Prep Expert',
    img: '/assets/shaan-patel.png',
    book: 'Prep Expert Digital SAT Playbook', bookHref: '/published-books/prep-expert-digital-sat-playbook',
    quote: '"The amount that we spent on the Scribe project has generated a 10x plus return ever since, if not 20x."',
    themes: ['roi-revenue'], featured: false,
  },
  {
    name: 'Shaan Patel', href: '/authors/shaan-patel',
    credential: 'CEO, Prep Expert',
    img: '/assets/shaan-patel.png',
    book: 'Prep Expert Digital SAT Playbook', bookHref: '/published-books/prep-expert-digital-sat-playbook',
    quote: '"You really have to think about authorship in a decade\'s game, not a year\'s game. I\'m in my second decade. I\'m sure the third decade will be even better because you\'ve built a great reputation over time."',
    themes: ['authority-credibility', 'long-tail-compound'], featured: false,
  },
  {
    name: 'Shaan Patel', href: '/authors/shaan-patel',
    credential: 'CEO, Prep Expert',
    img: '/assets/shaan-patel.png',
    book: 'Prep Expert Digital SAT Playbook', bookHref: '/published-books/prep-expert-digital-sat-playbook',
    quote: '"When you write a really good human book, people notice. People can tell that this is something different here. And people are going to crave that human touch more and more. The more you can personalize and humanize things, it\'s actually a great differentiator in increasingly AI-competitive markets."',
    themes: ['process-praise'], featured: false,
  },
  {
    name: 'John Sardella', href: '/authors/john-sardella',
    credential: 'Author, A Journey Without a Map',
    img: null,
    book: 'A Journey Without a Map', bookHref: '/published-books/a-journey-without-a-map',
    quote: '"I found A Journey Without a Map, the most powerful part of that process, was the collaboration with [the Scribe team]. My collaboration with all the people involved was amazing. And that helped to just drive that book to where it became the success that it\'s become."',
    themes: ['process-praise'], featured: false,
  },
  {
    name: 'John Sardella', href: '/authors/john-sardella',
    credential: 'Author, A Journey Without a Map',
    img: null,
    book: 'A Journey Without a Map', bookHref: '/published-books/a-journey-without-a-map',
    quote: '"Every Wednesday at nine o\'clock, we were meeting for at least an hour and we were going through things and working through things, bouncing off ideas and sharing the story. It was one of the best experiences I ever had."',
    themes: ['process-praise', 'reader-impact'], featured: false,
  },
  {
    name: 'John Sardella', href: '/authors/john-sardella',
    credential: 'Author, A Journey Without a Map',
    img: null,
    book: 'A Journey Without a Map', bookHref: '/published-books/a-journey-without-a-map',
    quote: '"The biggest thing has been the connection with people who are widows and widowers. And those connections have really helped me to help them through a very difficult time. Many times I get an email or a correspondence that says, hey, I identify with every piece of that book."',
    themes: ['reader-impact'], featured: false,
  },
  {
    name: 'MyLinh Shattan', href: '/authors/mylinh-shattan',
    credential: 'Author, Raising Athena',
    img: '/assets/mylinh-shattan-headshot.png',
    book: 'Raising Athena', bookHref: '/published-books/raising-athena',
    quote: '"[The editor] at Scribe just reads a gazillion books. He said, we\'re all dying to know who this Cara is. So one of the last, probably the last two rewrites, I developed her character."',
    themes: ['process-praise'], featured: false,
  },
  {
    name: 'MyLinh Shattan', href: '/authors/mylinh-shattan',
    credential: 'Author, Raising Athena',
    img: '/assets/mylinh-shattan-headshot.png',
    book: 'Raising Athena', bookHref: '/published-books/raising-athena',
    quote: '"I had six agents, number one agent, nonfiction. And the interesting thing is, loved it. Like this is incredibly terrific. But the publishers, the traditional publishers, oh, it\'s not on their list. I\'m like, if I\'m not on your list, like what the frick is on your list?"',
    themes: ['bestseller-awards'], featured: false,
  },
  {
    name: 'MyLinh Shattan', href: '/authors/mylinh-shattan',
    credential: 'Author, Raising Athena',
    img: '/assets/mylinh-shattan-headshot.png',
    book: 'Raising Athena', bookHref: '/published-books/raising-athena',
    quote: '"There were 500 people that came back for that. And I couldn\'t, people just walked away because I couldn\'t sign them. I didn\'t even know how to charge. I was like, how does this work? I\'ve never done this."',
    themes: ['process-praise'], featured: false,
  },
  {
    name: 'Tommy Short', href: '/authors/tommy-short',
    credential: 'Author, The Call I Almost Missed',
    img: '/assets/tommy-short-headshot-opt.jpg',
    book: 'The Call I Almost Missed', bookHref: '/published-books/the-call-i-almost-missed-short',
    quote: '"I reached out to 104 different publishers and literary agents and got either nothing or a no from them. 105 was the magic number."',
    themes: ['process-praise'], featured: false,
  },
  {
    name: 'Tommy Short', href: '/authors/tommy-short',
    credential: 'Author, The Call I Almost Missed',
    img: '/assets/tommy-short-headshot-opt.jpg',
    book: 'The Call I Almost Missed', bookHref: '/published-books/the-call-i-almost-missed-short',
    quote: '"Just from the editors and proofreaders that touched the book at Scribe, some of the notes I got from them of just certain parts of the book, how it touched them. If I didn\'t hear any other comment or review, just those handful of comments and notes from the people at Scribe, that made everything worth it."',
    themes: ['process-praise'], featured: false,
  },
  {
    name: 'Tommy Short', href: '/authors/tommy-short',
    credential: 'Author, The Call I Almost Missed',
    img: '/assets/tommy-short-headshot-opt.jpg',
    book: 'The Call I Almost Missed', bookHref: '/published-books/the-call-i-almost-missed-short',
    quote: '"The combination of being held to a high standard and feeling supported and not belittled — supported and encouraged and led and guided, but not told what to do. The mix of helping you execute your vision at the very highest level while being encouraging is actually a really difficult combination that I feel like very few authors feel like they get from the industry."',
    themes: ['process-praise'], featured: false,
  },
  {
    name: 'Matt Shoup', href: '/authors/matt-shoup',
    credential: 'Author, Painted Baby',
    img: '/assets/Matt_Shoup_Headshot.jpg',
    book: 'Painted Baby', bookHref: '/published-books/painted-baby',
    quote: '"When I landed and did Painted Baby with [Scribe], I remember that was published, it was in hand, it was best content I\'ve ever put out. That was when I pitched my first five-figure gig and landed it, and then landed another one, and then another one. The book really helped elevate the speaking."',
    themes: ['speaking-engagements'], featured: false,
  },
  {
    name: 'Matt Shoup', href: '/authors/matt-shoup',
    credential: 'Author, Painted Baby',
    img: '/assets/Matt_Shoup_Headshot.jpg',
    book: 'Painted Baby', bookHref: '/published-books/painted-baby',
    quote: '"She was booking me kind of these small gigs, kind of testing me out before I had Painted Baby the book. She\'s like, Matt, once you land this book and it looks good, and it did, I\'m gonna put you out there more."',
    themes: ['process-praise'], featured: false,
  },
  {
    name: 'Matt Shoup', href: '/authors/matt-shoup',
    credential: 'Author, Painted Baby',
    img: '/assets/Matt_Shoup_Headshot.jpg',
    book: 'Painted Baby', bookHref: '/published-books/painted-baby',
    quote: '"The customers don\'t come at you with as much anxiety. They\'re like, hey, you remember that painted baby situation? I think we\'ve got a little painted baby situation because Matt, it\'s not that bad, but I know you\'ll take care of it."',
    themes: ['process-praise'], featured: false,
  },
  {
    name: 'Matthew Eby', href: '/authors/matthew-eby',
    credential: 'Co-Founder, Nth Degree Financial Solutions',
    img: '/assets/Eby-Headshots.jpg',
    book: 'The Invisible Threat', bookHref: '/published-books/the-invisible-threat',
    quote: '"We couldn\'t have reached this milestone without the support of Scribe — especially Mark. He has been fantastic to work with. A truly skilled professional."',
    themes: ['production-quality'], featured: false,
  },
  {
    name: 'Kyle Thiermann', href: '/authors/kyle-thiermann',
    credential: 'Author of One Last Question Before You Go',
    img: null,
    book: 'One Last Question Before You Go', bookHref: '/published-books/one-last-question-before-you-go',
    quote: '"I had a great experience with Scribe. You\'re not paying me to say that."',
    themes: ['process-praise'], featured: false,
  },
  {
    name: 'Kyle Thiermann', href: '/authors/kyle-thiermann',
    credential: 'Author of One Last Question Before You Go',
    img: null,
    book: 'One Last Question Before You Go', bookHref: '/published-books/one-last-question-before-you-go',
    quote: '"It\'s a real collaborative and working relationship over that year-long period. We stayed ahead of schedule and I\'m really happy with the outcome."',
    themes: ['process-praise'], featured: false,
  },
  {
    name: 'Kyle Thiermann', href: '/authors/kyle-thiermann',
    credential: 'Author of One Last Question Before You Go',
    img: null,
    book: 'One Last Question Before You Go', bookHref: '/published-books/one-last-question-before-you-go',
    quote: '"[Scribe] really encourage[s] people to be as honest as possible. And I felt that with the feedback that I got in the book. It was very thoughtful human feedback."',
    themes: ['process-praise'], featured: false,
  },
]

const filters = [
  { key: 'all',                   label: 'All Reviews' },
  { key: 'process-praise',        label: 'Process Praise' },
  { key: 'production-quality',    label: 'Production Quality' },
  { key: 'beats-trad-pub',        label: 'Beats Trad Pub' },
  { key: 'roi-revenue',           label: 'ROI / Revenue' },
  { key: 'lead-generator',        label: 'Lead Generator' },
  { key: 'speaking-engagements',  label: 'Speaking Engagements' },
  { key: 'authority-credibility', label: 'Authority & Credibility' },
  { key: 'long-tail-compound',    label: 'Long-Tail Compound' },
  { key: 'reader-impact',         label: 'Reader Impact' },
  { key: 'bestseller-awards',     label: 'Bestseller / Awards' },
  { key: 'personal-transformation', label: 'Personal Transformation' },
  { key: 'brand-defining',        label: 'Brand-Defining Quote' },
]

function getInitials(name) {
  const parts = name.trim().split(/\s+/)
  return (parts[0]?.[0] ?? '') + (parts[1]?.[0] ?? '')
}

export default function Reviews() {
  const [active, setActive] = useState('all')

  const visible = reviews.filter(r =>
    active === 'all' ? r.featured : r.themes.includes(active)
  )

  return (
    <div className="reviews-page">
      <div className="reviews-page__header">
        <h1 className="font-playfair">What Our Authors Say</h1>
        <p>Real stories from real authors who trusted Scribe to bring their books to life.</p>
      </div>

      <div className="reviews-filter">
        {filters.map(f => (
          <button
            key={f.key}
            className={active === f.key ? 'active' : ''}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="reviews-grid">
        {visible.map((r, i) => (
          <div key={i} className="review-card">
            <div className="review-card__author">
              {r.img ? (
                <img className="review-card__avatar" src={r.img} alt={r.name} loading="lazy" />
              ) : (
                <div className="review-card__avatar-placeholder">{getInitials(r.name)}</div>
              )}
              <div>
                {r.href
                  ? <a className="review-card__name" href={r.href}>{r.name}</a>
                  : <div className="review-card__name">{r.name}</div>
                }
                <div className="review-card__credential">{r.credential}</div>
                {r.book && (
                  <a className="review-card__book" href={r.bookHref}>
                    <span className="review-card__book-label">BOOK </span>{r.book}
                  </a>
                )}
              </div>
            </div>
            <div className="review-card__stars">★★★★★</div>
            <div className="review-card__quote">{r.quote}</div>
          </div>
        ))}
        {visible.length === 0 && (
          <p className="reviews-empty is-visible">No reviews match this filter yet.</p>
        )}
      </div>
    </div>
  )
}
