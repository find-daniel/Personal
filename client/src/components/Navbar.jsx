import React from 'react';
import '../styles.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar justify-content-between">
        <div className="navbar-brand">Daniel Sanchez</div>
        <div className="buttons d-flex justify-content-around col-sm-5">
          <button className="btn-outline-dark">About</button>
          <button className="btn-outline-dark">Portfolio</button>
          <button className="btn-outline-dark">Contact</button>
        </div>
      </div>
    )
  }
}

export default Navbar;