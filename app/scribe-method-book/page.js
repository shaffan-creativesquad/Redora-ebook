import './scribe-method-book.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import ScribeMethodForm from '@/components/ScribeMethodForm'

export const metadata = {
  title: 'The Readora Method - Free Book | Readora',
  description: 'Read The Readora Method for free. A Wall Street Journal bestseller covering everything you need to write, publish, and own your non-fiction book.',
}

const tocParts = [
  {
    title: 'Introduction',
    chapters: [
      { num: 1, title: 'Introduction: Why Write a Book?', slug: 'introduction-why-write-a-book' },
    ],
  },
  {
    title: 'PART 1: PREPARE TO WRITE YOUR BOOK',
    chapters: [
      { num: 2, title: 'The Proper Expectations For Writing Your Book', slug: 'the-proper-expectations-for-writing-your-book' },
      { num: 3, title: 'The Six Fears You (Could) Face Writing Your Book', slug: 'the-six-fears-you-could-face-writing-your-book' },
      { num: 4, title: 'How To Beat Your Fears and (Finish Your Book)', slug: 'how-to-beat-your-fears-and-finish-your-book' },
    ],
  },
  {
    title: 'PART 2: POSITION YOUR BOOK',
    chapters: [
      { num: 5, title: 'What is Book Positioning (and Why Does it Matter)?', slug: 'what-is-book-positioning-and-why-does-it-matter' },
      { num: 6, title: 'Figure Out Your Book Objectives', slug: 'figure-out-your-book-objectives' },
      { num: 7, title: 'Figure Out Your Audience', slug: 'figure-out-your-audience' },
      { num: 8, title: 'Figure Out Your Book Idea', slug: 'figure-out-your-book-idea' },
      { num: 9, title: 'The North Star Check', slug: 'the-north-star-check' },
    ],
  },
  {
    title: 'PART 3: OUTLINE YOUR BOOK',
    chapters: [
      { num: 10, title: 'Create Your Book Outline', slug: 'create-your-book-outline' },
      { num: 11, title: 'Outline The Introduction', slug: 'outline-the-introduction' },
      { num: 12, title: 'Outline The Conclusion', slug: 'outline-the-conclusion' },
    ],
  },
  {
    title: 'PART 4: WRITE YOUR BOOK',
    chapters: [
      { num: 13, title: 'How to Create Your Book Writing Plan', slug: 'how-to-create-your-book-writing-plan' },
      { num: 14, title: 'The Readora Guide to Writing Effective Nonfiction', slug: 'the-scribe-guide-to-writing-effective-nonfiction' },
      { num: 15, title: 'How to Write Your First Draft (The Vomit Method)', slug: 'how-to-write-your-first-draft-the-vomit-method' },
      { num: 16, title: 'How to Write Your First Draft (The Readora Method)', slug: 'how-to-write-your-first-draft-the-scribe-method' },
    ],
  },
  {
    title: 'PART 5: EDIT YOUR BOOK',
    chapters: [
      { num: 17, title: 'How to Edit Your Book', slug: 'how-to-edit-your-book' },
      { num: 18, title: 'Should You Ask People For Feedback?', slug: 'should-you-ask-people-for-feedback' },
    ],
  },
  {
    title: 'PART 6: FINISH YOUR MANUSCRIPT',
    chapters: [
      { num: 19, title: 'Picking The Perfect Book Title', slug: 'picking-the-perfect-book-title' },
      { num: 20, title: 'Write Your Book Dedication', slug: 'write-your-book-dedication' },
      { num: 21, title: 'Write Your Book Acknowledgements', slug: 'write-your-book-acknowledgments' },
      { num: 22, title: 'Write Your Book Foreword', slug: 'write-your-book-foreword' },
      { num: 23, title: 'How To Get Incredible Blurbs For Your Book', slug: 'how-to-get-incredible-blurbs-for-your-book' },
      { num: 24, title: 'Lock In Your Manuscript: Copyediting', slug: 'lock-in-your-manuscript-copyediting' },
    ],
  },
  {
    title: 'PART 7: DESIGN YOUR BOOK',
    chapters: [
      { num: 25, title: 'How To Write A Book Description That Sells', slug: 'how-to-write-a-book-descriptions-that-sells' },
      { num: 26, title: 'How To Write Your Author Bio (And Why it Matters)', slug: 'how-to-write-your-author-bio-and-why-it-matters' },
      { num: 27, title: 'How To Take The Right Author Photo', slug: 'how-to-take-the-right-author-photo' },
      { num: 28, title: 'How To Get A Great Book Cover', slug: 'how-to-get-a-great-book-cover' },
      { num: 29, title: 'Design Your Book Layout', slug: 'design-your-book-layout' },
      { num: 30, title: 'How To Properly Price Your Book', slug: 'how-to-properly-price-your-book' },
    ],
  },
  {
    title: 'PART 8: PUBLISH YOUR BOOK',
    chapters: [
      { num: 31, title: 'How To Pick The Right Book Publishing Options', slug: 'how-to-pick-the-right-book-publishing-option' },
      { num: 32, title: 'How Much Does It Cost to Self Publish A Book?', slug: 'how-much-does-it-cost-to-self-publish-a-book' },
      { num: 33, title: 'Everything You Need To Know About Self-Publishing Book Distribution', slug: 'everything-you-need-to-know-about-self-publishing-book-distribution' },
      { num: 34, title: 'How To Write a Nonfiction Book Proposal (With Template)', slug: 'how-to-write-a-nonfiction-book-proposal-with-template' },
      { num: 35, title: 'Conclusion: Publish Your Book', slug: 'conclusion-publish-your-book' },
    ],
  },
  {
    title: 'PART 9: REFERENCE MATERIAL',
    chapters: [
      { num: 36, title: 'Realistic and Unrealistic Expectations For a Book', slug: 'realistic-and-unrealistic-expectations-for-a-book' },
      { num: 37, title: 'How Writing A Book Can Build Your Brand', slug: 'how-writing-a-book-can-build-your-brand' },
      { num: 38, title: 'How To Make Money With Your Book', slug: 'how-to-make-money-with-your-book' },
      { num: 39, title: "What's The (Intangible) Impact Of A Book?", slug: 'whats-the-intangible-impact-of-a-book' },
      { num: 40, title: 'How Much Should You "Give Away" In Your Book? The Question Of Advertorial Vs. Editorial Content', slug: 'how-much-should-you-give-away-in-your-book' },
      { num: 41, title: 'How Much Of Your Story Should Be In Your Book?', slug: 'how-much-of-your-story-should-be-in-your-book' },
      { num: 42, title: 'Everything You Need To Know About Book Chapters', slug: 'everything-you-need-to-know-about-book-chapters' },
      { num: 43, title: "How Do You Beat Writer's Block?", slug: 'how-do-you-beat-writers-block' },
      { num: 44, title: 'The Only Software You Need To Write A Book Is Already On Your Computer', slug: 'the-only-software-you-need-to-write-a-book-is-already-on-your-computer' },
      { num: 45, title: 'How People Really Judge A Book', slug: 'how-people-really-judge-a-book' },
      { num: 46, title: 'About The Authors', slug: 'about-the-authors' },
    ],
  },
]

