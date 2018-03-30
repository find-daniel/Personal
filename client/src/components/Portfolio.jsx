import React from 'react';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="portfolio">
        <div className="container-fluid portfolio test">
          <div>
            <h2 className="header-text">Portfolio</h2>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio;