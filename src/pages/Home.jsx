import React from 'react'
import About from '../components/home/About'
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
        <h1>section5</h1>
      </section>
    </div>
  )
}

export default Home