export default function ScribeMethodBookPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="smb">
          {/* Hero */}
          <div className="smb__hero">
            <div className="smb__hero-text">
              <h1>The Readora Method</h1>
              <h3>A Wall Street Journal Bestseller</h3>
              <p>We believe the world needs more writers and that everyone has a story worth telling. That&apos;s why we&apos;re giving away The Readora Method for free. No catch, just everything you need to write, publish, and own your book.</p>
              <a href="#smb-form" className="smb__cta-btn">Get the Free Book</a>
            </div>
            <div className="smb__hero-img">
              <img
                src="/assets/scribe-method-cover-200x300.png"
                alt="The Readora Method book cover"
                width="200"
                height="300"
              />
            </div>
          </div>

          {/* What You'll Learn */}
          <div className="smb__section smb__section--alt">
            <h2>What You&apos;ll Learn</h2>
            <p className="smb__about">The Readora Method covers the complete process for writing, publishing, and marketing a non-fiction book. Written by Tucker Max and Zach Obront, it distills everything they learned helping 2,000+ authors publish their books.</p>
          </div>

          {/* Get Free Copy Form */}
          <div className="smb__form-section" id="smb-form">
            <h2>Get Your Free Copy</h2>
            <p>Enter your information below to get free access to The Readora Method.</p>
            <div className="smb__form-wrapper">
              <ScribeMethodForm />
            </div>
          </div>
        </div>

        {/* What's Inside */}
        <div className="sm-features">
          <p className="sm-features__label">What&apos;s Inside</p>
          <h2 className="sm-features__heading">Everything You Need to Write, Publish, and Market Your Book</h2>
          <p className="sm-features__sub">The Readora Method is the definitive guide used by 2,000+ authors. Written by Tucker Max and Zach Obront, it covers the entire journey from idea to published book.</p>
          <div className="sm-features__grid">
            <div className="sm-features__card">
              <div className="sm-features__icon"><i className="ph ph-target"></i></div>
              <h3 className="sm-features__card-title">Position Your Book</h3>
              <p className="sm-features__card-text">Define your audience, clarify your objectives, and develop a book idea that resonates and delivers real value.</p>
            </div>
            <div className="sm-features__card">
              <div className="sm-features__icon"><i className="ph ph-pencil-line"></i></div>
              <h3 className="sm-features__card-title">Write Your Manuscript</h3>
              <p className="sm-features__card-text">Master the outlining process, overcome writer&apos;s block, and write your first draft using a proven framework.</p>
            </div>
            <div className="sm-features__card">
              <div className="sm-features__icon"><i className="ph ph-note-pencil"></i></div>
              <h3 className="sm-features__card-title">Edit and Refine</h3>
              <p className="sm-features__card-text">Learn professional editing techniques, get feedback effectively, and polish your manuscript to publication quality.</p>
            </div>
            <div className="sm-features__card">
              <div className="sm-features__icon"><i className="ph ph-book-open-text"></i></div>
              <h3 className="sm-features__card-title">Design Your Book</h3>
              <p className="sm-features__card-text">Craft a compelling title, write descriptions that sell, and design a cover that captures attention on every shelf.</p>
            </div>
            <div className="sm-features__card">
              <div className="sm-features__icon"><i className="ph ph-rocket-launch"></i></div>
              <h3 className="sm-features__card-title">Publish and Launch</h3>
              <p className="sm-features__card-text">Navigate the publishing landscape, set up distribution, and execute a launch strategy that maximizes impact.</p>
            </div>
            <div className="sm-features__card">
              <div className="sm-features__icon"><i className="ph ph-megaphone"></i></div>
              <h3 className="sm-features__card-title">Market Your Book</h3>
              <p className="sm-features__card-text">Build your author platform, leverage your book for speaking and business, and create lasting momentum.</p>
            </div>
          </div>
        </div>

        {/* Table of Contents */}
        <div className="sm-toc">
          <p className="sm-toc__label">Read It Free</p>
          <h2 className="sm-toc__heading">Table of Contents</h2>
          <p className="sm-toc__sub">Read the entire Readora Method online for free, chapter by chapter.</p>
          <div className="sm-toc__parts">
            {tocParts.map((part) => (
              <div className="sm-toc__part" key={part.title}>
                <h3 className="sm-toc__part-title">{part.title}</h3>
                <ul className="sm-toc__chapters">
                  {part.chapters.map((ch) => (
                    <li key={ch.num}>
                      <a href={`/scribe-method-book/${ch.slug}`} className="sm-toc__chapter-link">
                        <span className="sm-toc__chapter-num">{ch.num}</span>
                        <span className="sm-toc__chapter-title">{ch.title}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>


        {/* Also Available */}
        <div className="sm-also">
          <div className="sm-also__box">
            <a
              href="/consult"
              target="_blank"
              rel="noopener noreferrer"
              className="sm-also__link"
            >
              <i className="ph ph-book"></i> Buy Physical Copy
            </a>
            <a
              href="/contact"
              className="sm-also__link"
            >
              <i className="ph ph-envelope"></i> Contact Us
            </a>
          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
