import React from "react";

const features = [
  {
    title: "No more screening or scheduling:",
    text: "We take care of the time-consuming steps for you. From screening and shortlisting candidates to coordinating and scheduling interviews, BiteX ensures you only meet with the most qualified talent.",
  },
  {
    title: "No more payroll responsibilities:",
    text: "We administer all payroll services, as all hires remain on the BiteX payroll. Our employers receive only a monthly invoice, and payment only begins when a candidate starts their placement.",
  },
  {
    title: "No more commitments:",
    text: "Employers can assess the employer-employee fit without any obligation beyond the agreed-upon contract. If an employer retains a candidate as a full-time employee, there is no finder’s fee.",
  },
];


const ChooseUs = () => {
  return (
    <section className="choose-us">
      <div className="choose-overlay"></div>

      <div className="choose-container">
        <div className="left-section">
          <h2>Why Choose BiteX?</h2>
        </div>

        <div className="right-section">
          <div className="top-line">
            <span>Why we're different</span>
            <div className="line"></div>
          </div>

          <div className="features-grid">
            {features.map((item, index) => (
              <div className="feature-card" key={index}>
                <div className="icon">✔</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;