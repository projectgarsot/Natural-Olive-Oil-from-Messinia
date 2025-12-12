import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Process from './components/Process';
import Quality from './components/Quality';
import LegalInfo from './components/LegalInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        <Hero />
        <About />
        <Process />
        <Quality />
        <LegalInfo />
      </main>

      <Footer />
    </div>
  );
}

export default App;