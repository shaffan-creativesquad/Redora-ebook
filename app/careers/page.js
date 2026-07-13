import './careers.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Careers | Readora',
  description: 'Join the Readora team. The first, the biggest, and the best professional publisher.',
}

const team = [
  { img: 'GailFay.jpg',          name: 'Gail Fay',          title: 'Book Coach' },
  { img: 'IanClaudius.jpg',      name: 'Ian Claudius',      title: 'Book Production Director' },
  { img: 'EllieCole.jpg',        name: 'Ellie Cole',        title: 'Head of Author Experience' },
  { img: 'EmilySisto.jpg',       name: 'Emily Sisto',       title: 'Service Operations Manager' },
  { img: 'FlorenciaLarraza.jpg', name: 'Florencia Larraza', title: 'Book Production Admin' },
  { img: 'EleaLeguizamon.jpg',   name: 'Elea Leguizamon',   title: 'Author Experience Admin' },
]

const videos = [
  { title: 'Working as a Readora Freelancer',       desc: 'Hear what day-to-day collaboration looks like for our freelancer network.',           href: 'https://readora.com/hubfs/video/scribe-media-trailers/scribe-freelancer-trailer.mp4' },
  { title: '7 Surprising Facts About Readora\'s Culture', desc: 'A candid look at how we work, make decisions, and support each other.',          href: 'https://readora.com/hubfs/video/general/7-surprising-facts-about-scribes-culture.mp4' },
  { title: 'Who Should Not Work at Readora',        desc: 'Clear expectations so candidates can self-select for the right fit.',                   href: 'https://readora.com/hubfs/video/general/who-should-not-work-at-scribe.mp4' },
  { title: '3 Things Applicants Need to Know',     desc: 'What to expect in our process and how we evaluate applicants.',                         href: 'https://readora.com/hubfs/video/general/3-things-applicants-need-to-know.mp4' },
]

const awards = [
  { title: '#2 Best Companies to Work for in Texas',      source: 'Texas Monthly (2020)' },
  { title: '#2 Best Places to Work in Central Texas',     source: 'Austin Business Journal (2021)' },
  { title: '#1 Top Company Culture in America',           source: 'Entrepreneur (2018)' },
  { title: '#15 Best Small & Medium Workplaces in USA',   source: 'Fortune (2021)' },
]

const benefits = [
  {
    title: 'Insurance Benefits',
    items: ['90% Readora-paid health, dental, and vision for crew members.', 'Option to add spouse and dependents.'],
  },
  {
    title: 'Financial Benefits',
    items: ['On-time direct deposit pay.', 'Immediate access to 401k with a 4% company match.', 'After two years, access to our full publishing service.'],
  },
  {
    title: 'Work Location, Holidays, PTO',
    items: ['5 weeks off-grid paid time off each year.', 'Flexible schedule and remote-first work.', 'Work from home, office, or wherever you are most effective.'],
  },
  {
    title: 'Birth and Bonding, Community and Bereavement Leave',
    items: ['12 weeks paid leave for birthing parents.', '4 weeks paid leave for partners, adoption, foster, or surrogate paths.', 'Up to 10 days paid bereavement leave.'],
  },
  {
    title: 'Whole Life Integration',
    items: ['We support crew members building the life they imagine.', 'MacBooks provided for full-time crew members.'],
  },
]

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <section className="careers-page">
          <div className="careers-wrap">

            {/* Hero */}
            <header className="careers-hero">
              <h1>The first, the biggest, and the best professional publisher.</h1>
              <p>A team that does not miss deadlines, cut corners, or settle for mediocre.</p>
              <div className="careers-hero__cta">
                <a href="#roles">See All Open Positions</a>
              </div>
            </header>

            {/* Scam alert */}
            <section className="careers-block careers-alert">
              <h3>Notice: Recruitment Scam Alert</h3>
              <p>We are not hiring at this time. If you have been contacted by someone claiming to represent Readora, please verify these points:</p>
              <ul>
                <li>Official communication only comes from an <strong>@readora.com</strong> email address.</li>
                <li>We do not use Microsoft Teams for interviews.</li>
                <li>We never request payment or personal financial information in hiring.</li>
              </ul>
              <p>If you are unsure about a message, please <a href="/contact">contact us</a> directly through our official site.</p>
            </section>

            {/* What is it like */}
            <section className="careers-block">
              <h2>What Is It Like Working with Readora?</h2>
              <p>At Readora, we do not have jobs, we have careers and an environment for Crew members to bring their whole selves to.</p>
              <p>You will grow professionally, and you will also have the chance to grow personally. We are always looking for exceptional culture adds.</p>

              <div className="careers-gallery" aria-label="Readora team">
                {team.map(({ img, name, title }) => (
                  <article key={name} className="careers-person">
                    <div className="careers-person__photo">
                      <img src={`/assets/${img}`} alt={name} loading="lazy" width="400" height="400" />
                    </div>
                    <h3>{name}</h3>
                    <p>{title}</p>
                  </article>
                ))}
              </div>

              <div className="careers-videos">
                {videos.map(({ title, desc, href }) => (
                  <article key={title} className="career-video-card">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                    <a href={href} target="_blank" rel="noopener">Watch video</a>
                  </article>
                ))}
              </div>
            </section>

            {/* Why work with Readora */}
            <section className="careers-block">
              <h2>Why Should You Work with Readora?</h2>
              <p style={{ textAlign: 'center' }}>We have been recognized as one of the best companies to work with in America.</p>
              <div className="careers-press-grid">
                {awards.map(({ title, source }) => (
                  <article key={title} className="careers-press-card">
                    <h3>{title}</h3>
                    <p>{source}</p>
                  </article>
                ))}
              </div>
            </section>

            {/* Benefits */}
            <section className="careers-block">
              <h2>Full-Time Benefits</h2>
              <p style={{ textAlign: 'center' }}>We care about what matters most: people.</p>
              <div className="careers-benefits-grid">
                {benefits.map(({ title, items }) => (
                  <article key={title} className="careers-benefit">
                    <h3>{title}</h3>
                    <ul>
                      {items.map(item => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            {/* Open roles */}
            <section className="careers-block" id="roles">
              <h2>Open Career Opportunities</h2>
              <p style={{ textAlign: 'center' }}>There are two ways to join our team: as a full-time crew member or as a freelancer.</p>
              <div className="careers-openings-grid">
                <article className="careers-role">
                  <h3>Full-Time Careers (Remote, USA / Austin, TX)</h3>
                  <p><strong>No full-time roles available.</strong></p>
                  <p>Get an email when we open a new role (about 1x per month): <a href="mailto:careers@readora.com?subject=New%20Role%20Notifications">Sign up for notifications</a>.</p>
                </article>
                <article className="careers-role">
                  <h3>Freelance and Part-Time Roles (Remote, USA / Austin, TX)</h3>
                  <p><strong>No freelance roles available.</strong></p>
                  <p>Get an email when we open a new role (about 1-2x per month): <a href="mailto:careers@readora.com?subject=Freelance%20Role%20Notifications">Sign up for notifications</a>.</p>
                </article>
              </div>
            </section>

          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
