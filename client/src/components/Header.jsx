import React from 'react';
import '../styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid jumbotron-custom">
        <div className="jumbotron-text container">
          <h1 className="display-4 animated fadeInUp">Hello, I'm Daniel</h1>
          <p className="lead animated fadeInUp">Fullstack Web Developer & UI / UX Enthusiast</p>
        </div>
        <div className="container goDown animated fadeInUp">
          <a href="#about">
            <span className="far fa-arrow-alt-circle-down fa-3x" color="#FFF"></span>
          </a>
        </div>
      </div>
    )
  }
}

export default Header;