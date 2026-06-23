'use client'
import { useState } from 'react'

const team = [
  { img: '/assets/GailFay.jpg',               name: 'Gail Fay',           position: 'Book Coach',                       bio: 'Gail joined Scribe in 2017 as a freelance scribe and has since written more than two dozen books using the Scribe Method. She oversees the Guided Author service, mentors new freelance Scribes, and continues to help authors turn their ideas into books.' },
  { img: '/assets/IanClaudius.jpg',            name: 'Ian Claudius',       position: 'Book Production Director',         bio: 'Ian has been with Scribe since the beginning, having designed our very first book and hundreds more since. He is well-versed in every aspect of book design and production.' },
  { img: '/assets/EllieCole.jpg',              name: 'Ellie Cole',         position: 'Head of Author Experience',        bio: 'Ellie has been with Scribe since 2017, starting as a Publishing Apprentice and now leading the Author Experience department. She has helped over 100 authors publish their books.' },
  { img: '/assets/EmilySisto.jpg',             name: 'Emily Sisto',        position: 'Service Operations Manager',       bio: 'Emily has been with Scribe since 2019, starting as a Publishing Manager and now managing both projects and operations for the Author Experience team.' },
  { img: '/assets/FlorenciaLarraza.jpg',       name: 'Florencia Larraza',  position: 'Book Production Admin',            bio: 'Florencia joined Scribe in 2023 to support the Production team in the making of all of Scribe\'s books and campaigns. Prior to landing at Scribe, Florencia worked as a Digital Marketing PM for international accounts.' },
  { img: '/assets/EleaLeguizamon.jpg',         name: 'Elea Leguizamon',    position: 'Author Experience Admin',          bio: 'Elea joined Scribe in 2024 to support the Author Experience team. She assists Publishing Managers throughout the entire process, helping ensure a smooth, organized experience from start to finish.' },
  { img: '/assets/TravisStoliker.jpg',         name: 'Travis Stoliker',    position: 'CEO',                              bio: 'Travis joined Scribe to lead our revenue growth initiatives. Travis is a serial entrepreneur with exits in the Web Hosting and Hospitality industry.' },
  { img: '/assets/EmmyKoziak.jpg',             name: 'Emmy Koziak',        position: 'Publishing Manager',               bio: 'Emmy guides our authors through their publishing journeys. Prior to joining Scribe, Emmy had decades of experience working with the big personalities in the jewel and gem industry.' },
  { img: '/assets/RachaelWilliams.jpg',        name: 'Rachael Williams',   position: 'Publishing Manager',               bio: 'Rachael guides our authors through their publishing journeys. Rachael had over 5 years of publishing experience prior to joining Scribe.' },
  { img: '/assets/KirstinKevalaitis.jpg',      name: 'Kirstin Kevalaitis', position: 'Publishing Manager',               bio: 'Before joining Scribe, Kirstin led marketing and PR initiatives focused on thought leadership, brand strategy, and executive visibility. Now, as a Publishing Manager, she partners closely with authors to support and guide them through every step of the publishing journey.' },
  { img: '/assets/JamieCappellatti.jpg',       name: 'Jamie Cappellatti',  position: 'Publishing Manager',               bio: 'Jamie guides our authors through their publishing journeys. Prior to joining Scribe, Jamie worked in the medical world, building relationships and deploying solutions for doctors and surgeons all around the country.' },
  { img: '/assets/MegAhrenberg.jpg',           name: 'Meg Ahrenberg',      position: 'Publishing Manager',               bio: 'Before joining Scribe, Meg spent over a decade in marketing and film and television production. At Scribe, she\'s your behind-the-scenes partner making sure your vision turns into a finished book you\'re proud of.' },
  { img: '/assets/DavidGwyn.jpg',              name: 'David Gwyn',         position: 'Publishing Manager',               bio: 'David guides our authors through their publishing journeys. Prior to joining Scribe, David started his career in finance before spending more than a decade in education.' },
  { img: '/assets/CarolineHough.jpg',          name: 'Caroline Hough',     position: 'Production Editor',                bio: 'Caroline joined as a freelance QA Editor in early 2021. Caroline became a full-time employee in 2022, and works on every book that passes through QA.' },
  { img: '/assets/LexStatzer.jpg',             name: 'Lex Statzer',        position: 'Book Launch Manager',              bio: 'Lex has been with Scribe since 2022 in various roles, including Publishing Coordinator and Publishing Specialist. Supporting the upload and distribution phase on all projects, Lex has successfully helped launch hundreds of Scribe titles.' },
  { img: '/assets/RasheedahOwolabi.jpg',       name: 'Rasheedah Owolabi',  position: 'Accountant',                       bio: 'Since joining Scribe in 2022, Rasheedah has risen to Accountant in the Finance Department. While her love of numbers is undeniable, Rasheedah\'s true passion lies in the creative realm.' },
  { img: '/assets/LianneEstabillo.jpg',        name: 'Lianne Estabillo',   position: 'Publishing Operations Assistant',  bio: 'Lianne joined Scribe to support the Publishing Operations team. She focuses on book launch and publishing, helping coordinate the details that bring each title to market smoothly.' },
  { img: '/assets/WinstonChirume.jpg',         name: 'Winston Chirume',    position: 'AI Automation Associate',          bio: 'Winston joined Scribe as the AI Automation Associate. He builds and refines the systems that streamline how Scribe works, making everyday processes faster and more efficient.' },
  { img: '/assets/EricJorgenson.jpg', name: 'Eric Jorgenson', position: 'Author In Residence', bio: 'Eric published two books with Scribe prior to becoming CEO. The Almanack of Naval Ravikant has sold over 1,000,000 copies, been translated into 30+ languages, and seen over 4,000,000 digital copies given away for free.' },
  { img: '/assets/SievaXavier.jpg',            name: 'Sieva Kozinsky',     position: 'Partner, Enduring Ventures',       bio: 'Sieva Kozinsky co-founded multiple companies in the education space. Together with Xavier Helgesen, he manages Enduring Ventures, a long-term holding company and majority owner of Scribe.' },
  { img: '/assets/SievaXavier.jpg',            name: 'Xavier Helgesen',    position: 'Partner, Enduring Ventures',       bio: 'Xavier Helgesen has decades of experience in the publishing industry, having co-founded Better World Books in 2002. Together with Sieva Kozinsky, he manages Enduring Ventures, majority owner of Scribe.' },
  { img: '/assets/tucker-max-headshot.jpg',    name: 'Tucker Max',         position: 'Co-Founder',                       bio: 'Scribe co-founder. Tucker does not currently have an official role with Scribe.' },
  { img: '/assets/zach-obront-headshot.png',   name: 'Zach Obront',        position: 'Co-Founder',                       bio: 'Scribe co-founder. Zach does not currently have an official role with Scribe.' },
]

