import '../cant-hurt-me/book.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: "The Leader's Algorithm | Scribe Media",
  description:
    "The Leader's Algorithm by Pablo Munoz — a strategic framework for developing a personal Theory of Action to transform your organization while positively impacting those who need you most.",
}

export default function TheLeadersAlgorithmPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <div className="book-detail-page">
          <div className="book-detail-page__inner">

            <Link href="/published-books" className="bd-back">
              <i className="ph ph-arrow-left"></i> Back to Published Books
            </Link>

            <div className="bd-layout">
              {/* ── Cover ── */}
              <div>
                <Image
                  src="/assets/PabloMunoz__EbookCover_EPUB_Final.jpg"
                  alt="The Leader's Algorithm"
                  width={300}
                  height={450}
                  className="bd-cover"
                  unoptimized
                  priority
                />
              </div>

              {/* ── Info ── */}
              <div>
                <h1 className="bd-title">The Leader&apos;s Algorithm</h1>
                <p className="bd-author">
                  by{' '}
                  <Link href="/authors/pablo-munoz" className="bd-author-link">
                    Pablo Munoz
                  </Link>
                </p>

                <div className="bd-rating">
                  <span className="bd-stars">★★★★★</span>
                  <span className="bd-rating-text">4.8 · 22 ratings on Amazon</span>
                </div>

                <div className="bd-bestseller">
                  <span className="bd-bestseller-icon">🏆</span>
                  Bestseller in Education Leadership
                </div>

                <h2 className="bd-section-title">About This Book</h2>
                <div className="bd-description">
                  <p>
                    Systems of all kinds resist change. Once an underperforming culture takes hold
                    in a school district, it will perpetuate until someone steps up.
                  </p>
                  <p>
                    When there are systemic problems, effective leaders must make systemic changes.
                    In <em>The Leader&apos;s Algorithm</em>, superintendent, managing director, and
                    consultant Pablo Muñoz outlines a strategic framework for developing a viable,
                    personal Theory of Action to transform your organization, work, and relationships
                    while positively impacting those who need you most.
                  </p>
                  <p>
                    From humble beginnings as a poor Puerto Rican kid, Muñoz harnessed the power of
                    education and dedicated his career to giving back. As an experienced changemaker
                    in educational leadership, his organized, deliberate application of materials
                    otherwise targeted to the business world have resulted in some of the best urban
                    school districts in New Jersey. With this book, Muñoz proves you can lead from
                    the heart because effective leadership is not only systems management; it&apos;s
                    an act of love.
                  </p>
                </div>

                <div className="bd-tags">
                  <span className="bd-tag">Business</span>
                  <span className="bd-tag">Leadership</span>
                  <span className="bd-tag">Business Management</span>
                </div>

                <div className="bd-actions">
                  <a
                    href="https://amzn.to/3wKleuR?tag=scribemedia0a-20"
                    className="bd-btn bd-btn--primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Buy on Amazon <span className="bd-btn__price">$9.99</span>
                  </a>
                  <Link href="/consult" className="bd-btn bd-btn--secondary">
                    Schedule a Consult
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ── Author section ── */}
        <div className="bd-author-section">
          <div className="bd-divider"></div>
          <div className="bd-author-layout">
            <Image
              src="/assets/Pablo-Munoz-Headshot.jpg"
              alt="Pablo Munoz"
              width={120}
              height={120}
              className="bd-author-photo"
            />
            <div>
              <p className="bd-author-label">About the Author</p>
              <h2 className="bd-author-name">
                <Link href="/authors/pablo-munoz">Pablo Munoz</Link>
              </h2>
              <div className="bd-author-bio">
                <p>
                  Pablo Muñoz is the Managing Director of Muñoz &amp; Company. As a
                  first-generation high school and college graduate, Pablo&apos;s personal experience
                  fuels his passion for creating high quality school systems. He was born and raised
                  in Elizabeth, New Jersey and is a product of the Elizabeth Public Schools. Pablo
                  graduated from Elizabeth High School in 1987 with academic and athletic accolades,
                  including an All-State selection in baseball. Passionate about supporting students,
                  he returned to Elizabeth after college, joining the faculty of Elizabeth High
                  School as a teacher of social studies. Over the next decade, Pablo ascended through
                  the ranks, serving as Supervisor of Social Studies, Director of Curriculum and
                  Instruction, and Assistant Superintendent, before becoming Superintendent of
                  Schools for the Elizabeth Public Schools in May 2005.
                </p>
                <p>
                  As Superintendent, one of Pablo&apos;s first priorities was to expand and improve
                  the dialogue between the school system and the community. He introduced roundtable
                  discussions with team members to identify areas of success and concern. He
                  conducted town hall forums, in which he addressed any and all inquiries from
                  parents and community members. The product of this input was Pablo&apos;s
                  signature &ldquo;Keys to Excellence Strategic Plan,&rdquo; which set forth the
                  district&apos;s vision, mission, priorities, theory of action, and core beliefs.
                  The results of this initiative were evident in that during his tenure, the
                  Elizabeth Public Schools were consistently considered among the best urban
                  districts in the State of New Jersey.
                </p>
                <p>
                  In addition to performing his duties as Superintendent, Pablo continued to hone
                  his leadership ability through professional development and involvement in the
                  educational community. He is a 2006 graduate of the elite Broad Foundation
                  Superintendent&apos;s Academy and from 2009 to 2013, Pablo was proud to serve as
                  an advisor to the Hispanic-Serving School Districts Advisory Council of the
                  Hispanic Association of Colleges and Universities.
                </p>
                <p>
                  Pablo is honored to have been recognized as the 2008 Union County School
                  Superintendent of the Year by the Gateway Regional Chamber of Commerce in New
                  Jersey and named as one of the George Lucas Educational Foundation&apos;s 2008
                  Daring Dozen &ndash; a prestigious group of twelve educators &ldquo;who are
                  reshaping the future of education.&rdquo;
                </p>
                <p>
                  During his 8-year tenure, Pablo led a significant overhaul of the district,
                  resulting in three National Blue Ribbon School awards from the US Department of
                  Education. He oversaw a significant high school transformation effort culminating
                  in the recognition of two Elizabeth high schools at the state and national levels
                  for commitment to preparing students for college with ranking among the best in
                  the state by U.S. News and World Report, Newsweek, and The Washington Post
                  Challenge Index.
                </p>
                <p>
                  In 2013, Pablo took the next step in his career and accepted the position of
                  Superintendent of Schools for the Passaic Public Schools. In his first year, he
                  began a significant reorganization and led the development of setting the district
                  vision and mission. In subsequent years, Pablo continued apace, working with the
                  Passaic Board of Education to adopt the &ldquo;Theory of Action: An Aligned
                  Instructional System,&rdquo; a policy developed to ensure that a framework for
                  district priorities, policies, and decisions would support the business of
                  teaching and learning.
                </p>
                <p>
                  As a result of this synergistic collaboration, Pablo implemented a realignment and
                  restructuring of the schools &ndash; creating 10 K-8 neighborhood schools, two
                  6-12 magnet schools, and eliminating the middle school. In addition, he created 3
                  new schools with innovative instructional programs: Passaic Gifted and Talented
                  Academy (grades 2-8), Passaic Preparatory Academy (grades 6-12), and Passaic
                  Academy for Science and Engineering (grades 6-12).
                </p>
                <p>
                  In a successful effort to reduce overcrowding, Pablo led the initiative to acquire
                  critical spaces that added 35 new classrooms to the district. Since 2014, the
                  district has offered before-, after-, and summer school programs that encompass
                  academic, enrichment, and athletic opportunities. In 2015, the Passaic Gifted and
                  Talented Academy opened, providing 875 seats for students gifted in academics,
                  physical education, and the performing and visual arts. Less than three years
                  later, Passaic Public Schools was designated as a model Bilingual Program for
                  Grades K-8, as part of the New Jersey Department of Education&apos;s Model
                  Programs Initiative.
                </p>
                <p>
                  At the middle and high school levels, Advancement Via Individual Determination
                  (AVID) courses are now preparing students for college. Pablo led a commitment to
                  providing every student the opportunity to graduate high school with 15 college
                  credits, a career certification, or both. This resulted in an Early College
                  program that led to dramatic increases in Advanced Placement and dual enrollment
                  college course offerings, as well as strengthened partnerships with local colleges
                  and universities. These investments are now paying dividends - in 2021, Passaic
                  graduated its first students with a high school diploma and a college
                  associate&apos;s degree.
                </p>
                <p>
                  After retiring from the Passaic Public Schools in 2021, Pablo became a John
                  Maxwell Team Member. Pablo uses the leadership techniques garnered as a John
                  Maxwell Team certified coach, teacher, trainer, and speaker to complement and
                  enhance the profound experiences he has acquired throughout his career in academia.
                  This allows him to create a unique mix of workshops, seminars, keynote speaking,
                  and coaching for his clients, aiding their personal and professional growth.
                </p>
                <p>
                  Pablo graduated from Yale University in 1991 with a Bachelor of Arts in Psychology
                  and Ivy League pitching honors. A lifelong athlete and sports fan, he has coached
                  baseball at all levels from little league to professional, having been a minor
                  league pitching coach with the Chicago Cubs. After Yale, Pablo continued his
                  education at Teachers College, Columbia University where he earned a Master of
                  Arts in Educational Administration in 1996.
                </p>
                <p>
                  Pablo is gratified by his professional accomplishments, but he is most proud of
                  his family. He is the son of Luz and Pablo Muñoz, both originally from Aguada,
                  Puerto Rico. He is the proud dad of two daughters. Pablo is passionate about
                  leadership development, and the crucial role it plays in fostering academic
                  success. He ardently believes that with the right educational opportunities, every
                  student has the potential to succeed.
                </p>
                <p>Pulled from</p>
              </div>
              <Link href="/authors/pablo-munoz" className="bd-author-link">
                View full profile →
              </Link>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
