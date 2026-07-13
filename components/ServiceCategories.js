const services = [
  { icon: '📖', title: 'Publishing Services', desc: 'We take your finished manuscript and turn it into a beautiful, high-quality, professional book.', href: '/services/publishing' },
  { icon: '✍️', title: 'Writing Services', desc: 'We write, edit, and publish your story for you, with options for marketing. No typing required.', href: '/services/professional-book-writers' },
  { icon: '🎓', title: 'Coaching Services', desc: 'We coach you through the entire book writing process, from creating the outline to the final edits.', href: '/services/guided-author' },
  { icon: '🚀', title: 'Marketing Services', desc: 'We launch, leverage, and market your book in order to maximize your impact as an author.', href: '/services/book-marketing' },
]

export default function ServiceCategories() {
  return (
    <div className="service-cats">
      <h2 className="font-playfair">What Would You Like to Accomplish?</h2>
      <p className="subtitle">Readora has a tailored service for every stage of your book journey — from first idea to published author.</p>
      <div className="service-cats-grid">
        {services.map((s, i) => (
          <div key={i} className="svc-cat-card">
            <div className="svc-cat-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <a href={s.href}>Learn More →</a>
          </div>
        ))}
      </div>
    </div>
  )
}
