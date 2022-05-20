import React from 'react'
import About from '../components/home/About'
import Contact from '../components/home/Contact'
import Skills from '../components/home/Skills'
import TopSection from '../components/home/TopSection'

const Home = () => {
  return (
    <div className="home">
      <section className="home__top-section">
        <TopSection />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <h1>section4</h1>
      </section>
      <section>
        <h1>section4</h1>
      </section>
      <section>
        <Contact />
      </section>
    </div>
  )
}

export default Home