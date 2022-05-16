import React from 'react'
import TopSection from '../components/home/TopSection'

const Home = () => {
  return (
    <div className="home">
      <section className="home__top-section">
        <TopSection />
      </section>
      <section>
        <h1>section1</h1>
      </section>
      <section>
        <h1>section2</h1>
      </section>
      <section>
        <h1>section3</h1>
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