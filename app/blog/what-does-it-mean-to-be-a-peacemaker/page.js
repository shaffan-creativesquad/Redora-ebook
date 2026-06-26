import '../blogpost.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'What Does It Mean to Be a Peacemaker? | Scribe Media Blog',
  description:
    "A free excerpt from Gilbert Martina's book Healthy Minds, Healthy Nation. Learn more from Scribe Media's expert nonfiction writing, publishing, and book marketing team.",
}

const relatedPosts = [
  {
    href: 'https://scribemedia.com/blog/listening-to-the-four-voices-of-strategy',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2026/01/Screenshot-2026-01-29-at-12.23.20-PM.png',
    title: 'Listening to the Four Voices of Strategy',
    date: 'Jan 29, 2026',
  },
  {
    href: '/blog/the-myth-of-fear-why-people-really-snitch',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2026/book-bites/pexels-max-flinterman-225455-715425.jpg',
    title: 'The Myth of Fear: Why People Really Snitch',
    date: 'Mar 05, 2026',
  },
  {
    href: 'https://scribemedia.com/blog/the-rational-case-for-optimism',
    img: 'https://244422516.fs1.hubspotusercontent-na2.net/hubfs/244422516/blog-featured/2026/01/pexels-faikackmerd-1025469.jpg',
    title: 'The Rational Case for Optimism',
    date: 'Jan 28, 2026',
  },
]

export default function WhatDoesItMeanToBeAPeacemakerPage() {
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

            <h1 className="blog-post__title">What Does It Mean to Be a Peacemaker?</h1>

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
                  <time dateTime="2026-03-19">March 19, 2026</time>
                  <span className="blog-post__meta-sep"> · </span>
                  <span className="blog-post__read-time">3 min read</span>
                </span>
              </div>
            </div>
          </header>

          <img
            src="https://scribemedia.com/hs-fs/hubfs/pexels-cottonbro-6814536-1.jpg?width=960&height=540"
            alt="Argument"
            className="blog-post__featured-image"
            width={960}
            height={540}
          />

          <div className="blog-post__content">
            <p><em>The following is adapted from <a href="https://geni.us/healthymindshealthynat">Healthy Minds, Healthy Nation</a> by Gilbert Martina.</em></p>

            <p>Peace is not something that simply happens to us. It is something we choose, practice, and sometimes fight for, and that distinction matters more than most people realize.</p>

            <p>Being a peacemaker means committing to understand others before worrying about being understood yourself. It means anchoring your actions in the general interest rather than personal gain, and choosing to live in a spirit of oneness rather than ego. Peacemakers are not passive observers. They are active, gentle, patient, and firmly grounded in truth.</p>

            <p>This lesson did not come from a textbook. It came from a playground in Cura&ccedil;ao, where, as a kindergartner, I witnessed a boy being held down and humiliated by three classmates and stepped forward without hesitation. Armed only with questions and my mother&rsquo;s quiet wisdom, I turned a scene of cruelty into a conversation about why we come to school in the first place: to learn, to talk, and to help each other. The boys listened. They let him go.</p>

            <p>That same instinct carried forward into my adult life. Years later, leading a team of twenty professionals through a high-stakes software project that had gone off the rails, I introduced a simple but powerful tool borrowed from indigenous tradition: the talking stick. With a pen standing in as the stick, team members took turns speaking while everyone else listened, not just with their ears but with their hearts. The result? A room full of people who had been yelling at each other transformed into a focused group ready to put in weekend hours to meet the deadline. The project launched on time.</p>

            <p>These lessons were also tested at home, in the most personal of circumstances. At thirteen years old, I witnessed my father strike my mother, and the family separation that followed forced me to reckon with something far more painful than a playground dispute. Yet even across the thirty-plus years of distance that followed, my story ultimately bends toward forgiveness. Before my father passed away in 2023, we reconciled, spending the final years of his life as close friends.</p>

            <p>Our lives are like a train. People board and people leave, and we never know when any stop will be the last. The goal is to make the ride as meaningful as possible for everyone on it.</p>

            <hr />

            <p><em>For more advice on building peace within yourself, your relationships, and your community, you can find <a href="https://geni.us/healthymindshealthynat">Healthy Minds, Healthy Nation</a> on Amazon.</em></p>

            <p><strong>Gilbert Bernardo Martina</strong> is founder of the upcoming &ldquo;Blenchi Sanctuary,&rdquo; a spiritual wellness center that helps people transform their wounds into wisdom. He trained with Alberto Villoldo and Marcela Lobos at Four Winds Society, following the ancient shamanic healing teaching of the Q&rsquo;ero from Peru. Born and raised on the island of Cura&ccedil;ao and educated in the Netherlands, Martina holds master&rsquo;s degrees in chemical engineering and business administration from the University of Amsterdam and Webster University in Leiden. He is married to his queen, Chantal Martina Seferina. Together, they have five children: Jairzinho, Jorzinho, Aimee, Antoine, and Angele.</p>
          </div>

          <div className="blog-post__footer">
            <div className="blog-post__footer-tags">
              <a href="/blog/tag/book-bites" className="blog-post__footer-tag">Book Bites</a>
            </div>
            <div className="blog-post__share">
              <span className="blog-post__share-label">Share</span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhat-does-it-mean-to-be-a-peacemaker&text=What+Does+It+Mean+to+Be+a+Peacemaker%3F" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on X"><i className="ph ph-x-logo"></i></a>
              <a href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhat-does-it-mean-to-be-a-peacemaker&title=What+Does+It+Mean+to+Be+a+Peacemaker%3F" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on LinkedIn"><i className="ph ph-linkedin-logo"></i></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fscribemedia.com%2Fblog%2Fwhat-does-it-mean-to-be-a-peacemaker" target="_blank" rel="noopener noreferrer" className="blog-post__share-link" aria-label="Share on Facebook"><i className="ph ph-facebook-logo"></i></a>
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
                <a
                  key={post.href}
                  href={post.href}
                  className="blog-post__related-card"
                  target={post.href.startsWith('/') ? undefined : '_blank'}
                  rel={post.href.startsWith('/') ? undefined : 'noopener noreferrer'}
                >
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
