import React from 'react';
import About from '../components/about/About';
import Contact from '../components/contact/Contact';
import TopSection from '../components/home/TopSection';
import Skills from '../components/skills/Skills';

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
        <h1>section3</h1>
      </section>
      <section>
        <h1>section4</h1>
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default Home;
