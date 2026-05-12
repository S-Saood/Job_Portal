import React from "react";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>

      <div className="hero-content">
        <h1>
          FIND TOP <br />
          TALENT READY <br />
          TO MAKE AN <br />
          IMPACT
        </h1>

        <p>
          Are you struggling with lengthy hiring processes and unqualified
          candidates? Career Edge connects you directly with motivated,
          job-ready talent prepared to contribute from day one.
        </p>

        <button>REQUEST MORE INFORMATION</button>

        <div className="share">
          <span>↗</span> Share
        </div>
      </div>
    </section>
  );
};

export default HeroSection;