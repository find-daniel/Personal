import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="contact">
        <div className="container-fluid contact test">
          <div>
            <h2 className="header-text">Contact Me</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;