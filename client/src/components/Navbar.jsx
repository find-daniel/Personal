import React from 'react';
import '../styles.css';
import '../styles.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="nav">
        <nav className="navbar navbar-custom navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <div className="navbar-header">
              <a href="#top" className="navbar-brand">Daniel Sanchez</a>
            </div>
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarToggle" aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse justify-content-end" id="navbarToggle">
              <ul className="nav navbar-nav justify-content-around">
                <li className="nav-li">
                  <a className="nav-btn" href="#about">About</a>
                </li>
                <li className="nav-li">
                  <a className="nav-btn" href="#tech">Tech</a>
                </li>
                <li className="nav-li">
                  <a className="nav-btn" href="#portfolio">Portfolio</a>
                </li>
                <li className="nav-li">
                  <a className="nav-btn" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div> 
        </nav>
      </section>
    )
  }
}

export default Navbar;