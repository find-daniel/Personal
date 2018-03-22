import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid jumbotron-custom">
        <h1 className="display-4">Hello, I'm Daniel</h1>
        <p className="lead">Fullstack Web Developer, UI / UX Enthusiast</p>
      </div>
    )
  }
}

export default Header;