'use client'
import { useState } from 'react'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Gail Fay',
    position: 'Book Coach',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/GailFay.jpg?width=352&height=352&name=GailFay.jpg',
    bio: 'Gail joined Scribe in 2017 as a freelance scribe and has since written more than two dozen books using the Scribe Method. She oversees the Guided Author service, mentors new freelance Scribes, and continues to help authors turn their ideas into books.',
  },
  {
    name: 'Ian Claudius',
    position: 'Book Production Director',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/IanClaudius.jpg?width=352&height=352&name=IanClaudius.jpg',
    bio: 'Ian has been with Scribe since the beginning, having designed our very first book and hundreds more since. He is well-versed in every aspect of book design and production.',
  },
  {
    name: 'Ellie Cole',
    position: 'Head of Author Experience',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/EllieCole.jpg?width=352&height=352&name=EllieCole.jpg',
    bio: 'Ellie has been with Scribe since 2017, starting as a Publishing Apprentice and now leading the Author Experience department. She has helped over 100 authors publish their books.',
  },
  {
    name: 'Emily Sisto',
    position: 'Service Operations Manager',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/EmilySisto.jpg?width=352&height=352&name=EmilySisto.jpg',
    bio: 'Emily has been with Scribe since 2019, starting as a Publishing Manager and now managing both projects and operations for the Author Experience team.',
  },
  {
    name: 'Florencia Larraza',
    position: 'Book Production Admin',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/FlorenciaLarraza.jpg?width=352&height=352&name=FlorenciaLarraza.jpg',
    bio: 'Florencia joined Scribe in 2023 to support the Production team in the making of all of Scribe\'s books and campaigns. Prior to landing at Scribe, Florencia worked as a Digital Marketing PM for international accounts.',
  },
  {
    name: 'Elea Leguizamon',
    position: 'Author Experience Admin',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/EleaLeguizamon.jpg?width=352&height=352&name=EleaLeguizamon.jpg',
    bio: 'Elea joined Scribe in 2024 to support the Author Experience team. She assists Publishing Managers throughout the entire process, helping ensure a smooth, organized experience from start to finish.',
  },
  {
    name: 'Travis Stoliker',
    position: 'CEO',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/TravisStoliker.jpg?width=352&height=352&name=TravisStoliker.jpg',
    bio: 'Travis joined Scribe to lead our revenue growth initiatives. Travis is a serial entrepreneur with exits in the Web Hosting and Hospitality industry.',
  },
  {
    name: 'Emmy Koziak',
    position: 'Publishing Manager',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/EmmyKoziak.jpg?width=352&height=352&name=EmmyKoziak.jpg',
    bio: 'Emmy guides our authors through their publishing journeys. Prior to joining Scribe, Emmy had decades of experience working with the big personalities in the jewel and gem industry.',
  },
  {
    name: 'Rachael Williams',
    position: 'Publishing Manager',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/RachaelWilliams.jpg?width=352&height=352&name=RachaelWilliams.jpg',
    bio: 'Rachael guides our authors through their publishing journeys. Rachael had over 5 years of publishing experience prior to joining Scribe.',
  },
  {
    name: 'Kirstin Kevalaitis',
    position: 'Publishing Manager',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/KirstinKevalaitis.jpg?width=352&height=352&name=KirstinKevalaitis.jpg',
    bio: 'Before joining Scribe, Kirstin led marketing and PR initiatives focused on thought leadership, brand strategy, and executive visibility. Now, as a Publishing Manager, she partners closely with authors to support and guide them through every step of the publishing journey.',
  },
  {
    name: 'Jamie Cappellatti',
    position: 'Publishing Manager',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/JamieCappellatti.jpg?width=352&height=352&name=JamieCappellatti.jpg',
    bio: 'Jamie guides our authors through their publishing journeys. Prior to joining Scribe, Jamie worked in the medical world, building relationships and deploying solutions for doctors and surgeons all around the country.',
  },
  {
    name: 'Meg Ahrenberg',
    position: 'Publishing Manager',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/MegAhrenberg.jpg?width=352&height=352&name=MegAhrenberg.jpg',
    bio: 'Before joining Scribe, Meg spent over a decade in marketing and film and television production. At Scribe, she\'s your behind-the-scenes partner making sure your vision turns into a finished book you\'re proud of.',
  },
  {
    name: 'David Gwyn',
    position: 'Publishing Manager',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/DavidGwyn.jpg?width=352&height=352&name=DavidGwyn.jpg',
    bio: 'David guides our authors through their publishing journeys. Prior to joining Scribe, David started his career in finance before spending more than a decade in education.',
  },
  {
    name: 'Caroline Hough',
    position: 'Production Editor',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/CarolineHough.jpg?width=352&height=352&name=CarolineHough.jpg',
    bio: 'Caroline joined as a freelance QA Editor in early 2021. Caroline became a full-time employee in 2022, and works on every book that passes through QA.',
  },
  {
    name: 'Lex Statzer',
    position: 'Book Launch Manager',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/LexStatzer.jpg?width=352&height=352&name=LexStatzer.jpg',
    bio: 'Lex has been with Scribe since 2022 in various roles, including Publishing Coordinator and Publishing Specialist. Supporting the upload and distribution phase on all projects, Lex has successfully helped launch hundreds of Scribe titles.',
  },
  {
    name: 'Rasheedah Owolabi',
    position: 'Accountant',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/RasheedahOwolabi.jpg?width=352&height=352&name=RasheedahOwolabi.jpg',
    bio: 'Since joining Scribe in 2022, Rasheedah has risen to Accountant in the Finance Department. While her love of numbers is undeniable, Rasheedah\'s true passion lies in the creative realm.',
  },
  {
    name: 'Lianne Estabillo',
    position: 'Publishing Operations Assistant',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/LianneEstabillo.jpg?width=352&height=352&name=LianneEstabillo.jpg',
    bio: 'Lianne joined Scribe to support the Publishing Operations team. She focuses on book launch and publishing, helping coordinate the details that bring each title to market smoothly.',
  },
  {
    name: 'Winston Chirume',
    position: 'AI Automation Associate',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/WinstonChirume.jpg?width=352&height=352&name=WinstonChirume.jpg',
    bio: 'Winston joined Scribe as the AI Automation Associate. He builds and refines the systems that streamline how Scribe works, making everyday processes faster and more efficient.',
  },
  {
    name: 'Eric Jorgenson',
    position: 'Author In Residence',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/EricJorgenson.jpg?width=352&height=352&name=EricJorgenson.jpg',
    bio: 'Eric published two books with Scribe prior to becoming CEO. The Almanack of Naval Ravikant has sold over 1,000,000 copies, been translated into 30+ languages, and seen over 4,000,000 digital copies given away for free.',
  },
  {
    name: 'Sieva Kozinsky',
    position: 'Partner, Enduring Ventures',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/SievaXavier.jpg?width=352&height=352&name=SievaXavier.jpg',
    bio: 'Sieva Kozinsky co-founded multiple companies in the education space. Together with Xavier Helgesen, he manages Enduring Ventures, a long-term holding company and majority owner of Scribe.',
  },
  {
    name: 'Xavier Helgesen',
    position: 'Partner, Enduring Ventures',
    img: 'https://scribemedia.com/hs-fs/hubfs/images/team/SievaXavier.jpg?width=352&height=352&name=SievaXavier.jpg',
    bio: 'Xavier Helgesen has decades of experience in the publishing industry, having co-founded Better World Books in 2002. Together with Sieva Kozinsky, he manages Enduring Ventures, majority owner of Scribe.',
  },
  {
    name: 'Tucker Max',
    position: 'Co-Founder',
    img: 'https://scribemedia.com/hs-fs/hubfs/team-photos/tucker-max-headshot.jpg?width=352&height=352&name=tucker-max-headshot.jpg',
    bio: 'Scribe co-founder. Tucker does not currently have an official role with Scribe.',
  },
  {
    name: 'Zach Obront',
    position: 'Co-Founder',
    img: 'https://scribemedia.com/hs-fs/hubfs/team-photos/zach-obront-headshot.png?width=352&height=352&name=zach-obront-headshot.png',
    bio: 'Scribe co-founder. Zach does not currently have an official role with Scribe.',
  },
]

