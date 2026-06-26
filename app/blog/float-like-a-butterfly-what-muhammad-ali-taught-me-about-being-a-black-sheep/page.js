import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Float Like a Butterfly: What Muhammad Ali Taught Me About Being a Black Sheep | Scribe Media Blog',
  description:
    "A free excerpt from Dr. Thom LeBeau's book The Black Sheep Advantage. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/story-book',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2018/12/How-Much-of-Your-Story-Should-Be-in-Your-Book_Thumbnail.jpg',
    title: 'How Much of Your Story Should Be in Your Book?',
    date: 'Dec 03, 2018',
  },
  {
    href: 'https://scribemedia.com/blog/nikki-barua-beyond-barriers',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2021/03/Office.jpg',
    title: 'Nikki Barua Clarified Her Mission and Launched A Global Platform After Writing Her Book with Scribe',
    date: 'Jan 28, 2022',
  },
  {
    href: 'https://scribemedia.com/blog/brian-scott-the-reality-revolution',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2021/09/Brian_B.jpg',
    title: 'How Brian Scott Used Scribe to Create His Legacy and Transform the Lives of Thousands',
    date: 'Sep 10, 2021',
  },
]

export default function FloatLikeAButterflyPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <article className="blog-post">

          <a href="/blog" className="blog-post__back">
            <i className="ph ph-arrow-left"></i> Back to Blog
          </a>

          {/* Header */}
          <header className="blog-post__header">
            <div className="blog-post__tags">
              <a href="/blog/tag/book-bites" className="blog-post__tag">Book Bites</a>
            </div>

            <h1 className="blog-post__title">Float Like a Butterfly: What Muhammad Ali Taught Me About Being a Black Sheep</h1>

            <div className="blog-post__meta">
              <img
                src="https://scribemedia.com/hs-fs/hubfs/images/team/EricJorgenson.jpg?width=48&height=48&name=EricJorgenson.jpg"
                alt="Eric Jorgenson"
                className="blog-post__author-avatar"
                width={48}
                height={48}
              />
              <div className="blog-post__meta-text">
                <span className="blog-post__author-name">Eric Jorgenson</span>
                <span className="blog-post__date">
                  <time dateTime="2026-06-17">June 17, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">4 min read</span>
                </span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-eberhardgross-32707948.jpg?width=960&height=540"
            alt="Float Like a Butterfly: What Muhammad Ali Taught Me About Being a Black Sheep"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          {/* Content */}
          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/TheBlackSheepAdvantage">The Black Sheep Advantage</a> by Dr. Thom LeBeau.</em></p>

            <p>When I met Muhammad Ali at Midway Airport in Chicago in 1990, I wasn&rsquo;t sure what to expect. He was forty-eight, sitting alone, and looked exactly as impressive in person as you&rsquo;d imagine. His hands were enormous. Even with Parkinson&rsquo;s beginning to take hold of his body, his physical presence was undeniable.</p>

            <p>I was a resident physician at the time, traveling with a fellow resident. We worked up the nerve to walk over and introduce ourselves. Ali was gracious, unhurried, and genuinely curious about us. He asked where we were headed, listened to our answer, and signed the back of a religious brochure: &ldquo;Best of luck, Thom. Muhammad Ali.&rdquo; Nothing splashy. Nothing to prove. His life path had already done the proving.</p>

            <p>Ali is one of the most powerful examples of what I&rsquo;ve come to think of as the Black Sheep Advantage. He refused to fight conventionally, and conventional wisdom never defeated him. He upset the feared Sonny Liston for the heavyweight title as a clear underdog. Two days later, he announced his conversion to Islam and his new name. Then he refused the Vietnam draft, and the establishment made him pay: his championship was stripped, he was banned from boxing for over three years during his prime, and he was sentenced to a five-year prison term. He stood his ground, and it cost him plenty in the short term.</p>

            <p>But here&rsquo;s what Ali also understood: <strong>not every battle is worth entering.</strong></p>

            <p>In the 1950s, psychologist Solomon Asch conducted a series of experiments on conformity. Subjects placed in groups where everyone else gave an obviously wrong answer would go along with the crowd, even when they clearly knew better. The pull to fit in is that strong, and it shows up across cultures. For a black sheep, this matters. You cannot count on people to stand with you when a group turns against you. In fact, they will likely join in.</p>

            <p>Ali knew this. His fancy footwork wasn&rsquo;t just a boxing strategy; it was a philosophy. You don&rsquo;t have to rise to every provocation. Humor, diplomacy, and knowing when to quietly exit before things turn toxic are all legitimate forms of protection. There are absolutely moments to stand your ground, especially on vital issues. <strong>But standing up for something you believe in doesn&rsquo;t always mean getting in the ring.</strong></p>

            <p>Sometimes the wisest move is temporary conformity. Keeping a job, preserving a relationship, protecting someone&rsquo;s well-being: these can justify going along, at least until you can extricate yourself on your own terms. Black sheep tend to see choices more clearly than most, but that clarity only becomes an advantage when paired with discernment.</p>

            <p><strong>The goal isn&rsquo;t to win every confrontation. It&rsquo;s to conserve yourself for what matters most: your values, your vision, and the version of yourself you&rsquo;re working to become.</strong></p>

            <p>Ali wanted to be remembered not as a boxer, but as a humanitarian. He stayed true to that vision, and in doing so, he became exactly who he meant to be.</p>

            <p>…</p>

            <p><em>For more advice on embracing your black sheep nature and navigating conformity on your own terms, you can find <a href="https://geni.us/TheBlackSheepAdvantage">The Black Sheep Advantage</a> on Amazon.</em></p>

            <p><strong>Dr. Thom LeBeau</strong> is a physician, entrepreneur, and unapologetic black sheep who has spent decades helping patients and colleagues navigate pain, healing, and reinvention. Trained as a podiatric surgeon, Thom founded a multi-clinic medical practice from scratch and later exited the business, starting two additional businesses and losing almost everything. He rebuilt his life by finally aligning with who he really is. A small-town kid from Michigan&rsquo;s Upper Peninsula, Thom has been the married teenager, sensible wastewater plant operator, medical student with a family, overextended practice owner, limo driver after financial collapse, and doctor who found a way back. Today he lives and practices in Florida with his resilient, dynamic wife and intuitive business partner. He writes and speaks about the last third of life and black-sheep resilience and creates tools that help people live on their own terms.</p>
          </div>

          {/* Footer: Tags + Share */}
          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Ffloat-like-a-butterfly-what-muhammad-ali-taught-me-about-being-a-black-sheep&text=Float+Like+a+Butterfly%3A+What+Muhammad+Ali+Taught+Me+About+Being+a+Black+Sheep"
                target="_blank"
                rel="noopener noreferrer"
                className="blog-post__share-link"
                aria-label="Share on X"
              >
                <i className="ph ph-x-logo"></i>
              </a>
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Ffloat-like-a-butterfly-what-muhammad-ali-taught-me-about-being-a-black-sheep&title=Float+Like+a+Butterfly%3A+What+Muhammad+Ali+Taught+Me+About+Being+a+Black+Sheep"
                target="_blank"
                rel="noopener noreferrer"
                className="blog-post__share-link"
                aria-label="Share on LinkedIn"
              >
                <i className="ph ph-linkedin-logo"></i>
              </a>
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Ffloat-like-a-butterfly-what-muhammad-ali-taught-me-about-being-a-black-sheep"
                target="_blank"
                rel="noopener noreferrer"
                className="blog-post__share-link"
                aria-label="Share on Facebook"
              >
                <i className="ph ph-facebook-logo"></i>
              </a>
            </div>
          </div>

          {/* Author Bio */}
          <div className="blog-post__author-bio">
            <img
              src="https://scribemedia.com/hs-fs/hubfs/images/team/EricJorgenson.jpg?width=72&height=72&name=EricJorgenson.jpg"
              alt="Eric Jorgenson"
              className="blog-post__author-bio-avatar"
              width={72}
              height={72}
            />
            <div className="blog-post__author-bio-content">
              <span className="blog-post__author-bio-label">Written by</span>
              <h3 className="blog-post__author-bio-name">Eric Jorgenson</h3>
              <p className="blog-post__author-bio-text">CEO of Scribe Media. Author of The Almanack of Naval Ravikant.</p>
            </div>
          </div>

          {/* Related Posts */}
          <div className="blog-post__related">
            <h2 className="blog-post__related-title">More from The Scribe Blog</h2>
            <div className="blog-post__related-grid">
              {relatedPosts.map((post) => (
                <a key={post.href} href={post.href} className="blog-post__related-card" target="_blank" rel="noopener noreferrer">
                  <img src={post.img} alt={post.title} className="blog-post__related-img" loading="lazy" width={960} height={600} />
                  <div className="blog-post__related-body">
                    <h3 className="blog-post__related-card-title">{post.title}</h3>
                    <span className="blog-post__related-card-meta">{post.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="blog-post__cta">
            <h2 className="blog-post__cta-title">Ready to Write Your Book?</h2>
            <p className="blog-post__cta-text">Scribe has helped 2,000+ authors turn their ideas into published books. Schedule a free consult to get started.</p>
            <a href="/consult" className="blog-post__cta-btn">Schedule a Consult</a>
          </div>

        </article>

        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
