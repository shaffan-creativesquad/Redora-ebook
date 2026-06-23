'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'What exactly does Scribe do?',
    a: 'Scribe helps people write, publish, and market their books. We were founded in 2014 by a 4x New York Times Bestselling Author, and have worked on over 3,000 books. Our two most popular services are Guided Author ($44k) and Scribe Professional ($56k). We can also publish your finished manuscript.',
  },
  {
    q: 'Does Scribe work with anyone?',
    a: "No, we typically reject about 30% of authors who want to work with us. We use two criteria: Does the author know the subject matter deeply enough? And does the author have a clear understanding of how books work and reasonable expectations for ROI? That is why the first step in our process is a qualification process.",
  },
  {
    q: 'How do I decide between the $44k and $56k options?',
    a: 'Ask yourself two questions: Do you like sitting down and writing? And do you have enough time to write yourself? If yes to both, Guided Author ($44k) is probably right. If no to both, Scribe Professional ($56k) is probably right. Generally, Guided Author requires 1-2 hours a day for a year, and Scribe Professional requires 2 hours a week for 9 months.',
  },
  {
    q: 'What is Scribe Elite ($135k+)?',
    a: 'Scribe Elite is intended for authors who require an authentic ghostwriting experience that often involves interviewing outside sources, conducting background research, and creating a bespoke process. Almost all authors are better off with Scribe Guided Author ($44k) or Scribe Professional ($56k).',
  },
  {
    q: 'Do you do fiction books?',
    a: "No, we currently do not offer services for fiction books, children's books, cookbooks, or textbooks.",
  },
  {
    q: 'Can you work in other languages?',
    a: 'No, not right now.',
  },
  {
    q: 'Is there anyone who should not work with Scribe?',
    a: 'Yes. People who do not know their topic well, people who are not sure how a book can help them, and people who have no idea why they want to write a book. Our process requires an investment of both money and effort, so you should have an idea of why you are doing it.',
  },
]

function PricingFaqItem({ item }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`pfaq-item${open ? ' open' : ''}`}>
      <button className="pfaq-q" type="button" aria-expanded={open} onClick={() => setOpen(v => !v)}>
        {item.q}
        <i className="ph ph-caret-down pfaq-chevron" aria-hidden="true" />
      </button>
      <div className="pfaq-a" aria-hidden={!open}>
        <div className="pfaq-a-inner">{item.a}</div>
      </div>
    </div>
  )
}

export default function PricingFaq() {
  return (
    <div className="services-faq">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((item, i) => <PricingFaqItem key={i} item={item} />)}
      <a href="/faqs" className="pfaq-all-link">Read All FAQs →</a>
    </div>
  )
}
