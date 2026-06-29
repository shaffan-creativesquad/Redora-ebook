import './success-stories.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import StoriesGrid from './StoriesGrid'
import storiesData from './stories.json'

export const metadata = {
  title: 'Author Success Stories | Scribe Media',
  description: 'Real authors. Real results. See how Scribe helped them write, publish, and leverage their books.',
}

const FIXED_120 = new Set([
  "/authors/adam-coffey","/authors/alex-gurevich","/authors/ali-katz","/authors/andrew-mioch",
  "/authors/ari-meisel","/authors/bill-keen","/authors/bob-moesta","/authors/brian-keating",
  "/authors/brian-reese","/authors/brian-scudamore","/authors/brita-long","/authors/cameron-herold",
  "/authors/cedric-nash","/authors/chad-willardson","/authors/chasta-hamilton","/authors/christopher-peer",
  "/authors/clint-emerson","/authors/david-allison","/authors/david-goggins","/authors/david-kashmer",
  "/authors/david-smith","/authors/david-weaver","/authors/dds-dobson-smith","/authors/deb-gabor",
  "/authors/debra-wanger","/authors/dustan-woodhouse","/authors/eric-jorgenson","/authors/frederick-vallaeys",
  "/authors/geoff-blades","/authors/grant-botma","/authors/greg-giuliano","/authors/greg-hiebert",
  "/authors/greg-smith","/authors/ian-hallett","/authors/isabelle-nussli","/authors/jackie-insinger",
  "/authors/jacky-budweg","/authors/james-beshara","/authors/james-carbary","/authors/james-maskell",
  "/authors/james-robert-lay","/authors/janice-bryant-howroyd","/authors/jason-fladlien","/authors/jason-lazarus",
  "/authors/jason-portnoy","/authors/jawad-ahsan","/authors/jayson-waller","/authors/jeff-hyman",
  "/authors/jeff-kavanaugh","/authors/jeff-meyerson","/authors/jeremy-burrows","/authors/jeremy-keeshin",
  "/authors/jess-lenouvel","/authors/jesse-cole","/authors/jim-klopman","/authors/joe-valley",
  "/authors/joey-korenman","/authors/john-hittler","/authors/john-reid","/authors/john-ruhlin",
  "/authors/john-sardella","/authors/jon-macdonald","/authors/jonathan-levi","/authors/jonathan-d-bird",
  "/authors/jonathan-siegel","/authors/jorge-p-newbery","/authors/josh-turner","/authors/joshua-mantz",
  "/authors/joshua-miller","/authors/jr-robles","/authors/jt-mccormick","/authors/justin-elrod",
  "/authors/kain-ramsay","/authors/karalynn-cromeens","/authors/katie-happyy","/authors/kayvan-kian",
  "/authors/ken-falke","/authors/kyle-thiermann","/authors/laurens-bensdorp","/authors/leah-dean",
  "/authors/lisa-ann","/authors/lorenzo-gomez","/authors/marco-krohn","/authors/mark-cawley",
  "/authors/mark-evans","/authors/michael-erath","/authors/michael-lynch","/authors/michael-sarraille",
  "/authors/monty-moran","/authors/nathan-pettijohn","/authors/nathaniel-eliason","/authors/nneka-unachukwu",
  "/authors/pam-marmon","/authors/patti-temple-rocks","/authors/paul-durso","/authors/paul-zak",
  "/authors/phillip-stutts","/authors/regan-hillyer","/authors/richard-thalheimer","/authors/robert-althuis",
  "/authors/robert-glazer","/authors/robin-farmanfarmaian","/authors/ron-lovett","/authors/ron-thurston",
  "/authors/sam-lacrosse","/authors/sean-mcdade","/authors/shannon-susko","/authors/shin-fujiyama",
  "/authors/shiv-narayanan","/authors/steve-sims","/authors/steve-thompson","/authors/thomas-epperson",
  "/authors/tim-kintz","/authors/tracy-thomas","/authors/tucker-max","/authors/yan-li",
  "/authors/yanely-espinal","/authors/yarona-boster","/authors/yusuf-moolla","/authors/yuzheng-sun",
])

const stories = storiesData.stories.filter(s => {
  if (!s.author) return false
  const slug = s.author.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')
  return FIXED_120.has('/authors/' + slug)
})

export default function SuccessStoriesPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>
        <section className="ss-page">
          <div className="ss-page__header">
            <h1 className="ss-page__heading">Author Success Stories</h1>
            <p className="ss-page__subheading">
              Real authors. Real results. See how Scribe helped them write, publish, and leverage their books.
            </p>
          </div>
          <StoriesGrid stories={stories} />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}

