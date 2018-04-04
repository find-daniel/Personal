import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import wayfare from '../images/wayfare.png';

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollableAnchor id="portfolio">
        <section className="container-fluid portfolio">
          <div>
            <h2 className="header-text">Portfolio</h2>
          </div>
          <div className="portfolio-grid">
            <div className="card project col-lg-3 col-sm-10">
              <img src={wayfare} className="card-img-top" alt="Wayfare"/>
              <div className="card-body">
                <h5 className="card-title">Wayfare</h5>
                <p className="card-text"> Work-stay app for travelers looking to barter skills/services in return for lodging. </p>
                <div className="text-center">
                  <a href="" className="btn button btn-outline-dark btn-sm">See the Code</a>
                </div>
              </div>
            </div>
            <div className="card project col-lg-3 col-sm-10">
              <div className="card-body">
                <h5 className="card-title">Codesling.io</h5>
                <p className="card-text"> Typeracer for algo challenges - see who can solve the problem first! </p>
                <div className="text-center">
                  <a href="" className="btn button btn-outline-dark btn-sm">See the Code</a>
                </div>
              </div>
            </div>
            <div className="card project col-lg-3 col-sm-10">
              <div className="card-body">
                <h5 className="card-title">FoodThoughts</h5>
                <p className="card-text"> Platform for searching and reviewing restaurants.  </p>
                <div className="text-center">
                  <a href="" className="btn button btn-outline-dark btn-sm">See the Code</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
    )
  }
}

export default Portfolio;