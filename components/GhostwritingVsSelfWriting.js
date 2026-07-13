const thCell = { padding: '12px 16px', color: '#e02d2d', fontWeight: '600' }
const tdCell = { padding: '12px 16px', color: '#d1d5db' }
const rowBorder = { borderBottom: '1px solid rgba(255,255,255,0.06)' }

export default function GhostwritingVsSelfWriting() {
  return (
    <section className="content-page">
      <div className="content-page__header">
        <h1 className="content-page__heading">Ghostwriting vs. Writing It Yourself</h1>
        <p className="content-page__subheading">An honest comparison to help you decide.</p>
      </div>

      <div className="content-page__body">
        <p>This is the first real decision most aspiring authors face: Do I write this book myself, or do I hire someone to help?</p>
        <p>There&apos;s no universally right answer. Both paths produce real, published books. The right choice depends on your time, your budget, your skills, and what you&apos;re trying to accomplish. Let&apos;s look at each option honestly.</p>

        <h2>The Case for Writing It Yourself</h2>
        <p>If you love writing, have the time, and are disciplined enough to finish a 50,000-word project over 6 to 18 months, writing your own book can be deeply rewarding.</p>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li><strong>It&apos;s cheaper.</strong> Your biggest cost is time, not money. Self-publishing platforms like Amazon KDP are free.</li>
          <li><strong>Total creative control.</strong> No one filters your ideas. Every word is yours.</li>
          <li><strong>Personal satisfaction.</strong> There&apos;s something meaningful about writing every sentence yourself.</li>
          <li><strong>You develop the skill.</strong> Writing a book makes you a better thinker and communicator.</li>
        </ul>
        <p><strong>The challenges:</strong></p>
        <ul>
          <li><strong>Time.</strong> Most first-time authors underestimate this by 3 to 5x. A good non-fiction book takes 500 to 1,000+ hours from start to finish.</li>
          <li><strong>Structure.</strong> Knowing your subject and organizing it into a compelling book are very different skills. Most abandoned books die at the outline stage.</li>
          <li><strong>Finishing.</strong> The data on this is brutal. Most people who start writing a book never finish. One survey found that while 15% of Americans have started writing a book, only 6% made it halfway through.</li>
          <li><strong>Quality gap.</strong> Without professional editing, design, and publishing, self-published books often look and read like self-published books. Fair or not, readers can tell.</li>
          <li><strong>Publishing logistics.</strong> ISBNs, formatting, cover design, distribution, metadata... it&apos;s a second project after you finish writing.</li>
        </ul>

        <h2>The Case for Ghostwriting</h2>
        <p>If you have the expertise and ideas but not the time or writing skill to produce a professional book, ghostwriting gets the book done without you spending a year at a keyboard.</p>
        <p><strong>Advantages:</strong></p>
        <ul>
          <li><strong>Speed.</strong> A professional ghostwriter and team can produce a book in 9 to 12 months while you focus on your business and life.</li>
          <li><strong>Quality.</strong> Professional writers, editors, and designers produce a book that competes with anything on the shelf.</li>
          <li><strong>Your voice, not theirs.</strong> Good ghostwriting captures how you think and talk. People who read it will think you wrote it, because the ideas are yours.</li>
          <li><strong>Full service.</strong> Premium firms handle everything: writing, editing, design, publishing, distribution. You get a finished product.</li>
          <li><strong>You actually finish.</strong> When you have a team, a schedule, and a process, the book gets done. That&apos;s not a small thing.</li>
        </ul>
        <p><strong>The challenges:</strong></p>
        <ul>
          <li><strong>Cost.</strong> Professional ghostwriting ranges from $20,000 to $200,000+. It&apos;s a significant investment. See our full <a href="/how-much-does-ghostwriting-cost">ghostwriting cost breakdown</a>.</li>
          <li><strong>Finding the right partner.</strong> Bad ghostwriters exist. So do firms that overpromise and underdeliver. Due diligence matters.</li>
          <li><strong>It still requires your time.</strong> You&apos;ll need to participate in interviews, review drafts, and give feedback. Plan for 2 to 5 hours per week.</li>
          <li><strong>It&apos;s someone else&apos;s craft.</strong> If the act of writing is important to you personally, ghostwriting won&apos;t satisfy that.</li>
        </ul>

        <h2>The Middle Ground</h2>
        <p>It&apos;s not all or nothing. There&apos;s a third option that most people don&apos;t consider: writing the book yourself with professional coaching and support.</p>
        <p>At Readora, our <a href="/services/guided-author">Guided Author</a> program is built for this. You write the book. Our team provides structure, coaching, editing, design, and publishing. You get the personal satisfaction of writing it yourself with the professional quality of a full-service publisher.</p>
        <p>This is a good fit if you want to write, can commit the time, but want a structured process and professional team to make sure the finished product is excellent.</p>

        <h2>Side-by-Side Comparison</h2>
        <p>Here&apos;s how the three approaches stack up:</p>

        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '2rem 0' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.15)' }}>
              <th style={{ textAlign: 'left', padding: '12px 16px', color: '#fff', fontWeight: '600' }}></th>
              <th style={{ textAlign: 'left', padding: '12px 16px', color: '#fff', fontWeight: '600' }}>Write It Yourself</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', color: '#fff', fontWeight: '600' }}>Guided (Coached)</th>
              <th style={{ textAlign: 'left', padding: '12px 16px', color: '#fff', fontWeight: '600' }}>Ghostwriting</th>
            </tr>
          </thead>
          <tbody>
            <tr style={rowBorder}>
              <td style={thCell}>Cost</td>
              <td style={tdCell}>$0 to $5,000</td>
              <td style={tdCell}>$25,000 to $50,000</td>
              <td style={tdCell}>$50,000 to $200,000+</td>
            </tr>
            <tr style={rowBorder}>
              <td style={thCell}>Your Time</td>
              <td style={tdCell}>500 to 1,000+ hours</td>
              <td style={tdCell}>200 to 400 hours</td>
              <td style={tdCell}>40 to 80 hours</td>
            </tr>
            <tr style={rowBorder}>
              <td style={thCell}>Timeline</td>
              <td style={tdCell}>1 to 3+ years</td>
              <td style={tdCell}>12 to 15 months</td>
              <td style={tdCell}>9 to 12 months</td>
            </tr>
            <tr style={rowBorder}>
              <td style={thCell}>Professional Quality</td>
              <td style={tdCell}>Depends on you</td>
              <td style={tdCell}>High (professional editing and design)</td>
              <td style={tdCell}>Highest (professional everything)</td>
            </tr>
            <tr style={rowBorder}>
              <td style={thCell}>Completion Rate</td>
              <td style={tdCell}>Very low</td>
              <td style={tdCell}>~90%+</td>
              <td style={tdCell}>~99%</td>
            </tr>
            <tr>
              <td style={thCell}>Publishing Included</td>
              <td style={tdCell}>No (DIY)</td>
              <td style={tdCell}>Yes</td>
              <td style={tdCell}>Yes</td>
            </tr>
          </tbody>
        </table>

        <h2>Which Should You Choose?</h2>
        <p><strong>Write it yourself if:</strong> You love writing, have the time, and are committed to learning the publishing process. You&apos;re willing to invest a year or more and handle the logistics yourself.</p>
        <p><strong>Use a guided/coached program if:</strong> You want to write the book yourself but need structure, accountability, and a professional team to make the final product excellent. You can commit 5 to 10 hours per week to writing.</p>
        <p><strong>Hire a ghostwriter if:</strong> Your time is your most valuable asset. You have the ideas and expertise but not the bandwidth to write 50,000 words. You want a professional book done right, and you&apos;re willing to invest accordingly.</p>

        <h2>What Readora Offers</h2>
        <p>We&apos;ve published 3,000+ books across all three approaches:</p>
        <ul>
          <li><a href="/services/ghostwriting">Readora Elite Ghostwriting</a> ($135,000+) and <a href="/services/professional-book-writers">Professional</a> ($56,000) for authors who want us to write it</li>
          <li><a href="/services/guided-author">Guided Author</a> ($44,000) for authors who want to write with support</li>
          <li><a href="/services/publishing">Publishing</a> ($29,000) for authors who&apos;ve already written their manuscript</li>
        </ul>
        <p>Not sure where you fall? That&apos;s normal. Most people figure it out during a conversation, not by reading a webpage.</p>
        <p><a href="/consult">Schedule a free consultation</a> and we&apos;ll help you think through it. No agenda, no pitch. Just an honest conversation about your book.</p>
      </div>
    </section>
  )
}
