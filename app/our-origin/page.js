import './our-origin.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Our Origin Story | Readora',
  description: 'How Tucker Max and Zach Obront launched Book In A Box in 2014 — and built it into Readora, the first professional publisher for thought leaders.',
}

export default function OurOriginPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <section className="origin-page">
          <div className="origin-shell">

            <p className="origin-kicker">Our Origin Story</p>
            <h1 className="origin-title">It Began with a Question</h1>
            <p className="origin-sub">By Tucker Max, Readora Co-Founder and 4x New York Times Bestselling Author</p>

            {/* Founders */}
            <div className="origin-founders">
              <figure className="origin-founder">
                <img
                  src="/assets/tucker-max-headshot.jpg"
                  alt="Tucker Max"
                  loading="lazy"
                  width="960"
                  height="600"
                />
                <figcaption className="origin-founder__meta">Tucker Max, Co-Founder</figcaption>
              </figure>
              <figure className="origin-founder">
                <img
                  src="/assets/zach-obront-headshot.png"
                  alt="Zach Obront"
                  loading="lazy"
                  width="960"
                  height="600"
                />
                <figcaption className="origin-founder__meta">Zach Obront, Co-Founder</figcaption>
              </figure>
            </div>

            {/* Stats */}
            <div className="origin-grid">
              <article className="origin-stat">
                <p className="origin-stat__number">2014</p>
                <p className="origin-stat__label">Book In A Box Launched</p>
              </article>
              <article className="origin-stat">
                <p className="origin-stat__number">8</p>
                <p className="origin-stat__label">First Sales Before Official Launch</p>
              </article>
              <article className="origin-stat">
                <p className="origin-stat__number">$200K+</p>
                <p className="origin-stat__label">Revenue in First Two Months</p>
              </article>
            </div>

            {/* Story */}
            <div className="origin-story">
              <p>It started with a simple question from Melissa Gonzalez: "I want to author a book, but I don't have the time to write it and the normal publishing process is too frustrating. Is there another way?"</p>
              <p>For weeks, I obsessed over the problem. Then the solution hit me: what if we could get an author's ideas out by talking instead of forcing them to sit at a keyboard for hundreds of hours?</p>
              <p>I brought Zach Obront into the conversation, and we tested the process together. It worked. In August 2014, we launched Book In A Box, now Readora, to take authors from idea to professionally published book through a clear, repeatable process.</p>
            </div>

            {/* Origin cards */}
            <div className="origin-sections">
              <article className="origin-card">
                <h2>The Core Insight</h2>
                <p>There is no way to create a great book without doing deep thinking. But the thinking does not have to happen at a keyboard.</p>
                <p>Interview-first writing lets experts keep their ideas and voice while removing the biggest bottleneck: finding time to draft.</p>
              </article>
              <article className="origin-card">
                <h2>From Then to Now</h2>
                <p><strong>2014:</strong> Book In A Box launches after early product-market fit signals.</p>
                <p><strong>Growth:</strong> The process is refined across thousands of author engagements.</p>
                <p><strong>Today:</strong> As Readora, we help experts write, publish, and market books while keeping full ownership.</p>
              </article>
            </div>

            {/* CTA */}
            <div className="origin-cta">
              <a href="/consult" className="origin-cta__button">Schedule a Consult</a>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
