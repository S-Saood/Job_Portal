import React from 'react'

function Footer() {
  return (
    <div>
      {/* footer-start */}

      <footer className="footer-wrapper">

  

  {/* <!-- QUESTIONS --> */}
  <div className="questions-section">
    <h2>Questions?</h2>
    <button className="contact-btn">CONTACT US</button>
  </div>

  {/* <!-- BOTTOM FOOTER --> */}
  <div className="bottom-footer">
    <div className="footer-grid">

      <div className="footer-col">
        <h4>Mailing Address</h4>
        <p>
          1329 Queen Street East, Suite 136<br/>
          Toronto, ON M4L 1C6<br/>
          Canada
        </p>
        <p>
          Monday - Friday<br/>
          9:00 AM - 5:00 PM
        </p>
      </div>

      <div className="footer-col">
        <h4>Contact Us</h4>
        <p>Phone: 416.977.3343</p>
        <p>Toll-free: 1.888.507.3343</p>
        <p>Fax: 416.977.4090</p>
        <a href="#">saooddummy@gmail.com</a>
      </div>

      <div className="footer-col">
        <h4>CASL Policy</h4>
        <p>
          BiteX Organization’s India’s
          Anti-Spam Legislation Policy
        </p>
      </div>

    </div>

    <div className="footer-bottom-bar">
      <p>© 2026 BiteX. All rights reserved.</p>

    </div>
  </div>

</footer>
      {/* footer-End */}
    </div>
  )
}

export default Footer