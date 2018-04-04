import React from 'react';
import resume from '../files/daniel-sanchez-resume.pdf'
import '../styles.scss';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section id="about" className="">
        <div className="container about">
          <div className="col-lg-4 about-left">
            <img className="img-fluid profile" src="https://i.imgur.com/UuUso61.png" alt="Photo of me"/>
          </div>
          <div className="col-lg-6 about-right">
            <h2 className="display-6 header-text">A little about me</h2>
            <hr/>
            <p className="small-text">
              I'm a software engineer with a passion for clean code and user experiences. 
              I enjoy living in the forefront of modern web technologies and am always looking for opportunities to expand my technical toolkit.
              Currently I create robust web apps utilizing modern front end frameworks such as React and Angular.
            </p>
            <p className="small-text">
              When I'm not coding you can find me rock climbing or archiving my life through <a href="https://www.instagram.com/mr.danielsanchez">photography</a>!
            </p>
            <a href={resume} download>
              <button className="button btn btn-outline-dark">
                Resume <i class="far fa-file-pdf"></i>
              </button>
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default About;