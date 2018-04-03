import React from 'react';
import '../styles.scss';
import bootstrap from '../images/bootstrap-solid.svg';
import webpack from '../images/webpack.svg';
import mysql from '../images/mysql.svg';

class Tech extends React.Component {
  render() {
    return (
      <section id="tech">
        <div className="tech test">
          <h2 className="header-text">Some tech I enjoy using</h2>
          <div className="container tech-box">
            <div className="tech-grid wireframe">
              <div className="tech-item">
                <span class="fab fa-js" title="Javascript ES6"></span>
              </div>
              <div className="tech-item">
                <span class="fab fa-react" title="React"></span>
              </div>
              <div className="tech-item">
                <span class="fab fa-angular" title="AngularJS"></span>
              </div>
              <div className="tech-item">
                <span class="fab fa-html5" title="HTML5"></span>
              </div>
              <div className="tech-item">
                <span class="fab fa-css3-alt" title="CSS3"></span>
              </div>
            </div>
            <div className="tech-grid wireframe">
              <div className="tech-item">
                <span class="fab fa-sass" title="SCSS"></span>
              </div>
              <div className="tech-item">
                <img className="icon" src={bootstrap} title="Bootstrap 4"/>
              </div>
              <div className="tech-item">
                <span class="fab fa-node-js" title="Node"></span>
              </div>
              <div className="tech-item">
                <span class="fab fa-git" title="Git"></span>
              </div>
              <div className="tech-item">
                <img className="icon" style={{height: '80px'}} src={webpack} title="Webpack"/>
              </div>
              <div className="tech-item">
                <img className="icon" style={{height: '100px', marginLeft: '-.5em', marginTop: '-10px'}} src={mysql} title="MySql"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Tech;