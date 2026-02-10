import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import CV from './components/CV';
import Contact from './components/Contact';
import MatrixBackground from './components/MatrixBackground';

function App() {
  return (
    <div className="App">
      <MatrixBackground />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CV />
      <Contact />
    </div>
  );
}

export default App;