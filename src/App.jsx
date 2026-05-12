import React from "react";
// import Card from "./components/Card.jsx";
// import jobs from './index.js'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
// import Main from './components/Main.jsx'
import ChooseUs from './components/Choseus.jsx'
import CandidatesCards from './components/CandidatesCards.jsx'
import JobCard from './components/JobCard.jsx'


function App() {
  return (
    <div className="app">
    <Header />
    <Hero />
    <CandidatesCards />
    <JobCard />
    <ChooseUs />
    <Footer />
    </div>
  );
}

export default App;

