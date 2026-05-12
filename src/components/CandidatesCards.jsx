import React from "react";

import {
  FaGraduationCap,
  FaWheelchair,
  FaShieldAlt,
  FaGlobeAmericas,
  FaPlusCircle,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaGraduationCap />,
    title: "RECENT GRADUATES",
  },
  {
    icon: <FaWheelchair />,
    title: "PEOPLE WITH SELF-DECLARED DISABILITIES",
  },
  {
    icon: <FaShieldAlt />,
    title: "CO-OP STUDENTS",
  },
  {
    icon: <FaGlobeAmericas />,
    title: "SKILLED NEWCOMERS TO CANADA",
  },
];

const CandidatesCards = () => {
  return (
    <section className="candidates-section">
      <div className="section-heading">
        <div className="line"></div>
        <h2>Our Candidates</h2>
        <div className="line"></div>
      </div>

      <div className="cards-grid">
        {cards.map((card, index) => (
          <div className="card-wrapper" key={index}>
            <div className="candidate-card">
              <div className="card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
            </div>

            <div className="card-footer">
              <FaPlusCircle />
              <span>Meet a candidate!</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CandidatesCards;