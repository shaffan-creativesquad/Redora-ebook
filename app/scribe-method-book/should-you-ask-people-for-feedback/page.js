import '../introduction-why-write-a-book/chapter.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Should You Ask People For Feedback? | The Scribe Method | Scribe Media',
  description: 'Learn who to ask for book feedback — and who to avoid — to ensure your manuscript improves rather than suffers.',
}

export default function AskForFeedbackPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="chapter">
          <a href="/scribe-method-book" className="chapter__back">← The Scribe Method</a>
          <p className="chapter__part">PART 5: EDIT YOUR BOOK</p>
          <p className="chapter__num">Chapter 18</p>
          <h1 className="chapter__title">Should You Ask People For Feedback?</h1>
          <div className="chapter__content">
            <p>When writing a book, feedback is essential—but only if you get it from the right people. The wrong feedback can send you into a tailspin, leaving you confused and unsure about your manuscript. So, who should you ask for feedback, and how should you go about it?</p>

            <h2>Why Asking the Wrong People for Feedback Is a Mistake</h2>
            <p>Imagine your car breaks down. Would you ask a chef to diagnose the problem? Of course not. A chef might be great at crafting a gourmet meal, but they won&apos;t have the expertise to fix your engine.</p>
            <p>Yet, many authors make this mistake by asking random friends, family members, or even social media followers for book feedback. The result? Either vague, unhelpful comments or misleading advice from people who don&apos;t truly understand writing or your book&apos;s subject matter.</p>

            <h2>Who Should You Ask for Feedback?</h2>
            <ol>
              <li>
                <strong>Experienced Writers or Editors</strong>
                <p>Professional writers and editors understand the structure, pacing, and clarity that make a book successful. However, keep in mind that not all writers or editors are equal. Many overestimate their abilities just because they write emails or reports for work.</p>
                <p>At Scribe, we rigorously test editors before hiring them—and we reject about 98% of applicants, even those with experience. This high rejection rate shows how few people truly excel at giving valuable book feedback.</p>
              </li>
              <li>
                <strong>Experts in Your Field</strong>
                <p>If you&apos;re writing a book about finance, wouldn&apos;t it make sense to get feedback from financial professionals? Experts in your field can verify your information, ensure your tone is appropriate, and confirm that your insights align with industry best practices.</p>
                <p>When asking for feedback from experts, be specific. Ask them to check for factual errors or gauge whether your explanations make sense to both industry professionals and beginners.</p>
              </li>
              <li>
                <strong>People in Your Target Audience</strong>
                <p>Your book is ultimately for your readers, so getting feedback from someone in your target audience is valuable. If you&apos;re writing a book on launching a tech startup, ask aspiring entrepreneurs to read it. They can tell you which sections resonate, which are confusing, and what they wish had more detail.</p>
                <p>Again, specificity is key. Instead of just saying, &quot;Tell me what you think,&quot; ask them, &quot;Did any part feel unclear or hard to follow?&quot;</p>
              </li>
            </ol>

            <h2>The Worst Ways to Get Feedback (Avoid These Mistakes!)</h2>
            <h3>Posting Pages on Social Media</h3>
            <p>Sharing your manuscript on social media for feedback is a disaster waiting to happen. You wouldn&apos;t stand in an amusement park and ask strangers for fashion advice—so why do the same with your book?</p>
            <h3>Giving Your Manuscript to Friends or Family</h3>
            <p>Unless they fit into the three categories above, friends and family will likely give unhelpful feedback. They may feel obligated to comment but lack the expertise to provide constructive criticism.</p>

            <h2>Instead, Ask Specific People for Specific Feedback</h2>
            <p>There&apos;s nothing wrong with asking for help—just make sure you&apos;re strategic. If you want to know if your writing voice is too casual for a finance book, ask an industry professional, not your neighbor.</p>

            <h2>Want More Guidance on Writing and Publishing?</h2>
            <p>Download a <strong>free copy</strong> of <em>The Scribe Method</em> to learn the step-by-step process for writing, publishing, and marketing your book:{' '}
              <a href="https://scribemedia.com/hubfs/scribe-method/The-Scribe-Method-Book.pdf" target="_blank" rel="noopener noreferrer">Get the free book</a>
            </p>
            <p>Prefer a hard copy?{' '}
              <a href="https://amzn.to/3P14NjR" target="_blank" rel="noopener noreferrer">You can purchase <em>The Scribe Method</em> here</a>.
            </p>
          </div>

          <div className="chapter__nav">
            <a href="/scribe-method-book/how-to-edit-your-book" className="chapter__nav-link chapter__nav-link--prev">
              <span className="chapter__nav-label">Previous Chapter</span>
              <span className="chapter__nav-title">How to Edit Your Book</span>
            </a>
            <a href="/scribe-method-book/picking-the-perfect-book-title" className="chapter__nav-link chapter__nav-link--next">
              <span className="chapter__nav-label">Next Chapter</span>
              <span className="chapter__nav-title">Picking The Perfect Book Title</span>
            </a>
          </div>

          <div className="chapter__cta-section">
            <h2 className="chapter__cta-title">Want Help Writing Your Book?</h2>
            <p className="chapter__cta-text">Scribe has helped 2,000+ authors turn their ideas into published books. Schedule a free consult.</p>
            <a href="/consult" className="chapter__cta-btn">Schedule a Consult</a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
