import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: "Step Inside the Brooklyn Paramount's Roaring 1928 Debut | Scribe Media Blog",
  description:
    "A free excerpt from Michael Hittman's book The Brooklyn Paramount Theatre. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/part-4-18-prove-strategies-to-boost-your-book-sales',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2024/12/18StrategiesBookSales.jpg',
    title: 'PART 4: 18 Proven Strategies to Boost Your Book Sales',
    date: 'Dec 23, 2024',
  },
  {
    href: 'https://scribemedia.com/blog/how-a-small-inventors-patents-may-prove-apple-pay-was-built-on-stolen-ideas',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-shvetsa-4226270.jpg',
    title: "How a Small Inventor's Patents May Prove Apple Pay Was Built on Stolen Ideas",
    date: 'Apr 15, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/inclusive-practices-that-close-the-wage-gap',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/pexels-edmond-dantes-8068836.jpg',
    title: 'Inclusive Practices That Close the Wage Gap',
    date: 'May 21, 2026',
  },
]

export default function BrooklynParamountPage() {
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

            <h1 className="blog-post__title">Step Inside the Brooklyn Paramount&rsquo;s Roaring 1928 Debut</h1>

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
                  <time dateTime="2026-05-28">May 28, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-hyrlf-meng-317253942-18413963.jpg?width=960&height=540"
            alt="Step Inside the Brooklyn Paramount's Roaring 1928 Debut"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/thebrooklynparamountT">The Brooklyn Paramount Theatre</a> by Michael Hittman.</em></p>

            <p>It&rsquo;s November 24, 1928. The marquee blazes across Flatbush Avenue, the crowd shoulders through the lobby in furs and fedoras, and I&rsquo;m pulling you straight into the velvet-rope opening night of the Brooklyn Paramount Theatre, the first movie palace on Earth built to exhibit &ldquo;all dialogue films.&rdquo;</p>

            <p>The picture chosen to christen this temple of cinema? <em>Manhattan Cocktail</em>. Ironic, considering it&rsquo;s a Silent Film with only two fewer songs than <em>The Jazz Singer</em>. Paramount billed it as a Talkie anyway, daring you not to notice the difference.</p>

            <p>The film opens with a phantom ballet, dancers gliding across the screen in ancient Greek costume, because the story is loosely lifted from the myth of Ariadne and the Minotaur. The director is Dorothy Arzner, the first woman in Hollywood to crack that ceiling, and her partner Marion Morgan choreographed the Prologue you&rsquo;re watching live on our stage before the picture even rolls.</p>

            <p>The plot pulls you into &ldquo;monstrous Manhattan.&rdquo; Three upstate college kids chase fame on the Great White Way. Babs, played by Nancy Carroll, an Irish ingenue born in Hell&rsquo;s Kitchen, wants one last fling before bourgeois suburban life closes in. She belts &ldquo;Gotta Be Good,&rdquo; a song so risqué it would never have survived the Production Code waiting two years up the road. Her fiancé Fred, played by rising star Richard Arlen, follows her into the city. Their best friend Bob takes up with the predatory wife of a Russian-born Broadway producer named Renov, a leering Minotaur in evening dress who devours aspiring actresses for sport.</p>

            <p>The story turns dark before the final reel. Bob, rejected and ridiculed by Renov, climbs a ladder in the flies and leaps to his death. Babs, cornered in Renov&rsquo;s office during an attempted assault, smashes a fire alarm with a paperweight and brings the brigade hosing through the door.</p>

            <p>I sampled the reviews from coast to coast. The <em>Brooklyn Eagle</em> warned young theatergoers to stay clear of Manhattan altogether. The <em>Los Angeles Times</em> called it &ldquo;one of the most delightful of recent Paramount pictures&rdquo; and marveled that you could actually hear the taps on Nancy Carroll&rsquo;s chorus shoes. The <em>New York Times</em> sniffed that Arzner &ldquo;should be ashamed&rdquo; and dubbed the film &ldquo;a synthetic cocktail without the cherry.&rdquo; <em>Variety</em>&rsquo;s Bige tore into it, then admitted the Prologue cost more than the picture itself.</p>

            <p>What none of them mention is the room you&rsquo;re sitting in: a 4,000-seat shrine of gold leaf, velvet, and atmospheric stars overhead, designed to make Brooklyn feel like the center of the universe. The Vaudeville acts are still warming up the bill. The Wurlitzer is rumbling under your seat. Prohibition rules the streets outside, and somewhere in midtown, a bartender is shaking a real Manhattan in a brand-new Art Deco martini glass.</p>

            <p>This is the night the palace opened. And I&rsquo;ve barely cracked the door.</p>

            <p>…</p>

            <p><em>For more stories on the Brooklyn Paramount&rsquo;s golden age, you can find <a href="https://geni.us/thebrooklynparamountT">The Brooklyn Paramount Theatre</a> on Amazon.</em></p>

            <p><strong>Michael Hittman</strong> is an anthropologist and professor emeritus at Long Island University, home of the Brooklyn Paramount Theatre. He has authored numerous academic articles in leading journals and books about Native Americans, including Wovoka and the Ghost Dance. He has also conducted research and taught on popular culture and mass media. His anthropological-like study of the Brooklyn Paramount, the world&rsquo;s first motion picture theatre built expressly for the &ldquo;Talkies,&rdquo; channels his background in Jazz as an NPR radio host in recounting the Theatre&rsquo;s fabled history. He lives with his wife in Manhattan and Southold, New York.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fstep-inside-the-brooklyn-paramounts-roaring-1928-debut&text=Step+Inside+the+Brooklyn+Paramount%27s+Roaring+1928+Debut" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fstep-inside-the-brooklyn-paramounts-roaring-1928-debut&title=Step+Inside+the+Brooklyn+Paramount%27s+Roaring+1928+Debut" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fstep-inside-the-brooklyn-paramounts-roaring-1928-debut" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