function getInitials(name) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0]?.toUpperCase() ?? ''
  const last = (parts.length > 1 ? parts[parts.length - 1][0] : parts[0]?.[1] ?? '')?.toUpperCase() ?? ''
  return first + last
}

function TeamCard({ member }) {
  const [expanded, setExpanded] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <div className="team-card">
      <div className="team-card__img-wrap">
        {imgError ? (
          <div className="team-card__initials">{getInitials(member.name)}</div>
        ) : (
          <img
            src={member.img}
            alt={member.name}
            className="team-card__img"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__position">{member.position}</p>
        <div className={expanded ? 'team-card__bio-full' : 'team-card__bio'}>{member.bio}</div>
        <button className="team-card__toggle" onClick={() => setExpanded(v => !v)}>
          {expanded ? 'Show less' : 'Read more'}
        </button>
      </div>
    </div>
  )
}

export default function OurTeam() {
  const [query, setQuery] = useState('')

  const filtered = query
    ? teamMembers.filter(m =>
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.position.toLowerCase().includes(query.toLowerCase())
      )
    : teamMembers

  return (
    <section className="team-page">
      <div className="team-page__header">
        <h1 className="team-page__heading font-playfair">The Scribe Team</h1>
        <p className="team-page__subheading">
          The team at Scribe is comprised of the best of two worlds — true domain experts from the world of traditional publishing, and operations professionals from a variety of hard-driving industries and roles.
        </p>
      </div>

      <div className="team-search-wrap">
        <span className="team-search-icon">🔍</span>
        <input
          type="text"
          className="team-search"
          placeholder="Search by name or role…"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <p className="team-page__count">
        {filtered.length} team member{filtered.length !== 1 ? 's' : ''}
      </p>

      <div className="team-grid">
        {filtered.map(member => (
          <TeamCard key={member.name} member={member} />
        ))}
      </div>

      <div className="team-page__cta">
        <h2 className="team-page__cta-heading">Ready to Start Your Book?</h2>
        <p className="team-page__cta-text">Schedule a consult with Scribe to map the right writing and publishing path for your goals.</p>
        <a href="#" className="team-page__cta-btn">Schedule a Consult</a>
      </div>
    </section>
  )
}
