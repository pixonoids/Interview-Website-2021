import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="page-box">
      <div className="success-message">
        <i className="far fa-check-circle"></i>&nbsp;&nbsp;
        <h1>Success!!</h1>
      </div>
      <div className="para">
        You have successfully completed the form submission.
      </div>
      <div className="info-box">
        <div className="whatsapp-group-info">
          <h1 className="whats-app-icon">
            <i className="fab fa-whatsapp"></i>
          </h1>
          &nbsp;&nbsp;<p>Join the whatsapp group for further updates.</p>
        </div>
        <div className="other-info ">
          <p className="query">For any queries contact</p>
          <p>
            <i className="fas fa-phone-alt"> </i>&nbsp;&nbsp;Aditya Devlash:
            7018431104
          </p>
          <p>
            <i className="fas fa-phone-alt"> </i>&nbsp;&nbsp;Vyomender Mehta:
            6283011264
          </p>
        </div>
      </div>
      <footer>
        <div className="footer-content">
          <div className="pixo"> PIXONOIDS © 2K22</div>
          <div className="links">
            <div className="icon-box-insta">
              <a href="https://www.instagram.com/pixonoids/" target="blank">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="icon-box-yt">
              {" "}
              <a href="https://www.youtube.com/c/pixonoids" target="blank">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div className="icon-box-linkedin">
              <a
                href="https://www.linkedin.com/company/pixonoids/"
                target="blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div className="icon-box-facebook">
              <a href="www.google.com" target="blank">
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
