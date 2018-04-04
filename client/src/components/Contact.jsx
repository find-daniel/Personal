import React from 'react';
import '../styles.scss';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="contact">
        <div className="container-fluid contact test">
          <h2 className="header-text">Contact Me</h2>
          <div className="container d-flex justify-content-center">
            <div className="contact-body col-sm-5">
              <div className="text-center">
                <p className="small-text">
                  I'm currently open to new opportunities!
                  Feel free to shoot me an email if you wanna chat or let me know how I can help you.
                </p>
              </div>
              <div className="text-center">
                <a href="mailto:atlow.archive@gmail.com">
                  <button className="button btn-outline-dark btn-lg col-sm-4">
                    <span className="far fa-paper-plane fa-lg"></span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;