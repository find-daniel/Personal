import React from 'react';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="about" className="">
        <div className="container test about">
          <div className="col-lg-4 wireframe">
            <img className="img-fluid profile" src="https://i.imgur.com/UuUso61.png" alt="Photo of me"/>
          </div>
          <div className="col-lg-6 wireframe">
            <h1>A little about me</h1>
            <p>about me text</p>
          </div>
        </div>
      </section>
    )
  }
}

export default About;