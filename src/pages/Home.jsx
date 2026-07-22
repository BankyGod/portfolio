import {
  site,
  about,
  projects,
  skills,
  experience,
} from '../data/portfolio'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Work from '../components/Work'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-svh bg-canvas">
      <Navbar name={site.name} resumeUrl={site.resumeUrl} />
      <div className="lg:pl-[13.5rem]">
        <main>
          <Hero site={site} />
          <Work projects={projects} />
          <About about={about} />
          <Skills skills={skills} />
          <Experience experience={experience} />
          <Contact site={site} />
        </main>
        <Footer name={site.name} />
      </div>
    </div>
  )
}
