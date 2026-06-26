import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: "When Birthday Cake Couldn't Sweeten the Storm | Scribe Media Blog",
  description:
    "A free excerpt from Ellisa Allen's book Before Forever. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/charles-daly-make-peace-or-die',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2021/04/SCR09167.jpg',
    title: 'Charles Daly\'s Life of Service Inspired a Book That Encourages People to Ask "What Can I Do For My Country?"',
    date: 'Apr 06, 2021',
  },
  {
    href: 'https://scribemedia.com/blog/david-allison-we-are-all-the-same-age-now',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2019/04/david-allison-1-700x406.jpg',
    title: 'How David Allison Used Scribe to Create a Wave of Media Interest and New Business with His Book Launch',
    date: 'Apr 18, 2019',
  },
  {
    href: 'https://scribemedia.com/blog/the-power-of-paradox-finding-meaning-in-contradictions',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2026/01/pexels-brettjordan-5138933-1.jpg',
    title: 'The Power of Paradox: Finding Meaning in Contradictions',
    date: 'Jan 28, 2026',
  },
]

export default function WhenBirthdayCakePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <article className="blog-post">

          <a href="/blog" className="blog-post__back">
            <i className="ph ph-arrow-left"></i> Back to Blog
          </a>

          <header className="blog-post__header">
            <div className="blog-post__tags">
              <a href="/blog/tag/book-bites" className="blog-post__tag">Book Bites</a>
            </div>

            <h1 className="blog-post__title">When Birthday Cake Couldn&rsquo;t Sweeten the Storm</h1>

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
                  <time dateTime="2026-05-07">May 07, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-towfiqu-barbhuiya-3440682-12065625.jpg?width=960&height=540"
            alt="Birthday cake with lit candles."
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/beforeforever">Before Forever</a> by Ellisa Allen.</em></p>

            <p>The buzzing of my phone pulled me from another late night&rsquo;s sleep, and when I finally squinted at the screen, it was almost noon and my oldest sister Jessica was calling from Oregon. She&rsquo;d be flying in next week for my twenty-first birthday, and I couldn&rsquo;t wait to see her. Birthdays in our family had always been sacred, thanks to my mom, but the best part was sharing the day with Meemaw. We were both born on December 10th, and every year we blew out candles on the same Elvis Presley cake with its pineapple and cream cheese frosting.</p>

            <p>This year, though, something felt off. Watching Meemaw fade after losing Papaw was breaking me in ways I didn&rsquo;t have words for, and on top of that, there was Austin. My boyfriend had grown distant in recent weeks, his texts shorter and his &ldquo;babe&rdquo; missing more often than not, and I kept telling myself I was reading too much into it.</p>

            <p>When Jessica arrived, the whole house came alive again, and we stayed up far too late telling stories the way only sisters can. Thursday brought our traditional family dinner, and everyone squeezed in around Meemaw&rsquo;s round table for chicken pot pie that had mysteriously become vegetable pot pie thanks to Nita&rsquo;s new wellness journey. We laughed until we cried. Papaw&rsquo;s empty chair ached, but I squeezed Meemaw&rsquo;s hand and whispered that he&rsquo;d be singing &ldquo;Happy Birthday&rdquo; from heaven, and when Nita carried out the cake with its candles blazing, our voices filled the room with the song Meemaw had learned from her own mother. Tradition, legacy, and love wrapped around us like a quilt.</p>

            <p>Austin sat beside me through it all, charming and teasing and brushing my shoulder with his, and I wanted so badly to believe everything was fine.</p>

            <p>After dinner, I pulled him out to the porch swing, where the stars stretched endlessly above us and the cold sharpened every breath. I needed to know where we stood, but the conversation went sideways fast. He accused me of being upset without telling him why, and when I tried to soften it, he pulled away anyway. His taillights disappeared into the dark, and I stood frozen on Meemaw&rsquo;s porch wrapped in a blanket, shaking from more than the cold.</p>

            <p>I had given myself completely to him, and I still wanted him, still wanted us, but the ache in my chest told me he wasn&rsquo;t in this the way I was.</p>

            <p>For weeks, I had been ignoring a quiet pull back toward God, clinging instead to memories of my old life in South Carolina and a longing for freedom without convictions. But standing alone under that sky, I finally looked up.</p>

            <p>&ldquo;Okay. I know You&rsquo;re here,&rdquo; I whispered. &ldquo;God, I need this. Please let us be okay.&rdquo;</p>

            <p>No answers came, just the same tight ache and the sense that something bigger than Austin was about to ask everything of me.</p>

            <p>…</p>

            <p><em>For more advice on navigating faith and love when life gets complicated, you can find <a href="https://geni.us/beforeforever">Before Forever</a> on Amazon.</em></p>

            <p><strong>Ellisa Allen</strong>, LCSW, founded the Asher House, a nonprofit serving youth and young adults in crisis. A specialist in trauma care and crisis response, she is a certified chaplain who has served alongside multiple law-enforcement agencies. Ellisa serves on the boards of the US Airlift Command and Liberty Oaks Academy and is a member of the Crisis International Response Team for disaster relief.</p>

            <p>She hosts the popular podcast <em>The Ellisa Show</em> on the Dear America Network. An in-demand speaker on faith, marriage, and healing, Ellisa is a devoted wife—married to her best friend since 2009—and a proud mom of four amazing kids.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhen-birthday-cake-couldnt-sweeten-the-storm&text=When+Birthday+Cake+Couldn%27t+Sweeten+the+Storm" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhen-birthday-cake-couldnt-sweeten-the-storm&title=When+Birthday+Cake+Couldn%27t+Sweeten+the+Storm" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhen-birthday-cake-couldnt-sweeten-the-storm" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
            </div>
          </div>

          <div className="blog-post__author-bio">
            <img src="https://scribemedia.com/hs-fs/hubfs/images/team/EricJorgenson.jpg?width=72&height=72&name=EricJorgenson.jpg" alt="Eric Jorgenson" className="blog-post__author-bio-avatar" width={72} height={72} />
            <div className="blog-post__author-bio-content">
              <span className="blog-post__author-bio-label">Written by</span>
              <h3 className="blog-post__author-bio-name">Eric Jorgenson</h3>
              <p className="blog-post__author-bio-text">CEO of Scribe Media. Author of The Almanack of Naval Ravikant.</p>
            </div>
          </div>

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
