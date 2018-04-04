import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <section id="footer">
        <footer className="container-fluid footer">
          <div className="col-sm-5">
            <div className="social-icons-box">
              <div className="social-icon linkedin">
                <a href="https://www.linkedin.com/in/danielsanr/" target="_blank">
                  <span class="fab fa-linkedin-in" color="#FFF"></span>
                </a>
              </div>
              <div className="social-icon github">
                <a href="https://github.com/find-daniel" target="_blank">
                  <span class="fab fa-github" color="#FFF"></span>
                </a>
              </div>
              <div className="social-icon facebook">
                <a href="https://www.facebook.com/danielsanchez.io" target="_blank">
                  <span class="fab fa-facebook-f" color="#FFF"></span>
                </a>
              </div>
              <div className="social-icon instagram">
                <a href="https://www.instagram.com/mr.danielsanchez/" target="_blank">
                  <span class="fab fa-instagram" color="#FFF"></span>
                </a>
              </div>
              <div className="social-icon spotify">
                <a href="https://open.spotify.com/user/126537593?si=eRKi_u7EQomQ3BRg6EL94Q" target="_blank">
                  <span class="fab fa-spotify" color="#FFF"></span>
                </a>
              </div>
            </div>
            <p className="small-text"> © Daniel Sanchez 2018 </p>
          </div>
        </footer>
      </section>
    )
  }
}

export default Footer;