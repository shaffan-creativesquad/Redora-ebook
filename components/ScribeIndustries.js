const industries = [
  {
    title: 'Books for Brands',
    desc: 'Corporate thought leadership and brand publishing for enterprises and organizations.',
    href: '/services/books-for-brands',
  },
  {
    title: 'Books for Lawyers',
    desc: 'Win clients, command higher fees, and become the authority in your practice area.',
    href: '/services/books-for-lawyers',
  },
  {
    title: 'Books for Doctors',
    desc: 'Educate patients at scale and establish thought leadership in your specialty.',
    href: '/books-for-doctors',
  },
  {
    title: 'Books for Financial Advisors',
    desc: 'Build trust with high-net-worth clients before your first meeting.',
    href: '/books-for-financial-advisors',
  },
  {
    title: 'Books for Coaches',
    desc: 'Codify your methodology and attract premium clients at scale.',
    href: '/books-for-coaches',
  },
  {
    title: 'Books for Consultants',
    desc: 'Generate inbound leads and close bigger engagements with a published book.',
    href: '/books-for-consultants',
  },
  {
    title: 'Books for Speakers',
    desc: 'Land more keynotes, increase your fee, and extend your message.',
    href: '/books-for-speakers',
  },
  {
    title: 'Books for Entrepreneurs',
    desc: 'Attract investors, recruit talent, and build a personal brand that lasts.',
    href: '/books-for-entrepreneurs',
  },
  {
    title: 'Books for Sales Professionals',
    desc: 'Become the authority in your industry and open doors before you pick up the phone.',
    href: '/books-for-sales',
  },
  {
    title: 'Books for Marketers',
    desc: 'Prove your expertise and attract agency clients with a published methodology.',
    href: '/books-for-marketers',
  },
  {
    title: 'Books for Fitness & Wellness',
    desc: 'Reach a global audience and launch programs beyond the gym floor.',
    href: '/books-for-fitness',
  },
  {
    title: 'Books for Tech Leaders',
    desc: 'Share your vision and establish yourself as a voice that matters in technology.',
    href: '/books-for-tech',
  },
  {
    title: 'Books for Military & Veterans',
    desc: 'Turn your service into your next mission with a book that inspires.',
    href: '/books-for-military',
  },
  {
    title: 'Books for Retail Leaders',
    desc: 'Lead the conversation in a rapidly evolving industry.',
    href: '/books-for-retail',
  },
]

export default function ScribeIndustries() {
  return (
    <div className="ind-index">
      <div className="ind-index__hero">
        <h1>Books for Every Industry</h1>
        <p>Readora has helped professionals across every industry write and publish books that build authority and grow their business. Find authors in your field.</p>
      </div>
      <div className="ind-index__grid">
        {industries.map((ind, i) => (
          <a key={i} href={ind.href} className="ind-index__card">
            <h3>{ind.title}</h3>
            <p>{ind.desc}</p>
            <span className="ind-index__card-arrow">View authors →</span>
          </a>
        ))}
      </div>
    </div>
  )
}