function getInitials(name) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? parts[parts.length - 1][0] : ''
  return (first + last).toUpperCase()
}

function TeamCard({ member }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="team-card">
      <div className="team-card__img-wrap">
        <img
          src={member.img}
          alt={member.name}
          className="team-card__img"
          loading="lazy"
          width="352"
          height="352"
        />
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{member.name}</h3>
        <p className="team-card__position">{member.position}</p>
        <p className="team-card__bio" style={expanded ? { display: 'none' } : {}}>{member.bio}</p>
        {expanded && <p className="team-card__bio-full">{member.bio}</p>}
        <button className="team-card__toggle" onClick={() => setExpanded(e => !e)}>
          {expanded ? 'Show less' : 'Read more'}
        </button>
      </div>
    </div>
  )
}

export default function TeamGrid() {
  const [query, setQuery] = useState('')
  const filtered = query
    ? team.filter(m =>
        m.name.toLowerCase().includes(query.toLowerCase()) ||
        m.position.toLowerCase().includes(query.toLowerCase())
      )
    : team

  return (
    <>
      <div className="team-search-wrap">
        <svg className="team-search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" aria-hidden="true">
          <path fill="currentColor" d="M229.66 218.34l-50.07-50.07a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.31ZM40 112a72 72 0 1 1 72 72 72.08 72.08 0 0 1-72-72Z"/>
        </svg>
        <input
          type="text"
          className="team-search"
          placeholder="Search by name or position..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>

      <p className="team-page__count">
        {filtered.length} team member{filtered.length !== 1 ? 's' : ''}
      </p>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {filtered.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#9ca3af', padding: '2rem 0' }}>No team members match your search.</p>
        ) : (
          <div className="team-grid">
            {filtered.map(member => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        )}
      </div>
    </>
  )
}
