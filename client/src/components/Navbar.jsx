import React from 'react';
import '../styles.css';
import '../styles.scss';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar justify-content-around test">
        <div className="navbar-brand col-sm-2">Daniel Sanchez</div>
        <div className="buttons d-flex justify-content-around offset-sm-6 col-sm-3">
          <button className="btn-sm btn-outline-dark col-sm-3">About</button>
          <button className="btn-sm btn-outline-dark col-sm-3">Portfolio</button>
          <button className="btn-sm btn-outline-dark col-sm-3">Contact</button>
        </div>
      </div>
    )
  }
}

export default Navbar;