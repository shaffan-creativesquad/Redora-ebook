import './author-resources-library.css'
import Navbar from '@/components/Navbar'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Author Resources Library | Scribe Media',
  description: 'Practical guides, how-tos, and recommended reading from the Scribe Media team. Everything you need to plan, write, publish, and launch your book.',
}

export default function AuthorResourcesLibraryPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" style={{ paddingTop: '84px' }}>

        <div className="rl-banner">
          <div className="rl-banner__inner">
            <p className="rl-banner__text">Ready to write your book? Schedule a free consultation with our Author Strategist.</p>
            <a href="/book-consultation" className="rl-banner__btn">Book a Free Consultation</a>
          </div>
        </div>

        <div className="rl-page-wrap">
          <div className="rl-page">
            <h1 className="rl-page__title">Author Resources Library</h1>
            <p className="rl-page__subtitle">Practical guides, how-tos, and recommended reading from the Scribe Media team. Everything you need to plan, write, publish, and launch your book.</p>

            <div className="rl-section">
              <h2 className="rl-section__heading">How-To Guides and Author Tips</h2>
              <p className="rl-section__intro">Practical, step-by-step articles on writing craft, audiobook production, publishing paths, book marketing, and more.</p>
              <ul className="rl-list">
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/3-secrets-to-writing-a-book-people-cant-stop-recommending">3 Secrets To Writing A Book People Cant Stop Recommending</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/authors-guides-interviewing">A Guide for Authors: How to Prepare for Your Scribe Interview</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/audiobook-production-companies">Audiobook Production Companies</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/audiobooks-who-benefits-most-and-why-authors-should-consider-them">Audiobooks Who Benefits Most And Why Authors Should Consider Them</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/book-launch-content-calendar">Book Launch Content Calendar</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/book-launch-social-media-campaign">Book Launch Social Media Campaign</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/book-publishers-versus-course-businesses">Book Publishers Versus Course Businesses</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/choosing-between-narrating-your-own-audiobook-or-hiring-a-professional">Choosing Between Narrating Your Own Audiobook Or Hiring A Professional</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/day-book-published">Day Book Published</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/ebook-metadata">Ebook Metadata</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/engage-book-launch-audience">Engage Book Launch Audience</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/entrepreneur-startup-assumptions">Entrepreneur Startup Assumptions</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/exploring-when-audiobooks-might-not-be-the-right-fit-for-authors">Exploring When Audiobooks Might Not Be The Right Fit For Authors</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/financial-advisor-book">Financial Advisor Book</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/help-with-writing-a-book">Help With Writing A Book</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/hemingway-app-review">Hemingway App Review</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/how-a-small-inventors-patents-may-prove-apple-pay-was-built-on-stolen-ideas">How a Small Inventor&apos;s Patents May Prove Apple Pay Was Built on Stolen Ideas</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/how-to-become-a-published-author">How To Become A Published Author</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/how-to-co-author-book">How To Co Author Book</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/how-to-find-a-publisher-for-my-book">How To Find A Publisher For My Book</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/how-to-know-if-your-book-idea-is-original">How To Know If Your Book Idea Is Original</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/how-to-make-my-application-stand-out">How To Make My Application Stand Out</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/how-to-use-ai-when-writing-a-book">How To Use Ai When Writing A Book</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/how-to-write-a-motivational-book">How To Write A Motivational Book</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/how-to-write-a-synopsis">How To Write A Synopsis</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/how-to-write-an-autobiography">How To Write An Autobiography</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/hugh-howey-hero-of-self-publishing-the-story-of-wool">Hugh Howey Hero Of Self Publishing The Story Of Wool</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/hybrid-book-publishers">Hybrid Book Publishers</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/i-have-an-idea-for-a-book-but-need-someone-to-write-it">I Have An Idea For A Book But Need Someone To Write It</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/literary-devices">Literary Devices</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/memoir-ghostwriter">Memoir Ghostwriter</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/memoir-outline">Memoir Outline</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/new-publishing-playbook">New Publishing Playbook</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/part-2-a-new-third-option-professional-publishing-as-the-future-of-book">Part 2 A New Third Option Professional Publishing As The Future Of Book</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/part-3-finding-your-author-identity">Part 3 Finding Your Author Identity</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/part-4-18-prove-strategies-to-boost-your-book-sales">Part 4 18 Prove Strategies To Boost Your Book Sales</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/should-you-narrate-your-own-audiobook-or-hire-a-professional">Should You Narrate Your Own Audiobook Or Hire A Professional</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/starting-a-business-book">Starting A Business Book</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/the-finances-of-self-publishing-vs-traditional-publishing">The Finances Of Self Publishing Vs Traditional Publishing</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/the-power-of-alt-text-enhancing-accessibility-in-audiobooks">The Power Of Alt Text Enhancing Accessibility In Audiobooks</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/traditional-publishing-versus-self-publishing">Traditional Publishing Versus Self Publishing</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/vellum-software">Vellum Software</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/what-its-like-working-with-scribe-a-behind-the-scenes-look-at-the-self-publishing-experience">What Its Like Working With Scribe A Behind The Scenes Look At The Self Publishing Experience</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/why-scribe-media-is-the-best-choice-for-audiobook-production">Why Scribe Media Is The Best Choice For Audiobook Production</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/write-a-business-book">Write A Business Book</a></li>
                <li className="rl-list__item"><a className="rl-list__link" href="/blog/writing-motivation">Writing Motivation</a></li>
              </ul>
            </div>

            <div className="rl-section">
              <h2 className="rl-section__heading">Author Success Stories</h2>
              <p className="rl-section__intro">Read real-world results from Scribe authors who built businesses, careers, and credibility around their books.</p>
              <a className="rl-cta" href="/success-stories">
                <h3 className="rl-cta__title">Browse all 85 Scribe Author Success Stories &rarr;</h3>
                <p className="rl-cta__text">Filter by goal, industry, or theme to find stories that match your situation.</p>
              </a>
            </div>

          </div>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
